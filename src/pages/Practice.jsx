import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { lessonService } from '../services/lessonService'
import { useTypingStats } from '../contexts/TypingStatsContext'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Button } from '../components/common/Button'
import { Tabs } from '../components/common/Tabs'
import { ProgressBar } from '../components/common/ProgressBar'
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Trophy, 
  Sparkles,
  Layers,
  Zap
} from 'lucide-react'

export function Practice() {
  const [lessons, setLessons] = useState([])
  const [activeTier, setActiveTier] = useState('all')
  const [loading, setLoading] = useState(true)
  const { lessonProgress } = useTypingStats()

  useEffect(() => {
    async function loadLessons() {
      setLoading(false)
      const data = await lessonService.getLessons()
      setLessons(data)
    }
    loadLessons()
  }, [])

  const tierTabs = [
    { id: 'all', label: 'All Lessons' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
  ]

  const filteredLessons = activeTier === 'all'
    ? lessons
    : lessons.filter(l => l.difficulty === activeTier)

  const totalLessons = lessons.length
  const completedCount = Object.values(lessonProgress).filter(p => p.completed).length
  const overallProgress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SEOHead
        title="Touch Typing Practice Lessons — Curriculum by Tier"
        description="Comprehensive touch typing curriculum from beginner home row keys to developer code syntax and velocity paragraph endurance."
      />

      {/* Page Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Typing Practice Lessons
            </h1>
            <Badge variant="brand" size="sm">
              Structured
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Deliberate modular drills designed to build automatic keystroke muscle memory and expand your typing vocabulary.
          </p>
        </div>

        {/* Global Curriculum Completion Summary */}
        <Card className="p-4 flex items-center gap-4 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase text-slate-400">Curriculum Progress</span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{completedCount}/{totalLessons}</span>
            </div>
            <div className="w-36 mt-1.5">
              <ProgressBar progress={overallProgress} color="success" height="h-1.5" />
            </div>
          </div>
        </Card>
      </div>

      {/* Tier Filter Tabs */}
      <div className="mb-8 flex justify-start">
        <Tabs
          tabs={tierTabs}
          activeTab={activeTier}
          onChange={setActiveTier}
        />
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => {
          const progress = lessonProgress[lesson.id]
          const isCompleted = Boolean(progress?.completed)
          const bestWpm = progress?.best_wpm || 0
          const bestAccuracy = progress?.best_accuracy || 0

          return (
            <Card
              key={lesson.id}
              className="p-6 flex flex-col justify-between relative group overflow-hidden"
              hoverEffect
            >
              {isCompleted && (
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                  <div className="absolute transform rotate-45 bg-emerald-500 text-white font-bold text-[9px] py-0.5 right-[-35px] top-[18px] w-[120px] text-center shadow-sm">
                    COMPLETED
                  </div>
                </div>
              )}

              <div>
                {/* Meta Header */}
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant={
                      lesson.difficulty === 'advanced'
                        ? 'danger'
                        : lesson.difficulty === 'intermediate'
                        ? 'warning'
                        : 'brand'
                    }
                    size="sm"
                    className="capitalize"
                  >
                    {lesson.difficulty}
                  </Badge>
                  <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {lesson.estimatedMinutes || lesson.estimated_minutes || 3} min
                  </span>
                  <span className="text-[11px] text-slate-400">
                    • {lesson.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors mb-2">
                  {lesson.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {lesson.description}
                </p>

                {/* Key focus chips if present */}
                {lesson.keysFocus && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {lesson.keysFocus.slice(0, 5).map((key, kIdx) => (
                      <span
                        key={kIdx}
                        className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-[10px] font-semibold"
                      >
                        {key}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                {isCompleted ? (
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="text-slate-400">Personal Best:</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {bestWpm} WPM • {bestAccuracy}% Acc
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-slate-500">Not attempted</span>
                  </div>
                )}

                <Link to={`/practice/${lesson.slug}`} className="w-full">
                  <Button
                    variant={isCompleted ? 'outline' : 'primary'}
                    size="sm"
                    className="w-full justify-between"
                  >
                    <span>{isCompleted ? 'Practice Again' : 'Start Lesson'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
