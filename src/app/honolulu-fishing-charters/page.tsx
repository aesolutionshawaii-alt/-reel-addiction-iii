import { Metadata } from 'next';
import CloudinaryImage from '@/components/CloudinaryImage';
import Link from 'next/link';
import { MapPin, Phone, Clock, Anchor, Waves, ChefHat, Car, Users } from 'lucide-react';
import Footer from '@/components/Footer';
import InnerNavigation from '@/components/InnerNavigation';

export const metadata: Metadata = {
  title: 'Deep Sea Fishing Charters Near Honolulu | Reel Addiction III',
  description:
    'Comparing Honolulu fishing charters? Reel Addiction III departs Ko Olina Marina, 35 minutes west of Waikiki, with calm leeward water and deep ocean minutes from the dock.',
};

const faqs = [
  {
    q: 'How far is Ko Olina Marina from Waikiki?',
    a: "About 28 miles, a straight shot west on H-1. Most guests make the drive in 35 to 45 minutes, and charter departure times mean you're on the road before rush hour ever starts. There is parking at the marina.",
  },
  {
    q: 'Why do some boats fish the west side instead of Honolulu?',
    a: "Geography. O'ahu's leeward coast is sheltered from the trade winds, so mornings are typically calmer, and the sea floor drops off fast on the west side. Boats out of Ko Olina reach deep water minutes after leaving the dock, which means more of your trip is spent fishing.",
  },
  {
    q: 'How much does a deep sea fishing charter near Honolulu cost?',
    a: 'Aboard Reel Addiction III, a private 3/4 day trip is $3,095, a full day is $3,495, and the dark-to-dark Extravaganza is $3,800, each for up to six guests. Shared charters run $500 per person with a four-guest minimum.',
  },
  {
    q: 'What fish can we catch?',
    a: 'Blue marlin, yellowfin tuna (ahi), mahi mahi, ono (wahoo), and skipjack tuna (aku), all caught year-round in Hawaiian waters. Summer produces the biggest marlin and ahi.',
  },
  {
    q: 'Do we need a fishing license?',
    a: 'The State of Hawaii requires all non-resident anglers age 15 and older to have a recreational marine fishing license, including on charter boats. A 1-day license is $20 and you can buy it online at fishing.hawaii.gov, even on your phone before departure.',
  },
  {
    q: 'Where do we meet the boat?',
    a: "Ko Olina Marina, Slip F7, at 92-100 Waipahe Pl in Kapolei. Captain JR calls the night before with the exact meet time, typically around 6am depending on sunrise and when the bait starts biting.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function HonoluluFishingChartersPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <InnerNavigation />

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <CloudinaryImage
          src="images/ko-olina-aerial"
          alt="Aerial view of Ko Olina Marina and O'ahu's leeward coast, west of Honolulu"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 text-center md:pb-20">
          <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            Looking for a Honolulu Fishing Charter?
          </p>
          <h1 className="mb-6 font-outfit text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
            The Deep Water Is West
          </h1>
          <p className="max-w-2xl font-inter text-xl text-white/90 md:text-2xl">
            Reel Addiction III departs Ko Olina Marina, 35 minutes from Waikiki, where the ocean floor drops fast and the trade winds don't reach.
          </p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              Why Anglers Drive Past Kewalo Basin
            </h2>
            <p className="mb-6 font-inter text-lg leading-relaxed text-gray-600 md:text-xl">
              Most Honolulu fishing charters run out of Kewalo Basin, and plenty of good boats call it home. But O'ahu's geography plays favorites: the island's leeward west coast sits in the lee of the trade winds, and the bottom falls away to deep ocean almost immediately offshore.
            </p>
            <p className="font-inter text-lg leading-relaxed text-gray-600 md:text-xl">
              That's why Reel Addiction III fishes out of Ko Olina. A short drive west of Honolulu buys you calmer water, more time with lines in, and the biggest, most stable charter boat on the island.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY IT WORKS ===== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl md:h-[400px]">
              <CloudinaryImage
                src="vessel/vessel-exterior"
                alt="Reel Addiction III sportfishing yacht"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
                Worth the Drive
              </h2>

              <ul className="space-y-5 font-inter text-lg text-gray-700">
                <li className="flex items-start gap-4">
                  <Anchor className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <span>
                    <span className="font-bold text-[#1B3A5F]">Deep water in minutes.</span> The west side drop-off puts us over the fishing grounds five minutes after leaving the dock.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Waves className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <span>
                    <span className="font-bold text-[#1B3A5F]">Calmer mornings.</span> The leeward coast is sheltered from the trade winds, and the only SeaKeeper gyro stabilizer in the Ko Olina fleet takes most of the roll out of whatever's left.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Car className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <span>
                    <span className="font-bold text-[#1B3A5F]">An easy run from town.</span> Straight shot on H-1 West, about 35 to 45 minutes from Waikiki, with parking at the marina. Charter departure times mean you beat the traffic both ways.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <span>
                    <span className="font-bold text-[#1B3A5F]">More fishing, less running.</span> Less time transiting to the grounds means more of your charter is spent with lines in the water.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <ChefHat className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <span>
                    <span className="font-bold text-[#1B3A5F]">Take your catch home.</span> We clean and fillet at the dock, so your fish rides back to town with you.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRIP OPTIONS ===== */}
      <section className="bg-[#1B3A5F] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-center font-outfit text-4xl font-bold text-white md:text-5xl">
            Pick Your Trip
          </h2>
          <p className="mb-12 text-center font-inter text-xl text-white/80">
            Private charters for up to six guests, departing Ko Olina Marina
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/charters/3-4-day" className="group rounded-2xl bg-white/10 p-8 backdrop-blur transition-all hover:bg-white/20">
              <p className="mb-1 font-outfit text-3xl font-bold text-white">$3,095</p>
              <p className="mb-4 font-inter font-bold text-red-400">3/4 Day</p>
              <p className="font-inter text-white/80">
                5-6 hours. The perfect balance of fishing and vacation time.
              </p>
            </Link>
            <Link href="/charters/full-day" className="group rounded-2xl bg-white/10 p-8 backdrop-blur transition-all hover:bg-white/20">
              <p className="mb-1 font-outfit text-3xl font-bold text-white">$3,495</p>
              <p className="mb-4 font-inter font-bold text-red-400">Full Day</p>
              <p className="font-inter text-white/80">
                8-10 hours. Go deeper, cover more water, target bigger fish.
              </p>
            </Link>
            <Link href="/charters/extravaganza" className="group rounded-2xl bg-white/10 p-8 backdrop-blur transition-all hover:bg-white/20">
              <p className="mb-1 font-outfit text-3xl font-bold text-white">$3,800</p>
              <p className="mb-4 font-inter font-bold text-red-400">Extravaganza</p>
              <p className="font-inter text-white/80">
                Dark to dark, 40+ miles offshore. The ultimate O'ahu trip.
              </p>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-white/5 p-6">
            <Users className="h-6 w-6 shrink-0 text-red-400" />
            <p className="font-inter text-white/80">
              Traveling as a couple or solo?{' '}
              <Link href="/shared-charter" className="font-bold text-white underline decoration-red-400 underline-offset-4 transition-colors hover:text-red-400">
                Shared charters
              </Link>{' '}
              run $500 per person with a four-guest minimum.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-xl text-gray-600">
              What Honolulu visitors ask before booking
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between p-8 text-left transition-colors hover:bg-gray-50">
                  <h3 className="pr-4 font-outfit text-2xl font-bold text-[#1B3A5F]">
                    {faq.q}
                  </h3>
                  <svg
                    className="h-8 w-8 shrink-0 text-red-600 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                <div className="border-t-2 border-gray-200 bg-gray-50 p-8">
                  <p className="font-inter text-lg leading-relaxed text-gray-700">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#1B3A5F] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-outfit text-4xl font-bold text-white md:text-5xl">
            The Boat Is Waiting at Slip F7
          </h2>
          <p className="mb-6 font-inter text-xl text-white/80">
            Call or text Captain JR to check dates for your trip. World-class fishing, one easy drive west of Honolulu.
          </p>
          <p className="mb-6 font-inter text-xl text-white/80">
            New to Hawaiian waters? Read the{' '}
            <Link href="/oahu-deep-sea-fishing-guide" className="font-bold text-white underline decoration-red-400 underline-offset-4 transition-colors hover:text-red-400">
              Oahu deep sea fishing guide
            </Link>{' '}
            for seasons, species, and what to expect.
          </p>

          <div className="mb-10 flex flex-col items-center gap-4 font-inter text-xl text-white">
            <a href="tel:808-867-3474" className="flex items-center gap-2 transition-colors hover:text-red-400">
              <Phone className="h-5 w-5" />
              (808) 867-FISH (3474)
            </a>
            <p className="flex items-center gap-2 text-white/70">
              <MapPin className="h-5 w-5" />
              Ko Olina Marina, Slip F7, Kapolei, HI 96707
            </p>
          </div>

          <Link
            href="/charters"
            className="inline-block rounded-full bg-red-600 px-10 py-4 font-outfit text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-xl"
          >
            Compare Oahu Fishing Charters
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
