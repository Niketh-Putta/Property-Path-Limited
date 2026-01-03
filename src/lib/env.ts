const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined
const publicSiteUrl = import.meta.env.VITE_PUBLIC_SITE_URL as string | undefined
const adminEmailsRaw = import.meta.env.VITE_ADMIN_EMAILS as string | undefined

const fallback = {
  supabaseUrl: 'https://frvljudvkcoysxyvuuzt.supabase.co',
  supabaseAnonKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydmxqdWR2a2NveXN4eXZ1dXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNzM3MTgsImV4cCI6MjA4Mjk0OTcxOH0.gnT-zZADF02KQ8v3qFboExBrGYCTh9z5L6OwJf7qYy4',
  adminEmails: 'admin@propertypath.com',
  publicSiteUrl: 'https://www.property-path.in/',
}

export const env = {
  supabaseUrl:
    typeof supabaseUrl === 'string' && supabaseUrl.length ? supabaseUrl : fallback.supabaseUrl,
  supabaseAnonKey:
    typeof supabaseAnonKey === 'string' && supabaseAnonKey.length
      ? supabaseAnonKey
      : fallback.supabaseAnonKey,
  publicSiteUrl:
    typeof publicSiteUrl === 'string' && publicSiteUrl.length
      ? publicSiteUrl
      : fallback.publicSiteUrl,
  adminEmails: (typeof adminEmailsRaw === 'string' && adminEmailsRaw.length
    ? adminEmailsRaw
    : fallback.adminEmails)
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean),
}
