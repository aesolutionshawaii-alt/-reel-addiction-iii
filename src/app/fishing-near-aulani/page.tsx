import { Metadata } from 'next';
import CloudinaryImage from '@/components/CloudinaryImage';
import Link from 'next/link';
import { MapPin, Phone, Clock, Anchor, Waves, ChefHat, Sun, CheckCircle, Users } from 'lucide-react';
import Footer from '@/components/Footer';
import InnerNavigation from '@/components/InnerNavigation';

export const metadata: Metadata = {
  title: 'Fishing Charter Near Aulani & Ko Olina Resort | Reel Addiction III',
  description:
    'Staying at Aulani, Four Seasons, or Marriott Ko Olina? Reel Addiction III departs from Ko Olina Marina inside your resort. Walk to the boat and fish deep water in minutes.',
};

const faqs = [
  {
    q: 'How far is Ko Olina Marina from Aulani?',
    a: "The marina is inside Ko Olina Resort, at the harbor end of the lagoons. From Aulani or Four Seasons it's a scenic walk along the lagoon path or a couple of minutes by car. Marriott's Ko Olina Beach Club is even closer. We're at Slip F7.",
  },
  {
    q: 'What time does the trip leave?',
    a: "It varies based on sunrise and when the bait starts biting. Captain JR will call you the night before with the exact meet time. Typically it's around 6am, but could be earlier or slightly later depending on conditions.",
  },
  {
    q: 'Is this a good trip for kids and first-timers?',
    a: "Yes. Reel Addiction III carries the only SeaKeeper gyro stabilizer in the Ko Olina fleet, which makes for a much smoother, more comfortable ride. Morning water is typically calmer, and Ko Olina's location offers protection from trade winds. Our crew keeps it fun and down-to-earth for everyone on board.",
  },
  {
    q: 'Do we need a fishing license?',
    a: 'The State of Hawaii requires all non-resident anglers age 15 and older to have a recreational marine fishing license, including on charter boats. A 1-day license is $20 and you can buy it online at fishing.hawaii.gov, even on your phone before departure.',
  },
  {
    q: 'Can we eat what we catch?',
    a: "Yes. We clean and fillet your catch at the dock. If you're staying at Ko Olina, we can connect you with chefs who will prepare your fish for dinner that same night.",
  },
  {
    q: 'How long are the trips?',
    a: 'The 3/4 day runs 5-6 hours, the full day runs 8-10 hours, and the Extravaganza is dark to dark. With a 3/4 day trip you can be back at the resort pool by early afternoon.',
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

export default function FishingNearAulaniPage() {
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
          alt="Aerial view of Ko Olina Resort lagoons, hotels, and marina on O'ahu's west side"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 text-center md:pb-20">
          <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            For Ko Olina Resort Guests
          </p>
          <h1 className="mb-6 font-outfit text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
            Deep Sea Fishing, Right Inside Your Resort
          </h1>
          <p className="max-w-2xl font-inter text-xl text-white/90 md:text-2xl">
            Staying at Aulani, Four Seasons, or Marriott Ko Olina? The boat is already here.
          </p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              No Pre-Dawn Drive. No Logistics.
            </h2>
            <p className="mb-6 font-inter text-lg leading-relaxed text-gray-600 md:text-xl">
              Most O'ahu fishing charters leave from Kewalo Basin in Honolulu. If you're staying at Ko Olina, that means loading the family into a rental car before sunrise for a long drive across the island, then doing it again on the way back.
            </p>
            <p className="font-inter text-lg leading-relaxed text-gray-600 md:text-xl">
              Reel Addiction III is berthed at Ko Olina Marina, inside the same resort as your hotel. Walk over along the lagoons or drive two minutes, step on board, and we're in deep water five minutes after leaving the dock.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FROM YOUR RESORT ===== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
            From Your Resort to Slip F7
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">
                Aulani, A Disney Resort & Spa
              </h3>
              <p className="font-inter leading-relaxed text-gray-600">
                A scenic walk along the lagoon path, or a couple of minutes by car. You can watch the sunrise over the lagoons on your way to the boat.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">
                Four Seasons Resort O'ahu
              </h3>
              <p className="font-inter leading-relaxed text-gray-600">
                Right next door to Aulani, with the same easy stroll or short drive down to the marina at the harbor end of the resort.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">
                Marriott's Ko Olina Beach Club
              </h3>
              <p className="font-inter leading-relaxed text-gray-600">
                The closest of the three. The Beach Club sits near the marina side of the resort, so you're at the slip in minutes.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center font-inter text-gray-600">
            Staying at the Beach Villas or elsewhere in Ko Olina? Same deal. Everything in the resort is minutes from the marina.
          </p>
        </div>
      </section>

      {/* ===== WHY IT WORKS ===== */}
      <section className="py-20 md:py-28">
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
                Built Around Your Vacation
              </h2>

              <ul className="space-y-5 font-inter text-lg text-gray-700">
                <li className="flex items-start gap-4">
                  <Sun className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <span>
                    <span className="font-bold text-[#1B3A5F]">Sleep later.</span> No cross-island drive means you meet the boat minutes before departure.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Waves className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <span>
                    <span className="font-bold text-[#1B3A5F]">Smoother ride.</span> The only SeaKeeper gyro stabilizer in the Ko Olina fleet, a big deal for kids and anyone prone to seasickness.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Anchor className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <span>
                    <span className="font-bold text-[#1B3A5F]">More fishing, less running.</span> Ko Olina puts us in deep water five minutes from the dock. We're catching bait while other boats are still running out.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <span>
                    <span className="font-bold text-[#1B3A5F]">Back for the afternoon.</span> A 3/4 day trip runs 5-6 hours. Fish all morning, be back at the pool with the family by early afternoon.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <ChefHat className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <span>
                    <span className="font-bold text-[#1B3A5F]">Eat your catch that night.</span> We fillet at the dock and can connect Ko Olina guests with chefs who will cook your fish for dinner.
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
              What Ko Olina guests ask before booking
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
            Call or text Captain JR to check dates for your stay. World-class fishing without leaving your resort.
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
            View Charters
          </Link>

          <p className="mt-12 font-inter text-sm text-white/40">
            Reel Addiction III is an independent charter operator and is not affiliated with Disney, Aulani, Four Seasons, or Marriott.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
