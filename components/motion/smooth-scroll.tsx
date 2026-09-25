"use client"

interface SmoothScrollProps {
  children: React.ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return <div data-smooth-scroll-root>{children}</div>
}
