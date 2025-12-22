import { createContext, use } from "react"

export const Themes = {
    DARK: "dark",
    LIGHT: "light",
} as const

export type Theme = typeof Themes[keyof typeof Themes]
export const DEFAULT_THEME: Theme = Themes.LIGHT

interface ThemeContextProps {
    theme: Theme
    toggleTheme: (currentTheme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export function useTheme(): ThemeContextProps {
    const context = use(ThemeContext)
    if (!context) throw new Error("useTheme must be used inside ThemeProvider")
    return context
}

export function isValidTheme(value: unknown): value is Theme {
    return typeof value === "string" && Object.values(Themes).includes(value as Theme)
}

export function getNewTheme(theme: unknown): Theme {
    if (!isValidTheme) return DEFAULT_THEME
    return theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
}