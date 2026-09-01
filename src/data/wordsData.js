// Original high-quality word lists and prompt pools for TypSmart, curated for typing practice and testing. These lists are designed to provide a range of difficulty levels, from common words to complex sentences and code snippets, ensuring a comprehensive typing experience.

export const WORDS_EASY = [
  'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I',
  'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
  'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she',
  'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what',
  'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me',
  'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take',
  'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other',
  'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 'also',
  'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way',
  'even', 'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us'
]

export const WORDS_MEDIUM = [
  'system', 'program', 'network', 'function', 'variable', 'object', 'browser',
  'keyboard', 'practice', 'accuracy', 'velocity', 'progress', 'rhythm', 'balance',
  'control', 'strength', 'focus', 'momentum', 'technique', 'position', 'standard',
  'consistent', 'effortless', 'mastery', 'challenge', 'efficient', 'software',
  'developer', 'interface', 'experience', 'learning', 'discipline', 'confidence',
  'achieve', 'optimize', 'sequence', 'feedback', 'dynamic', 'responsive', 'smooth',
  'structure', 'pattern', 'keyboarding', 'fingertip', 'cadence', 'coordinate',
  'baseline', 'alignment', 'habit', 'frequency', 'duration', 'insight', 'metric'
]

export const WORDS_HARD = [
  'function calculateScore(wpm, acc) { return (wpm * 0.7) + (acc * 0.3); }',
  'const observer = new IntersectionObserver((entries) => { entries.forEach(e => {}); });',
  'TypeScript provides static typing: interface User { id: string; name: string; }',
  'The quick brown fox jumps over the lazy dog! Did you know 100% precision matters?',
  'Hyper-parameter tuning requires meticulous empirical validation (e.g., alpha=0.05).',
  'Asynchronous JavaScript: async function fetchData(url) { const res = await fetch(url); }',
  'The juxtaposition of high velocity and unyielding accuracy creates true typing mastery.',
  'System.out.println("Status: 200 OK — Request executed in 14.8ms.");',
  'Precision beats speed; but speed combined with precision is virtually unstoppable.',
  'Refactoring modular codebases requires vigilance, test coverage, and clean abstractions.'
]

export function getRandomWords(difficulty = 'easy', count = 50) {
  if (difficulty === 'hard') {
    // Pick random sentences / code snippets for hard mode
    const shuffledSnippets = [...WORDS_HARD].sort(() => Math.random() - 0.5)
    return shuffledSnippets.slice(0, 3).join(' ')
  }

  const pool = difficulty === 'medium' 
    ? [...WORDS_EASY, ...WORDS_MEDIUM] 
    : WORDS_EASY

  const selected = []
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length)
    selected.push(pool[randomIndex])
  }

  return selected.join(' ')
}
