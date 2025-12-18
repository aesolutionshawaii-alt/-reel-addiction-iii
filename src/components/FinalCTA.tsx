'use client'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative h-[500px] md:h-[1000px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cta-group.jpg')" }}
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
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 md:pb-32 px-4">
        <h2 className="font-outfit font-bold text-[40px] md:text-[96px] text-white text-center mb-6 md:mb-8">
          Ready to Fish?
        </h2>
        <Link 
          href="#book" 
          className="bg-[#c41e3a] hover:bg-[#a01830] text-white font-inter text-sm md:text-base px-8 py-3 md:px-10 md:py-4 rounded-lg transition-colors"
        >
          Book Your Charter
        </Link>
      </div>
    </section>
  )
}