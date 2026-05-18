import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#71717a]">404</p>
      <h1 className="mt-4 text-4xl font-bold text-[#fafafa]">Page Not Found</h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#a1a1aa]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl border border-[#27272a] bg-[#12121a] px-5 py-2.5 text-sm font-semibold text-[#fafafa] transition-all hover:border-[#7c3aed]/50 hover:bg-[#1a1a25]"
      >
        <ArrowLeft size={14} />
        Go Home
      </Link>
    </div>
  )
}
