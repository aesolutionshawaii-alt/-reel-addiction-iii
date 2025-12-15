'use client'

import Link from 'next/link'

export default function Testimonial() {
  return (
    <section className="bg-navy px-5 py-16 md:px-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-offwhite text-[150px] md:text-[200px] font-serif leading-none -mb-10 md:-mb-16">&ldquo;</span>
            <Link
              href="https://www.google.com/search?q=reel+addiction+iii+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              Read More Reviews
            </Link>
          </div>
          <div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-white text-xl md:text-2xl font-outfit leading-relaxed mb-6">
              &ldquo;This is a boat that is serious about catching fish. Captain JR and his crew are true professionals. The boat is clean and the ride was smooth despite rough waters. Highly recommended.&rdquo;
            </blockquote>
            <p className="text-white/60 font-outfit">— Eric S.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
