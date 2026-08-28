import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useTypingStats } from '../contexts/TypingStatsContext'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Button } from '../components/common/Button'
import { StatCard } from '../components/common/StatCard'
import { CertificateModal } from '../components/common/CertificateModal'
import { formatDate } from '../lib/utils'
import { User, Edit3, Check, Save, Zap, Target, Activity, BookOpen, Calendar, Shield, Award } from 'lucide-react'

export function Profile() {
  const { user, profile, updateProfile } = useAuth()
  const { stats } = useTypingStats()

  const [isEditing, setIsEditing] = useState(false)
  const [showCertModal, setShowCertModal] = useState(false)
  const [displayName, setDisplayName] = useState(profile?.display_name || 'Typist')
  const [username, setUsername] = useState(profile?.username || 'user')
  const [bio, setBio] = useState(profile?.bio || 'Dedicated TypeFlow typist.')
  const [saving, setSaving] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setSuccessMsg('')
    const { error } = await updateProfile({
      display_name: displayName,
      username: username.toLowerCase().trim().replace(/[^a-z0-9_]/g, ''),
      bio
    })
    setSaving(false)
    if (!error) {
      setSuccessMsg('Profile updated successfully!')
      setIsEditing(false)
      setTimeout(() => setSuccessMsg(''), 3000)
    }
  }

  const initialLetter = (profile?.display_name || profile?.username || 'U').charAt(0).toUpperCase()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SEOHead
        title="Typist Profile & Performance Records"
        description="Manage your TypeFlow typist identity, monitor all-time velocity records, and review completed milestones."
      />

      {/* Header Card */}
      <Card className="p-6 sm:p-8 mb-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-brand-600 to-accent-400 text-white flex items-center justify-center font-black text-3xl shadow-xl shadow-brand-500/20 flex-shrink-0">
              {initialLetter}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {profile?.display_name || profile?.username || 'Typist'}
                </h1>
                <Badge variant="brand" size="sm">
                  Active Typist
                </Badge>
              </div>
              <p className="text-sm font-mono text-slate-400 mt-0.5">
                @{profile?.username || 'guest_user'}
              </p>
              <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Joined {formatDate(profile?.created_at || user?.created_at)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {stats.bestWpm >= 40 && (
              <Button
                variant="outline"
                icon={Award}
                onClick={() => setShowCertModal(true)}
                className="border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10"
              >
                Certificate
              </Button>
            )}

            <Button
              variant={isEditing ? 'ghost' : 'outline'}
              onClick={() => setIsEditing(!isEditing)}
              icon={Edit3}
            >
              {isEditing ? 'Cancel Edit' : 'Edit Profile'}
            </Button>
          </div>
        </div>

        {profile?.bio && !isEditing && (
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-sm text-slate-600 dark:text-slate-300">
            "{profile.bio}"
          </div>
        )}

        {successMsg && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2 animate-fade-in">
            <Check className="w-4 h-4" /> {successMsg}
          </div>
        )}
      </Card>

      {/* Edit Form Modal/Inline */}
      {isEditing && (
        <Card className="p-6 sm:p-8 mb-8 border-brand-500/30 shadow-lg animate-fade-in">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Edit Profile Details</h2>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Display Name
                </label>
                <input
                  type="text"
                  required
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  placeholder="handle"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Bio
              </label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                placeholder="Share your typing goals or setup..."
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="ghost" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" loading={saving} icon={Save}>
                Save Changes
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Profile Performance Metrics */}
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Lifetime Typing Telemetry</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Personal Best"
            value={stats.bestWpm}
            unit="WPM"
            description="Peak Velocity Record"
            icon={Zap}
            iconColor="text-amber-500 bg-amber-500/10"
          />

          <StatCard
            title="Session Average"
            value={stats.averageWpm}
            unit="WPM"
            description="Overall Velocity"
            icon={Activity}
            iconColor="text-brand-500 bg-brand-500/10"
          />

          <StatCard
            title="Accuracy Average"
            value={stats.averageAccuracy}
            unit="%"
            description="Total Keystroke Precision"
            icon={Target}
            iconColor="text-emerald-500 bg-emerald-500/10"
          />

          <StatCard
            title="Total Sessions"
            value={stats.testsCompleted + stats.lessonsCompleted}
            description="Tests + Lessons Done"
            icon={BookOpen}
            iconColor="text-purple-500 bg-purple-500/10"
          />
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={showCertModal}
        onClose={() => setShowCertModal(false)}
        userName={displayName}
        wpm={stats.bestWpm}
        accuracy={stats.averageAccuracy || 98}
      />
    </div>
  )
}
