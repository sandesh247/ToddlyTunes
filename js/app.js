/**
 * ToddlyTunes - Main Application Entry Point
 */

import {
    settings,
    initSettingsUI,
    setupParentalLock,
    initModals,
    openModal,
    closeModal
} from './settings.js';
import { audioEngine } from './audio.js';
import { gameController } from './game.js';
import { SongSelector } from './song-selector.js';

// DOM Elements
let songSelector;

/**
 * Initialize the application
 */
async function initApp() {
    console.log('🎹 ToddlyTunes initializing...');

    // Get DOM elements
    const pianoContainer = document.getElementById('pianoContainer');
    const musicBook = document.getElementById('musicBook');
    const songModal = document.getElementById('songModal');
    const songGrid = document.getElementById('songGrid');
    const settingsModal = document.getElementById('settingsModal');
    const settingsBtn = document.getElementById('settingsBtn');
    const songSelectBtn = document.getElementById('songSelectBtn');

    // Initialize modals
    initModals();

    // Initialize settings UI
    initSettingsUI();

    // Setup parental lock on settings button
    setupParentalLock(settingsBtn, settingsModal);

    // Initialize game controller
    gameController.init(pianoContainer, musicBook);

    // Initialize song selector
    songSelector = new SongSelector(songModal, songGrid);
    songSelector.init();
    songSelector.onSongSelect = (songId) => {
        // Initialize audio on user gesture
        audioEngine.init();
        // Load the selected song
        gameController.loadSong(songId);
    };

    // Song select button
    songSelectBtn.addEventListener('click', () => {
        songSelector.open();
    });

    // Initialize audio on first interaction
    document.addEventListener('click', () => audioEngine.init(), { once: true });
    document.addEventListener('touchstart', () => audioEngine.init(), { once: true });

    // Render initial piano (default octave range)
    gameController.piano.render(3, 5);

    // Check for last played song
    const lastSongId = settings.get('lastSongId');
    if (lastSongId) {
        // Don't auto-load, just set the selector
        songSelector.setCurrentSong(lastSongId);
    }

    // Listen for settings changes that affect audio
    settings.onChange((key) => {
        if (key === 'soundTheme') {
            // Theme change will take effect on next note
            console.log('Sound theme changed to:', settings.get('soundTheme'));
        }
    });

    console.log('🎹 ToddlyTunes ready!');
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Handle visibility change (pause when hidden)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        audioEngine.stopAll();
    }
});

// Prevent default touch behaviors that might interfere
document.addEventListener('touchmove', (e) => {
    if (e.target.closest('.piano-keyboard')) {
        e.preventDefault();
    }
}, { passive: false });
