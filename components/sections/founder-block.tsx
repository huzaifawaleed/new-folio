import { Reveal } from '@/components/shared/reveal'
import { UtensilsCrossed, Scissors, Stethoscope } from 'lucide-react'

export function FounderBlock() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-[#27272a] bg-[#12121a]">
          <div className="grid md:grid-cols-2">
            {/* Left: Personal story */}
            <div className="border-b border-[#27272a] p-6 md:border-b-0 md:border-r md:p-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#71717a]">
                My Story
              </p>
              <h2 className="text-2xl font-bold text-[#fafafa]">
                Why I Build for Local Businesses
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#a1a1aa]">
                <p>
                  I started building websites because I saw too many great businesses losing
                  customers simply because they weren&apos;t online — or their online presence didn&apos;t
                  reflect the quality of their work.
                </p>
                <p>
                  A restaurant with amazing food but no digital menu. A salon doing incredible work but
                  relying on Instagram DMs for bookings. A clinic with brilliant doctors but no way for
                  patients to find them.
                </p>
                <p>
                  I fix that. Fast, affordable, with results you can measure from week one.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Clients Served', value: '10+' },
                  { label: 'Avg. Delivery', value: '7 Days' },
                  { label: 'Client Rating', value: '5★' },
                  { label: 'Repeat Clients', value: '80%' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-[#0a0a0f] p-4">
                    <p className="text-xl font-bold text-[#fafafa]">{stat.value}</p>
                    <p className="text-xs text-[#71717a]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Services specialties */}
            <div className="p-6 md:p-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#71717a]">
                Specialties
              </p>
              <h2 className="text-2xl font-bold text-[#fafafa]">Sectors I Know Best</h2>
              <div className="mt-6 space-y-4">
                {[
                  {
                    icon: UtensilsCrossed,
                    title: 'Food & Beverage',
                    desc: 'Restaurants, cafes, food courts, cloud kitchens. WhatsApp ordering that actually works.',
                  },
                  {
                    icon: Scissors,
                    title: 'Beauty & Wellness',
                    desc: 'Salons, spas, nail bars, barbershops. Before/after galleries that convert browsers into bookings.',
                  },
                  {
                    icon: Stethoscope,
                    title: 'Healthcare',
                    desc: 'Clinics, dental practices, physiotherapy. Professional presence patients can trust.',
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 rounded-xl border border-[#27272a] p-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a1a25]">
                      <Icon size={16} className="text-[#7c3aed]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#fafafa]">{title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[#71717a]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
