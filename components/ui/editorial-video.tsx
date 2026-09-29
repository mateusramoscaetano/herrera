"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { prefersReducedMotion } from "@/lib/animations"

interface EditorialVideoProps {
  src: string
  fallbackSrc?: string
  poster: string
  label: string
  className?: string
  priority?: boolean
  mediaScale?: number
}

export function EditorialVideo({
  src,
  fallbackSrc,
  poster,
  label,
  className = "",
  priority = false,
  mediaScale,
}: EditorialVideoProps) {
  const mediaStyle = mediaScale
    ? { transform: `scale(${mediaScale})` }
    : undefined
  const mediaClassName =
    "absolute inset-0 h-full w-full origin-center object-cover"
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video || prefersReducedMotion()) return

    video.muted = true
    video.defaultMuted = true

    const playVideo = () => {
      video.play().then(() => setIsPlaying(true)).catch(() => {})
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) playVideo()
          else video.pause()
        })
      },
      { threshold: 0.15, rootMargin: "50px" },
    )

    observer.observe(video)

    const onLoaded = () => playVideo()
    video.addEventListener("loadeddata", onLoaded)

    return () => {
      observer.disconnect()
      video.removeEventListener("loadeddata", onLoaded)
    }
  }, [])

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className={mediaClassName}
        style={mediaStyle}
        src={fallbackSrc ? undefined : src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-label={label}
      >
        {fallbackSrc ? (
          <>
            <source src={src} type="video/webm" />
            <source src={fallbackSrc} type="video/mp4" />
          </>
        ) : null}
      </video>
      <Image
        src={poster}
        alt=""
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 45vw"
        className={`pointer-events-none transition-opacity duration-1000 ${mediaClassName} ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
        style={mediaStyle}
        aria-hidden="true"
      />
    </div>
  )
}
