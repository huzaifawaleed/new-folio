export type TechCategory = 'frontend' | 'backend' | 'tooling' | 'design' | 'ai'

export interface TechItem {
  name: string
  icon: string
  category: TechCategory
  proficiency: 'primary' | 'secondary'
}

export const techStack: TechItem[] = [
  { name: 'HTML5', icon: '/icons/tech/html5.svg', category: 'frontend', proficiency: 'primary' },
  { name: 'CSS3', icon: '/icons/tech/css3.svg', category: 'frontend', proficiency: 'primary' },
  { name: 'JavaScript', icon: '/icons/tech/javascript.svg', category: 'frontend', proficiency: 'primary' },
  { name: 'Bootstrap', icon: '/icons/tech/bootstrap.svg', category: 'frontend', proficiency: 'primary' },
  { name: 'PHP', icon: '/icons/tech/php.svg', category: 'backend', proficiency: 'primary' },
  { name: 'MySQL', icon: '/icons/tech/mysql.png', category: 'backend', proficiency: 'primary' },
  { name: 'Git', icon: '/icons/tech/git.svg', category: 'tooling', proficiency: 'primary' },
  { name: 'GitHub', icon: '/icons/tech/github.svg', category: 'tooling', proficiency: 'primary' },
  { name: 'Figma', icon: '/icons/tech/figma.svg', category: 'design', proficiency: 'secondary' },
  { name: 'Netlify', icon: '/icons/tech/netlify.png', category: 'tooling', proficiency: 'secondary' },
  { name: 'Claude AI', icon: '/icons/tech/claude.png', category: 'ai', proficiency: 'secondary' },
  { name: 'v0.dev', icon: '/icons/tech/vercel.svg', category: 'ai', proficiency: 'secondary' },
]
