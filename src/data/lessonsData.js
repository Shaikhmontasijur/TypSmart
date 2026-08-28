// Original curriculum for TypeFlow Practice Lessons

export const LESSONS_DATA = [
  // Beginner Tier
  {
    id: 'b1',
    slug: 'home-row-mastery',
    title: 'Home Row Mastery',
    category: 'Fundamentals',
    difficulty: 'beginner',
    estimatedMinutes: 2,
    description: 'Master the baseline keys: A S D F J K L and semicolon with proper resting hand position.',
    content: 'asdf jkl; asdf jkl; aaddff jjkkll; fads jads klas glad fall flash asks dad flask salad alfalfa',
    keysFocus: ['A', 'S', 'D', 'F', 'J', 'K', 'L', ';']
  },
  {
    id: 'b2',
    slug: 'basic-letters-vowels',
    title: 'Basic Letters & Vowels',
    category: 'Fundamentals',
    difficulty: 'beginner',
    estimatedMinutes: 2,
    description: 'Practice all primary vowels (A, E, I, O, U) and expand finger reach gracefully.',
    content: 'aeiou rapid route open quiet quick house train cloud river stone lemon write shine flame sound',
    keysFocus: ['A', 'E', 'I', 'O', 'U']
  },
  {
    id: 'b3',
    slug: 'left-hand-training',
    title: 'Left Hand Isolation',
    category: 'Hand Isolation',
    difficulty: 'beginner',
    estimatedMinutes: 3,
    description: 'Dedicated exercise focusing on letters mapped to your left hand fingers (Q, W, E, R, T, A, S, D, F, G, Z, X, C, V, B).',
    content: 'sweat aware water craft exact brave weave cedar feast tract trade stage bread dwarf waste',
    keysFocus: ['Q', 'W', 'E', 'R', 'T', 'A', 'S', 'D', 'F', 'G', 'Z', 'X', 'C', 'V', 'B']
  },
  {
    id: 'b4',
    slug: 'right-hand-training',
    title: 'Right Hand Isolation',
    category: 'Hand Isolation',
    difficulty: 'beginner',
    estimatedMinutes: 3,
    description: 'Isolate and build muscle memory for your right hand fingers (Y, U, I, O, P, H, J, K, L, N, M).',
    content: 'monk imply jump look union pink plum nylon hymn moon milk onion pump lion null hoop loop',
    keysFocus: ['Y', 'U', 'I', 'O', 'P', 'H', 'J', 'K', 'L', 'N', 'M']
  },
  {
    id: 'b5',
    slug: 'common-words-flow',
    title: 'Common Words Flow',
    category: 'Flow & Rhythm',
    difficulty: 'beginner',
    estimatedMinutes: 3,
    description: 'Build rhythmic flow across the most frequently used words in daily communication.',
    content: 'the and for you with that have this from they will would there their about which when make time',
    keysFocus: ['Words', 'Spacebar']
  },
  {
    id: 'b6',
    slug: 'short-sentences',
    title: 'Short Sentences',
    category: 'Sentence Building',
    difficulty: 'beginner',
    estimatedMinutes: 3,
    description: 'Synthesize letter pairs and spaces with short, complete sentences.',
    content: 'The sun is warm today. Practice makes progress. Keep your fingers resting lightly on the keys.',
    keysFocus: ['Shift', 'Period', 'Spaces']
  },

  // Intermediate Tier
  {
    id: 'i1',
    slug: 'capital-letters-shift',
    title: 'Capital Letters & Shift',
    category: 'Mechanics',
    difficulty: 'intermediate',
    estimatedMinutes: 3,
    description: 'Practice coordinating the left and right Shift keys for clean, unhesitating capitalization.',
    content: 'London Paris Tokyo New York Alice Bob Charlie Delta Earth Mars Jupiter Saturn Atlantic Pacific',
    keysFocus: ['Left Shift', 'Right Shift']
  },
  {
    id: 'i2',
    slug: 'numbers-top-row',
    title: 'Numbers & Top Row',
    category: 'Top Row',
    difficulty: 'intermediate',
    estimatedMinutes: 3,
    description: 'Reach the numerical row without breaking your home row tactile orientation.',
    content: 'Room 101 has 24 chairs, 5 tables, 360 books, and 12 laptops for 1984 students in 2026.',
    keysFocus: ['0-9', 'Numbers']
  },
  {
    id: 'i3',
    slug: 'punctuation-syntax',
    title: 'Punctuation & Syntax',
    category: 'Punctuation',
    difficulty: 'intermediate',
    estimatedMinutes: 4,
    description: 'Gain comfort with commas, periods, quotes, colons, hyphens, and question marks.',
    content: 'Wait, what happened? "Speed is good," she remarked, "but accuracy is fundamental—never forget it!"',
    keysFocus: ['?', '!', '"', ',', '.', '—']
  },
  {
    id: 'i4',
    slug: 'common-patterns',
    title: 'Common Trigrams & Patterns',
    category: 'Pattern Reflexes',
    difficulty: 'intermediate',
    estimatedMinutes: 3,
    description: 'Condition muscle reflexes on the most common letter triplets in English.',
    content: 'ing the and ion tio ent ion tha nce pro pre str con com dis ter res ver per for ers all and',
    keysFocus: ['Trigrams', 'Affixes']
  },
  {
    id: 'i5',
    slug: 'longer-sentences',
    title: 'Longer Sentences & Cadence',
    category: 'Endurance',
    difficulty: 'intermediate',
    estimatedMinutes: 4,
    description: 'Develop consistent typing endurance through multi-clause compound sentences.',
    content: 'Consistency is the secret catalyst that turns conscious mechanical effort into effortless subconscious fluency over time.',
    keysFocus: ['Cadence', 'Sustained Flow']
  },

  // Advanced Tier
  {
    id: 'a1',
    slug: 'paragraph-practice',
    title: 'Paragraph Practice',
    category: 'Endurance',
    difficulty: 'advanced',
    estimatedMinutes: 5,
    description: 'Sustain high velocity and precision across complete multi-sentence paragraphs.',
    content: 'Deep work requires an environment shielded from ambient distraction. When you cultivate acute focus and maintain deliberate keystroke cadence, your throughput doubles without increasing physical fatigue.',
    keysFocus: ['Sustained Speed', 'Paragraphs']
  },
  {
    id: 'a2',
    slug: 'difficult-rare-words',
    title: 'Difficult & Rare Words',
    category: 'Precision',
    difficulty: 'advanced',
    estimatedMinutes: 4,
    description: 'Tackle complex phonetics, uncommon letter combinations, and awkward finger stretches.',
    content: 'rhythm asphyxiation choreography idiosyncratic kaleidoscope picturesque conscientious juxtapose zephyr hierarchy',
    keysFocus: ['Rare Letters', 'Complex Finger Stretches']
  },
  {
    id: 'a3',
    slug: 'professional-communication',
    title: 'Professional Communication',
    category: 'Real World',
    difficulty: 'advanced',
    estimatedMinutes: 5,
    description: 'Practice typing corporate correspondence, project summaries, and formal prose.',
    content: 'We are pleased to submit the quarterly operational overview. Key performance milestones exceeded expectations across all foundational delivery vectors.',
    keysFocus: ['Business Vocabulary', 'Formal Prose']
  },
  {
    id: 'a4',
    slug: 'coding-practice',
    title: 'Coding & Developer Syntax',
    category: 'Code Typing',
    difficulty: 'advanced',
    estimatedMinutes: 4,
    description: 'Practice brackets, braces, operators, camelCase, snake_case, and code snippets.',
    content: 'const calculateWpm = (chars, timeMs) => Math.round((chars / 5) / (timeMs / 60000)); if (wpm > 100) return true;',
    keysFocus: ['Brackets {} []', 'Operators => =', 'Code Symbols']
  },
  {
    id: 'a5',
    slug: 'speed-challenge',
    title: 'Speed Challenge Arena',
    category: 'Velocity',
    difficulty: 'advanced',
    estimatedMinutes: 3,
    description: 'Push your peak words-per-minute threshold to new maximum velocity limits.',
    content: 'Velocity emerges from relaxation and precision. Do not rush the keys; let the rhythm flow smoothly from thought to fingertip with unyielding clarity.',
    keysFocus: ['Maximum WPM', 'Flow State']
  }
]
