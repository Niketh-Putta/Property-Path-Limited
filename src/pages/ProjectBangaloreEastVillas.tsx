import { ArrowRight, BadgeCheck, MapPin, Trees } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import LinkButton from '../components/LinkButton'

export default function ProjectBangaloreEastVillas() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-7">
          <Reveal>
            <p className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium tracking-[0.08em] text-ink-950/70 ring-1 ring-ink-950/10 sm:text-xs sm:tracking-[0.12em]">
              SAFE INVESTMENTS. STRONG RETURNS.
            </p>
            <SectionHeading
              className="mt-4"
              eyebrow="FEATURED PROJECT · ARANYA"
              title="Aranya — 9-Acre Premium Villa Community, Bangalore East"
              description="A boutique villa development designed for modern families seeking space, greenery, and long-term appreciation."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-8 grid gap-3 rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:grid-cols-3 sm:gap-4 sm:rounded-3xl sm:p-6">
              <div className="min-w-0 rounded-2xl border border-ink-950/10 bg-canvas-100 p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-ink-950/55">CONFIG</p>
                <p className="mt-2 text-sm font-semibold text-ink-950">3 BHK Duplex Villas</p>
                <p className="mt-1 text-sm text-ink-950/70">1500 sqft built-up</p>
              </div>
              <div className="min-w-0 rounded-2xl border border-ink-950/10 bg-canvas-100 p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-ink-950/55">PLOT</p>
                <p className="mt-2 text-sm font-semibold text-ink-950">1200 sqft</p>
                <p className="mt-1 text-sm text-ink-950/70">Optimized planning</p>
              </div>
              <div className="min-w-0 rounded-2xl border border-ink-950/10 bg-canvas-100 p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-ink-950/55">LOCATION</p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-ink-950">
                  <MapPin className="h-4 w-4 text-gold-300/90" />
                  Bangalore East
                </p>
                <p className="mt-1 text-sm text-ink-950/70">Forest-side setting</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-6 rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:rounded-3xl sm:p-6">
              <p className="text-sm font-semibold text-ink-950">Project highlights</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  'Forest-side location',
                  'Clubhouse with pool',
                  'Indoor & outdoor sports',
                  'Parks & open spaces',
                  'Underground utilities',
                  'Cement roads',
                  '1 KM from STRR',
                  '15 KM to Whitefield',
                  '10 KM to Malur',
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-ink-950/10 bg-canvas-100 p-4 text-sm text-ink-950/75"
                  >
                    <span className="flex items-start gap-2">
                      <Trees className="mt-0.5 h-4 w-4 shrink-0 text-gold-300/90" />
                      <span className="min-w-0 leading-6">{t}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="min-w-0 lg:col-span-5">
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-ink-950/10 bg-gradient-to-br from-white/80 to-canvas-100 p-4 shadow-soft sm:rounded-3xl sm:p-6">
              <p className="text-sm font-semibold text-ink-950">Why this stands out</p>
              <ul className="mt-4 grid gap-2 text-sm text-ink-950/70">
                {[
                  'Zero land acquisition cost',
                  'High-demand micro-market',
                  'Strong rental & resale potential',
                  'Developer with proven track record',
                  'Post-sale support & dispute assistance guaranteed by PropertyPath LTD',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300/80" />
                    <span className="leading-7">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 min-w-0 rounded-2xl border border-ink-950/10 bg-canvas-100 p-4 sm:p-5">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-ink-950">
                  <BadgeCheck className="h-4 w-4 text-gold-300/90" />
                  PropertyPath Responsibility
                </div>
                <p className="mt-2 text-sm leading-7 text-ink-950/70">
                  We take responsibility for future queries and dispute-related clarifications,
                  coordinating directly with developers for transparent, documented resolution.
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                <LinkButton
                  href="mailto:info@property-path.in?subject=Site%20Visit%20Request%20-%20Aranya%20Bangalore%20East"
                  variant="primary"
                  className="w-full"
                >
                  Book a Consultation <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton to="/verify-agent" variant="ghost" className="w-full">
                  Verify an Agent
                </LinkButton>
                <LinkButton to="/" variant="ghost" className="w-full">
                  Back to Home
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
