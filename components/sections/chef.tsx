import Image from "next/image"
import { SectionLabel } from "@/components/ui/section-label"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { copy } from "@/lib/copy"
import { chefPortrait, texturePatterns } from "@/lib/media"
import { site } from "@/lib/site"

export function Chef() {
  const { chef } = copy

  return (
    <section
      id="chef"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-cream"
      data-header-theme="dark"
      data-section="chef"
    >
      <div className="absolute inset-0 md:left-[38%]">
        <Image
          src={chefPortrait.src}
          alt={chefPortrait.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 62vw"
          className="object-cover object-[center_15%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent md:from-ink md:via-ink/55 md:to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30"
          aria-hidden="true"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${texturePatterns.wine})`,
          backgroundSize: "480px auto",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-32 md:justify-center md:px-10 md:pb-24 md:pt-28">
        <div className="max-w-xl md:max-w-2xl">
          <SectionLabel tone="gold">{chef.label}</SectionLabel>
          <h2 className="mt-6 font-serif text-[clamp(3.25rem,11vw,7rem)] leading-[0.88]">
            {chef.titleLine1}
            <br />
            <span className="text-gold">{chef.titleLine2}</span>
          </h2>
          <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-cream/80 md:text-base">
            {chef.lead}
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-cream/15 pt-10 font-sans text-xs uppercase tracking-[0.22em] text-cream/60">
            {chef.pillars.map((pillar) => (
              <div key={pillar.term}>
                <dt className="text-gold">{pillar.term}</dt>
                <dd className="mt-2 normal-case tracking-normal text-cream/85">
                  {pillar.detail}
                </dd>
              </div>
            ))}
          </dl>

          <p
            className="mt-14 font-serif text-3xl italic text-gold/95 md:text-4xl"
            aria-label={`Assinatura ${chef.signature}`}
          >
            {chef.signature}
          </p>

          <div className="mt-12">
            <MagneticButton href={site.proposalHref} variant="outline">
              Criar uma experiência
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
