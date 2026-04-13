import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppFlotante.css'

const WA_NUMBER = '573014032120'
const WA_MESSAGE = encodeURIComponent('Hola, me interesa conocer más sobre las soluciones de domótica de Ihomotic.')

export default function WhatsAppFlotante() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-flotante"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
