'use client'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative h-[600px] md:h-[1100px]">
      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-cover bg-[center_20%] hidden md:block"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dmu9szrap/image/upload/f_auto,q_auto/images/cta-group')" }}
      />
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dmu9szrap/image/upload/f_auto,q_auto/images/cta-group-mobile')" }}
      />

      {/* Bottom gradient - fades to black */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 14%)',
          opacity: 0.8
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-32 md:pb-32 px-4">
        <h2 className="font-outfit font-bold text-[40px] md:text-[96px] text-white text-center mb-6 md:mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          Ready to Fish?
        </h2>
        <Link
          href="https://fareharbor.com/embeds/book/reeladdictioniii/?full-items=yes"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#c41e3a] hover:bg-[#a01830] text-white font-inter text-sm md:text-base px-8 py-3 md:px-10 md:py-4 rounded-lg transition-colors"
        >
          Book Your Charter
        </Link>
      </div>
    </section>
  )
}