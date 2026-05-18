'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { useEffect } from 'react'

interface NavLink {
  href: string
  label: string
}

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  pathname: string
  navLinks: NavLink[]
}

export function MobileMenu({ open, onClose, pathname, navLinks }: MobileMenuProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 flex w-72 flex-col bg-[#0a0a0f] px-6 py-8">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-[#fafafa]">Menu</span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-[#a1a1aa] transition-colors hover:bg-[#12121a] hover:text-[#fafafa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? 'bg-[#1a1a25] text-[#fafafa]'
                  : 'text-[#a1a1aa] hover:bg-[#12121a] hover:text-[#fafafa]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-200 hover:opacity-90"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  )
}
