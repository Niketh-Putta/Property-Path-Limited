import { ArrowRight } from 'lucide-react'
import LinkButton from '../components/LinkButton'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-soft">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10">
          SAFE INVESTMENTS. STRONG RETURNS.
        </p>
        <p className="text-xs font-semibold tracking-[0.18em] text-white/55">404</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-canvas-50 sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-7 text-white/70">
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
