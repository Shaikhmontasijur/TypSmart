import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Heart, ShieldCheck, Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 font-extrabold text-xl tracking-tight">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <span className="text-slate-900 dark:text-white font-extrabold">
                TypSmart
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              "Master Your Keyboard. One Test. One Skill. Every Day."
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Build real typing speed, accuracy, and confidence through focused deliberate practice and measurable daily progress.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/typing-test" className="hover:text-brand-500 transition">
                  Typing Speed Test
                </Link>
              </li>
              <li>
                <Link to="/practice" className="hover:text-brand-500 transition">
                  Touch Typing Lessons
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="hover:text-brand-500 transition">
                  Global Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-brand-500 transition">
                  Analytics Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform Tiers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Tiers
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-1.5">
                <span className="text-slate-900 dark:text-slate-200">Free Core</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded-full font-bold">Active</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-slate-500 dark:text-slate-400">Pro Analytics</span>
                <span className="text-[10px] bg-brand-500/10 text-brand-600 dark:text-brand-400 px-1.5 py-0.5 rounded-full font-bold">Ready</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-slate-500 dark:text-slate-400">Institution & Schools</span>
                <span className="text-[10px] bg-purple-500/10 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded-full font-bold">Ready</span>
              </li>
            </ul>
          </div>

          {/* Legal / Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-brand-500 transition">
                  About TypSmart
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-brand-500 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand-500 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-500 transition">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TypSmart. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Cloudflare Pages Ready
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" /> Supabase Enabled
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
