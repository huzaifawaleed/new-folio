interface SectionHeadingProps {
  eyebrow: string
  heading: string
  description?: string
  centered?: boolean
}

export function SectionHeading({ eyebrow, heading, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#71717a]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#fafafa] md:text-4xl">{heading}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#a1a1aa]">{description}</p>
      )}
    </div>
  )
}
