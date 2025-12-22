import type { ReactNode } from "react"
import type { Theme } from "@/shared/model"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { DEFAULT_THEME, getNewTheme, isValidTheme, ThemeContext } from "@/shared/model"

interface Props {
    children: ReactNode
}

const CHANNEL_NAME = "theme"
const STORAGE_KEY = "app-theme"
const DAISYUI_TAG = "data-theme"
const EVENT_LISTENER = "message"

export function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        return isValidTheme(stored) ? stored : DEFAULT_THEME
    })

    const refChannel = useRef<BroadcastChannel | undefined>(undefined)

    useEffect(() => {
        const channel = new BroadcastChannel(CHANNEL_NAME)
        refChannel.current = channel

        const handler = (e: MessageEvent) => setTheme(e.data as Theme)
        channel.addEventListener(EVENT_LISTENER, handler)

        document.documentElement.setAttribute(DAISYUI_TAG, theme)

        return () => {
            channel.removeEventListener(EVENT_LISTENER, handler)
            channel.close()
        }
    })

    const toggleTheme = useCallback((currentTheme: Theme) => {
        const newTheme = getNewTheme(currentTheme)
        setTheme(newTheme)
        localStorage.setItem(STORAGE_KEY, newTheme)
        document.documentElement.setAttribute(DAISYUI_TAG, newTheme)
        refChannel.current?.postMessage(newTheme)
    }, [])

    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

    return <ThemeContext value={value}>{children}</ThemeContext>
}