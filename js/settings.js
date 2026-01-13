/**
 * ToddlyTunes - Settings Manager
 * Handles app configuration with localStorage persistence
 */

const STORAGE_KEY = 'toddlytunes-settings';

// Default settings
const defaults = {
    lookaheadSteps: 3,
    touchTolerance: 0.3,
    showNoteLabels: true,
    soundTheme: 'piano',
    fullSongDemo: false,
    lastSongId: null
};

class Settings {
    constructor() {
        this.settings = { ...defaults };
        this.listeners = new Set();
        this.load();
    }

    /**
     * Load settings from localStorage
     */
    load() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                this.settings = { ...defaults, ...parsed };
            }
        } catch (e) {
            console.warn('Failed to load settings:', e);
        }
        return this.settings;
    }

    /**
     * Save settings to localStorage
     */
    save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
        } catch (e) {
            console.warn('Failed to save settings:', e);
        }
    }

    /**
     * Get a setting value
     */
    get(key) {
        return this.settings[key] ?? defaults[key];
    }

    /**
     * Set a setting value
     */
    set(key, value) {
        const oldValue = this.settings[key];
        this.settings[key] = value;
        this.save();
        this.notifyListeners(key, value, oldValue);
    }

    /**
     * Get all settings
     */
    getAll() {
        return { ...this.settings };
    }

    /**
     * Add a change listener
     */
    onChange(callback) {
        this.listeners.add(callback);
        return () => this.listeners.delete(callback);
    }

    /**
     * Notify listeners of changes
     */
    notifyListeners(key, newValue, oldValue) {
        for (const listener of this.listeners) {
            try {
                listener(key, newValue, oldValue);
            } catch (e) {
                console.error('Settings listener error:', e);
            }
        }
    }
}

// Singleton instance
export const settings = new Settings();

/**
 * Initialize settings UI bindings
 */
export function initSettingsUI() {
    // Lookahead steps slider
    const lookaheadSlider = document.getElementById('lookaheadSteps');
    const lookaheadValue = document.getElementById('lookaheadValue');
    if (lookaheadSlider && lookaheadValue) {
        lookaheadSlider.value = settings.get('lookaheadSteps');
        lookaheadValue.textContent = settings.get('lookaheadSteps');
        lookaheadSlider.addEventListener('input', () => {
            const value = parseInt(lookaheadSlider.value, 10);
            lookaheadValue.textContent = value;
            settings.set('lookaheadSteps', value);
        });
    }

    // Touch tolerance slider
    const toleranceSlider = document.getElementById('touchTolerance');
    const toleranceValue = document.getElementById('toleranceValue');
    if (toleranceSlider && toleranceValue) {
        const currentTolerance = Math.round(settings.get('touchTolerance') * 100);
        toleranceSlider.value = currentTolerance;
        toleranceValue.textContent = `${currentTolerance}%`;
        toleranceSlider.addEventListener('input', () => {
            const value = parseInt(toleranceSlider.value, 10);
            toleranceValue.textContent = `${value}%`;
            settings.set('touchTolerance', value / 100);
        });
    }

    // Show note labels toggle
    const noteLabelToggle = document.getElementById('showNoteLabels');
    if (noteLabelToggle) {
        noteLabelToggle.checked = settings.get('showNoteLabels');
        noteLabelToggle.addEventListener('change', () => {
            settings.set('showNoteLabels', noteLabelToggle.checked);
        });
    }

    // Sound theme selector
    const themeSelector = document.getElementById('themeSelector');
    if (themeSelector) {
        const currentTheme = settings.get('soundTheme');
        const themeButtons = themeSelector.querySelectorAll('.theme-option');

        // Set initial selection
        themeButtons.forEach(btn => {
            if (btn.dataset.theme === currentTheme) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        });

        // Handle clicks
        themeSelector.addEventListener('click', (e) => {
            const button = e.target.closest('.theme-option');
            if (!button) return;

            themeButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            settings.set('soundTheme', button.dataset.theme);
        });
    }

    // Full song demo toggle
    const fullSongToggle = document.getElementById('fullSongDemo');
    if (fullSongToggle) {
        fullSongToggle.checked = settings.get('fullSongDemo');
        fullSongToggle.addEventListener('change', () => {
            settings.set('fullSongDemo', fullSongToggle.checked);
        });
    }
}

/**
 * Setup parental lock for settings button
 */
export function setupParentalLock(settingsBtn, settingsModal) {
    let holdTimer = null;
    const HOLD_DURATION = 3000; // 3 seconds

    const startHold = (e) => {
        e.preventDefault();
        settingsBtn.classList.add('holding');

        holdTimer = setTimeout(() => {
            settingsBtn.classList.remove('holding');
            openModal(settingsModal);
        }, HOLD_DURATION);
    };

    const cancelHold = () => {
        if (holdTimer) {
            clearTimeout(holdTimer);
            holdTimer = null;
        }
        settingsBtn.classList.remove('holding');
    };

    // Mouse events
    settingsBtn.addEventListener('mousedown', startHold);
    settingsBtn.addEventListener('mouseup', cancelHold);
    settingsBtn.addEventListener('mouseleave', cancelHold);

    // Touch events
    settingsBtn.addEventListener('touchstart', startHold, { passive: false });
    settingsBtn.addEventListener('touchend', cancelHold);
    settingsBtn.addEventListener('touchcancel', cancelHold);
}

/**
 * Open a modal
 */
export function openModal(modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
}

/**
 * Close a modal
 */
export function closeModal(modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
}

/**
 * Initialize modal close behavior
 */
export function initModals() {
    const modals = document.querySelectorAll('.modal-backdrop');

    modals.forEach(modal => {
        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });

        // Close on close button click
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('open')) {
                    closeModal(modal);
                }
            });
        }
    });
}
