/**
 * ToddlyTunes - Song Selector Component
 */

import { songs } from '../data/songs.js';
import { settings, openModal, closeModal } from './settings.js';

class SongSelector {
    constructor(modal, gridContainer) {
        this.modal = modal;
        this.gridContainer = gridContainer;
        this.onSongSelect = null;
        this.currentSongId = null;
    }

    /**
     * Initialize the song selector
     */
    init() {
        this.renderSongGrid();

        // Handle song card clicks
        this.gridContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.song-card');
            if (card) {
                const songId = card.dataset.songId;
                this.selectSong(songId);
            }
        });
    }

    /**
     * Render the song grid
     */
    renderSongGrid() {
        this.gridContainer.innerHTML = '';

        songs.forEach(song => {
            const card = document.createElement('button');
            card.className = 'song-card';
            card.dataset.songId = song.id;

            if (song.id === this.currentSongId) {
                card.classList.add('selected');
            }

            card.innerHTML = `
        <span class="song-card-icon">${song.icon}</span>
        <span class="song-card-title">${song.title}</span>
      `;

            this.gridContainer.appendChild(card);
        });
    }

    /**
     * Select a song
     */
    selectSong(songId) {
        this.currentSongId = songId;

        // Update visual selection
        const cards = this.gridContainer.querySelectorAll('.song-card');
        cards.forEach(card => {
            card.classList.toggle('selected', card.dataset.songId === songId);
        });

        // Close modal
        closeModal(this.modal);

        // Callback
        if (this.onSongSelect) {
            this.onSongSelect(songId);
        }
    }

    /**
     * Open the song selector modal
     */
    open() {
        // Update current selection from settings
        this.currentSongId = settings.get('lastSongId');
        this.renderSongGrid();
        openModal(this.modal);
    }

    /**
     * Set current song (for highlighting)
     */
    setCurrentSong(songId) {
        this.currentSongId = songId;
        this.renderSongGrid();
    }
}

export { SongSelector };
