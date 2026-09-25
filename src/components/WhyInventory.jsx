import { X, Check } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const WITHOUT = [
  'Spreadsheet-based tracking',
  'Manual updates',
  'Scattered information',
  'Difficult stock monitoring',
  'Limited visibility',
]

const WITH = [
  'Centralized inventory management',
  'Better stock visibility',
  'Organized product information',
  'Streamlined operations',
  'Better business visibility',
]

export default function WhyInventory() {
  const [ref, visible] = useReveal()

  return (
    <section id="why" className="py-20 lg:py-28 bg-navy-900 dark:bg-navy-950 text-white dark:border-t dark:border-white/10">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 lg:px-8 ${visible ? 'reveal-in' : 'reveal-init'}`}
      >
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Why InventoryOpz?</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-medium text-navy-300">Without InventoryOpz</p>
            <ul className="mt-6 space-y-4">
              {WITHOUT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy-100">
                  <X className="h-4 w-4 mt-1 text-navy-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-sky-400/30 bg-sky-500/10 p-8">
            <p className="text-sm font-medium text-sky-300">With InventoryOpz</p>
            <ul className="mt-6 space-y-4">
              {WITH.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-4 w-4 mt-1 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
