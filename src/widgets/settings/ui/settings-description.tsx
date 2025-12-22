import { useTranslation } from "react-i18next"

interface Setting {
    id: string
    description: string
}

const settings: Setting[] = [
    { id: "language", description: "settings.language" },
    { id: "theme", description: "settings.theme" }
]

export function SettingsDescription() {
    const { t } = useTranslation()

    const elements = settings.map((setting) => (
        <li className="list-row list-col-wrap list-col-grow" key={setting.id}>{t(setting.description)}</li>
    ))

    return <ul className="list bg-base-200 rounded-box p-4 space-y-2">{elements}</ul>
}