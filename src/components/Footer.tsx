'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy px-5 py-10 md:px-20 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8 md:mb-12">
          {/* Left - Logo and Phone */}
          <div className="text-center md:text-left">
            <Image 
              src="/images/logo-white.png" 
              alt="Reel Addiction III" 
              width={200} 
              height={80}
              className="mb-4 mx-auto md:mx-0 w-[150px] md:w-[200px]"
            />
            <p className="font-outfit text-[20px] md:text-[36px] text-white">(808) 867-FISH</p>
          </div>
          
          {/* Right - Address and Social */}
          <div className="text-center md:text-right">
            <p className="font-outfit text-[16px] md:text-[36px] text-white mb-4">
              Ko Olina Marina, Slip F7<br className="md:hidden" />
              <span className="hidden md:inline">, </span>Kapolei, HI 96707
            </p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="https://www.instagram.com/reeladdictioniiisportfishing/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@ReelAddictionIII-808" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/people/Reeladdictioniiisportfishing/100092848172223/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Nav Links - Centered */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
          <Link href="/about" className="font-outfit text-[16px] md:text-[36px] text-white hover:text-gray-300 transition-colors">About</Link>
          <span className="font-outfit text-[16px] md:text-[36px] text-white">|</span>
          <Link href="/charters" className="font-outfit text-[16px] md:text-[36px] text-white hover:text-gray-300 transition-colors">Charters</Link>
          <span className="font-outfit text-[16px] md:text-[36px] text-white">|</span>
          <Link href="/fish" className="font-outfit text-[16px] md:text-[36px] text-white hover:text-gray-300 transition-colors">Fish</Link>
          <span className="font-outfit text-[16px] md:text-[36px] text-white">|</span>
          <Link href="/contact" className="font-outfit text-[16px] md:text-[36px] text-white hover:text-gray-300 transition-colors">Contact</Link>
          <span className="font-outfit text-[16px] md:text-[36px] text-white">|</span>
<Link href="/oahu-deep-sea-fishing-guide" className="font-outfit text-[16px] md:text-[36px] text-white hover:text-gray-300 transition-colors">Fishing Guide</Link>
          <span className="font-outfit text-[16px] md:text-[36px] text-white">|</span>
          <Link href="/fishing-near-aulani" className="font-outfit text-[16px] md:text-[36px] text-white hover:text-gray-300 transition-colors">Ko Olina Guests</Link>
        </div>
        
        {/* Copyright */}
        <p className="font-outfit text-white text-xs md:text-sm text-center md:text-left">© 2025 Reel Addiction III</p>
      </div>
    </footer>
  )
}