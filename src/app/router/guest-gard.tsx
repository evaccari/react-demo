import type { JSX } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config'

interface Props {
  children: JSX.Element
}

export function GuestGuard({ children }: Props) {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading)
    return null
  return isAuthenticated ? <Navigate to={ROUTES.DASHBOARD} replace /> : children
}
