"use client"

import { SectionLabel } from "@/components/ui/section-label"
import { BentoTile } from "@/components/ui/bento-tile"
import { BentoSection } from "@/components/motion/bento-section"
import { copy } from "@/lib/copy"

export function Process() {
  const { process } = copy

  return (
    <BentoSection
      className="relative overflow-hidden bg-brand-linen py-16 text-ink md:py-24"
      dataHeaderTheme="light"
      dataSection="process"
    >
      <div className="mx-auto max-w-[1400px] px-3 md:px-4">
        <div className="mb-6 px-3 md:px-2">
          <SectionLabel tone="dark">{process.label}</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-none">
            {process.titleLine1}
            <br />
            {process.titleLine2}
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-sm text-ink/70 md:text-base">
            {process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-1.5 md:grid-cols-5 md:gap-2">
          {process.steps.map((step, index) => (
            <BentoTile
              key={step.id}
              className="min-h-[140px] md:min-h-[300px]"
              tone={index % 2 === 0 ? "wine" : "cream"}
              title={step.title}
              interactive={false}
            />
          ))}
        </div>
      </div>
    </BentoSection>
  )
}
