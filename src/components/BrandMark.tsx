import { useId } from 'react'
import { cn } from '../lib/cn'

export default function BrandMark({
  className,
  label = 'Property Path',
  showWordmark = false,
}: {
  className?: string
  label?: string
  showWordmark?: boolean
}) {
  const gradientId = useId()

  return (
    <div className={cn('inline-flex items-center gap-2', className)} aria-label={label}>
      <svg
        className="h-10 w-10"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={label}
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="36"
            y1="18"
            x2="92"
            y2="120"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F08A3C" />
            <stop offset="1" stopColor="#B84A1A" />
          </linearGradient>
        </defs>
        <path
          d="M64 10c22.1 0 40 16.9 40 37.8 0 19.6-13.9 34.5-33.2 55.9L64 118l-6.8-14.3C37.9 82.3 24 67.4 24 47.8 24 26.9 41.9 10 64 10Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M64 30c16 0 29 11.7 29 26.2 0 8.7-5.1 15.7-12.5 22.7l-2.5 2.4H50l-2.5-2.4C40.1 71.9 35 64.9 35 56.2 35 41.7 48 30 64 30Z"
          fill="#141B22"
          opacity="0.92"
        />
        <path d="M63.8 40.5 76 33v44H51V41l12.8-.5Z" fill="#F2C24E" />
        <path d="M51 48 42 52v25h9V48Z" fill="#7B8A85" />
        <path d="M85 52 78 49v28h7V52Z" fill="#7B8A85" opacity="0.85" />
        <path d="M60 56h6v10h-6V56Z" fill="#141B22" />
      </svg>

      {showWordmark ? (
        <div className="leading-tight">
          <p className="text-sm font-semibold tracking-tight text-canvas-50">
            Property <span className="text-white/80">Path</span>
          </p>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-white/45">
            SAFE INVESTMENTS. STRONG RETURNS.
          </p>
        </div>
      ) : null}
    </div>
  )
}
