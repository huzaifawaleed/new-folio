import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
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

interface ProjectCardProps {
  project: ProjectFrontmatter
}

export function ProjectCard({ project }: ProjectCardProps) {
  const bg = bgMap[project.bgColor] ?? '#1e3a8a'

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
      style={{ backgroundColor: bg }}
    >
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-white/60">{project.year}</p>
            <h3 className="mt-1 text-base font-bold text-white">{project.title}</h3>
            <p className="mt-1 text-xs text-white/60">{project.subtitle}</p>
          </div>
          <div className="flex-shrink-0 rounded-lg border border-white/20 bg-white/10 p-1.5 transition-all duration-200 group-hover:bg-white/20">
            <ArrowUpRight size={14} className="text-white" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-xs font-medium text-white/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <div className="flex items-center gap-1 border-b border-white/10 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
          </div>
          {project.coverImage ? (
            <div className="relative aspect-[16/7]">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="aspect-[16/7] bg-white/5" />
          )}
        </div>
      </div>
    </Link>
  )
}
