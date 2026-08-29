import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn } from '../lib/cn'
import { supabase, supabaseConfigured } from '../lib/supabase'
import { quickFade } from '../lib/motion'

const CONSULTATION_MAILTO =
  'mailto:info@property-path.in,propertypath9@gmail.com'
const WHATSAPP_HREF =
  'https://wa.me/919989544728?text=Hi%20PropertyPath%2C%20I%27d%20like%20to%20book%20a%20consultation.'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)
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

        const formData = new FormData(form)
        const name = String(formData.get('name') ?? '').trim()
        const email = String(formData.get('email') ?? '').trim()
        const phone = String(formData.get('phone') ?? '').trim()
        const message = String(formData.get('message') ?? '').trim()

        const body = [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || 'Not provided'}`,
          '',
          'Message:',
          message,
        ].join('\n')

        const mailtoHref = `${CONSULTATION_MAILTO}?subject=${encodeURIComponent(
          `PropertyPath Consultation Request — ${name}`,
        )}&body=${encodeURIComponent(body)}`

        try {
          if (configured) {
            const { error: insertError } = await supabase!.from('consultations').insert([
              {
                name,
                email,
                phone: phone.length ? phone : null,
                message,
                source: 'web',
              },
            ])
            if (insertError) throw insertError
          }

          window.location.href = mailtoHref
          setStatus('success')
          form.reset()
        } catch (err) {
          // Still open mail even if optional storage fails
          window.location.href = mailtoHref
          setStatus('success')
          form.reset()
          const msg = err instanceof Error ? err.message : 'Could not store request'
          setError(msg)
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
          disabled={status === 'submitting'}
          className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-ink-950 px-4 sm:h-12 sm:w-auto sm:px-5 text-sm font-medium tracking-wide text-gold-300 shadow-glow ring-1 ring-gold-300/80 transition hover:bg-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/50"
        >
          {status === 'submitting' ? 'Opening mail…' : 'Book a Consultation'}{' '}
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
            Opening your email app to send this request to info@property-path.in and
            propertypath9@gmail.com.
            {error ? (
              <div className="mt-2 text-xs text-ink-950/55">Note: {error}</div>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
      <p className="text-xs leading-6 text-ink-950/45">
        Submitting opens an email to info@property-path.in and propertypath9@gmail.com with your
        details.
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
