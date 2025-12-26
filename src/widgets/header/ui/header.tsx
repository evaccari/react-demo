import { useAuth0 } from '@auth0/auth0-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { LogoutButton } from '@/features/auth'
import { ROUTES } from '@/shared/config'
import { LanguageSwitcher } from '@/shared/ui/language-switcher'
import { ThemeSwitcher } from '@/shared/ui/theme-switcher'

export function Header() {
  const { isAuthenticated } = useAuth0()
  const { t } = useTranslation()

  return (
    <div className="flex flex-row justify-between items-center p-4 bg-base-200">
      <div className="flex gap-3">
        {isAuthenticated && (
          <>
            <Link className="btn btn-ghost min-w-[120px]" to={ROUTES.DASHBOARD}>{t('page.dashboard')}</Link>
            <Link className="btn btn-ghost min-w-[120px]" to={ROUTES.SETTINGS}>{t('page.settings')}</Link>
          </>
        )}
      </div>
      <div className="flex gap-3">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <LogoutButton />
      </div>
    </div>
  )
}
