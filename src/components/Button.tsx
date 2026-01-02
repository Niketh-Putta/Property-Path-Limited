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
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/40 disabled:opacity-60 disabled:pointer-events-none active:scale-[0.99]',
        size === 'sm' && 'h-10 px-4 text-sm',
        size === 'md' && 'h-12 px-5 text-sm',
        variant === 'primary' &&
          'bg-gold-300 text-ink-950 shadow-glow hover:bg-gold-100 hover:-translate-y-[1px]',
        variant === 'secondary' &&
          'bg-white/10 text-canvas-50 ring-1 ring-white/15 hover:bg-white/14 hover:-translate-y-[1px]',
        variant === 'ghost' &&
          'bg-transparent text-canvas-50 hover:bg-white/8 ring-1 ring-white/10 hover:-translate-y-[1px]',
        className,
      )}
      {...props}
    />
  )
}
