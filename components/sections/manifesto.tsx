"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { TextReveal } from "@/components/ui/text-reveal"
import { gsap } from "@/lib/gsap"
import { copy } from "@/lib/copy"

export function Manifesto() {
  const { manifesto } = copy
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const root = sectionRef.current
      if (!root) return

      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(root.querySelectorAll("[data-word]"), {
          y: 24,
          autoAlpha: 0,
          duration: 0.75,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 78%",
            once: true,
          },
        })
      })

      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative overflow-hidden bg-brand-linen px-6 py-28 text-ink md:px-10 md:py-40"
      data-header-theme="light"
      data-section="manifesto"
    >
      <div className="mx-auto max-w-[1400px]">
        <TextReveal
          as="h2"
          dataReveal="words"
          className="max-w-5xl font-serif text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.05]"
        >
          {manifesto.headlineWords.map((word) => (
            <span key={word} data-word>
              {word}{" "}
            </span>
          ))}
        </TextReveal>

        <div className="mt-16 max-w-3xl space-y-6 md:mt-24 md:pl-[min(18vw,12rem)]">
          <TextReveal
            as="p"
            dataReveal="lines"
            className="font-sans text-base leading-relaxed text-ink/75 md:text-lg"
          >
            {manifesto.body.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </TextReveal>
        </div>

        <p className="mt-20 max-w-3xl font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] leading-snug text-wine md:mt-28">
          {manifesto.closing}
        </p>
        <p className="mt-10 font-serif text-2xl italic text-gold md:text-3xl">
          {manifesto.signature}
        </p>
      </div>

      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
    </section>
  )
}
