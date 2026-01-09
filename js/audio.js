/**
 * ToddlyTunes - Audio Engine
 * Web Audio API-based synthesizer with multiple sound themes
 */

import { settings } from './settings.js';

class AudioEngine {
    constructor() {
        this.audioContext = null;
        this.masterGain = null;
        this.initialized = false;
        this.activeNotes = new Map(); // Currently playing notes

        // Note frequencies (A4 = 440Hz)
        this.noteFrequencies = this.buildFrequencyTable();
    }

    /**
     * Build frequency lookup table for all notes
     */
    buildFrequencyTable() {
        const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const frequencies = {};

        // A4 = 440Hz is our reference
        // A4 is the 9th note in octave 4 (0-indexed)
        for (let octave = 0; octave <= 8; octave++) {
            for (let i = 0; i < notes.length; i++) {
                const noteName = `${notes[i]}${octave}`;
                // Calculate semitones from A4
                const semitones = (octave - 4) * 12 + (i - 9);
                frequencies[noteName] = 440 * Math.pow(2, semitones / 12);
            }
        }

        return frequencies;
    }

    /**
     * Initialize audio context (must be called on user gesture)
     */
    async init() {
        if (this.initialized) return;

        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // Create master gain
            this.masterGain = this.audioContext.createGain();
            this.masterGain.gain.value = 0.5;
            this.masterGain.connect(this.audioContext.destination);

            // Resume context if suspended
            if (this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
            }

            this.initialized = true;
            console.log('Audio engine initialized');
        } catch (e) {
            console.error('Failed to initialize audio:', e);
        }
    }

    /**
     * Get the current sound theme configuration
     */
    getThemeConfig(theme = settings.get('soundTheme')) {
        const themes = {
            piano: {
                type: 'custom',
                harmonics: [1, 0.5, 0.33, 0.25, 0.2, 0.16],
                attack: 0.01,
                decay: 0.3,
                sustain: 0.4,
                release: 0.5,
                filterFreq: 4000,
                filterQ: 1
            },
            reverb: {
                type: 'custom',
                harmonics: [1, 0.4, 0.2, 0.1],
                attack: 0.05,
                decay: 0.5,
                sustain: 0.6,
                release: 1.5,
                filterFreq: 3000,
                filterQ: 0.5,
                reverbMix: 0.4
            },
            xylophone: {
                type: 'custom',
                harmonics: [1, 0.8, 0.05, 0.6],
                attack: 0.001,
                decay: 0.1,
                sustain: 0.1,
                release: 0.3,
                filterFreq: 8000,
                filterQ: 2
            },
            'music-box': {
                type: 'custom',
                harmonics: [1, 0.1, 0.5, 0.05, 0.3],
                attack: 0.001,
                decay: 0.2,
                sustain: 0.2,
                release: 0.8,
                filterFreq: 6000,
                filterQ: 3
            }
        };

        return themes[theme] || themes.piano;
    }

    /**
     * Create oscillators with harmonics for richer sound
     */
    createOscillators(frequency, harmonics) {
        const oscillators = [];
        const gains = [];

        harmonics.forEach((amplitude, index) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();

            // Use different wave types for different harmonics
            osc.type = index === 0 ? 'sine' : (index % 2 === 0 ? 'triangle' : 'sine');
            osc.frequency.value = frequency * (index + 1);
            gain.gain.value = amplitude;

            osc.connect(gain);
            oscillators.push(osc);
            gains.push(gain);
        });

        return { oscillators, gains };
    }

    /**
     * Apply ADSR envelope to a gain node
     */
    applyEnvelope(gainNode, config) {
        const now = this.audioContext.currentTime;
        const { attack, decay, sustain } = config;

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(1, now + attack);
        gainNode.gain.linearRampToValueAtTime(sustain, now + attack + decay);

        return now;
    }

    /**
     * Play a note
     * @param {string} noteStr - Note string like "C4", "D#5"
     * @returns {function} Stop function
     */
    playNote(noteStr) {
        if (!this.initialized || !this.audioContext) {
            this.init();
            return () => { };
        }

        const frequency = this.noteFrequencies[noteStr];
        if (!frequency) {
            console.warn(`Unknown note: ${noteStr}`);
            return () => { };
        }

        // Stop any existing instance of this note
        this.stopNote(noteStr);

        const config = this.getThemeConfig();
        const { oscillators, gains } = this.createOscillators(frequency, config.harmonics);

        // Create envelope gain
        const envelopeGain = this.audioContext.createGain();

        // Create low-pass filter for tone shaping
        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = config.filterFreq;
        filter.Q.value = config.filterQ;

        // Connect: oscillators -> gains -> filter -> envelope -> master
        gains.forEach(gain => gain.connect(filter));
        filter.connect(envelopeGain);
        envelopeGain.connect(this.masterGain);

        // Apply envelope
        this.applyEnvelope(envelopeGain, config);

        // Start oscillators
        oscillators.forEach(osc => osc.start());

        // Store active note
        this.activeNotes.set(noteStr, {
            oscillators,
            gains,
            envelopeGain,
            filter,
            config
        });

        // Return stop function
        return () => this.stopNote(noteStr);
    }

    /**
     * Stop a specific note
     */
    stopNote(noteStr) {
        const note = this.activeNotes.get(noteStr);
        if (!note) return;

        const { oscillators, envelopeGain, config } = note;
        const now = this.audioContext.currentTime;

        // Apply release envelope
        envelopeGain.gain.cancelScheduledValues(now);
        envelopeGain.gain.setValueAtTime(envelopeGain.gain.value, now);
        envelopeGain.gain.exponentialRampToValueAtTime(0.001, now + config.release);

        // Stop and disconnect oscillators after release
        setTimeout(() => {
            oscillators.forEach(osc => {
                try {
                    osc.stop();
                    osc.disconnect();
                } catch (e) {
                    // Already stopped
                }
            });
        }, config.release * 1000);

        this.activeNotes.delete(noteStr);
    }

    /**
     * Stop all notes
     */
    stopAll() {
        for (const noteStr of this.activeNotes.keys()) {
            this.stopNote(noteStr);
        }
    }



    /**
     * Play a success sound
     */
    playSuccess() {
        if (!this.initialized) return;

        const notes = ['C5', 'E5', 'G5'];
        notes.forEach((note, i) => {
            setTimeout(() => {
                const stop = this.playNote(note);
                setTimeout(stop, 200);
            }, i * 100);
        });
    }

    /**
     * Play a gentle celebration sound for song completion
     */
    playCelebration() {
        if (!this.initialized) return;

        // A simple ascending arpeggio at reduced volume
        const notes = ['C5', 'E5', 'G5', 'C6'];
        const celebrationGain = 0.3;

        notes.forEach((note, i) => {
            setTimeout(() => {
                // Temporarily reduce master volume for softer sound
                const originalGain = this.masterGain.gain.value;
                this.masterGain.gain.setValueAtTime(celebrationGain, this.audioContext.currentTime);

                const stop = this.playNote(note);
                setTimeout(() => {
                    stop();
                    // Restore original volume after note ends
                    if (i === notes.length - 1) {
                        setTimeout(() => {
                            this.masterGain.gain.setValueAtTime(originalGain, this.audioContext.currentTime);
                        }, 200);
                    }
                }, 250);
            }, i * 150);
        });
    }
}

// Singleton instance
export const audioEngine = new AudioEngine();
