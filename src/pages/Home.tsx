import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Download,
  Gavel,
  Handshake,
  Headset,
  ShieldCheck,
} from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import LinkButton from '../components/LinkButton'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { cn } from '../lib/cn'
import { supabase, supabaseConfigured } from '../lib/supabase'
import { quickFade } from '../lib/motion'

const differentiators = [
  { icon: BadgeCheck, title: '100% verified listings', desc: 'No shortcuts — every listing is checked for credibility and compliance.' },
  { icon: Building2, title: 'Direct developer access', desc: 'Eliminate middle-layer misinformation and get answers from the source.' },
  { icon: ShieldCheck, title: 'Zero misinformation', desc: 'Transparent, documented updates that protect buyers and investors.' },
  { icon: Handshake, title: 'Registered marketing partners', desc: 'Identity-verified and bound by our transparency code.' },
  { icon: Gavel, title: 'Legal & compliance support', desc: 'Guidance across RERA, approvals, and property verification.' },
  { icon: Headset, title: 'Post-sale dispute assistance', desc: 'We remain accountable for future queries and dispute clarifications.' },
]

const services = [
  {
    title: 'Digital Marketing for Developers',
    points: [
      'Lead generation campaigns',
      'Google & Meta ads',
      'SEO & content marketing',
      'Landing page creation',
      'CRM integration',
      'Performance analytics',
    ],
  },
  {
    title: 'Verified Property Listings',
    points: [
      'Title verification',
      'Developer background check',
      'RERA validation',
      'On-ground project audit',
    ],
  },
  {
    title: 'Developer–Customer Direct Connect',
    points: [
      'Pricing clarity',
      'Approvals & documentation',
      'Construction updates',
      'Customization options',
    ],
  },
  {
    title: 'Legal & Compliance Services',
    points: [
      'Property legal verification',
      'Title deed review',
      'Encumbrance certificate checks',
      'RERA documentation',
      'Property tax payments',
      'Khata transfer assistance',
      'Approval guidance (BBMP, BDA, Panchayat)',
    ],
  },
  {
    title: 'Branding & Creative Services',
    points: [
      'Brochures',
      '3D renders',
      'Walkthrough scripts',
      'Social media creatives',
      'Project identity design',
    ],
  },
  {
    title: 'Site Visit & Sales Support',
    points: [
      'Scheduled site visits',
      'Virtual tours',
      'Buyer qualification',
      'Negotiation support',
    ],
  },
  {
    title: 'Post-Sale Support & Dispute Assistance',
    points: [
      'We take responsibility for future queries and dispute-related clarifications.',
      'Reliable partnership throughout your property journey.',
    ],
  },
]

export default function Home() {
  const reduceMotion = useReducedMotion()
  const [projectTab, setProjectTab] = useState<'ongoing' | 'completed'>('ongoing')

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:pt-20">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-7">
              <Reveal>
                <h1 className="mt-2 min-w-0 sm:mt-5">
                  <span className="block break-words font-serif text-[clamp(1.75rem,8vw,3.75rem)] font-semibold leading-[1.1] tracking-[0.02em] text-ink-950 sm:tracking-[0.04em]">
                    PROPERTY PATH
                  </span>
                  <span className="mt-3 block max-w-xl text-sm font-medium leading-relaxed tracking-[0.08em] text-ink-950/75 uppercase sm:text-base sm:tracking-[0.14em] sm:leading-7">
                    Bangalore’s Most Trusted Real Estate Digital Marketing Partner
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-950/70 text-pretty sm:text-base sm:leading-8">
                  PropertyPath LTD is a next-generation real estate marketing and advisory
                  company based in Bangalore. We combine 10+ years of development expertise
                  with cutting-edge digital marketing to deliver verified, high-growth
                  real estate opportunities to homebuyers and investors.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <LinkButton
                    to="/projects/bangalore-east-villas"
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    Explore Projects <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                  <LinkButton to="/verify-agent" variant="secondary" className="w-full sm:w-auto">
                    Verify an Agent <ShieldCheck className="h-4 w-4" />
                  </LinkButton>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-8 grid gap-5 rounded-2xl border border-gold-300/40 bg-white/80 p-4 shadow-soft sm:mt-10 sm:gap-6 sm:p-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)]">
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-gold-500 sm:text-xs sm:tracking-[0.16em]">
                      OUR COMMITMENT
                    </p>
                    <p className="mt-2 text-sm leading-7 text-ink-950/75 text-pretty">
                      We take complete ownership of every property we represent — including
                      all future queries and dispute-related clarifications.
                    </p>
                  </div>
                  <div className="min-w-0 border-t border-gold-300/25 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-gold-500 sm:text-xs sm:tracking-[0.16em]">
                      WHAT MAKES US DIFFERENT
                    </p>
                    <ul className="mt-3 grid gap-2.5 text-sm text-ink-950/75 sm:grid-cols-2">
                      <li className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-300/90" />
                        <span className="min-w-0 leading-6">100% verified listings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-300/90" />
                        <span className="min-w-0 leading-6">Direct developer access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-300/90" />
                        <span className="min-w-0 leading-6">Zero misinformation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Handshake className="mt-0.5 h-4 w-4 shrink-0 text-gold-300/90" />
                        <span className="min-w-0 leading-6">Registered marketing partners</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Gavel className="mt-0.5 h-4 w-4 shrink-0 text-gold-300/90" />
                        <span className="min-w-0 leading-6">Legal & compliance support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Headset className="mt-0.5 h-4 w-4 shrink-0 text-gold-300/90" />
                        <span className="min-w-0 leading-6">Post-sale assistance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <Reveal delay={0.1}>
                <motion.div
                  className="relative overflow-hidden rounded-2xl border border-ink-950/10 bg-gradient-to-br from-white/80 to-canvas-100 p-4 shadow-soft sm:rounded-3xl sm:p-6"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, -6, 0],
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }
                  }
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-gold-300/14 blur-2xl"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-ink-950/[0.05] blur-2xl"
                  />

                  <p className="text-sm font-semibold text-ink-950">
                    Trust through transparency
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink-950/70 text-pretty">
                    A premium operating standard for buyers, investors, and developers:
                    verified data, documented communication, and accountability that lasts.
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { k: '10+', v: 'Years expertise' },
                      { k: '100%', v: 'Verified focus' },
                      { k: '0', v: 'Misinformation' },
                    ].map((s) => (
                      <div
                        key={s.k}
                        className="min-w-0 rounded-xl border border-ink-950/10 bg-canvas-100 p-2.5 text-center sm:rounded-2xl sm:p-3"
                      >
                        <p className="text-base font-semibold tracking-tight text-ink-950 sm:text-lg">
                          {s.k}
                        </p>
                        <p className="mt-0.5 text-[10px] leading-snug text-ink-950/60 sm:text-xs">
                          {s.v}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3">
                    {differentiators.slice(0, 3).map((item) => {
                      const Icon = item.icon
                      return (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-ink-950/10 bg-canvas-100 p-3.5 sm:p-4"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink-950/[0.05] ring-1 ring-ink-950/10">
                              <Icon className="h-4 w-4 text-gold-300/90" />
                            </span>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-ink-950">
                                {item.title}
                              </p>
                              <p className="mt-1 text-sm leading-6 text-ink-950/65 text-pretty sm:leading-7">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-6">
                    <LinkButton to="/verify-agent" variant="ghost" className="w-full justify-center">
                      Verify an agent now <ArrowRight className="h-4 w-4" />
                    </LinkButton>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="ABOUT US"
                  title="Building Trust in Real Estate Through Transparency & Accountability"
                  description="PropertyPath LTD was founded to solve a critical problem in the Indian real estate market: misinformation, false commitments, and lack of accountability by unregulated marketing agents."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <div className="rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:rounded-3xl sm:p-6">
                  <p className="text-sm leading-7 text-ink-950/70">
                    With over a decade of experience in developing villas and residential
                    layouts across Bangalore and Hyderabad, we understand the importance
                    of accuracy, compliance, and long-term customer support.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: 'Our Promise',
                        body: 'We take responsibility for all future queries and dispute-related concerns by coordinating directly with developers and ensuring transparent, documented resolution.',
                      },
                      {
                        title: 'Our Mission',
                        body: 'To empower customers with verified information, secure investments, and direct access to developers.',
                      },
                      {
                        title: 'Our Vision',
                        body: 'To become India’s most trusted real estate marketing ecosystem — where every customer receives true value, not sales-driven promises.',
                      },
                      {
                        title: 'Our Values',
                        body: 'Integrity, Transparency, Accountability, Customer First, and Compliance — long-term relationships over commissions.',
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-ink-950/10 bg-canvas-100 p-5"
                      >
                        <p className="text-sm font-semibold text-ink-950">{item.title}</p>
                        <p className="mt-2 text-sm leading-7 text-ink-950/70">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="SERVICES"
              title="End-to-End Real Estate Marketing Solutions"
              description="From verified listings and direct developer connect to compliance support and performance marketing — delivered with accountability."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((service, idx) => (
              <Reveal key={service.title} delay={0.04 * idx}>
                <div className="h-full rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:rounded-3xl sm:p-6">
                  <p className="text-sm font-semibold text-ink-950">{service.title}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-ink-950/70">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300/80" />
                        <span className="leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="PROJECTS"
              title="Ongoing developments and completed communities"
              description="Explore featured and ongoing opportunities, plus completed projects with verified PropertyPath support for resale enquiries."
            />
          </Reveal>

          <div
            className="mt-8 inline-flex w-full max-w-md rounded-2xl border border-ink-950/10 bg-white/80 p-1 shadow-soft sm:w-auto"
            role="tablist"
            aria-label="Project categories"
          >
            {(
              [
                { id: 'ongoing' as const, label: 'Ongoing' },
                { id: 'completed' as const, label: 'Completed' },
              ] as const
            ).map((tab) => {
              const active = projectTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={cn(
                    'flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition sm:flex-none sm:px-5',
                    active
                      ? 'bg-ink-950 text-gold-300 shadow-glow ring-1 ring-gold-300/80'
                      : 'text-ink-950/70 hover:bg-ink-950/[0.04] hover:text-ink-950',
                  )}
                  onClick={() => setProjectTab(tab.id)}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {projectTab === 'ongoing' ? (
              <motion.div
                key="ongoing-projects"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={reduceMotion ? { duration: 0.1 } : quickFade}
                className="mt-10 grid gap-10 lg:grid-cols-12"
                role="tabpanel"
              >
                <div className="lg:col-span-5">
                  <SectionHeading
                    title="Aranya — Featured 9-Acre Premium Villa Community, Bangalore East"
                    description="Our flagship boutique villa development for families seeking space, greenery, and long-term appreciation. Explore details or book a site visit."
                  />
                </div>
                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:rounded-3xl sm:p-6">
                    <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-gold-300/12 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-ink-950/[0.04] blur-3xl" />

                    <div className="mb-6 rounded-2xl border border-gold-300/40 bg-gradient-to-br from-gold-50/80 to-white/90 p-4 sm:p-5">
                      <p className="text-[11px] font-semibold tracking-[0.14em] text-gold-500 sm:text-xs sm:tracking-[0.16em]">
                        ONGOING PROJECT
                      </p>
                      <p className="mt-2 text-sm font-semibold text-ink-950">Vanam</p>
                      <p className="mt-1 text-sm leading-7 text-ink-950/70">
                        2.5 Acre premium plotted development — Initial phase of 11.5 acre
                        Integrated Township.
                      </p>
                      <div className="mt-4">
                        <LinkButton
                          href="/brochures/vanam-premium-brochure.pdf"
                          download="Vanam_Premium_Brochure_Property_Path.pdf"
                          variant="primary"
                          className="w-full sm:w-auto"
                        >
                          Download Brochure <Download className="h-4 w-4" />
                        </LinkButton>
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-sm font-semibold text-ink-950">Project highlights</p>
                        <ul className="mt-4 grid gap-2 text-sm text-ink-950/70">
                          {[
                            '3 BHK Duplex Villas',
                            '1500 sqft built-up area',
                            '1200 sqft plot size',
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
                            <li key={t} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300/80" />
                              <span className="leading-7">{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink-950">
                          Why this project stands out
                        </p>
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
                      </div>
                    </div>

                    <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                      <LinkButton
                        to="/projects/bangalore-east-villas"
                        variant="primary"
                        className="w-full sm:w-auto"
                      >
                        View Full Project Details <ArrowRight className="h-4 w-4" />
                      </LinkButton>
                      <LinkButton
                        href="mailto:info@property-path.in?subject=Interested%20in%20Aranya%20Bangalore%20East"
                        variant="ghost"
                        className="w-full sm:w-auto"
                      >
                        Book a Site Visit
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="completed-projects"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={reduceMotion ? { duration: 0.1 } : quickFade}
                className="mt-10 grid gap-10 lg:grid-cols-12"
                role="tabpanel"
              >
                <div className="lg:col-span-5">
                  <SectionHeading
                    title="SKH Echium — Completed 24-Acre Residential Villa Plots"
                    description="A RERA- and MPA-approved gated community near Whitefield. Fully sold out — PropertyPath supports verified resale enquiries."
                  />
                </div>
                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:rounded-3xl sm:p-6">
                    <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-gold-300/12 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-ink-950/[0.04] blur-3xl" />

                    <div className="mb-6 rounded-2xl border border-gold-300/40 bg-gradient-to-br from-gold-50/80 to-white/90 p-4 sm:p-5">
                      <p className="text-[11px] font-semibold tracking-[0.14em] text-gold-500 sm:text-xs sm:tracking-[0.16em]">
                        COMPLETED PROJECT
                      </p>
                      <p className="mt-2 text-sm font-semibold text-ink-950">SKH Echium</p>
                      <p className="mt-1 text-sm leading-7 text-ink-950/70">
                        24-acre residential villa plots near Whitefield. Quoted price ₹3,200 per
                        sqft. All sold out — for resale, contact the PropertyPath team.
                      </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-sm font-semibold text-ink-950">Summary</p>
                        <p className="mt-4 text-sm leading-7 text-ink-950/70">
                          Spacious villa plots in a gated layout with easy Whitefield / Soukya
                          Road access, developed by SKH Estates and Developers LLP, and approved
                          by MPA and RERA.
                        </p>
                        <ul className="mt-4 grid gap-2 text-sm text-ink-950/70">
                          {[
                            'RERA & MPA approved',
                            'Gated community with clear title',
                            '40’ and 30’ BT roads',
                            'Underground drainage & water to each plot',
                            '24/7 security · parks · plantation',
                          ].map((t) => (
                            <li key={t} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300/80" />
                              <span className="leading-7">{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink-950">Resale support</p>
                        <p className="mt-4 text-sm leading-7 text-ink-950/70">
                          Inventory is fully sold out. For any resale interest, reach PropertyPath
                          on our contact numbers for verified coordination.
                        </p>
                        <ul className="mt-4 grid gap-2 text-sm text-ink-950/70">
                          <li className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300/80" />
                            <a className="leading-7 hover:text-ink-950" href="tel:+916364467941">
                              +91 6364467941
                            </a>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300/80" />
                            <a className="leading-7 hover:text-ink-950" href="tel:+916364467942">
                              +91 63644 67942
                            </a>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300/80" />
                            <span className="leading-7">Quoted rate: ₹3,200 / sqft</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                      <LinkButton
                        to="/projects/skh-echium"
                        variant="primary"
                        className="w-full sm:w-auto"
                      >
                        View Full Project Details <ArrowRight className="h-4 w-4" />
                      </LinkButton>
                      <LinkButton
                        href="tel:+916364467941"
                        variant="secondary"
                        className="w-full sm:w-auto"
                      >
                        Call for Resale
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section id="partners" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="MARKETING PARTNERS"
              title="A Verified Network of Professional Real Estate Advisors"
              description="Every marketing partner listed on PropertyPath LTD is identity-verified, trained in compliance, registered on our website, assigned a unique Agent ID, and bound by our transparency code."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                icon: BadgeCheck,
                title: 'Agent verification system',
                body: 'Buyers can verify any agent by name, phone number, or Agent ID.',
              },
              {
                icon: ShieldCheck,
                title: 'Transparency code',
                body: 'Partners are held to documented commitments and compliance-first practices.',
              },
              {
                icon: Headset,
                title: 'Accountability promise',
                body: 'If a dispute or query arises, PropertyPath LTD takes responsibility for resolution and coordinates transparently with the developer.',
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={0.04 * idx}>
                  <div className="h-full rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:rounded-3xl sm:p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-950/[0.05] ring-1 ring-ink-950/10">
                      <Icon className="h-5 w-5 text-gold-300/90" />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-ink-950">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-ink-950/70">{item.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-8">
              <LinkButton to="/verify-agent" variant="primary" className="w-full sm:w-auto">
                Verify an Agent <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="CONTACT US"
                  title="Let’s Build Your Property Journey Together"
                  description="We remain accountable for all future queries and dispute-related clarifications for every property we represent."
                />
              </Reveal>
              <Reveal delay={0.06}>
                <div className="mt-6 rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:rounded-3xl sm:p-6">
                  <p className="text-sm font-semibold text-ink-950">Office</p>
                  <p className="mt-2 break-words text-sm leading-7 text-ink-950/70">
                    PropertyPath LTD D.No: F1 &amp; F2, Sarovi #72, 1st Floor Sunshine
                    Paradise Layout Kurudusonnenahalli, Virgonagar Post Bangalore – 560049
                  </p>
                  <p className="mt-4 text-sm text-ink-950/70">
                    <span className="font-semibold text-ink-950">Phone</span>{' '}
                    <span className="inline-flex flex-col gap-1 sm:inline">
                      <a className="text-ink-950/80 hover:text-ink-950" href="tel:+916364467941">
                        +91 6364467941
                      </a>
                      <span className="hidden text-ink-950/35 sm:inline"> · </span>
                      <a className="text-ink-950/80 hover:text-ink-950" href="tel:+916364467942">
                        +91 63644 67942
                      </a>
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-ink-950/70">
                    <span className="font-semibold text-ink-950">Email</span>{' '}
                    <a className="text-ink-950/80 hover:text-ink-950" href="mailto:info@property-path.in">
                      info@property-path.in
                    </a>
                  </p>
                  <p className="mt-2 text-sm text-ink-950/70">
                    <span className="font-semibold text-ink-950">Website</span>{' '}
                    <a
                      className="text-ink-950/80 hover:text-ink-950"
                      href="https://www.property-path.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.property-path.in
                    </a>
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <div className="rounded-2xl border border-ink-950/10 bg-gradient-to-br from-white/80 to-canvas-100 p-4 shadow-soft sm:rounded-3xl sm:p-6">
                  <p className="text-sm font-semibold text-ink-950">Book a consultation</p>
                  <p className="mt-2 text-sm leading-7 text-ink-950/70">
                    Share your requirements and we’ll coordinate next steps with the right
                    team and verified developers.
                  </p>

                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)
  const [setupHint, setSetupHint] = useState<string | null>(null)
  const reduceMotion = useReducedMotion()
  const configured = supabaseConfigured()

  return (
    <form
      className="mt-6 grid gap-3"
      onSubmit={async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        setStatus('submitting')
        setError(null)
        setSetupHint(null)

        if (!configured) {
          setStatus('error')
          setError('Consultation submissions are not configured yet.')
          setSetupHint(
            'Setup required: configure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`, then redeploy.',
          )
          return
        }

        const formData = new FormData(form)
        const name = String(formData.get('name') ?? '').trim()
        const email = String(formData.get('email') ?? '').trim()
        const phone = String(formData.get('phone') ?? '').trim()
        const message = String(formData.get('message') ?? '').trim()

        try {
          const { error: insertError } = await supabase!
            .from('consultations')
            .insert([
              {
                name,
                email,
                phone: phone.length ? phone : null,
                message,
                source: 'web',
              },
            ])

          if (insertError) throw insertError

          setStatus('success')
          form.reset()
        } catch (err) {
          setStatus('error')
          const message = err instanceof Error ? err.message : 'Failed to submit request'
          setError(message)
          const lower = message.toLowerCase()
          if (
            lower.includes('could not find the table') ||
            lower.includes('schema cache') ||
            lower.includes('relation') ||
            lower.includes('does not exist')
          ) {
            setSetupHint('Setup required: run `supabase/schema.sql` in Supabase SQL editor.')
          }
        }
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Your name" required />
        <Field label="Email" name="email" placeholder="you@company.com" type="email" required />
      </div>
      <Field label="Phone (optional)" name="phone" placeholder="+91" />
      <div>
        <label className="text-xs font-semibold tracking-[0.16em] text-ink-950/55">
          MESSAGE
        </label>
        <textarea
          name="message"
          required
          placeholder="Tell us what you’re looking for (location, budget, timeline)…"
          rows={5}
          className={cn(
            'mt-2 w-full resize-none rounded-2xl border border-ink-950/10 bg-white/90 px-4 py-3 text-sm text-ink-950/85 placeholder:text-ink-950/35',
            'focus:outline-none focus:ring-2 focus:ring-gold-300/30',
          )}
        />
      </div>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'submitting' || !configured}
          className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-ink-950 px-4 sm:h-12 sm:w-auto sm:px-5 text-sm font-medium tracking-wide text-gold-300 shadow-glow ring-1 ring-gold-300/80 transition hover:bg-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/50"
        >
          {status === 'submitting' ? 'Submitting…' : 'Book a Consultation'}{' '}
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
        <a
          className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-transparent px-4 sm:h-12 sm:w-auto sm:px-5 text-sm font-medium tracking-wide text-ink-950 ring-1 ring-gold-300/70 transition hover:bg-gold-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/40"
          href="https://wa.me/916364467941?text=Hi%20PropertyPath%2C%20I%27d%20like%20to%20book%20a%20consultation."
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Us <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
      <AnimatePresence mode="popLayout" initial={false}>
        {status === 'success' ? (
          <motion.div
            key="contact-success"
            initial={reduceMotion ? false : { opacity: 0, y: 10, filter: 'blur(6px)' }}
            animate={
              reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }
            }
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, filter: 'blur(6px)' }}
            transition={reduceMotion ? { duration: 0.1 } : quickFade}
            className="rounded-2xl border border-ink-950/10 bg-white/80 p-4 text-sm text-ink-950/75"
          >
            Received. Our team will get back to you shortly.
          </motion.div>
        ) : status === 'error' ? (
          <motion.div
            key="contact-error"
            initial={reduceMotion ? false : { opacity: 0, y: 10, filter: 'blur(6px)' }}
            animate={
              reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }
            }
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, filter: 'blur(6px)' }}
            transition={reduceMotion ? { duration: 0.1 } : quickFade}
            className="rounded-2xl border border-ink-950/10 bg-white/80 p-4 text-sm text-ink-950/75"
          >
            Couldn’t submit right now.{' '}
            {error ? <span className="text-ink-950/60">{error}</span> : null}
            {setupHint ? <div className="mt-2 text-xs text-ink-950/55">{setupHint}</div> : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
      <p className="text-xs leading-6 text-ink-950/45">
        {configured
          ? 'By submitting, your request is stored securely for our team to review.'
          : 'Consultation submissions are temporarily unavailable.'}
      </p>
    </form>
  )
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = 'text',
}: {
  label: string
  name: string
  placeholder: string
  required?: boolean
  type?: string
}) {
  return (
    <div>
      <label className="text-xs font-semibold tracking-[0.16em] text-ink-950/55" htmlFor={name}>
        {label.toUpperCase()}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={cn(
          'mt-2 h-12 w-full rounded-2xl border border-ink-950/10 bg-white/90 px-4 text-sm text-ink-950/85 placeholder:text-ink-950/35',
          'focus:outline-none focus:ring-2 focus:ring-gold-300/30',
        )}
      />
    </div>
  )
}
