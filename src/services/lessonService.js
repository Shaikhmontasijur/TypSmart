import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { LESSONS_DATA } from '../data/lessonsData'

const LOCAL_STORAGE_LESSONS_PROGRESS_KEY = 'typeflow_lessons_progress'

export const lessonService = {
  /**
   * Get all lessons grouped or flat
   */
  async getLessons() {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('lessons')
          .select('*')
          .order('order_index', { ascending: true })

        if (!error && data && data.length > 0) {
          return data
        }
      } catch (err) {
        console.warn('Error fetching Supabase lessons:', err)
      }
    }
    return LESSONS_DATA
  },

  /**
   * Get lesson by slug
   */
  async getLessonBySlug(slug) {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('lessons')
          .select('*')
          .eq('slug', slug)
          .single()

        if (!error && data) {
          return data
        }
      } catch (err) {
        console.warn('Error fetching lesson by slug:', err)
      }
    }
    return LESSONS_DATA.find(l => l.slug === slug) || null
  },

  /**
   * Get all lesson progress for a user
   */
  async getUserProgress(userId) {
    if (isSupabaseConfigured && supabase && userId && userId !== 'guest') {
      try {
        const { data, error } = await supabase
          .from('lesson_progress')
          .select('*')
          .eq('user_id', userId)

        if (!error && data) {
          // Key by lesson_id
          const map = {}
          data.forEach(item => {
            map[item.lesson_id] = item
          })
          return map
        }
      } catch (err) {
        console.warn('Error fetching lesson progress:', err)
      }
    }

    // Local fallback
    try {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_LESSONS_PROGRESS_KEY) || '{}')
    } catch {
      return {}
    }
  },

  /**
   * Save or update progress for a completed lesson
   */
  async saveProgress({ lessonId, wpm, accuracy, completed = true, user = null }) {
    const progressMap = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LESSONS_PROGRESS_KEY) || '{}')
    const existing = progressMap[lessonId] || { best_wpm: 0, best_accuracy: 0, completed: false }

    const updated = {
      lesson_id: lessonId,
      user_id: user?.id || 'guest',
      completed: completed || existing.completed,
      best_wpm: Math.max(existing.best_wpm || 0, Math.round(wpm)),
      best_accuracy: Math.max(existing.best_accuracy || 0, Math.round(accuracy)),
      progress_percent: 100,
      updated_at: new Date().toISOString()
    }

    progressMap[lessonId] = updated
    localStorage.setItem(LOCAL_STORAGE_LESSONS_PROGRESS_KEY, JSON.stringify(progressMap))

    if (isSupabaseConfigured && supabase && user && user.id !== 'guest') {
      try {
        await supabase.from('lesson_progress').upsert({
          user_id: user.id,
          lesson_id: lessonId,
          completed: updated.completed,
          best_wpm: updated.best_wpm,
          best_accuracy: updated.best_accuracy,
          progress_percent: updated.progress_percent,
          updated_at: updated.updated_at
        })
      } catch (err) {
        console.warn('Failed to save lesson progress to Supabase:', err)
      }
    }

    return updated
  }
}
