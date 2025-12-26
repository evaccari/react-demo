import { useTranslation } from 'react-i18next'
import { getNewLanguage } from '../model/i18n'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  const newLanguage = getNewLanguage(i18n.language)
  const toggleLanguage = () => i18n.changeLanguage(newLanguage)

  return (
    <button className="btn btn-outline btn-sm" type="button" onClick={toggleLanguage}>
      {t('language.switch', { language: t(`language.${i18n.language}`) })}
    </button>
  )
}
