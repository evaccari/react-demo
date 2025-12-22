import { useAuth0 } from "@auth0/auth0-react"
import { useTranslation } from "react-i18next"

export function LoginForm() {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0()
    const { t } = useTranslation()

    const login = async () => {
        await loginWithRedirect()
    }

    if (isLoading) {
        return (
            <p className="text-center text-base-content/70">
                {t("auth.loading")}
            </p>
        )
    }

    if (isAuthenticated) {
        return (
            <p className="text-center text-base-content/70">
                {t("auth.already_logged")}
            </p>
        )
    }

    return (
        <div>
            <button className="btn btn-primary" type="button" onClick={login}>
                {t("auth.login")}
            </button>
        </div>
    )
}