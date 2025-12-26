import { useTranslation } from 'react-i18next'

interface Props {
  message: string
  show: boolean
}

export function InfoBanner({ message, show }: Props) {
  const { t } = useTranslation()

  if (!show || message.trim() === '')
    return null

  return (
    <div className="alert alert-info">
      <span>{t(message)}</span>
    </div>
  )
}
