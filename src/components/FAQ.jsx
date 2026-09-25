import { useState } from 'react'
import { Plus } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const QUESTIONS = [
  {
    q: 'What is InventoryOpz?',
    a: 'InventoryOpz is a platform for managing products, stock, purchases, sales, and inventory operations from one centralized place.',
  },
  {
    q: 'Who is InventoryOpz designed for?',
    a: 'InventoryOpz is designed for retail, distribution, wholesale, and dealer businesses, along with other growing businesses with inventory operations.',
  },
  {
    q: 'Can InventoryOpz help manage multiple inventory operations?',
    a: '[ANSWER TO BE PROVIDED]',
  },
  {
    q: 'Can existing inventory data be migrated?',
    a: '[ANSWER TO BE PROVIDED]',
  },
  {
    q: 'Can the product be customized?',
    a: '[ANSWER TO BE PROVIDED]',
  },
  {
    q: 'Is onboarding or training available?',
    a: '[ANSWER TO BE PROVIDED]',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, visible] = useReveal()

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-navy-950">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 lg:px-8 ${visible ? 'reveal-in' : 'reveal-init'}`}
      >
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 dark:text-white">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 max-w-3xl divide-y divide-navy-100 dark:divide-white/10 border-t border-b border-navy-100 dark:border-white/10">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-navy-900 dark:text-white">{item.q}</span>
                  <Plus
                    className={`h-5 w-5 text-sky-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-navy-500 dark:text-navy-300 leading-relaxed max-w-xl">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
