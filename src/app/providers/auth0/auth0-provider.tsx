import type { ReactNode } from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { ROUTES } from '@/shared/config'

interface Props {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  useEffect(() => {
    const logout = (e: StorageEvent) => {
      if (e.key?.startsWith('@@auth0spajs@@') && e.key?.endsWith('@@user@@') && e.oldValue && !e.newValue && window.location.pathname !== ROUTES.LOGIN) {
        window.location.href = ROUTES.LOGIN
      }
    }

    window.addEventListener('storage', logout)
    return () => window.removeEventListener('storage', logout)
  }, [])

  return (
    <Auth0Provider
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      useRefreshTokens={true}
    >
      {children}
    </Auth0Provider>
  )
}
