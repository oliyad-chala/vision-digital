import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Helper to check if URL is a valid Supabase URL (and not the placeholder)
const isValidUrl = (url) => {
  try {
    return url && url.startsWith('http') && !url.includes('your_supabase_url_here')
  } catch {
    return false
  }
}

const isValidKey = (key) => {
  return key && !key.includes('your_supabase_anon_key_here')
}

export const supabase = (isValidUrl(supabaseUrl) && isValidKey(supabaseAnonKey)) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null
