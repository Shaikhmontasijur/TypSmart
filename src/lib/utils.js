import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Standard WPM calculation formula:
 * WPM = (correct characters / 5) / elapsed minutes
 */
export function calculateWpm(correctChars, elapsedSeconds) {
  if (!elapsedSeconds || elapsedSeconds <= 0 || !correctChars || correctChars <= 0) {
    return 0
  }
  const elapsedMinutes = elapsedSeconds / 60
  const wpm = (correctChars / 5) / elapsedMinutes
  return Math.max(0, Math.round(wpm))
}

/**
 * Accuracy formula:
 * Accuracy = (correct characters / total typed characters) * 100
 */
export function calculateAccuracy(correctChars, totalTypedChars) {
  if (!totalTypedChars || totalTypedChars <= 0) return 100
  const accuracy = (correctChars / totalTypedChars) * 100
  return Math.min(100, Math.max(0, Math.round(accuracy * 10) / 10))
}

export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  if (mins === 0) return `${secs}s`
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}

export function formatDate(dateString) {
  if (!dateString) return 'Just now'
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return 'Recently'
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(date)
}

export function getPerformanceBadge(wpm, accuracy) {
  if (wpm >= 90 && accuracy >= 95) {
    return { title: 'Keyboard Wizard', color: 'emerald', message: 'Incredible velocity and flawless accuracy! Master class performance.' }
  }
  if (wpm >= 70 && accuracy >= 92) {
    return { title: 'Speed Specialist', color: 'cyan', message: 'Outstanding velocity! You are well above professional benchmarks.' }
  }
  if (wpm >= 50 && accuracy >= 90) {
    return { title: 'Fluent Typist', color: 'blue', message: 'Great rhythm and solid accuracy! Keep honing your muscle memory.' }
  }
  if (wpm >= 35) {
    return { title: 'Building Momentum', color: 'amber', message: 'Good baseline. Focus on smooth cadence without pausing.' }
  }
  return { title: 'Developing Touch', color: 'slate', message: 'Focus on accuracy first, and the speed will naturally follow!' }
}
