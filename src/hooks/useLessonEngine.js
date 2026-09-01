import { useState, useEffect, useRef, useCallback } from 'react'
import { calculateWpm, calculateAccuracy } from '../lib/utils'
import { useSound } from './useSound'

export function useLessonEngine({
  lessonContent = '',
  soundEnabled = true,
  onComplete = null
}) {
  const [userInput, setUserInput] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'running' | 'completed'
  const [isFocused, setIsFocused] = useState(true)

  // Metrics
  const [correctChars, setCorrectChars] = useState(0)
  const [incorrectChars, setIncorrectChars] = useState(0)
  const [totalTypedChars, setTotalTypedChars] = useState(0)
  const [currentWpm, setCurrentWpm] = useState(0)
  const [currentAccuracy, setCurrentAccuracy] = useState(100)
  const [elapsedTime, setElapsedTime] = useState(0)

  const startTimeRef = useRef(null)
  const timerIntervalRef = useRef(null)
  const inputRef = useRef(null)
  const { playSound } = useSound()

  const resetLesson = useCallback(() => {
    setUserInput('')
    setStatus('idle')
    setCorrectChars(0)
    setIncorrectChars(0)
    setTotalTypedChars(0)
    setCurrentWpm(0)
    setCurrentAccuracy(100)
    setElapsedTime(0)
    startTimeRef.current = null
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current)
      timerIntervalRef.current = null
    }
  }, [])

  useEffect(() => {
    resetLesson()
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
      }
    }
  }, [lessonContent, resetLesson])

  const finishLesson = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current)
      timerIntervalRef.current = null
    }
    setStatus('completed')

    const elapsedSeconds = startTimeRef.current
      ? Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000))
      : 1
    const finalWpm = calculateWpm(correctChars, elapsedSeconds)
    const finalAccuracy = calculateAccuracy(correctChars, totalTypedChars)

    if (onComplete) {
      onComplete({
        wpm: finalWpm,
        accuracy: finalAccuracy,
        correctChars,
        incorrectChars,
        totalChars: totalTypedChars,
        elapsedSeconds
      })
    }
  }, [correctChars, incorrectChars, totalTypedChars, onComplete])

  // Live timer tracking
  useEffect(() => {
    if (status === 'running') {
      timerIntervalRef.current = setInterval(() => {
        if (!startTimeRef.current) return
        const elapsedSec = Math.max(1, (Date.now() - startTimeRef.current) / 1000)
        setElapsedTime(Math.round(elapsedSec))
        setCurrentWpm(calculateWpm(correctChars, elapsedSec))
      }, 300)
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
      }
    }
  }, [status, correctChars])

  const handleKeyDown = useCallback((e) => {
    if (status === 'completed' || !lessonContent) return

    if (e.key === 'Tab') {
      e.preventDefault()
      return
    }

    if (e.key === 'Backspace') {
      e.preventDefault()
      if (userInput.length > 0) {
        if (soundEnabled) playSound('backspace')
        const newInput = userInput.slice(0, -1)
        setUserInput(newInput)

        let correct = 0
        let incorrect = 0
        for (let i = 0; i < newInput.length; i++) {
          if (newInput[i] === lessonContent[i]) {
            correct++
          } else {
            incorrect++
          }
        }
        setCorrectChars(correct)
        setIncorrectChars(incorrect)
        setCurrentAccuracy(calculateAccuracy(correct, newInput.length))
      }
      return
    }

    if (e.key.length > 1 || e.ctrlKey || e.altKey || e.metaKey) {
      return
    }

    // Start on first key
    if (status === 'idle') {
      setStatus('running')
      startTimeRef.current = Date.now()
    }

    const typedChar = e.key
    const targetChar = lessonContent[userInput.length]
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

    if (startTimeRef.current) {
      const elapsedSec = Math.max(1, (Date.now() - startTimeRef.current) / 1000)
      setCurrentWpm(calculateWpm(newCorrect, elapsedSec))
    }

    // Lesson completed when all target characters are typed
    if (newInput.length === lessonContent.length) {
      setTimeout(() => {
        finishLesson()
      }, 50)
    }
  }, [
    status,
    userInput,
    lessonContent,
    soundEnabled,
    playSound,
    totalTypedChars,
    correctChars,
    incorrectChars,
    finishLesson
  ])

  const handlePaste = useCallback((e) => {
    e.preventDefault()
  }, [])

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    setIsFocused(true)
  }, [])

  const progressPercent = lessonContent.length > 0
    ? Math.min(100, Math.round((userInput.length / lessonContent.length) * 100))
    : 0

  return {
    userInput,
    status,
    isFocused,
    setIsFocused,
    inputRef,
    correctChars,
    incorrectChars,
    totalTypedChars,
    currentWpm,
    currentAccuracy,
    elapsedTime,
    progressPercent,
    handleKeyDown,
    handlePaste,
    focusInput,
    resetLesson
  }
}
