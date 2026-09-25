import { ReactNode } from "react"

interface SectionLabelProps {
  children: ReactNode
  className?: string
  tone?: "light" | "dark" | "gold"
}

export function SectionLabel({
  children,
  className = "",
  tone = "dark",
}: SectionLabelProps) {
  const toneClass =
    tone === "light"
      ? "text-cream/70"
      : tone === "gold"
        ? "text-gold"
        : "text-ink/50"

  return (
    <p
      className={`font-sans text-[0.65rem] uppercase tracking-[0.35em] ${toneClass} ${className}`}
    >
      {children}
    </p>
  )
}
