import { useTranslation } from 'react-i18next'
import { Header } from '@/widgets/header'

export function DashboardPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Header />

      <main className="mx-auto max-w-5xl p-6 space-y-6">
        <h1 className="text-3xl font-bold">
          {t('page.dashboard')}
        </h1>

        <span>{t('dashboard.message')}</span>
      </main>
    </div>
  )
}
