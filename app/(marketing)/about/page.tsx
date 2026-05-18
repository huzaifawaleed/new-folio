import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FounderBlock } from '@/components/sections/founder-block'
import { ServiceCards } from '@/components/sections/service-cards'
import { GiantName } from '@/components/sections/giant-name'
import { Reveal } from '@/components/shared/reveal'
import { generateSeo } from '@/lib/seo'

export const metadata: Metadata = generateSeo({
  title: 'About',
  description:
    'Web developer based in Kuala Lumpur. Building websites that help businesses worldwide grow.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <div className="pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#71717a]">About</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#fafafa] md:text-5xl">
              Huzaifa Waleed
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#a1a1aa]">
              Web developer. Kuala Lumpur based. Helping businesses worldwide get online and
              start earning from day one.
            </p>
          </Reveal>

          <Reveal className="mt-12 max-w-2xl space-y-4 text-sm leading-relaxed text-[#a1a1aa]">
            <p>
              I started building websites because I saw too many great local businesses losing
              customers simply because they weren&apos;t online — or their online presence didn&apos;t
              match the quality of their products and services.
            </p>
            <p>
              I&apos;m an international student based in Malaysia, self-learning web development while
              building real things for real businesses. My focus has always been practical: build
              something that works, loads fast on mobile, and gives the business owner measurable results.
            </p>
            <p>
              I speak English, Urdu, and Hindi, and work with clients across Malaysia and globally. I
              work directly with business owners — no agency overhead, no miscommunication, no hidden
              fees.
            </p>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-3">
            {[
              'HTML & CSS',
              'JavaScript',
              'PHP & MySQL',
              'Bootstrap',
              'WhatsApp API',
              'Figma',
              'Git & GitHub',
              'SEO Basics',
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#27272a] bg-[#12121a] px-3 py-1.5 text-xs font-medium text-[#a1a1aa]"
              >
                {skill}
              </span>
            ))}
          </Reveal>
        </div>
      </div>

      <FounderBlock />
      <ServiceCards />

      <Reveal>
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
          <div className="rounded-2xl bg-gradient-to-br from-[#7c3aed]/20 to-[#a855f7]/10 border border-[#7c3aed]/30 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-[#fafafa]">Ready to work together?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-[#a1a1aa]">
              Let&apos;s talk about your business and what a website could do for you.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-200 hover:opacity-90"
            >
              Get in Touch
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </Reveal>

      <GiantName />
    </>
  )
}
