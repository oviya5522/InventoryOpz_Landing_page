import useReveal from '../hooks/useReveal.js'

const STEPS = [
  {
    number: '01',
    title: 'Add Products',
    description: 'Add and organize your products in one place.',
  },
  {
    number: '02',
    title: 'Manage Inventory',
    description: 'Track inventory activity and stock movement.',
  },
  {
    number: '03',
    title: 'Monitor Operations',
    description: 'Get visibility into your day-to-day inventory operations.',
  },
  {
    number: '04',
    title: 'Make Better Decisions',
    description: 'Use organized information and reports to make informed operational decisions.',
  },
]

export default function HowItWorks() {
  const [ref, visible] = useReveal()

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white dark:bg-navy-950">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 lg:px-8 ${visible ? 'reveal-in' : 'reveal-init'}`}
      >
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 dark:text-white">
            How InventoryOpz works
          </h2>
        </div>

        <div className="mt-14 relative">
          <div
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-navy-100 dark:bg-white/10"
            aria-hidden="true"
          />
          <ol className="grid md:grid-cols-4 gap-10 md:gap-6">
            {STEPS.map((step) => (
              <li key={step.number} className="relative">
                <div className="relative z-10 h-12 w-12 rounded-full bg-white dark:bg-navy-950 border-2 border-sky-500 text-sky-600 dark:text-sky-400 font-display font-semibold flex items-center justify-center">
                  {step.number}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-navy-500 dark:text-navy-300 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
