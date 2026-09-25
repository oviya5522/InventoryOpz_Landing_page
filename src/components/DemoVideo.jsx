import Placeholder from './Placeholder.jsx'
import useReveal from '../hooks/useReveal.js'
import { ASSETS, whatsappLink } from '../config.js'

export default function DemoVideo() {
  const [ref, visible] = useReveal()

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-navy-950">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 lg:px-8 ${visible ? 'reveal-in' : 'reveal-init'}`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-900 dark:text-white">
            See InventoryOpz in action
          </h2>
          <p className="mt-4 text-navy-500 dark:text-navy-300 leading-relaxed">
            Take a quick look at how InventoryOpz helps simplify everyday inventory operations.
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <Placeholder
            label="[INVENTORY_OPZ_DEMO_VIDEO_PLACEHOLDER]"
            path="/assets/inventory-demo.mp4"
            aspect="aspect-video"
            variant="video"
            className="shadow-card"
            videoSrc={ASSETS.demoVideo}
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#final-cta"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 transition-colors"
          >
            Book a Full Demo
          </a>
          <a
            href={whatsappLink('Hi! I just watched the InventoryOpz demo video and would like to know more.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-navy-200 dark:border-white/15 px-6 py-3 text-sm font-semibold text-navy-700 dark:text-navy-100 hover:border-navy-300 dark:hover:border-white/30 hover:bg-navy-50 dark:hover:bg-white/5 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
