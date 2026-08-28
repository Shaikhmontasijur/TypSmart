import React from 'react'
import { Link } from 'react-router-dom'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Button } from '../components/common/Button'
import { Zap, Target, Shield, Heart, Award, ArrowRight, Sparkles } from 'lucide-react'

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEOHead
        title="About TypeFlow — Philosophy & Mission"
        description="TypeFlow is designed to turn typing into an enjoyable, measurable daily discipline."
      />

      <div className="text-center mb-12">
        <Badge variant="brand" size="md" className="mb-3">
          Our Mission
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Accelerating Digital Fluency
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          "Master Your Keyboard. One Test. One Skill. Every Day."
        </p>
      </div>

      <div className="space-y-8 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <Card className="p-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-brand-500" /> The Philosophy of TypeFlow
          </h2>
          <p className="mb-4">
            Typing is the fundamental cognitive bottleneck between human intent and computer execution. Whether writing code, drafting strategic documents, or communicating across teams, your typing velocity and accuracy dictate the friction with which your thoughts materialize.
          </p>
          <p>
            We built TypeFlow with a single guiding principle: eliminate all noise, gamify deliberate repetition, and provide instantaneous, uncompromising mechanical feedback so every keystroke compounds towards effortless fluency.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <Target className="w-6 h-6 text-emerald-500 mb-3" />
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
              Accuracy Over Raw Speed
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Speed without precision is chaotic. Our standardized formula reinforces 100% correct keystroke execution first, allowing raw velocity to flourish naturally.
            </p>
          </Card>

          <Card className="p-6">
            <Shield className="w-6 h-6 text-brand-500 mb-3" />
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
              Privacy & Open Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Built on React, Tailwind, and Supabase with strict Row Level Security. Your data belongs to you, without tracking or intrusive ads.
            </p>
          </Card>
        </div>

        <Card className="p-8 text-center bg-gradient-to-tr from-slate-900 to-slate-950 text-white border-slate-800">
          <h2 className="text-2xl font-bold mb-3">Begin Your Typing Journey</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
            Take a 60-second test today and establish your baseline.
          </p>
          <Link to="/typing-test">
            <Button variant="primary" size="lg" icon={Sparkles}>
              Start Free Typing Test
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}
