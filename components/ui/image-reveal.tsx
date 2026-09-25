interface ImageRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function ImageReveal({
  children,
  className = "",
  direction = "up",
}: ImageRevealProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      data-image-reveal={direction}
    >
      {children}
    </div>
  )
}
