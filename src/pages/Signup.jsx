import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { Zap, Lock, Mail, User, AlertCircle, Sparkles } from 'lucide-react'

export function Signup() {
  const [displayName, setDisplayName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const { signUp } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    const cleanDisplayName = displayName.trim()
    const cleanUsername = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '')

    if (!cleanDisplayName) {
      setErrorMsg('Please enter a display name.')
      return
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.')
      return
    }

    if (!cleanUsername) {
      setErrorMsg('Please enter a username using letters, numbers, or underscores.')
      return
    }

    setLoading(true)

    const { error } = await signUp({
      email,
      password,
      username: cleanUsername,
      displayName: cleanDisplayName
    })

    setLoading(false)

    if (error) {
      setErrorMsg(error.message || 'Signup failed. Please try again.')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <SEOHead
        title="Create Free Account — TypSmart"
        description="Join TypSmart to track your typing progression, save personal bests, and compete on the global leaderboard."
      />

      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2.5 font-extrabold text-2xl tracking-tight mb-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-400 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <span className="text-slate-900 dark:text-white">TYPERSMART</span>
          </Link>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">Create Your Account</h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Track metrics and conquer keyboard velocity
          </p>
        </div>

        <Card className="p-6 sm:p-8">
          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Display Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  placeholder="Alex Mercer"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Username (Handle)
              </label>
              <div className="relative">
                <span className="text-sm font-mono font-bold text-slate-400 absolute left-3.5 top-2.5">@</span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none font-mono"
                  placeholder="alex_speed"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  placeholder="alex@domain.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  placeholder="Minimum 6 characters"
                />
              </div>
            </div>

            <Button type="submit" variant="primary" loading={loading} icon={Sparkles} className="w-full text-base py-3">
              Create Account
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="text-brand-600 dark:text-brand-400 font-bold hover:underline">
              Sign In
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
