import { createBrowserRouter, Navigate } from "react-router-dom"
import { DashboardPage } from "@/pages/dashboard"
import { LoginPage } from "@/pages/login"
import { SettingsPage } from "@/pages/settings"
import { ROUTES } from "@/shared/config"
import { AuthGuard } from "./auth-guard"
import { GuestGuard } from "./guest-gard"

export const router = createBrowserRouter([
    {
      element: (
        <GuestGuard>
          <LoginPage />
        </GuestGuard>
      ),
      path: ROUTES.LOGIN,
    },
    {
      element: (
        <AuthGuard>
          <DashboardPage />
        </AuthGuard>
      ),
      path: ROUTES.DASHBOARD,
    },
    {
      element: (
        <AuthGuard>
          <SettingsPage />
        </AuthGuard>
      ),
      path: ROUTES.SETTINGS,
    },
    {
      path: "*",
      element: <Navigate to={ROUTES.DASHBOARD} replace />,
    }
  ])