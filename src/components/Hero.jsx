import { ArrowRight, CalendarClock } from 'lucide-react'
import Placeholder from './Placeholder.jsx'
import { ASSETS } from '../config.js'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-white dark:bg-navy-950">
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 h-[480px] bg-gradient-to-b from-sky-50 to-white dark:from-navy-900 dark:to-navy-950"
        aria-hidden="true"
      />
      <div className="relative max-w-content mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-4">
            Inventory management software
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold text-navy-900 dark:text-white max-w-xl">
            Inventory management, without the spreadsheet chaos.
          </h1>
          <p className="mt-6 text-lg text-navy-500 dark:text-navy-300 max-w-md leading-relaxed">
            InventoryOpz helps businesses manage products, stock, purchases, sales, and
            inventory operations from one centralized platform.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#tour"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#tour')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 active:bg-sky-700 transition-colors"
            >
              Explore InventoryOpz
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#final-cta"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-navy-200 dark:border-white/15 px-6 py-3.5 text-sm font-semibold text-navy-700 dark:text-navy-100 hover:border-navy-300 dark:hover:border-white/30 hover:bg-navy-50 dark:hover:bg-white/5 transition-colors"
            >
              <CalendarClock className="h-4 w-4" />
              Book a Demo
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-4 rounded-2xl bg-navy-50 dark:bg-white/5 -z-10 hidden sm:block"
            aria-hidden="true"
          />
          <Placeholder
            label="[HERO_PRODUCT_SCREENSHOT_PLACEHOLDER]"
            path="/assets/inventory-hero.png"
            aspect="aspect-[4/3]"
            className="shadow-card"
            src={ASSETS.heroScreenshot}
            alt="InventoryOpz dashboard overview"
          />
        </div>
      </div>
    </section>
  )
}
