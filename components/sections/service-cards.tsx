import Link from 'next/link'
import { UtensilsCrossed, Scissors, Stethoscope, Briefcase, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'

const services = [
  {
    icon: UtensilsCrossed,
    title: 'F&B Website',
    price: 'From RM 500',
    days: '7–8 days',
    color: '#c2410c',
    features: [
      'Digital menu with photos',
      'WhatsApp ordering button',
      'Google Maps integration',
      'Operating hours display',
      'Grab/Foodpanda links',
      'Mobile-optimized design',
    ],
  },
  {
    icon: Scissors,
    title: 'Salon & Spa Website',
    price: 'From RM 600',
    days: '7–8 days',
    color: '#15803d',
    features: [
      'Services pricing table',
      'Before/after photo gallery',
      'WhatsApp booking button',
      'Staff profile cards',
      'Instagram feed embed',
      'Google Reviews section',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Website',
    price: 'From RM 700',
    days: '7–8 days',
    color: '#1e3a8a',
    features: [
      'Doctor profile pages',
      'Services & conditions list',
      'Appointment booking form',
      'Location & directions',
      'Insurance info panel',
      'English & BM support',
    ],
  },
  {
    icon: Briefcase,
    title: 'Business Website',
    price: 'From RM 800',
    days: '7–8 days',
    color: '#7c3aed',
    features: [
      'Multi-page site structure',
      'Services showcase',
      'Team & about section',
      'Contact form with email',
      'SEO optimization',
      'Performance optimized',
    ],
  },
]

export function ServiceCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Pricing"
          heading="Website Packages"
          description="Transparent pricing, no hidden fees. Every package includes hosting setup, mobile optimization, and 30 days of post-launch support."
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
                  <p className="mt-1 text-lg font-bold" style={{ color: svc.color }}>{svc.price}</p>
                  <p className="text-xs text-[#71717a]">Delivered in {svc.days}</p>
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
