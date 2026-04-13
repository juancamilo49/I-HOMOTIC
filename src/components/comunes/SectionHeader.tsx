import { useTranslation } from 'react-i18next'

interface Props {
  titleKey: string
  descriptionKey?: string
  centered?: boolean
}

export default function SectionHeader({ titleKey, descriptionKey, centered = false }: Props) {
  const { t } = useTranslation()
  const id = titleKey.replace(/\./g, '-')

  return (
    <div className={`section-header${centered ? ' section-header--centered' : ''}`}>
      <h2 id={id}>{t(titleKey)}</h2>
      {descriptionKey && <p>{t(descriptionKey)}</p>}
    </div>
  )
}
