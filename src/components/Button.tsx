import { type ComponentPropsWithoutRef } from 'react'
import { cn } from '../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md'

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex max-w-full items-center justify-center gap-2 rounded-xl font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/50 disabled:opacity-60 disabled:pointer-events-none active:scale-[0.99] [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0',
        size === 'sm' && 'h-10 px-3 text-sm sm:px-4',
        size === 'md' && 'h-11 px-4 text-sm sm:h-12 sm:px-5',
        variant === 'primary' &&
          'bg-ink-950 text-gold-300 shadow-glow ring-1 ring-gold-300/80 hover:bg-ink-900 hover:-translate-y-[1px]',
        variant === 'secondary' &&
          'bg-transparent text-ink-950 ring-1 ring-gold-300/70 hover:bg-gold-50 hover:-translate-y-[1px]',
        variant === 'ghost' &&
          'bg-transparent text-ink-950 ring-1 ring-ink-950/15 hover:bg-ink-950/[0.04] hover:-translate-y-[1px]',
        className,
      )}
      {...props}
    />
  )
}
