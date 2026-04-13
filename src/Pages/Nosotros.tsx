import '../Styles/Nosotros.css'
import { useTranslation } from 'react-i18next'
import { integrantes } from '../integrantes'
import datos from '../components/grid-datos/grid-datos-info.json'
import TarjetaDato from '../components/grid-datos/grid-datos'
import PageWrapper from '../components/comunes/PageWrapper'
import TarjetaIntegrante from '../components/comunes/TarjetaIntegrante'

export default function Nosotros() {
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <section className="introduccion" aria-labelledby="nosotros-title">
        <div className="introduccion-texto">
          <h2 id="nosotros-title">{t('nosotros.aboutTitle')}</h2>
          <p>{t('nosotros.aboutSubtitle')}</p>
        </div>
        <div className="mas-informacion">
          <div className="introduccion-detalle">
            <p>{t('nosotros.aboutDescription')}</p>
            <ul className="lista-valores" aria-label={t('nosotros.valuesTitle')}>
              <h3>{t('nosotros.valuesTitle')}</h3>
              <li className="valor">{t('nosotros.value1')}</li>
              <li className="valor">{t('nosotros.value2')}</li>
              <li className="valor">{t('nosotros.value3')}</li>
              <li className="valor">{t('nosotros.value4')}</li>
            </ul>
          </div>
          <div className="datos">
            {datos.map((dato) => (
              <TarjetaDato
                key={dato.etiquetaKey}
                valor={dato.valor}
                etiquetaKey={dato.etiquetaKey}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="equipo" aria-labelledby="equipo-title">
        <div className="equipo-texto">
          <h3 id="equipo-title">{t('nosotros.teamTitle')}</h3>
          <p>{t('nosotros.teamSubtitle')}</p>
        </div>
        <div className="equipo-miembros">
          {integrantes.map((persona) => (
            <TarjetaIntegrante
              key={persona.nombre}
              nombre={persona.nombre}
              cargo={persona.cargo}
              foto={persona.foto}
              iniciales={persona.iniciales}
            />
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
