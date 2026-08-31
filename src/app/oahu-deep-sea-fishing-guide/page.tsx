import { Metadata } from 'next';
import CloudinaryImage from '@/components/CloudinaryImage';
import Link from 'next/link';
import { Calendar, Sun, Snowflake, Leaf, Flower2, Fish, Clock, CheckCircle, Phone, Globe, Anchor } from 'lucide-react';
import Footer from '@/components/Footer';
import InnerNavigation from '@/components/InnerNavigation';

export const metadata: Metadata = {
  title: "Deep Sea Fishing Oahu: 2026 Seasons, Species & What to Expect",
  description: "What's biting in Hawaiian waters right now? Complete guide to Oahu deep sea fishing — peak seasons for Marlin, Ahi, Mahi & Ono, plus Ko Olina charter options.",
};

const faqs = [
  {
    q: 'How much does a deep sea fishing charter cost on Oahu?',
    a: 'Private charters on Oahu generally run from around $1,000 to $4,000 depending on the boat, trip length, and group size. Aboard Reel Addiction III, a private 3/4 day trip is $3,095, a full day is $3,495, and the dark-to-dark Extravaganza is $3,800, each for up to six guests. Shared charters run $500 per person with a four-guest minimum.',
  },
  {
    q: 'Where do deep sea fishing charters leave from on Oahu?',
    a: 'Most Oahu charters depart from three harbors: Kewalo Basin in Honolulu, Ko Olina Marina on the leeward west side, and Haleiwa on the North Shore. Reel Addiction III departs Ko Olina Marina, Slip F7, where the leeward coast offers calmer water and deep ocean just minutes from the dock.',
  },
  {
    q: 'What fish can you catch deep sea fishing on Oahu?',
    a: 'Blue marlin, yellowfin tuna (ahi), mahi mahi, ono (wahoo), skipjack tuna (aku), and spearfish are the main targets. All are caught year-round in Hawaiian waters, with summer producing the biggest marlin and ahi.',
  },
  {
    q: 'When is the best time of year for deep sea fishing on Oahu?',
    a: 'Fishing is productive every month of the year in Hawaii. Summer (June through August) is best for big blue marlin and yellowfin tuna over 100 pounds. Spring and fall bring peak mahi mahi runs, and winter offers striped marlin and bigeye tuna.',
  },
  {
    q: 'Do I need a fishing license for a charter on Oahu?',
    a: 'Yes. The State of Hawaii requires non-resident anglers age 15 and older to carry a recreational marine fishing license, even on charter boats. A 1-day license is $20 and can be purchased online at fishing.hawaii.gov, right up until departure.',
  },
  {
    q: 'Is deep sea fishing on Oahu good for beginners?',
    a: 'Yes. The crew handles rigging, baiting, and boat positioning, so first-timers just fight the fish. A larger, stabilized boat makes a big difference for comfort: Reel Addiction III carries the only SeaKeeper gyro stabilizer in the Ko Olina fleet, which takes most of the roll out of the ride.',
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

export default function FishingGuidePage() {
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
          src="species/blue-marlin"
          alt="Blue Marlin in Hawaiian waters"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            Your Complete Resource
          </p>
          <h1 className="mb-6 font-outfit text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
            Oahu Deep Sea Fishing Guide
          </h1>
          <p className="max-w-2xl font-inter text-xl text-white/90 md:text-2xl">
            Best times to catch Marlin, Mahi & Tuna in Hawaiian waters
          </p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              Year-Round Fishing Paradise
            </h2>
            <p className="font-inter text-lg leading-relaxed text-gray-600 md:text-xl">
              Hawaii offers world-class deep sea fishing every month of the year. While you can catch fish any day, knowing the peak seasons helps you target specific species and maximize your chances at a trophy catch.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BLUE MARLIN ===== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl md:h-[400px]">
              <CloudinaryImage
                src="species/blue-marlin"
                alt="Blue Marlin"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="mb-2 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
                Blue Marlin
              </h2>
              <p className="mb-6 font-inter text-lg italic text-gray-500">A'u</p>
              
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2">
                <Calendar className="h-5 w-5 text-red-600" />
                <span className="font-outfit font-bold text-red-600">Peak Season: June - October</span>
              </div>
              
              <p className="mb-6 font-inter text-lg leading-relaxed text-gray-600">
                Blue marlin can be caught year-round in Hawaii, but the biggest fish over 500 pounds are most common during summer months. The best time to fish is early morning or just before sunset.
              </p>
              
              <div className="rounded-xl bg-[#1B3A5F] p-6 text-white">
                <p className="font-inter leading-relaxed">
                  <span className="font-bold">Pro Tip:</span> Hawaii is the only place in the world where marlin over 1,000 pounds have been caught every month of the year!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAHI MAHI ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-2 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
                Mahi Mahi
              </h2>
              <p className="mb-6 font-inter text-lg italic text-gray-500">Dorado</p>
              
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2">
                <Calendar className="h-5 w-5 text-red-600" />
                <span className="font-outfit font-bold text-red-600">Peak Season: Mar-May & Sep-Nov</span>
              </div>
              
              <p className="mb-6 font-inter text-lg leading-relaxed text-gray-600">
                Mahi mahi are available year-round but become especially abundant during spring and fall months. In March, they average 10-15 pounds, but by late spring can reach 40-50 pounds.
              </p>
              
              <div className="rounded-xl bg-[#1B3A5F] p-6 text-white">
                <p className="font-inter leading-relaxed">
                  <span className="font-bold">What to Look For:</span> Mahi mahi congregate around floating debris and structure offshore, making them easier to locate.
                </p>
              </div>
            </div>
            <div className="relative order-1 h-80 overflow-hidden rounded-2xl shadow-xl md:order-2 md:h-[400px]">
              <CloudinaryImage
                src="species/mahi-mahi"
                alt="Mahi Mahi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== YELLOWFIN TUNA ===== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl md:h-[400px]">
              <CloudinaryImage
                src="species/yellowfin-tuna"
                alt="Yellowfin Tuna"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="mb-2 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
                Yellowfin Tuna
              </h2>
              <p className="mb-6 font-inter text-lg italic text-gray-500">Ahi</p>
              
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2">
                <Calendar className="h-5 w-5 text-red-600" />
                <span className="font-outfit font-bold text-red-600">Peak Season: May - September</span>
              </div>
              
              <p className="mb-6 font-inter text-lg leading-relaxed text-gray-600">
                Yellowfin tuna over 100 pounds are caught more frequently during summer months than any other time of year. Tuna hang around Hawaii year-round, with the optimal time to target them from April through December.
              </p>
              
              <div className="rounded-xl bg-[#1B3A5F] p-6 text-white">
                <p className="font-inter leading-relaxed">
                  <span className="font-bold">Local Favorite:</span> Ahi is the most prized fish for eating in Hawaii — perfect for sashimi or seared rare!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ONO ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-2 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
                Ono
              </h2>
              <p className="mb-6 font-inter text-lg italic text-gray-500">Wahoo</p>
              
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2">
                <Calendar className="h-5 w-5 text-red-600" />
                <span className="font-outfit font-bold text-red-600">Peak Season: April - October</span>
              </div>
              
              <p className="mb-6 font-inter text-lg leading-relaxed text-gray-600">
                The best time to catch ono is from May to October, with fish averaging 20-30 pounds in Hawaiian waters. We typically find them on the ledge around 40 fathoms, but when we catch them farther offshore, it's often a sign that ahi are in the area!
              </p>
            </div>
            <div className="relative order-1 h-80 overflow-hidden rounded-2xl shadow-xl md:order-2 md:h-[400px]">
              <CloudinaryImage
                src="species/ono"
                alt="Ono Wahoo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEASONAL CHART ===== */}
      <section className="bg-[#1B3A5F] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center font-outfit text-4xl font-bold text-white md:text-5xl">
            Seasonal Chart
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Winter */}
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/20">
                  <Snowflake className="h-6 w-6 text-blue-300" />
                </div>
                <h3 className="font-outfit text-2xl font-bold text-white">Winter (Dec-Feb)</h3>
              </div>
              <ul className="space-y-2 font-inter text-white/80">
                <li>• Striped Marlin appear</li>
                <li>• Bigeye Tuna season</li>
                <li>• Skipjack & small Yellowfin Tuna</li>
                <li>• Occasional Mahi Mahi</li>
              </ul>
            </div>

            {/* Spring */}
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-400/20">
                  <Flower2 className="h-6 w-6 text-pink-300" />
                </div>
                <h3 className="font-outfit text-2xl font-bold text-white">Spring (Mar-May)</h3>
              </div>
              <ul className="space-y-2 font-inter text-white/80">
                <li>• Mahi Mahi peak!</li>
                <li>• Ono start showing up</li>
                <li>• Good Ahi action begins</li>
                <li>• Great overall fishing</li>
              </ul>
            </div>

            {/* Summer */}
            <div className="rounded-2xl border-2 border-yellow-400/50 bg-white/10 p-8 backdrop-blur">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/20">
                  <Sun className="h-6 w-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="font-outfit text-2xl font-bold text-white">Summer (Jun-Aug)</h3>
                  <p className="font-inter text-sm font-bold text-yellow-400">BEST FOR BIG FISH</p>
                </div>
              </div>
              <ul className="space-y-2 font-inter text-white/80">
                <li>• Blue Marlin over 500 lbs</li>
                <li>• Yellowfin Tuna over 100 lbs</li>
                <li>• Peak Ono season</li>
                <li>• Consistent Mahi Mahi</li>
              </ul>
            </div>

            {/* Fall */}
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-400/20">
                  <Leaf className="h-6 w-6 text-orange-300" />
                </div>
                <h3 className="font-outfit text-2xl font-bold text-white">Fall (Sep-Nov)</h3>
              </div>
              <ul className="space-y-2 font-inter text-white/80">
                <li>• Marlin & billfish season</li>
                <li>• Mahi Mahi second peak</li>
                <li>• 20-50 lb Yellowfin</li>
                <li>• Spearfish more abundant</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TROLLING TIPS ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              Hawaiian Trolling Tips
            </h2>
          </div>

          <div className="mb-12 rounded-2xl border-2 border-gray-200 bg-white p-8 md:p-12">
            <p className="mb-8 font-inter text-lg leading-relaxed text-gray-600">
              Hawaiian fishing primarily involves trolling with lures at speeds up to 9-10 knots. Often, six lines are in the water as soon as you leave the harbor, allowing you to hook Ono, Spearfish, and Mahi Mahi even before reaching the main fishing grounds.
            </p>

            <h3 className="mb-6 font-outfit text-2xl font-bold text-[#1B3A5F]">
              <Clock className="mb-1 mr-2 inline h-6 w-6" />
              Best Times of Day
            </h3>
            <ul className="space-y-4 font-inter text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">✓</span>
                <span>Early morning (sunrise)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">✓</span>
                <span>Late afternoon (before sunset)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FISHING LICENSE ===== */}
      <section className="bg-amber-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border-2 border-amber-300 bg-white p-8 md:p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                <Fish className="h-7 w-7 text-amber-600" />
              </div>
              <h2 className="font-outfit text-3xl font-bold text-[#1B3A5F] md:text-4xl">
                Fishing License Requirements
              </h2>
            </div>

            <p className="mb-8 font-inter text-lg leading-relaxed text-gray-600">
              As of May 2024, the State of Hawaiʻi requires all non-resident anglers age 15 and older to purchase a recreational marine fishing license before fishing — including on charter boats.
            </p>

            <div className="mb-8 rounded-xl bg-amber-50 p-6">
              <p className="font-inter text-gray-700">
                <span className="font-bold">Important:</span> We recommend purchasing your license online before your trip to avoid any delays. You can buy it on your smartphone right up until departure if needed.
              </p>
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-6 text-center">
                <p className="mb-2 font-outfit text-3xl font-bold text-[#1B3A5F]">$20</p>
                <p className="font-inter text-gray-600">1-Day License</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 text-center">
                <p className="mb-2 font-outfit text-3xl font-bold text-[#1B3A5F]">$40</p>
                <p className="font-inter text-gray-600">7-Day License</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 text-center">
                <p className="mb-2 font-outfit text-3xl font-bold text-[#1B3A5F]">$70</p>
                <p className="font-inter text-gray-600">Annual License</p>
              </div>
            </div>

            <Link
              href="https://fishing.hawaii.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-flex items-center gap-2 font-outfit text-lg font-bold text-red-600 transition-colors hover:text-red-700"
            >
              <Globe className="h-5 w-5" />
              Purchase online at fishing.hawaii.gov
            </Link>

            <div>
              <h3 className="mb-4 font-outfit text-xl font-bold text-[#1B3A5F]">Who's Exempt:</h3>
              <ul className="space-y-2 font-inter text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Hawaiʻi residents
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Active-duty military, their spouses, and minor children
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Youth under 15
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO BRING ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
            What to Bring
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Sunscreen (reef-safe)",
              "Polarized sunglasses",
              "Hat & light long sleeves",
              "Seasickness medication (if needed)",
              "Camera for your trophy shots!",
              "Your fishing license (non-residents)"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 rounded-xl border-2 border-gray-200 p-4 transition-all hover:border-red-400 hover:shadow-md">
                <CheckCircle className="h-6 w-6 shrink-0 text-green-500" />
                <span className="font-inter text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW TO CHOOSE A CHARTER ===== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              How to Choose an Oahu Fishing Charter
            </h2>
            <p className="font-inter text-xl text-gray-600">
              Every boat targets the same fish. These are the things that actually separate one trip from another.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8">
              <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">
                Departure point
              </h3>
              <p className="font-inter text-lg leading-relaxed text-gray-600">
                Oahu charters leave from Kewalo Basin in Honolulu, Ko Olina Marina on the west side, and Haleiwa on the North Shore. The leeward west coast is protected from the trade winds, so mornings are typically calmer, and the sea floor drops off fast: boats out of Ko Olina reach deep water minutes after leaving the dock.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8">
              <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">
                Boat size and stability
              </h3>
              <p className="font-inter text-lg leading-relaxed text-gray-600">
                Bigger hulls ride smoother, and gyro stabilization matters more than anything else if anyone in your group is prone to seasickness. Ask whether the boat has a SeaKeeper before you book. Reel Addiction III is a 62' yacht carrying the only SeaKeeper in the Ko Olina fleet.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8">
              <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">
                Trip length
              </h3>
              <p className="font-inter text-lg leading-relaxed text-gray-600">
                A 3/4 day trip covers the prime morning bite and gets you back for the afternoon. A full day means more water covered and more techniques deployed. Dark-to-dark trips reach grounds shorter runs never touch. Book the longest trip you're comfortable with: more time on the water means more chances.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8">
              <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">
                Private or shared
              </h3>
              <p className="font-inter text-lg leading-relaxed text-gray-600">
                A private charter gives your group the whole boat and the captain's full attention. Shared charters split the cost with other anglers, a good fit for couples and solo travelers who don't need the entire deck.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8">
              <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">
                Booking direct vs. a booking site
              </h3>
              <p className="font-inter text-lg leading-relaxed text-gray-600">
                The price is usually the same either way. The difference with booking direct is that you talk to the captain before you commit: about conditions, what's biting, and which trip fits your group. Call the boat first and see how the conversation feels.
              </p>
            </div>
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
              What anglers ask before fishing Oahu
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
            Ready to Book Your Adventure?
          </h2>
          <p className="mb-6 font-inter text-xl text-white/80">
            Reel Addiction III departs from Ko Olina Harbor with the only SeaKeeper gyro stabilizer in the fleet — meaning we fish when other boats can't!
          </p>
          <p className="mb-6 font-inter text-xl text-white/80">
            Staying at Aulani, Four Seasons, or Marriott Ko Olina?{' '}
            <Link href="/fishing-near-aulani" className="font-bold text-white underline decoration-red-400 underline-offset-4 transition-colors hover:text-red-400">
              The boat is inside your resort
            </Link>
            .
          </p>

          <div className="mb-10 flex flex-col items-center gap-4 font-inter text-xl text-white">
            <a href="tel:808-867-3474" className="flex items-center gap-2 transition-colors hover:text-red-400">
              <Phone className="h-5 w-5" />
              (808) 867-FISH (3474)
            </a>
          </div>

          <div className="mb-10 grid gap-4 text-center md:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-6">
              <p className="mb-1 font-outfit text-2xl font-bold text-white">$3,095</p>
              <p className="font-inter text-white/70">3/4 Day (6 hours)</p>
            </div>
            <div className="rounded-xl bg-white/10 p-6">
              <p className="mb-1 font-outfit text-2xl font-bold text-white">$3,495</p>
              <p className="font-inter text-white/70">Full Day (8-10 hours)</p>
            </div>
            <div className="rounded-xl bg-white/10 p-6">
              <p className="mb-1 font-outfit text-2xl font-bold text-white">$3,800</p>
              <p className="font-inter text-white/70">Extravaganza</p>
            </div>
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