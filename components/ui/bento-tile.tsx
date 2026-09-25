"use client"

import { ReactNode, useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "@/lib/gsap"
import { EditorialImage } from "@/components/ui/editorial-image"
import { EditorialVideo } from "@/components/ui/editorial-video"

interface BentoTileProps {
  span?: string
  tone?: "wine" | "cream" | "olive" | "ink" | "sage"
  imageKey?: string
  videoSrc?: string
  videoPoster?: string
  videoLabel?: string
  title?: string
  subtitle?: string
  children?: ReactNode
  className?: string
  interactive?: boolean
}

const toneClass = {
  wine: "bg-wine text-cream",
  cream: "bg-cream text-ink",
  olive: "bg-olive text-cream",
  ink: "bg-ink text-cream",
  sage: "bg-sage text-ink",
}

export function BentoTile({
  span = "",
  tone,
  imageKey,
  videoSrc,
  videoPoster,
  videoLabel,
  title,
  subtitle,
  children,
  className = "",
  interactive = true,
}: BentoTileProps) {
  const tileRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!interactive) return
      const tile = tileRef.current
      if (!tile) return

      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const media = tile.querySelector("[data-bento-media]")
        if (!media) return

        const enter = () => {
          gsap.to(media, { scale: 1.06, duration: 0.7, ease: "power2.out" })
        }
        const leave = () => {
          gsap.to(media, { scale: 1, duration: 0.8, ease: "power2.out" })
        }

        tile.addEventListener("mouseenter", enter)
        tile.addEventListener("mouseleave", leave)

        return () => {
          tile.removeEventListener("mouseenter", enter)
          tile.removeEventListener("mouseleave", leave)
        }
      })

      return () => mm.revert()
    },
    { scope: tileRef },
  )

  const hasMedia = imageKey || videoSrc

  return (
    <div
      ref={tileRef}
      data-bento-item
      className={`relative min-h-[200px] overflow-hidden ${span} ${
        tone && !hasMedia ? toneClass[tone] : ""
      } ${className}`}
    >
      {videoSrc && videoPoster && videoLabel ? (
        <div className="absolute inset-0" data-bento-media>
          <EditorialVideo
            src={videoSrc}
            poster={videoPoster}
            label={videoLabel}
          />
        </div>
      ) : null}

      {imageKey ? (
        <div className="absolute inset-0" data-bento-media>
          <EditorialImage imageKey={imageKey} sizes="(max-width:768px) 100vw, 25vw" />
        </div>
      ) : null}

      {hasMedia ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent"
          aria-hidden="true"
        />
      ) : null}

      {(title || subtitle || children) && (
        <div
          className={`relative z-10 flex h-full flex-col justify-end p-5 md:p-7 ${
            hasMedia ? "text-cream" : ""
          }`}
        >
          {title ? (
            <p className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-none">
              {title}
            </p>
          ) : null}
          {subtitle ? (
            <p className="mt-2 max-w-xs font-sans text-xs leading-relaxed tracking-wide opacity-85 md:text-sm">
              {subtitle}
            </p>
          ) : null}
          {children}
        </div>
      )}
    </div>
  )
}
