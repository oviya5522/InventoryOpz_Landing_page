import { BadgeCheck } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import { ASSETS } from '../config.js'

export default function ClientProof() {
  const [ref, visible] = useReveal()

  return (
    <section id="clients" className="py-20 lg:py-28 bg-white dark:bg-navy-950">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 lg:px-8 ${visible ? 'reveal-in' : 'reveal-init'}`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 dark:text-white">
            Trusted by businesses
          </h2>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-navy-100 dark:border-white/10 bg-gradient-to-br from-navy-50 via-white to-sky-50 dark:from-navy-900 dark:via-navy-900 dark:to-navy-900 p-10 sm:p-14 text-center shadow-card">
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-sky-200/40 dark:bg-sky-500/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative inline-flex items-center gap-2 rounded-full bg-sky-50 dark:bg-sky-500/10 px-4 py-1.5 text-xs font-medium text-sky-700 dark:text-sky-300">
              <BadgeCheck className="h-4 w-4" />
              Live client
            </div>

            <div className="relative mt-8 flex items-center justify-center">
              <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl bg-white dark:bg-navy-950 border border-navy-100 dark:border-white/10 shadow-card flex items-center justify-center p-3">
                <img
                  src={ASSETS.clientLogoBdb}
                  alt="Bond Building Products Pte Ltd"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <p className="relative mt-7 font-display text-xl sm:text-2xl font-semibold text-navy-900 dark:text-white">
              Bond Building Products Pte Ltd
            </p>
            <p className="relative mt-2 text-sm text-navy-500 dark:text-navy-300">
              Using InventoryOpz to run day-to-day inventory operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
