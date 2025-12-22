import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Collapsible } from "@/widgets/collapsible"
import { Header } from "@/widgets/header"
import { InfoBanner } from "@/widgets/info-banner"
import { SettingsDescription } from "@/widgets/settings"

export function SettingsPage() {
    const { t } = useTranslation()
    const [show, setShow] = useState(true)

    const buttonLabel = show ? t("settings.hide") : t("settings.display")

    return (
        <div className="min-h-screen bg-base-100 text-base-content">
            <Header />

            <main className="mx-auto max-w-5xl p-6 space-y-6">
                <h1 className="text-3xl font-bold">
                    {t("page.settings")}
                </h1>

                <button className="btn btn-info w-fit" type="button" onClick={() => setShow((show: boolean) => !show)}>{buttonLabel}</button>

                <div>
                    <InfoBanner message={t("settings.info_message")} show={show} />

                    <Collapsible open={show}>
                        <SettingsDescription />
                    </Collapsible>
                </div>
            </main>
        </div>
    )
}