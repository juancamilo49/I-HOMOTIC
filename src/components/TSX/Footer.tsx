import { useTranslation } from 'react-i18next'
import { SiInstagram, SiFacebook, SiX } from 'react-icons/si'
import FooterColumna from '../comunes/FooterColumna'
import '../CSS/Footer.css'

export default function Footer() {
  const { t } = useTranslation()

  const colServicio = [
    { label: t('services.automationTitle'), to: '/servicios' },
    { label: t('services.lightingTitle'),   to: '/servicios' },
    { label: t('services.securityTitle'),   to: '/servicios' },
    { label: t('navbar.mapa'),              to: '/mapa'      },
  ]

  const colEmpresa = [
    { label: t('navbar.nosotros'),  to: '/nosotros'  },
    { label: t('navbar.projects'),  to: '/proyectos' },
    { label: t('navbar.mapa'),      to: '/mapa'      },
    { label: t('navbar.contacto'),  to: '/contacto'  },
  ]

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">

        <div className="footer-marca">
          <h2 className="footer-logo">Ihomotic</h2>
          <p>{t('footer.description')}</p>
          <nav aria-label="Redes sociales" className="footer-redes">
            <a href="https://instagram.com" className="footer-red" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <SiInstagram size={24} />
            </a>
            <a href="https://facebook.com" className="footer-red" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <SiFacebook size={24} />
            </a>
            <a href="https://x.com" className="footer-red" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <SiX size={24} />
            </a>
          </nav>
        </div>

        <FooterColumna titulo={t('footer.services')} links={colServicio} />
        <FooterColumna titulo={t('footer.company')}  links={colEmpresa}  />

      </div>

      <div className="footer-inferior">
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  )
}
