import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const profileRequestRef = useRef(0)

  const fetchProfile = async (userId) => {
    if (!isSupabaseConfigured || !supabase) return null
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle()

      if (error) {
        console.warn('Profile fetch error:', error)
        return null
      }
      return data
    } catch (err) {
      console.warn('Fetch profile error:', err)
      return null
    }
  }

  const loadProfile = async (authUser) => {
    const requestId = ++profileRequestRef.current
    setProfile(null)
    const profileData = await fetchProfile(authUser.id)
    if (requestId === profileRequestRef.current) {
      setProfile(profileData)
    }
  }

  // Load session
  useEffect(() => {
    let mounted = true
    let subscription

    async function initAuth() {
      if (!isSupabaseConfigured || !supabase) {
        // Fallback local session for offline/demo preview
        const storedUser = localStorage.getItem('_guest_user')
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
          await loadProfile(session.user)
        }
      } catch (err) {
        console.warn('Supabase auth session error:', err)
      } finally {
        if (mounted) setLoading(false)
      }

      // Listen for auth state changes
      const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (!mounted) return
        if (session?.user) {
          setUser(session.user)
          await loadProfile(session.user)
        } else {
          profileRequestRef.current += 1
          setUser(null)
          setProfile(null)
        }
        setLoading(false)
      })
      subscription = data.subscription
    }

    initAuth()

    return () => {
      mounted = false
      subscription?.unsubscribe()
    }
  }, [])

  const signUp = async ({ email, password, username, displayName }) => {
    const normalizedUsername = String(username || '').trim().toLowerCase().replace(/[^a-z0-9_]/g, '')
    const cleanDisplayName = String(displayName || '').trim()

    if (!isSupabaseConfigured || !supabase) {
      const localId = 'local_' + Math.random().toString(36).substring(2, 9)
      const mockUser = { id: localId, email }
      const mockProfile = {
        id: localId,
        username: normalizedUsername || 'user',
        display_name: cleanDisplayName || normalizedUsername || 'User',
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
            username: normalizedUsername || 'user',
            display_name: cleanDisplayName || normalizedUsername || 'User'
          }
        }
      })

      if (error) throw error

      if (data.user) {
        const profileData = {
          id: data.user.id,
          username: normalizedUsername || 'user',
          display_name: cleanDisplayName || normalizedUsername || 'User',
          avatar_url: '',
          updated_at: new Date().toISOString()
        }
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
        username: 'User',
        display_name: 'User',
        avatar_url: '',
        bio: 'Dedicated TypSmart typist.',
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
      }
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const signOut = async () => {
    profileRequestRef.current += 1
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
