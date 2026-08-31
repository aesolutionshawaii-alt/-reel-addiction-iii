import Link from 'next/link'

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zC40yjI0LzQxYLRSNagwTzYwMDNOMktNNbEwNjSytDKoSDU1TzE3NE82MTGyNDRJTfTiK0pNzVFITEnJTC7JzM8DAJPSE-I&q=reel+addiction&oq=&gs_lcrp=EgZjaHJvbWUqDwgAEC4YJxivARjHARjqAjIPCAAQLhgnGK8BGMcBGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIVCAYQABhCGLQCGOoCGNsFGPAFGJ4GMhUIBxAAGEIYtAIY6gIY2wUY8AUYngbSAQg5MzVqMGoxNagCCLACAfEFRkGoUXgG6Ns&sourceid=chrome&ie=UTF-8#mpd=~3411587933163909398/customers/reviews'

type Review = {
  quote: string
  author: string
  context: string
}

const featured: Review = {
  quote:
    "Captain JR is the best of the best when it comes to fishing these waters. He showed us the birds, the way they act, the fish underneath them, and all the time he was right. We didn't go more than 30 minutes without catching either a Mahi or Aku. The crew worked like a well oiled machine. Nothing can compare to the experience and aloha you'll receive here.",
  author: 'Jasmine Yahiku',
  context: 'Mahi & aku, nonstop',
}

const reviews: Review[] = [
  {
    quote:
      'Amazing experience. We caught nearly 20 Mahi mahi and hooked into 4 marlin. JR, jefe and babba were amazing guides. Put us on the fish ASAP. 1000% recommend Reel Addiction III if you want a legit fishing experience on Oahu.',
    author: 'Tyler Gouge',
    context: '20 mahi, 4 marlin',
  },
  {
    quote:
      'The conditions were rough but they knew what they were doing and still managed to get us on fish. We had a group with 4 teenagers and they could not have been better with the kids. Can’t recommend them high enough!',
    author: 'Buddy Bagley',
    context: 'Great with the kids',
  },
  {
    quote:
      'This is a boat that is serious about catching fish. Captain JR and his crew are true professionals. The boat is clean and the ride was smooth despite rough waters. Highly recommended.',
    author: 'Eric S.',
    context: 'Smooth ride, rough water',
  },
  {
    quote:
      'What a great day of fishing! The crew is amazing as well. Highly recommend booking a trip with them, and when we come back, we will be booking another one.',
    author: 'Andrew Hill',
    context: 'Already booking the next one',
  },
]

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://reeladdictioniii.com/#business',
  name: 'Reel Addiction III Sport Fishing',
  description:
    "Private deep sea fishing charters aboard a 62' SeaKeeper-stabilized sportfishing yacht, departing Ko Olina Marina on O'ahu's leeward coast.",
  url: 'https://reeladdictioniii.com',
  image: 'https://res.cloudinary.com/dmu9szrap/image/upload/f_auto,q_auto/vessel/vessel-exterior',
  telephone: '+1-808-867-3474',
  priceRange: '$500 - $3,800',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '92-100 Waipahe Pl, Ko Olina Marina, Slip F7',
    addressLocality: 'Kapolei',
    addressRegion: 'HI',
    postalCode: '96707',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.3266695,
    longitude: -158.1207375,
  },
  areaServed: {
    '@type': 'Place',
    name: "O'ahu, Hawaii",
  },
  sameAs: [
    'https://maps.google.com/?cid=16536498185307755754',
    'https://www.instagram.com/reeladdictioniiisportfishing/',
    'https://www.youtube.com/@ReelAddictionIII-808',
    'https://www.facebook.com/people/Reeladdictioniiisportfishing/100092848172223/',
    'https://www.tripadvisor.com/Attraction_Review-g11900445-d26852561-Reviews-Reel_Addiction_III_Sportfishing-Ko_Olina_Kapolei_Oahu_Hawaii.html',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      name: '3/4 Day Private Charter',
      price: '3095',
      priceCurrency: 'USD',
      url: 'https://reeladdictioniii.com/charters/3-4-day',
    },
    {
      '@type': 'Offer',
      name: 'Full Day Private Charter',
      price: '3495',
      priceCurrency: 'USD',
      url: 'https://reeladdictioniii.com/charters/full-day',
    },
    {
      '@type': 'Offer',
      name: 'Extravaganza Private Charter',
      price: '3800',
      priceCurrency: 'USD',
      url: 'https://reeladdictioniii.com/charters/extravaganza',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: 32,
    bestRating: '5',
    worstRating: '1',
  },
  review: [featured, ...reviews].map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
    reviewBody: r.quote,
  })),
}

function Stars({ size = 'w-5 h-5 md:w-6 md:h-6' }: { size?: string }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={size} fill="#f4c542" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonial() {
  return (
    <section className="bg-navy text-offwhite px-5 py-16 md:px-20 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-4">
            From Our Anglers
          </div>
          <h2 className="font-outfit text-3xl md:text-5xl font-light">Five stars. Every trip.</h2>
        </div>

        {/* Featured review */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-5">
            <Stars />
          </div>
          <blockquote className="font-outfit text-xl md:text-3xl font-light leading-snug md:leading-tight mb-6">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <div className="font-outfit text-base md:text-lg font-medium">{featured.author}</div>
          <div className="text-sm text-offwhite/55 mt-1">{featured.context}</div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="bg-navy-light/40 border border-offwhite/10 rounded-lg p-6 md:p-8"
            >
              <div className="mb-4">
                <Stars size="w-4 h-4" />
              </div>
              <blockquote className="font-outfit text-base md:text-lg leading-relaxed mb-5 text-offwhite/90">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <div className="font-outfit font-medium">{r.author}</div>
              <div className="text-sm text-offwhite/55 mt-0.5">{r.context}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red text-white font-outfit px-7 py-3.5 rounded-lg hover:bg-red-hover transition-colors text-sm md:text-base"
          >
            Read More Reviews on Google
          </Link>
        </div>
      </div>
    </section>
  )
}
