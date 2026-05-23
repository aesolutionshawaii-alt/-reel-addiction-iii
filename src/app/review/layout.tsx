import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leave a Review · Reel Addiction III',
  description: 'Mahalo for fishing with us. Leave a quick review.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Leave a Review · Reel Addiction III',
    description: 'Mahalo for fishing with us. Leave a quick review.',
    url: 'https://reeladdictioniii.com/review',
    siteName: 'Reel Addiction III',
    locale: 'en_US',
    type: 'website',
  },
}

export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
