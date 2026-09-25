import { MagneticButton } from "@/components/ui/magnetic-button"
import { copy } from "@/lib/copy"
import { site } from "@/lib/site"

export function FinalCTA() {
  const { cta } = copy

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-wine px-6 py-28 text-cream md:px-10 md:py-40"
      data-header-theme="dark"
      data-section="cta"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#636341_0%,transparent_55%)] opacity-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <h2 className="max-w-4xl font-serif text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95]">
          {cta.titleLine1}
          <br />
          {cta.titleLine2}
          <br />
          {cta.titleLine3}
          <br />
          <span className="text-gold">{cta.titleAccent}</span>
        </h2>

        <div className="mt-14 flex flex-col gap-8 md:mt-20 md:flex-row md:items-center md:gap-12">
          <MagneticButton href={site.whatsappHref} external>
            {cta.button}
          </MagneticButton>

          <div className="space-y-2 font-sans text-sm text-cream/75">
            <a
              href={site.phoneHref}
              className="block hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              {site.phone}
            </a>
            <a
              href={site.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              {site.instagram}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
