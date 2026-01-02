function getEnv(key: string) {
  const value = import.meta.env[key]
  return typeof value === 'string' ? value : undefined
}

export const env = {
  supabaseUrl: getEnv('VITE_SUPABASE_URL'),
  supabaseAnonKey: getEnv('VITE_SUPABASE_ANON_KEY'),
  adminEmails: (getEnv('VITE_ADMIN_EMAILS') ?? '')
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean),
}

