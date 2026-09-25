import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../config.js'

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-20 lg:py-28 bg-navy-900 dark:bg-navy-950 border-t border-transparent dark:border-white/10">
      <div className="max-w-content mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white max-w-xl mx-auto">
          Ready to take control of your inventory?
        </h2>
        <p className="mt-4 text-navy-300 max-w-md mx-auto">
          See how InventoryOpz can fit into your business operations.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={whatsappLink("Hi! I'd like to book a demo of InventoryOpz.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 transition-colors"
          >
            Book a Demo
          </a>
          <a
            href={whatsappLink("Hi! I'd like to talk to your team about InventoryOpz.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
