/**
 * ToddlyTunes - Song Database
 * 20 Popular Nursery Rhymes (Complete Versions)
 * 
 * Song format:
 * - id: unique identifier
 * - title: display name
 * - icon: emoji for song card
 * - bpm: tempo in beats per minute (optional, default 100)
 * - sequence: array of { note, lyric, duration }
 *   - note: letter + octave (e.g., "C4", "D4") or "rest" for pause
 *   - lyric: syllable to display
 *   - duration: note length relative to quarter note (optional, default 1)
 *     - 0.5 = eighth note (quick)
 *     - 1 = quarter note (standard beat)
 *     - 2 = half note (held)
 *     - 4 = whole note (long hold)
 */

export const songs = [
  // 1. Mary Had a Little Lamb (Complete)
  {
    id: "mary-lamb",
    title: "Mary Had a Little Lamb",
    icon: "🐑",
    bpm: 100,
    sequence: [
      // Line 1: Mary had a little lamb
      { note: "E4", lyric: "Ma", duration: 1 },
      { note: "D4", lyric: "ry", duration: 1 },
      { note: "C4", lyric: "had", duration: 1 },
      { note: "D4", lyric: "a", duration: 1 },
      { note: "E4", lyric: "lit", duration: 1 },
      { note: "E4", lyric: "tle", duration: 1 },
      { note: "E4", lyric: "lamb,", duration: 2 },
      // Line 2: Little lamb, little lamb
      { note: "D4", lyric: "lit", duration: 1 },
      { note: "D4", lyric: "tle", duration: 1 },
      { note: "D4", lyric: "lamb,", duration: 2 },
      { note: "E4", lyric: "lit", duration: 1 },
      { note: "G4", lyric: "tle", duration: 1 },
      { note: "G4", lyric: "lamb.", duration: 2 },
      // Line 3: Mary had a little lamb
      { note: "E4", lyric: "Ma", duration: 1 },
      { note: "D4", lyric: "ry", duration: 1 },
      { note: "C4", lyric: "had", duration: 1 },
      { note: "D4", lyric: "a", duration: 1 },
      { note: "E4", lyric: "lit", duration: 1 },
      { note: "E4", lyric: "tle", duration: 1 },
      { note: "E4", lyric: "lamb,", duration: 1 },
      // Line 4: Whose fleece was white as snow
      { note: "E4", lyric: "Whose", duration: 1 },
      { note: "D4", lyric: "fleece", duration: 1 },
      { note: "D4", lyric: "was", duration: 1 },
      { note: "E4", lyric: "white", duration: 1 },
      { note: "D4", lyric: "as", duration: 1 },
      { note: "C4", lyric: "snow.", duration: 2 }
    ]
  },

  // 2. Twinkle Twinkle Little Star (Complete - Full Song)
  {
    id: "twinkle",
    title: "Twinkle Twinkle Little Star",
    icon: "⭐",
    bpm: 90,
    sequence: [
      // Verse 1: Twinkle twinkle little star
      { note: "C4", lyric: "Twin", duration: 1 },
      { note: "C4", lyric: "kle", duration: 1 },
      { note: "G4", lyric: "twin", duration: 1 },
      { note: "G4", lyric: "kle", duration: 1 },
      { note: "A4", lyric: "lit", duration: 1 },
      { note: "A4", lyric: "tle", duration: 1 },
      { note: "G4", lyric: "star,", duration: 2 },
      // How I wonder what you are
      { note: "F4", lyric: "how", duration: 1 },
      { note: "F4", lyric: "I", duration: 1 },
      { note: "E4", lyric: "won", duration: 1 },
      { note: "E4", lyric: "der", duration: 1 },
      { note: "D4", lyric: "what", duration: 1 },
      { note: "D4", lyric: "you", duration: 1 },
      { note: "C4", lyric: "are.", duration: 2 },
      // Up above the world so high
      { note: "G4", lyric: "Up", duration: 1 },
      { note: "G4", lyric: "a", duration: 1 },
      { note: "F4", lyric: "bove", duration: 1 },
      { note: "F4", lyric: "the", duration: 1 },
      { note: "E4", lyric: "world", duration: 1 },
      { note: "E4", lyric: "so", duration: 1 },
      { note: "D4", lyric: "high,", duration: 2 },
      // Like a diamond in the sky
      { note: "G4", lyric: "like", duration: 1 },
      { note: "G4", lyric: "a", duration: 1 },
      { note: "F4", lyric: "dia", duration: 1 },
      { note: "F4", lyric: "mond", duration: 1 },
      { note: "E4", lyric: "in", duration: 1 },
      { note: "E4", lyric: "the", duration: 1 },
      { note: "D4", lyric: "sky.", duration: 2 },
      // Twinkle twinkle little star (repeat)
      { note: "C4", lyric: "Twin", duration: 1 },
      { note: "C4", lyric: "kle", duration: 1 },
      { note: "G4", lyric: "twin", duration: 1 },
      { note: "G4", lyric: "kle", duration: 1 },
      { note: "A4", lyric: "lit", duration: 1 },
      { note: "A4", lyric: "tle", duration: 1 },
      { note: "G4", lyric: "star,", duration: 2 },
      // How I wonder what you are
      { note: "F4", lyric: "how", duration: 1 },
      { note: "F4", lyric: "I", duration: 1 },
      { note: "E4", lyric: "won", duration: 1 },
      { note: "E4", lyric: "der", duration: 1 },
      { note: "D4", lyric: "what", duration: 1 },
      { note: "D4", lyric: "you", duration: 1 },
      { note: "C4", lyric: "are!", duration: 2 }
    ]
  },

  // 3. Old MacDonald Had a Farm (Complete verse with cow)
  {
    id: "old-macdonald",
    title: "Old MacDonald Had a Farm",
    icon: "🚜",
    bpm: 120,
    sequence: [
      // Old MacDonald had a farm
      { note: "C4", lyric: "Old", duration: 1 },
      { note: "C4", lyric: "Mac", duration: 1 },
      { note: "C4", lyric: "Don", duration: 1 },
      { note: "G3", lyric: "ald", duration: 1 },
      { note: "A3", lyric: "had", duration: 1 },
      { note: "A3", lyric: "a", duration: 1 },
      { note: "G3", lyric: "farm,", duration: 2 },
      // E-I-E-I-O
      { note: "E4", lyric: "E", duration: 1 },
      { note: "E4", lyric: "I", duration: 1 },
      { note: "D4", lyric: "E", duration: 1 },
      { note: "D4", lyric: "I", duration: 1 },
      { note: "C4", lyric: "O!", duration: 2 },
      // And on his farm he had a cow
      { note: "C4", lyric: "And", duration: 1 },
      { note: "C4", lyric: "on", duration: 1 },
      { note: "C4", lyric: "his", duration: 1 },
      { note: "G3", lyric: "farm", duration: 1 },
      { note: "A3", lyric: "he", duration: 1 },
      { note: "A3", lyric: "had", duration: 1 },
      { note: "G3", lyric: "a", duration: 0.5 },
      { note: "G3", lyric: "cow,", duration: 1.5 },
      // E-I-E-I-O
      { note: "E4", lyric: "E", duration: 1 },
      { note: "E4", lyric: "I", duration: 1 },
      { note: "D4", lyric: "E", duration: 1 },
      { note: "D4", lyric: "I", duration: 1 },
      { note: "C4", lyric: "O!", duration: 2 },
      // With a moo moo here
      { note: "G4", lyric: "With", duration: 0.5 },
      { note: "G4", lyric: "a", duration: 0.5 },
      { note: "C4", lyric: "moo", duration: 0.5 },
      { note: "C4", lyric: "moo", duration: 0.5 },
      { note: "G4", lyric: "here,", duration: 1 },
      // And a moo moo there
      { note: "G4", lyric: "and", duration: 0.5 },
      { note: "G4", lyric: "a", duration: 0.5 },
      { note: "C4", lyric: "moo", duration: 0.5 },
      { note: "C4", lyric: "moo", duration: 0.5 },
      { note: "G4", lyric: "there,", duration: 1 },
      // Here a moo, there a moo
      { note: "C4", lyric: "here", duration: 0.5 },
      { note: "C4", lyric: "a", duration: 0.5 },
      { note: "C4", lyric: "moo,", duration: 1 },
      { note: "G4", lyric: "there", duration: 0.5 },
      { note: "G4", lyric: "a", duration: 0.5 },
      { note: "G4", lyric: "moo,", duration: 1 },
      // Everywhere a moo moo
      { note: "C4", lyric: "ev", duration: 0.5 },
      { note: "D4", lyric: "'ry", duration: 0.5 },
      { note: "E4", lyric: "where", duration: 0.5 },
      { note: "F4", lyric: "a", duration: 0.5 },
      { note: "G4", lyric: "moo", duration: 0.5 },
      { note: "G4", lyric: "moo!", duration: 1.5 },
      // Old MacDonald had a farm
      { note: "C4", lyric: "Old", duration: 1 },
      { note: "C4", lyric: "Mac", duration: 1 },
      { note: "C4", lyric: "Don", duration: 1 },
      { note: "G3", lyric: "ald", duration: 1 },
      { note: "A3", lyric: "had", duration: 1 },
      { note: "A3", lyric: "a", duration: 1 },
      { note: "G3", lyric: "farm,", duration: 2 },
      // E-I-E-I-O
      { note: "E4", lyric: "E", duration: 1 },
      { note: "E4", lyric: "I", duration: 1 },
      { note: "D4", lyric: "E", duration: 1 },
      { note: "D4", lyric: "I", duration: 1 },
      { note: "C4", lyric: "O!", duration: 2 }
    ]
  },

  // 4. Row Row Row Your Boat (Complete)
  {
    id: "row-boat",
    title: "Row Row Row Your Boat",
    icon: "🚣",
    bpm: 80,
    sequence: [
      { note: "C4", lyric: "Row", duration: 1 },
      { note: "C4", lyric: "row", duration: 1 },
      { note: "C4", lyric: "row", duration: 0.75 },
      { note: "D4", lyric: "your", duration: 0.5 },
      { note: "E4", lyric: "boat,", duration: 2 },
      { note: "E4", lyric: "gent", duration: 0.75 },
      { note: "D4", lyric: "ly", duration: 0.5 },
      { note: "E4", lyric: "down", duration: 0.75 },
      { note: "F4", lyric: "the", duration: 0.5 },
      { note: "G4", lyric: "stream.", duration: 2 },
      { note: "C5", lyric: "Mer", duration: 0.5 },
      { note: "C5", lyric: "ri", duration: 0.5 },
      { note: "C5", lyric: "ly", duration: 0.5 },
      { note: "G4", lyric: "mer", duration: 0.5 },
      { note: "G4", lyric: "ri", duration: 0.5 },
      { note: "G4", lyric: "ly", duration: 0.5 },
      { note: "E4", lyric: "mer", duration: 0.5 },
      { note: "E4", lyric: "ri", duration: 0.5 },
      { note: "E4", lyric: "ly", duration: 0.5 },
      { note: "C4", lyric: "mer", duration: 0.5 },
      { note: "C4", lyric: "ri", duration: 0.5 },
      { note: "C4", lyric: "ly,", duration: 0.5 },
      { note: "G4", lyric: "life", duration: 1 },
      { note: "F4", lyric: "is", duration: 1 },
      { note: "E4", lyric: "but", duration: 1 },
      { note: "D4", lyric: "a", duration: 1 },
      { note: "C4", lyric: "dream.", duration: 2 }
    ]
  },

  // 5. Itsy Bitsy Spider (Complete with "Out came the sun" verse)
  {
    id: "itsy-spider",
    title: "Itsy Bitsy Spider",
    icon: "🕷️",
    bpm: 110,
    sequence: [
      // The itsy bitsy spider climbed up the water spout
      { note: "C4", lyric: "The", duration: 0.5 },
      { note: "C4", lyric: "it", duration: 0.5 },
      { note: "C4", lyric: "sy", duration: 0.5 },
      { note: "D4", lyric: "bit", duration: 0.5 },
      { note: "E4", lyric: "sy", duration: 1 },
      { note: "E4", lyric: "spi", duration: 0.5 },
      { note: "D4", lyric: "der", duration: 0.5 },
      { note: "C4", lyric: "climbed", duration: 0.5 },
      { note: "D4", lyric: "up", duration: 0.5 },
      { note: "E4", lyric: "the", duration: 0.5 },
      { note: "C4", lyric: "spout.", duration: 1.5 },
      // Down came the rain and washed the spider out
      { note: "E4", lyric: "Down", duration: 0.5 },
      { note: "E4", lyric: "came", duration: 0.5 },
      { note: "F4", lyric: "the", duration: 0.5 },
      { note: "G4", lyric: "rain", duration: 1 },
      { note: "G4", lyric: "and", duration: 0.5 },
      { note: "F4", lyric: "washed", duration: 0.5 },
      { note: "E4", lyric: "the", duration: 0.5 },
      { note: "F4", lyric: "spi", duration: 0.5 },
      { note: "G4", lyric: "der", duration: 0.5 },
      { note: "E4", lyric: "out.", duration: 1.5 },
      // Out came the sun and dried up all the rain
      { note: "E4", lyric: "Out", duration: 0.5 },
      { note: "E4", lyric: "came", duration: 0.5 },
      { note: "F4", lyric: "the", duration: 0.5 },
      { note: "G4", lyric: "sun", duration: 1 },
      { note: "G4", lyric: "and", duration: 0.5 },
      { note: "F4", lyric: "dried", duration: 0.5 },
      { note: "E4", lyric: "up", duration: 0.5 },
      { note: "F4", lyric: "all", duration: 0.5 },
      { note: "G4", lyric: "the", duration: 0.5 },
      { note: "E4", lyric: "rain.", duration: 1.5 },
      // And the itsy bitsy spider climbed up the spout again
      { note: "C4", lyric: "And", duration: 0.5 },
      { note: "C4", lyric: "the", duration: 0.5 },
      { note: "C4", lyric: "it", duration: 0.5 },
      { note: "C4", lyric: "sy", duration: 0.5 },
      { note: "D4", lyric: "bit", duration: 0.5 },
      { note: "E4", lyric: "sy", duration: 1 },
      { note: "E4", lyric: "spi", duration: 0.5 },
      { note: "D4", lyric: "der", duration: 0.5 },
      { note: "C4", lyric: "climbed", duration: 0.5 },
      { note: "D4", lyric: "up", duration: 0.5 },
      { note: "E4", lyric: "the", duration: 0.5 },
      { note: "F4", lyric: "spout", duration: 0.5 },
      { note: "G4", lyric: "a", duration: 0.5 },
      { note: "C4", lyric: "gain!", duration: 2 }
    ]
  },

  // 6. Wheels on the Bus (Complete)
  {
    id: "wheels-bus",
    title: "Wheels on the Bus",
    icon: "🚌",
    bpm: 100,
    sequence: [
      { note: "C4", lyric: "The", duration: 0.5 },
      { note: "C4", lyric: "wheels", duration: 0.5 },
      { note: "C4", lyric: "on", duration: 0.5 },
      { note: "C4", lyric: "the", duration: 0.5 },
      { note: "E4", lyric: "bus", duration: 1 },
      { note: "G4", lyric: "go", duration: 0.5 },
      { note: "G4", lyric: "round", duration: 0.5 },
      { note: "G4", lyric: "and", duration: 0.5 },
      { note: "E4", lyric: "round,", duration: 1.5 },
      { note: "D4", lyric: "round", duration: 0.5 },
      { note: "F4", lyric: "and", duration: 0.5 },
      { note: "D4", lyric: "round,", duration: 1 },
      { note: "C4", lyric: "round", duration: 0.5 },
      { note: "E4", lyric: "and", duration: 0.5 },
      { note: "C4", lyric: "round.", duration: 2 },
      { note: "C4", lyric: "The", duration: 0.5 },
      { note: "C4", lyric: "wheels", duration: 0.5 },
      { note: "C4", lyric: "on", duration: 0.5 },
      { note: "C4", lyric: "the", duration: 0.5 },
      { note: "E4", lyric: "bus", duration: 1 },
      { note: "G4", lyric: "go", duration: 0.5 },
      { note: "G4", lyric: "round", duration: 0.5 },
      { note: "G4", lyric: "and", duration: 0.5 },
      { note: "E4", lyric: "round,", duration: 1.5 },
      { note: "D4", lyric: "all", duration: 1 },
      { note: "D4", lyric: "through", duration: 1 },
      { note: "D4", lyric: "the", duration: 1 },
      { note: "C4", lyric: "town!", duration: 2 }
    ]
  },

  // 7. London Bridge (Complete)
  {
    id: "london-bridge",
    title: "London Bridge",
    icon: "🌉",
    bpm: 100,
    sequence: [
      { note: "G4", lyric: "Lon", duration: 1 },
      { note: "A4", lyric: "don", duration: 0.5 },
      { note: "G4", lyric: "Bridge", duration: 1 },
      { note: "F4", lyric: "is", duration: 0.5 },
      { note: "E4", lyric: "fall", duration: 0.5 },
      { note: "F4", lyric: "ing", duration: 0.5 },
      { note: "G4", lyric: "down,", duration: 2 },
      { note: "D4", lyric: "fall", duration: 0.5 },
      { note: "E4", lyric: "ing", duration: 0.5 },
      { note: "F4", lyric: "down,", duration: 2 },
      { note: "E4", lyric: "fall", duration: 0.5 },
      { note: "F4", lyric: "ing", duration: 0.5 },
      { note: "G4", lyric: "down.", duration: 2 },
      { note: "G4", lyric: "Lon", duration: 1 },
      { note: "A4", lyric: "don", duration: 0.5 },
      { note: "G4", lyric: "Bridge", duration: 1 },
      { note: "F4", lyric: "is", duration: 0.5 },
      { note: "E4", lyric: "fall", duration: 0.5 },
      { note: "F4", lyric: "ing", duration: 0.5 },
      { note: "G4", lyric: "down,", duration: 2 },
      { note: "D4", lyric: "my", duration: 1 },
      { note: "G4", lyric: "fair", duration: 1 },
      { note: "E4", lyric: "la", duration: 1 },
      { note: "C4", lyric: "dy.", duration: 2 }
    ]
  },

  // 8. Happy Birthday (Complete)
  {
    id: "happy-birthday",
    title: "Happy Birthday",
    icon: "🎂",
    bpm: 100,
    sequence: [
      { note: "C4", lyric: "Hap", duration: 0.75 },
      { note: "C4", lyric: "py", duration: 0.25 },
      { note: "D4", lyric: "birth", duration: 1 },
      { note: "C4", lyric: "day", duration: 1 },
      { note: "F4", lyric: "to", duration: 1 },
      { note: "E4", lyric: "you,", duration: 2 },
      { note: "C4", lyric: "hap", duration: 0.75 },
      { note: "C4", lyric: "py", duration: 0.25 },
      { note: "D4", lyric: "birth", duration: 1 },
      { note: "C4", lyric: "day", duration: 1 },
      { note: "G4", lyric: "to", duration: 1 },
      { note: "F4", lyric: "you,", duration: 2 },
      { note: "C4", lyric: "hap", duration: 0.75 },
      { note: "C4", lyric: "py", duration: 0.25 },
      { note: "C5", lyric: "birth", duration: 1 },
      { note: "A4", lyric: "day", duration: 1 },
      { note: "F4", lyric: "dear", duration: 1 },
      { note: "E4", lyric: "friend,", duration: 2 },
      { note: "A4", lyric: "hap", duration: 0.75 },
      { note: "A4", lyric: "py", duration: 0.25 },
      { note: "G4", lyric: "birth", duration: 1 },
      { note: "F4", lyric: "day", duration: 1 },
      { note: "G4", lyric: "to", duration: 1 },
      { note: "F4", lyric: "you!", duration: 2 }
    ]
  },

  // 9. Baa Baa Black Sheep (Complete with second verse)
  {
    id: "baa-baa",
    title: "Baa Baa Black Sheep",
    icon: "🐑",
    bpm: 90,
    sequence: [
      // Baa baa black sheep, have you any wool?
      { note: "C4", lyric: "Baa", duration: 1 },
      { note: "C4", lyric: "baa", duration: 1 },
      { note: "G4", lyric: "black", duration: 1 },
      { note: "G4", lyric: "sheep,", duration: 1 },
      { note: "A4", lyric: "have", duration: 1 },
      { note: "A4", lyric: "you", duration: 1 },
      { note: "A4", lyric: "a", duration: 0.5 },
      { note: "A4", lyric: "ny", duration: 0.5 },
      { note: "G4", lyric: "wool?", duration: 2 },
      // Yes sir, yes sir, three bags full
      { note: "F4", lyric: "Yes", duration: 1 },
      { note: "F4", lyric: "sir,", duration: 1 },
      { note: "E4", lyric: "yes", duration: 1 },
      { note: "E4", lyric: "sir,", duration: 1 },
      { note: "D4", lyric: "three", duration: 1 },
      { note: "D4", lyric: "bags", duration: 1 },
      { note: "C4", lyric: "full.", duration: 2 },
      // One for the master, one for the dame
      { note: "G4", lyric: "One", duration: 1 },
      { note: "G4", lyric: "for", duration: 0.5 },
      { note: "G4", lyric: "the", duration: 0.5 },
      { note: "F4", lyric: "mas", duration: 1 },
      { note: "F4", lyric: "ter,", duration: 1 },
      { note: "E4", lyric: "one", duration: 1 },
      { note: "E4", lyric: "for", duration: 0.5 },
      { note: "E4", lyric: "the", duration: 0.5 },
      { note: "D4", lyric: "dame,", duration: 2 },
      // One for the little boy who lives down the lane
      { note: "C4", lyric: "one", duration: 1 },
      { note: "C4", lyric: "for", duration: 0.5 },
      { note: "G4", lyric: "the", duration: 0.5 },
      { note: "G4", lyric: "lit", duration: 0.5 },
      { note: "A4", lyric: "tle", duration: 0.5 },
      { note: "A4", lyric: "boy", duration: 1 },
      { note: "G4", lyric: "who", duration: 1 },
      { note: "F4", lyric: "lives", duration: 1 },
      { note: "F4", lyric: "down", duration: 0.5 },
      { note: "E4", lyric: "the", duration: 0.5 },
      { note: "D4", lyric: "lane.", duration: 2 },
      // Baa baa black sheep (ending)
      { note: "C4", lyric: "Baa", duration: 1 },
      { note: "C4", lyric: "baa", duration: 1 },
      { note: "G4", lyric: "black", duration: 1 },
      { note: "G4", lyric: "sheep,", duration: 1 },
      { note: "A4", lyric: "have", duration: 1 },
      { note: "A4", lyric: "you", duration: 1 },
      { note: "A4", lyric: "a", duration: 0.5 },
      { note: "A4", lyric: "ny", duration: 0.5 },
      { note: "G4", lyric: "wool?", duration: 2 },
      { note: "F4", lyric: "Yes", duration: 1 },
      { note: "F4", lyric: "sir,", duration: 1 },
      { note: "E4", lyric: "yes", duration: 1 },
      { note: "E4", lyric: "sir,", duration: 1 },
      { note: "D4", lyric: "three", duration: 1 },
      { note: "D4", lyric: "bags", duration: 1 },
      { note: "C4", lyric: "full!", duration: 2 }
    ]
  },

  // 10. Humpty Dumpty (Complete with "All the king's horses" ending)
  {
    id: "humpty-dumpty",
    title: "Humpty Dumpty",
    icon: "🥚",
    bpm: 100,
    sequence: [
      // Humpty Dumpty sat on a wall
      { note: "E4", lyric: "Hump", duration: 1 },
      { note: "C4", lyric: "ty", duration: 0.5 },
      { note: "D4", lyric: "Dump", duration: 1 },
      { note: "E4", lyric: "ty", duration: 0.5 },
      { note: "F4", lyric: "sat", duration: 1 },
      { note: "D4", lyric: "on", duration: 0.5 },
      { note: "E4", lyric: "a", duration: 0.5 },
      { note: "C4", lyric: "wall,", duration: 2 },
      // Humpty Dumpty had a great fall
      { note: "E4", lyric: "Hump", duration: 1 },
      { note: "C4", lyric: "ty", duration: 0.5 },
      { note: "D4", lyric: "Dump", duration: 1 },
      { note: "E4", lyric: "ty", duration: 0.5 },
      { note: "F4", lyric: "had", duration: 1 },
      { note: "D4", lyric: "a", duration: 0.5 },
      { note: "E4", lyric: "great", duration: 1 },
      { note: "C4", lyric: "fall.", duration: 1.5 },
      // All the king's horses and all the king's men
      { note: "E4", lyric: "All", duration: 0.5 },
      { note: "E4", lyric: "the", duration: 0.5 },
      { note: "F4", lyric: "king's", duration: 1 },
      { note: "G4", lyric: "hor", duration: 0.5 },
      { note: "G4", lyric: "ses", duration: 0.5 },
      { note: "F4", lyric: "and", duration: 0.5 },
      { note: "E4", lyric: "all", duration: 0.5 },
      { note: "E4", lyric: "the", duration: 0.5 },
      { note: "F4", lyric: "king's", duration: 1 },
      { note: "G4", lyric: "men,", duration: 1.5 },
      // Couldn't put Humpty together again
      { note: "G4", lyric: "could", duration: 0.5 },
      { note: "F4", lyric: "n't", duration: 0.5 },
      { note: "E4", lyric: "put", duration: 1 },
      { note: "D4", lyric: "Hump", duration: 0.5 },
      { note: "E4", lyric: "ty", duration: 0.5 },
      { note: "F4", lyric: "to", duration: 0.5 },
      { note: "E4", lyric: "ge", duration: 0.5 },
      { note: "D4", lyric: "ther", duration: 0.5 },
      { note: "E4", lyric: "a", duration: 0.5 },
      { note: "C4", lyric: "gain!", duration: 2 }
    ]
  },

  // 11. Jack and Jill (Complete)
  {
    id: "jack-jill",
    title: "Jack and Jill",
    icon: "💧",
    bpm: 110,
    sequence: [
      { note: "C4", lyric: "Jack", duration: 1 },
      { note: "D4", lyric: "and", duration: 0.5 },
      { note: "E4", lyric: "Jill", duration: 1 },
      { note: "F4", lyric: "went", duration: 0.5 },
      { note: "G4", lyric: "up", duration: 1 },
      { note: "A4", lyric: "the", duration: 0.5 },
      { note: "G4", lyric: "hill,", duration: 1.5 },
      { note: "F4", lyric: "to", duration: 0.5 },
      { note: "E4", lyric: "fetch", duration: 1 },
      { note: "D4", lyric: "a", duration: 0.5 },
      { note: "E4", lyric: "pail", duration: 1 },
      { note: "F4", lyric: "of", duration: 0.5 },
      { note: "G4", lyric: "wa", duration: 1 },
      { note: "E4", lyric: "ter.", duration: 2 },
      { note: "C4", lyric: "Jack", duration: 1 },
      { note: "D4", lyric: "fell", duration: 0.5 },
      { note: "E4", lyric: "down", duration: 1 },
      { note: "F4", lyric: "and", duration: 0.5 },
      { note: "G4", lyric: "broke", duration: 1 },
      { note: "A4", lyric: "his", duration: 0.5 },
      { note: "G4", lyric: "crown,", duration: 1.5 },
      { note: "F4", lyric: "and", duration: 0.5 },
      { note: "E4", lyric: "Jill", duration: 1 },
      { note: "D4", lyric: "came", duration: 0.5 },
      { note: "E4", lyric: "tum", duration: 0.5 },
      { note: "F4", lyric: "bling", duration: 0.5 },
      { note: "D4", lyric: "af", duration: 1 },
      { note: "C4", lyric: "ter.", duration: 2 }
    ]
  },

  // 12. Hickory Dickory Dock (Complete)
  {
    id: "hickory-dock",
    title: "Hickory Dickory Dock",
    icon: "🐭",
    bpm: 120,
    sequence: [
      { note: "C4", lyric: "Hick", duration: 0.5 },
      { note: "D4", lyric: "o", duration: 0.5 },
      { note: "E4", lyric: "ry", duration: 0.5 },
      { note: "C4", lyric: "dick", duration: 0.5 },
      { note: "D4", lyric: "o", duration: 0.5 },
      { note: "E4", lyric: "ry", duration: 0.5 },
      { note: "F4", lyric: "dock,", duration: 2 },
      { note: "G4", lyric: "the", duration: 0.5 },
      { note: "E4", lyric: "mouse", duration: 1 },
      { note: "F4", lyric: "ran", duration: 0.5 },
      { note: "G4", lyric: "up", duration: 0.5 },
      { note: "A4", lyric: "the", duration: 0.5 },
      { note: "G4", lyric: "clock.", duration: 2 },
      { note: "C5", lyric: "The", duration: 0.5 },
      { note: "C5", lyric: "clock", duration: 1 },
      { note: "G4", lyric: "struck", duration: 1 },
      { note: "G4", lyric: "one,", duration: 1.5 },
      { note: "E4", lyric: "the", duration: 0.5 },
      { note: "F4", lyric: "mouse", duration: 1 },
      { note: "G4", lyric: "ran", duration: 0.5 },
      { note: "E4", lyric: "down.", duration: 2 },
      { note: "C4", lyric: "Hick", duration: 0.5 },
      { note: "D4", lyric: "o", duration: 0.5 },
      { note: "E4", lyric: "ry", duration: 0.5 },
      { note: "C4", lyric: "dick", duration: 0.5 },
      { note: "D4", lyric: "o", duration: 0.5 },
      { note: "E4", lyric: "ry", duration: 0.5 },
      { note: "F4", lyric: "dock!", duration: 2 }
    ]
  },

  // 13. Hot Cross Buns (Complete)
  {
    id: "hot-cross-buns",
    title: "Hot Cross Buns",
    icon: "🥯",
    bpm: 90,
    sequence: [
      { note: "E4", lyric: "Hot", duration: 1 },
      { note: "D4", lyric: "cross", duration: 1 },
      { note: "C4", lyric: "buns!", duration: 2 },
      { note: "E4", lyric: "Hot", duration: 1 },
      { note: "D4", lyric: "cross", duration: 1 },
      { note: "C4", lyric: "buns!", duration: 2 },
      { note: "C4", lyric: "One", duration: 0.5 },
      { note: "C4", lyric: "a", duration: 0.5 },
      { note: "C4", lyric: "pen", duration: 0.5 },
      { note: "C4", lyric: "ny,", duration: 0.5 },
      { note: "D4", lyric: "two", duration: 0.5 },
      { note: "D4", lyric: "a", duration: 0.5 },
      { note: "D4", lyric: "pen", duration: 0.5 },
      { note: "D4", lyric: "ny,", duration: 0.5 },
      { note: "E4", lyric: "hot", duration: 1 },
      { note: "D4", lyric: "cross", duration: 1 },
      { note: "C4", lyric: "buns!", duration: 2 }
    ]
  },

  // 14. Rain Rain Go Away (Complete)
  {
    id: "rain-rain",
    title: "Rain Rain Go Away",
    icon: "🌧️",
    bpm: 100,
    sequence: [
      { note: "E4", lyric: "Rain", duration: 1 },
      { note: "C4", lyric: "rain", duration: 1 },
      { note: "E4", lyric: "go", duration: 0.5 },
      { note: "C4", lyric: "a", duration: 0.5 },
      { note: "E4", lyric: "way,", duration: 2 },
      { note: "G4", lyric: "come", duration: 1 },
      { note: "G4", lyric: "a", duration: 0.5 },
      { note: "E4", lyric: "gain", duration: 0.5 },
      { note: "C4", lyric: "an", duration: 0.5 },
      { note: "D4", lyric: "o", duration: 0.5 },
      { note: "E4", lyric: "ther", duration: 0.5 },
      { note: "C4", lyric: "day.", duration: 2.5 },
      { note: "E4", lyric: "Lit", duration: 0.5 },
      { note: "E4", lyric: "tle", duration: 0.5 },
      { note: "G4", lyric: "John", duration: 1 },
      { note: "G4", lyric: "ny", duration: 0.5 },
      { note: "E4", lyric: "wants", duration: 1 },
      { note: "C4", lyric: "to", duration: 0.5 },
      { note: "D4", lyric: "play,", duration: 2 },
      { note: "E4", lyric: "rain", duration: 1 },
      { note: "C4", lyric: "rain", duration: 1 },
      { note: "E4", lyric: "go", duration: 0.5 },
      { note: "C4", lyric: "a", duration: 0.5 },
      { note: "C4", lyric: "way.", duration: 2 }
    ]
  },

  // 15. Ring Around the Rosie (Complete)
  {
    id: "ring-rosie",
    title: "Ring Around the Rosie",
    icon: "🌹",
    bpm: 100,
    sequence: [
      { note: "E4", lyric: "Ring", duration: 1 },
      { note: "E4", lyric: "a", duration: 0.5 },
      { note: "D4", lyric: "round", duration: 0.5 },
      { note: "E4", lyric: "the", duration: 0.5 },
      { note: "C4", lyric: "ro", duration: 1 },
      { note: "E4", lyric: "sie,", duration: 1.5 },
      { note: "E4", lyric: "pock", duration: 1 },
      { note: "D4", lyric: "et", duration: 0.5 },
      { note: "E4", lyric: "full", duration: 0.5 },
      { note: "D4", lyric: "of", duration: 0.5 },
      { note: "C4", lyric: "po", duration: 1 },
      { note: "E4", lyric: "sies,", duration: 1.5 },
      { note: "E4", lyric: "ash", duration: 1 },
      { note: "E4", lyric: "es,", duration: 1 },
      { note: "D4", lyric: "ash", duration: 1 },
      { note: "D4", lyric: "es,", duration: 1 },
      { note: "C4", lyric: "we", duration: 1 },
      { note: "D4", lyric: "all", duration: 1 },
      { note: "E4", lyric: "fall", duration: 1 },
      { note: "C4", lyric: "down!", duration: 2 }
    ]
  },

  // 16. This Old Man (Complete)
  {
    id: "this-old-man",
    title: "This Old Man",
    icon: "👴",
    bpm: 100,
    sequence: [
      { note: "G4", lyric: "This", duration: 1 },
      { note: "E4", lyric: "old", duration: 1 },
      { note: "G4", lyric: "man,", duration: 2 },
      { note: "G4", lyric: "he", duration: 1 },
      { note: "E4", lyric: "played", duration: 1 },
      { note: "G4", lyric: "one,", duration: 2 },
      { note: "A4", lyric: "he", duration: 0.5 },
      { note: "G4", lyric: "played", duration: 0.5 },
      { note: "E4", lyric: "knick", duration: 0.5 },
      { note: "C4", lyric: "knack", duration: 0.5 },
      { note: "D4", lyric: "on", duration: 0.5 },
      { note: "E4", lyric: "my", duration: 0.5 },
      { note: "F4", lyric: "thumb;", duration: 2 },
      { note: "G4", lyric: "with", duration: 0.5 },
      { note: "G4", lyric: "a", duration: 0.5 },
      { note: "A4", lyric: "knick", duration: 0.5 },
      { note: "G4", lyric: "knack", duration: 0.5 },
      { note: "E4", lyric: "pad", duration: 0.5 },
      { note: "C4", lyric: "dy", duration: 0.5 },
      { note: "D4", lyric: "whack,", duration: 2 },
      { note: "E4", lyric: "give", duration: 0.5 },
      { note: "F4", lyric: "the", duration: 0.5 },
      { note: "D4", lyric: "dog", duration: 0.5 },
      { note: "E4", lyric: "a", duration: 0.5 },
      { note: "C4", lyric: "bone,", duration: 2 },
      { note: "A4", lyric: "this", duration: 1 },
      { note: "G4", lyric: "old", duration: 1 },
      { note: "F4", lyric: "man", duration: 1 },
      { note: "G4", lyric: "came", duration: 0.5 },
      { note: "E4", lyric: "roll", duration: 0.5 },
      { note: "D4", lyric: "ing", duration: 0.5 },
      { note: "C4", lyric: "home.", duration: 2.5 }
    ]
  },

  // 17. Are You Sleeping (Frère Jacques) - Complete
  {
    id: "are-you-sleeping",
    title: "Are You Sleeping?",
    icon: "😴",
    bpm: 100,
    sequence: [
      { note: "C4", lyric: "Are", duration: 1 },
      { note: "D4", lyric: "you", duration: 1 },
      { note: "E4", lyric: "sleep", duration: 1 },
      { note: "C4", lyric: "ing?", duration: 1 },
      { note: "C4", lyric: "Are", duration: 1 },
      { note: "D4", lyric: "you", duration: 1 },
      { note: "E4", lyric: "sleep", duration: 1 },
      { note: "C4", lyric: "ing?", duration: 1 },
      { note: "E4", lyric: "Bro", duration: 1 },
      { note: "F4", lyric: "ther", duration: 1 },
      { note: "G4", lyric: "John?", duration: 2 },
      { note: "E4", lyric: "Bro", duration: 1 },
      { note: "F4", lyric: "ther", duration: 1 },
      { note: "G4", lyric: "John?", duration: 2 },
      { note: "G4", lyric: "Morn", duration: 0.5 },
      { note: "A4", lyric: "ing", duration: 0.5 },
      { note: "G4", lyric: "bells", duration: 0.5 },
      { note: "F4", lyric: "are", duration: 0.5 },
      { note: "E4", lyric: "ring", duration: 1 },
      { note: "C4", lyric: "ing,", duration: 1 },
      { note: "G4", lyric: "morn", duration: 0.5 },
      { note: "A4", lyric: "ing", duration: 0.5 },
      { note: "G4", lyric: "bells", duration: 0.5 },
      { note: "F4", lyric: "are", duration: 0.5 },
      { note: "E4", lyric: "ring", duration: 1 },
      { note: "C4", lyric: "ing.", duration: 1 },
      { note: "C4", lyric: "Ding", duration: 1 },
      { note: "G3", lyric: "dong", duration: 1 },
      { note: "C4", lyric: "ding!", duration: 2 },
      { note: "C4", lyric: "Ding", duration: 1 },
      { note: "G3", lyric: "dong", duration: 1 },
      { note: "C4", lyric: "ding!", duration: 2 }
    ]
  },

  // 18. ABC Song (Complete)
  {
    id: "abc-song",
    title: "ABC Song",
    icon: "🔤",
    bpm: 90,
    sequence: [
      { note: "C4", lyric: "A", duration: 1 },
      { note: "C4", lyric: "B", duration: 1 },
      { note: "G4", lyric: "C", duration: 1 },
      { note: "G4", lyric: "D", duration: 1 },
      { note: "A4", lyric: "E", duration: 1 },
      { note: "A4", lyric: "F", duration: 1 },
      { note: "G4", lyric: "G...", duration: 2 },
      { note: "F4", lyric: "H", duration: 1 },
      { note: "F4", lyric: "I", duration: 1 },
      { note: "E4", lyric: "J", duration: 1 },
      { note: "E4", lyric: "K", duration: 1 },
      { note: "D4", lyric: "L", duration: 0.5 },
      { note: "D4", lyric: "M", duration: 0.5 },
      { note: "D4", lyric: "N", duration: 0.5 },
      { note: "D4", lyric: "O", duration: 0.5 },
      { note: "C4", lyric: "P...", duration: 2 },
      { note: "G4", lyric: "Q", duration: 1 },
      { note: "G4", lyric: "R", duration: 1 },
      { note: "F4", lyric: "S...", duration: 2 },
      { note: "E4", lyric: "T", duration: 1 },
      { note: "E4", lyric: "U", duration: 1 },
      { note: "D4", lyric: "V...", duration: 2 },
      { note: "G4", lyric: "W...", duration: 2 },
      { note: "F4", lyric: "X...", duration: 2 },
      { note: "E4", lyric: "Y", duration: 1 },
      { note: "E4", lyric: "and", duration: 1 },
      { note: "D4", lyric: "Z.", duration: 2 },
      { note: "C4", lyric: "Now", duration: 1 },
      { note: "C4", lyric: "I", duration: 1 },
      { note: "G4", lyric: "know", duration: 1 },
      { note: "G4", lyric: "my", duration: 1 },
      { note: "A4", lyric: "A", duration: 1 },
      { note: "A4", lyric: "B", duration: 1 },
      { note: "G4", lyric: "C's,", duration: 2 },
      { note: "F4", lyric: "next", duration: 1 },
      { note: "F4", lyric: "time", duration: 1 },
      { note: "E4", lyric: "won't", duration: 1 },
      { note: "E4", lyric: "you", duration: 1 },
      { note: "D4", lyric: "sing", duration: 1 },
      { note: "D4", lyric: "with", duration: 1 },
      { note: "C4", lyric: "me?", duration: 2 }
    ]
  },

  // 19. Pop Goes the Weasel (Complete)
  {
    id: "pop-weasel",
    title: "Pop Goes the Weasel",
    icon: "🎪",
    bpm: 110,
    sequence: [
      { note: "C4", lyric: "All", duration: 0.5 },
      { note: "E4", lyric: "a", duration: 0.5 },
      { note: "G4", lyric: "round", duration: 0.5 },
      { note: "G4", lyric: "the", duration: 0.5 },
      { note: "A4", lyric: "mul", duration: 0.5 },
      { note: "C5", lyric: "ber", duration: 0.5 },
      { note: "A4", lyric: "ry", duration: 0.5 },
      { note: "G4", lyric: "bush,", duration: 1.5 },
      { note: "C4", lyric: "the", duration: 0.5 },
      { note: "E4", lyric: "mon", duration: 0.5 },
      { note: "G4", lyric: "key", duration: 0.5 },
      { note: "G4", lyric: "chased", duration: 0.5 },
      { note: "A4", lyric: "the", duration: 0.5 },
      { note: "G4", lyric: "wea", duration: 0.5 },
      { note: "E4", lyric: "sel.", duration: 2 },
      { note: "C4", lyric: "The", duration: 0.5 },
      { note: "E4", lyric: "mon", duration: 0.5 },
      { note: "G4", lyric: "key", duration: 0.5 },
      { note: "G4", lyric: "thought", duration: 0.5 },
      { note: "A4", lyric: "'twas", duration: 0.5 },
      { note: "C5", lyric: "all", duration: 0.5 },
      { note: "A4", lyric: "in", duration: 0.5 },
      { note: "G4", lyric: "fun,", duration: 1.5 },
      { note: "F4", lyric: "POP!", duration: 2 },
      { note: "E4", lyric: "goes", duration: 0.5 },
      { note: "D4", lyric: "the", duration: 0.5 },
      { note: "C4", lyric: "wea", duration: 0.5 },
      { note: "C4", lyric: "sel!", duration: 2.5 }
    ]
  },

  // 20. The Muffin Man (Complete)
  {
    id: "muffin-man",
    title: "The Muffin Man",
    icon: "🧁",
    bpm: 100,
    sequence: [
      { note: "D4", lyric: "Oh,", duration: 0.5 },
      { note: "G4", lyric: "do", duration: 0.5 },
      { note: "G4", lyric: "you", duration: 0.5 },
      { note: "G4", lyric: "know", duration: 1 },
      { note: "A4", lyric: "the", duration: 0.5 },
      { note: "G4", lyric: "muf", duration: 0.5 },
      { note: "F4", lyric: "fin", duration: 0.5 },
      { note: "E4", lyric: "man,", duration: 2 },
      { note: "E4", lyric: "the", duration: 0.5 },
      { note: "F4", lyric: "muf", duration: 0.5 },
      { note: "E4", lyric: "fin", duration: 0.5 },
      { note: "D4", lyric: "man,", duration: 1.5 },
      { note: "D4", lyric: "the", duration: 0.5 },
      { note: "E4", lyric: "muf", duration: 0.5 },
      { note: "D4", lyric: "fin", duration: 0.5 },
      { note: "C4", lyric: "man?", duration: 2 },
      { note: "D4", lyric: "Oh,", duration: 0.5 },
      { note: "G4", lyric: "do", duration: 0.5 },
      { note: "G4", lyric: "you", duration: 0.5 },
      { note: "G4", lyric: "know", duration: 1 },
      { note: "A4", lyric: "the", duration: 0.5 },
      { note: "G4", lyric: "muf", duration: 0.5 },
      { note: "F4", lyric: "fin", duration: 0.5 },
      { note: "E4", lyric: "man,", duration: 2 },
      { note: "D4", lyric: "who", duration: 1 },
      { note: "E4", lyric: "lives", duration: 0.5 },
      { note: "F4", lyric: "on", duration: 0.5 },
      { note: "D4", lyric: "Dru", duration: 0.5 },
      { note: "G4", lyric: "ry", duration: 0.5 },
      { note: "G4", lyric: "Lane?", duration: 2 }
    ]
  }
];

/**
 * Get song by ID
 */
export function getSongById(id) {
  return songs.find(song => song.id === id);
}

/**
 * Get list of all song titles with icons
 */
export function getSongList() {
  return songs.map(({ id, title, icon }) => ({ id, title, icon }));
}

/**
 * Parse note string into note letter and octave
 * @param {string} noteStr - e.g., "C4", "D#5"
 * @returns {{ letter: string, octave: number }}
 */
export function parseNote(noteStr) {
  if (noteStr === 'rest') return { letter: 'rest', octave: 0 };
  const match = noteStr.match(/^([A-G]#?)(\d)$/);
  if (!match) {
    console.warn(`Invalid note: ${noteStr}`);
    return { letter: 'C', octave: 4 };
  }
  return { letter: match[1], octave: parseInt(match[2], 10) };
}

/**
 * Get the octave range needed for a song
 * @param {Object} song 
 * @returns {{ minOctave: number, maxOctave: number }}
 */
export function getSongOctaveRange(song) {
  let minOctave = 8;
  let maxOctave = 0;

  for (const item of song.sequence) {
    if (item.note === 'rest') continue;
    const { octave } = parseNote(item.note);
    if (octave < minOctave) minOctave = octave;
    if (octave > maxOctave) maxOctave = octave;
  }

  return { minOctave, maxOctave };
}

/**
 * Get the center note of the song's range (for visual centering)
 * @param {Object} song
 * @returns {string} noteStr (e.g. "F4")
 */
export function getSongRangeCenter(song) {
  let minVal = Infinity;
  let maxVal = -Infinity;
  const WHITE_KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  for (const item of song.sequence) {
    if (item.note === 'rest') continue;
    const { letter, octave } = parseNote(item.note);
    const noteIndex = WHITE_KEYS.indexOf(letter.replace('#', '')); // Ignore sharps for rough centering
    const absValue = octave * 7 + noteIndex;

    if (absValue < minVal) minVal = absValue;
    if (absValue > maxVal) maxVal = absValue;
  }

  if (minVal === Infinity) return "D4"; // Default fallback

  const centerVal = (minVal + maxVal) / 2;
  const centerOctave = Math.floor(centerVal / 7);
  const centerNoteIndex = Math.round(centerVal % 7);
  const centerNote = WHITE_KEYS[centerNoteIndex];

  return `${centerNote}${centerOctave}`;
}
