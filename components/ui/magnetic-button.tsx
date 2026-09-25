import Link from "next/link"
import { ReactNode } from "react"

interface MagneticButtonProps {
  href: string
  children: ReactNode
  variant?: "primary" | "outline" | "ghost"
  className?: string
  external?: boolean
}

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: MagneticButtonProps) {
  const base =
    "inline-flex items-center justify-center font-sans text-[0.7rem] uppercase tracking-[0.25em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"

  const variants = {
    primary:
      "border border-gold/80 bg-gold/10 px-8 py-4 text-cream hover:bg-gold/25",
    outline:
      "border border-cream/30 px-8 py-4 text-cream hover:border-cream hover:bg-cream/5",
    ghost: "px-4 py-2 text-cream/80 hover:text-cream underline-offset-4 hover:underline",
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
