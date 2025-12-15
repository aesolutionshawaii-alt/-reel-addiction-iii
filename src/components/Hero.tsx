'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-boat.jpg"
          alt="Reel Addiction III deep sea fishing charter boat"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-transparent to-navy/80" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-5 py-4 md:px-20 md:py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-white.png"
            alt="Reel Addiction III"
            width={180}
            height={60}
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-white font-outfit hover:text-offwhite transition-colors">
            About
          </Link>
          <Link href="/charters" className="text-white font-outfit hover:text-offwhite transition-colors">
            Charters
          </Link>
          <Link href="/fish" className="text-white font-outfit hover:text-offwhite transition-colors">
            Fish
          </Link>
          <Link href="/contact" className="text-white font-outfit hover:text-offwhite transition-colors">
            Contact
          </Link>
          <Link href="/charters" className="btn-primary">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-20 md:pb-32 px-5 md:px-20">
        <p className="text-white/90 font-outfit text-lg md:text-xl mb-2">
          O&apos;ahu&apos;s Premier
        </p>
        <h1 className="text-white font-outfit font-bold text-hero-mobile md:text-hero text-shadow-lg mb-6 max-w-4xl">
          Deep Sea Fishing Charter
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/charters" className="btn-primary text-center">
            Book Your Charter
          </Link>
          <button className="btn-secondary flex items-center justify-center gap-2">
            <span>Watch Now</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
