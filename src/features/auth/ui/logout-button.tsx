import type { LogoutOptions } from "@auth0/auth0-react"
import { useAuth0 } from "@auth0/auth0-react"
import { useTranslation } from "react-i18next"

export function LogoutButton() {
    const { t } = useTranslation()
    const { logout } = useAuth0()
    const options: LogoutOptions = {
        logoutParams: {
            returnTo: window.location.origin
        }
    }

    return <button type="button" className="btn btn-error btn-sm" onClick={() => logout(options)}>{t("auth.logout")}</button>
}