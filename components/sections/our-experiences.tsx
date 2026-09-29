"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { BentoSection } from "@/components/motion/bento-section"
import { SectionLabel } from "@/components/ui/section-label"
import { copy } from "@/lib/copy"
import { gsap } from "@/lib/gsap"
import { texturePatterns } from "@/lib/media"

export function OurExperiences() {
  const { ourExperiences } = copy
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

          gsap.from(root.querySelectorAll("[data-experience-title] span"), {
            y: 28,
            autoAlpha: 0,
            duration: 0.85,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root.querySelector("[data-experience-head]"),
              start: "top 85%",
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
    <BentoSection
      className="relative overflow-hidden bg-olive py-16 text-cream md:py-24"
      dataHeaderTheme="dark"
      dataSection="our-experiences"
      ariaLabelledBy="our-experiences-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${texturePatterns.wine})`,
          backgroundSize: "480px auto",
        }}
      />

      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="relative mx-auto max-w-350 px-3 md:px-4"
      >
        <div
          className="grid gap-10 md:grid-cols-12 md:gap-8 lg:gap-12"
          data-experience-head
        >
          <div
            className="md:col-span-5 md:sticky md:top-28 md:self-start"
            data-bento-item
          >
            <SectionLabel tone="light">{ourExperiences.label}</SectionLabel>
            <h2
              id="our-experiences-heading"
              data-experience-title
              className="mt-4 font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-[0.95] text-balance uppercase"
            >
              <span className="block ">{ourExperiences.titleLine1}</span>
              <span className="mt-1 block text-gold">
                {ourExperiences.titleLine2}
              </span>
            </h2>
            {ourExperiences.lead ? (
              <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-cream/75 md:text-base">
                {ourExperiences.lead}
              </p>
            ) : null}
          </div>

          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:col-span-7 md:gap-x-10 md:gap-y-12 md:border-t md:border-cream/15 md:pt-10">
            {ourExperiences.items.map((item) => (
              <li key={item.id} data-bento-item className="min-w-0">
                <h3 className="font-serif text-2xl italic normal-case text-gold md:text-[1.65rem]">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-cream/80 md:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BentoSection>
  )
}
