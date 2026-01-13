/**
 * ToddlyTunes - Game Controller
 * Orchestrates the game flow between components
 */

import { settings } from './settings.js';
import { audioEngine } from './audio.js';
import { PianoKeyboard } from './piano.js';
import { MusicBook } from './music-book.js';
import { getSongById, getSongOctaveRange, getSongRangeCenter } from '../data/songs.js';

class GameController {
    constructor() {
        this.piano = null;
        this.musicBook = null;
        this.currentSong = null;
        this.isPlaying = false;
        this.isComplete = false;

        // Callbacks
        this.onSongComplete = null;
        this.onNoteCorrect = null;
        this.onNoteIncorrect = null;
    }

    /**
     * Initialize the game with DOM elements
     */
    init(pianoContainer, musicBookContainer) {
        // Create components
        this.piano = new PianoKeyboard(pianoContainer);
        this.musicBook = new MusicBook(musicBookContainer);

        // Wire up note play callback
        this.piano.onNotePlay = (noteStr) => this.handleNotePlayed(noteStr);

        // Listen for settings changes to update highlights
        settings.onChange((key) => {
            if (key === 'lookaheadSteps') {
                this.updateHighlights();
            }
        });
    }

    /**
     * Load and start a song
     */
    loadSong(songId) {
        const song = getSongById(songId);
        if (!song) {
            console.error(`Song not found: ${songId}`);
            return false;
        }

        this.currentSong = song;
        this.isPlaying = true;
        this.isComplete = false;

        // Save as last played song
        settings.set('lastSongId', songId);

        // Load into music book
        this.musicBook.loadSong(song);

        // Calculate visual center and scroll piano
        const centerNote = getSongRangeCenter(song);
        this.piano.centerOn(centerNote);

        // Update highlights
        this.updateHighlights();

        // Update header title
        const titleEl = document.getElementById('songTitle');
        if (titleEl) {
            titleEl.textContent = song.title;
        }

        return true;
    }

    /**
     * Handle a note being played
     */
    handleNotePlayed(noteStr) {
        if (!this.isPlaying || this.isComplete) return;

        const expectedNote = this.musicBook.getCurrentNote();

        if (!expectedNote) return;

        // Check if correct (ignoring rests)
        if (expectedNote === 'rest') {
            // Auto-advance through rests
            this.advanceNote();
            return;
        }

        const isCorrect = noteStr === expectedNote;

        if (isCorrect) {
            // Show correct feedback
            this.piano.showFeedback(noteStr, true);

            if (this.onNoteCorrect) {
                this.onNoteCorrect(noteStr);
            }

            // Advance to next note
            this.advanceNote();
        } else {
            // Show incorrect feedback
            this.piano.showFeedback(noteStr, false);

            if (this.onNoteIncorrect) {
                this.onNoteIncorrect(noteStr, expectedNote);
            }
        }
    }

    /**
     * Advance to the next note
     */
    advanceNote() {
        const hasMore = this.musicBook.advance();

        if (!hasMore) {
            // Song complete!
            this.handleSongComplete();
        } else {
            // Update highlights for new position
            this.updateHighlights();

            // Skip rests automatically
            const currentNote = this.musicBook.getCurrentNote();
            if (currentNote === 'rest') {
                setTimeout(() => this.advanceNote(), 300);
            }
        }
    }

    /**
     * Update highlights on both piano and music book
     */
    updateHighlights() {
        if (!this.isPlaying) return;

        const notes = this.musicBook.getLookaheadNotes();

        // Filter out rests for piano highlighting
        const playableNotes = notes.filter(n => n !== 'rest');

        this.piano.setHighlights(playableNotes);
    }

    /**
     * Handle song completion
     */
    handleSongComplete() {
        this.isComplete = true;
        this.isPlaying = false;

        // Clear piano highlights
        this.piano.clearHighlights();

        // Brief delay before celebration to let the final note ring
        setTimeout(() => audioEngine.playCelebration(), 500);

        // Show completion in music book
        this.musicBook.showCompletion();

        // Add celebrating class to app
        const app = document.getElementById('app');
        if (app) {
            app.classList.add('celebrating');
            setTimeout(() => app.classList.remove('celebrating'), 500);
        }

        // Set up play again button
        const playAgainBtn = document.getElementById('playAgainBtn');
        if (playAgainBtn) {
            playAgainBtn.addEventListener('click', () => {
                this.restart();
            });
        }

        if (this.onSongComplete) {
            this.onSongComplete(this.currentSong);
        }
    }

    /**
     * Restart current song
     */
    restart() {
        if (!this.currentSong) return;

        this.loadSong(this.currentSong.id);
    }

    /**
     * Stop the current game
     */
    stop() {
        this.isPlaying = false;
        this.isComplete = false;
        this.currentSong = null;

        this.piano.clearHighlights();
        this.musicBook.clear();

        // Reset header title
        const titleEl = document.getElementById('songTitle');
        if (titleEl) {
            titleEl.textContent = 'Select a Song';
        }
    }

    /**
     * Play a demo of the first few notes
     * @param {number} maxNotes - Maximum notes to play (default 6)
     * @param {function} onComplete - Called when demo finishes
     * @returns {function} Cancel function
     */
    playDemo(maxNotes = 6, onComplete = null) {
        if (!this.currentSong) return () => { };

        // Pause normal gameplay during demo
        this.isPlaying = false;

        // Reset to beginning
        this.musicBook.reset();

        // Play demo with visual feedback
        const cancel = audioEngine.playDemo(
            this.currentSong.sequence,
            this.currentSong.bpm || 100,
            maxNotes,
            (noteStr, index) => {
                // Highlight current note on piano
                this.piano.setHighlights([noteStr]);
                // Advance music book to show current note
                if (index > 0) {
                    this.musicBook.advance();
                }
                this.musicBook.updateHighlights();
            },
            () => {
                // Demo complete - reset to beginning and restore highlights
                this.isPlaying = true;  // Must be set BEFORE updateHighlights
                this.musicBook.reset();
                this.updateHighlights();  // Now this will work correctly
                if (onComplete) {
                    onComplete();
                }
            }
        );

        return cancel;
    }
}

// Singleton instance
export const gameController = new GameController();
