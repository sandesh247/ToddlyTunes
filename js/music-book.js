/**
 * ToddlyTunes - Music Book Component
 * Displays sheet music with notes above lyrics (reference image style)
 */

import { settings } from './settings.js';
import { parseNote } from '../data/songs.js';

// Constants for line breaking logic
const MAX_SYLLABLES_PER_LINE = 8;
const MIN_ITEMS_FOR_PUNCTUATION_BREAK = 4;

class MusicBook {
    constructor(container) {
        this.container = container;
        this.titleEl = document.getElementById('musicBookTitle');
        this.contentEl = document.getElementById('sheetMusicContent');
        this.progressEl = document.getElementById('progressFill');

        this.currentSong = null;
        this.currentIndex = 0;
        this.lines = []; // Grouped note-lyric pairs by line

        // Cache DOM elements for performance
        this.cachedPairs = []; // Array of { pairEl, noteEl, index, lineIndex }
        this.cachedLines = []; // Array of lineEls
    }

    /**
     * Load and display a song
     */
    loadSong(song) {
        this.currentSong = song;
        this.currentIndex = 0;

        // Update title
        if (this.titleEl) {
            this.titleEl.textContent = `🎶 ${song.title} 🎶`;
        }

        // Group sequence into lines for display
        this.lines = this.groupIntoLines(song.sequence);

        // Render the sheet music
        this.render();

        // Reset progress
        this.updateProgress();
    }

    /**
     * Group note-lyric pairs into display lines.
     * Creates new lines at punctuation marks or when the line gets too long.
     * 
     * @param {Array} sequence - The song sequence array
     * @returns {Array[]} Array of line arrays
     */
    groupIntoLines(sequence) {
        const lines = [];
        let currentLine = [];

        for (let i = 0; i < sequence.length; i++) {
            const item = sequence[i];
            currentLine.push({ ...item, index: i });

            // Check for line break conditions
            const lyric = item.lyric || '';
            const isPunctuation = /[,.!?;:]$/.test(lyric);
            const isLongLine = currentLine.length >= MAX_SYLLABLES_PER_LINE;

            // Break if punctuation (and line isn't too short) OR line is max length
            if ((isPunctuation && currentLine.length >= MIN_ITEMS_FOR_PUNCTUATION_BREAK) || isLongLine) {
                lines.push(currentLine);
                currentLine = [];
            }
        }

        // Add remaining items
        if (currentLine.length > 0) {
            lines.push(currentLine);
        }

        return lines;
    }

    /**
     * Convert duration value to CSS class suffix
     * @param {number} duration - Note duration (0.5, 1, 2, 4)
     * @returns {string} CSS class suffix
     */
    getDurationClass(duration) {
        if (duration <= 0.5) return 'eighth';
        if (duration <= 1) return 'quarter';
        if (duration <= 2) return 'half';
        return 'whole';
    }

    /**
     * Render the sheet music display
     */
    render() {
        if (!this.contentEl || !this.lines.length) return;

        this.contentEl.innerHTML = '';
        this.cachedPairs = [];
        this.cachedLines = [];

        this.lines.forEach((line, lineIndex) => {
            const lineEl = document.createElement('div');
            lineEl.className = 'music-line';
            lineEl.dataset.lineIndex = lineIndex;
            this.cachedLines[lineIndex] = lineEl;

            // Notes row
            const notesRow = document.createElement('div');
            notesRow.className = 'notes-row';

            // Lyrics row  
            const lyricsRow = document.createElement('div');
            lyricsRow.className = 'lyrics-row';

            line.forEach(item => {
                // Create note-lyric pair container
                const pair = document.createElement('div');
                pair.className = 'note-lyric-pair';
                pair.dataset.index = item.index;

                // Apply duration class for rhythm visualization
                // Duration: 0.5 = eighth, 1 = quarter (default), 2 = half, 4 = whole
                const duration = item.duration || 1;
                pair.classList.add(`duration-${this.getDurationClass(duration)}`);

                // Note indicator
                const noteEl = document.createElement('span');
                noteEl.className = 'note-indicator';

                if (item.note === 'rest') {
                    noteEl.classList.add('rest');
                    noteEl.textContent = '–';
                } else {
                    const { letter } = parseNote(item.note);
                    noteEl.textContent = letter;
                    noteEl.classList.add(`note-${letter.replace('#', 'sharp')}`);
                }
                noteEl.dataset.note = item.note;

                // Lyric text
                const lyricEl = document.createElement('span');
                lyricEl.className = 'lyric-text';
                lyricEl.textContent = item.lyric || '\u00A0'; // Non-breaking space if empty

                pair.appendChild(noteEl);
                pair.appendChild(lyricEl);
                notesRow.appendChild(pair);

                // Cache elements
                this.cachedPairs[item.index] = {
                    pairEl: pair,
                    noteEl: noteEl,
                    index: item.index,
                    lineIndex: lineIndex
                };
            });

            lineEl.appendChild(notesRow);
            this.contentEl.appendChild(lineEl);
        });

        // Update initial highlights
        this.updateHighlights();
    }

    /**
     * Update highlights based on current position
     */
    /**
     * Update highlights based on current position
     * Optimized to use cached elements instead of querySelectorAll
     */
    updateHighlights() {
        if (!this.contentEl || !this.currentSong) return;

        const lookahead = settings.get('lookaheadSteps');

        // Clear all highlights
        this.cachedPairs.forEach(cache => {
            cache.pairEl.classList.remove('current', 'past');
            cache.noteEl.classList.remove('highlight-current', 'highlight-next-1', 'highlight-next-2');
        });

        // Apply highlights based on current index
        let currentLineIndex = -1;

        this.cachedPairs.forEach(cache => {
            const { index, pairEl, noteEl, lineIndex } = cache;

            if (index < this.currentIndex) {
                pairEl.classList.add('past');
            } else if (index === this.currentIndex) {
                pairEl.classList.add('current');
                noteEl.classList.add('highlight-current');
                currentLineIndex = lineIndex;
            } else if (index <= this.currentIndex + lookahead) {
                const offset = index - this.currentIndex;
                if (offset === 1) noteEl.classList.add('highlight-next-1');
                else noteEl.classList.add('highlight-next-2');
            }
        });

        // Update line states
        this.cachedLines.forEach((line, idx) => {
            if (idx === currentLineIndex) {
                line.classList.remove('past', 'future');
                line.classList.add('current');

                // Scroll current line into view
                line.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            } else if (idx < currentLineIndex) {
                line.classList.remove('current', 'future');
                line.classList.add('past');
            } else {
                line.classList.remove('current', 'past');
                line.classList.add('future');
            }
        });
    }

    /**
     * Advance to next note
     */
    advance() {
        if (!this.currentSong) return false;

        if (this.currentIndex < this.currentSong.sequence.length - 1) {
            this.currentIndex++;
            this.updateHighlights();
            this.updateProgress();
            return true;
        }

        return false; // Song complete
    }

    /**
     * Get current note string
     */
    getCurrentNote() {
        if (!this.currentSong) return null;
        return this.currentSong.sequence[this.currentIndex]?.note;
    }

    /**
     * Get look-ahead notes
     */
    getLookaheadNotes() {
        if (!this.currentSong) return [];

        const lookahead = settings.get('lookaheadSteps');
        const notes = [];

        for (let i = 0; i <= lookahead; i++) {
            const idx = this.currentIndex + i;
            if (idx < this.currentSong.sequence.length) {
                notes.push(this.currentSong.sequence[idx].note);
            }
        }

        return notes;
    }

    /**
     * Reset to beginning of song
     */
    reset() {
        this.currentIndex = 0;
        this.updateHighlights();
        this.updateProgress();
    }

    /**
     * Update progress bar
     */
    updateProgress() {
        if (!this.progressEl || !this.currentSong) return;

        const progress = (this.currentIndex / (this.currentSong.sequence.length - 1)) * 100;
        this.progressEl.style.width = `${Math.min(100, progress)}%`;
    }

    /**
     * Check if song is complete
     */
    isComplete() {
        if (!this.currentSong) return false;
        return this.currentIndex >= this.currentSong.sequence.length - 1;
    }

    /**
     * Show completion message
     */
    showCompletion() {
        if (!this.contentEl) return;

        this.contentEl.innerHTML = `
      <div class="completion-message">
        <span class="completion-emoji">🎉</span>
        <p class="completion-text">Amazing! You did it!</p>
        <button class="play-again-btn" id="playAgainBtn">🎹 Play Again</button>
      </div>
    `;

        // Set progress to 100%
        if (this.progressEl) {
            this.progressEl.style.width = '100%';
        }
    }

    /**
     * Clear the display
     */
    clear() {
        this.currentSong = null;
        this.currentIndex = 0;
        this.lines = [];

        if (this.contentEl) {
            this.contentEl.innerHTML = `
        <p style="text-align: center; color: var(--color-text-secondary); padding: 2rem;">
          Tap 🎵 above to choose a song!
        </p>
      `;
        }

        if (this.titleEl) {
            this.titleEl.textContent = '🎶 Let\'s Play! 🎶';
        }

        if (this.progressEl) {
            this.progressEl.style.width = '0%';
        }
    }
}

export { MusicBook };
