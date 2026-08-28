import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load session
  useEffect(() => {
    let mounted = true

    async function initAuth() {
      if (!isSupabaseConfigured || !supabase) {
        // Fallback local session for offline/demo preview
        const storedUser = localStorage.getItem('typeflow_guest_user')
        if (storedUser) {
          try {
            const parsed = JSON.parse(storedUser)
            if (mounted) {
              setUser(parsed.user)
              setProfile(parsed.profile)
            }
          } catch {
            localStorage.removeItem('typeflow_guest_user')
          }
        }
        if (mounted) setLoading(false)
        return
      }

      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) throw error

        if (session?.user) {
          if (mounted) setUser(session.user)
          await fetchProfile(session.user.id)
        }
      } catch (err) {
        console.warn('Supabase auth session error:', err)
      } finally {
        if (mounted) setLoading(false)
      }

      // Listen for auth state changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (!mounted) return
        if (session?.user) {
          setUser(session.user)
          await fetchProfile(session.user.id)
        } else {
          setUser(null)
          setProfile(null)
        }
        setLoading(false)
      })

      return () => {
        subscription?.unsubscribe()
      }
    }

    initAuth()

    return () => {
      mounted = false
    }
  }, [])

  const fetchProfile = async (userId) => {
    if (!isSupabaseConfigured || !supabase) return
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.warn('Profile fetch error:', error)
      }
      if (data) {
        setProfile(data)
      }
    } catch (err) {
      console.warn('Fetch profile error:', err)
    }
  }

  const signUp = async ({ email, password, username, displayName }) => {
    if (!isSupabaseConfigured || !supabase) {
      // Local fallback account
      const localId = 'local_' + Math.random().toString(36).substring(2, 9)
      const mockUser = { id: localId, email }
      const mockProfile = {
        id: localId,
        username: username || email.split('@')[0],
        display_name: displayName || username || 'Typist',
        avatar_url: '',
        bio: 'Dedicated TypeFlow typist.',
        created_at: new Date().toISOString()
      }
      localStorage.setItem('typeflow_guest_user', JSON.stringify({ user: mockUser, profile: mockProfile }))
      setUser(mockUser)
      setProfile(mockProfile)
      return { data: { user: mockUser }, error: null }
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username: username || email.split('@')[0],
            display_name: displayName || username || 'Typist'
          }
        }
      })

      if (error) throw error

      if (data.user) {
        // Upsert profile in case trigger didn't run
        const profileData = {
          id: data.user.id,
          username: username || email.split('@')[0],
          display_name: displayName || username || 'Typist',
          avatar_url: '',
          updated_at: new Date().toISOString()
        }

        await supabase.from('profiles').upsert(profileData)
        setUser(data.user)
        setProfile(profileData)
      }

      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const signIn = async ({ email, password }) => {
    if (!isSupabaseConfigured || !supabase) {
      // Local fallback account check
      const stored = localStorage.getItem('typeflow_guest_user')
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed.user.email === email) {
          setUser(parsed.user)
          setProfile(parsed.profile)
          return { data: parsed, error: null }
        }
      }
      // Mock create if not found
      const localId = 'local_' + Math.random().toString(36).substring(2, 9)
      const mockUser = { id: localId, email }
      const mockProfile = {
        id: localId,
        username: email.split('@')[0],
        display_name: email.split('@')[0],
        avatar_url: '',
        bio: 'Dedicated TypeFlow typist.',
        created_at: new Date().toISOString()
      }
      localStorage.setItem('typeflow_guest_user', JSON.stringify({ user: mockUser, profile: mockProfile }))
      setUser(mockUser)
      setProfile(mockProfile)
      return { data: { user: mockUser }, error: null }
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      if (data.user) {
        setUser(data.user)
        await fetchProfile(data.user.id)
      }
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const signOut = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut()
    }
    localStorage.removeItem('typeflow_guest_user')
    setUser(null)
    setProfile(null)
  }

  const resetPassword = async (email) => {
    if (!isSupabaseConfigured || !supabase) {
      return { data: {}, error: null }
    }
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/login`,
      })
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const updateProfile = async (updates) => {
    if (!user) return { error: new Error('Not logged in') }

    const updatedProfile = {
      ...profile,
      ...updates,
      updated_at: new Date().toISOString()
    }

    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase
          .from('profiles')
          .update(updates)
          .eq('id', user.id)

        if (error) throw error
      } catch (error) {
        return { error }
      }
    } else {
      localStorage.setItem('typeflow_guest_user', JSON.stringify({ user, profile: updatedProfile }))
    }

    setProfile(updatedProfile)
    return { error: null }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        isAuthenticated: Boolean(user),
        signUp,
        signIn,
        signOut,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
