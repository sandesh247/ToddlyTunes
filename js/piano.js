/**
 * ToddlyTunes - Piano Keyboard Component
 * Renders interactive piano keys with visual feedback
 */

import { settings } from './settings.js';
import { audioEngine } from './audio.js';

// Standard white keys in an octave
const WHITE_KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
// Black keys and their positions relative to white keys
const BLACK_KEYS = [
    { note: 'C#', after: 'C', offset: 0.65 },
    { note: 'D#', after: 'D', offset: 0.65 },
    { note: 'F#', after: 'F', offset: 0.65 },
    { note: 'G#', after: 'G', offset: 0.65 },
    { note: 'A#', after: 'A', offset: 0.65 }
];

class PianoKeyboard {
    constructor(container) {
        this.container = container;
        this.keyboard = container.querySelector('#pianoKeyboard') || container;
        this.keys = new Map(); // noteStr -> key element
        this.activeTouch = new Map(); // touchId -> noteStr
        this.currentHighlights = []; // Current highlighted notes
        this.onNotePlay = null; // Callback when note is played
        this.nextExpectedNote = null; // For "fat finger" algorithm

        // Bind methods
        this.handlePointerDown = this.handlePointerDown.bind(this);
        this.handlePointerUp = this.handlePointerUp.bind(this);
        this.handlePointerMove = this.handlePointerMove.bind(this);

        // Listen for settings changes
        settings.onChange((key) => {
            if (key === 'showNoteLabels') {
                this.updateLabelsVisibility();
            }
        });
    }

    /**
     * Render piano keys for a specific octave range
     * @param {number} minOctave 
     * @param {number} maxOctave 
     */
    render(minOctave = 3, maxOctave = 5) {
        this.keys.clear();
        this.keyboard.innerHTML = '';

        // Performance Optimization: Read styles once before the loop
        const styles = getComputedStyle(document.documentElement);
        const whiteKeyWidth = parseInt(styles.getPropertyValue('--white-key-width')) || 60;
        const blackKeyWidth = parseInt(styles.getPropertyValue('--black-key-width')) || 36;
        const keyGap = 2;

        // Create white keys first
        let whiteKeyIndex = 0;
        for (let octave = minOctave; octave <= maxOctave; octave++) {
            for (const note of WHITE_KEYS) {
                const noteStr = `${note}${octave}`;
                const key = this.createKey(noteStr, false);
                key.style.order = whiteKeyIndex;
                this.keyboard.appendChild(key);
                this.keys.set(noteStr, key);
                whiteKeyIndex++;
            }
        }

        // Create black keys with absolute positioning
        for (let octave = minOctave; octave <= maxOctave; octave++) {
            for (const blackKey of BLACK_KEYS) {
                const noteStr = `${blackKey.note}${octave}`;
                const key = this.createKey(noteStr, true);

                // Position black key based on preceding white keys
                const whiteKeysBefore = WHITE_KEYS.indexOf(blackKey.after) +
                    (octave - minOctave) * WHITE_KEYS.length;

                const leftPos = (whiteKeysBefore + 1) * (whiteKeyWidth + keyGap) -
                    (blackKeyWidth / 2) - (keyGap / 2);

                key.style.left = `${leftPos}px`;
                this.keyboard.appendChild(key);
                this.keys.set(noteStr, key);
            }
        }

        // Add event listeners
        this.attachEventListeners();

        // Update labels visibility based on settings
        this.updateLabelsVisibility();
    }

    /**
     * Create a single piano key element
     */
    createKey(noteStr, isBlack) {
        const key = document.createElement('div');
        key.className = `piano-key${isBlack ? ' black' : ''}`;
        key.dataset.note = noteStr;

        // Accessibility
        key.setAttribute('role', 'button');
        key.setAttribute('aria-label', `Note ${noteStr.replace(/([0-9])/, ' $1')}`);

        // Extract just the note letter for display
        const noteLetter = noteStr.replace(/\d+/, '');

        // Add label
        const label = document.createElement('span');
        label.className = 'key-label';
        label.textContent = noteLetter;
        key.appendChild(label);

        return key;
    }

    /**
     * Attach touch/mouse event listeners
     */
    attachEventListeners() {
        // Use pointer events for unified touch/mouse handling
        this.keyboard.addEventListener('pointerdown', this.handlePointerDown);
        this.keyboard.addEventListener('pointerup', this.handlePointerUp);
        this.keyboard.addEventListener('pointercancel', this.handlePointerUp);
        this.keyboard.addEventListener('pointerleave', this.handlePointerUp);
        this.keyboard.addEventListener('pointermove', this.handlePointerMove);

        // Prevent context menu on long press
        this.keyboard.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    /**
     * Handle pointer down (touch/mouse start)
     */
    handlePointerDown(e) {
        e.preventDefault();
        const key = this.findKeyAtPoint(e.clientX, e.clientY);
        if (key) {
            this.pressKey(key, e.pointerId);
        }
    }

    /**
     * Handle pointer up (touch/mouse end)
     */
    handlePointerUp(e) {
        const noteStr = this.activeTouch.get(e.pointerId);
        if (noteStr) {
            this.releaseKey(noteStr, e.pointerId);
        }
    }

    /**
     * Handle pointer move (drag)
     */
    handlePointerMove(e) {
        // Allow sliding between keys
        if (!this.activeTouch.has(e.pointerId)) return;

        const key = this.findKeyAtPoint(e.clientX, e.clientY);
        if (key) {
            const newNote = key.dataset.note;
            const currentNote = this.activeTouch.get(e.pointerId);

            if (newNote !== currentNote) {
                this.releaseKey(currentNote, e.pointerId);
                this.pressKey(key, e.pointerId);
            }
        }
    }

    /**
     * Find the key at a given screen point
     * Implements "fat finger" algorithm with tolerance
     */
    findKeyAtPoint(x, y) {
        const tolerance = settings.get('touchTolerance');
        const elements = document.elementsFromPoint(x, y);

        // First check if directly on a key
        let directKey = null;
        for (const el of elements) {
            if (el.classList.contains('piano-key')) {
                directKey = el;
                break;
            }
        }

        // If no tolerance or directly on a key, return it
        if (tolerance === 0 || directKey) {
            // But if we have an expected next note and tolerance is on,
            // prefer the expected note if it's close enough
            if (tolerance > 0 && this.nextExpectedNote && directKey) {
                const expectedKey = this.keys.get(this.nextExpectedNote);
                if (expectedKey && expectedKey !== directKey) {
                    const directRect = directKey.getBoundingClientRect();
                    const expectedRect = expectedKey.getBoundingClientRect();

                    // Check if expected key is reasonably close
                    const distance = Math.abs(expectedRect.left - directRect.left);
                    const maxDistance = directRect.width * (1 + tolerance);

                    if (distance < maxDistance) {
                        // Check if touch is near the border between keys
                        const directCenter = directRect.left + directRect.width / 2;
                        const touchDistance = Math.abs(x - directCenter);
                        const borderThreshold = directRect.width * (0.5 - tolerance * 0.3);

                        if (touchDistance > borderThreshold) {
                            return expectedKey;
                        }
                    }
                }
            }
            return directKey;
        }

        // With tolerance, find nearest key
        let nearestKey = null;
        let nearestDistance = Infinity;

        for (const [noteStr, key] of this.keys) {
            const rect = key.getBoundingClientRect();
            const padding = rect.width * tolerance;

            const expandedRect = {
                left: rect.left - padding,
                right: rect.right + padding,
                top: rect.top - padding,
                bottom: rect.bottom + padding
            };

            if (x >= expandedRect.left && x <= expandedRect.right &&
                y >= expandedRect.top && y <= expandedRect.bottom) {
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

                // Prioritize expected next note
                const isPriority = noteStr === this.nextExpectedNote;
                const effectiveDistance = isPriority ? distance * 0.5 : distance;

                if (effectiveDistance < nearestDistance) {
                    nearestDistance = effectiveDistance;
                    nearestKey = key;
                }
            }
        }

        return nearestKey;
    }

    /**
     * Press a key
     */
    pressKey(key, pointerId) {
        const noteStr = key.dataset.note;

        // Visual feedback
        key.classList.add('pressed');
        this.createRipple(key);

        // Audio feedback
        audioEngine.playNote(noteStr);

        // Track active touch
        this.activeTouch.set(pointerId, noteStr);

        // Callback
        if (this.onNotePlay) {
            this.onNotePlay(noteStr);
        }
    }

    /**
     * Release a key
     */
    releaseKey(noteStr, pointerId) {
        const key = this.keys.get(noteStr);
        if (key) {
            key.classList.remove('pressed');
        }

        audioEngine.stopNote(noteStr);
        this.activeTouch.delete(pointerId);
    }

    /**
     * Create ripple effect on key press
     */
    createRipple(key) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';

        const rect = key.getBoundingClientRect();
        ripple.style.width = ripple.style.height = `${rect.width}px`;
        ripple.style.left = `${rect.width / 2 - rect.width / 2}px`;
        ripple.style.bottom = '20px';

        key.appendChild(ripple);

        // Remove after animation
        ripple.addEventListener('animationend', () => ripple.remove());
    }

    /**
     * Update highlights for look-ahead guidance
     * @param {string[]} notes - Array of note strings [current, next1, next2, ...]
     */
    setHighlights(notes) {
        // Clear previous highlights
        for (const noteStr of this.currentHighlights) {
            const key = this.keys.get(noteStr);
            if (key) {
                key.classList.remove('highlight-current', 'highlight-next-1', 'highlight-next-2');
            }
        }

        // Determine the best highlight level for each unique note
        // (lower index = higher priority: 0=current, 1=next-1, 2+=next-2)
        const noteHighlights = new Map(); // noteStr -> best index
        const lookahead = settings.get('lookaheadSteps');

        notes.slice(0, lookahead + 1).forEach((noteStr, index) => {
            if (!noteStr) return;
            // Only update if this note doesn't have a highlight yet,
            // or if the current index is better (lower) than what we have
            if (!noteHighlights.has(noteStr) || index < noteHighlights.get(noteStr)) {
                noteHighlights.set(noteStr, index);
            }
        });

        // Apply highlights based on best priority
        this.currentHighlights = [];
        for (const [noteStr, bestIndex] of noteHighlights) {
            const key = this.keys.get(noteStr);
            if (key) {
                if (bestIndex === 0) {
                    key.classList.add('highlight-current');
                    this.nextExpectedNote = noteStr;
                } else if (bestIndex === 1) {
                    key.classList.add('highlight-next-1');
                } else {
                    key.classList.add('highlight-next-2');
                }
                this.currentHighlights.push(noteStr);
            }
        }

        // Update next expected note for fat finger algorithm
        if (notes.length > 0) {
            this.nextExpectedNote = notes[0];
        }
    }

    /**
     * Clear all highlights
     */
    clearHighlights() {
        for (const noteStr of this.currentHighlights) {
            const key = this.keys.get(noteStr);
            if (key) {
                key.classList.remove('highlight-current', 'highlight-next-1', 'highlight-next-2');
            }
        }
        this.currentHighlights = [];
        this.nextExpectedNote = null;
    }

    /**
     * Show correct/incorrect feedback
     */
    showFeedback(noteStr, isCorrect) {
        const key = this.keys.get(noteStr);
        if (!key) return;

        const className = isCorrect ? 'correct' : 'incorrect';
        key.classList.add(className);

        setTimeout(() => {
            key.classList.remove(className);
        }, 300);
    }

    /**
     * Update label visibility based on settings
     */
    updateLabelsVisibility() {
        const show = settings.get('showNoteLabels');
        this.keys.forEach(key => {
            const label = key.querySelector('.key-label');
            if (label) {
                label.classList.toggle('hidden', !show);
            }
        });
    }

    /**
     * Center keyboard on specific notes/octaves with smooth scrolling animation
     * Does NOT re-render - just scrolls to center the requested octave range
     * @param {number} minOctave - Minimum octave of the range to center
     * @param {number} maxOctave - Maximum octave of the range to center
     * @param {boolean} animate - Whether to animate the scroll (default: true)
     */
    centerOn(minOctave, maxOctave, animate = true) {
        const container = this.container;

        // Calculate the center octave
        const centerOctave = (minOctave + maxOctave) / 2;

        // Find a key near the center octave to scroll to
        // Use D as it's roughly in the middle of an octave's white keys
        const centerNote = `D${Math.round(centerOctave)}`;
        const centerKey = this.keys.get(centerNote);

        if (!centerKey) {
            // Fallback: just scroll to general center
            const scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
            container.scrollTo({
                left: scrollLeft,
                behavior: animate ? 'smooth' : 'instant'
            });
            return;
        }

        // Calculate scroll position to center the key
        const keyRect = centerKey.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Current left position of the key relative to the container's scroll
        const keyLeftInContainer = keyRect.left - containerRect.left + container.scrollLeft;

        // Calculate scroll position to center the key
        const scrollLeft = keyLeftInContainer - (containerRect.width / 2) + (keyRect.width / 2);

        container.scrollTo({
            left: Math.max(0, scrollLeft),
            behavior: animate ? 'smooth' : 'instant'
        });
    }

    /**
     * Scroll to center the keyboard (middle C area) without animation
     * Used for initial positioning
     */
    scrollToCenter() {
        this.centerOn(3, 5, false);
    }
}

export { PianoKeyboard };
