import { Metadata } from 'next';
import CloudinaryImage from '@/components/CloudinaryImage';
import Link from 'next/link';
import { Clock, Users, DollarSign, Check, Info, Shield } from 'lucide-react';
import Footer from '@/components/Footer';
import PremiumCarousel from '@/components/PremiumCarousel';
import SpeciesGrid from '@/components/SpeciesGrid';
import FareHarborButton from '@/components/FareHarborButton';
import { FAREHARBOR_ITEMS } from '@/lib/fareharbor';

export const metadata: Metadata = {
  title: "Extravaganza Charter | Reel Addiction III - Hawaii's Only Guaranteed Charter",
  description: "Dark to dark, 40+ miles offshore. The ultimate O'ahu fishing experience with Hawaii's only catch guarantee. Book the Extravaganza charter from Ko Olina.",
};

const targetSpecies = [
  {
    name: "Blue Marlin",
    season: "May - September (peak)",
    image: "species/blue-marlin",
    description: "The ultimate game fish. Extended hours mean we can stay with a blue marlin through a long fight without worrying about running out of daylight.",
    techniques: "Live bait fishing with Opelu, high-speed trolling, watching for birds. We have time to deploy every technique and wait for the right opportunity.",
    size: "Average 200-400 lbs, trophy fish 500+ lbs",
    hawaiiFact: "Blue marlin fishing in Hawaii is world-class. The extended day gives us the best chance to connect with these magnificent fish."
  },
  {
    name: "Striped Marlin",
    season: "November - April",
    image: "species/striped-marlin",
    description: "Winter marlin that love to jump. The long day means we can chase striped marlin through multiple areas if needed.",
    techniques: "High-speed trolling with lures and teasers. Stripes attack surface baits aggressively, making for spectacular visual strikes.",
    size: "80-150 lbs average",
    hawaiiFact: "Winter marlin fishing targets striped marlin when blues are less active. Dark to dark gives us the full winter bite window."
  },
  {
    name: "Yellowfin Tuna (Ahi)",
    season: "Year-round",
    image: "species/yellowfin-tuna",
    description: "Our most consistent fish. The boat record — 14 in one day — was set on an Extravaganza trip. Maximum time = maximum opportunities.",
    techniques: "Trolling, chunking, live baiting, vertical jigging. We use every technique and have time to find the schools.",
    size: "40-100 lbs average, occasional giants over 200 lbs",
    hawaiiFact: "Ahi is Hawaii's premier eating fish. The extended day means we can fill the cooler with premium sashimi-grade tuna."
  },
  {
    name: "Mahi Mahi (Dorado)",
    season: "March - June (peak)",
    image: "species/mahi-mahi",
    description: "Colorful and aggressive. When we find a school of Mahi, the long day means everyone gets multiple hookups.",
    techniques: "Trolling near debris and weed lines. Once we find one, there's usually a school, and we have all day to work them.",
    size: "15-30 lbs average, bulls can reach 50+ lbs",
    hawaiiFact: "Mahi Mahi are fast-growing and sustainable. Perfect for filling coolers on an extended trip."
  },
  {
    name: "Ono (Wahoo)",
    season: "October - March",
    image: "species/ono",
    description: "The fastest fish in the ocean. Our boat speed and extended range put us over prime Ono grounds that other boats can't reach.",
    techniques: "High-speed trolling with wire line and deep divers. Ono make blistering runs that test your equipment.",
    size: "25-50 lbs average",
    hawaiiFact: "'Ono' means delicious — and they are. The mild white meat is highly prized in Hawaii."
  },
  {
    name: "Aku (Skipjack Tuna)",
    season: "Peak April-September, available year-round",
    image: "species/aku",
    description: "Traditional poke fish. Great on light tackle and perfect for the table. Extended trips often produce Aku bonanzas.",
    techniques: "Trolling with small feathers, chunking, live baiting when we find schools.",
    size: "5-15 lbs",
    hawaiiFact: "Aku is the traditional Hawaiian poke fish, mixed with inamona and limu for authentic island flavor."
  }
];

export default function ExtravaganzaCharterPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen overflow-hidden">
        <div className="animate-ken-burns absolute inset-0">
          <CloudinaryImage
            src="charters/extravaganza/hero"
            alt="Trophy Yellowfin Tuna"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 20%' }}
            priority
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,13,15,0.6) 0%, rgba(13,13,15,0) 40%, rgba(13,13,15,0.8) 100%)' }} />

        <div className="absolute inset-x-0 bottom-32 z-10 px-6 text-center md:bottom-40">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Shield className="h-6 w-6 text-red-400" />
            <p className="font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Hawaii's Only Guaranteed Charter
            </p>
          </div>

          <h1 className="mb-6 font-outfit text-5xl font-bold leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:text-7xl lg:text-8xl">
            The Extravaganza.
          </h1>

          <p className="mx-auto mb-8 max-w-3xl font-inter text-xl leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-2xl">
            Dark to dark. 40+ miles offshore. The ultimate O'ahu fishing experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 font-inter text-lg text-white md:gap-12 md:text-xl">
            <div className="flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <Clock className="h-6 w-6" />
              <span>Sunrise to Sunset</span>
            </div>
            <div className="flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <Users className="h-6 w-6" />
              <span>Up to 6 Anglers</span>
            </div>
            <div className="flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <DollarSign className="h-6 w-6" />
              <span>$3,800</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STICKY SPECS BAR ===== */}
      <div className="fixed left-0 right-0 top-0 z-40 border-b border-gray-200 bg-white/95 py-3 shadow-lg backdrop-blur md:py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 font-inter md:px-6">

          {/* Back Arrow */}
          <Link
            href="/charters"
            className="flex items-center gap-2 text-gray-600 transition-colors hover:text-red-600"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden text-sm font-medium md:inline">All Charters</span>
          </Link>

          {/* Duration - Hidden on mobile */}
          <div className="hidden items-center gap-3 lg:flex">
            <Clock className="h-6 w-6 text-red-600" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Duration</p>
              <p className="text-sm font-bold text-gray-900">Sunrise to Sunset</p>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-gray-300 lg:block" />

          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-red-600 md:h-6 md:w-6" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 md:text-xs">Anglers</p>
              <p className="text-sm font-bold text-gray-900 md:text-base">6 Max</p>
            </div>
          </div>

          <div className="h-8 w-px bg-gray-200 md:h-10" />

          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-red-600 md:h-6 md:w-6" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 md:text-xs">Price</p>
              <p className="text-lg font-bold text-red-600 md:text-xl">$3,800</p>
            </div>
          </div>

          <div className="h-8 w-px bg-gray-200 md:h-10" />

          <FareHarborButton
            itemId={FAREHARBOR_ITEMS.PRIVATE}
            className="rounded-lg bg-red-600 px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-red-700 md:px-5 md:py-2.5 md:text-base"
          >
            Book Now
          </FareHarborButton>

        </div>
      </div>
      {/* ===== THE GUARANTEE ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-[1800px] px-6">
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-5">
            {/* Image - 60% (3 cols) */}
            <div className="relative h-[400px] lg:col-span-3 lg:h-[600px]">
              <CloudinaryImage
                src="charters/extravaganza/action"
                alt="Birds working bait offshore"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Text Panel - 40% (2 cols) with dark background */}
            <div className="flex items-center bg-[#1B3A5F] px-10 py-16 lg:col-span-2">
              <div className="text-white">
                <div className="mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-red-400" />
                  <p className="font-outfit text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                    The Guarantee
                  </p>
                </div>

                <h2 className="mb-6 font-outfit text-3xl font-bold leading-tight lg:text-4xl">
                  Hawaii's Only Guaranteed Charter
                </h2>

                <div className="space-y-4 font-inter text-base leading-relaxed opacity-90">
                  <p>
                    We're so confident in our ability to find fish that we back the Extravaganza with Hawaii's only guarantee: If you don't catch a pelagic fish, you receive a partial refund. No other charter in Hawaii offers this.
                  </p>
                  <p>
                    Why can we guarantee it? We're the fastest boat in the Ko Olina fleet, which means we can reach grounds 40+ miles offshore that other boats can't access in a day. More water covered = more opportunities to find feeding fish.
                  </p>
                  <p>
                    Dark to dark gives us maximum fishing hours to deploy every technique in our arsenal — trolling, live baiting, chunking, jigging — and the time to move between multiple productive areas until we find the bite.
                  </p>
                  <p className="font-semibold opacity-100">
                    This is serious offshore fishing. It's also the trip where we set our boat record: 14 Yellowfin Tuna in a single October day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE SECTION ===== */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-6 font-outfit text-5xl font-bold text-[#1B3A5F] lg:text-6xl">
              A Full Day On The Water
            </h2>
            <p className="font-inter text-xl text-gray-600">
              From first light to last light — maximum fishing hours
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                time: "Night Before",
                desc: "Captain JR calls to confirm departure time based on sunrise. The Extravaganza departs earlier than other trips to maximize daylight hours on the water."
              },
              {
                time: "Pre-Dawn Departure",
                desc: "Meet at Ko Olina Marina in the dark. Quick briefing, then we're running offshore while other boats are still sleeping. First light finds us already catching live Opelu for bait."
              },
              {
                time: "Sunrise Bait Catch",
                desc: "We catch fresh Opelu at sunrise while whales breach and dolphins hunt. This is when the ocean wakes up — and we're already fishing."
              },
              {
                time: "Long-Range Offshore Run",
                desc: "Our speed advantage means we can reach productive grounds 40+ miles out that slower boats can't access in a day trip. This is where the big fish live."
              },
              {
                time: "All-Day Fishing Rotation",
                desc: "We rotate through multiple techniques and locations: trolling for marlin and ono, chunking for Ahi, live baiting for whatever's biting. If one area isn't producing, we move. We have the time to find the fish."
              },
              {
                time: "Sunset Push",
                desc: "Many captains head in early. We fish through the evening bite when predators feed aggressively before dark. This is often when the biggest fish of the day hits."
              },
              {
                time: "Return After Dark",
                desc: "Back to Ko Olina after sunset, running home in the dark with coolers full. We clean and fillet your catch at the dock. You've fished every productive hour of the day."
              }
            ].map((item, index) => (
              <div key={index} className="group flex gap-8">
                <div className="relative flex-shrink-0">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-red-600 font-outfit text-2xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-125">
                    {index + 1}
                  </div>
                  {index < 6 && (
                    <div className="absolute left-1/2 top-20 h-12 w-1 -translate-x-1/2 bg-red-200" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">{item.time}</h3>
                  <p className="font-inter text-lg leading-relaxed text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EPIC CATCHES CAROUSEL ===== */}
      <PremiumCarousel
        title="Epic Extravaganza Catches"
        description="When you fish dark to dark, 40+ miles offshore, these are the days that happen"
        slides={[
          {
            image: "charters/extravaganza/record",
            heading: "14 Ahi In One Day",
            text: "We hit a feeding frenzy 42 miles out. Birds working everywhere, Ahi blowing up bait on the surface. We stayed on them all day, rotating anglers through, and brought home 14 fish. Every single one of them was quality eating size.",
            stats: "42 Miles Out | October 2023 | 14 Fish"
          },
          {
            image: "charters/extravaganza/slide2",
            heading: "Found The Motherlode",
            text: "When you cover 40+ miles of ocean, you find floating debris that becomes a haven for fish. This giant log was loaded with Mahi and Ahi. We marked it and worked it until sunset, bringing home over 30 Mahi and multiple Ahi for the entire family.",
            stats: "April 2023 | 30+ Mahi | Full Family Charter"
          },
          {
            image: "charters/extravaganza/slide3",
            heading: "The Sunset Bite",
            text: "Return client Colt (over 6' for reference) landed this Pacific Blue Marlin as the sun was setting. We were trolling home, squeezing every last minute of daylight, when this bonus fish hit. After a day of Shibi, Mahi, and Aku, the blue was the perfect finisher.",
            stats: "March 2023 | Pacific Blue Marlin | Sunset Hookup"
          }
        ]}
      />

      {/* ===== TESTIMONIAL ===== */}
      <section className="relative min-h-[600px] overflow-hidden py-32">
        <CloudinaryImage
          src="charters/extravaganza/testimonial"
          alt="Customer testimonial"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1B3A5F]/80" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-8 w-8 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          <blockquote className="mb-6 font-playfair text-2xl italic leading-relaxed text-white md:text-3xl">
            "We've fished charters all over the world. This was the most productive day we've ever had. Captain JR found fish in areas we never would have reached on a different boat. The guarantee shows how confident they are — and they delivered beyond expectations."
          </blockquote>

          <p className="font-inter text-lg text-white md:text-xl">— David M., experienced angler from Florida</p>
        </div>
      </section>

      {/* ===== TARGET SPECIES ===== */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-6 font-outfit text-5xl font-bold text-[#1B3A5F] lg:text-6xl">
              What You'll Target
            </h2>
            <p className="font-inter text-xl text-gray-600">
              Maximum time on the water means we can chase whatever's biting
            </p>
          </div>

          <SpeciesGrid species={targetSpecies} />
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED / WHAT TO BRING ===== */}
      <section className="bg-gray-50 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-20 font-outfit text-5xl font-bold text-[#1B3A5F] lg:text-6xl">
            Everything You Need
          </h2>

          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h3 className="mb-10 font-outfit text-3xl font-bold text-[#1B3A5F]">
                What's Included
              </h3>
              <div className="space-y-6">
                {[
                  "Professional local crew with generations of Hawaii fishing experience",
                  "All fishing tackle — stand-up gear, light tackle, and jigging equipment",
                  "Fresh live Opelu bait caught daily",
                  "Ice and fish bags for your catch",
                  "Up to 15 lbs of whole fish cleaned and filleted (captain selects fish)",
                  "Hawaii's only charter guarantee — catch pelagic fish or receive partial refund"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-7 w-7 text-green-600" />
                    </div>
                    <p className="pt-2 font-inter text-lg leading-relaxed text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-10 font-outfit text-3xl font-bold text-[#1B3A5F]">
                What to Bring
              </h3>
              <div className="space-y-6">
                {[
                  "Your own food and drinks for the long day",
                  "Sunscreen (reef-safe preferred)",
                  "Polarized sunglasses and hat",
                  "Camera or phone for photos",
                  "Light jacket or hoodie for early morning and evening",
                  "Seasickness medication if prone",
                  "Cooler for bringing fish home (we provide ice and bags)",
                  "Hawaii fishing license if visiting from out of state (details below)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Info className="h-7 w-7 text-blue-600" />
                    </div>
                    <p className="pt-2 font-inter text-lg leading-relaxed text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== FISHING LICENSE ===== */}
          <div className="mt-16 rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-sm md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100">
                <Info className="h-7 w-7 text-amber-600" />
              </div>
              <div>
                <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">
                  Visiting from Outside Hawaii? You Need a Fishing License
                </h3>
                <p className="mb-5 font-inter text-lg leading-relaxed text-gray-700">
                  The State of Hawaiʻi requires all non-resident anglers age 15 and older to carry a recreational marine fishing license, including on charter boats. It only takes a few minutes to buy online: $20 for 1 day, $40 for 7 days, or $70 for the year. You can purchase it on your phone right up until departure, but we recommend grabbing it before your trip. Hawaii residents are exempt.
                </p>
                <a
                  href="https://fishing.hawaii.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-outfit text-lg font-semibold text-red-600 hover:text-red-700"
                >
                  Get your license at fishing.hawaii.gov
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-20 text-center font-outfit text-5xl font-bold text-[#1B3A5F] lg:text-6xl">
            Common Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "How does the guarantee work?",
                a: "If you don't catch at least one pelagic fish (marlin, tuna, mahi, ono, aku, or other gamefish), you receive a partial refund. We're the only charter in Hawaii confident enough to offer this guarantee. Note: baitfish don't count toward the guarantee."
              },
              {
                q: "What time do we leave and return?",
                a: "Departure is before sunrise (time varies by season), and return is after sunset. Exact times are confirmed by Captain JR the night before based on sunrise/sunset. Plan for 10-12 hours on the water."
              },
              {
                q: "How far offshore do you go?",
                a: "We routinely fish 40+ miles offshore on Extravaganza trips. Our boat is the fastest in the Ko Olina fleet, which allows us to reach productive grounds that other boats can't access in a day trip."
              },
              {
                q: "Do I need fishing experience?",
                a: "No. We take complete beginners on Extravaganza trips. The crew handles all the technical aspects and teaches you everything you need to know. The extended day gives everyone plenty of hookup opportunities."
              },
              {
                q: "What's the difference between this and a Full Day trip?",
                a: "Extravaganza adds 3-4 hours of fishing time, which allows us to run farther offshore, fish multiple locations, and stay through both the morning and evening bites. It's also the only trip with a catch guarantee."
              },
              {
                q: "Can we keep all the fish we catch?",
                a: "You're entitled to 15 lbs of whole fish. Captain selects which fish to fillet based on eating quality and size. Fish over 100 lbs remain with the boat and crew. This policy ensures sustainable fishing and quality eating fish for everyone."
              },
              {
                q: "What if weather is bad?",
                a: "Captain JR makes the final call on weather. If conditions are unsafe, we'll reschedule. If weather deteriorates during the trip but we've already been fishing, the guarantee still applies."
              }
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border-2 border-gray-200 p-8 transition-all hover:border-red-400 hover:shadow-lg">
                <h3 className="mb-4 font-outfit text-2xl font-bold text-[#1B3A5F]">{item.q}</h3>
                <p className="font-inter text-lg leading-relaxed text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative min-h-[800px] overflow-hidden">
        <CloudinaryImage
          src="charters/full-day/cta"
          alt="Reel Addiction III boat"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full min-h-[800px] flex-col items-center justify-start px-4 pt-24 text-center md:pt-32">
          <div className="mb-4 flex items-center gap-3">
            <Shield className="h-8 w-8 text-red-400" />
            <p className="font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Guaranteed
            </p>
          </div>

          <h2 className="mb-8 font-outfit text-5xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:text-6xl lg:text-7xl">
            Ready For The Ultimate Trip?
          </h2>

          <p className="mb-12 max-w-2xl font-inter text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-2xl">
            Dark to dark. 40+ miles offshore. Hawaii's only guaranteed charter.
          </p>

          <FareHarborButton
            itemId={FAREHARBOR_ITEMS.PRIVATE}
            className="rounded-full bg-red-600 px-12 py-5 font-outfit text-xl font-bold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-2xl hover:scale-105"
          >
            Book Extravaganza
          </FareHarborButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
