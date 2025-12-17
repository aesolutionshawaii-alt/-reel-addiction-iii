'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

const charters = [
  { title: '3/4 Day', image: '/images/charter-34day.jpg', description: 'The sweet spot. Enough time to find the bite and land your trophy.', price: '$2495', position: 'left', row: 0, objectPosition: 'center' },
  { title: 'Full Day', image: '/images/charter-fullday.jpg', description: 'Go deeper. More water, more chances, bigger fish.', price: '$2995', position: 'right', row: 0, objectPosition: '60% center' },
  { title: 'Extravaganza', image: '/images/charter-extravaganza.jpg', description: "Dawn to dusk. Fish every minute of daylight. The ultimate O'ahu fishing experience.", price: '$3300', position: 'left', row: 1, objectPosition: 'center' },
  { title: 'Custom Trip', image: '/images/charter-custom.jpg', description: "Outer islands. Overnighters. Ash scatterings. Tell us what you need — we'll make it happen.", price: 'Call for pricing.', position: 'right', row: 1, objectPosition: 'center' },
]

export default function CharterSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(triggerRef, { once: false })

  const getHoveredRow = () => {
    if (!hoveredCard) return null
    return charters.find(c => c.title === hoveredCard)?.row
  }

  return (
    <section className="px-[59px] pt-40 pb-16 relative">
      {/* Trigger for heading color */}
      <div ref={triggerRef} style={{ position: 'absolute', top: '100px', left: 0, height: '1px', width: '100%', pointerEvents: 'none' }} />
      
      <div className="max-w-[1600px] mx-auto">
        <motion.h2 
          className="font-outfit font-medium text-[64px] mb-10"
          animate={{ color: isInView ? "#f7f5f2" : "#0c1e3c" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          A Different Kind of Charter.
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
                    className="group relative h-[750px] rounded-[6px] overflow-hidden cursor-pointer"
                    animate={{ 
                      width: isHovered ? 820 : isSameRowHovered ? 680 : 750,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    onMouseEnter={() => setHoveredCard(charter.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Fixed width image - card clips it */}
                    <div className={`absolute top-0 ${charter.position === 'left' ? 'left-0' : 'right-0'} w-[820px] h-full`}>
                      <Image
                        src={charter.image}
                        alt={charter.title}
                        fill
                        className="object-cover"
                        style={{ objectPosition: charter.objectPosition }}
                        quality={90}
                      />
                    </div>
                    
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
