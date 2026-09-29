"use client"

import { SectionLabel } from "@/components/ui/section-label"
import { BentoTile } from "@/components/ui/bento-tile"
import { BentoSection } from "@/components/motion/bento-section"
import { copy } from "@/lib/copy"

const eventSpans = [
  "col-span-12 md:col-span-7 min-h-[320px] md:min-h-[420px]",
  "col-span-6 md:col-span-5 min-h-[240px]",
  "col-span-6 md:col-span-4 min-h-[240px]",
  "col-span-12 md:col-span-4 min-h-[280px]",
  "col-span-6 md:col-span-4 min-h-[260px]",
  "col-span-6 md:col-span-8 min-h-[280px] md:min-h-[320px]",
]

export function Events() {
  const { events } = copy

  return (
    <BentoSection
      id="eventos"
      className="relative overflow-hidden bg-brand-linen py-16 text-ink md:py-24"
      dataHeaderTheme="light"
      dataSection="events"
    >
      <div className="mx-auto max-w-350 px-3 md:px-4">
        <div className="mb-6 px-3 md:px-2">
          <SectionLabel tone="dark">{events.label}</SectionLabel>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-tight">
           Cada evento pede uma
            <br />
            <span className="text-wine">gastronomia diferente.</span>
          </h2>
        </div>

        <div className="flex gap-1.5 md:gap-2 flex-col md:flex-row">
          {events.items.map((item, index) => (
            <BentoTile
              key={item.id}
              span={eventSpans[index]  ?? "col-span-12 min-h-[240px]"}
              imageKey={item.imageKey}
              title={item.title}
              subtitle={item.quote}
              interactive
            />
          ))}
        </div>
      </div>
    </BentoSection>
  )
}
