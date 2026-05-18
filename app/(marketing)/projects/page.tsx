import type { Metadata } from 'next'
import { ProjectCard } from '@/components/sections/project-card'
import { GiantName } from '@/components/sections/giant-name'
import { Reveal } from '@/components/shared/reveal'
import { generateSeo } from '@/lib/seo'
import { getAllProjects } from '@/lib/mdx'

export const metadata: Metadata = generateSeo({
  title: 'Projects',
  description:
    'Portfolio of websites built for restaurants, salons, clinics, and businesses worldwide by Huzaifa Waleed.',
  path: '/projects',
})

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <>
      <div className="pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#71717a]">Portfolio</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#fafafa] md:text-5xl">Projects</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#a1a1aa]">
              Every project here solved a real business problem. Results, not just deliverables.
            </p>
          </Reveal>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <GiantName />
    </>
  )
}
