import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
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

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10">
                  <ClipboardCheck className="h-4 w-4 text-gold-300/90" />
                  SAFE INVESTMENTS. STRONG RETURNS.
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-canvas-50 sm:text-5xl">
                  <span className="bg-gradient-to-r from-gold-100 via-gold-300 to-gold-700 bg-clip-text text-transparent">
                    Property Path LTD
                  </span>
                  <span className="block text-white/80">
                    Bangalore’s Most Trusted Real Estate Digital Marketing Partner
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                  PropertyPath LTD is a next-generation real estate marketing and advisory
                  company based in Bangalore. We combine 10+ years of development expertise
                  with cutting-edge digital marketing to deliver verified, high-growth
                  real estate opportunities to homebuyers and investors.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <LinkButton to="/projects/bangalore-east-villas" variant="primary">
                    Explore Projects <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                  <LinkButton to="/verify-agent" variant="secondary">
                    Verify an Agent <ShieldCheck className="h-4 w-4" />
                  </LinkButton>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-10 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-white/55">
                      OUR COMMITMENT
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/75">
                      We take complete ownership of every property we represent — including
                      all future queries and dispute-related clarifications.
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-xs font-semibold tracking-[0.16em] text-white/55">
                      WHAT MAKES US DIFFERENT
                    </p>
                    <ul className="mt-3 grid gap-2 text-sm text-white/75 sm:grid-cols-2">
                      <li className="inline-flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-gold-300/90" />
                        100% verified listings
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-gold-300/90" />
                        Direct developer access
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-gold-300/90" />
                        Zero misinformation
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <Handshake className="h-4 w-4 text-gold-300/90" />
                        Registered marketing partners
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <Gavel className="h-4 w-4 text-gold-300/90" />
                        Legal & compliance support
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <Headset className="h-4 w-4 text-gold-300/90" />
                        Post-sale assistance
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <motion.div
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-soft"
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
                    className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-white/8 blur-2xl"
                  />

                  <p className="text-sm font-semibold text-canvas-50">
                    Trust through transparency
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    A premium operating standard for buyers, investors, and developers:
                    verified data, documented communication, and accountability that lasts.
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { k: '10+', v: 'Years expertise' },
                      { k: '100%', v: 'Verified focus' },
                      { k: '0', v: 'Misinformation' },
                    ].map((s) => (
                      <div
                        key={s.k}
                        className="rounded-2xl border border-white/10 bg-ink-950/30 p-3 text-center"
                      >
                        <p className="text-lg font-semibold tracking-tight text-canvas-50">
                          {s.k}
                        </p>
                        <p className="mt-0.5 text-xs text-white/60">{s.v}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3">
                    {differentiators.slice(0, 3).map((item) => {
                      const Icon = item.icon
                      return (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-white/10 bg-ink-950/30 p-4"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/8 ring-1 ring-white/10">
                              <Icon className="h-4 w-4 text-gold-300/90" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-canvas-50">
                                {item.title}
                              </p>
                              <p className="mt-1 text-sm leading-7 text-white/65">
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
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
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
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                  <p className="text-sm leading-7 text-white/72">
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
                        className="rounded-2xl border border-white/10 bg-ink-950/30 p-5"
                      >
                        <p className="text-sm font-semibold text-canvas-50">{item.title}</p>
                        <p className="mt-2 text-sm leading-7 text-white/70">{item.body}</p>
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
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
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
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                  <p className="text-sm font-semibold text-canvas-50">{service.title}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-white/70">
                    {service.points.map((point) => (
                      <li key={point} className="inline-flex gap-2">
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
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="PROJECTS"
                  title="Featured Project: 5-Acre Premium Villa Community — Bangalore East"
                  description="A boutique villa development designed for modern families seeking space, greenery, and long-term appreciation."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                  <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-gold-300/12 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/6 blur-3xl" />

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-canvas-50">Project highlights</p>
                      <ul className="mt-4 grid gap-2 text-sm text-white/70">
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
                          <li key={t} className="inline-flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300/80" />
                            <span className="leading-7">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-canvas-50">
                        Why this project stands out
                      </p>
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
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <LinkButton to="/projects/bangalore-east-villas" variant="primary">
                      View Full Project Details <ArrowRight className="h-4 w-4" />
                    </LinkButton>
                    <LinkButton
                      href="mailto:info@property-path.in?subject=Interested%20in%20Bangalore%20East%20Villa%20Community"
                      variant="secondary"
                    >
                      Book a Site Visit
                    </LinkButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
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
                  <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/10">
                      <Icon className="h-5 w-5 text-gold-300/90" />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-canvas-50">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-white/70">{item.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-8">
              <LinkButton to="/verify-agent" variant="primary">
                Verify an Agent <ArrowRight className="h-4 w-4" />
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
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
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                  <p className="text-sm font-semibold text-canvas-50">Office</p>
                  <p className="mt-2 break-words text-sm leading-7 text-white/70">
                    PropertyPath LTD D.No: F1 &amp; F2, Sarovi #72, 1st Floor Sunshine
                    Paradise Layout Kurudusonnenahalli, Virgonagar Post Bangalore – 560049
                  </p>
                  <p className="mt-4 text-sm text-white/70">
                    <span className="font-semibold text-canvas-50">Email</span>{' '}
                    <a className="text-white/80 hover:text-white" href="mailto:info@property-path.in">
                      info@property-path.in
                    </a>
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    <span className="font-semibold text-canvas-50">Website</span>{' '}
                    <a
                      className="text-white/80 hover:text-white"
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
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-soft">
                  <p className="text-sm font-semibold text-canvas-50">Book a consultation</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">
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

        const formData = new FormData(e.currentTarget)
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
          e.currentTarget.reset()
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
        <label className="text-xs font-semibold tracking-[0.16em] text-white/55">
          MESSAGE
        </label>
        <textarea
          name="message"
          required
          placeholder="Tell us what you’re looking for (location, budget, timeline)…"
          rows={5}
          className={cn(
            'mt-2 w-full resize-none rounded-2xl border border-white/10 bg-ink-950/30 px-4 py-3 text-sm text-white/85 placeholder:text-white/35',
            'focus:outline-none focus:ring-2 focus:ring-gold-300/30',
          )}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'submitting' || !configured}
          className="inline-flex h-12 items-center justify-center rounded-xl bg-gold-300 px-5 text-sm font-medium text-ink-950 shadow-glow transition hover:bg-gold-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/40"
        >
          {status === 'submitting' ? 'Submitting…' : 'Book a Consultation'}{' '}
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
        <a
          className="inline-flex h-12 items-center justify-center rounded-xl bg-white/10 px-5 text-sm font-medium text-white/85 ring-1 ring-white/15 transition hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/30"
          href="https://wa.me/?text=Hi%20PropertyPath%2C%20I%27d%20like%20to%20book%20a%20consultation."
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
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75"
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
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75"
          >
            Couldn’t submit right now.{' '}
            {error ? <span className="text-white/60">{error}</span> : null}
            {setupHint ? <div className="mt-2 text-xs text-white/55">{setupHint}</div> : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
      <p className="text-xs leading-6 text-white/45">
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
      <label className="text-xs font-semibold tracking-[0.16em] text-white/55" htmlFor={name}>
        {label.toUpperCase()}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={cn(
          'mt-2 h-12 w-full rounded-2xl border border-white/10 bg-ink-950/30 px-4 text-sm text-white/85 placeholder:text-white/35',
          'focus:outline-none focus:ring-2 focus:ring-gold-300/30',
        )}
      />
    </div>
  )
}
