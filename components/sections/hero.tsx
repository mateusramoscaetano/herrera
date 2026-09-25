import { ChevronDown } from "lucide-react"
import { ImageReveal } from "@/components/ui/image-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Parallax } from "@/components/motion/parallax"
import { EditorialVideo } from "@/components/ui/editorial-video"
import { copy } from "@/lib/copy"
import { heroVideo } from "@/lib/media"
import { site } from "@/lib/site"

export function Hero() {
  const { hero } = copy

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-cream"
      data-header-theme="dark"
      data-section="hero"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -left-20 top-32 h-64 w-64 rounded-full bg-olive blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-wine blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-[1400px] grid-cols-1 items-end gap-10 px-6 pb-20 pt-28 md:grid-cols-12 md:items-center md:gap-6 md:px-10 md:pb-24 md:pt-32">
        <div className="relative z-10 md:col-span-6 lg:col-span-5">
          <p className="mb-4 font-sans text-[0.65rem] tracking-[0.5em] text-cream/60">
            {hero.label}
          </p>
          <p className="mb-10 font-sans text-[0.6rem] uppercase tracking-[0.45em] text-gold">
            {hero.concept}
          </p>
          <h1 className="font-serif text-[clamp(2.25rem,7vw,4.75rem)] leading-[0.92] tracking-tight">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
            <br />
            <span className="text-gold">{hero.titleAccent}</span>
          </h1>
          <p className="mt-10 max-w-md font-sans text-sm leading-relaxed text-cream/75 md:text-base">
            {hero.subtitle}
            <br />
            {site.tagline}
          </p>
          <div className="mt-12">
            <MagneticButton href={site.proposalHref}>
              {hero.cta}
            </MagneticButton>
          </div>
        </div>

        <div className="relative md:col-span-6 lg:col-span-7">
          <Parallax speed={0.15} className="relative">
            <ImageReveal
              direction="left"
              className="relative ml-auto aspect-[4/5] w-full max-w-[520px] md:aspect-[3/4] md:-mr-8 lg:max-w-[580px]"
            >
              <div
                className="absolute -inset-4 border border-gold/20 md:-inset-6"
                aria-hidden="true"
                data-hero-frame
              />
              <div
                className="relative h-full w-full overflow-hidden"
                data-hero-media
                data-video-slot
              >
                <EditorialVideo
                  src={heroVideo.src}
                  poster={heroVideo.poster}
                  label={heroVideo.label}
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"
                  aria-hidden="true"
                />
              </div>
            </ImageReveal>
          </Parallax>

          <div
            className="absolute -bottom-6 left-0 hidden h-32 w-32 border border-cream/15 md:block lg:-left-16"
            aria-hidden="true"
            data-hero-graphic
          />
        </div>
      </div>

      <a
        href="#manifesto"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-sans text-[0.6rem] tracking-[0.35em] text-cream/50 transition-colors hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      >
        <span>Scroll</span>
        <ChevronDown className="h-4 w-4 animate-pulse" aria-hidden="true" />
      </a>
    </section>
  )
}
