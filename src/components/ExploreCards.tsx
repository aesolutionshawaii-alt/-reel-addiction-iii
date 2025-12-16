'use client'
import Image from 'next/image'
import Link from 'next/link'

const cards = [
  { title: 'The Vessel', image: '/images/vessel.jpg', href: '/about', position: 'object-center' },
  { title: 'The Experience', image: '/images/experience.jpg', href: '/charters', position: 'object-center' },
  { title: 'The Catch', image: '/images/catch.jpg', href: '/fish', position: 'object-bottom' },
]

export default function ExploreCards() {
  return (
    <section className="bg-transparent px-[59px] py-10">
      <div className="flex justify-center gap-[31px] px-[59px]">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative w-[420px] h-[280px] rounded-lg overflow-hidden"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${card.position}`}
              quality={90}
            />
            <div 
              className="absolute inset-0 rounded-lg"
              style={{
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 69.6%, rgba(0, 0, 0, 0.8) 100%)'
              }}
            />
            <div className="absolute bottom-[18px] left-[18px] right-[18px] flex items-end justify-between">
              <h3 className="text-white font-outfit font-medium text-lg">{card.title}</h3>
              <svg className="w-8 h-3 text-white transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 32 12">
                <path d="M0 6h28M23 1l5 5-5 5" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
