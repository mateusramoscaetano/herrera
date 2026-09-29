interface TextRevealProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "p" | "h2" | "h3"
  dataReveal?: "words" | "lines" | "block"
  index:number
}

export function TextReveal({
  children,
  className = "",
  as: Tag = "div",
  dataReveal = "block",
  index
}: TextRevealProps) {
  return (
    <Tag key={index} className={className} data-text-reveal={dataReveal}>
      {children}
    </Tag>
  )
}
