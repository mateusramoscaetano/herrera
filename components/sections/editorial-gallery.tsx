"use client"

import { SectionLabel } from "@/components/ui/section-label"
import { BentoTile } from "@/components/ui/bento-tile"
import { BentoSection } from "@/components/motion/bento-section"
import { galleryLayout } from "@/lib/images"
import { copy } from "@/lib/copy"
import { foodVideos } from "@/lib/media"

const gallerySpans = [
  "col-span-12 md:col-span-7 md:row-span-2 min-h-[360px] md:min-h-[480px]",
  "col-span-6 md:col-span-5 min-h-[200px] md:min-h-[240px]",
  "col-span-6 md:col-span-5 min-h-[200px] md:min-h-[240px]",
  "col-span-7 md:col-span-4 min-h-[240px] md:min-h-[300px]",
  "col-span-5 md:col-span-8 min-h-[220px] md:min-h-[280px]",
  "col-span-12 md:col-span-6 min-h-[240px]",
  "col-span-6 md:col-span-3 min-h-[280px] md:min-h-[360px]",
  "col-span-6 md:col-span-3 min-h-[280px] md:min-h-[360px]",
  "col-span-12 md:col-span-5 min-h-[220px]",
  "col-span-12 md:col-span-7 min-h-[220px]",
]

export function EditorialGallery() {
  const { gallery } = copy

  return (
    <BentoSection
      className="relative overflow-hidden bg-olive py-16 text-cream md:py-24"
      dataHeaderTheme="dark"
      dataSection="gallery"
      ariaLabelledBy="gallery-heading"
    >
      <div className="mx-auto max-w-350 px-3 md:px-4">
        <div className="mb-6 px-3 md:px-2">
          <SectionLabel tone="light">{gallery.label}</SectionLabel>
          <h2
            id="gallery-heading"
            className="mt-4 max-w-2xl font-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-tight"
          >
            {gallery.titleLine1}
            <br />
            {gallery.titleLine2}
          </h2>
          <p className="mt-4 font-serif text-xl italic text-gold/90 md:text-2xl">
            {gallery.aside}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-1.5 md:gap-2">
          {galleryLayout.map((item, index) => (
            <BentoTile
              key={`${item.key}-${index}`}
              span={gallerySpans[index] ?? item.span}
              imageKey={item.key}
              interactive
            />
          ))}
        </div>

        <div className="mt-2 grid grid-cols-2 gap-1.5 md:mt-3 md:grid-cols-5 md:gap-2">
          {foodVideos.map((video) => (
            <BentoTile
              key={video.id}
              className="min-h-[220px] md:min-h-[340px]"
              videoSrc={video.src}
              videoPoster={video.poster}
              videoLabel={video.label}
              subtitle={video.label}
              interactive={false}
            />
          ))}
        </div>
      </div>
    </BentoSection>
  )
}
