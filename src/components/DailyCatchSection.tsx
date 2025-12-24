'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { client, urlFor } from '../lib/sanity'

interface Catch {
  _id: string
  image: any
  caption: string
  date: string
  species?: string[]
}

export default function DailyCatchSection({ isDark = false }: { isDark?: boolean }) {
  const [catches, setCatches] = useState<Catch[]>([])
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  useEffect(() => {
    client
      .fetch(`*[_type == "dailyCatch"] | order(date desc)[0...7]`)
      .then((data: Catch[]) => setCatches(data))
      .catch(console.error)
  }, [])

  useEffect(() => {
    const checkScrollability = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        
        // Clear hovered card on scroll - mobile only
        if (window.innerWidth < 768) {
          setHoveredCard(null)
        }
      }
    }
    
    checkScrollability()
    const container = scrollContainerRef.current
    container?.addEventListener('scroll', checkScrollability)
    window.addEventListener('resize', checkScrollability)
    
    return () => {
      container?.removeEventListener('scroll', checkScrollability)
      window.removeEventListener('resize', checkScrollability)
    }
  }, [catches])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  if (catches.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-5 md:px-[39px]">
          <h2 className="font-outfit font-medium text-[48px] md:text-[72px] mb-10">
            Recent Catches
          </h2>
          <p className="text-red-500">No catches found - check Sanity connection</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-5 md:px-[39px]">
        <motion.h2
          className="font-outfit font-medium text-[48px] md:text-[72px] mb-10"
          animate={{ color: isDark ? "#f7f5f2" : "#0c1e3c" }}
          transition={{ duration: 0.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Recent Catches
        </motion.h2>
      </div>

      <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide snap-x snap-mandatory md:snap-none">
        <div className="flex gap-6 pl-[calc((100vw-380px)/2)] md:pl-[39px] min-[1600px]:pl-[calc((100vw-1600px)/2+39px)] py-2">
          {catches.map((catchItem, index) => (
            <motion.div
              key={catchItem._id}
              className="flex-shrink-0 rounded-lg snap-center"
              style={{ padding: '8px' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
            >
              <div
                className="relative w-[380px] h-[520px] rounded-lg overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredCard(catchItem._id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Image
                  src={urlFor(catchItem.image).width(800).url()}
                  alt={catchItem.caption || 'Daily catch'}
                  fill
                  className="object-cover"
                />
                
                <div className="absolute top-4 left-4 z-10">
                  <p className="text-white font-outfit text-sm tracking-widest uppercase">
                    {new Date(catchItem.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 z-10"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredCard === catchItem._id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {catchItem.caption && (
                    <p className="text-white font-outfit text-lg leading-snug mb-3">
                      {catchItem.caption}
                    </p>
                  )}
                  {catchItem.species && catchItem.species.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {catchItem.species.map((species) => (
                        <span
                          key={species}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-outfit uppercase tracking-wider"
                        >
                          {species.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
          
          {/* Spacer to center last card on mobile, blank area on desktop */}
          <div className="flex-shrink-0 w-[calc((100vw-380px)/2)] md:w-[404px]" />
        </div>
      </div>

      {/* Scroll Navigation Buttons - desktop only */}
      <div className="hidden md:flex gap-3 justify-end mt-6 pr-[404px]">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all border ${
            canScrollLeft
              ? 'bg-gray-700/30 border-gray-600/40 hover:bg-gray-600/40 hover:border-gray-500/50 cursor-pointer'
              : 'bg-gray-800/20 border-gray-700/30 cursor-not-allowed opacity-50'
          }`}
          aria-label="Scroll left"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke={isDark ? "#f7f5f2" : "#0c1e3c"} 
            strokeWidth={2} 
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all border ${
            canScrollRight
              ? 'bg-gray-700/30 border-gray-600/40 hover:bg-gray-600/40 hover:border-gray-500/50 cursor-pointer'
              : 'bg-gray-800/20 border-gray-700/30 cursor-not-allowed opacity-50'
          }`}
          aria-label="Scroll right"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke={isDark ? "#f7f5f2" : "#0c1e3c"} 
            strokeWidth={2} 
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}