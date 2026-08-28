import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { typingService } from '../services/typingService'
import { lessonService } from '../services/lessonService'
import { useAuth } from './AuthContext'

const TypingStatsContext = createContext()

export function TypingStatsProvider({ children }) {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    bestWpm: 0,
    averageWpm: 0,
    averageAccuracy: 0,
    testsCompleted: 0,
    lessonsCompleted: 0,
    recentTests: [],
    loading: true
  })
  const [history, setHistory] = useState([])
  const [lessonProgress, setLessonProgress] = useState({})

  const refreshStats = useCallback(async () => {
    try {
      const userId = user?.id || 'guest'
      const [userStats, userHistory, progress] = await Promise.all([
        typingService.getUserStats(userId),
        typingService.getUserHistory(userId),
        lessonService.getUserProgress(userId)
      ])

      const completedLessonsCount = Object.values(progress).filter(p => p.completed).length

      setStats({
        ...userStats,
        lessonsCompleted: completedLessonsCount,
        loading: false
      })
      setHistory(userHistory)
      setLessonProgress(progress)
    } catch (err) {
      console.warn('Failed to refresh stats:', err)
      setStats(prev => ({ ...prev, loading: false }))
    }
  }, [user])

  useEffect(() => {
    refreshStats()
  }, [refreshStats])

  const recordTest = async (testResult) => {
    const saved = await typingService.saveTest(testResult, user)
    await refreshStats()
    return saved
  }

  const recordLessonCompletion = async (lessonId, wpm, accuracy) => {
    const saved = await lessonService.saveProgress({
      lessonId,
      wpm,
      accuracy,
      completed: true,
      user
    })
    await refreshStats()
    return saved
  }

  return (
    <TypingStatsContext.Provider
      value={{
        stats,
        history,
        lessonProgress,
        refreshStats,
        recordTest,
        recordLessonCompletion
      }}
    >
      {children}
    </TypingStatsContext.Provider>
  )
}

export function useTypingStats() {
  const context = useContext(TypingStatsContext)
  if (!context) {
    throw new Error('useTypingStats must be used within a TypingStatsProvider')
  }
  return context
}
