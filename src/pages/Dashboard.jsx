import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTypingStats } from '../contexts/TypingStatsContext'
import { useAuth } from '../contexts/AuthContext'
import { SEOHead } from '../components/common/SEOHead'
import { StatCard } from '../components/common/StatCard'
import { PerformanceChart } from '../components/dashboard/PerformanceChart'
import { RecentTestsList } from '../components/dashboard/RecentTestsList'
import { MilestoneBadges } from '../components/dashboard/MilestoneBadge'
import { CertificateModal } from '../components/common/CertificateModal'
import { PricingModal } from '../components/common/PricingModal'
import { EmptyState } from '../components/common/EmptyState'
import { Button } from '../components/common/Button'
import { 
  Zap, 
  Target, 
  Activity, 
  CheckCircle2, 
  BookOpen, 
  Keyboard, 
  Trophy, 
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react'

export function Dashboard() {
  const { stats, history } = useTypingStats()
  const { user, profile } = useAuth()
  const [showCertModal, setShowCertModal] = useState(false)
  const [showPricingModal, setShowPricingModal] = useState(false)

  const displayName = profile?.display_name || profile?.username || 'Typist'

  const hasData = stats.testsCompleted > 0 || stats.lessonsCompleted > 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SEOHead
        title="Analytics Dashboard — Real-time Typing Performance"
        description="Comprehensive dashboard tracking your WPM velocity, keystroke precision, completed lessons, and unlockable achievements."
      />

      {/* Header Banner */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Welcome back, {displayName}!
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
              Active Session
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Track your real-time speed curve, accuracy milestones, and practice progression.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {stats.bestWpm >= 40 && (
            <Button
              variant="outline"
              icon={Award}
              onClick={() => setShowCertModal(true)}
              className="border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10"
            >
              Speed Certificate
            </Button>
          )}

          <Button
            variant="outline"
            icon={Sparkles}
            onClick={() => setShowPricingModal(true)}
          >
            Tiers & Plans
          </Button>

          <Link to="/typing-test">
            <Button variant="primary" icon={Keyboard}>
              Typing Test
            </Button>
          </Link>
        </div>
      </div>

      {/* High-Level Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <StatCard
          title="Best Velocity"
          value={stats.bestWpm}
          unit="WPM"
          description="Personal All-Time Record"
          icon={Zap}
          iconColor="text-amber-500 bg-amber-500/10"
        />

        <StatCard
          title="Average Speed"
          value={stats.averageWpm}
          unit="WPM"
          description="Overall Session Average"
          icon={Activity}
          iconColor="text-brand-500 bg-brand-500/10"
        />

        <StatCard
          title="Avg Accuracy"
          value={stats.averageAccuracy}
          unit="%"
          description="Keystroke Precision"
          icon={Target}
          iconColor="text-emerald-500 bg-emerald-500/10"
        />

        <StatCard
          title="Tests Completed"
          value={stats.testsCompleted}
          description="Total Speed Tests"
          icon={CheckCircle2}
          iconColor="text-purple-500 bg-purple-500/10"
        />

        <StatCard
          title="Lessons Done"
          value={stats.lessonsCompleted}
          description="Mastered Modules"
          icon={BookOpen}
          iconColor="text-blue-500 bg-blue-500/10"
        />
      </div>

      {!hasData ? (
        <EmptyState
          title="No typing sessions recorded yet"
          description="Take your very first 60-second speed test or start a beginner home row lesson to unlock full performance telemetry."
          actionLabel="Start Your First Test"
          onAction={() => window.location.assign('/typing-test')}
        />
      ) : (
        <div className="space-y-8">
          {/* Performance Chart & Recent Tests Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <PerformanceChart tests={stats.recentTests || []} />
            </div>
            <div>
              <RecentTestsList tests={stats.recentTests || []} />
            </div>
          </div>

          {/* Milestones & Badges */}
          <MilestoneBadges stats={stats} />
        </div>
      )}

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={showCertModal}
        onClose={() => setShowCertModal(false)}
        userName={displayName}
        wpm={stats.bestWpm}
        accuracy={stats.averageAccuracy || 98}
      />

      {/* Pricing & Tiers Modal */}
      <PricingModal
        isOpen={showPricingModal}
        onClose={() => setShowPricingModal(false)}
      />
    </div>
  )
}
