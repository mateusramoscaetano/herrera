"use client"

import { useRef, ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "@/lib/gsap"

interface BentoSectionProps {
  children: ReactNode
  className?: string
  id?: string
  dataHeaderTheme?: "light" | "dark"
  dataSection?: string
  ariaLabelledBy?: string
}

export function BentoSection({
  children,
  className = "",
  id,
  dataHeaderTheme,
  dataSection,
  ariaLabelledBy,
}: BentoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const root = sectionRef.current
      if (!root) return

      const mm = gsap.matchMedia()
      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          if (context.conditions?.reduceMotion) return

          const items = root.querySelectorAll("[data-bento-item]")
          if (!items.length) return

          gsap.from(items, {
            y: 56,
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root,
              start: "top 82%",
              once: true,
            },
          })
        },
      )

      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      id={id}
      className={className}
      data-header-theme={dataHeaderTheme}
      data-section={dataSection}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  )
}
