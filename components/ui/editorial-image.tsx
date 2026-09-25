"use client"

import Image from "next/image"
import { useState } from "react"
import { getImage } from "@/lib/images"

interface EditorialImageProps {
  imageKey?: string
  src?: string
  alt?: string
  priority?: boolean
  className?: string
  sizes?: string
  fill?: boolean
  dataMotion?: string
}

export function EditorialImage({
  imageKey,
  src: srcOverride,
  alt: altOverride,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill = true,
  dataMotion,
}: EditorialImageProps) {
  const asset = imageKey ? getImage(imageKey) : null
  const primarySrc = srcOverride ?? asset?.jpg ?? ""
  const placeholder = asset?.placeholder ?? "/images/placeholders/herrera-food-01.svg"
  const alt =
    altOverride ?? asset?.alt ?? "Fotografia Herrera Gastronomia"

  const [src, setSrc] = useState(primarySrc)

  return (
    <Image
      src={src || placeholder}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      data-motion={dataMotion}
      className={`object-cover ${className}`}
      onError={() => setSrc(placeholder)}
    />
  )
}
