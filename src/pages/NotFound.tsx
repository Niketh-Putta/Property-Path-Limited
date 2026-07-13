import { ArrowRight } from 'lucide-react'
import LinkButton from '../components/LinkButton'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="rounded-2xl border border-ink-950/10 bg-white/80 p-6 shadow-soft sm:rounded-3xl sm:p-10">
        <p className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium tracking-[0.08em] text-ink-950/70 ring-1 ring-ink-950/10 sm:text-xs">
          SAFE INVESTMENTS. STRONG RETURNS.
        </p>
        <p className="text-xs font-semibold tracking-[0.18em] text-ink-950/55">404</p>
        <h1 className="mt-3 break-words font-serif text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-7 text-ink-950/70">
          The link may be outdated. Use the home page to continue.
        </p>
        <div className="mt-6">
          <LinkButton to="/" variant="primary">
            Back to Home <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
