import { useState } from 'react'
import {
  Package,
  Boxes,
  ShoppingCart,
  ReceiptText,
  Truck,
  Users,
  AlertTriangle,
  BarChart3,
  ShieldCheck,
} from 'lucide-react'
import Placeholder from './Placeholder.jsx'
import useReveal from '../hooks/useReveal.js'
import { ASSETS } from '../config.js'

const FEATURES = [
  {
    key: 'products',
    icon: Package,
    title: 'Product Management',
    description:
      'Organize and manage your entire product catalog from one centralized platform.',
    placeholder: '[PRODUCT_MANAGEMENT_SCREENSHOT_PLACEHOLDER]',
    screenshot: ASSETS.screens.factoryStock,
  },
  {
    key: 'inventory',
    icon: Boxes,
    title: 'Inventory & Stock Management',
    description: 'Track stock levels and inventory activity across your operations.',
    placeholder: '[INVENTORY_STOCK_SCREENSHOT_PLACEHOLDER]',
    screenshot: ASSETS.screens.inventoryStockManagement,
  },
  {
    key: 'purchase',
    icon: ReceiptText,
    title: 'Purchase Management',
    description: 'Manage purchase records and keep incoming stock organized.',
    placeholder: '[PURCHASE_MANAGEMENT_SCREENSHOT_PLACEHOLDER]',
    screenshot: ASSETS.screens.purchaseRequests,
  },
  {
    key: 'sales',
    icon: ShoppingCart,
    title: 'Sales Management',
    description: 'Record and organize sales activity alongside your inventory data.',
    placeholder: '[SALES_MANAGEMENT_SCREENSHOT_PLACEHOLDER]',
    screenshot: ASSETS.screens.salesPurchaseOrders,
  },
  {
    key: 'supplier',
    icon: Truck,
    title: 'Supplier Management',
    description: 'Keep supplier information organized in one place.',
    placeholder: '[SUPPLIER_MANAGEMENT_SCREENSHOT_PLACEHOLDER]',
    screenshot: ASSETS.screens.supplierManagement,
  },
  {
    key: 'customer',
    icon: Users,
    title: 'Customer Management',
    description: 'Maintain organized customer information tied to your sales activity.',
    placeholder: '[CUSTOMER_MANAGEMENT_SCREENSHOT_PLACEHOLDER]',
    screenshot: ASSETS.screens.customerMailbox,
  },
  {
    key: 'lowstock',
    icon: AlertTriangle,
    title: 'Low Stock Monitoring',
    description: 'Stay aware of low stock levels across your inventory.',
    placeholder: '[LOW_STOCK_MONITORING_SCREENSHOT_PLACEHOLDER]',
    screenshot: ASSETS.screens.lowStockMonitoring,
  },
  {
    key: 'reports',
    icon: BarChart3,
    title: 'Reports & Analytics',
    description: 'Use organized reports to understand inventory operations.',
    placeholder: '[REPORTS_ANALYTICS_SCREENSHOT_PLACEHOLDER]',
    screenshot: ASSETS.screens.reportsAnalytics,
  },
  {
    key: 'roles',
    icon: ShieldCheck,
    title: 'User & Role Management',
    description: 'Control access with organized user and role management.',
    placeholder: '[USER_ROLE_MANAGEMENT_SCREENSHOT_PLACEHOLDER]',
    screenshot: ASSETS.screens.userRoleManagement,
  },
]

export default function ProductTour() {
  const [activeKey, setActiveKey] = useState(FEATURES[0].key)
  const active = FEATURES.find((f) => f.key === activeKey)
  const [ref, visible] = useReveal()

  return (
    <section id="tour" className="py-20 lg:py-28 bg-white dark:bg-navy-950">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 lg:px-8 ${visible ? 'reveal-in' : 'reveal-init'}`}
      >
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 dark:text-white">
            Everything you need to manage inventory
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
            {FEATURES.map((f) => {
              const Icon = f.icon
              const isActive = f.key === activeKey
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveKey(f.key)}
                  className={`flex items-center gap-3 text-left shrink-0 lg:shrink w-auto lg:w-full rounded-lg px-4 py-3.5 text-sm font-medium transition-colors border ${
                    isActive
                      ? 'bg-navy-700 dark:bg-sky-500 text-white border-navy-700 dark:border-sky-500'
                      : 'bg-white dark:bg-white/5 text-navy-600 dark:text-navy-200 border-navy-100 dark:border-white/10 hover:border-navy-200 dark:hover:border-white/20 hover:bg-navy-50 dark:hover:bg-white/10'
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      isActive ? 'text-sky-300 dark:text-white' : 'text-sky-500'
                    }`}
                  />
                  <span className="whitespace-nowrap lg:whitespace-normal">{f.title}</span>
                </button>
              )
            })}
          </div>

          <div className="rounded-2xl border border-navy-100 dark:border-white/10 bg-navy-50/40 dark:bg-white/[0.03] p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white">
              {active.title}
            </h3>
            <p className="mt-2 text-navy-500 dark:text-navy-300 max-w-lg leading-relaxed">
              {active.description}
            </p>
            <div className="mt-6">
              <Placeholder
                label={active.placeholder}
                aspect="aspect-[16/9]"
                src={active.screenshot}
                alt={active.title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
