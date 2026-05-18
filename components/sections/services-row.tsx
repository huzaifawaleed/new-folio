import { Layout, Code2, ShoppingCart, Search, Smartphone } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'

const services = [
  {
    icon: Layout,
    label: 'Landing Pages',
    description: 'Fast, conversion-focused pages built to turn visitors into clients',
  },
  {
    icon: Code2,
    label: 'Full-Stack Apps',
    description: 'End-to-end web applications with custom backends and APIs',
  },
  {
    icon: ShoppingCart,
    label: 'E-Commerce',
    description: 'Online stores with payments, inventory, and seamless checkout',
  },
  {
    icon: Search,
    label: 'SEO & Performance',
    description: 'Core Web Vitals, structured data, and Google-ready optimization',
  },
  {
    icon: Smartphone,
    label: 'Mobile-First Design',
    description: 'Pixel-perfect responsive layouts that work on any screen size',
  },
]

export function ServicesRow() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          heading="What I Build"
          description="From landing pages to full-stack apps — built clean, fast, and ready to scale."
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
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
