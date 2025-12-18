'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section className="relative h-[100svh] md:h-screen md:min-h-[800px] w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-poster-mobile.jpg)' }}>
      {/* Background */}
      <div className="absolute inset-0">
        {/* Poster image - desktop only, fades out when video ready */}
        <div className={`absolute inset-0 transition-opacity duration-500 hidden md:block ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}>
          <Image
            src="/images/hero-boat.jpg"
            alt="Reel Addiction III"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>

        {/* Desktop video - fades in when ready */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-bottom hidden md:block transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Mobile video - fades in when ready */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover md:hidden transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="/videos/hero-mobile-720-noaudio.mp4" type="video/mp4" />
        </video>

        {/* Black gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-[49%]" />
      </div>

      {/* Logo */}
      <Link href="/" className="absolute top-4 left-4 md:top-[31px] md:left-[38px] z-10">
        <Image
          src="/images/logo-white.png"
          alt="Reel Addiction III"
          width={252}
          height={68}
          className="w-[150px] h-[40px] md:w-[252px] md:h-[68px] object-contain"
        />
      </Link>

      {/* Navigation - desktop only */}
      <nav className="absolute top-[31px] right-[38px] z-10 hidden md:block">
        <p className="font-outfit font-normal text-[#f7f5f2] text-base">
          <Link href="#about" className="hover:underline">About</Link>
          <span className="mx-2">|</span>
          <Link href="#charters" className="hover:underline">Charters</Link>
          <span className="mx-2">|</span>
          <Link href="#fish" className="hover:underline">Fish</Link>
          <span className="mx-2">|</span>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </p>
      </nav>

      {/* Hero Content + Buttons */}
      <div className="absolute bottom-16 md:bottom-[50px] inset-x-0 md:left-[90px] md:right-auto z-10 flex flex-col items-center md:items-start px-6 md:px-0">
        {/* Text block */}
        <div className="text-left mb-6 w-[340px] md:w-auto">
          <p className="font-inter font-normal text-white text-[28px] md:text-[64px] leading-tight md:leading-normal">
            O&apos;ahu&apos;s Premier
          </p>
          <h1 className="font-inter font-normal text-white text-[28px] md:text-[80px] leading-tight md:leading-normal tracking-tight">
            Deep Sea Fishing Charter
          </h1>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-[320px] md:w-auto">
          <Link 
            href="#book" 
            className="w-full md:w-[200px] h-12 md:h-14 flex items-center justify-center bg-[#c41e3a] rounded-lg text-white font-inter text-base hover:bg-[#a01830] transition-colors"
          >
            Book Your Charter
          </Link>
          <button className="w-full md:w-[200px] h-12 md:h-14 flex items-center justify-center gap-2 rounded-lg border border-[#d9d9d9] text-white font-inter text-base hover:bg-white/10 transition-colors">
            <span>Watch Now</span>
            <svg className="w-5 h-5" viewBox="0 0 56 50" preserveAspectRatio="none" fill="none">
              <path d="M54.9 14.8c-.6-2.4-2.5-4.3-4.8-4.9C45.7 8.5 28 8.5 28 8.5s-17.7 0-22.1 1.4c-2.4.6-4.2 2.5-4.8 4.9C0 19.2 0 25 0 25s0 5.8 1.1 10.2c.6 2.4 2.5 4.3 4.8 4.9 4.4 1.4 22.1 1.4 22.1 1.4s17.7 0 22.1-1.4c2.4-.6 4.2-2.5 4.8-4.9C56 30.8 56 25 56 25s0-5.8-1.1-10.2z" stroke="#d9d9d9" strokeWidth="3" fill="none"/>
              <path d="M22 33V17l16 8-16 8z" fill="#d9d9d9"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}