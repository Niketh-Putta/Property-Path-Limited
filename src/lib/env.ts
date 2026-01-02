function getEnv(key: string) {
  const value = import.meta.env[key]
  return typeof value === 'string' ? value : undefined
}

export const env = {
  supabaseUrl: getEnv('VITE_SUPABASE_URL'),
  supabaseAnonKey: getEnv('VITE_SUPABASE_ANON_KEY'),
  publicSiteUrl: getEnv('VITE_PUBLIC_SITE_URL'),
  adminEmails: (getEnv('VITE_ADMIN_EMAILS') ?? '')
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean),
}
