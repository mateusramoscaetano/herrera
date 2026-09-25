interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function Parallax({ children, className = "", speed = 0.2 }: ParallaxProps) {
  return (
    <div className={className} data-parallax data-parallax-speed={speed}>
      {children}
    </div>
  )
}
