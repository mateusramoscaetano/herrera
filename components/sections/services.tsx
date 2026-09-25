"use client"

import { SectionLabel } from "@/components/ui/section-label"
import { BentoTile } from "@/components/ui/bento-tile"
import { BentoSection } from "@/components/motion/bento-section"
import { copy } from "@/lib/copy"

const serviceSpans = [
  "col-span-12 md:col-span-6 min-h-[280px] md:min-h-[340px]",
  "col-span-6 md:col-span-3 min-h-[220px] md:min-h-[280px]",
  "col-span-6 md:col-span-3 min-h-[220px] md:min-h-[280px]",
  "col-span-12 md:col-span-4 min-h-[260px]",
  "col-span-6 md:col-span-4 min-h-[240px]",
  "col-span-6 md:col-span-4 min-h-[240px]",
]

export function Services() {
  const { services } = copy

  return (
    <BentoSection
      className="relative overflow-hidden bg-wine py-16 text-cream md:py-24"
      dataHeaderTheme="dark"
      dataSection="services"
    >
      <div className="mx-auto max-w-[1400px] px-3 md:px-4">
        <div className="mb-6 px-3 md:px-2">
          <SectionLabel tone="light">{services.label}</SectionLabel>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.25rem)]">
            {services.title}
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-1.5 md:gap-2">
          {services.items.map((item, index) => (
            <BentoTile
              key={item.id}
              span={serviceSpans[index] ?? "col-span-6 min-h-[220px]"}
              imageKey={item.imageKey}
              title={item.title}
              interactive
            />
          ))}
        </div>
      </div>
    </BentoSection>
  )
}
