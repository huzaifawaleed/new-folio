import type { Metadata } from 'next'
import { WorkExperience } from '@/components/sections/work-experience'
import { GiantName } from '@/components/sections/giant-name'
import { Reveal } from '@/components/shared/reveal'
import { generateSeo } from '@/lib/seo'
import { experience } from '@/content/experience'

export const metadata: Metadata = generateSeo({
  title: 'Experience',
  description: 'Full work history and professional background of Huzaifa Waleed, web developer.',
  path: '/experience',
})

export default function ExperiencePage() {
  return (
    <>
      <div className="pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#71717a]">
              Work History
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#fafafa] md:text-5xl">
              Experience
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#a1a1aa]">
              My professional journey building websites for businesses that need results.
            </p>
          </Reveal>
        </div>
      </div>

      <WorkExperience items={experience} />
      <GiantName />
    </>
  )
}
