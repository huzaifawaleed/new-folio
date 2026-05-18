import type { Metadata } from 'next'

interface SeoProps {
  title: string
  description: string
  path: string
  ogImage?: string
}

const BASE_URL = 'https://huzaifawaleed.dev'

export function generateSeo({ title, description, path, ogImage }: SeoProps): Metadata {
  const url = `${BASE_URL}${path}`
  const image = ogImage ?? `${BASE_URL}/og/default.png`

  return {
    title: `${title} | Huzaifa Waleed`,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Huzaifa Waleed',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: { canonical: url },
  }
}
