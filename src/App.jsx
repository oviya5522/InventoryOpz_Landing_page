import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductTour from './components/ProductTour.jsx'
import WhyInventory from './components/WhyInventory.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhoItsFor from './components/WhoItsFor.jsx'
import DemoVideo from './components/DemoVideo.jsx'
import ProductShowcase from './components/ProductShowcase.jsx'
import ClientProof from './components/ClientProof.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloatButton from './components/WhatsAppFloatButton.jsx'
import useTheme from './hooks/useTheme.js'

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ProductTour />
        <WhyInventory />
        <HowItWorks />
        <WhoItsFor />
        <DemoVideo />
        <ProductShowcase />
        <ClientProof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  )
}
