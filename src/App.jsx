import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'

// Pages
import { Home } from './pages/Home'
import { TypingTest } from './pages/TypingTest'
import { Practice } from './pages/Practice'
import { LessonDetail } from './pages/LessonDetail'
import { Leaderboard } from './pages/Leaderboard'
import { Dashboard } from './pages/Dashboard'
import { History } from './pages/History'
import { Profile } from './pages/Profile'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { ForgotPassword } from './pages/ForgotPassword'
import { About } from './pages/About'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/typing-test" element={<TypingTest />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/:lessonSlug" element={<LessonDetail />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
