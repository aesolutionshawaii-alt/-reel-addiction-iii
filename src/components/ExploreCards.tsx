'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const cards = [
  { title: 'The Vessel', image: '/images/vessel.jpg', href: '/about', position: 'object-center' },
  { title: 'The Experience', image: '/images/experience.jpg', href: '/charters', position: 'object-center' },
  { title: 'The Catch', image: '/images/catch.jpg', href: '/fish', position: 'object-bottom' },
]

const MotionLink = motion.create(Link)

function ScrollCard({ card, index }: { card: typeof cards[0], index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.75"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [50, 0])

  return (
    <MotionLink
      ref={ref}
      href={card.href}
      style={{ opacity, y }}
      className="group relative w-full max-w-[340px] md:max-w-none md:w-[380px] h-[245px] md:h-[275px] rounded-lg overflow-hidden"
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
    </MotionLink>
  )
}

export default function ExploreCards() {
  return (
    <section className="bg-transparent px-4 md:px-8 pt-12 md:pt-24 pb-12 md:pb-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[32px]">
        {cards.map((card, index) => (
          <ScrollCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  )
}