import type { Metadata } from 'next'
import { Outfit, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import PersistentHero from '@/components/PersistentHero'

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

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Reel Addiction III | O'ahu's Premier Deep Sea Fishing Charter",
  description: "Experience world-class deep sea fishing aboard O'ahu's largest and fastest charter. SeaKeeper stabilized for smooth rides. Blue marlin, ahi, mahi mahi, and more from Ko Olina.",
  keywords: "deep sea fishing oahu, ko olina fishing charter, hawaii fishing charter, blue marlin hawaii, ahi fishing oahu, sport fishing oahu",
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
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
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect to Cloudinary - eliminates ~500ms connection overhead */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="font-inter text-navy bg-offwhite">
        <PersistentHero />
        {children}
      </body>
    </html>
  )
}