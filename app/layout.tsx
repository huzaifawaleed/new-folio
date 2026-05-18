import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  style: 'italic',
  weight: '400',
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: 'Huzaifa Waleed — Web Developer',
  description:
    'Websites that turn visitors into paying customers. Web developer based in Kuala Lumpur, specializing in F&B, beauty, and healthcare businesses worldwide.',
  metadataBase: new URL('https://huzaifawaleed.dev'),
  openGraph: {
    type: 'website',
    siteName: 'Huzaifa Waleed',
    images: [{ url: '/og/default.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-[#0a0a0f] font-sans text-[#fafafa] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
