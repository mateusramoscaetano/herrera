export const motionDefaults = {
  duration: 0.85,
  ease: "power3.out",
  stagger: 0.08,
} as const

export const scrollTriggerDefaults = {
  start: "top 85%",
  end: "bottom 15%",
  toggleActions: "play none none reverse",
} as const

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}
