import Link from 'next/link'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'

export function IntroGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Bio */}
        <Reveal className="rounded-2xl border border-[#27272a] bg-[#12121a] p-6 md:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#71717a]">About</p>
          <p className="text-sm leading-relaxed text-[#a1a1aa]">
            Web developer and international student in Malaysia, self-taught and specializing in conversion-focused websites for businesses
            worldwide — not just Malaysian ones. I work directly with owners — no agency overhead, no miscommunication.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#a1a1aa]">
            Every site I build is designed to start earning from day one: WhatsApp ordering, online bookings,
            clear menus, fast load times.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['English', 'Urdu', 'Bahasa (basic)'].map((lang) => (
              <span
                key={lang}
                className="rounded-full border border-[#27272a] px-3 py-1 text-xs text-[#71717a]"
              >
                {lang}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Location */}
        <Reveal delay={0.1} className="rounded-2xl border border-[#27272a] bg-[#12121a] p-6 md:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#71717a]">Location</p>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a1a25]">
              <MapPin size={15} className="text-[#7c3aed]" />
            </div>
            <div>
              <p className="font-medium text-[#fafafa]">Kuala Lumpur</p>
              <p className="text-sm text-[#71717a]">Malaysia</p>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a1a25]">
              <Clock size={15} className="text-[#7c3aed]" />
            </div>
            <div>
              <p className="font-medium text-[#fafafa]">UTC+8 (MYT)</p>
              <p className="text-sm text-[#71717a]">Open to remote & local clients</p>
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#0a0a0f] px-3 py-1.5 text-xs font-medium text-[#a1a1aa]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for new projects
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.2} className="flex flex-col rounded-2xl border border-[#7c3aed]/30 bg-gradient-to-br from-[#7c3aed]/10 to-[#a855f7]/5 p-6 md:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
            Let&apos;s Work Together
          </p>
          <h3 className="text-xl font-semibold text-[#fafafa]">
            Ready to get your business online?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#a1a1aa]">
            From RM 500 for a complete, professional website. Delivered in 7–8 days. Direct communication,
            no agency markup.
          </p>
          <div className="mt-auto pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-200 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
            >
              Start a Project
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
