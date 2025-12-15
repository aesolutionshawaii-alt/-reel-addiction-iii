'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-group.jpg"
          alt="Happy customers with their catch"
          fill
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-navy/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
        <h2 className="text-white font-outfit font-bold text-hero-mobile md:text-hero text-shadow-lg mb-8">
          Ready to Fish?
        </h2>
        <Link href="/charters" className="btn-primary text-lg">
          Book Your Charter
        </Link>
      </div>
    </section>
  )
}
