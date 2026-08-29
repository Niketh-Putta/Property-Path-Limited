import { cn } from '../lib/cn'
import logoUrl from '../assets/property-path-logo.png'

export default function BrandMark({
  className,
  label = 'Property Path',
  showWordmark = false,
}: {
  className?: string
  label?: string
  showWordmark?: boolean
}) {
  return (
    <div
      className={cn('inline-flex min-w-0 max-w-full items-center', className)}
      aria-label={label}
    >
      <img
        src={logoUrl}
        alt={label}
        className={cn(
          'w-auto max-w-full object-contain object-left',
          showWordmark
            ? 'h-9 sm:h-10 md:h-11'
            : 'h-9 w-9 object-cover object-left sm:h-10 sm:w-10',
        )}
        decoding="async"
      />
    </div>
  )
}
