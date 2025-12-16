'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-boat.jpg"
          alt="Reel Addiction III deep sea fishing charter boat"
          fill
          className="object-cover object-bottom"
          priority
          quality={90}
        />
        {/* Black gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-[49%]" />
      </div>

      {/* Logo */}
      <Link href="/" className="absolute top-[31px] left-[38px] z-10">
        <Image
          src="/images/logo-white.png"
          alt="Reel Addiction III"
          width={252}
          height={68}
          className="w-[252px] h-[68px] object-contain"
        />
      </Link>

      {/* Navigation */}
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

      {/* Hero Content */}
      <div className="absolute bottom-[130px] left-[90px] z-10">
        <p className="font-inter font-normal text-white text-[40px] leading-normal">
          O&apos;ahu&apos;s Premier
        </p>
        <h1 className="font-inter font-normal text-white text-[48px] leading-normal tracking-tight max-w-[600px]">
          Deep Sea Fishing Charter
        </h1>
      </div>

      {/* CTA Buttons */}
      <div className="absolute bottom-[50px] left-[88px] flex gap-4 z-10">
        <Link 
          href="#book" 
          className="w-[140px] h-10 flex items-center justify-center bg-[#c41e3a] rounded-lg text-white font-inter text-xs hover:bg-[#a01830] transition-colors"
        >
          Book Your Charter
        </Link>
        <button className="w-[140px] h-10 flex items-center justify-center gap-2 rounded-lg border border-[#d9d9d9] text-white font-inter text-xs hover:bg-white/10 transition-colors">
          <span>Watch Now</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
