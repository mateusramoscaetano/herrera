interface HorizontalScrollProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function HorizontalScroll({
  children,
  className = "",
  id,
}: HorizontalScrollProps) {
  return (
    <div
      id={id}
      className={className}
      data-horizontal-scroll
      role="region"
      aria-label="Galeria horizontal"
    >
      {children}
    </div>
  )
}
