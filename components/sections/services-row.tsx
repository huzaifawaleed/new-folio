import { UtensilsCrossed, Scissors, Stethoscope, Search, Smartphone } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'

const services = [
  {
    icon: UtensilsCrossed,
    label: 'F&B Websites',
    description: 'Digital menus, WhatsApp ordering, Google Maps',
    price: 'From RM 500',
  },
  {
    icon: Scissors,
    label: 'Salon & Spa',
    description: 'Gallery, bookings, Instagram feed, staff profiles',
    price: 'From RM 600',
  },
  {
    icon: Stethoscope,
    label: 'Healthcare',
    description: 'Doctor profiles, appointments, bilingual support',
    price: 'From RM 700',
  },
  {
    icon: Search,
    label: 'SEO Basics',
    description: 'Local SEO, fast load times, Google-ready markup',
    price: 'Included',
  },
  {
    icon: Smartphone,
    label: 'Mobile-First',
    description: 'Optimized for mobile users on any device, anywhere in the world',
    price: 'Always',
  },
]

export function ServicesRow() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          heading="What I Build"
          description="Specialized websites for businesses that need results fast — wherever you are."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <Reveal key={service.label} delay={i * 0.08} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-[#27272a] bg-[#12121a] p-5 transition-all duration-200 hover:border-[#7c3aed]/40 hover:bg-[#1a1a25]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1a1a25] transition-colors duration-200 group-hover:bg-[#7c3aed]/20">
                  <Icon size={18} className="text-[#7c3aed]" />
                </div>
                <p className="font-semibold text-[#fafafa]">{service.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#71717a]">{service.description}</p>
                <p className="mt-auto pt-4 text-xs font-semibold text-[#7c3aed]">{service.price}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
