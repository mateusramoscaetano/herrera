interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <div
      className={className}
      data-reveal
      style={{ ["--reveal-delay" as string]: `${delay}s` }}
    >
      {children}
    </div>
  )
}
