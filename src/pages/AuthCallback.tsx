import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { supabase, supabaseConfigured } from '../lib/supabase'

export default function AuthCallback() {
  const navigate = useNavigate()
  const url = new URL(window.location.href)
  const hash = url.hash ?? ''
  const hashQuery = hash.includes('?') ? hash.slice(hash.indexOf('?') + 1) : ''
  const hashParams = new URLSearchParams(hashQuery)
  const code = url.searchParams.get('code') ?? hashParams.get('code')
  const initialError = !supabaseConfigured()
    ? 'Authentication is not configured.'
    : !code
      ? 'Invalid login link. Please request a new one.'
      : null

  const [error, setError] = useState<string | null>(initialError)

  useEffect(() => {
    if (initialError || !code) return

    supabase!.auth
      .exchangeCodeForSession(code)
      .then(({ error }) => {
        if (error) {
          setError(error.message)
          return
        }
        window.history.replaceState({}, '', `${window.location.pathname}${window.location.hash}`)
        navigate('/admin', { replace: true })
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Failed to sign in.')
      })
  }, [navigate, code, initialError])

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="SIGNING IN"
          title={error ? 'Sign-in failed' : 'Completing sign-in…'}
          description={
            error
              ? 'Please return to the admin page and request a new login link.'
              : 'You’ll be redirected automatically.'
          }
        />
        {error ? (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
            {error}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            Working…
          </div>
        )}
      </Reveal>
    </div>
  )
}
