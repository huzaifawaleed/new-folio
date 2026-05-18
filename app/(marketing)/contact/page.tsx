import type { Metadata } from 'next'
import { Mail, MessageCircle, Briefcase, Code, MapPin, Clock } from 'lucide-react'
import { ContactForm } from './contact-form'
import { GiantName } from '@/components/sections/giant-name'
import { Reveal } from '@/components/shared/reveal'
import { generateSeo } from '@/lib/seo'

export const metadata: Metadata = generateSeo({
  title: 'Contact',
  description:
    'Get in touch with Huzaifa Waleed for web development projects. Based in Kuala Lumpur, Malaysia.',
  path: '/contact',
})

const socialLinks = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+60 11-6419 6270',
    href: 'https://wa.me/60116419627',
    description: 'Fastest response',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'huzaifainaam225@gmail.com',
    href: 'mailto:huzaifainaam225@gmail.com',
    description: 'For detailed inquiries',
  },
  {
    icon: Briefcase,
    label: 'LinkedIn',
    value: 'linkedin.com/in/huzaifa-waleed',
    href: 'https://linkedin.com/in/huzaifa-waleed',
    description: 'Professional profile',
  },
  {
    icon: Code,
    label: 'GitHub',
    value: 'github.com/huzaifawaleed',
    href: 'https://github.com/huzaifawaleed',
    description: 'Code & projects',
  },
]

export default function ContactPage() {
  return (
    <>
      <div className="pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#71717a]">Contact</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#fafafa] md:text-5xl">
              Let&apos;s Work Together
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#a1a1aa]">
              Tell me about your business and what you need. I&apos;ll get back to you within 24 hours.
            </p>
          </Reveal>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          {/* Form */}
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* Sidebar */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-[#27272a] bg-[#12121a] p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#71717a]">
                  Get in Touch
                </p>
                <div className="space-y-4">
                  {socialLinks.map(({ icon: Icon, label, value, href, description }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-3 rounded-xl border border-[#27272a] p-4 transition-all hover:border-[#7c3aed]/50 hover:bg-[#1a1a25]"
                    >
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a1a25]">
                        <Icon size={15} className="text-[#7c3aed]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#fafafa]">{label}</p>
                        <p className="mt-0.5 truncate text-xs text-[#71717a]">{value}</p>
                        <p className="text-xs text-[#3f3f46]">{description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-[#27272a] bg-[#12121a] p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#71717a]">
                  Availability
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#7c3aed]" />
                    <div>
                      <p className="text-sm font-medium text-[#fafafa]">Kuala Lumpur, Malaysia</p>
                      <p className="text-xs text-[#71717a]">UTC+8 (MYT)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={14} className="mt-0.5 flex-shrink-0 text-[#7c3aed]" />
                    <div>
                      <p className="text-sm font-medium text-[#fafafa]">Mon–Sat, 9am–8pm MYT</p>
                      <p className="text-xs text-[#71717a]">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#0a0a0f] px-3 py-1.5 text-xs font-medium text-[#a1a1aa]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Available for new projects
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <GiantName />
    </>
  )
}
