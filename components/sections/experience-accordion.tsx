'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface ExperienceAccordionProps {
  responsibilities: string[]
}

export function ExperienceAccordion({ responsibilities }: ExperienceAccordionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs font-medium text-[#7c3aed] transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:underline"
      >
        {open ? 'Hide' : 'Show'} responsibilities
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul className="mt-4 space-y-2 border-l-2 border-[#27272a] pl-4">
          {responsibilities.map((r, i) => (
            <li key={i} className="text-sm leading-relaxed text-[#a1a1aa]">
              {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
