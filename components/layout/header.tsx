"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HerreraLogo } from "@/components/ui/herrera-logo"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { navItems, site } from "@/lib/site"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [headerTone, setHeaderTone] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 48)
      const sections = document.querySelectorAll("[data-header-theme]")
      let tone: "dark" | "light" = "dark"
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 80 && rect.bottom >= 80) {
          tone =
            section.getAttribute("data-header-theme") === "light"
              ? "light"
              : "dark"
        }
      })
      setHeaderTone(tone)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const isLightHeader = headerTone === "light" && !isMenuOpen
  const textClass = isLightHeader ? "text-ink" : "text-cream"
  const mutedClass = isLightHeader ? "text-ink/60" : "text-cream/70"

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "border-b border-cream/10 bg-ink/55 backdrop-blur-md"
          : "bg-transparent"
      } ${isLightHeader && isScrolled ? "border-ink/10 bg-cream/85" : ""}`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-[4.5rem] md:px-10">
        <div className="flex items-center gap-3">
          <HerreraLogo variant={isLightHeader ? "light" : "dark"} />
          <Link
            href="/"
            className={`hidden font-sans text-xs tracking-[0.45em] transition-colors sm:inline ${textClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold`}
          >
            {site.shortName}
          </Link>
        </div>

        <nav
          className={`hidden items-center gap-10 lg:flex ${mutedClass}`}
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-sans text-[0.65rem] tracking-[0.28em] transition-colors hover:opacity-100 ${isLightHeader ? "hover:text-ink" : "hover:text-cream"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={site.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-sans text-[0.65rem] tracking-[0.2em] ${mutedClass} hover:opacity-100`}
          >
            Instagram
          </a>
          <MagneticButton
            href={site.proposalHref}
            variant={isLightHeader ? "outline" : "primary"}
            className={
              isLightHeader
                ? "!border-ink/30 !text-ink hover:!bg-ink/5"
                : ""
            }
          >
            Solicitar proposta
          </MagneticButton>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <MagneticButton
            href={site.proposalHref}
            variant="ghost"
            className={`!p-2 !text-[0.6rem] ${textClass}`}
          >
            Proposta
          </MagneticButton>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 ${textClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-wine/95 backdrop-blur-lg transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav
          className="flex h-full flex-col justify-center gap-8 px-10 pt-20"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-3xl text-cream"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm tracking-[0.2em] text-cream/70"
          >
            {site.instagram}
          </a>
        </nav>
      </div>
    </header>
  )
}
