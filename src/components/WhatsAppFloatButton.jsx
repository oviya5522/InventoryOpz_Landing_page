import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../config.js'

export default function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3.5 shadow-lg hover:bg-[#1fbd5a] active:bg-[#1aa550] transition-colors group"
    >
      <MessageCircle className="h-5 w-5 fill-white text-[#25D366]" strokeWidth={0} />
      <span className="text-sm font-semibold hidden sm:inline">Chat on WhatsApp</span>
    </a>
  )
}
