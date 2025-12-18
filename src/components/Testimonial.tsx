'use client'
import Link from 'next/link'

export default function Testimonial() {
  return (
    <section className="bg-navy px-5 py-12 md:px-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div className="flex flex-col items-center justify-center order-2 md:order-1">
            <div className="mb-6 md:mb-8">
              <svg className="w-[140px] h-[113px] md:w-[280px] md:h-[227px]" viewBox="0 0 279 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M210.6 226.8C223.8 226.8 234.6 224.1 243 218.7C251.4 213.3 258.3 206.4 263.7 198C269.7 187.8 273.9 177.3 276.3 166.5C278.1 155.1 279 145.8 279 138.6C279 109.2 271.5 82.5 256.5 58.5C241.5 34.5 218.1 15 186.3 0L178.2 16.2C196.8 24 213 36.3 226.8 53.1C240 69.9 246.6 87 246.6 104.4C246.6 111.6 245.7 117.9 243.9 123.3C234.3 115.5 223.2 111.6 210.6 111.6C195 111.6 181.5 116.7 170.1 126.9C158.7 137.1 153 151.2 153 169.2C153 186 158.7 199.8 170.1 210.6C181.5 221.4 195 226.8 210.6 226.8ZM57.6 226.8C70.8 226.8 81.6 224.1 90 218.7C98.4 213.3 105.3 206.4 110.7 198C116.7 187.8 120.9 177.3 123.3 166.5C125.1 155.1 126 145.8 126 138.6C126 109.2 118.5 82.5 103.5 58.5C88.5 34.5 65.1 15 33.3 0L25.2 16.2C43.8 24 60 36.3 73.8 53.1C87 69.9 93.6 87 93.6 104.4C93.6 111.6 92.7 117.9 90.9 123.3C81.3 115.5 70.2 111.6 57.6 111.6C42 111.6 28.5 116.7 17.1 126.9C5.69999 137.1 0 151.2 0 169.2C0 186 5.69999 199.8 17.1 210.6C28.5 221.4 42 226.8 57.6 226.8Z" fill="white"/>
              </svg>
            </div>
            <Link
              href="https://www.google.com/search?q=reel+addiction+iii+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c41e3a] text-white font-outfit px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-[#a01830] transition-colors text-sm md:text-base"
            >
              Read More Reviews
            </Link>
          </div>
          <div className="text-center order-1 md:order-2">
            <div className="flex gap-1 mb-4 md:mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 md:w-8 md:h-8" fill="#f4c542" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-white text-[18px] md:text-[40px] font-outfit font-normal leading-snug md:leading-tight mb-4 md:mb-6">
              "This is a boat that is serious about catching fish. Captain JR and his crew are true professionals. The boat is clean and the ride was smooth despite rough waters. Highly recommended."
            </blockquote>
            <p className="text-white font-outfit text-[18px] md:text-[40px]">- Eric S.</p>
          </div>
        </div>
      </div>
    </section>
  )
}