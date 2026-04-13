import { useTranslation } from 'react-i18next'
import './TarjetaContacto.css'

interface Props {
  icon: React.ReactNode
  titleKey: string
  valueKey: string
}

export default function TarjetaContacto({ icon, titleKey, valueKey }: Props) {
  const { t } = useTranslation()

  return (
    <article className="contacto-info-card">
      <div className="contacto-info-icon" aria-hidden="true">{icon}</div>
      <h3>{t(titleKey)}</h3>
      <p>{t(valueKey)}</p>
    </article>
  )
}
