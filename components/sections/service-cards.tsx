import Link from 'next/link'
import { Layout, Code2, ShoppingCart, RefreshCw, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'

const services = [
  {
    icon: Layout,
    title: 'Landing Pages',
    color: '#c2410c',
    features: [
      'Single-page conversion design',
      'Hero, features & CTA sections',
      'Contact / lead capture form',
      'SEO meta & Open Graph tags',
      'Mobile-first responsive layout',
      'Fast load — optimized assets',
    ],
  },
  {
    icon: Code2,
    title: 'Full-Stack Web Apps',
    color: '#15803d',
    features: [
      'Next.js App Router architecture',
      'REST or tRPC API design',
      'Database schema & migrations',
      'Authentication & role management',
      'Admin dashboard / CMS',
      'Deployed on Vercel + cloud DB',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Stores',
    color: '#1e3a8a',
    features: [
      'Product catalogue & categories',
      'Secure payment integration',
      'Cart, checkout & order flow',
      'Inventory management panel',
      'Email order confirmations',
      'Mobile-optimized storefront',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    color: '#7c3aed',
    features: [
      'Audit of existing site',
      'Modern UI / UX overhaul',
      'Performance & Core Web Vitals',
      'SEO preservation & improvement',
      'Content migration',
      'Cross-browser QA testing',
    ],
  },
]

export function ServiceCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          heading="What I Offer"
          description="Every engagement is scoped around your goals — clean code, great design, and results you can measure."
          centered
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((svc, i) => {
          const Icon = svc.icon
          return (
            <Reveal key={svc.title} delay={i * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#27272a] bg-[#12121a] transition-all duration-200 hover:-translate-y-1 hover:border-[#3f3f46]">
                <div className="p-6" style={{ backgroundColor: `${svc.color}15`, borderBottom: `1px solid ${svc.color}30` }}>
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${svc.color}25` }}
                  >
                    <Icon size={18} style={{ color: svc.color }} />
                  </div>
                  <h3 className="font-bold text-[#fafafa]">{svc.title}</h3>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <ul className="flex-1 space-y-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs leading-relaxed text-[#a1a1aa]">
                        <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-[#7c3aed]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-[#27272a] px-4 py-2.5 text-sm font-semibold text-[#fafafa] transition-all duration-200 hover:border-[#7c3aed]/50 hover:bg-[#1a1a25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
                  >
                    Get Started
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
