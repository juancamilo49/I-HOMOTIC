import '../Styles/Home.css'
import { automatizacion, iluminacion, seguridad, casa } from '../assets/imagenes'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import servicios from '../components/Tarjetas1/servicios.json'
import TarjetaInfo from '../components/Tarjetas1/TarjetaInfo'
import PageWrapper from '../components/comunes/PageWrapper'
import SectionHeader from '../components/comunes/SectionHeader'

const imagenesMap: Record<string, string> = {
  automatizacion,
  iluminacion,
  seguridad,
}

export default function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title">{t('hero.title')}</h1>
          <h2>{t('hero.subtitle')}</h2>
          <p>{t('hero.description')}</p>
          <div className="hero-actions">
            <button
              className="hero-button"
              onClick={() => {
                window.open(
                  'https://wa.me/573014032120?text=Hola,%20quiero%20información%20sobre%20domótica',
                  '_blank'
                )
                Swal.fire({
                  title: t('hero.messageSent'),
                  icon: 'success',
                  draggable: true,
                  confirmButtonColor: '#07573B',
                })
              }}
            >
              {t('hero.contact')}
            </button>
            <button className="hero-button hero-button--secondary" onClick={() => navigate('/mapa')}>
              {t('hero.exploreMap')}
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={casa} alt={t('hero.title')} />
        </div>
      </section>

      <section className="servicios" aria-labelledby="services-title">
        <SectionHeader titleKey="services.title" descriptionKey="services.description" centered />
        <div className="servicios-tarjetas">
          {servicios.map((servicio) => (
            <TarjetaInfo
              key={servicio.tituloKey}
              imagen={imagenesMap[servicio.imagen]}
              tituloKey={servicio.tituloKey}
              descripcionKey={servicio.descripcionKey}
            />
          ))}
        </div>
      </section>

      <section className="proyectos" aria-labelledby="projects-title">
        <div className="proyectos-content">
          <div className="proyectos-info">
            <h2 id="projects-title">{t('projects.title')}</h2>
            <h4>{t('projects.subtitle')}</h4>
            <p>{t('projects.villaDescription')}</p>
            <button className="proyectos-button" onClick={() => navigate('/proyectos')}>
              {t('projects.viewProject')}
            </button>
          </div>
          <div className="proyectos-img">
            <img src={casa} alt={t('projects.title')} />
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
