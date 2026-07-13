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
    <div className={cn('max-w-2xl', className)}>
      {eyebrow ? (
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.18em] text-gold-500">
            {eyebrow}
          </p>
          <span className="h-px w-8 bg-gold-300" aria-hidden="true" />
        </div>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-ink-950/70">{description}</p>
      ) : null}
    </div>
  )
}
