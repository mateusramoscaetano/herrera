"use client"

import { SectionLabel } from "@/components/ui/section-label"
import { BentoTile } from "@/components/ui/bento-tile"
import { BentoSection } from "@/components/motion/bento-section"
import { copy } from "@/lib/copy"
import { foodVideos } from "@/lib/media"

export function CateringExperience() {
  const { catering } = copy
  const [vMain, vSide] = [foodVideos[2], foodVideos[3]]

  return (
    <BentoSection
      id="experiencias"
      className="relative overflow-hidden bg-cream py-16 text-ink md:py-24"
      dataHeaderTheme="light"
      dataSection="catering"
    >
      <div className="mx-auto max-w-350 px-3 md:px-4">
        <div className="mb-6 px-3 md:px-2">
          <SectionLabel tone="dark">{catering.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-none">
            {catering.titleLine1}
            <br />
            {catering.titleLine2}
          </h2>
          <p className="mt-4 max-w-lg font-sans text-sm text-ink/70 md:text-base">
            {catering.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-1.5 md:gap-2">
          <BentoTile
            span="col-span-12 md:col-span-4 md:row-span-2 min-h-[240px] md:min-h-[520px]"
            tone="wine"
            title={catering.steps[0].title}
            subtitle={catering.steps[0].description}
            imageKey={catering.steps[0].imageKey}
          />
          <BentoTile
            span="col-span-12 md:col-span-5 min-h-[280px] md:min-h-[360px]"
            videoSrc={vMain.src}
            videoPoster={vMain.poster}
            videoLabel={vMain.label}
            title="Tem ritmo."
            subtitle="Produção em movimento."
          />
          <BentoTile
            span="col-span-6 md:col-span-3 min-h-[220px] md:min-h-[360px]"
            title={catering.steps[1].title}
            subtitle={catering.steps[1].description}
            imageKey={catering.steps[1].imageKey}
          />
          <BentoTile
            span="col-span-6 md:col-span-3 min-h-[220px]"
            tone="sage"
            title={catering.steps[2].title}
            subtitle={catering.steps[2].description}
          />
          <BentoTile
            span="col-span-12 md:col-span-4 min-h-[260px]"
            videoSrc={vSide.src}
            videoPoster={vSide.poster}
            videoLabel={vSide.label}
          />
          <BentoTile
            span="col-span-12 md:col-span-8 min-h-[280px] md:min-h-[320px]"
            title={catering.steps[3].title}
            subtitle={catering.steps[3].description}
            imageKey={catering.steps[3].imageKey}
          />
        </div>
      </div>
    </BentoSection>
  )
}
