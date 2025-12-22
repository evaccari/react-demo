import i18n from "i18next"
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next"
import en from "./dictionaries/en.json"
import fr from "./dictionaries/fr.json"

export function initLanguage() {
    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },
        fallbackLng: "en",
        resources: {
            en: { translation: en },
            fr: { translation: fr },
        }
    })

    window.addEventListener("storage", (event) => {
        if (event.key === "i18nextLng" && event.newValue && i18n.language !== event.newValue) {
            i18n.changeLanguage(event.newValue)
        }
    })

    return i18n
}