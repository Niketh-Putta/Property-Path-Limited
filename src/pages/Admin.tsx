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

  async function sendMagicLink() {
    setError(null)
    setNotice(null)

    const trimmed = email.trim()
    if (!trimmed) return
    if (!supabaseConfigured()) {
      setError('Supabase is not configured yet.')
      return
    }

    const redirectTo = `${window.location.origin}${window.location.pathname}#/admin`

    const { error: signInError } = await supabase!.auth.signInWithOtp({
      email: trimmed,
      options: { emailRedirectTo: redirectTo },
    })

    if (signInError) {
      setError(signInError.message)
      return
    }
    setNotice('Check your inbox for the login link.')
  }

  async function signOut() {
    if (!supabaseConfigured()) return
    await supabase!.auth.signOut()
    setRows([])
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
              eyebrow="ADMIN"
              title="Consultation requests"
              description="Sign in to view submitted consultation requests stored in Supabase."
            />
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
              {!supabaseConfigured() ? (
                <div className="text-sm leading-7 text-white/70">
                  Supabase isn’t configured. Set `VITE_SUPABASE_URL` and
                  `VITE_SUPABASE_ANON_KEY`, then redeploy.
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
                    ? 'This account is not authorized. Ask an admin to add your email to VITE_ADMIN_EMAILS and redeploy.'
                    : 'Admin allowlist is not configured. Set VITE_ADMIN_EMAILS (comma-separated) and redeploy.'}
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
                  <Button variant="primary" onClick={sendMagicLink} disabled={!email.trim()}>
                    Send magic link
                  </Button>
                  <p className="text-xs leading-6 text-white/45">
                    You’ll receive an email login link. Only emails in `VITE_ADMIN_EMAILS`
                    can access the dashboard.
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
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs text-white/55">{rows.length} shown (max 200)</p>
                    <Button variant="secondary" size="sm" onClick={createTestSubmission}>
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
                <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                  <div className="max-h-[560px] overflow-auto">
                    <table className="w-full border-collapse text-left text-sm">
                      <thead className="sticky top-0 bg-ink-950/90 backdrop-blur">
                        <tr className="text-xs font-semibold tracking-[0.14em] text-white/55">
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-3">Name</th>
                          <th className="px-4 py-3">Email</th>
                          <th className="px-4 py-3">Phone</th>
                          <th className="px-4 py-3">Message</th>
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
              )}

              {authView === 'signed_in' && rows.length > 0 ? (
                <div className="mt-4 rounded-2xl border border-white/10 bg-ink-950/30 p-4 text-sm text-white/70">
                  Tip: Hover/copy from the Message column to read the full text, or open the row in Supabase for full details.
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
