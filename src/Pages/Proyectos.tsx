import '../Styles/Proyectos.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { CasaModerna, casa2 } from '../assets/imagenes'
import proyectos from '../components/Tarjetas2/otros-proyectos.json'
import TarjetaProyecto from '../components/Tarjetas2/Tarjeta2Info'
import PageWrapper from '../components/comunes/PageWrapper'
import SectionHeader from '../components/comunes/SectionHeader'
import CalculadoraPrecios from '../components/calculadora-precios/calculadora-precios'

const imagenesMap: Record<string, string> = {
  casa2,
}

export default function Proyectos() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <section
        className="inicio-proyectos"
        style={{ backgroundImage: `url(${CasaModerna})` }}
        aria-labelledby="proyectos-title"
      >
        <div className="inicio-content">
          <h2 id="proyectos-title">{t('projects.pageTitle')}</h2>
          <h2>{t('projects.pageSubtitle')}</h2>
          <p>{t('projects.pageDescription')}</p>
        </div>
      </section>

      <section className="proyecto-muestra" aria-labelledby="proyecto-destacado-title">
        <div className="muestra-imagen">
          <img src={casa2} alt={t('projects.featuredAlt')} />
        </div>
        <div className="muestra-info">
          <h2 id="proyecto-destacado-title">{t('projects.featuredTitle')}</h2>
          <p>{t('projects.featuredDescription')}</p>
          <button className="muestra-button" onClick={() => navigate('/contacto')}>
            {t('projects.viewProject')}
          </button>
        </div>
      </section>

      <section className="otros-proyectos" aria-labelledby="otros-proyectos-title">
        <SectionHeader
          titleKey="projects.otherProjects"
          descriptionKey="projects.otherProjectsDescription"
          centered
        />
        <div className="otros-proyectos-tarjetas">
          {proyectos.map((proyecto) => (
            <TarjetaProyecto
              key={proyecto.tituloKey}
              imagen={imagenesMap[proyecto.imagen]}
              tituloKey={proyecto.tituloKey}
              descripcionKey={proyecto.descripcionKey}
              altKey={proyecto.altKey}
            />
          ))}
        </div>
      </section>

      <CalculadoraPrecios />
    </PageWrapper>
  )
}
