import React, { useState, useEffect } from 'react'
import { useTypingEngine } from '../hooks/useTypingEngine'
import { useTypingStats } from '../contexts/TypingStatsContext'
import { useAuth } from '../contexts/AuthContext'
import { TypingControls } from '../components/typing/TypingControls'
import { LiveStatsBar } from '../components/typing/LiveStatsBar'
import { TypingArea } from '../components/typing/TypingArea'
import { TestResultsModal } from '../components/typing/TestResultsModal'
import { VirtualKeyboard } from '../components/typing/VirtualKeyboard'
import { CertificateModal } from '../components/common/CertificateModal'
import { Modal } from '../components/common/Modal'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { Keyboard, HelpCircle, ShieldCheck, Sparkles, Award, FileText, Eye, EyeOff } from 'lucide-react'

export function TypingTest() {
  const [duration, setDuration] = useState(60)
  const [difficulty, setDifficulty] = useState('easy')
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [showKeyboard, setShowKeyboard] = useState(false)
  const [showResultsModal, setShowResultsModal] = useState(false)
  const [showCertificateModal, setShowCertificateModal] = useState(false)
  const [showCustomTextModal, setShowCustomTextModal] = useState(false)
  const [customTextInput, setCustomTextInput] = useState('')
  const [completedResults, setCompletedResults] = useState(null)

  const { recordTest } = useTypingStats()
  const { profile, user } = useAuth()

  const handleTestComplete = async (results) => {
    setCompletedResults(results)
    setShowResultsModal(true)
    await recordTest(results)
  }

  const {
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
    lastPressedKey,
    handleKeyDown,
    handlePaste,
    focusInput,
    restartTest,
    newTest
  } = useTypingEngine({
    duration,
    difficulty,
    soundEnabled,
    onComplete: handleTestComplete
  })

  // Auto-focus on mount
  useEffect(() => {
    focusInput()
  }, [focusInput])

  const handleTryAgain = () => {
    setShowResultsModal(false)
    restartTest()
    setTimeout(() => {
      focusInput()
    }, 50)
  }

  const handleNewTest = () => {
    setShowResultsModal(false)
    newTest()
    setTimeout(() => {
      focusInput()
    }, 50)
  }

  const activeTargetChar = text[userInput.length] || ''
  const displayName = profile?.display_name || profile?.username || 'Typist'

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SEOHead
        title="Online Typing Speed Test — Test Your WPM"
        description="Free online typing test with real-time WPM calculation, accuracy tracking, customizable test durations and difficulty modes."
      />

      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Typing Speed Test
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
              Live Engine
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Test your pure velocity and accuracy. Start typing anytime to begin the timer.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowKeyboard(!showKeyboard)}
            icon={showKeyboard ? EyeOff : Eye}
          >
            {showKeyboard ? 'Hide Keyboard' : 'Show Keyboard'}
          </Button>
        </div>
      </div>

      {/* Test Controls */}
      <div className="mb-6">
        <TypingControls
          duration={duration}
          setDuration={setDuration}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          onRestart={restartTest}
          disabled={status === 'running'}
        />
      </div>

      {/* Live Stats Bar */}
      <div className="mb-6">
        <LiveStatsBar
          timeLeft={timeLeft}
          currentWpm={currentWpm}
          currentAccuracy={currentAccuracy}
          correctChars={correctChars}
          totalTypedChars={totalTypedChars}
          status={status}
        />
      </div>

      {/* Interactive Typing Surface */}
      <div className="mb-6">
        <TypingArea
          text={text}
          userInput={userInput}
          status={status}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          inputRef={inputRef}
          handleKeyDown={handleKeyDown}
          handlePaste={handlePaste}
          focusInput={focusInput}
        />
      </div>

      {/* Optional Virtual Keyboard Visualizer */}
      {showKeyboard && (
        <div className="mb-6 animate-fade-in">
          <VirtualKeyboard activeKey={activeTargetChar} pressedKey={lastPressedKey} />
        </div>
      )}

      {/* Tips & Ergonomics Quick Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-500 dark:text-slate-400">
        <Card className="p-4 flex items-start gap-3">
          <Keyboard className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-200">Home Row Rest Position</p>
            <p className="mt-0.5">Keep index fingers anchored on F & J tactile bumps.</p>
          </div>
        </Card>

        <Card className="p-4 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-200">Standardized Formula</p>
            <p className="mt-0.5">WPM is strictly (Correct Chars / 5) per minute elapsed.</p>
          </div>
        </Card>

        <Card className="p-4 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-200">Continuous Rhythm</p>
            <p className="mt-0.5">Focus on steady rhythm over frantic short bursts.</p>
          </div>
        </Card>
      </div>

      {/* Completion Modal */}
      <TestResultsModal
        isOpen={showResultsModal}
        results={completedResults}
        onTryAgain={handleTryAgain}
        onNewTest={handleNewTest}
        onViewCertificate={() => {
          setShowResultsModal(false)
          setShowCertificateModal(true)
        }}
        onClose={() => setShowResultsModal(false)}
      />

      {/* Certificate Modal */}
      {completedResults && (
        <CertificateModal
          isOpen={showCertificateModal}
          onClose={() => setShowCertificateModal(false)}
          userName={displayName}
          wpm={completedResults.wpm}
          accuracy={completedResults.accuracy}
          testDate={completedResults.completedAt}
        />
      )}
    </div>
  )
}
