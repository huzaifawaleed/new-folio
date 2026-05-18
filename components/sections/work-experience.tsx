import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import type { ExperienceItem } from '@/content/experience'
import { ExperienceAccordion } from './experience-accordion'

interface WorkExperienceProps {
  items: ExperienceItem[]
  preview?: boolean
}

export function WorkExperience({ items, preview = false }: WorkExperienceProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          heading={preview ? 'Work History' : 'Full Work History'}
          description={
            preview
              ? "Where I've worked and what I've built."
              : 'A complete record of my professional experience and education.'
          }
        />
      </Reveal>

      <div className="mt-12 space-y-4">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.1}>
            <div className="overflow-hidden rounded-2xl border border-[#27272a] bg-[#12121a]">
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg font-semibold text-[#fafafa]">{item.role}</h3>
                      <span className="rounded-full border border-[#27272a] px-2 py-0.5 text-xs font-medium capitalize text-[#71717a]">
                        {item.type}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-[#7c3aed]">{item.company}</p>
                  </div>
                  <div className="flex flex-col items-start gap-1 text-right sm:items-end">
                    <span className="whitespace-nowrap rounded-full bg-[#1a1a25] px-3 py-1 text-xs font-medium text-[#a1a1aa]">
                      {item.period}
                    </span>
                    <span className="text-xs text-[#71717a]">{item.location}</span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#a1a1aa]">{item.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#27272a] bg-[#0a0a0f] px-2.5 py-0.5 text-xs text-[#71717a]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ExperienceAccordion responsibilities={item.responsibilities} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
