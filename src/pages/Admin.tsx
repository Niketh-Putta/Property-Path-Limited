import { useEffect, useState } from 'react'
import { LogOut, ShieldCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { env } from '../lib/env'
import { supabase, supabaseConfigured, type ConsultationRow } from '../lib/supabase'

type AuthView = 'loading' | 'signed_out' | 'signed_in' | 'unauthorized'

const adminAllowlist = new Set(env.adminEmails)
const adminAllowlistReady = adminAllowlist.size > 0

export default function Admin() {
  const [authView, setAuthView] = useState<AuthView>(() =>
    supabaseConfigured()
      ? adminAllowlistReady
        ? 'loading'
        : 'unauthorized'
      : 'signed_out',
  )
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [notice, setNotice] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [rows, setRows] = useState<ConsultationRow[]>([])
  const [loadingRows, setLoadingRows] = useState(false)
  const [setupHint, setSetupHint] = useState<string | null>(null)

  useEffect(() => {
    if (!supabaseConfigured()) return
    if (!adminAllowlistReady) return

    let active = true
    const load = async () => {
      const { data } = await supabase!.auth.getSession()
      if (!active) return
      const session = data.session
      const sessionEmail = session?.user?.email?.toLowerCase()
      if (!session) setAuthView('signed_out')
      else if (!sessionEmail || !adminAllowlist.has(sessionEmail)) setAuthView('unauthorized')
      else setAuthView('signed_in')
    }

    void load()

    const { data: sub } = supabase!.auth.onAuthStateChange((_evt, session) => {
      const sessionEmail = session?.user?.email?.toLowerCase()
      if (!session) setAuthView('signed_out')
      else if (!sessionEmail || !adminAllowlist.has(sessionEmail)) setAuthView('unauthorized')
      else setAuthView('signed_in')
    })

    return () => {
      active = false
      sub.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (authView !== 'signed_in' || !supabaseConfigured()) return
    ;(async () => {
      setLoadingRows(true)
      setError(null)
      setSetupHint(null)

      const { data, error: fetchError } = await supabase!
        .from('consultations')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(200)

      if (fetchError) {
        setError(fetchError.message)
        const lower = fetchError.message.toLowerCase()
        if (
          lower.includes('could not find the table') ||
          lower.includes('schema cache') ||
          lower.includes('relation') ||
          lower.includes('does not exist')
        ) {
          setSetupHint('Run `supabase/schema.sql` in Supabase SQL editor to create the table + policies.')
        }
        setLoadingRows(false)
        return
      }
      setRows((data ?? []) as ConsultationRow[])
      setLoadingRows(false)
    })()
  }, [authView])

  async function createTestSubmission() {
    if (!supabaseConfigured()) return
    setError(null)
    setSetupHint(null)
    setLoadingRows(true)

    const { error: insertError } = await supabase!.from('consultations').insert([
      {
        name: 'Test Consultation',
        email: 'test@property-path.in',
        phone: '+91 90000 00000',
        message: 'This is a test submission to confirm Supabase storage + admin dashboard are working.',
        source: 'admin_test',
      },
    ])

    if (insertError) {
      setError(insertError.message)
      setLoadingRows(false)
      return
    }

    const { data, error: fetchError } = await supabase!
      .from('consultations')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200)

    if (fetchError) setError(fetchError.message)
    else setRows((data ?? []) as ConsultationRow[])
    setLoadingRows(false)
  }

  async function signIn() {
    setError(null)
    setNotice(null)

    const trimmed = email.trim()
    if (!trimmed || !password) return
    if (!supabaseConfigured()) {
      setError('Supabase is not configured yet.')
      return
    }

    const { error: signInError } = await supabase!.auth.signInWithPassword({
      email: trimmed,
      password,
    })

    if (signInError) {
      setError(signInError.message)
      return
    }
    setNotice('Signed in successfully.')
  }

  async function signOut() {
    if (!supabaseConfigured()) return
    await supabase!.auth.signOut()
    setRows([])
  }

  function forceRefresh() {
    const url = new URL(window.location.href)
    url.searchParams.set('v', String(Date.now()))
    window.location.href = url.toString()
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10">
              <ShieldCheck className="h-4 w-4 text-gold-300/90" />
              Admin Dashboard
            </p>
            <SectionHeading
              className="mt-4"
              eyebrow="ADMIN"
              title="Consultation requests"
              description="Sign in to view submitted consultation requests stored in Supabase."
            />
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
              {!supabaseConfigured() ? (
                <div className="grid gap-4 text-sm leading-7 text-white/70">
                  <div>
                    Admin services are temporarily unavailable. Please try again shortly.
                  </div>
                  <Button variant="secondary" size="sm" onClick={forceRefresh}>
                    Reload latest version
                  </Button>
                </div>
              ) : authView === 'loading' ? (
                <div className="text-sm text-white/70">Loading…</div>
              ) : authView === 'signed_in' ? (
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm text-white/70">
                    Signed in. Showing the latest submissions.
                  </div>
                  <Button variant="secondary" size="sm" onClick={signOut}>
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </Button>
                </div>
              ) : authView === 'unauthorized' ? (
                <div className="text-sm leading-7 text-white/70">
                  {adminAllowlistReady
                    ? 'This email is not authorized for admin access.'
                    : 'Admin access is not configured for this site.'}
                </div>
              ) : (
                <div className="grid gap-3">
                  <label className="text-xs font-semibold tracking-[0.16em] text-white/55">
                    EMAIL
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-ink-950/30 px-4 text-sm text-white/85 placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-gold-300/30"
                  />
                  <label className="text-xs font-semibold tracking-[0.16em] text-white/55">
                    PASSWORD
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    type="password"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-ink-950/30 px-4 text-sm text-white/85 placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-gold-300/30"
                  />
                  <Button variant="primary" onClick={signIn} disabled={!email.trim() || !password}>
                    Sign in
                  </Button>
                  <p className="text-xs leading-6 text-white/45">
                    Only approved admin emails can access this dashboard.
                  </p>
                  <p className="text-xs leading-6 text-white/45">
                    If you haven’t set a password yet, create the user in Supabase → Authentication → Users.
                  </p>
                  {notice ? (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                      {notice}
                    </div>
                  ) : null}
                  {error ? (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                      {error}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.06}>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-soft">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-canvas-50">Latest submissions</p>
                {authView === 'signed_in' ? (
                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
                    <p className="text-xs text-white/55">{rows.length} shown (max 200)</p>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={createTestSubmission}
                      className="w-full sm:w-auto"
                    >
                      Create test submission
                    </Button>
                  </div>
                ) : null}
              </div>

              {authView !== 'signed_in' ? (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
                  Sign in to view submissions.
                </div>
              ) : loadingRows ? (
                <div className="mt-6 text-sm text-white/70">Loading submissions…</div>
              ) : error ? (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
                  {error}
                  {setupHint ? <div className="mt-2 text-xs text-white/55">{setupHint}</div> : null}
                </div>
              ) : rows.length === 0 ? (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
                  No submissions yet.
                </div>
              ) : (
                <div className="mt-6">
                  <div className="grid gap-3 sm:hidden">
                    {rows.map((r) => (
                      <div
                        key={r.id}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5"
                      >
                        <div className="flex flex-col gap-1">
                          <p className="text-xs text-white/55">
                            {new Date(r.created_at).toLocaleString()}
                          </p>
                          <p className="text-sm font-semibold text-white/85">{r.name}</p>
                          <p className="text-sm text-white/70 break-words">{r.email}</p>
                          <p className="text-sm text-white/70 break-words">{r.phone ?? '—'}</p>
                        </div>
                        <details className="mt-3 rounded-xl border border-white/10 bg-ink-950/30 p-4">
                          <summary className="cursor-pointer select-none text-sm font-medium text-white/80">
                            Message
                          </summary>
                          <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-white/70">
                            {r.message}
                          </p>
                        </details>
                      </div>
                    ))}
                  </div>

                  <div className="hidden sm:block overflow-hidden rounded-2xl border border-white/10">
                    <div className="max-h-[560px] overflow-x-auto overflow-y-auto">
                      <table className="min-w-[860px] w-full border-collapse text-left text-sm">
                        <thead className="sticky top-0 bg-ink-950/90 backdrop-blur">
                          <tr className="text-xs font-semibold tracking-[0.14em] text-white/55">
                            <th className="px-4 py-3 whitespace-nowrap">Date</th>
                            <th className="px-4 py-3 whitespace-nowrap">Name</th>
                            <th className="px-4 py-3 whitespace-nowrap">Email</th>
                            <th className="px-4 py-3 whitespace-nowrap">Phone</th>
                            <th className="px-4 py-3 whitespace-nowrap">Message</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((r) => (
                            <tr key={r.id} className="border-t border-white/10 bg-white/5">
                              <td className="px-4 py-3 text-white/70">
                                {new Date(r.created_at).toLocaleString()}
                              </td>
                              <td className="px-4 py-3 font-medium text-white/85">{r.name}</td>
                              <td className="px-4 py-3 text-white/70 break-words">{r.email}</td>
                              <td className="px-4 py-3 text-white/70 break-words">
                                {r.phone ?? '—'}
                              </td>
                              <td className="px-4 py-3 text-white/70">
                                <div className="max-w-[22rem] truncate">{r.message}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {authView === 'signed_in' && rows.length > 0 ? (
                <div className="mt-4 rounded-2xl border border-white/10 bg-ink-950/30 p-4 text-sm text-white/70">
                  Tip: On mobile, open a card’s “Message”. On desktop, hover/copy the Message column for full text.
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
