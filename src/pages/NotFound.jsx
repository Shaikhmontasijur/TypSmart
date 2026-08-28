import React from 'react'
import { Link } from 'react-router-dom'
import { SEOHead } from '../components/common/SEOHead'
import { Button } from '../components/common/Button'
import { Card } from '../components/common/Card'
import { Home, Keyboard, Search } from 'lucide-react'

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <SEOHead
        title="404 — Page Not Found"
        description="The requested page could not be located on TypeFlow."
      />

      <Card className="p-8 sm:p-12 text-center max-w-lg mx-auto shadow-xl">
        <div className="w-16 h-16 rounded-3xl bg-brand-500/10 text-brand-500 flex items-center justify-center mx-auto mb-4 font-mono font-black text-2xl">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto">
          The page you are looking for might have been moved, removed, or never existed in this flow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="w-full sm:w-auto">
            <Button variant="primary" icon={Home} className="w-full sm:w-auto">
              Return Home
            </Button>
          </Link>
          <Link to="/typing-test" className="w-full sm:w-auto">
            <Button variant="outline" icon={Keyboard} className="w-full sm:w-auto">
              Typing Test
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}
