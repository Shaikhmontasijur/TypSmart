import { useState, useEffect, useRef, useCallback } from 'react'
import { getRandomWords } from '../data/wordsData'
import { calculateWpm, calculateAccuracy } from '../lib/utils'
import { useSound } from './useSound'

export function useTypingEngine({
  duration = 60,
  difficulty = 'easy',
  soundEnabled = true,
  onComplete = null
}) {
  const [text, setText] = useState('')
  const [userInput, setUserInput] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'running' | 'completed'
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isFocused, setIsFocused] = useState(true)

  // Metrics
  const [correctChars, setCorrectChars] = useState(0)
  const [incorrectChars, setIncorrectChars] = useState(0)
  const [totalTypedChars, setTotalTypedChars] = useState(0)
  const [currentWpm, setCurrentWpm] = useState(0)
  const [currentAccuracy, setCurrentAccuracy] = useState(100)

  // Timestamps
  const startTimeRef = useRef(null)
  const timerIntervalRef = useRef(null)
  const inputRef = useRef(null)
  const { playSound } = useSound()

  // Initialize text based on difficulty
  const initText = useCallback(() => {
    // Generate generous amount of text so fast typists don't run out
    const wordCount = duration <= 30 ? 60 : duration <= 60 ? 120 : 240
    const newText = getRandomWords(difficulty, wordCount)
    setText(newText)
    setUserInput('')
    setStatus('idle')
    setTimeLeft(duration)
    setCorrectChars(0)
    setIncorrectChars(0)
    setTotalTypedChars(0)
    setCurrentWpm(0)
    setCurrentAccuracy(100)
    startTimeRef.current = null
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current)
      timerIntervalRef.current = null
    }
  }, [difficulty, duration])

  // Restart / re-initialize on parameter changes
  useEffect(() => {
    initText()
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
      }
    }
  }, [initText])

  // End test handler
  const endTest = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current)
      timerIntervalRef.current = null
    }
    setStatus('completed')
    setTimeLeft(0)
    playSound('finish')

    const elapsedSeconds = duration
    const finalWpm = calculateWpm(correctChars, elapsedSeconds)
    const finalAccuracy = calculateAccuracy(correctChars, totalTypedChars)

    if (onComplete) {
      onComplete({
        duration,
        difficulty,
        wpm: finalWpm,
        accuracy: finalAccuracy,
        correctChars,
        incorrectChars,
        totalChars: totalTypedChars,
        startedAt: startTimeRef.current ? new Date(startTimeRef.current).toISOString() : new Date().toISOString(),
        completedAt: new Date().toISOString()
      })
    }
  }, [duration, difficulty, correctChars, incorrectChars, totalTypedChars, onComplete, playSound])

  // Timer countdown loop
  useEffect(() => {
    if (status === 'running') {
      timerIntervalRef.current = setInterval(() => {
        if (!startTimeRef.current) return
        const elapsedMs = Date.now() - startTimeRef.current
        const remaining = Math.max(0, Math.ceil((duration * 1000 - elapsedMs) / 1000))
        setTimeLeft(remaining)

        // Update live WPM based on real elapsed time
        const elapsedSec = Math.max(1, elapsedMs / 1000)
        const liveWpm = calculateWpm(correctChars, elapsedSec)
        setCurrentWpm(liveWpm)

        if (remaining <= 0) {
          endTest()
        }
      }, 200)
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
      }
    }
  }, [status, duration, correctChars, endTest])

  // Keypress / character handling
  const handleKeyDown = useCallback((e) => {
    if (status === 'completed') return

    // Prevent tab navigation out of area while typing
    if (e.key === 'Tab') {
      e.preventDefault()
      return
    }

    // Handle Backspace
    if (e.key === 'Backspace') {
      e.preventDefault()
      if (userInput.length > 0) {
        if (soundEnabled) playSound('backspace')
        const newInput = userInput.slice(0, -1)
        setUserInput(newInput)
        
        // Recalculate correct/incorrect chars on backspace
        let correct = 0
        let incorrect = 0
        for (let i = 0; i < newInput.length; i++) {
          if (newInput[i] === text[i]) {
            correct++
          } else {
            incorrect++
          }
        }
        setCorrectChars(correct)
        setIncorrectChars(incorrect)
        const acc = calculateAccuracy(correct, newInput.length)
        setCurrentAccuracy(acc)
      }
      return
    }

    // Ignore modifier keys and other special non-character keys
    if (
      e.key.length > 1 || 
      e.ctrlKey || 
      e.altKey || 
      e.metaKey
    ) {
      return
    }

    // Start test on first typed character
    if (status === 'idle') {
      setStatus('running')
      startTimeRef.current = Date.now()
    }

    const typedChar = e.key
    const targetChar = text[userInput.length]
    const isCharCorrect = typedChar === targetChar

    if (soundEnabled) {
      playSound(!isCharCorrect ? 'error' : typedChar === ' ' ? 'space' : 'correct')
    }

    const newInput = userInput + typedChar
    setUserInput(newInput)

    const newTotal = totalTypedChars + 1
    const newCorrect = isCharCorrect ? correctChars + 1 : correctChars
    const newIncorrect = !isCharCorrect ? incorrectChars + 1 : incorrectChars

    setTotalTypedChars(newTotal)
    setCorrectChars(newCorrect)
    setIncorrectChars(newIncorrect)

    const acc = calculateAccuracy(newCorrect, newInput.length)
    setCurrentAccuracy(acc)

    // Calculate live WPM
    if (startTimeRef.current) {
      const elapsedSec = Math.max(1, (Date.now() - startTimeRef.current) / 1000)
      setCurrentWpm(calculateWpm(newCorrect, elapsedSec))
    }

    // If typed all available text, generate more seamlessly
    if (newInput.length >= text.length - 10) {
      const additionalWords = getRandomWords(difficulty, 30)
      setText(prev => prev + ' ' + additionalWords)
    }
  }, [
    status,
    userInput,
    text,
    soundEnabled,
    playSound,
    totalTypedChars,
    correctChars,
    incorrectChars,
    difficulty
  ])

  // Prevent paste
  const handlePaste = useCallback((e) => {
    e.preventDefault()
  }, [])

  // Focus management
  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    setIsFocused(true)
  }, [])

  return {
    text,
    userInput,
    status,
    timeLeft,
    isFocused,
    setIsFocused,
    inputRef,
    correctChars,
    incorrectChars,
    totalTypedChars,
    currentWpm,
    currentAccuracy,
    handleKeyDown,
    handlePaste,
    focusInput,
    restartTest: initText,
    newTest: initText
  }
}
