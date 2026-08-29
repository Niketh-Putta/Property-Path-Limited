import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { cn } from '../lib/cn'
import { quickFade } from '../lib/motion'

const CONSULTATION_EMAIL = 'info@property-path.in'
const CONSULTATION_CC = 'propertypath9@gmail.com'
const FORMSUBMIT_ACTION = `https://formsubmit.co/${CONSULTATION_EMAIL}`
const WHATSAPP_HREF =
  'https://wa.me/919989544728?text=Hi%20PropertyPath%2C%20I%27d%20like%20to%20book%20a%20consultation.'

function successRedirectUrl() {
  if (typeof window === 'undefined') return 'https://www.property-path.in/consultation?sent=1'
  return `${window.location.origin}/consultation?sent=1`
}

export default function ContactForm() {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [nextUrl] = useState(() => successRedirectUrl())
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (searchParams.get('sent') === '1') {
      setStatus('success')
    }
  }, [searchParams])

  return (
    <form
      className="mt-6 grid gap-3"
      action={FORMSUBMIT_ACTION}
      method="POST"
      onSubmit={(e) => {
        const form = e.currentTarget
        const data = new FormData(form)
        const name = String(data.get('name') ?? '').trim() || 'Website visitor'
        const email = String(data.get('email') ?? '').trim()

        const subjectInput = form.elements.namedItem('_subject') as HTMLInputElement | null
        const replyToInput = form.elements.namedItem('_replyto') as HTMLInputElement | null
        if (subjectInput) {
          subjectInput.value = `PropertyPath Consultation Request — ${name}`
        }
        if (replyToInput) {
          replyToInput.value = email
        }

        setStatus('submitting')
        // Native browser POST continues (no preventDefault) so mail is sent
        // server-side by FormSubmit on desktop and mobile browsers.
      }}
    >
      <input type="hidden" name="_cc" value={CONSULTATION_CC} />
      <input type="hidden" name="_subject" defaultValue="PropertyPath Consultation Request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_replyto" defaultValue="" />

      {/* Honeypot field for spam bots */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

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
          disabled={status === 'submitting'}
          className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-ink-950 px-4 sm:h-12 sm:w-auto sm:px-5 text-sm font-medium tracking-wide text-gold-300 shadow-glow ring-1 ring-gold-300/80 transition hover:bg-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/50 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Book a Consultation'}{' '}
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
        <a
          className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-transparent px-4 sm:h-12 sm:w-auto sm:px-5 text-sm font-medium tracking-wide text-ink-950 ring-1 ring-gold-300/70 transition hover:bg-gold-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/40"
          href={WHATSAPP_HREF}
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
            Request sent to info@property-path.in and propertypath9@gmail.com. Our team will get
            back to you shortly.
          </motion.div>
        ) : null}
      </AnimatePresence>
      <p className="text-xs leading-6 text-ink-950/45">
        Submitting emails our team directly from desktop and mobile browsers. If this is the first
        submission, open the FormSubmit activation email at info@property-path.in and click
        Activate once.
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
