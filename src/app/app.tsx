import { RouterProvider } from "react-router-dom"
import { initLanguage } from "@/shared/config"
import { AuthProvider, ThemeProvider } from "./providers"
import { router } from "./router"

initLanguage()

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  )
}