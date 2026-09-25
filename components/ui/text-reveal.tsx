interface TextRevealProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "p" | "h2" | "h3"
  dataReveal?: "words" | "lines" | "block"
}

export function TextReveal({
  children,
  className = "",
  as: Tag = "div",
  dataReveal = "block",
}: TextRevealProps) {
  return (
    <Tag className={className} data-text-reveal={dataReveal}>
      {children}
    </Tag>
  )
}
