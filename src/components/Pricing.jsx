import { Check, MessageCircle } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import { whatsappLink } from '../config.js'

export default function Pricing() {
  const [ref, visible] = useReveal()

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-navy-50/50 dark:bg-white/[0.03]">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 lg:px-8 ${visible ? 'reveal-in' : 'reveal-init'}`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-navy-500 dark:text-navy-300">
            Pricing is tailored to your business. Chat with us on WhatsApp for a quote.
          </p>
        </div>

        <div className="mt-12 max-w-md mx-auto rounded-2xl border border-navy-100 dark:border-white/10 bg-white dark:bg-navy-900 shadow-card p-8 sm:p-10 text-center">
          <p className="text-sm font-medium text-sky-600 dark:text-sky-400">InventoryOpz</p>
          <p className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-navy-900 dark:text-white">
            Talk to us for pricing
          </p>

          <ul className="mt-8 space-y-3 text-left">
            {[
              'Product management',
              'Inventory & stock management',
              'Purchase & sales management',
              'Reports & analytics',
              'User & role management',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-navy-600 dark:text-navy-200 text-sm">
                <Check className="h-4 w-4 text-sky-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink("Hi! I'd like to get pricing details for InventoryOpz.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1fbd5a] active:bg-[#1aa550] transition-colors"
          >
            <MessageCircle className="h-4 w-4 fill-white text-[#25D366]" strokeWidth={0} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
