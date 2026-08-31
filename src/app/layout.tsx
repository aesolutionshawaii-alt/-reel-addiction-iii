import type { Metadata } from 'next'
import { Outfit, Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import PersistentHero from '@/components/PersistentHero'
import MessageCaptain from '@/components/MessageCaptain'

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

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://reeladdictioniii.com/#business',
  name: 'Reel Addiction III Sportfishing',
  description:
    "Private deep sea fishing charters aboard a 62' SeaKeeper-stabilized sportfishing yacht, departing Ko Olina Marina on O'ahu's leeward coast.",
  url: 'https://reeladdictioniii.com',
  image: 'https://res.cloudinary.com/dmu9szrap/image/upload/f_auto,q_auto/vessel/vessel-exterior',
  telephone: '+1-808-867-3474',
  priceRange: '$500 - $3,800',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '92-100 Waipahe Pl, Ko Olina Marina, Slip F7',
    addressLocality: 'Kapolei',
    addressRegion: 'HI',
    postalCode: '96707',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'Place',
    name: "O'ahu, Hawaii",
  },
  sameAs: [
    'https://www.instagram.com/reeladdictioniiisportfishing/',
    'https://www.youtube.com/@ReelAddictionIII-808',
    'https://www.facebook.com/people/Reeladdictioniiisportfishing/100092848172223/',
    'https://www.tripadvisor.com/Attraction_Review-g11900445-d26852561-Reviews-Reel_Addiction_III_Sportfishing-Ko_Olina_Kapolei_Oahu_Hawaii.html',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      name: '3/4 Day Private Charter',
      price: '3095',
      priceCurrency: 'USD',
      url: 'https://reeladdictioniii.com/charters/3-4-day',
    },
    {
      '@type': 'Offer',
      name: 'Full Day Private Charter',
      price: '3495',
      priceCurrency: 'USD',
      url: 'https://reeladdictioniii.com/charters/full-day',
    },
    {
      '@type': 'Offer',
      name: 'Extravaganza Private Charter',
      price: '3800',
      priceCurrency: 'USD',
      url: 'https://reeladdictioniii.com/charters/extravaganza',
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <PersistentHero />
        {children}
        <MessageCaptain />
        {/* FareHarbor Lightframe - autolightframe converts links to modals */}
        <Script
          src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}