import { useTranslation } from 'react-i18next'

interface Props {
  imagen: string
  tituloKey: string
  descripcionKey: string
}

export default function TarjetaInfo({ imagen, tituloKey, descripcionKey }: Props) {
  const { t } = useTranslation()

  return (
    <article className="tarjetas-info">
      <img src={imagen} alt={t(tituloKey)} />
      <h2>{t(tituloKey)}</h2>
      <p>{t(descripcionKey)}</p>
    </article>
  )
}
