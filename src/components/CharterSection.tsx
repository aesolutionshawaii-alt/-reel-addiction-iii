'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const charters = [
  { title: '3/4 Day', image: '/images/charter-34day.jpg', description: 'The sweet spot. Enough time to find the bite and land your trophy.', price: '$2495', position: 'left', row: 0 },
  { title: 'Full Day', image: '/images/charter-fullday.jpg', description: 'Go deeper. More water, more chances, bigger fish.', price: '$2995', position: 'right', row: 0 },
  { title: 'Extravaganza', image: '/images/charter-extravaganza.jpg', description: "Dawn to dusk. Fish every minute of daylight. The ultimate O'ahu fishing experience.", price: '$3300', position: 'left', row: 1 },
  { title: 'Custom Trip', image: '/images/charter-custom.jpg', description: "Outer islands. Overnighters. Ash scatterings. Tell us what you need — we'll make it happen.", price: 'Call for pricing.', position: 'right', row: 1 },
]

export default function CharterSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 50%"]
  })
  
  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#0c1e3c", "#ffffff"]
  )

  const getHoveredRow = () => {
    if (!hoveredCard) return null
    return charters.find(c => c.title === hoveredCard)?.row
  }

  return (
    <section 
      ref={sectionRef}
      className="px-[59px] py-16"
    >
      <div className="max-w-[1322px] mx-auto">
        <motion.h2 
          className="font-outfit font-medium text-[48px] mb-10"
          style={{ color: textColor }}
        >
          A Different Kind of<br />Charter.
        </motion.h2>
        <div className="flex flex-col gap-[22px]">
          {[0, 1].map((rowIndex) => (
            <div key={rowIndex} className="flex gap-[22px] justify-center">
              {charters.filter(c => c.row === rowIndex).map((charter) => {
                const isHovered = hoveredCard === charter.title
                const hoveredRow = getHoveredRow()
                const isSameRowHovered = hoveredRow === charter.row && !isHovered
                
                return (
                  <motion.div
                    key={charter.title}
                    className="group relative h-[650px] rounded-[6px] overflow-hidden cursor-pointer"
                    animate={{ 
                      width: isHovered ? 900 : isSameRowHovered ? 400 : 650,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    onMouseEnter={() => setHoveredCard(charter.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Image
                      src={charter.image}
                      alt={charter.title}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                    {/* Top gradient */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%)'
                      }}
                    />
                    {/* Bottom gradient */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%)'
                      }}
                    />
                    
                    {/* Title at top center */}
                    <h3 className="absolute top-0 left-0 right-0 text-center text-[#f7f5f2] font-outfit font-normal text-[40px] py-2">
                      {charter.title}
                    </h3>
                    
                    {/* Bottom content */}
                    <div className="absolute bottom-[18px] left-[18px] right-[18px] flex justify-between items-end">
                      <div className="max-w-[450px]">
                        <p className="text-white font-outfit font-light text-[24px] leading-normal">
                          {charter.description}
                        </p>
                        <p className="text-white font-outfit font-light text-[24px]">
                          {charter.price}
                        </p>
                      </div>
                      <Link 
                        href="/charters" 
                        className="flex items-center justify-center w-[150px] h-10 bg-white rounded text-[#1e1e1e] font-outfit font-normal text-sm hover:bg-gray-100 transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
