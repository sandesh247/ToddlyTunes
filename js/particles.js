/**
 * ToddlyTunes - Particle Effects System
 * Creates celebratory visual feedback for correct key presses
 */

// Particle type configurations
const PARTICLE_TYPES = {
    star: {
        emojis: ['⭐', '✨', '🌟', '💫'],
        className: 'particle-star',
        count: 5
    },
    sparkle: {
        colors: ['#FFD700', '#FF69B4', '#00BFFF', '#7CFC00', '#FF6347', '#DDA0DD'],
        className: 'particle-sparkle',
        count: 8
    },
    note: {
        emojis: ['♪', '♫', '♬', '🎵', '🎶'],
        className: 'particle-note',
        count: 3
    },
    confetti: {
        colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'],
        className: 'particle-confetti',
        count: 10
    }
};

// Color palette for variety based on notes
const NOTE_COLORS = {
    'C': '#FF6B6B',  // Red
    'D': '#FF9F43',  // Orange
    'E': '#FECA57',  // Yellow
    'F': '#48DBFB',  // Cyan
    'G': '#1DD1A1',  // Green
    'A': '#5F27CD',  // Purple
    'B': '#FF6B9D',  // Pink
    'default': '#FFD700'  // Gold
};

/**
 * Get color for a note
 */
function getNoteColor(noteStr) {
    if (!noteStr) return NOTE_COLORS.default;
    const noteLetter = noteStr.replace(/[#0-9]/g, '');
    return NOTE_COLORS[noteLetter] || NOTE_COLORS.default;
}

/**
 * Create a single particle element
 */
function createParticle(type, config, x, y, noteColor) {
    const particle = document.createElement('div');
    particle.className = `particle ${config.className}`;

    // Random direction and distance
    const angle = Math.random() * Math.PI * 2;
    const distance = 30 + Math.random() * 50;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - 20; // Bias upward

    particle.style.setProperty('--dx', `${dx}px`);
    particle.style.setProperty('--dy', `${dy}px`);
    particle.style.setProperty('--rotate', `${-180 + Math.random() * 360}deg`);
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Set content based on type
    if (config.emojis) {
        particle.textContent = config.emojis[Math.floor(Math.random() * config.emojis.length)];
    } else if (config.colors) {
        const color = config.colors[Math.floor(Math.random() * config.colors.length)];
        particle.style.backgroundColor = color;
        particle.style.color = color;
    }

    // Add note-specific tint for some sparkle variety
    if (type === 'sparkle' && Math.random() > 0.5) {
        particle.style.color = noteColor;
        particle.style.boxShadow = `0 0 6px 2px ${noteColor}`;
    }

    return particle;
}

/**
 * Spawn particles at a specific position
 * @param {HTMLElement} targetElement - Element to spawn particles from
 * @param {string} noteStr - Note being played (for color theming)
 * @param {string[]} types - Array of particle types to spawn
 */
function spawnParticles(targetElement, noteStr = null, types = ['star', 'sparkle']) {
    const rect = targetElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height * 0.3; // Upper portion of key

    const noteColor = getNoteColor(noteStr);

    // Create container at key position
    const container = document.createElement('div');
    container.className = 'particle-container';
    container.style.left = `${centerX}px`;
    container.style.top = `${centerY}px`;
    container.style.position = 'fixed';
    document.body.appendChild(container);

    // Spawn particles of each requested type
    for (const type of types) {
        const config = PARTICLE_TYPES[type];
        if (!config) continue;

        const count = config.count;
        for (let i = 0; i < count; i++) {
            // Stagger creation slightly
            setTimeout(() => {
                const particle = createParticle(type, config, 0, 0, noteColor);
                container.appendChild(particle);

                // Remove particle after animation
                particle.addEventListener('animationend', () => particle.remove());
            }, i * 30);
        }
    }

    // Clean up container after all animations complete
    setTimeout(() => container.remove(), 1500);
}

/**
 * Spawn a large celebration burst (for song completion)
 * @param {HTMLElement} targetElement - Optional element to center on
 */
function spawnCelebration(targetElement = null) {
    const container = document.createElement('div');
    container.className = 'celebration-particles';
    document.body.appendChild(container);

    // Get center position
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;
    }

    // Spawn many particles
    const types = ['star', 'confetti', 'note'];
    const totalParticles = 30;

    for (let i = 0; i < totalParticles; i++) {
        setTimeout(() => {
            const type = types[Math.floor(Math.random() * types.length)];
            const config = PARTICLE_TYPES[type];

            const offsetX = (Math.random() - 0.5) * 200;
            const offsetY = (Math.random() - 0.5) * 100;

            const particle = createParticle(
                type,
                config,
                centerX + offsetX,
                centerY + offsetY,
                NOTE_COLORS.default
            );
            particle.style.position = 'fixed';
            container.appendChild(particle);

            particle.addEventListener('animationend', () => particle.remove());
        }, i * 40);
    }

    // Clean up container
    setTimeout(() => container.remove(), 2500);
}

export { spawnParticles, spawnCelebration, getNoteColor };
