import type { ReactNode } from "react"

interface Props {
    children: ReactNode
    open: boolean
}

export function Collapsible({ open, children }: Props) {
    return (
        <div className="mt-4" style={{ display: open ? "block" : "none"}}>
            {children}
        </div>
    )
}