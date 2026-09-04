import { supabase, isSupabaseConfigured } from '../lib/supabase'

const LOCAL_STORAGE_TESTS_KEY = 'typeflow_local_tests'

// Official static benchmark typists representing baseline speed tiers
const DEFAULT_BENCHMARKS = [
  { rank: 1, id: 'b1', username: 'velocity_king', displayName: 'Elena Rostova', wpm: 128, accuracy: 99.4, duration: 60, difficulty: 'hard', isBenchmark: true, isVerified: false, date: new Date(Date.now() - 3600000 * 2).toISOString() },
  { rank: 2, id: 'b2', username: 'alex_keystroke', displayName: 'Alex Mercer', wpm: 119, accuracy: 98.8, duration: 60, difficulty: 'medium', isBenchmark: true, isVerified: false, date: new Date(Date.now() - 3600000 * 5).toISOString() },
  { rank: 3, id: 'b3', username: 'sarah_types', displayName: 'Sarah Jenkins', wpm: 114, accuracy: 99.1, duration: 30, difficulty: 'medium', isBenchmark: true, isVerified: false, date: new Date(Date.now() - 3600000 * 12).toISOString() },
  { rank: 4, id: 'b4', username: 'quantum_coder', displayName: 'David Kim', wpm: 108, accuracy: 97.6, duration: 60, difficulty: 'hard', isBenchmark: true, isVerified: false, date: new Date(Date.now() - 3600000 * 24).toISOString() },
  { rank: 5, id: 'b5', username: 'tactile_samurai', displayName: 'Kenji Sato', wpm: 102, accuracy: 98.2, duration: 60, difficulty: 'medium', isBenchmark: true, isVerified: false, date: new Date(Date.now() - 3600000 * 36).toISOString() },
  { rank: 6, id: 'b6', username: 'flow_state_dan', displayName: 'Daniel Rivera', wpm: 97, accuracy: 96.9, duration: 30, difficulty: 'easy', isBenchmark: true, isVerified: false, date: new Date(Date.now() - 3600000 * 48).toISOString() },
  { rank: 7, id: 'b7', username: 'cadence_pro', displayName: 'Maya Lindqvist', wpm: 94, accuracy: 98.5, duration: 60, difficulty: 'medium', isBenchmark: true, isVerified: false, date: new Date(Date.now() - 3600000 * 72).toISOString() },
  { rank: 8, id: 'b8', username: 'hyper_typist', displayName: 'Marcus Vance', wpm: 89, accuracy: 95.8, duration: 15, difficulty: 'easy', isBenchmark: true, isVerified: false, date: new Date(Date.now() - 3600000 * 96).toISOString() },
]

export const typingService = {
  /**
   * Save a completed typing test with evidence packet
   */
  async saveTest(testData, user = null) {
    const duration = Number(testData.duration) || 60
    const wpm = Number(testData.wpm) || 0
    const accuracy = Number(testData.accuracy) || 0
    const correct_chars = Number(testData.correctChars) || 0
    const incorrect_chars = Number(testData.incorrectChars) || 0
    const total_chars = Number(testData.totalChars) || 0
    const started_at = testData.startedAt || new Date().toISOString()
    const completed_at = testData.completedAt || new Date().toISOString()

    const duration_ms = Math.max(1, new Date(completed_at).getTime() - new Date(started_at).getTime())
    const mean_interval_ms = total_chars > 0 ? Math.round(duration_ms / total_chars) : 0

    // Lightweight non-invasive evidence packet
    const evidence = testData.evidence || {
      duration_ms,
      mean_interval_ms,
      backspace_count: 0
    }

    const payload = {
      id: crypto.randomUUID ? crypto.randomUUID() : 'test_' + Date.now(),
      user_id: user?.id || 'guest',
      duration,
      difficulty: testData.difficulty || 'easy',
      wpm,
      accuracy,
      correct_chars,
      incorrect_chars,
      total_chars,
      started_at,
      completed_at,
      created_at: new Date().toISOString(),
      is_verified: false,
      is_eligible_for_leaderboard: false,
      is_benchmark: false,
      verification_status: 'pending',
      evidence
    }

    // Always keep a local copy for offline persistence
    try {
      const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TESTS_KEY) || '[]')
      existing.unshift(payload)
      localStorage.setItem(LOCAL_STORAGE_TESTS_KEY, JSON.stringify(existing.slice(0, 100)))
    } catch {
      // Ignore local storage error
    }

    // If authenticated with Supabase, save to DB through server-side verification trigger
    if (isSupabaseConfigured && supabase && user && user.id !== 'guest') {
      try {
        const { data, error } = await supabase
          .from('typing_tests')
          .insert({
            user_id: user.id,
            duration: payload.duration,
            difficulty: payload.difficulty,
            wpm: payload.wpm,
            accuracy: payload.accuracy,
            correct_chars: payload.correct_chars,
            incorrect_chars: payload.incorrect_chars,
            total_chars: payload.total_chars,
            started_at: payload.started_at,
            completed_at: payload.completed_at,
            evidence: payload.evidence
          })
          .select('id, wpm, accuracy, is_verified, is_eligible_for_leaderboard, verification_status, verification_reason')
          .maybeSingle()

        if (error) {
          console.warn('Supabase save test error:', error)
        } else if (data) {
          payload.is_verified = Boolean(data.is_verified)
          payload.is_eligible_for_leaderboard = Boolean(data.is_eligible_for_leaderboard)
          payload.verification_status = data.verification_status
          payload.verification_reason = data.verification_reason
        }
      } catch (err) {
        console.warn('Failed to save to Supabase:', err)
      }
    }

    return payload
  },

  /**
   * Get user test history
   */
  async getUserHistory(userId) {
    if (isSupabaseConfigured && supabase && userId && userId !== 'guest') {
      try {
        const { data, error } = await supabase
          .from('typing_tests')
          .select('*')
          .eq('user_id', userId)
          .order('completed_at', { ascending: false })

        if (!error && data && data.length > 0) {
          return data
        }
      } catch (err) {
        console.warn('Error fetching Supabase history:', err)
      }
    }

    // Fallback to local storage
    try {
      const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TESTS_KEY) || '[]')
      return local
    } catch {
      return []
    }
  },

  /**
   * Get aggregate user stats
   */
  async getUserStats(userId) {
    const history = await this.getUserHistory(userId)

    if (!history || history.length === 0) {
      return {
        bestWpm: 0,
        averageWpm: 0,
        averageAccuracy: 0,
        testsCompleted: 0,
        recentTests: []
      }
    }

    const totalTests = history.length
    const bestWpm = Math.max(...history.map(t => Number(t.wpm) || 0), 0)
    const totalWpm = history.reduce((acc, t) => acc + (Number(t.wpm) || 0), 0)
    const totalAccuracy = history.reduce((acc, t) => acc + (Number(t.accuracy) || 0), 0)

    return {
      bestWpm,
      averageWpm: Math.round(totalWpm / totalTests),
      averageAccuracy: Math.round((totalAccuracy / totalTests) * 10) / 10,
      testsCompleted: totalTests,
      recentTests: history.slice(0, 10)
    }
  },

  /**
   * Get Verified Human Leaderboard for specified timeframe: 'daily' | 'weekly' | 'monthly' | 'all'
   * Strictly filters for verified, non-benchmark community results.
   */
  async getLeaderboard(timeframe = 'all') {
    if (isSupabaseConfigured && supabase) {
      try {
        let query = supabase
          .from('typing_tests')
          .select(`
            id,
            wpm,
            accuracy,
            duration,
            difficulty,
            completed_at,
            is_verified,
            is_eligible_for_leaderboard,
            is_benchmark,
            verification_status,
            profiles (
              username,
              display_name,
              avatar_url
            )
          `)
          .eq('is_eligible_for_leaderboard', true)
          .eq('is_benchmark', false)
          .order('wpm', { ascending: false })
          .limit(50)

        // Timeframe filters
        const now = new Date()
        if (timeframe === 'daily') {
          const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString()
          query = query.gte('completed_at', oneDayAgo)
        } else if (timeframe === 'weekly') {
          const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString()
          query = query.gte('completed_at', oneWeekAgo)
        } else if (timeframe === 'monthly') {
          const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString()
          query = query.gte('completed_at', oneMonthAgo)
        }

        const { data, error } = await query
        if (!error && data) {
          return data.map((item, idx) => ({
            rank: idx + 1,
            id: item.id,
            username: item.profiles?.username || 'Typist',
            displayName: item.profiles?.display_name || item.profiles?.username || 'User',
            avatarUrl: item.profiles?.avatar_url,
            wpm: Math.round(Number(item.wpm)),
            accuracy: Math.round(Number(item.accuracy)),
            duration: item.duration,
            difficulty: item.difficulty,
            date: item.completed_at,
            isVerified: true,
            isBenchmark: false
          }))
        }
      } catch (err) {
        console.warn('Leaderboard Supabase fetch error:', err)
      }
    }

    return []
  },

  /**
   * Get Official Synthetic/AI Benchmarks (Never mixed with human leaderboard)
   */
  getBenchmarks() {
    return DEFAULT_BENCHMARKS
  }
}
