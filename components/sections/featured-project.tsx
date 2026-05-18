import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import type { ProjectFrontmatter } from '@/lib/mdx'

const bgMap: Record<string, string> = {
  'card-blue': '#1e3a8a',
  'card-orange': '#c2410c',
  'card-green': '#15803d',
  'card-lumina': '#2d0a1f',
  'card-warm': '#3d1f0a',
  'card-navy': '#0d1b3e',
  'card-bbq': '#2d1200',
}

interface FeaturedProjectProps {
  project: ProjectFrontmatter
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const bg = bgMap[project.bgColor] ?? '#1e3a8a'

  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
      <Reveal>
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#71717a]">
          Featured Project
        </p>
      </Reveal>

      <Reveal>
        <div
          className="group overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
          style={{ backgroundColor: bg }}
        >
          <div className="flex flex-col gap-6 p-5 md:flex-row md:items-center md:p-7 lg:p-9">
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white md:text-2xl">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-white/70">{project.subtitle}</p>
              </div>

              <p className="text-sm leading-relaxed text-white/60">
                An elegant, conversion-focused website that delivered 2× bookings within 30 days.
                Built with mobile-first design and WhatsApp booking integration.
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Case Study
                  <ArrowUpRight size={14} />
                </Link>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    Live Site
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            {/* Browser frame */}
            <div className="w-full flex-shrink-0 md:w-52 lg:w-64">
              <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <div className="ml-2 h-3 flex-1 rounded bg-white/20" />
                </div>
                {project.coverImage ? (
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 320px"
                      priority
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-white/5 p-4">
                    <div className="h-full rounded bg-white/10" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
