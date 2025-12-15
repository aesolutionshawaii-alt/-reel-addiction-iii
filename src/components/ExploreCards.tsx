'use client'

import Image from 'next/image'
import Link from 'next/link'

const cards = [
  {
    title: 'The Vessel',
    image: '/images/vessel.jpg',
    href: '/about',
  },
  {
    title: 'The Experience',
    image: '/images/experience.jpg',
    href: '/charters',
  },
  {
    title: 'The Catch',
    image: '/images/catch.jpg',
    href: '/fish',
  },
]

export default function ExploreCards() {
  return (
    <section className="bg-offwhite section-padding">
      <div className="container-width">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] rounded-card overflow-hidden card"
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <h3 className="text-white font-outfit font-semibold text-lg md:text-xl">
                  {card.title}
                </h3>
                <svg 
                  className="w-6 h-6 text-white transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
