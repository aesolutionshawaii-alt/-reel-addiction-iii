import Image from 'next/image'
import Link from 'next/link'

const charters = [
  {
    title: '3/4 Day',
    image: '/images/charter-34day.jpg',
    description: 'The sweet spot. Enough time to find the bite and land your trophy.',
    price: '$2,495',
  },
  {
    title: 'Full Day',
    image: '/images/charter-fullday.jpg',
    description: 'Go deeper. More water, more chances, bigger fish.',
    price: '$2,995',
  },
  {
    title: 'Extravaganza',
    image: '/images/charter-extravaganza.jpg',
    description: "Dawn to dusk. Fish every minute of daylight. The ultimate O'ahu fishing experience.",
    price: '$3,300',
  },
  {
    title: 'Custom Trip',
    image: '/images/charter-custom.jpg',
    description: "Outer islands. Overnighters. Ash scatterings. Tell us what you need — we'll make it happen.",
    price: 'Call for pricing',
  },
]

export default function CharterSection() {
  return (
    <section className="bg-offwhite px-5 py-16 md:px-20 md:py-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <h2 className="font-outfit font-bold text-3xl md:text-4xl text-navy mb-10 md:mb-12">
          A Different Kind of<br />Charter.
        </h2>

        {/* Charter Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {charters.map((charter) => (
            <div
              key={charter.title}
              className="group relative rounded-2xl overflow-hidden bg-navy"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] md:aspect-square">
                <Image
                  src={charter.image}
                  alt={charter.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                
                {/* Title at top */}
                <h3 className="absolute top-6 left-0 right-0 text-center text-white font-outfit font-bold text-3xl md:text-4xl italic">
                  {charter.title}
                </h3>
              </div>

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/90 text-sm md:text-base mb-1">
                  {charter.description}
                </p>
                <p className="text-white font-outfit font-semibold text-lg mb-4">
                  {charter.price}
                </p>
                <Link
                  href="/charters"
                  className="inline-block w-full text-center bg-white text-navy font-outfit font-semibold py-3 rounded-lg hover:bg-offwhite transition-colors"
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
