import '../Styles/Servicios.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { automatizacion, iluminacion, seguridad } from '../assets/imagenes'
import PageWrapper from '../components/comunes/PageWrapper'

const imagenesMap: Record<string, string> = { automatizacion, iluminacion, seguridad }

const serviciosList = [
  { imagen: 'automatizacion', tituloKey: 'services.automationTitle', descripcionKey: 'services.automationDescription' },
  { imagen: 'iluminacion',    tituloKey: 'services.lightingTitle',   descripcionKey: 'services.lightingDescription'   },
  { imagen: 'seguridad',      tituloKey: 'services.securityTitle',   descripcionKey: 'services.securityDescription'   },
]

const diferenciadores = [
  { icono: '🇨🇴', tituloKey: 'services.diff1Title', descripcionKey: 'services.diff1Desc' },
  { icono: '💸',   tituloKey: 'services.diff2Title', descripcionKey: 'services.diff2Desc' },
  { icono: '🎙️',  tituloKey: 'services.diff3Title', descripcionKey: 'services.diff3Desc' },
]

export default function Servicios() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <section className="servicios-hero" aria-labelledby="servicios-title">
        <h1 id="servicios-title">{t('services.pageTitle')}</h1>
        <p>{t('services.pageSubtitle')}</p>
      </section>

      <section className="servicios-detalle" aria-labelledby="servicios-detalle-title">
        <h2 id="servicios-detalle-title">{t('services.title')}</h2>
        <div className="servicios-detalle-grid">
          {serviciosList.map((s) => (
            <article className="servicio-card" key={s.tituloKey}>
              <img src={imagenesMap[s.imagen]} alt={t(s.tituloKey)} />
              <h2>{t(s.tituloKey)}</h2>
              <p>{t(s.descripcionKey)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="diferenciadores" aria-labelledby="diff-title">
        <h2 id="diff-title">{t('services.diffTitle')}</h2>
        <div className="diferenciadores-grid">
          {diferenciadores.map((d) => (
            <div className="diferenciador-item" key={d.tituloKey}>
              <span className="diferenciador-icono" aria-hidden="true">{d.icono}</span>
              <h3>{t(d.tituloKey)}</h3>
              <p>{t(d.descripcionKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="servicios-cta">
        <h2>{t('services.ctaTitle')}</h2>
        <p>{t('services.ctaDesc')}</p>
        <div className="servicios-cta-acciones">
          <button className="btn-primario" onClick={() => navigate('/contacto')}>
            {t('hero.contact')}
          </button>
          <button className="btn-secundario" onClick={() => navigate('/mapa')}>
            {t('hero.exploreMap')}
          </button>
        </div>
      </section>
    </PageWrapper>
  )
}
