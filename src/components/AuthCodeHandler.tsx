import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase, supabaseConfigured } from '../lib/supabase'

export default function AuthCodeHandler() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!supabaseConfigured()) return

    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    const error = params.get('error') ?? params.get('error_code')
    const errorDescription = params.get('error_description')

    if (error || errorDescription) {
      window.history.replaceState({}, '', `${window.location.pathname}${window.location.hash}`)
      navigate('/admin', { replace: true })
      return
    }

    if (!code) return

    supabase!.auth
      .exchangeCodeForSession(code)
      .then(({ error }) => {
        window.history.replaceState({}, '', `${window.location.pathname}${window.location.hash}`)
        if (error) {
          navigate('/admin', { replace: true })
          return
        }
        navigate('/admin', { replace: true })
      })
      .catch(() => {
        window.history.replaceState({}, '', `${window.location.pathname}${window.location.hash}`)
        navigate('/admin', { replace: true })
      })
  }, [navigate])

  return null
}

