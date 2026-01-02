import { type ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

type CommonProps = {
  variant?: Variant
  size?: Size
}

type Props = CommonProps &
  (
    | ({ to: string } & Omit<ComponentPropsWithoutRef<typeof Link>, 'to'>)
    | ({
        href: string
        external?: boolean
      } & Omit<ComponentPropsWithoutRef<'a'>, 'href'>)
  )

export default function LinkButton(props: Props) {
  const { variant = 'primary', size = 'md' } = props
  const className = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/40',
    size === 'sm' && 'h-10 px-4 text-sm',
    size === 'md' && 'h-12 px-5 text-sm',
    variant === 'primary' &&
      'bg-gold-300 text-ink-950 shadow-glow hover:bg-gold-100',
    variant === 'secondary' &&
      'bg-white/10 text-canvas-50 ring-1 ring-white/15 hover:bg-white/14',
    variant === 'ghost' &&
      'bg-transparent text-canvas-50 hover:bg-white/8 ring-1 ring-white/10',
    'no-underline',
    'w-fit',
    (props as { className?: string }).className,
  )

  if ('to' in props) {
    const { to, ...rest } = props
    return <Link to={to} className={className} {...rest} />
  }

  const { href, external, ...rest } = props
  return (
    <a
      href={href}
      className={className}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      {...rest}
    />
  )
}

