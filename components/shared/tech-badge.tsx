interface TechBadgeProps {
  name: string
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#3f3f46] bg-[#12121a] px-3 py-1 text-xs font-medium text-[#a1a1aa] transition-colors duration-200 hover:border-[#7c3aed]/50 hover:text-[#fafafa]">
      {name}
    </span>
  )
}
