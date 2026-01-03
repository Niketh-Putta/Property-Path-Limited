const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
const publicSiteUrl = import.meta.env.VITE_PUBLIC_SITE_URL as string | undefined
const adminEmailsRaw = import.meta.env.VITE_ADMIN_EMAILS as string | undefined

export const env = {
  supabaseUrl: typeof supabaseUrl === 'string' && supabaseUrl.length ? supabaseUrl : undefined,
  supabaseAnonKey:
    typeof supabaseAnonKey === 'string' && supabaseAnonKey.length ? supabaseAnonKey : undefined,
  publicSiteUrl: typeof publicSiteUrl === 'string' && publicSiteUrl.length ? publicSiteUrl : undefined,
  adminEmails: (typeof adminEmailsRaw === 'string' ? adminEmailsRaw : '')
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean),
}
