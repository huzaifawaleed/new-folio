import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Code, ArrowLeft, Calendar, User } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { GiantName } from '@/components/sections/giant-name'
import { TechBadge } from '@/components/shared/tech-badge'
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/mdx'
import { generateSeo } from '@/lib/seo'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { frontmatter } = await getProjectBySlug(params.slug)
    return generateSeo({
      title: frontmatter.title,
      description: frontmatter.subtitle,
      path: `/projects/${params.slug}`,
    })
  } catch {
    return { title: 'Project Not Found' }
  }
}

const bgMap: Record<string, string> = {
  'card-blue': '#1e3a8a',
  'card-orange': '#c2410c',
  'card-green': '#15803d',
  'card-lumina': '#2d0a1f',
  'card-warm': '#3d1f0a',
  'card-navy': '#0d1b3e',
  'card-bbq': '#2d1200',
}

export default async function ProjectPage({ params }: Props) {
  let frontmatter: Awaited<ReturnType<typeof getProjectBySlug>>['frontmatter']
  let content: string

  try {
    const result = await getProjectBySlug(params.slug)
    frontmatter = result.frontmatter
    content = result.content
  } catch {
    notFound()
  }

  const bg = bgMap[frontmatter.bgColor] ?? '#1e3a8a'

  return (
    <>
      {/* Hero */}
      <div className="pt-24" style={{ backgroundColor: bg }}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-xs font-medium text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={13} />
            Back to Projects
          </Link>
          <h1 className="text-4xl font-bold text-white md:text-5xl">{frontmatter.title}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">{frontmatter.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {frontmatter.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {frontmatter.liveUrl && frontmatter.liveUrl !== '#' && (
              <a
                href={frontmatter.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/30"
              >
                Live Site
                <ExternalLink size={13} />
              </a>
            )}
            {frontmatter.githubUrl && (
              <a
                href={frontmatter.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                GitHub
                <Code size={13} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project screenshot */}
      {frontmatter.coverImage && (
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="relative -mt-6 w-full max-w-2xl overflow-hidden rounded-xl border border-[#27272a] shadow-xl">
              <Image
                src={frontmatter.coverImage}
                alt={`${frontmatter.title} screenshot`}
                width={800}
                height={450}
                className="w-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <article className="prose prose-invert prose-sm max-w-none prose-headings:font-bold prose-headings:text-[#fafafa] prose-p:text-[#a1a1aa] prose-p:leading-relaxed prose-li:text-[#a1a1aa] prose-strong:text-[#fafafa] prose-h2:mt-10 prose-h2:text-xl prose-h2:border-b prose-h2:border-[#27272a] prose-h2:pb-3">
            <MDXRemote source={content} />
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-[#27272a] bg-[#12121a] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#71717a]">
                Project Info
              </p>
              <dl className="space-y-4">
                <div className="flex items-start gap-3">
                  <User size={14} className="mt-0.5 flex-shrink-0 text-[#7c3aed]" />
                  <div>
                    <dt className="text-xs text-[#71717a]">Role</dt>
                    <dd className="text-sm font-medium text-[#fafafa]">{frontmatter.role}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={14} className="mt-0.5 flex-shrink-0 text-[#7c3aed]" />
                  <div>
                    <dt className="text-xs text-[#71717a]">Year</dt>
                    <dd className="text-sm font-medium text-[#fafafa]">{frontmatter.year}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-[#27272a] bg-[#12121a] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#71717a]">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {frontmatter.tech.map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>
            </div>

            <Link
              href="/projects"
              className="block rounded-2xl border border-[#27272a] bg-[#12121a] p-6 text-center transition-all hover:border-[#7c3aed]/50 hover:bg-[#1a1a25]"
            >
              <p className="text-sm font-semibold text-[#fafafa]">View More Projects</p>
              <p className="mt-1 text-xs text-[#71717a]">See the full portfolio</p>
            </Link>
          </aside>
        </div>
      </div>

      <GiantName />
    </>
  )
}
