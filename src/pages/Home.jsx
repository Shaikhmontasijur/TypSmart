import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Keyboard, 
  BookOpen, 
  Trophy, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  Shield, 
  Target, 
  Sparkles, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Brain,
  Gauge,
  Award
} from 'lucide-react'
import { Button } from '../components/common/Button'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { SEOHead } from '../components/common/SEOHead'

export function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      q: 'How does TypeFlow calculate typing speed (WPM)?',
      a: 'TypeFlow uses the international standardized formula: WPM = (Total Correct Characters / 5) / Elapsed Minutes. We account for 100% precision, ensuring that raw keystroke speed is balanced against error penalization.'
    },
    {
      q: 'Can I use TypeFlow for free?',
      a: 'Yes! All core typing tests, baseline practice lessons, and local analytics are 100% free without paywalls or invasive advertisements.'
    },
    {
      q: 'What is the best way to improve touch typing speed?',
      a: 'Focus on accuracy and finger positioning on the home row first. Consistent 10-15 minute daily sessions build neural muscle memory far faster than sporadic marathon typing.'
    },
    {
      q: 'Do I need an account to practice?',
      a: 'No, you can immediately test your typing speed as a guest. Creating a free account allows you to sync your progression across devices, earn milestone badges, and compete on the global leaderboard.'
    },
    {
      q: 'Does TypeFlow support code syntax and advanced punctuation?',
      a: 'Yes! Our Advanced Practice tier includes dedicated developer syntax exercises, complete with brackets, operators, camelCase, and punctuation endurance drills.'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="TypeFlow — Master Your Keyboard. One Test. One Skill. Every Day."
        description="Build real typing speed, accuracy and confidence through focused practice and measurable progress with TypeFlow."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200/60 dark:border-slate-800/60">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-500/15 to-accent-500/15 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            Original Next-Gen Typing Platform
          </div>

          {/* Main Hero Header */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.1]">
            Master Your Keyboard.{' '}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-400 bg-clip-text text-transparent">
              One Test. One Skill. Every Day.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Build real typing speed, accuracy and confidence through focused practice and measurable progress.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/typing-test" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" icon={Keyboard} className="w-full sm:w-auto text-base py-3.5 px-8 shadow-lg shadow-brand-500/25">
                START TYPING TEST
              </Button>
            </Link>
            <Link to="/practice" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" icon={BookOpen} className="w-full sm:w-auto text-base py-3.5 px-8">
                PRACTICE LESSONS
              </Button>
            </Link>
          </div>

          {/* Interactive Feature Snapshot Preview */}
          <div className="mt-14 max-w-4xl mx-auto">
            <Card className="p-6 sm:p-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-2 border-slate-200/80 dark:border-slate-800 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-800 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-slate-400 ml-2">quick-test-preview.flow</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono font-bold">
                  <span className="text-brand-500">60s Mode</span>
                  <span className="text-emerald-500">100% Accuracy</span>
                  <span className="text-slate-400">85 WPM Target</span>
                </div>
              </div>

              <div className="py-6 text-left font-mono text-lg sm:text-2xl leading-relaxed">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Mastering keyboard ergonomics </span>
                <span className="bg-brand-500 text-white rounded px-1 font-bold animate-pulse">a</span>
                <span className="text-slate-400 dark:text-slate-500">nd touch typing velocity transforms your daily cognitive workflow...</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant keystroke feedback • Real-time metrics
                </p>
                <Link to="/typing-test">
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1">
                    Try the full engine now <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why TypeFlow Section */}
      <section className="py-20 bg-slate-100/50 dark:bg-slate-900/30 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="brand" size="md" className="mb-3">
              Why TypeFlow
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Engineered for Deliberate Mastery
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base">
              Typing is the primary bridge between your brain and the digital world. We built TypeFlow to make that bridge effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8" hoverEffect>
              <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-6">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Pure Typing Mechanics
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Zero lag, zero distractions. Our typing engine processes raw input in real-time with millisecond precision and accurate WPM computation.
              </p>
            </Card>

            <Card className="p-8" hoverEffect>
              <div className="w-12 h-12 rounded-2xl bg-accent-500/10 text-accent-500 flex items-center justify-center mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Progressive Curriculum
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                From home row fundamentals to developer syntax and high-speed paragraph cadence, our structured lessons build lifelong muscle memory.
              </p>
            </Card>

            <Card className="p-8" hoverEffect>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Actionable Analytics
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Track personal bests, identify weak character triggers, analyze accuracy trends, and observe your velocity compounding day after day.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Tiers Overview */}
      <section className="py-20 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Badge variant="brand" size="md" className="mb-3">
                Structured Learning
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Practice Lessons by Tier
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400 text-base max-w-xl">
                Structured progressive paths tailored to help any typist elevate from 20 to 100+ WPM.
              </p>
            </div>
            <Link to="/practice">
              <Button variant="outline" icon={BookOpen}>
                Explore All Lessons
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Beginner */}
            <Card className="p-6 border-t-4 border-t-brand-500" hoverEffect>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="brand">Beginner Tier</Badge>
                <span className="text-xs text-slate-400">6 Lessons</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Home Row & Letters
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Establish correct resting posture, finger reaches, and basic word cadence.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-brand-500" /> Home Row Baseline</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-brand-500" /> Left & Right Hand Isolation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-brand-500" /> Short Core Sentences</li>
              </ul>
              <Link to="/practice">
                <Button variant="outline" size="sm" className="w-full">
                  Start Beginner Path
                </Button>
              </Link>
            </Card>

            {/* Intermediate */}
            <Card className="p-6 border-t-4 border-t-amber-500" hoverEffect>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="warning">Intermediate Tier</Badge>
                <span className="text-xs text-slate-400">5 Lessons</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Capitals, Numbers & Trigrams
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Expand beyond simple letters to top row numbers, Shift modifiers, and punctuation.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Shift Key Coordination</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Numerical Row Navigation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Trigrams & Pattern Flow</li>
              </ul>
              <Link to="/practice">
                <Button variant="outline" size="sm" className="w-full">
                  Start Intermediate Path
                </Button>
              </Link>
            </Card>

            {/* Advanced */}
            <Card className="p-6 border-t-4 border-t-emerald-500" hoverEffect>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="success">Advanced Tier</Badge>
                <span className="text-xs text-slate-400">5 Lessons</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Velocity & Code Syntax
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Sustain peak velocity across multi-line paragraphs and complex developer code snippets.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Full Paragraph Endurance</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Code Snippets & Brackets</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Max Velocity Arena</li>
              </ul>
              <Link to="/practice">
                <Button variant="outline" size="sm" className="w-full">
                  Start Advanced Path
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Progress & Leaderboard Teaser */}
      <section className="py-20 bg-slate-100/50 dark:bg-slate-900/30 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="brand" size="md" className="mb-3">
                Measurable Momentum
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Compete on the Leaderboard. Track Every Milestone.
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                Measure yourself against daily, weekly, and all-time global benchmarks. Gain badges as you cross 40, 60, 80, and 100+ WPM barriers.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <Card className="p-4 bg-white dark:bg-slate-900">
                  <Trophy className="w-6 h-6 text-yellow-500 mb-2" />
                  <p className="font-extrabold text-2xl font-mono text-slate-900 dark:text-white">128 WPM</p>
                  <p className="text-xs text-slate-500">All-Time Highscore</p>
                </Card>

                <Card className="p-4 bg-white dark:bg-slate-900">
                  <Award className="w-6 h-6 text-brand-500 mb-2" />
                  <p className="font-extrabold text-2xl font-mono text-slate-900 dark:text-white">6 Badges</p>
                  <p className="text-xs text-slate-500">Unlockable Achievements</p>
                </Card>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link to="/leaderboard">
                  <Button variant="primary" icon={Trophy}>
                    View Leaderboard
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" icon={TrendingUp}>
                    Your Dashboard
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual ranking preview */}
            <Card className="p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-brand-500" /> Leaderboard Top Typists
                </h4>
                <Badge variant="brand" size="sm">Live Rankings</Badge>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  { rank: 1, name: 'Elena Rostova', handle: '@velocity_king', wpm: 128, acc: '99.4%' },
                  { rank: 2, name: 'Alex Mercer', handle: '@alex_keystroke', wpm: 119, acc: '98.8%' },
                  { rank: 3, name: 'Sarah Jenkins', handle: '@sarah_types', wpm: 114, acc: '99.1%' },
                ].map((row) => (
                  <div key={row.rank} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${row.rank === 1 ? 'bg-amber-400 text-slate-950' : row.rank === 2 ? 'bg-slate-300 text-slate-950' : 'bg-amber-700 text-white'}`}>
                        #{row.rank}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">{row.name}</p>
                        <p className="text-[10px] text-slate-400">{row.handle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black font-mono text-brand-600 dark:text-brand-400">{row.wpm} WPM</p>
                      <p className="text-[10px] text-slate-400">{row.acc} acc</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="brand" size="md" className="mb-3">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <Card key={idx} className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-brand-500 transition"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-brand-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent to-brand-500/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-tr from-slate-900 to-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
              Ready to Accelerate Your Typing Flow?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Join thousands of typists building speed, accuracy, and confidence every single day.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/typing-test" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" icon={Zap} className="w-full sm:w-auto text-base">
                  START FREE TYPING TEST
                </Button>
              </Link>
              <Link to="/signup" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base text-white border-slate-700 hover:bg-slate-800">
                  CREATE FREE ACCOUNT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
