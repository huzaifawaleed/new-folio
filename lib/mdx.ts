import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'projects')

export interface ProjectFrontmatter {
  title: string
  subtitle: string
  slug: string
  coverImage: string
  bgColor: string
  tech: string[]
  role: string
  year: string
  liveUrl: string
  githubUrl?: string
  featured: boolean
  order: number
}

export function getAllProjects(): ProjectFrontmatter[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')
      const { data } = matter(raw)
      return data as ProjectFrontmatter
    })
    .sort((a, b) => a.order - b.order)
}

export function getFeaturedProjects(): ProjectFrontmatter[] {
  return getAllProjects().filter((p) => p.featured)
}

export async function getProjectBySlug(slug: string) {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(file, 'utf-8')
  const { data, content } = matter(raw)
  return { frontmatter: data as ProjectFrontmatter, content }
}

export function getAllProjectSlugs(): string[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))
  return files.map((f) => f.replace('.mdx', ''))
}
