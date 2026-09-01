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
import { useSettings } from '../contexts/SettingsContext'
import { Keyboard, HelpCircle, ShieldCheck, Sparkles, Award, FileText, Eye, EyeOff } from 'lucide-react'

export function TypingTest() {
  const { settings, updateSettings } = useSettings()
  const [duration, setDuration] = useState(settings.duration)
  const [difficulty, setDifficulty] = useState(settings.difficulty)
  const [soundEnabled, setSoundEnabled] = useState(settings.soundEnabled)
  const [showKeyboard, setShowKeyboard] = useState(settings.virtualKeyboard)
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

  const updateDuration = value => { setDuration(value); updateSettings({ duration: value }) }
  const updateDifficulty = value => { setDifficulty(value); updateSettings({ difficulty: value }) }
  const updateSound = value => { setSoundEnabled(value); updateSettings({ soundEnabled: value }) }
  const toggleKeyboard = () => { const value = !showKeyboard; setShowKeyboard(value); updateSettings({ virtualKeyboard: value }) }

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
  const displayName = profile?.display_name || profile?.username || 'User'

  const supportCardsVisible = status !== 'running'

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SEOHead
        title="Online Typing Speed Test — Test Your WPM"
        description="Free online typing test with real-time WPM calculation, accuracy tracking, customizable test durations and difficulty modes."
      />

      {/* Header */}
      <div className="mb-4 flex flex-col gap-4 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-black tracking-[-0.04em] text-slate-900 dark:text-white sm:text-4xl">
              Typing Speed Test
            </h1>
            <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
              Live
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Test your typing speed and accuracy.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleKeyboard}
            icon={showKeyboard ? EyeOff : Eye}
            className="text-slate-600 dark:text-slate-300"
          >
            {showKeyboard ? 'Hide Keyboard' : 'Keyboard'}
          </Button>
        </div>
      </div>

      {/* Test Controls */}
      <div className="mb-4">
        <TypingControls
          duration={duration}
          setDuration={updateDuration}
          difficulty={difficulty}
          setDifficulty={updateDifficulty}
          soundEnabled={soundEnabled}
          setSoundEnabled={updateSound}
          onRestart={restartTest}
          disabled={status === 'running'}
        />
      </div>

      {/* Live Stats Bar */}
      <div className="mb-4">
        <LiveStatsBar
          timeLeft={timeLeft}
          currentWpm={currentWpm}
          currentAccuracy={currentAccuracy}
          correctChars={correctChars}
          totalTypedChars={totalTypedChars}
          status={status}
          showLiveWpm={settings.showLiveWpm}
          showAccuracy={settings.showAccuracy}
        />
      </div>

      {/* Interactive Typing Surface */}
      <div className="mb-4">
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
        <div className="mb-4 transition-all duration-200 ease-out">
          <VirtualKeyboard activeKey={activeTargetChar} showFingerGuide={settings.fingerGuide} keyHighlight={settings.keyHighlight} keyPressAnimation={settings.keyPressAnimation} />
        </div>
      )}

      {/* Tips & Ergonomics Quick Bar */}
      {supportCardsVisible && (
        <div className="grid grid-cols-1 gap-3 text-xs text-slate-500 dark:text-slate-400 md:grid-cols-3">
          <Card className="flex items-start gap-3 p-3.5">
            <Keyboard className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-200">Home Row Rest Position</p>
              <p className="mt-0.5">Keep index fingers anchored on F & J tactile bumps.</p>
            </div>
          </Card>

          <Card className="flex items-start gap-3 p-3.5">
            <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-200">Standardized Formula</p>
              <p className="mt-0.5">WPM is strictly (Correct Chars / 5) per minute elapsed.</p>
            </div>
          </Card>

          <Card className="flex items-start gap-3 p-3.5">
            <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-500" />
            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-200">Continuous Rhythm</p>
              <p className="mt-0.5">Focus on steady rhythm over frantic short bursts.</p>
            </div>
          </Card>
        </div>
      )}

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