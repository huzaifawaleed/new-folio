import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { IntroGrid } from '@/components/sections/intro-grid'
import { ServicesRow } from '@/components/sections/services-row'
import { FeaturedProject } from '@/components/sections/featured-project'
import { ProjectCard } from '@/components/sections/project-card'
import { TechStack } from '@/components/sections/tech-stack'
import { WorkExperience } from '@/components/sections/work-experience'
import { GiantName } from '@/components/sections/giant-name'
import { Reveal } from '@/components/shared/reveal'
import { getFeaturedProjects, getAllProjects } from '@/lib/mdx'
import { experience } from '@/content/experience'

export const metadata: Metadata = {
  title: 'Huzaifa Waleed — Web Developer',
  description:
    'Websites that turn visitors into paying customers. Web developer based in Kuala Lumpur, working with businesses worldwide.',
}

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()
  const allProjects = getAllProjects()
  const nonFeatured = allProjects.filter((p) => !p.featured).slice(0, 2)
  const featured = featuredProjects[0] ?? allProjects[0]

  return (
    <>
      <Hero />
      <IntroGrid />
      <ServicesRow />

      {featured && <FeaturedProject project={featured} />}

      {nonFeatured.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
          <Reveal>
            <div className="mb-8 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#71717a]">
                More Projects
              </p>
              <Link
                href="/projects"
                className="flex items-center gap-1.5 text-sm font-medium text-[#7c3aed] transition-opacity duration-200 hover:opacity-80"
              >
                View all
                <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {nonFeatured.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <TechStack />
      <WorkExperience items={experience.slice(0, 2)} preview />

      <Reveal>
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
          <div className="rounded-2xl border border-[#7c3aed]/30 bg-gradient-to-br from-[#7c3aed]/20 to-[#a855f7]/10 p-8 text-center md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
              Ready to Start?
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#fafafa] md:text-4xl">
              Let&apos;s build your website
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#a1a1aa]">
              From RM 500, delivered in 7–8 days. Direct communication, real results from day one.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]"
              >
                Start a Project
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center rounded-xl border border-[#3f3f46] bg-[#12121a] px-6 py-3 text-sm font-semibold text-[#fafafa] transition-all duration-200 hover:border-[#7c3aed]/50 hover:bg-[#1a1a25]"
              >
                See My Work
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <GiantName />
    </>
  )
}
