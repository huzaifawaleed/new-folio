import Link from 'next/link'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon, MailIcon } from '@/components/shared/social-icons'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://github.com/huzaifawaleed', Icon: GitHubIcon, label: 'GitHub' },
  { href: 'https://linkedin.com/in/huzaifa-waleed', Icon: LinkedInIcon, label: 'LinkedIn' },
  { href: 'https://wa.me/60116419627', Icon: WhatsAppIcon, label: 'WhatsApp' },
  { href: 'mailto:huzaifainaam225@gmail.com', Icon: MailIcon, label: 'Email' },
]

export function Footer() {
  return (
    <footer className="border-t border-[#27272a] bg-[#12121a]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-[#fafafa]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a855f7] text-xs font-black text-white">
                HW
              </span>
              Huzaifa Waleed
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#71717a]">
              Websites that turn visitors into paying customers. Based in Kuala Lumpur, working with businesses worldwide.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#71717a]">Navigation</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#a1a1aa] transition-colors duration-200 hover:text-[#fafafa]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#71717a]">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#27272a] bg-[#0a0a0f] text-[#a1a1aa] transition-all duration-200 hover:border-[#7c3aed]/50 hover:bg-[#1a1a25] hover:text-[#fafafa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#a1a1aa]">
              huzaifainaam225@gmail.com
            </p>
            <p className="mt-1 text-sm text-[#a1a1aa]">
              +60 11-6419 6270
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#27272a] pt-8 text-xs text-[#71717a] sm:flex-row">
          <p>© {new Date().getFullYear()} Huzaifa Waleed. All rights reserved.</p>
          <p>Designed & Built by Huzaifa Waleed</p>
        </div>
      </div>
    </footer>
  )
}
