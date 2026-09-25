"use client"

import { ReactNode, useEffect } from "react"
import { prefersReducedMotion } from "@/lib/animations"

interface MotionRootProps {
  children: ReactNode
}

export function MotionRoot({ children }: MotionRootProps) {
  useEffect(() => {
    if (prefersReducedMotion()) return
    document.documentElement.dataset.motionReady = "pending"
  }, [])

  return <>{children}</>
}
