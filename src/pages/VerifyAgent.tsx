import { useMemo, useState } from 'react'
import { BadgeCheck, Search, ShieldCheck, UserCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import LinkButton from '../components/LinkButton'
import { cn } from '../lib/cn'

type Agent = {
  agentId: string
  name: string
  phone: string
  status: 'Verified'
}

const sampleAgents: Agent[] = [
  {
    agentId: 'PP-AG-0001',
    name: 'Sample Verified Agent',
    phone: '+91 90000 00000',
    status: 'Verified',
  },
]

export default function VerifyAgent() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return sampleAgents.filter((a) => {
      return (
        a.agentId.toLowerCase().includes(q) ||
        a.name.toLowerCase().includes(q) ||
        a.phone.toLowerCase().includes(q)
      )
    })
  }, [query])

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="AGENT VERIFICATION"
              title="Verify an agent before you commit"
              description="Every marketing partner listed on PropertyPath LTD is identity-verified, trained in compliance, assigned a unique Agent ID, and bound by our transparency code."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
              <p className="text-sm font-semibold text-canvas-50">Verify using</p>
              <ul className="mt-4 grid gap-2 text-sm text-white/70">
                <li className="inline-flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-gold-300/90" />
                  Name
                </li>
                <li className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-gold-300/90" />
                  Phone number
                </li>
                <li className="inline-flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-gold-300/90" />
                  Agent ID
                </li>
              </ul>
              <p className="mt-4 text-sm leading-7 text-white/65">
                If you don’t find a match, share details with our team — we’ll confirm
                registration status and guide you to verified partners.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.06}>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-soft">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-canvas-50">Search</p>
                <LinkButton to="/" variant="ghost" size="sm">
                  Back to Home
                </LinkButton>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-950/30 px-4 py-3">
                <Search className="h-4 w-4 text-white/45" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, phone, or Agent ID (e.g., PP-AG-0001)"
                  className="w-full bg-transparent text-sm text-white/85 placeholder:text-white/35 focus:outline-none"
                />
              </div>

              <div className="mt-6 grid gap-3">
                {query.trim().length === 0 ? (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
                    Enter a name, phone number, or Agent ID to verify.
                  </div>
                ) : results.length === 0 ? (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-semibold text-canvas-50">
                      No matching agent found
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/70">
                      Share the agent details with our team and we’ll confirm registration
                      status.
                    </p>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      <LinkButton
                        href="mailto:info@property-path.in?subject=Agent%20Verification%20Request"
                        variant="primary"
                      >
                        Email Verification Request
                      </LinkButton>
                      <LinkButton
                        href="https://wa.me/?text=Hi%20PropertyPath%2C%20please%20help%20me%20verify%20an%20agent."
                        variant="secondary"
                        external
                      >
                        WhatsApp Us
                      </LinkButton>
                    </div>
                  </div>
                ) : (
                  results.map((agent) => (
                    <div
                      key={agent.agentId}
                      className={cn(
                        'rounded-2xl border border-white/10 bg-white/5 p-5',
                        'transition hover:bg-white/8',
                      )}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-canvas-50">{agent.name}</p>
                          <p className="mt-1 text-sm text-white/70">
                            Agent ID:{' '}
                            <span className="font-medium text-white/85">{agent.agentId}</span>
                          </p>
                          <p className="mt-1 text-sm text-white/70">
                            Phone:{' '}
                            <span className="font-medium text-white/85">{agent.phone}</span>
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-gold-300/15 px-3 py-1 text-xs font-semibold text-gold-100 ring-1 ring-gold-300/20">
                          <BadgeCheck className="h-4 w-4" />
                          {agent.status}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-white/65">
                        Verified partners are bound by our transparency code and compliance
                        standards. PropertyPath LTD remains accountable for dispute resolution
                        and query clarifications.
                      </p>
                    </div>
                  ))
                )}
              </div>

              <p className="mt-6 text-xs leading-6 text-white/45">
                Note: This page currently includes a sample verified agent entry. Replace
                sample data with your registered partner database when ready.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

