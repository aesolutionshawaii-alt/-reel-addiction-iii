'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import CloudinaryImage from '@/components/CloudinaryImage';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState<boolean | null>(null)  // null = not determined yet
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isPlayingRef = useRef(isPlaying)

  // Keep ref in sync with state
  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  useEffect(() => {
    console.log('Hero MOUNTED')
    return () => console.log('Hero UNMOUNTED')
  }, [])

  // Determine mobile/desktop once on mount
  useEffect(() => {
    const mobile = window.innerWidth < 768
    setIsMobile(mobile)
    setVideoSrc(mobile ? '/videos/hero-mobile-720-noaudio.mp4' : 'https://res.cloudinary.com/dmu9szrap/video/upload/q_auto/videos/hero.mp4')
  }, [])

  // Pause video when scrolled out of view (use ref to avoid re-creating observer)
  useEffect(() => {
    if (!videoSrc) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting && isPlayingRef.current) {
            videoRef.current.play()
          } else {
            videoRef.current.pause()
          }
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [videoSrc])
  // Pause/resume video when mobile menu opens/closes
  useEffect(() => {
    const handlePauseAll = () => {
      console.log('HERO: Received pauseAllVideos');
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
    };

    const handleResumeAll = () => {
      console.log('HERO: Received resumeAllVideos');
      if (videoRef.current) {
        videoRef.current.play();
      }
      setIsPlaying(true);
    };

    window.addEventListener('pauseAllVideos', handlePauseAll);
    window.addEventListener('resumeAllVideos', handleResumeAll);
    return () => {
      window.removeEventListener('pauseAllVideos', handlePauseAll);
      window.removeEventListener('resumeAllVideos', handleResumeAll);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] md:h-screen md:min-h-[800px] w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(https://res.cloudinary.com/dmu9szrap/image/upload/f_auto,q_auto/images/hero-poster-mobile)' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Poster image - fades out when video ready */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}>
          {/* Mobile poster */}
          <CloudinaryImage
            src="images/hero-poster-mobile"
            alt="Reel Addiction III"
            fill
            className="object-cover object-bottom md:hidden"
            priority
          />
          {/* Desktop poster */}
          <CloudinaryImage
            src="images/hero-boat"
            alt="Reel Addiction III"
            fill
            className="object-cover object-bottom hidden md:block"
            priority
          />
        </div>

        {/* Video - only renders after we know mobile/desktop */}
        {videoSrc && isMobile !== null && (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay={!isMobile}
            loop
            muted
            playsInline
            preload={isMobile ? "metadata" : "auto"}
            onPlaying={() => setTimeout(() => setVideoLoaded(true), 100)}
            className={`absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        {/* Black gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-[49%]" />
      </div>

      {/* Play/Pause Button - lower right corner */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 w-8 h-8 md:w-14 md:h-14 flex items-center justify-center border-2 border-white/80 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white group"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <svg className="w-3 h-3 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
            <rect x="6" y="4" width="4" height="16" fill="white" className="group-hover:fill-white/90" />
            <rect x="14" y="4" width="4" height="16" fill="white" className="group-hover:fill-white/90" />
          </svg>
        ) : (
          <svg className="w-3 h-3 md:w-6 md:h-6 ml-0.5" viewBox="0 0 24 24" fill="none">
            <path d="M8 5v14l11-7z" fill="white" className="group-hover:fill-white/90" />
          </svg>
        )}
      </button>

      {/* Hero Content + Buttons */}
      <div className="absolute bottom-16 md:bottom-[50px] inset-x-0 md:left-[90px] md:right-auto z-10 flex flex-col items-center md:items-start px-6 md:px-0">
        <div className="text-left mb-6 w-[340px] md:w-auto">
          <p className="font-inter font-normal text-white text-[28px] md:text-[64px] leading-tight md:leading-normal">
            O&apos;ahu&apos;s Premier
          </p>
          <h1 className="font-outfit font-bold text-white text-[28px] md:text-[80px] leading-tight md:leading-normal tracking-tight">
            Deep Sea Fishing Charter
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-[320px] md:w-auto">
          <Link
            href="https://fareharbor.com/embeds/book/reeladdictioniii/?full-items=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-[200px] h-12 md:h-14 flex items-center justify-center bg-[#c41e3a] rounded-lg text-white font-inter text-base hover:bg-[#a01830] transition-colors"
          >
            Book Your Charter
          </Link>
          <Link
            href="https://www.youtube.com/@ReelAddictionIII-808"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-[200px] h-12 md:h-14 flex items-center justify-center gap-2 rounded-lg border border-[#d9d9d9] text-white font-inter text-base hover:bg-white/10 transition-colors"
          >
            <span>Watch Now</span>
            <svg className="w-5 h-5" viewBox="0 0 56 50" preserveAspectRatio="none" fill="none">
              <path d="M54.9 14.8c-.6-2.4-2.5-4.3-4.8-4.9C45.7 8.5 28 8.5 28 8.5s-17.7 0-22.1 1.4c-2.4.6-4.2 2.5-4.8 4.9C0 19.2 0 25 0 25s0 5.8 1.1 10.2c.6 2.4 2.5 4.3 4.8 4.9 4.4 1.4 22.1 1.4 22.1 1.4s17.7 0 22.1-1.4c2.4-.6 4.2-2.5 4.8-4.9C56 30.8 56 25 56 25s0-5.8-1.1-10.2z" stroke="#d9d9d9" strokeWidth="3" fill="none" />
              <path d="M22 33V17l16 8-16 8z" fill="#d9d9d9" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}