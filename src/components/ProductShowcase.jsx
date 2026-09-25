import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Placeholder from './Placeholder.jsx'
import useReveal from '../hooks/useReveal.js'
import { ASSETS } from '../config.js'

const SCREENS = [
  { label: '[DASHBOARD_SCREENSHOT_PLACEHOLDER]', name: 'Dashboard overview', src: ASSETS.screens.dashboardHome },
  { label: '[PRODUCTS_SCREENSHOT_PLACEHOLDER]', name: 'Product catalog', src: ASSETS.screens.factoryStock },
  { label: '[INVENTORY_SCREENSHOT_PLACEHOLDER]', name: 'Inventory & stock', src: ASSETS.screens.inventoryStockManagement },
  { label: '[PURCHASE_SCREENSHOT_PLACEHOLDER]', name: 'Purchase requests', src: ASSETS.screens.purchaseRequests },
  { label: '[SALES_SCREENSHOT_PLACEHOLDER]', name: 'Sales & purchase orders', src: ASSETS.screens.salesPurchaseOrders },
  { label: '[REPORTS_SCREENSHOT_PLACEHOLDER]', name: 'Reports & analytics', src: ASSETS.screens.reportsAnalytics },
  { label: '[SUPPLIERS_SCREENSHOT_PLACEHOLDER]', name: 'Suppliers overview', src: ASSETS.screens.suppliersOverview },
]

export default function ProductShowcase() {
  const trackRef = useRef(null)
  const [ref, visible] = useReveal()

  const scrollBy = (dir) => {
    const node = trackRef.current
    if (!node) return
    node.scrollBy({ left: dir * (node.clientWidth * 0.85), behavior: 'smooth' })
  }

  return (
    <section className="py-20 lg:py-28 bg-navy-50/50 dark:bg-white/[0.03]">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 lg:px-8 ${visible ? 'reveal-in' : 'reveal-init'}`}
      >
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 dark:text-white">
              A closer look at InventoryOpz
            </h2>
          </div>
          <div className="hidden sm:flex gap-2 shrink-0">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="h-10 w-10 rounded-full border border-navy-200 dark:border-white/15 flex items-center justify-center text-navy-600 dark:text-navy-200 hover:bg-white dark:hover:bg-white/10 hover:border-navy-300 dark:hover:border-white/30 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="h-10 w-10 rounded-full border border-navy-200 dark:border-white/15 flex items-center justify-center text-navy-600 dark:text-navy-200 hover:bg-white dark:hover:bg-white/10 hover:border-navy-300 dark:hover:border-white/30 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: 'thin' }}
        >
          {SCREENS.map((screen) => (
            <div key={screen.label} className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[32%]">
              <Placeholder
                label={screen.label}
                aspect="aspect-[4/3]"
                className="shadow-card"
                src={screen.src}
                alt={screen.name}
              />
              <p className="mt-3 text-sm font-medium text-navy-600 dark:text-navy-300 text-center">
                {screen.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
