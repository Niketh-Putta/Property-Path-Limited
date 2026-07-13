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
  const userClassName = (props as { className?: string }).className
  const className = cn(
    'inline-flex max-w-full items-center justify-center gap-2 rounded-xl font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/50 active:scale-[0.99] [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0',
    size === 'sm' && 'h-10 px-3 text-sm sm:px-4',
    size === 'md' && 'h-11 px-4 text-sm sm:h-12 sm:px-5',
    variant === 'primary' &&
      'bg-ink-950 text-gold-300 shadow-glow ring-1 ring-gold-300/80 hover:bg-ink-900 hover:-translate-y-[1px]',
    variant === 'secondary' &&
      'bg-transparent text-ink-950 ring-1 ring-gold-300/70 hover:bg-gold-50 hover:-translate-y-[1px]',
    variant === 'ghost' &&
      'bg-transparent text-ink-950 ring-1 ring-ink-950/15 hover:bg-ink-950/[0.04] hover:-translate-y-[1px]',
    'no-underline',
    'w-fit',
    userClassName,
  )

  if ('to' in props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { to, className: _className, ...rest } = props
    return <Link to={to} className={className} {...rest} />
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { href, external, className: _className, ...rest } = props
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
