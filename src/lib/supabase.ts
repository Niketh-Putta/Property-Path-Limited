import { createClient } from '@supabase/supabase-js'
import { env } from './env'

export type ConsultationInsert = {
  name: string
  email: string
  phone?: string | null
  message: string
  source?: string
}

export type ConsultationRow = ConsultationInsert & {
  id: string
  created_at: string
}

export const supabase =
  env.supabaseUrl && env.supabaseAnonKey
    ? createClient(env.supabaseUrl, env.supabaseAnonKey)
    : null

export function supabaseConfigured() {
  return Boolean(supabase)
}

