'use client'
import Image from 'next/image'
import Link from 'next/link'

const charters = [
  { title: '3/4 Day', image: '/images/charter-34day.jpg', description: 'The sweet spot. Enough time to find the bite and land your trophy.', price: '$2495' },
  { title: 'Full Day', image: '/images/charter-fullday.jpg', description: 'Go deeper. More water, more chances, bigger fish.', price: '$2995' },
  { title: 'Extravaganza', image: '/images/charter-extravaganza.jpg', description: "Dawn to dusk. Fish every minute of daylight. The ultimate O'ahu fishing experience.", price: '$3300' },
  { title: 'Custom Trip', image: '/images/charter-custom.jpg', description: "Outer islands. Overnighters. Ash scatterings. Tell us what you need — we'll make it happen.", price: 'Call for pricing.' },
]

export default function CharterSection() {
  return (
    <section className="bg-[#f7f5f2] px-[59px] py-16">
      <div className="max-w-[1322px] mx-auto">
        <h2 className="font-outfit font-medium text-[48px] text-[#0c1e3c] mb-10">
          A Different Kind of<br />Charter.
        </h2>
        <div className="grid grid-cols-2 gap-[22px]">
          {charters.map((charter) => (
            <div key={charter.title} className="group relative w-[650px] h-[650px] rounded-[6px] overflow-hidden">
              <Image
                src={charter.image}
                alt={charter.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={90}
              />
              {/* Top gradient */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 25%)'
                }}
              />
              {/* Bottom gradient */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%)'
                }}
              />
              
              {/* Title at top center */}
              <h3 className="absolute top-0 left-0 right-0 text-center text-[#f7f5f2] font-outfit font-normal text-[40px] py-2">
                {charter.title}
              </h3>
              
              {/* Bottom content */}
              <div className="absolute bottom-[18px] left-[18px] right-[18px] flex justify-between items-end">
                <div className="max-w-[450px]">
                  <p className="text-white font-outfit font-normal text-2xl leading-normal">
                    {charter.description}
                  </p>
                  <p className="text-white font-outfit font-light text-2xl">
                    {charter.price}
                  </p>
                </div>
                <Link 
                  href="/charters" 
                  className="flex items-center justify-center w-[150px] h-10 bg-white rounded text-[#1e1e1e] font-outfit font-normal text-sm hover:bg-gray-100 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
