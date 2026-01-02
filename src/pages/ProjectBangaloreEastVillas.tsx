import { ArrowRight, BadgeCheck, MapPin, Trees } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import LinkButton from '../components/LinkButton'

export default function ProjectBangaloreEastVillas() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              eyebrow="FEATURED PROJECT"
              title="5-Acre Premium Villa Community — Bangalore East"
              description="A boutique villa development designed for modern families seeking space, greenery, and long-term appreciation."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-ink-950/30 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-white/55">CONFIG</p>
                <p className="mt-2 text-sm font-semibold text-canvas-50">3 BHK Duplex Villas</p>
                <p className="mt-1 text-sm text-white/70">1500 sqft built-up</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-950/30 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-white/55">PLOT</p>
                <p className="mt-2 text-sm font-semibold text-canvas-50">1200 sqft</p>
                <p className="mt-1 text-sm text-white/70">Optimized planning</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-950/30 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-white/55">LOCATION</p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-canvas-50">
                  <MapPin className="h-4 w-4 text-gold-300/90" />
                  Bangalore East
                </p>
                <p className="mt-1 text-sm text-white/70">Forest-side setting</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
              <p className="text-sm font-semibold text-canvas-50">Project highlights</p>
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
                    className="rounded-2xl border border-white/10 bg-ink-950/30 p-4 text-sm text-white/75"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Trees className="h-4 w-4 text-gold-300/90" />
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-soft">
              <p className="text-sm font-semibold text-canvas-50">Why this stands out</p>
              <ul className="mt-4 grid gap-2 text-sm text-white/70">
                {[
                  'Zero land acquisition cost',
                  'High-demand micro-market',
                  'Strong rental & resale potential',
                  'Developer with proven track record',
                  'Post-sale support & dispute assistance guaranteed by PropertyPath LTD',
                ].map((t) => (
                  <li key={t} className="inline-flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300/80" />
                    <span className="leading-7">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-white/10 bg-ink-950/30 p-5">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-canvas-50">
                  <BadgeCheck className="h-4 w-4 text-gold-300/90" />
                  PropertyPath Responsibility
                </div>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  We take responsibility for future queries and dispute-related clarifications,
                  coordinating directly with developers for transparent, documented resolution.
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                <LinkButton
                  href="mailto:info@property-path.in?subject=Site%20Visit%20Request%20-%20Bangalore%20East%20Villas"
                  variant="primary"
                >
                  Book a Consultation <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton to="/verify-agent" variant="secondary">
                  Verify an Agent
                </LinkButton>
                <LinkButton to="/" variant="ghost">
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

