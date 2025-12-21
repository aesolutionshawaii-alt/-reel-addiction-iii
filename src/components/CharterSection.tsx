'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import HLSVideo from './HLSVideo'// Use the new component

const charters = [
  { title: '3/4 Day', image: '/images/charter-34day.jpg', video: '/videos/charter-34day-web.mp4', mobileVideo: '/videos/hls/charter-34day/playlist.m3u8', description: 'The sweet spot. Enough time to find the bite and land your trophy.', price: '$2495', position: 'left', row: 0, objectPosition: 'center' },
  { title: 'Full Day', image: '/images/charter-fullday.jpg', video: '/videos/charter-fullday-web.mp4', mobileVideo: '/videos/hls/charter-fullday/playlist.m3u8', description: 'Go deeper. More water, more chances, bigger fish.', price: '$2995', position: 'right', row: 0, objectPosition: '60% center' },
  { title: 'Extravaganza', image: '/images/charter-extravaganza.jpg', video: '/videos/charter-extravaganza-web.mp4', mobileVideo: '/videos/hls/charter-extravaganza/playlist.m3u8', description: "Dawn to dusk. Fish every minute of daylight. The ultimate O'ahu fishing experience.", price: '$3300', position: 'left', row: 1, objectPosition: 'center' },
  { title: 'Custom Trip', image: '/images/charter-custom.jpg', video: '/videos/charter-custom-web.mp4', mobileVideo: '/videos/hls/charter-custom/playlist.m3u8', description: "Outer islands. Overnighters. Ash scatterings. Tell us what you need — we'll make it happen.", price: 'Call for pricing.', position: 'right', row: 1, objectPosition: 'center' },
]

export default function CharterSection({ isDark = false }: { isDark?: boolean }) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [desktopVideoReady, setDesktopVideoReady] = useState<string | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [loadVideoIndex, setLoadVideoIndex] = useState(-1)
  const [sectionInView, setSectionInView] = useState(false)
  const [videoLoadedStates, setVideoLoadedStates] = useState<{ [key: number]: boolean | 'ended' }>({})
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const desktopVideoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})
  const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pageScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const initializedVideos = useRef<Set<number>>(new Set()) // Track which videos have been initialized

  const getHoveredRow = () => {
    if (!hoveredCard) return null
    return charters.find(c => c.title === hoveredCard)?.row
  }

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768)
  }, [])

  useEffect(() => {
    Object.entries(desktopVideoRefs.current).forEach(([title, video]) => {
      if (video) {
        if (hoveredCard === title) {
          video.play()
        } else {
          video.pause()
        }
      }
    })
  }, [hoveredCard])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft
        const cardWidth = window.innerWidth - 48
        const newIndex = Math.round(scrollLeft / cardWidth)
        setActiveIndex(Math.min(newIndex, charters.length - 1))
        
        // Set scrolling state
        setIsScrolling(true)
        
        // Cancel any pending video load
        if (loadTimeoutRef.current) {
          clearTimeout(loadTimeoutRef.current)
          loadTimeoutRef.current = null
        }
        
        // Clear existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
        
        // Set timeout to detect when scrolling stops
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false)
        }, 200)
      }
    }

    const ref = scrollRef.current
    ref?.addEventListener('scroll', handleScroll)
    return () => {
      ref?.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  // Detect vertical page scroll
  useEffect(() => {
    const handlePageScroll = () => {
      setIsScrolling(true)
      
      // Cancel any pending video load
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current)
        loadTimeoutRef.current = null
      }
      
      if (pageScrollTimeoutRef.current) {
        clearTimeout(pageScrollTimeoutRef.current)
      }
      
      pageScrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 200)
    }

    window.addEventListener('scroll', handlePageScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handlePageScroll)
      if (pageScrollTimeoutRef.current) {
        clearTimeout(pageScrollTimeoutRef.current)
      }
    }
  }, [])

  // Debounce video loading - start loading video after scroll settles
  useEffect(() => {
    if (!hasScrolled) return // Don't load videos until section is in view
    if (isScrolling) return // Don't trigger loading while actively scrolling
    
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current)
    }
    
    loadTimeoutRef.current = setTimeout(() => {
      // Reset 'ended' state when returning to a card
      if (videoLoadedStates[activeIndex] === 'ended') {
        setVideoLoadedStates(prev => ({ ...prev, [activeIndex]: true }))
      }
      setLoadVideoIndex(activeIndex)
    }, 400)
    
    return () => {
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current)
      }
    }
  }, [activeIndex, hasScrolled, isScrolling])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionInView(entry.isIntersecting)
        
        if (entry.isIntersecting) {
          setHasScrolled(true) // Allow video loading once section is visible
        }
        
        if (!entry.isIntersecting) {
          videoRefs.current.forEach(video => {
            if (video) {
              video.pause()
              video.currentTime = 0
            }
          })
        }
      },
      { threshold: 0.1 }
    )
  
    if (scrollRef.current) {
      observer.observe(scrollRef.current)
    }
  
    return () => observer.disconnect()
  }, [])

  // Control playback for the active video
  useEffect(() => {
    const video = videoRefs.current[loadVideoIndex]
    if (!video) return
    
    // If returning to this video, reset to beginning
    if (videoLoadedStates[loadVideoIndex] === true && video.currentTime > 0) {
      video.currentTime = 0
    }
    
    if (sectionInView && isPlaying && videoLoadedStates[loadVideoIndex] === true) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [loadVideoIndex, sectionInView, isPlaying, videoLoadedStates])

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const handleVideoLoaded = (index: number) => {
    setVideoLoadedStates(prev => ({ ...prev, [index]: true }))
  }

  const handleVideoEnded = (index: number) => {
    setVideoLoadedStates(prev => ({ ...prev, [index]: 'ended' }))
  }

  return (
    <section className="pt-24 md:pt-16 pb-16 relative">
      <div className="max-w-[1600px] mx-auto">
        <motion.h2
          className="font-outfit font-medium text-[32px] md:text-[72px] mb-20 md:mb-10 px-4 md:px-[59px] -translate-y-4 md:-translate-y-6"
          animate={{ color: isDark ? "#f7f5f2" : "#0c1e3c" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          A Different Kind of Charter.
        </motion.h2>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            <div className="flex gap-4 pb-4 px-[calc(50vw-150px)]" style={{ width: 'max-content' }}>
              {charters.map((charter, index) => {
                const isActiveCard = index === activeIndex
                const shouldLoadVideo = index === loadVideoIndex && !isScrolling
                const hasBeenInitialized = initializedVideos.current.has(index)
                const videoIsReady = videoLoadedStates[index] === true
                const videoHasEnded = videoLoadedStates[index] === 'ended'
                const showVideo = isActiveCard && videoIsReady && !videoHasEnded && isPlaying && !isScrolling
                
                // Give video src if: (should load AND not initialized) OR (already initialized - keep it)
                const videoSrc = (shouldLoadVideo && !hasBeenInitialized) || hasBeenInitialized 
                  ? charter.mobileVideo 
                  : ''
                
                return (
                  <div
                    key={charter.title}
                    className="relative w-[calc(100vw-48px)] aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0 snap-center"
                  >
                    {/* Poster Image - always present, hides when video playing */}
                    <Image
                      src={charter.image}
                      alt={charter.title}
                      fill
                      className={`object-cover z-10 transition-opacity duration-500 ${
                        showVideo ? 'opacity-0' : 'opacity-100'
                      }`}
                      style={{ objectPosition: charter.objectPosition }}
                      quality={90}
                      priority={index === 0}
                    />
                    
                    {/* Video - always in DOM, only gets src when first loaded */}
                    <HLSVideo
                      src={videoSrc}
                      className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
                        showVideo ? 'opacity-100' : 'opacity-0'
                      }`}
                      videoRef={(el) => { videoRefs.current[index] = el }}
                      onCanPlayThrough={() => {
                        initializedVideos.current.add(index)
                        handleVideoLoaded(index)
                      }}
                      onEnded={() => handleVideoEnded(index)}
                    />
                    
                    {/* Gradients - always on top */}
                    <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(13,13,15,1) 0%, rgba(13,13,15,0) 25%)' }} />
                    <div className="absolute inset-0 z-20 pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(13,13,15,1) 0%, rgba(13,13,15,0) 50%)' }} />
                    
                    {/* Content - always on top */}
                    <h3 className="absolute top-3 left-0 right-0 text-center text-[#f7f5f2] font-outfit font-normal text-[28px] z-30">
                      {charter.title}
                    </h3>
                    <div className="absolute bottom-4 left-4 right-4 z-30">
                      <p className="text-white font-outfit font-light text-[16px] leading-snug mb-2">
                        {charter.description}
                      </p>
                      <p className="text-white font-outfit font-medium text-[20px] mb-3">
                        {charter.price}
                      </p>
                      <Link
                        href="/charters"
                        className="block w-full py-3 bg-white rounded text-center text-[#1e1e1e] font-outfit font-medium text-sm"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-2 px-4 h-8 rounded-full bg-white/20">
              {charters.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={togglePlayback}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
            >
              {isPlaying ? (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex flex-col gap-[22px]">
            {[0, 1].map((rowIndex) => (
              <div key={rowIndex} className="relative h-[750px]" style={{ width: '1522px', margin: '0 auto' }}>
                {charters.filter(c => c.row === rowIndex).map((charter) => {
                  const isHovered = hoveredCard === charter.title
                  const hoveredRow = getHoveredRow()
                  const isSameRowHovered = hoveredRow === charter.row && !isHovered
                  
                  return (
                    <motion.div
                      key={charter.title}
                      className="absolute top-0 h-[750px] rounded-[6px] overflow-hidden cursor-pointer"
                      animate={{
                        width: isHovered ? 850 : isSameRowHovered ? 650 : 750,
                        left: charter.position === 'left'
                          ? 0
                          : isHovered ? 672 : isSameRowHovered ? 872 : 772,
                      }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      onMouseEnter={() => setHoveredCard(charter.title)}
                      onMouseLeave={() => {
                        setHoveredCard(null)
                        setDesktopVideoReady(null)
                      }}
                    >
                      <motion.div
                        className={`absolute top-0 ${charter.position === 'left' ? 'left-[-50px]' : 'right-[-50px]'} w-[950px] h-full`}
                        animate={{
                          x: isHovered
                            ? (charter.position === 'left' ? 30 : -30)
                            : isSameRowHovered
                              ? (charter.position === 'left' ? -30 : 30)
                              : 0
                        }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      >
                        <Image
                          src={charter.image}
                          alt={charter.title}
                          fill
                          className="object-cover"
                          style={{ objectPosition: charter.objectPosition }}
                          quality={90}
                        />
                        <motion.div
                          className="absolute inset-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: desktopVideoReady === charter.title ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {isDesktop && (
                            <video
                              ref={el => { desktopVideoRefs.current[charter.title] = el }}
                              src={charter.video}
                              loop
                              muted
                              playsInline
                              preload="auto"
                              onPlay={() => setDesktopVideoReady(charter.title)}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: charter.objectPosition }}
                            />
                          )}
                        </motion.div>
                      </motion.div>
                      
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,13,15,1) 0%, rgba(13,13,15,0) 25%)' }} />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(13,13,15,1) 0%, rgba(13,13,15,0) 40%)' }} />
                      
                      <h3 className="absolute top-0 left-0 right-0 text-center text-[#f7f5f2] font-outfit font-normal text-[40px] py-2">
                        {charter.title}
                      </h3>
                      
                      <div className="absolute bottom-[18px] left-[18px] right-[18px] flex justify-between items-end">
                        <div className="max-w-[450px]">
                          <p className="text-white font-outfit font-light text-[24px] leading-normal">
                            {charter.description}
                          </p>
                          <p className="text-white font-outfit font-light text-[24px]">
                            {charter.price}
                          </p>
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          transition={{ delay: isHovered ? 0.3 : 0, duration: 0.2 }}
                        >
                          <Link
                            href="/charters"
                            className="flex items-center justify-center w-[150px] h-10 bg-white rounded text-[#1e1e1e] font-outfit font-normal text-sm hover:bg-gray-100 transition-colors"
                          >
                            Learn More →
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}