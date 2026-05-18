'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { techStack, type TechCategory } from '@/content/tech-stack'

const categoryLabels: Record<TechCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  tooling: 'Tooling',
  design: 'Design',
  ai: 'AI Tools',
}

const categories = Object.keys(categoryLabels) as TechCategory[]

function TechIcon({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false)
  if (error) return <span className="h-5 w-5 flex-shrink-0 rounded bg-[#27272a]" />
  return (
    <div className="relative h-5 w-5 flex-shrink-0">
      <Image src={src} alt={alt} fill className="object-contain" onError={() => setError(true)} />
    </div>
  )
}

export function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          heading="My Tech Stack"
          description="The tools and technologies I use to build fast, reliable websites."
        />
      </Reveal>

      <div className="mt-12 space-y-10">
        {categories.map((cat) => {
          const items = techStack.filter((t) => t.category === cat)
          if (!items.length) return null
          return (
            <Reveal key={cat}>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#71717a]">
                  {categoryLabels[cat]}
                </p>
                <div className="flex flex-wrap gap-3">
                  {items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2.5 rounded-xl border border-[#27272a] bg-[#12121a] px-4 py-3 transition-all duration-200 hover:border-[#3f3f46] hover:bg-[#1a1a25]"
                    >
                      <TechIcon src={tech.icon} alt={tech.name} />
                      <span className="text-sm font-medium text-[#a1a1aa]">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
