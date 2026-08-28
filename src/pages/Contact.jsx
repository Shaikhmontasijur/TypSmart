import React, { useState } from 'react'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Button } from '../components/common/Button'
import { Mail, MessageSquare, Send, CheckCircle2, MapPin, Globe } from 'lucide-react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('Feedback')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEOHead
        title="Contact & Support — TypeFlow"
        description="Get in touch with the TypeFlow team for support, feature suggestions, or institutional licensing."
      />

      <div className="text-center mb-12">
        <Badge variant="brand" size="md" className="mb-3">
          Get in Touch
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Contact & Support
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Have an idea for a lesson, spotted a bug, or need help? We would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info Column */}
        <div className="space-y-4">
          <Card className="p-5 flex items-start gap-3">
            <Mail className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-slate-900 dark:text-white">Email Support</p>
              <p className="text-xs text-slate-500 mt-0.5">support@typeflow.dev</p>
            </div>
          </Card>

          <Card className="p-5 flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-slate-900 dark:text-white">Community</p>
              <p className="text-xs text-slate-500 mt-0.5">Discord & GitHub Discussions</p>
            </div>
          </Card>

          <Card className="p-5 flex items-start gap-3">
            <Globe className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-slate-900 dark:text-white">Global Edge</p>
              <p className="text-xs text-slate-500 mt-0.5">Cloudflare Pages Delivery</p>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="p-6 sm:p-8 md:col-span-2">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                Thank you for reaching out! A member of the TypeFlow team will respond to {email} shortly.
              </p>
              <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    placeholder="Alex Mercer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    placeholder="alex@domain.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none font-medium"
                >
                  <option value="Feedback">Product Feedback</option>
                  <option value="Bug">Report a Bug / Glitch</option>
                  <option value="Lessons">Suggest a Lesson or Curriculum Drill</option>
                  <option value="Institution">Schools & Institutional Inquiries</option>
                  <option value="Other">Other Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  placeholder="Tell us what you think..."
                />
              </div>

              <Button type="submit" variant="primary" loading={loading} icon={Send} className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  )
}
