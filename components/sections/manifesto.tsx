"use client"

import { Fragment, useRef } from "react"
import { useGSAP } from "@gsap/react"
import { TextReveal } from "@/components/ui/text-reveal"
import { gsap } from "@/lib/gsap"
import { copy } from "@/lib/copy"

export function Manifesto() {
  const { manifesto } = copy
  const sectionRef = useRef<HTMLElement>(null)

  const indexNumber = Math.random()

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
      className="relative flex items-center justify-center min-h-dvh  overflow-hidden bg-brand-linen px-6  pb-14 text-ink md:px-10  md:pb-10"
      data-header-theme="light"
      data-section="manifesto"
    >
      <div className="hidden md:block absolute bottom-20 right-0 xl:right-30">
          <img
            className="   h-32 w-32 border border-cream/15 md:block "
            aria-hidden="true"
            data-hero-graphic
            src={"/logo-1@3x.png"}
            alt=""
            width={"100%"}
            height={32}
          />
           <img
            className="   h-32 w-32 border border-cream/15 md:block "
            aria-hidden="true"
            data-hero-graphic
            src={"/logo-2@3x.png"}
            alt=""
            width={"100%"}
            height={32}
          />
           <img
            className="   h-32 w-32 border border-cream/15 md:block "
            aria-hidden="true"
            data-hero-graphic
            src={"/logo-5@3x.png"}
            alt=""
            width={"100%"}
            height={32}
          />
           <img
            className="   h-32 w-32 border border-cream/15 md:block "
            aria-hidden="true"
            data-hero-graphic
            src={"/logo-4@3x.png"}
            alt=""
            width={"100%"}
            height={32}
          />

</div>
      <div className="mx-auto max-w-350">
        <TextReveal
        index={Math.random()}
          as="h2"
          dataReveal="words"
          className="max-w-5xl font-serif text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.05]"
        >
          {manifesto.headlineWords.map((word, index) => (
            <Fragment key={index}>
              <span data-word className="uppercase">
                {word}
              </span>
              {" "}
            </Fragment>
          ))}
        </TextReveal>

       <div className="flex flex-col relative w-full h-full">
       <div className="mt-8 max-w-3xl space-y-6 md:mt-12 md:pl-[min(18vw,12rem)]">
          <TextReveal
          index={indexNumber}
            as="p"
            dataReveal="lines"
            className="font-sans text-base leading-relaxed text-ink/75 md:text-lg max max-w-90"
          >
          A Herrera é uma empresa de catering e 
          produção gastronômica para eventos, criada 
          pelo Chef Gabriel Herrera
          </TextReveal>
        </div>

        <div className="mt-8 max-w-3xl space-y-6 md:mt-12 md:pl-[min(18vw,12rem)]">
          <TextReveal
          index={indexNumber}
            as="p"
            dataReveal="lines"
            className="font-sans text-base leading-relaxed text-ink/75 md:text-lg max-w-105"
          >
            Criamos menus, estruturamos operações e
            executamos experiências gastronômicas que
            conversam com o perfil de cada eventos, do
            primeiro conceito ao ultimo serviço.
          </TextReveal>
        </div>

       
       </div>

        
        <p className=" absolute bottom-20 font-serif  tracking-wider italic text-wine md:text-3xl">
          {manifesto.signature}
        </p>
      </div>

      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-105 w-105 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
    </section>
  )
}
