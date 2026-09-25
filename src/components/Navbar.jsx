import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { ASSETS } from '../config.js'

const LINKS = [
  { label: 'Product Tour', href: '#tour' },
  { label: 'Why InventoryOpz', href: '#why' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Live Clients', href: '#clients' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur shadow-[0_1px_0_0_rgba(10,24,48,0.08)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
          : 'bg-white/0 dark:bg-navy-950/0'
      }`}
    >
      <nav className="max-w-content mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-3">
        <a href="#" className="flex items-center gap-2 shrink-0" aria-label="InventoryOpz home">
          <img src={ASSETS.logo} alt="InventoryOpz" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-semibold text-navy-900 dark:text-white">
            InventoryOpz
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                active === link.href
                  ? 'text-navy-900 dark:text-white'
                  : 'text-navy-500 dark:text-navy-300 hover:text-navy-900 dark:hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-sky-500 transition-transform origin-left ${
                  active === link.href ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="h-10 w-10 rounded-lg border border-navy-200 dark:border-white/15 flex items-center justify-center text-navy-600 dark:text-navy-200 hover:bg-navy-50 dark:hover:bg-white/5 transition-colors"
          >
            {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
          <a
            href="#final-cta"
            onClick={(e) => handleClick(e, '#final-cta')}
            className="inline-flex items-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 active:bg-sky-700 transition-colors"
          >
            Book a Demo
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="h-10 w-10 rounded-lg flex items-center justify-center text-navy-600 dark:text-navy-200"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            className="p-2 -mr-2 text-navy-700 dark:text-navy-100"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-navy-100 dark:border-white/10 bg-white dark:bg-navy-950">
          <div className="px-6 py-4 flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-2 py-3 text-base font-medium text-navy-700 dark:text-navy-100 border-b border-navy-50 dark:border-white/5 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#final-cta"
              onClick={(e) => handleClick(e, '#final-cta')}
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
