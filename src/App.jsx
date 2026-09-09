import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'

// Core pages
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const TypingTest = lazy(() => import('./pages/TypingTest').then(m => ({ default: m.TypingTest })))
const Practice = lazy(() => import('./pages/Practice').then(m => ({ default: m.Practice })))
const LessonDetail = lazy(() => import('./pages/LessonDetail').then(m => ({ default: m.LessonDetail })))
const Leaderboard = lazy(() => import('./pages/Leaderboard').then(m => ({ default: m.Leaderboard })))
const Dashboard = lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })))
const History = lazy(() => import('./pages/History').then(m => ({ default: m.History })))
const Profile = lazy(() => import('./pages/Profile').then(m => ({ default: m.Profile })))
const Settings = lazy(() => import('./pages/Settings').then(m => ({ default: m.Settings })))
const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })))
const Signup = lazy(() => import('./pages/Signup').then(m => ({ default: m.Signup })))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword').then(m => ({ default: m.ForgotPassword })))
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })))
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })))

// Guide pages
const HowToIncreaseTypingSpeed = lazy(() =>
  import('./pages/guides/HowToIncreaseTypingSpeed')
    .then(m => ({ default: m.HowToIncreaseTypingSpeed }))
)

const HowToTypeFaster = lazy(() =>
  import('./pages/guides/HowToTypeFaster')
    .then(m => ({ default: m.HowToTypeFaster }))
)

const WhatIsWPM = lazy(() =>
  import('./pages/guides/WhatIsWPM')
    .then(m => ({ default: m.WhatIsWPM }))
)

const AverageTypingSpeed = lazy(() =>
  import('./pages/guides/AverageTypingSpeed')
    .then(m => ({ default: m.AverageTypingSpeed }))
)

const ImproveTypingAccuracy = lazy(() =>
  import('./pages/guides/ImproveTypingAccuracy')
    .then(m => ({ default: m.ImproveTypingAccuracy }))
)

const TouchTypingGuide = lazy(() =>
  import('./pages/guides/TouchTypingGuide')
    .then(m => ({ default: m.TouchTypingGuide }))
)

const TypingSpeedTestGuide = lazy(() =>
  import('./pages/guides/TypingSpeedTestGuide')
    .then(m => ({ default: m.TypingSpeedTestGuide }))
)

const TenFingerTypingGuide = lazy(() =>
  import('./pages/guides/TenFingerTypingGuide')
    .then(m => ({ default: m.TenFingerTypingGuide }))
)

const QWERTYKeyboardGuide = lazy(() =>
  import('./pages/guides/QWERTYKeyboardGuide')
    .then(m => ({ default: m.QWERTYKeyboardGuide }))
)

const LearnTouchTypingTime = lazy(() =>
  import('./pages/guides/LearnTouchTypingTime')
    .then(m => ({ default: m.LearnTouchTypingTime }))
)

const TypingExercisesBeginners = lazy(() =>
  import('./pages/guides/TypingExercisesBeginners')
    .then(m => ({ default: m.TypingExercisesBeginners }))
)

const BestTypingPracticeRoutine = lazy(() =>
  import('./pages/guides/BestTypingPracticeRoutine')
    .then(m => ({ default: m.BestTypingPracticeRoutine }))
)

const StopLookingAtKeyboard = lazy(() =>
  import('./pages/guides/StopLookingAtKeyboard')
    .then(m => ({ default: m.StopLookingAtKeyboard }))
)

const TypeWithoutLookingKeyboard = lazy(() =>
  import('./pages/guides/TypeWithoutLookingKeyboard')
    .then(m => ({ default: m.TypeWithoutLookingKeyboard }))
)

const TypingMistakesAndFixes = lazy(() =>
  import('./pages/guides/TypingMistakesAndFixes')
    .then(m => ({ default: m.TypingMistakesAndFixes }))
)

const TypingForStudents = lazy(() =>
  import('./pages/guides/TypingForStudents')
    .then(m => ({ default: m.TypingForStudents }))
)

const TypingSkillsOfficeWork = lazy(() =>
  import('./pages/guides/TypingSkillsOfficeWork')
    .then(m => ({ default: m.TypingSkillsOfficeWork }))
)

const HowToPracticeTypingEveryDay = lazy(() =>
  import('./pages/guides/HowToPracticeTypingEveryDay')
    .then(m => ({ default: m.HowToPracticeTypingEveryDay }))
)

const WPMvsCPM = lazy(() =>
  import('./pages/guides/WPMvsCPM')
    .then(m => ({ default: m.WPMvsCPM }))
)

const HowToReach100WPM = lazy(() =>
  import('./pages/guides/HowToReach100WPM')
    .then(m => ({ default: m.HowToReach100WPM }))
)

// Loading UI
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="flex flex-col items-center gap-3 text-center">
        <div
          className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-sky-500"
          aria-hidden="true"
        />
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Loading TypSmart...
        </p>
      </div>
    </div>
  )
}

export function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<AppLayout />}>

          {/* Core */}
          <Route path="/" element={<Home />} />
          <Route path="/typing-test" element={<TypingTest />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/:lessonSlug" element={<LessonDetail />} />

          {/* User */}
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Information */}
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />

          {/* Guides */}
          <Route
            path="/guides/how-to-increase-typing-speed"
            element={<HowToIncreaseTypingSpeed />}
          />

          <Route
            path="/guides/how-to-type-faster"
            element={<HowToTypeFaster />}
          />

          <Route
            path="/guides/what-is-wpm"
            element={<WhatIsWPM />}
          />

          <Route
            path="/guides/average-typing-speed"
            element={<AverageTypingSpeed />}
          />

          <Route
            path="/guides/improve-typing-accuracy"
            element={<ImproveTypingAccuracy />}
          />

          <Route
            path="/guides/touch-typing"
            element={<TouchTypingGuide />}
          />

          <Route
            path="/guides/typing-speed-test"
            element={<TypingSpeedTestGuide />}
          />

          <Route
            path="/guides/10-finger-typing"
            element={<TenFingerTypingGuide />}
          />

          <Route
            path="/guides/qwerty-keyboard"
            element={<QWERTYKeyboardGuide />}
          />

          <Route
            path="/guides/learn-touch-typing"
            element={<LearnTouchTypingTime />}
          />

          <Route
            path="/guides/typing-exercises-for-beginners"
            element={<TypingExercisesBeginners />}
          />

          <Route
            path="/guides/best-typing-practice-routine"
            element={<BestTypingPracticeRoutine />}
          />

          <Route
            path="/guides/stop-looking-at-keyboard"
            element={<StopLookingAtKeyboard />}
          />

          <Route
            path="/guides/type-without-looking-keyboard"
            element={<TypeWithoutLookingKeyboard />}
          />

          <Route
            path="/guides/typing-mistakes-and-fixes"
            element={<TypingMistakesAndFixes />}
          />

          <Route
            path="/guides/typing-for-students"
            element={<TypingForStudents />}
          />

          <Route
            path="/guides/typing-skills-office-work"
            element={<TypingSkillsOfficeWork />}
          />

          <Route
            path="/guides/how-to-practice-typing-every-day"
            element={<HowToPracticeTypingEveryDay />}
          />

          <Route
            path="/guides/wpm-vs-cpm"
            element={<WPMvsCPM />}
          />

          <Route
            path="/guides/how-to-reach-100-wpm"
            element={<HowToReach100WPM />}
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </Suspense>
  )
}