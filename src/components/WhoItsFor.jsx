import { Store, Boxes, Warehouse, Handshake, TrendingUp } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const AUDIENCES = [
  {
    icon: Store,
    title: 'Retail',
    description: 'Businesses managing product stock across retail locations.',
  },
  {
    icon: Boxes,
    title: 'Distribution',
    description: 'Businesses coordinating inventory across distribution operations.',
  },
  {
    icon: Warehouse,
    title: 'Wholesale',
    description: 'Businesses handling larger volumes of stock and orders.',
  },
  {
    icon: Handshake,
    title: 'Dealers',
    description: 'Dealer businesses that need organized product and stock records.',
  },
  {
    icon: TrendingUp,
    title: 'Growing businesses',
    description: 'Businesses whose inventory operations are outgrowing spreadsheets.',
  },
]

export default function WhoItsFor() {
  const [ref, visible] = useReveal()

  return (
    <section className="py-20 lg:py-28 bg-navy-50/50 dark:bg-white/[0.03]">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 lg:px-8 ${visible ? 'reveal-in' : 'reveal-init'}`}
      >
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 dark:text-white">
            Who is InventoryOpz for?
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {AUDIENCES.map((a) => {
            const Icon = a.icon
            return (
              <div
                key={a.title}
                className="rounded-xl bg-white dark:bg-navy-900 border border-navy-100 dark:border-white/10 p-6 hover:border-sky-300 dark:hover:border-sky-500/50 hover:shadow-card transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-navy-900 dark:text-white">
                  {a.title}
                </h3>
                <p className="mt-1.5 text-sm text-navy-500 dark:text-navy-300 leading-relaxed">{a.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
