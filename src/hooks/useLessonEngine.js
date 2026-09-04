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

  const textRef = useRef('')
  const userInputRef = useRef('')
  const statusRef = useRef('idle')
  const correctCharsRef = useRef(0)
  const incorrectCharsRef = useRef(0)
  const totalTypedCharsRef = useRef(0)

  const { playSound } = useSound()

  const syncInputElement = useCallback((value) => {
    if (inputRef.current && inputRef.current.value !== value) {
      inputRef.current.value = value
    }
  }, [])

  const recalculateMetrics = useCallback((input, targetText) => {
    let correct = 0
    let incorrect = 0

    for (let i = 0; i < input.length; i++) {
      if (input[i] === targetText[i]) {
        correct++
      } else {
        incorrect++
      }
    }

    return { correct, incorrect }
  }, [])

  const finishLesson = useCallback(() => {
    if (statusRef.current === 'completed') {
      return
    }

    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current)
      timerIntervalRef.current = null
    }

    statusRef.current = 'completed'
    setStatus('completed')

    const elapsedSeconds = startTimeRef.current
      ? Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000))
      : 1

    const finalCorrect = correctCharsRef.current
    const finalIncorrect = incorrectCharsRef.current
    const finalTotal = totalTypedCharsRef.current

    const finalWpm = calculateWpm(finalCorrect, elapsedSeconds)
    const finalAccuracy = calculateAccuracy(finalCorrect, finalTotal)

    if (onComplete) {
      onComplete({
        wpm: finalWpm,
        accuracy: finalAccuracy,
        correctChars: finalCorrect,
        incorrectChars: finalIncorrect,
        totalChars: finalTotal,
        elapsedSeconds
      })
    }
  }, [onComplete])

  const resetLesson = useCallback(() => {
    setUserInput('')
    setStatus('idle')
    setCorrectChars(0)
    setIncorrectChars(0)
    setTotalTypedChars(0)
    setCurrentWpm(0)
    setCurrentAccuracy(100)
    setElapsedTime(0)

    userInputRef.current = ''
    statusRef.current = 'idle'
    correctCharsRef.current = 0
    incorrectCharsRef.current = 0
    totalTypedCharsRef.current = 0

    startTimeRef.current = null
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current)
      timerIntervalRef.current = null
    }

    syncInputElement('')
  }, [syncInputElement])

  useEffect(() => {
    textRef.current = lessonContent || ''
    resetLesson()

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
        timerIntervalRef.current = null
      }
    }
  }, [lessonContent, resetLesson])

  // Live timer tracking
  useEffect(() => {
    if (status === 'running') {
      timerIntervalRef.current = setInterval(() => {
        if (!startTimeRef.current) return
        const elapsedSec = Math.max(1, (Date.now() - startTimeRef.current) / 1000)
        setElapsedTime(Math.round(elapsedSec))
        setCurrentWpm(calculateWpm(correctCharsRef.current, elapsedSec))
      }, 200)
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
        timerIntervalRef.current = null
      }
    }
  }, [status])

  const processAddedCharacters = useCallback(
    (addedText, currentInput, currentText) => {
      if (!addedText) {
        return currentInput
      }

      let workingInput = currentInput

      for (const typedChar of addedText) {
        if (statusRef.current === 'completed') {
          break
        }

        if (statusRef.current === 'idle') {
          startTimeRef.current = Date.now()
          statusRef.current = 'running'
          setStatus('running')
        }

        const targetChar = currentText[workingInput.length] || ''
        const isCorrect = typedChar === targetChar

        if (soundEnabled) {
          if (!isCorrect) {
            playSound('error')
          } else if (typedChar === ' ') {
            playSound('space')
          } else {
            playSound('correct')
          }
        }

        workingInput += typedChar
        totalTypedCharsRef.current += 1

        if (isCorrect) {
          correctCharsRef.current += 1
        } else {
          incorrectCharsRef.current += 1
        }

        if (workingInput.length >= currentText.length) {
          setTimeout(() => {
            finishLesson()
          }, 50)
          break
        }
      }

      return workingInput
    },
    [finishLesson, playSound, soundEnabled]
  )

  const handleInput = useCallback(
    (e) => {
      if (statusRef.current === 'completed' || !textRef.current) {
        return
      }

      const nativeValue = e.currentTarget.value || ''
      const previousValue = userInputRef.current

      // Normal typing: newly-added characters
      if (
        nativeValue.length > previousValue.length &&
        nativeValue.startsWith(previousValue)
      ) {
        const addedText = nativeValue.slice(previousValue.length)
        const newInput = processAddedCharacters(
          addedText,
          previousValue,
          textRef.current
        )

        userInputRef.current = newInput
        setUserInput(newInput)

        setCorrectChars(correctCharsRef.current)
        setIncorrectChars(incorrectCharsRef.current)
        setTotalTypedChars(totalTypedCharsRef.current)

        const accuracy = calculateAccuracy(
          correctCharsRef.current,
          totalTypedCharsRef.current
        )
        setCurrentAccuracy(accuracy)

        if (startTimeRef.current) {
          const elapsedSec = Math.max(
            1,
            (Date.now() - startTimeRef.current) / 1000
          )
          setCurrentWpm(calculateWpm(correctCharsRef.current, elapsedSec))
        }

        return
      }

      // Backspace / deletion
      if (nativeValue.length < previousValue.length) {
        const newInput = nativeValue
        const metrics = recalculateMetrics(newInput, textRef.current)

        userInputRef.current = newInput
        correctCharsRef.current = metrics.correct
        incorrectCharsRef.current = metrics.incorrect

        setUserInput(newInput)
        setCorrectChars(metrics.correct)
        setIncorrectChars(metrics.incorrect)

        const accuracy = calculateAccuracy(
          metrics.correct,
          totalTypedCharsRef.current
        )
        setCurrentAccuracy(accuracy)

        if (soundEnabled) {
          playSound('backspace')
        }

        return
      }

      // Fallback for full replacements / IME changes
      if (nativeValue !== previousValue) {
        const metrics = recalculateMetrics(nativeValue, textRef.current)
        const addedCount = Math.max(0, nativeValue.length - previousValue.length)
        totalTypedCharsRef.current += addedCount

        userInputRef.current = nativeValue
        correctCharsRef.current = metrics.correct
        incorrectCharsRef.current = metrics.incorrect

        setUserInput(nativeValue)
        setCorrectChars(metrics.correct)
        setIncorrectChars(metrics.incorrect)
        setTotalTypedChars(totalTypedCharsRef.current)

        const accuracy = calculateAccuracy(
          metrics.correct,
          totalTypedCharsRef.current
        )
        setCurrentAccuracy(accuracy)

        if (nativeValue.length >= textRef.current.length) {
          setTimeout(() => {
            finishLesson()
          }, 50)
        }
      }
    },
    [finishLesson, playSound, processAddedCharacters, recalculateMetrics, soundEnabled]
  )

  const handleKeyDown = useCallback((e) => {
    if (statusRef.current === 'completed') {
      return
    }

    if (e.key === 'Tab') {
      e.preventDefault()
    }
  }, [])

  const handlePaste = useCallback((e) => {
    e.preventDefault()
  }, [])

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true
      })
    }
    setIsFocused(true)
  }, [])

  const progressPercent =
    lessonContent.length > 0
      ? Math.min(
          100,
          Math.round((userInput.length / lessonContent.length) * 100)
        )
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
    handleInput,
    handlePaste,
    focusInput,
    resetLesson
  }
}
