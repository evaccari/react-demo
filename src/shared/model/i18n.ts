import { createContext, use } from 'react'

export const Languages = {
  ENGLISH: 'en',
  FRENCH: 'fr',
} as const

export type Language = typeof Languages[keyof typeof Languages]
export const DEFAULT_LANGUAGE: Language = Languages.ENGLISH

interface LanguageContextProps {
  language: Language
  setLanguage: (language: Language) => void
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
})

export function useLanguage() {
  return use(LanguageContext)
}

export function isValidLanguage(value: unknown): value is Language {
  return typeof value === 'string' && Object.values(Languages).includes(value as Language)
}

export function getNewLanguage(language: unknown): Language {
  if (!isValidLanguage)
    return DEFAULT_LANGUAGE
  return language === Languages.ENGLISH ? Languages.FRENCH : Languages.ENGLISH
}
