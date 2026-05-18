'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { MapPin, Sparkles } from 'lucide-react'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0, 0, 1] } },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[120px]" />
        <div className="absolute right-1/4 top-3/4 h-[300px] w-[300px] rounded-full bg-[#a855f7]/8 blur-[80px]" />
        {/* SVG noise texture */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          {/* Badges */}
          <motion.div variants={item} className="mb-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#12121a] px-3 py-1.5 text-xs font-medium text-[#a1a1aa]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for Work
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#12121a] px-3 py-1.5 text-xs font-medium text-[#a1a1aa]">
              <MapPin size={11} />
              Kuala Lumpur, Malaysia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.1] tracking-tight text-[#fafafa]"
          >
            Websites that turn visitors
            <br />
            into{' '}
            <span className="font-serif italic" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              paying customers
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[#a1a1aa]"
          >
            Web developer helping businesses worldwide — restaurants, salons, and clinics —
            get online with fast, mobile-first websites that drive real results from day one.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-200 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
            >
              <Sparkles size={15} />
              View My Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-[#3f3f46] bg-[#12121a] px-6 py-3 text-sm font-semibold text-[#fafafa] transition-all duration-200 hover:border-[#7c3aed]/50 hover:bg-[#1a1a25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Social proof numbers */}
          <motion.div variants={item} className="mt-16 flex flex-wrap gap-8">
            {[
              { value: '10+', label: 'Projects Delivered' },
              { value: '2×', label: 'Avg. Booking Increase' },
              { value: '7–8', label: 'Day Delivery' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-[#fafafa]">{stat.value}</span>
                <span className="text-sm text-[#71717a]">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
