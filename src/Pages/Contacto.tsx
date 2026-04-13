import '../Styles/Contacto.css'
import { useTranslation } from 'react-i18next'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone, HiOutlineClock } from 'react-icons/hi'
import ContactoFormulario from '../components/contacto-formulario/contacto-formulario'
import PageWrapper from '../components/comunes/PageWrapper'
import TarjetaContacto from '../components/comunes/TarjetaContacto'

export default function Contacto() {
  const { t } = useTranslation()

  const infoCards = [
    { icon: <HiOutlineLocationMarker size={28} />, titleKey: 'contacto.locationTitle', valueKey: 'contacto.locationValue' },
    { icon: <HiOutlineMail size={28} />,           titleKey: 'contacto.emailTitle',    valueKey: 'contacto.emailValue'    },
    { icon: <HiOutlinePhone size={28} />,          titleKey: 'contacto.phoneTitle',    valueKey: 'contacto.phoneValue'    },
    { icon: <HiOutlineClock size={28} />,          titleKey: 'contacto.scheduleTitle', valueKey: 'contacto.scheduleValue' },
  ]

  return (
    <PageWrapper>
      <section className="contacto-hero" aria-labelledby="contacto-title">
        <div className="contacto-hero-content">
          <h2 id="contacto-title">{t('contacto.pageTitle')}</h2>
          <p>{t('contacto.pageSubtitle')}</p>
        </div>
      </section>

      <section className="contacto-info" aria-label={t('contacto.pageTitle')}>
        <div className="contacto-info-grid">
          {infoCards.map((card) => (
            <TarjetaContacto
              key={card.titleKey}
              icon={card.icon}
              titleKey={card.titleKey}
              valueKey={card.valueKey}
            />
          ))}
        </div>
      </section>

      <ContactoFormulario />
    </PageWrapper>
  )
}
