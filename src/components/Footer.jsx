import { MessageCircle, Mail } from 'lucide-react'
import { ASSETS, whatsappLink, CONTACT_EMAIL } from '../config.js'

const PRODUCT_LINKS = [
  { label: 'Product Tour', href: '#tour' },
  { label: 'Why InventoryOpz', href: '#why' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <img src={ASSETS.logo} alt="InventoryOpz" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg font-semibold text-white">InventoryOpz</span>
          </div>
          <p className="mt-4 text-sm max-w-xs leading-relaxed">
            InventoryOpz helps businesses manage products, stock, purchases, sales, and
            inventory operations from one centralized platform.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Product</p>
          <ul className="mt-4 space-y-3">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Get in touch</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </li>
            <li>
              <a
                href="#final-cta"
                onClick={(e) => handleClick(e, '#final-cta')}
                className="hover:text-white transition-colors"
              >
                Book a Demo
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="max-w-content mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-400">
          <p>© {new Date().getFullYear()} InventoryOpz. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="h-6 w-6 rounded bg-white flex items-center justify-center overflow-hidden shrink-0">
              <img src={ASSETS.yazhseyLogo} alt="YazhSey Technologies" className="h-full w-full object-contain" />
            </span>
            <span className="font-medium text-navy-300">YazhSey Technologies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
