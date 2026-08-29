import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { cn } from '../lib/cn'

const CONSULTATION_EMAIL = 'info@property-path.in'
const CONSULTATION_CC = 'propertypath9@gmail.com'
const FORMSUBMIT_ACTION = `https://formsubmit.co/${CONSULTATION_EMAIL}`

const FIND_US = ['Digital Ads', 'Newspaper', 'Hoarding', 'Reference']
const REQUIREMENTS = ['Villa', 'Apartment', 'Plot']
const BUDGETS = ['Below 40 Lakhs', '40-60 Lakhs', '60-80 Lakhs', '80 Lakhs - 1 Cr', '1 Cr & Above']

function successRedirectUrl() {
  if (typeof window === 'undefined') return 'https://www.property-path.in/Vanam?sent=1'
  return `${window.location.origin}/Vanam?sent=1`
}

export default function VanamLeadForm({
  variant = 'dark',
  className,
}: {
  variant?: 'dark' | 'light'
  className?: string
}) {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [nextUrl] = useState(() => successRedirectUrl())
  const dark = variant === 'dark'

  useEffect(() => {
    if (searchParams.get('sent') === '1') setStatus('success')
  }, [searchParams])

  const fieldClass = cn(
    'h-11 w-full rounded-md border bg-transparent px-3 text-sm outline-none',
    dark
      ? 'border-white/35 text-white placeholder:text-white/70 [&>option]:text-ink-950'
      : 'border-ink-950/20 text-ink-950 placeholder:text-ink-950/45',
  )

  return (
    <form
      className={cn(
        'w-full rounded-2xl p-5 shadow-soft sm:p-6',
        dark
          ? 'bg-gradient-to-b from-[#0b1f12] via-[#12301c] to-[#1c4a2a]'
          : 'border border-ink-950/10 bg-white',
        className,
      )}
      action={FORMSUBMIT_ACTION}
      method="POST"
      onSubmit={(e) => {
        const form = e.currentTarget
        const data = new FormData(form)
        const name = String(data.get('name') ?? '').trim() || 'Vanam enquiry'
        const email = String(data.get('email') ?? '').trim()
        const subjectInput = form.elements.namedItem('_subject') as HTMLInputElement | null
        const replyToInput = form.elements.namedItem('_replyto') as HTMLInputElement | null
        if (subjectInput) subjectInput.value = `Vanam Brochure Request — ${name}`
        if (replyToInput) replyToInput.value = email
        setStatus('submitting')
      }}
    >
      <input type="hidden" name="_cc" value={CONSULTATION_CC} />
      <input type="hidden" name="_subject" defaultValue="Vanam Brochure Request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_replyto" defaultValue="" />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <p
        className={cn(
          'mb-4 text-center text-sm font-semibold tracking-wide',
          dark ? 'text-white' : 'text-ink-950',
        )}
      >
        Contact Form
      </p>

      <div className="grid gap-3">
        <input name="name" required placeholder="Name" className={fieldClass} />
        <input name="phone" required placeholder="Phone Number" className={fieldClass} />
        <input name="address" placeholder="Address" className={fieldClass} />
        <input name="email" type="email" required placeholder="Email ID" className="hidden" defaultValue="vanam-lead@property-path.in" />
        <select name="source" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            How did you find us?
          </option>
          {FIND_US.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select name="requirement" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Your Requirement?
          </option>
          {REQUIREMENTS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select name="budget" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Your Budget?
          </option>
          {BUDGETS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={cn(
          'mt-5 w-full text-center text-sm font-semibold tracking-[0.08em] uppercase disabled:opacity-60',
          dark ? 'text-white' : 'text-ink-950',
        )}
      >
        {status === 'submitting' ? 'Sending…' : 'Get your Brochure'}
      </button>
      {status === 'success' ? (
        <p className={cn('mt-3 text-center text-xs leading-5', dark ? 'text-white/80' : 'text-ink-950/60')}>
          Request sent. Our team will share the brochure shortly.
        </p>
      ) : null}
    </form>
  )
}
