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
  const [status, setStatus] = useState('idle')
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isFocused, setIsFocused] = useState(true)

  const [correctChars, setCorrectChars] = useState(0)
  const [incorrectChars, setIncorrectChars] = useState(0)
  const [totalTypedChars, setTotalTypedChars] = useState(0)
  const [currentWpm, setCurrentWpm] = useState(0)
  const [currentAccuracy, setCurrentAccuracy] = useState(100)

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

  const initText = useCallback(() => {
    const wordCount =
      duration <= 30
        ? 60
        : duration <= 60
          ? 120
          : 240

    const newText = getRandomWords(
      difficulty,
      wordCount
    )

    setText(newText)
    setUserInput('')
    setStatus('idle')
    setTimeLeft(duration)
    setCorrectChars(0)
    setIncorrectChars(0)
    setTotalTypedChars(0)
    setCurrentWpm(0)
    setCurrentAccuracy(100)

    textRef.current = newText
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
  }, [difficulty, duration, syncInputElement])

  useEffect(() => {
    initText()

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
        timerIntervalRef.current = null
      }
    }
  }, [initText])

  const endTest = useCallback(() => {
    if (statusRef.current === 'completed') {
      return
    }

    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current)
      timerIntervalRef.current = null
    }

    statusRef.current = 'completed'
    setStatus('completed')
    setTimeLeft(0)

    playSound('finish')

    const finalCorrect = correctCharsRef.current
    const finalIncorrect = incorrectCharsRef.current
    const finalTotal = totalTypedCharsRef.current

    const finalWpm = calculateWpm(
      finalCorrect,
      duration
    )

    const finalAccuracy = calculateAccuracy(
      finalCorrect,
      finalTotal
    )

    if (onComplete) {
      onComplete({
        duration,
        difficulty,
        wpm: finalWpm,
        accuracy: finalAccuracy,
        correctChars: finalCorrect,
        incorrectChars: finalIncorrect,
        totalChars: finalTotal,
        startedAt: startTimeRef.current
          ? new Date(
              startTimeRef.current
            ).toISOString()
          : new Date().toISOString(),
        completedAt: new Date().toISOString()
      })
    }
  }, [
    duration,
    difficulty,
    onComplete,
    playSound
  ])

  useEffect(() => {
    if (status !== 'running') {
      return undefined
    }

    timerIntervalRef.current = setInterval(() => {
      if (!startTimeRef.current) {
        return
      }

      const elapsedMs =
        Date.now() - startTimeRef.current

      const remaining = Math.max(
        0,
        Math.ceil(
          (duration * 1000 - elapsedMs) / 1000
        )
      )

      setTimeLeft(remaining)

      const elapsedSec = Math.max(
        1,
        elapsedMs / 1000
      )

      const liveWpm = calculateWpm(
        correctCharsRef.current,
        elapsedSec
      )

      setCurrentWpm(liveWpm)

      if (remaining <= 0) {
        endTest()
      }
    }, 200)

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current)
        timerIntervalRef.current = null
      }
    }
  }, [status, duration, endTest])

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

        const targetChar =
          currentText[workingInput.length] || ''

        const isCorrect =
          typedChar === targetChar

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
      }

      return workingInput
    },
    [playSound, soundEnabled]
  )

  const handleInput = useCallback(
    (e) => {
      if (statusRef.current === 'completed') {
        return
      }

      const nativeValue =
        e.currentTarget.value || ''

      const previousValue =
        userInputRef.current

      /*
       * Normal typing:
       * "h" -> "he" -> "hel" -> ...
       *
       * The browser keeps the native value.
       * We process only the newly-added characters.
       */
      if (
        nativeValue.length > previousValue.length &&
        nativeValue.startsWith(previousValue)
      ) {
        const addedText =
          nativeValue.slice(previousValue.length)

        const newInput =
          processAddedCharacters(
            addedText,
            previousValue,
            textRef.current
          )

        userInputRef.current = newInput

        setUserInput(newInput)

        setCorrectChars(
          correctCharsRef.current
        )

        setIncorrectChars(
          incorrectCharsRef.current
        )

        setTotalTypedChars(
          totalTypedCharsRef.current
        )

        const accuracy =
          calculateAccuracy(
            correctCharsRef.current,
            totalTypedCharsRef.current
          )

        setCurrentAccuracy(accuracy)

        if (startTimeRef.current) {
          const elapsedSec = Math.max(
            1,
            (Date.now() -
              startTimeRef.current) /
              1000
          )

          setCurrentWpm(
            calculateWpm(
              correctCharsRef.current,
              elapsedSec
            )
          )
        }

        /*
         * Keep the passage long enough for fast typists.
         */
        if (
          newInput.length >=
          textRef.current.length - 10
        ) {
          const additionalWords =
            getRandomWords(
              difficulty,
              30
            )

          const extendedText =
            textRef.current +
            ' ' +
            additionalWords

          textRef.current = extendedText
          setText(extendedText)
        }

        return
      }

      /*
       * Backspace / deletion:
       * The browser changes the native value naturally.
       */
      if (
        nativeValue.length <
        previousValue.length
      ) {
        const newInput = nativeValue

        const metrics =
          recalculateMetrics(
            newInput,
            textRef.current
          )

        userInputRef.current = newInput
        correctCharsRef.current =
          metrics.correct
        incorrectCharsRef.current =
          metrics.incorrect

        setUserInput(newInput)
        setCorrectChars(metrics.correct)
        setIncorrectChars(metrics.incorrect)

        const accuracy =
          calculateAccuracy(
            metrics.correct,
            totalTypedCharsRef.current
          )

        setCurrentAccuracy(accuracy)

        if (soundEnabled) {
          playSound('backspace')
        }

        return
      }

      /*
       * Handles unusual browser/IME changes safely.
       * Recalculate from the complete native value.
       */
      if (nativeValue !== previousValue) {
        const metrics =
          recalculateMetrics(
            nativeValue,
            textRef.current
          )

        const addedCount = Math.max(
          0,
          nativeValue.length -
            previousValue.length
        )

        totalTypedCharsRef.current +=
          addedCount

        userInputRef.current = nativeValue
        correctCharsRef.current =
          metrics.correct
        incorrectCharsRef.current =
          metrics.incorrect

        setUserInput(nativeValue)
        setCorrectChars(metrics.correct)
        setIncorrectChars(metrics.incorrect)
        setTotalTypedChars(
          totalTypedCharsRef.current
        )

        const accuracy =
          calculateAccuracy(
            metrics.correct,
            totalTypedCharsRef.current
          )

        setCurrentAccuracy(accuracy)
      }
    },
    [
      difficulty,
      playSound,
      processAddedCharacters,
      recalculateMetrics,
      soundEnabled
    ]
  )

  /*
   * Keyboard events are now used only for special keys.
   * Normal characters MUST come through native input.
   */
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

  const handleCompositionStart = useCallback(() => {
    // Native IME composition is intentionally allowed.
  }, [])

  const handleCompositionEnd = useCallback(() => {
    // Final text is delivered through the native input event.
  }, [])

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true
      })
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
    handleInput,
    handlePaste,
    handleCompositionStart,
    handleCompositionEnd,
    focusInput,
    restartTest: initText,
    newTest: initText
  }
}