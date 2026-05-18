export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  type: 'full-time' | 'contract' | 'freelance'
  description: string
  responsibilities: string[]
  tech: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'aptech-education',
    company: 'Malaysia',
    role: 'International Student & Self Learner',
    period: '2022 – 2023',
    location: 'Kuala Lumpur, Malaysia',
    type: 'full-time',
    description:
      'International student in Malaysia, self-learning web development through hands-on projects and real client work. Building a strong foundation in both frontend and backend development while working with real businesses from day one.',
    responsibilities: [
      'Studied core web technologies: HTML, CSS, JavaScript, PHP, and MySQL',
      'Completed hands-on projects in full-stack web development',
      'Learned UI/UX design principles using Figma',
      'Developed database-driven web applications with PHP and MySQL',
      'Gained experience with version control using Git and GitHub',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Git', 'Figma'],
  },
  {
    id: 'freelance-web-dev',
    company: 'Self-Employed / Freelance',
    role: 'Web Developer',
    period: '2023 – Present',
    location: 'Kuala Lumpur, Malaysia',
    type: 'freelance',
    description:
      'Building conversion-focused websites for businesses worldwide — restaurants, cafes, salons, and healthcare clinics. Delivering projects that drive real business results from day one.',
    responsibilities: [
      'Designed and developed custom websites for F&B, beauty, and healthcare sectors',
      'Integrated WhatsApp ordering systems and booking flows for local businesses',
      'Achieved week-one results for clients — restaurant client started receiving WhatsApp orders immediately after launch',
      'Doubled bookings for salon client within 30 days of site launch',
      'Optimized all sites for mobile-first performance and local SEO',
      'Delivered projects within 7–8 day timelines with direct client communication',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'Figma', 'Netlify'],
  },
  {
    id: 'diploma-se',
    company: 'Aptech Computer Education',
    role: 'Diploma in Software Engineering',
    period: '2023 – 2025',
    location: 'Kuala Lumpur, Malaysia',
    type: 'full-time',
    description:
      'Pursuing a 2-year Diploma in Software Engineering as an international student in Malaysia. Combining formal education with real-world freelance projects to build both theoretical knowledge and practical skills.',
    responsibilities: [
      'Studying software engineering principles, data structures, and algorithms',
      'Building full-stack web applications as part of coursework and personal projects',
      'Applying classroom concepts directly to live client projects',
      'Learning database design and management with MySQL',
      'Developing problem-solving and software architecture skills',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Git', 'Figma'],
  },
]
