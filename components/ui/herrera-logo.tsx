import Image from "next/image"
import Link from "next/link"
import { brandLogo } from "@/lib/media"

interface HerreraLogoProps {
  variant?: "dark" | "light"
  className?: string
}

export function HerreraLogo({
  variant = "dark",
  className = "",
}: HerreraLogoProps) {
  const src = variant === "light" ? brandLogo.onLight : brandLogo.onDark

  return (
    <Link
      href="/"
      className={`relative block h-9 w-9 shrink-0 overflow-hidden rounded-sm md:h-10 md:w-10 ${className}`}
      aria-label="Herrera Gastronomia — início"
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="40px"
        className="object-cover"
        priority
      />
    </Link>
  )
}
