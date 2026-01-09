/**
 * ToddlyTunes - Song Database
 * 20 Popular Nursery Rhymes (Complete Versions)
 * 
 * Song format:
 * - id: unique identifier
 * - title: display name
 * - icon: emoji for song card
 * - sequence: array of { note, lyric }
 *   - note: letter + octave (e.g., "C4", "D4") or "rest" for pause
 *   - lyric: syllable to display
 */

export const songs = [
  // 1. Mary Had a Little Lamb (Complete)
  {
    id: "mary-lamb",
    title: "Mary Had a Little Lamb",
    icon: "🐑",
    sequence: [
      // Line 1: Mary had a little lamb
      { note: "E4", lyric: "Ma" },
      { note: "D4", lyric: "ry" },
      { note: "C4", lyric: "had" },
      { note: "D4", lyric: "a" },
      { note: "E4", lyric: "lit" },
      { note: "E4", lyric: "tle" },
      { note: "E4", lyric: "lamb," },
      // Line 2: Little lamb, little lamb
      { note: "D4", lyric: "lit" },
      { note: "D4", lyric: "tle" },
      { note: "D4", lyric: "lamb," },
      { note: "E4", lyric: "lit" },
      { note: "G4", lyric: "tle" },
      { note: "G4", lyric: "lamb." },
      // Line 3: Mary had a little lamb
      { note: "E4", lyric: "Ma" },
      { note: "D4", lyric: "ry" },
      { note: "C4", lyric: "had" },
      { note: "D4", lyric: "a" },
      { note: "E4", lyric: "lit" },
      { note: "E4", lyric: "tle" },
      { note: "E4", lyric: "lamb," },
      { note: "E4", lyric: "" },
      // Line 4: Whose fleece was white as snow
      { note: "D4", lyric: "whose" },
      { note: "D4", lyric: "fleece" },
      { note: "E4", lyric: "was" },
      { note: "D4", lyric: "white" },
      { note: "C4", lyric: "as" },
      { note: "C4", lyric: "snow." }
    ]
  },

  // 2. Twinkle Twinkle Little Star (Complete - Full Song)
  {
    id: "twinkle",
    title: "Twinkle Twinkle Little Star",
    icon: "⭐",
    sequence: [
      // Verse 1: Twinkle twinkle little star
      { note: "C4", lyric: "Twin" },
      { note: "C4", lyric: "kle" },
      { note: "G4", lyric: "twin" },
      { note: "G4", lyric: "kle" },
      { note: "A4", lyric: "lit" },
      { note: "A4", lyric: "tle" },
      { note: "G4", lyric: "star," },
      // How I wonder what you are
      { note: "F4", lyric: "how" },
      { note: "F4", lyric: "I" },
      { note: "E4", lyric: "won" },
      { note: "E4", lyric: "der" },
      { note: "D4", lyric: "what" },
      { note: "D4", lyric: "you" },
      { note: "C4", lyric: "are." },
      // Up above the world so high
      { note: "G4", lyric: "Up" },
      { note: "G4", lyric: "a" },
      { note: "F4", lyric: "bove" },
      { note: "F4", lyric: "the" },
      { note: "E4", lyric: "world" },
      { note: "E4", lyric: "so" },
      { note: "D4", lyric: "high," },
      // Like a diamond in the sky
      { note: "G4", lyric: "like" },
      { note: "G4", lyric: "a" },
      { note: "F4", lyric: "dia" },
      { note: "F4", lyric: "mond" },
      { note: "E4", lyric: "in" },
      { note: "E4", lyric: "the" },
      { note: "D4", lyric: "sky." },
      // Twinkle twinkle little star (repeat)
      { note: "C4", lyric: "Twin" },
      { note: "C4", lyric: "kle" },
      { note: "G4", lyric: "twin" },
      { note: "G4", lyric: "kle" },
      { note: "A4", lyric: "lit" },
      { note: "A4", lyric: "tle" },
      { note: "G4", lyric: "star," },
      // How I wonder what you are
      { note: "F4", lyric: "how" },
      { note: "F4", lyric: "I" },
      { note: "E4", lyric: "won" },
      { note: "E4", lyric: "der" },
      { note: "D4", lyric: "what" },
      { note: "D4", lyric: "you" },
      { note: "C4", lyric: "are!" }
    ]
  },

  // 3. Old MacDonald Had a Farm (Complete verse with cow)
  {
    id: "old-macdonald",
    title: "Old MacDonald Had a Farm",
    icon: "🚜",
    sequence: [
      // Old MacDonald had a farm
      { note: "C4", lyric: "Old" },
      { note: "C4", lyric: "Mac" },
      { note: "C4", lyric: "Don" },
      { note: "G3", lyric: "ald" },
      { note: "A3", lyric: "had" },
      { note: "A3", lyric: "a" },
      { note: "G3", lyric: "farm," },
      // E-I-E-I-O
      { note: "E4", lyric: "E" },
      { note: "E4", lyric: "I" },
      { note: "D4", lyric: "E" },
      { note: "D4", lyric: "I" },
      { note: "C4", lyric: "O!" },
      // And on his farm he had a cow
      { note: "C4", lyric: "And" },
      { note: "C4", lyric: "on" },
      { note: "C4", lyric: "his" },
      { note: "G3", lyric: "farm" },
      { note: "A3", lyric: "he" },
      { note: "A3", lyric: "had" },
      { note: "G3", lyric: "a" },
      { note: "G3", lyric: "cow," },
      // E-I-E-I-O
      { note: "E4", lyric: "E" },
      { note: "E4", lyric: "I" },
      { note: "D4", lyric: "E" },
      { note: "D4", lyric: "I" },
      { note: "C4", lyric: "O!" },
      // With a moo moo here
      { note: "G4", lyric: "With" },
      { note: "G4", lyric: "a" },
      { note: "C4", lyric: "moo" },
      { note: "C4", lyric: "moo" },
      { note: "G4", lyric: "here," },
      // And a moo moo there
      { note: "G4", lyric: "and" },
      { note: "G4", lyric: "a" },
      { note: "C4", lyric: "moo" },
      { note: "C4", lyric: "moo" },
      { note: "G4", lyric: "there," },
      // Here a moo, there a moo
      { note: "C4", lyric: "here" },
      { note: "C4", lyric: "a" },
      { note: "C4", lyric: "moo," },
      { note: "G4", lyric: "there" },
      { note: "G4", lyric: "a" },
      { note: "G4", lyric: "moo," },
      // Everywhere a moo moo
      { note: "C4", lyric: "ev" },
      { note: "D4", lyric: "'ry" },
      { note: "E4", lyric: "where" },
      { note: "F4", lyric: "a" },
      { note: "G4", lyric: "moo" },
      { note: "G4", lyric: "moo!" },
      // Old MacDonald had a farm
      { note: "C4", lyric: "Old" },
      { note: "C4", lyric: "Mac" },
      { note: "C4", lyric: "Don" },
      { note: "G3", lyric: "ald" },
      { note: "A3", lyric: "had" },
      { note: "A3", lyric: "a" },
      { note: "G3", lyric: "farm," },
      // E-I-E-I-O
      { note: "E4", lyric: "E" },
      { note: "E4", lyric: "I" },
      { note: "D4", lyric: "E" },
      { note: "D4", lyric: "I" },
      { note: "C4", lyric: "O!" }
    ]
  },

  // 4. Row Row Row Your Boat (Complete)
  {
    id: "row-boat",
    title: "Row Row Row Your Boat",
    icon: "🚣",
    sequence: [
      { note: "C4", lyric: "Row" },
      { note: "C4", lyric: "row" },
      { note: "C4", lyric: "row" },
      { note: "D4", lyric: "your" },
      { note: "E4", lyric: "boat," },
      { note: "E4", lyric: "gent" },
      { note: "D4", lyric: "ly" },
      { note: "E4", lyric: "down" },
      { note: "F4", lyric: "the" },
      { note: "G4", lyric: "stream." },
      { note: "C5", lyric: "Mer" },
      { note: "C5", lyric: "ri" },
      { note: "C5", lyric: "ly" },
      { note: "G4", lyric: "mer" },
      { note: "G4", lyric: "ri" },
      { note: "G4", lyric: "ly" },
      { note: "E4", lyric: "mer" },
      { note: "E4", lyric: "ri" },
      { note: "E4", lyric: "ly" },
      { note: "C4", lyric: "mer" },
      { note: "C4", lyric: "ri" },
      { note: "C4", lyric: "ly," },
      { note: "G4", lyric: "life" },
      { note: "F4", lyric: "is" },
      { note: "E4", lyric: "but" },
      { note: "D4", lyric: "a" },
      { note: "C4", lyric: "dream." }
    ]
  },

  // 5. Itsy Bitsy Spider (Complete with "Out came the sun" verse)
  {
    id: "itsy-spider",
    title: "Itsy Bitsy Spider",
    icon: "🕷️",
    sequence: [
      // The itsy bitsy spider climbed up the water spout
      { note: "C4", lyric: "The" },
      { note: "C4", lyric: "it" },
      { note: "C4", lyric: "sy" },
      { note: "D4", lyric: "bit" },
      { note: "E4", lyric: "sy" },
      { note: "E4", lyric: "spi" },
      { note: "D4", lyric: "der" },
      { note: "C4", lyric: "climbed" },
      { note: "D4", lyric: "up" },
      { note: "E4", lyric: "the" },
      { note: "C4", lyric: "spout." },
      // Down came the rain and washed the spider out
      { note: "E4", lyric: "Down" },
      { note: "E4", lyric: "came" },
      { note: "F4", lyric: "the" },
      { note: "G4", lyric: "rain" },
      { note: "G4", lyric: "and" },
      { note: "F4", lyric: "washed" },
      { note: "E4", lyric: "the" },
      { note: "F4", lyric: "spi" },
      { note: "G4", lyric: "der" },
      { note: "E4", lyric: "out." },
      // Out came the sun and dried up all the rain
      { note: "E4", lyric: "Out" },
      { note: "E4", lyric: "came" },
      { note: "F4", lyric: "the" },
      { note: "G4", lyric: "sun" },
      { note: "G4", lyric: "and" },
      { note: "F4", lyric: "dried" },
      { note: "E4", lyric: "up" },
      { note: "F4", lyric: "all" },
      { note: "G4", lyric: "the" },
      { note: "E4", lyric: "rain." },
      // And the itsy bitsy spider climbed up the spout again
      { note: "C4", lyric: "And" },
      { note: "C4", lyric: "the" },
      { note: "C4", lyric: "it" },
      { note: "C4", lyric: "sy" },
      { note: "D4", lyric: "bit" },
      { note: "E4", lyric: "sy" },
      { note: "E4", lyric: "spi" },
      { note: "D4", lyric: "der" },
      { note: "C4", lyric: "climbed" },
      { note: "D4", lyric: "up" },
      { note: "E4", lyric: "the" },
      { note: "F4", lyric: "spout" },
      { note: "G4", lyric: "a" },
      { note: "C4", lyric: "gain!" }
    ]
  },

  // 6. Wheels on the Bus (Complete)
  {
    id: "wheels-bus",
    title: "Wheels on the Bus",
    icon: "🚌",
    sequence: [
      { note: "C4", lyric: "The" },
      { note: "C4", lyric: "wheels" },
      { note: "C4", lyric: "on" },
      { note: "C4", lyric: "the" },
      { note: "E4", lyric: "bus" },
      { note: "G4", lyric: "go" },
      { note: "G4", lyric: "round" },
      { note: "G4", lyric: "and" },
      { note: "E4", lyric: "round," },
      { note: "D4", lyric: "round" },
      { note: "F4", lyric: "and" },
      { note: "D4", lyric: "round," },
      { note: "C4", lyric: "round" },
      { note: "E4", lyric: "and" },
      { note: "C4", lyric: "round." },
      { note: "C4", lyric: "The" },
      { note: "C4", lyric: "wheels" },
      { note: "C4", lyric: "on" },
      { note: "C4", lyric: "the" },
      { note: "E4", lyric: "bus" },
      { note: "G4", lyric: "go" },
      { note: "G4", lyric: "round" },
      { note: "G4", lyric: "and" },
      { note: "E4", lyric: "round," },
      { note: "D4", lyric: "all" },
      { note: "D4", lyric: "through" },
      { note: "D4", lyric: "the" },
      { note: "C4", lyric: "town!" }
    ]
  },

  // 7. London Bridge (Complete)
  {
    id: "london-bridge",
    title: "London Bridge",
    icon: "🌉",
    sequence: [
      { note: "G4", lyric: "Lon" },
      { note: "A4", lyric: "don" },
      { note: "G4", lyric: "Bridge" },
      { note: "F4", lyric: "is" },
      { note: "E4", lyric: "fall" },
      { note: "F4", lyric: "ing" },
      { note: "G4", lyric: "down," },
      { note: "D4", lyric: "fall" },
      { note: "E4", lyric: "ing" },
      { note: "F4", lyric: "down," },
      { note: "E4", lyric: "fall" },
      { note: "F4", lyric: "ing" },
      { note: "G4", lyric: "down." },
      { note: "G4", lyric: "Lon" },
      { note: "A4", lyric: "don" },
      { note: "G4", lyric: "Bridge" },
      { note: "F4", lyric: "is" },
      { note: "E4", lyric: "fall" },
      { note: "F4", lyric: "ing" },
      { note: "G4", lyric: "down," },
      { note: "D4", lyric: "my" },
      { note: "G4", lyric: "fair" },
      { note: "E4", lyric: "la" },
      { note: "C4", lyric: "dy." }
    ]
  },

  // 8. Happy Birthday (Complete)
  {
    id: "happy-birthday",
    title: "Happy Birthday",
    icon: "🎂",
    sequence: [
      { note: "C4", lyric: "Hap" },
      { note: "C4", lyric: "py" },
      { note: "D4", lyric: "birth" },
      { note: "C4", lyric: "day" },
      { note: "F4", lyric: "to" },
      { note: "E4", lyric: "you," },
      { note: "C4", lyric: "hap" },
      { note: "C4", lyric: "py" },
      { note: "D4", lyric: "birth" },
      { note: "C4", lyric: "day" },
      { note: "G4", lyric: "to" },
      { note: "F4", lyric: "you," },
      { note: "C4", lyric: "hap" },
      { note: "C4", lyric: "py" },
      { note: "C5", lyric: "birth" },
      { note: "A4", lyric: "day" },
      { note: "F4", lyric: "dear" },
      { note: "E4", lyric: "friend," },
      { note: "A4", lyric: "hap" },
      { note: "A4", lyric: "py" },
      { note: "G4", lyric: "birth" },
      { note: "F4", lyric: "day" },
      { note: "G4", lyric: "to" },
      { note: "F4", lyric: "you!" }
    ]
  },

  // 9. Baa Baa Black Sheep (Complete with second verse)
  {
    id: "baa-baa",
    title: "Baa Baa Black Sheep",
    icon: "🐑",
    sequence: [
      // Baa baa black sheep, have you any wool?
      { note: "C4", lyric: "Baa" },
      { note: "C4", lyric: "baa" },
      { note: "G4", lyric: "black" },
      { note: "G4", lyric: "sheep," },
      { note: "A4", lyric: "have" },
      { note: "A4", lyric: "you" },
      { note: "A4", lyric: "a" },
      { note: "A4", lyric: "ny" },
      { note: "G4", lyric: "wool?" },
      // Yes sir, yes sir, three bags full
      { note: "F4", lyric: "Yes" },
      { note: "F4", lyric: "sir," },
      { note: "E4", lyric: "yes" },
      { note: "E4", lyric: "sir," },
      { note: "D4", lyric: "three" },
      { note: "D4", lyric: "bags" },
      { note: "C4", lyric: "full." },
      // One for the master, one for the dame
      { note: "G4", lyric: "One" },
      { note: "G4", lyric: "for" },
      { note: "G4", lyric: "the" },
      { note: "F4", lyric: "mas" },
      { note: "F4", lyric: "ter," },
      { note: "E4", lyric: "one" },
      { note: "E4", lyric: "for" },
      { note: "E4", lyric: "the" },
      { note: "D4", lyric: "dame," },
      // One for the little boy who lives down the lane
      { note: "C4", lyric: "one" },
      { note: "C4", lyric: "for" },
      { note: "G4", lyric: "the" },
      { note: "G4", lyric: "lit" },
      { note: "A4", lyric: "tle" },
      { note: "A4", lyric: "boy" },
      { note: "G4", lyric: "who" },
      { note: "F4", lyric: "lives" },
      { note: "F4", lyric: "down" },
      { note: "E4", lyric: "the" },
      { note: "D4", lyric: "lane." },
      // Baa baa black sheep (ending)
      { note: "C4", lyric: "Baa" },
      { note: "C4", lyric: "baa" },
      { note: "G4", lyric: "black" },
      { note: "G4", lyric: "sheep," },
      { note: "A4", lyric: "have" },
      { note: "A4", lyric: "you" },
      { note: "A4", lyric: "a" },
      { note: "A4", lyric: "ny" },
      { note: "G4", lyric: "wool?" },
      { note: "F4", lyric: "Yes" },
      { note: "F4", lyric: "sir," },
      { note: "E4", lyric: "yes" },
      { note: "E4", lyric: "sir," },
      { note: "D4", lyric: "three" },
      { note: "D4", lyric: "bags" },
      { note: "C4", lyric: "full!" }
    ]
  },

  // 10. Humpty Dumpty (Complete with "All the king's horses" ending)
  {
    id: "humpty-dumpty",
    title: "Humpty Dumpty",
    icon: "🥚",
    sequence: [
      // Humpty Dumpty sat on a wall
      { note: "E4", lyric: "Hump" },
      { note: "C4", lyric: "ty" },
      { note: "D4", lyric: "Dump" },
      { note: "E4", lyric: "ty" },
      { note: "F4", lyric: "sat" },
      { note: "D4", lyric: "on" },
      { note: "E4", lyric: "a" },
      { note: "C4", lyric: "wall," },
      // Humpty Dumpty had a great fall
      { note: "E4", lyric: "Hump" },
      { note: "C4", lyric: "ty" },
      { note: "D4", lyric: "Dump" },
      { note: "E4", lyric: "ty" },
      { note: "F4", lyric: "had" },
      { note: "D4", lyric: "a" },
      { note: "E4", lyric: "great" },
      { note: "C4", lyric: "fall." },
      // All the king's horses and all the king's men
      { note: "E4", lyric: "All" },
      { note: "E4", lyric: "the" },
      { note: "F4", lyric: "king's" },
      { note: "G4", lyric: "hor" },
      { note: "G4", lyric: "ses" },
      { note: "F4", lyric: "and" },
      { note: "E4", lyric: "all" },
      { note: "E4", lyric: "the" },
      { note: "F4", lyric: "king's" },
      { note: "G4", lyric: "men," },
      // Couldn't put Humpty together again
      { note: "G4", lyric: "could" },
      { note: "F4", lyric: "n't" },
      { note: "E4", lyric: "put" },
      { note: "D4", lyric: "Hump" },
      { note: "E4", lyric: "ty" },
      { note: "F4", lyric: "to" },
      { note: "E4", lyric: "ge" },
      { note: "D4", lyric: "ther" },
      { note: "E4", lyric: "a" },
      { note: "C4", lyric: "gain!" }
    ]
  },

  // 11. Jack and Jill (Complete)
  {
    id: "jack-jill",
    title: "Jack and Jill",
    icon: "💧",
    sequence: [
      { note: "C4", lyric: "Jack" },
      { note: "D4", lyric: "and" },
      { note: "E4", lyric: "Jill" },
      { note: "F4", lyric: "went" },
      { note: "G4", lyric: "up" },
      { note: "A4", lyric: "the" },
      { note: "G4", lyric: "hill," },
      { note: "F4", lyric: "to" },
      { note: "E4", lyric: "fetch" },
      { note: "D4", lyric: "a" },
      { note: "E4", lyric: "pail" },
      { note: "F4", lyric: "of" },
      { note: "G4", lyric: "wa" },
      { note: "E4", lyric: "ter." },
      { note: "C4", lyric: "Jack" },
      { note: "D4", lyric: "fell" },
      { note: "E4", lyric: "down" },
      { note: "F4", lyric: "and" },
      { note: "G4", lyric: "broke" },
      { note: "A4", lyric: "his" },
      { note: "G4", lyric: "crown," },
      { note: "F4", lyric: "and" },
      { note: "E4", lyric: "Jill" },
      { note: "D4", lyric: "came" },
      { note: "E4", lyric: "tum" },
      { note: "F4", lyric: "bling" },
      { note: "D4", lyric: "af" },
      { note: "C4", lyric: "ter." }
    ]
  },

  // 12. Hickory Dickory Dock (Complete)
  {
    id: "hickory-dock",
    title: "Hickory Dickory Dock",
    icon: "🐭",
    sequence: [
      { note: "C4", lyric: "Hick" },
      { note: "D4", lyric: "o" },
      { note: "E4", lyric: "ry" },
      { note: "C4", lyric: "dick" },
      { note: "D4", lyric: "o" },
      { note: "E4", lyric: "ry" },
      { note: "F4", lyric: "dock," },
      { note: "G4", lyric: "the" },
      { note: "E4", lyric: "mouse" },
      { note: "F4", lyric: "ran" },
      { note: "G4", lyric: "up" },
      { note: "A4", lyric: "the" },
      { note: "G4", lyric: "clock." },
      { note: "C5", lyric: "The" },
      { note: "C5", lyric: "clock" },
      { note: "G4", lyric: "struck" },
      { note: "G4", lyric: "one," },
      { note: "E4", lyric: "the" },
      { note: "F4", lyric: "mouse" },
      { note: "G4", lyric: "ran" },
      { note: "E4", lyric: "down." },
      { note: "C4", lyric: "Hick" },
      { note: "D4", lyric: "o" },
      { note: "E4", lyric: "ry" },
      { note: "C4", lyric: "dick" },
      { note: "D4", lyric: "o" },
      { note: "E4", lyric: "ry" },
      { note: "F4", lyric: "dock!" }
    ]
  },

  // 13. Hot Cross Buns (Complete)
  {
    id: "hot-cross-buns",
    title: "Hot Cross Buns",
    icon: "🥯",
    sequence: [
      { note: "E4", lyric: "Hot" },
      { note: "D4", lyric: "cross" },
      { note: "C4", lyric: "buns!" },
      { note: "E4", lyric: "Hot" },
      { note: "D4", lyric: "cross" },
      { note: "C4", lyric: "buns!" },
      { note: "C4", lyric: "One" },
      { note: "C4", lyric: "a" },
      { note: "C4", lyric: "pen" },
      { note: "C4", lyric: "ny," },
      { note: "D4", lyric: "two" },
      { note: "D4", lyric: "a" },
      { note: "D4", lyric: "pen" },
      { note: "D4", lyric: "ny," },
      { note: "E4", lyric: "hot" },
      { note: "D4", lyric: "cross" },
      { note: "C4", lyric: "buns!" }
    ]
  },

  // 14. Rain Rain Go Away (Complete)
  {
    id: "rain-rain",
    title: "Rain Rain Go Away",
    icon: "🌧️",
    sequence: [
      { note: "E4", lyric: "Rain" },
      { note: "C4", lyric: "rain" },
      { note: "E4", lyric: "go" },
      { note: "C4", lyric: "a" },
      { note: "E4", lyric: "way," },
      { note: "G4", lyric: "come" },
      { note: "G4", lyric: "a" },
      { note: "E4", lyric: "gain" },
      { note: "C4", lyric: "an" },
      { note: "D4", lyric: "o" },
      { note: "E4", lyric: "ther" },
      { note: "C4", lyric: "day." },
      { note: "E4", lyric: "Lit" },
      { note: "E4", lyric: "tle" },
      { note: "G4", lyric: "John" },
      { note: "G4", lyric: "ny" },
      { note: "E4", lyric: "wants" },
      { note: "C4", lyric: "to" },
      { note: "D4", lyric: "play," },
      { note: "E4", lyric: "rain" },
      { note: "C4", lyric: "rain" },
      { note: "E4", lyric: "go" },
      { note: "C4", lyric: "a" },
      { note: "C4", lyric: "way." }
    ]
  },

  // 15. Ring Around the Rosie (Complete)
  {
    id: "ring-rosie",
    title: "Ring Around the Rosie",
    icon: "🌹",
    sequence: [
      { note: "E4", lyric: "Ring" },
      { note: "E4", lyric: "a" },
      { note: "D4", lyric: "round" },
      { note: "E4", lyric: "the" },
      { note: "C4", lyric: "ro" },
      { note: "E4", lyric: "sie," },
      { note: "E4", lyric: "pock" },
      { note: "D4", lyric: "et" },
      { note: "E4", lyric: "full" },
      { note: "D4", lyric: "of" },
      { note: "C4", lyric: "po" },
      { note: "E4", lyric: "sies," },
      { note: "E4", lyric: "ash" },
      { note: "E4", lyric: "es," },
      { note: "D4", lyric: "ash" },
      { note: "D4", lyric: "es," },
      { note: "C4", lyric: "we" },
      { note: "D4", lyric: "all" },
      { note: "E4", lyric: "fall" },
      { note: "C4", lyric: "down!" }
    ]
  },

  // 16. This Old Man (Complete)
  {
    id: "this-old-man",
    title: "This Old Man",
    icon: "👴",
    sequence: [
      { note: "G4", lyric: "This" },
      { note: "E4", lyric: "old" },
      { note: "G4", lyric: "man," },
      { note: "G4", lyric: "he" },
      { note: "E4", lyric: "played" },
      { note: "G4", lyric: "one," },
      { note: "A4", lyric: "he" },
      { note: "G4", lyric: "played" },
      { note: "E4", lyric: "knick" },
      { note: "C4", lyric: "knack" },
      { note: "D4", lyric: "on" },
      { note: "E4", lyric: "my" },
      { note: "F4", lyric: "thumb;" },
      { note: "G4", lyric: "with" },
      { note: "G4", lyric: "a" },
      { note: "A4", lyric: "knick" },
      { note: "G4", lyric: "knack" },
      { note: "E4", lyric: "pad" },
      { note: "C4", lyric: "dy" },
      { note: "D4", lyric: "whack," },
      { note: "E4", lyric: "give" },
      { note: "F4", lyric: "the" },
      { note: "D4", lyric: "dog" },
      { note: "E4", lyric: "a" },
      { note: "C4", lyric: "bone," },
      { note: "A4", lyric: "this" },
      { note: "G4", lyric: "old" },
      { note: "F4", lyric: "man" },
      { note: "G4", lyric: "came" },
      { note: "E4", lyric: "roll" },
      { note: "D4", lyric: "ing" },
      { note: "C4", lyric: "home." }
    ]
  },

  // 17. Are You Sleeping (Frère Jacques) - Complete
  {
    id: "are-you-sleeping",
    title: "Are You Sleeping?",
    icon: "😴",
    sequence: [
      { note: "C4", lyric: "Are" },
      { note: "D4", lyric: "you" },
      { note: "E4", lyric: "sleep" },
      { note: "C4", lyric: "ing?" },
      { note: "C4", lyric: "Are" },
      { note: "D4", lyric: "you" },
      { note: "E4", lyric: "sleep" },
      { note: "C4", lyric: "ing?" },
      { note: "E4", lyric: "Bro" },
      { note: "F4", lyric: "ther" },
      { note: "G4", lyric: "John?" },
      { note: "E4", lyric: "Bro" },
      { note: "F4", lyric: "ther" },
      { note: "G4", lyric: "John?" },
      { note: "G4", lyric: "Morn" },
      { note: "A4", lyric: "ing" },
      { note: "G4", lyric: "bells" },
      { note: "F4", lyric: "are" },
      { note: "E4", lyric: "ring" },
      { note: "C4", lyric: "ing," },
      { note: "G4", lyric: "morn" },
      { note: "A4", lyric: "ing" },
      { note: "G4", lyric: "bells" },
      { note: "F4", lyric: "are" },
      { note: "E4", lyric: "ring" },
      { note: "C4", lyric: "ing." },
      { note: "C4", lyric: "Ding" },
      { note: "G3", lyric: "dong" },
      { note: "C4", lyric: "ding!" },
      { note: "C4", lyric: "Ding" },
      { note: "G3", lyric: "dong" },
      { note: "C4", lyric: "ding!" }
    ]
  },

  // 18. ABC Song (Complete)
  {
    id: "abc-song",
    title: "ABC Song",
    icon: "🔤",
    sequence: [
      { note: "C4", lyric: "A" },
      { note: "C4", lyric: "B" },
      { note: "G4", lyric: "C" },
      { note: "G4", lyric: "D" },
      { note: "A4", lyric: "E" },
      { note: "A4", lyric: "F" },
      { note: "G4", lyric: "G..." },
      { note: "F4", lyric: "H" },
      { note: "F4", lyric: "I" },
      { note: "E4", lyric: "J" },
      { note: "E4", lyric: "K" },
      { note: "D4", lyric: "L" },
      { note: "D4", lyric: "M" },
      { note: "D4", lyric: "N" },
      { note: "D4", lyric: "O" },
      { note: "C4", lyric: "P..." },
      { note: "G4", lyric: "Q" },
      { note: "G4", lyric: "R" },
      { note: "F4", lyric: "S..." },
      { note: "E4", lyric: "T" },
      { note: "E4", lyric: "U" },
      { note: "D4", lyric: "V..." },
      { note: "G4", lyric: "W..." },
      { note: "F4", lyric: "X..." },
      { note: "E4", lyric: "Y" },
      { note: "E4", lyric: "and" },
      { note: "D4", lyric: "Z." },
      { note: "C4", lyric: "Now" },
      { note: "C4", lyric: "I" },
      { note: "G4", lyric: "know" },
      { note: "G4", lyric: "my" },
      { note: "A4", lyric: "A" },
      { note: "A4", lyric: "B" },
      { note: "G4", lyric: "C's," },
      { note: "F4", lyric: "next" },
      { note: "F4", lyric: "time" },
      { note: "E4", lyric: "won't" },
      { note: "E4", lyric: "you" },
      { note: "D4", lyric: "sing" },
      { note: "D4", lyric: "with" },
      { note: "C4", lyric: "me?" }
    ]
  },

  // 19. Pop Goes the Weasel (Complete)
  {
    id: "pop-weasel",
    title: "Pop Goes the Weasel",
    icon: "🎪",
    sequence: [
      { note: "C4", lyric: "All" },
      { note: "E4", lyric: "a" },
      { note: "G4", lyric: "round" },
      { note: "G4", lyric: "the" },
      { note: "A4", lyric: "mul" },
      { note: "C5", lyric: "ber" },
      { note: "A4", lyric: "ry" },
      { note: "G4", lyric: "bush," },
      { note: "C4", lyric: "the" },
      { note: "E4", lyric: "mon" },
      { note: "G4", lyric: "key" },
      { note: "G4", lyric: "chased" },
      { note: "A4", lyric: "the" },
      { note: "G4", lyric: "wea" },
      { note: "E4", lyric: "sel." },
      { note: "C4", lyric: "The" },
      { note: "E4", lyric: "mon" },
      { note: "G4", lyric: "key" },
      { note: "G4", lyric: "thought" },
      { note: "A4", lyric: "'twas" },
      { note: "C5", lyric: "all" },
      { note: "A4", lyric: "in" },
      { note: "G4", lyric: "fun," },
      { note: "F4", lyric: "POP!" },
      { note: "E4", lyric: "goes" },
      { note: "D4", lyric: "the" },
      { note: "C4", lyric: "wea" },
      { note: "C4", lyric: "sel!" }
    ]
  },

  // 20. The Muffin Man (Complete)
  {
    id: "muffin-man",
    title: "The Muffin Man",
    icon: "🧁",
    sequence: [
      { note: "D4", lyric: "Oh," },
      { note: "G4", lyric: "do" },
      { note: "G4", lyric: "you" },
      { note: "G4", lyric: "know" },
      { note: "A4", lyric: "the" },
      { note: "G4", lyric: "muf" },
      { note: "F4", lyric: "fin" },
      { note: "E4", lyric: "man," },
      { note: "E4", lyric: "the" },
      { note: "F4", lyric: "muf" },
      { note: "E4", lyric: "fin" },
      { note: "D4", lyric: "man," },
      { note: "D4", lyric: "the" },
      { note: "E4", lyric: "muf" },
      { note: "D4", lyric: "fin" },
      { note: "C4", lyric: "man?" },
      { note: "D4", lyric: "Oh," },
      { note: "G4", lyric: "do" },
      { note: "G4", lyric: "you" },
      { note: "G4", lyric: "know" },
      { note: "A4", lyric: "the" },
      { note: "G4", lyric: "muf" },
      { note: "F4", lyric: "fin" },
      { note: "E4", lyric: "man," },
      { note: "D4", lyric: "who" },
      { note: "E4", lyric: "lives" },
      { note: "F4", lyric: "on" },
      { note: "D4", lyric: "Dru" },
      { note: "G4", lyric: "ry" },
      { note: "G4", lyric: "Lane?" }
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
