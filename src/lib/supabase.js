import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = (
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  ''
).trim()

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseKey && 
  supabaseUrl.startsWith('https://') &&
  !supabaseUrl.includes('your-project')
)

if (!isSupabaseConfigured && import.meta.env.DEV) {
  console.info(
    '%c[TypeFlow Supabase]%c Running in local offline persistence mode. To connect Supabase production, set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in .env or .env.local.',
    'color: #0284c7; font-weight: bold;',
    'color: inherit;'
  )
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null
