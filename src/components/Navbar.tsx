import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LinkButton from './LinkButton'
import Button from './Button'
import BrandMark from './BrandMark'
import { cn } from '../lib/cn'

type NavItem = { label: string; sectionId: string }

const navItems: NavItem[] = [
  { label: 'About', sectionId: 'about' },
  { label: 'Services', sectionId: 'services' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Partners', sectionId: 'partners' },
  { label: 'Contact', sectionId: 'contact' },
]

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (!element) return
  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const onHome = location.pathname === '/'
  const ctaTo = '/verify-agent'

  function handleSection(sectionId: string) {
    setOpen(false)
    if (onHome) {
      scrollToSection(sectionId)
      return
    }
    navigate('/')
    window.setTimeout(() => scrollToSection(sectionId), 80)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/75 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <button
          type="button"
          className="group inline-flex items-center gap-2"
          onClick={() => {
            setOpen(false)
            if (onHome) scrollToSection('top')
            else navigate('/')
          }}
        >
          <BrandMark showWordmark className="select-none" />
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.sectionId}
              type="button"
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/8 hover:text-white"
              onClick={() => handleSection(item.sectionId)}
            >
              {item.label}
            </button>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <LinkButton to={ctaTo} variant="secondary" size="sm">
              Verify an Agent
            </LinkButton>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleSection('projects')}
            >
              Explore Projects
            </Button>
          </div>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-white/80 ring-1 ring-white/12 hover:bg-white/8 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          'md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  type="button"
                  className="rounded-xl px-3 py-3 text-left text-sm font-medium text-white/80 hover:bg-white/8"
                  onClick={() => handleSection(item.sectionId)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <LinkButton to={ctaTo} variant="secondary">
                Verify an Agent
              </LinkButton>
              <Button variant="primary" onClick={() => handleSection('projects')}>
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
