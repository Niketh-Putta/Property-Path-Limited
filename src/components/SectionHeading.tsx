import { cn } from '../lib/cn'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn('max-w-2xl min-w-0', className)}>
      {eyebrow ? (
        <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
          <span className="hidden h-px w-6 shrink-0 bg-gold-300 sm:block sm:w-8" aria-hidden="true" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-500 sm:text-xs sm:tracking-[0.18em]">
            {eyebrow}
          </p>
          <span className="hidden h-px w-6 shrink-0 bg-gold-300 sm:block sm:w-8" aria-hidden="true" />
        </div>
      ) : null}
      <h2 className="mt-3 break-words font-serif text-2xl font-semibold leading-snug tracking-tight text-ink-950 text-balance sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-ink-950/70 text-pretty sm:text-[15px]">
          {description}
        </p>
      ) : null}
    </div>
  )
}
