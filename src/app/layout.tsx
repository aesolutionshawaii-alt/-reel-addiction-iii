import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Reel Addiction III | O'ahu's Premier Deep Sea Fishing Charter",
  description: "Experience world-class deep sea fishing aboard O'ahu's largest and fastest charter. SeaKeeper stabilized for smooth rides. Blue marlin, ahi, mahi mahi, and more from Ko Olina.",
  keywords: "deep sea fishing oahu, ko olina fishing charter, hawaii fishing charter, blue marlin hawaii, ahi fishing oahu, sport fishing oahu",
  openGraph: {
    title: "Reel Addiction III | O'ahu's Premier Deep Sea Fishing Charter",
    description: "Experience world-class deep sea fishing aboard O'ahu's largest and fastest charter boat.",
    url: 'https://reeladdictioniii.com',
    siteName: 'Reel Addiction III',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-inter text-navy bg-offwhite">{children}</body>
    </html>
  )
}
