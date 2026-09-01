import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { Zap, Mail, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react'

export function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const { resetPassword } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)

    const { error } = await resetPassword(email)
    setLoading(false)

    if (error) {
      setErrorMsg(error.message || 'Failed to send password reset email.')
    } else {
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <SEOHead
        title="Reset Password — TypSmart"
        description="Reset your TypSmart account password."
      />

      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2.5 font-extrabold text-2xl tracking-tight mb-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-400 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <span className="text-slate-900 dark:text-white">TYPERSMART</span>
          </Link>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">Reset Password</h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Enter your email to receive recovery instructions
          </p>
        </div>

        <Card className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">Check Your Inbox</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                If an account exists with <strong className="text-slate-900 dark:text-white">{email}</strong>, you will receive a secure password reset link.
              </p>
              <Link to="/login">
                <Button variant="outline" className="w-full mt-4" icon={ArrowLeft}>
                  Back to Sign In
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Account Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    placeholder="name@domain.com"
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" loading={loading} className="w-full py-3">
                Send Reset Link
              </Button>

              <div className="text-center pt-2">
                <Link to="/login" className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  )
}
