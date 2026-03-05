import { Metadata } from 'next';
import CloudinaryImage from '@/components/CloudinaryImage';
import Link from 'next/link';
import { Clock, Users, DollarSign, Check, Info } from 'lucide-react';
import Footer from '@/components/Footer';
import SpeciesGrid from '@/components/SpeciesGrid';
import FareHarborButton from '@/components/FareHarborButton';
import { FAREHARBOR_ITEMS } from '@/lib/fareharbor';

export const metadata: Metadata = {
  title: "3/4 Day Charter | Reel Addiction III - Ko Olina, Oahu",
  description: "The perfect balance of fishing and vacation time. 5-6 hours on the water with O'ahu's most experienced local crew. Book your 3/4 day charter from Ko Olina.",
};

const targetSpecies = [
  {
    name: "Blue Marlin",
    season: "May - September (peak)",
    image: "species/blue-marlin",
    description: "The ultimate game fish and the crown jewel of Hawaii sportfishing. Blue marlin are powerful, acrobatic fighters that can reach massive sizes and provide the fight of a lifetime.",
    techniques: "Live bait fishing with Opelu, high-speed trolling with lures, and watching for birds working bait schools. We focus on productive FADs and known feeding areas where blues hunt.",
    size: "Average 200-400 lbs, trophy fish 500+ lbs",
    hawaiiFact: "In Hawaii, blue marlin are called 'A'u and are deeply respected. We practice mostly catch-and-release for these magnificent fish, though smaller ones are sometimes kept for poke and sashimi."
  },
  {
    name: "Striped Marlin",
    season: "November - April",
    image: "species/striped-marlin",
    description: "Fast, acrobatic, and aggressive. Striped marlin put on an incredible aerial show and are known for their beautiful vertical stripes that light up when they're hunting.",
    techniques: "High-speed trolling, live bait with flying fish or small tuna. They love to attack surface lures and will often 'light up' and circle the bait before striking.",
    size: "Average 80-150 lbs, can reach 200+ lbs",
    hawaiiFact: "Striped marlin are winter visitors to Hawaii waters. Local crews know specific temperature breaks and current edges where they concentrate during the cooler months."
  },
  {
    name: "Yellowfin Tuna (Ahi)",
    season: "Year-round",
    image: "species/yellowfin-tuna",
    description: "Powerful, fast, and delicious. Yellowfin tuna are prized both as sport fish and for their incredible meat quality. They fight hard and dive deep.",
    techniques: "Live bait fishing, chunk fishing around FADs, high-speed trolling. We often find them feeding under birds or around floating debris and FADs.",
    size: "Average 40-100 lbs, trophy fish 150-250 lbs",
    hawaiiFact: "Ahi is the Hawaiian name and it's the most sought-after fish in local markets. Fresh ahi poke is a Hawaiian staple, and nothing beats sashimi from a fish you just caught."
  },
  {
    name: "Mahi Mahi (Dorado)",
    season: "March - June (peak)",
    image: "species/mahi-mahi",
    description: "The most colorful fish in the ocean with brilliant greens, golds, and blues. Mahi mahi are aggressive feeders, acrobatic jumpers, and absolutely delicious.",
    techniques: "Trolling near floating debris and weed lines, live bait fishing. Often found in schools, so where there's one, there's usually more.",
    size: "Average 15-30 lbs, bulls can reach 50-60 lbs",
    hawaiiFact: "Mahi mahi means 'strong-strong' in Hawaiian. It's one of the most sustainable fish to catch and eat. Grilled mahi with local fruit salsa is a Hawaii favorite."
  },
  {
    name: "Ono (Wahoo)",
    season: "October - March",
    image: "species/ono",
    description: "The fastest fish in the ocean with blistering runs that will scream line off your reel. Ono are sleek, powerful, and have razor-sharp teeth.",
    techniques: "High-speed trolling is most effective. Ono love wire line and strike fast-moving lures. They often hit without warning and make incredible first runs.",
    size: "Average 25-50 lbs, can reach 80-100 lbs",
    hawaiiFact: "Ono means 'delicious' in Hawaiian, and they earned that name. The white, flaky meat is considered some of the best eating in the ocean. Perfect for fish tacos or grilled."
  },
  {
    name: "Aku (Skipjack Tuna)",
    season: "Peak April-September, available year-round",
    image: "species/aku",
    description: "Hardworking school fish that are the backbone of Hawaii's fishing culture. Aku are aggressive feeders that attack in packs and provide non-stop action.",
    techniques: "Live bait fishing, chumming, and trolling small lures. When you find a school, it's game on with multiple hookups and constant action.",
    size: "Average 5-15 lbs, larger fish reach 20-25 lbs",
    hawaiiFact: "Aku is essential to Hawaiian cuisine and culture. It's the traditional fish for poke, and old-timers say the best way to eat it is raw with sea salt, inamona (roasted kukui nut), and limu (seaweed)."
  }
];

export default function ThreeFourDayCharterPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen overflow-hidden">
        <div className="animate-ken-burns absolute inset-0">
          <CloudinaryImage
            src="charters/34-day/hero"
            alt="Mahi Mahi fishing action"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,13,15,0.6) 0%, rgba(13,13,15,0) 40%, rgba(13,13,15,0.8) 100%)' }} />

        <div className="absolute inset-x-0 bottom-32 z-10 px-6 text-center md:bottom-40">
          <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            3/4 Day Charter
          </p>

          <h1 className="mb-6 font-outfit text-5xl font-bold leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:text-7xl lg:text-8xl">
            The Sweet Spot.
          </h1>

          <p className="mx-auto mb-8 max-w-3xl font-inter text-xl leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-2xl">
            5-6 hours on the water with O'ahu's most experienced local crew
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 font-inter text-lg text-white md:gap-12 md:text-xl">
            <div className="flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <Clock className="h-6 w-6" />
              <span>5-6 Hours</span>
            </div>
            <div className="flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <Users className="h-6 w-6" />
              <span>Up to 6 Anglers</span>
            </div>
            <div className="flex items-center gap-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              <DollarSign className="h-6 w-6" />
              <span>$2,495</span>
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
              <p className="text-sm font-bold text-gray-900">5-6 Hours</p>
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
              <p className="text-lg font-bold text-red-600 md:text-xl">$2,495</p>
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

      {/* ===== THE LOCAL ADVANTAGE ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-[1800px] px-6">
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-5">
            {/* Image - 60% (3 cols) */}
            <div className="relative h-[400px] lg:col-span-3 lg:h-[600px]">
              <CloudinaryImage
                src="charters/34-day/action"
                alt="Tourist fighting fish with crew support"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Text Panel - 40% (2 cols) with dark background */}
            <div className="flex items-center bg-[#1B3A5F] px-10 py-16 lg:col-span-2">
              <div className="text-white">
                <p className="mb-3 font-outfit text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                  What to Expect
                </p>

                <h2 className="mb-6 font-outfit text-3xl font-bold leading-tight lg:text-4xl">
                  Perfect For Visitors
                </h2>

                <div className="space-y-4 font-inter text-base leading-relaxed opacity-90">
                  <p>
                    The 3/4 day trip is designed specifically for travelers who want the full Hawaiian sportfishing experience without sacrificing their evening plans. Fish hard in the morning, catch quality fish, and be back at the dock with plenty of time for your sunset dinner or luau.
                  </p>
                  <p>
                    We're out of Ko Olina on O'ahu's west side, which puts us in deep water faster than any other harbor. Five minutes from the dock, we're already catching fresh live bait. No long run times eating into your fishing — we maximize every minute on the water.
                  </p>
                  <p className="font-semibold opacity-100">
                    This is the trip most of our visitors book. Enough time to find the fish and land your trophy, back early enough to enjoy the rest of your day. The sweet spot.
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
              What A 3/4 Day Looks Like
            </h2>
            <p className="font-inter text-xl text-gray-600">
              Half day fishing, full day experience
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                time: "Night Before",
                desc: "Captain JR calls to confirm details, discuss weather, and coordinate exact meet time. He'll adjust departure based on when the bait starts biting at sunrise."
              },
              {
                time: "Pre-Dawn",
                desc: "Meet at Ko Olina Marina. Quick safety briefing, get comfortable on the boat, and head out. Five minutes later, we're in deep water while other boats are still running."
              },
              {
                time: "Sunrise",
                desc: "We catch fresh Opelu for live bait while you watch the sunrise over O'ahu. Whales breach in winter, dolphins play in the bow wake. This is why you came to Hawaii."
              },
              {
                time: "Morning Bite",
                desc: "The best fishing happens early. We work the productive grounds while fish are feeding actively. This is prime time — we're fishing when it matters most."
              },
              {
                time: "Back to the Dock",
                desc: "Return between 12:30-2pm depending on the bite. We clean and fillet your catch at the dock. You leave with coolers of fresh fish and the rest of your day ahead of you."
              }
            ].map((item, index) => (
              <div key={index} className="group flex gap-8">
                <div className="relative flex-shrink-0">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-red-600 font-outfit text-2xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-125">
                    {index + 1}
                  </div>
                  {index < 4 && (
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

      {/* ===== TESTIMONIAL ===== */}
      <section className="relative min-h-[600px] overflow-hidden py-32">
        <CloudinaryImage
          src="charters/full-day/hero"
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
            "Perfect timing for our vacation schedule. We caught fish in the morning and still made it to our sunset dinner at Roy's. Captain JR and his crew made us feel welcome and safe. Highly recommend for anyone visiting O'ahu."
          </blockquote>

          <p className="font-inter text-lg text-white md:text-xl">— Michael & Jennifer T., San Diego</p>
        </div>
      </section>

      {/* ===== TARGET SPECIES WITH MODAL ===== */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-6 font-outfit text-5xl font-bold text-[#1B3A5F] lg:text-6xl">
              What You'll Target
            </h2>
            <p className="font-inter text-xl text-gray-600">
              These waters are home to some of the ocean's most prized game fish
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
                  "All fishing tackle — stand-up gear and light tackle options",
                  "Fresh live Opelu bait caught daily",
                  "Ice and fish bags for your catch",
                  "Fish cleaning and filleting at the dock",
                  "Water, soft drinks, and light snacks"
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
                  "Sunscreen (reef-safe preferred)",
                  "Polarized sunglasses and hat",
                  "Camera or phone for photos",
                  "Light jacket or hoodie for early morning",
                  "Seasickness medication if prone",
                  "Any additional food or drinks you prefer"
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
                q: "Will I still catch fish on a shorter trip?",
                a: "Absolutely. The early morning bite is when fish are most active. We fish the prime hours and skip the slower midday period. Many of our biggest fish are caught on 3/4 day trips."
              },
              {
                q: "What time will we be back?",
                a: "Between 12:30-2pm depending on the bite. This gives you plenty of time for afternoon activities, dinner reservations, or evening plans."
              },
              {
                q: "Is this trip good for beginners?",
                a: "Perfect for beginners. Our crew will teach you everything you need to know. Many of our clients have never fished before."
              },
              {
                q: "What if someone gets seasick?",
                a: "The morning ocean is typically calmer, and Ko Olina's location offers protection from trade winds. We also stay close to productive grounds, minimizing rough water time."
              },
              {
                q: "Can we keep the fish we catch?",
                a: "Yes! We clean and fillet everything you want to keep. You leave with coolers ready for your hotel, condo, or to ship home."
              },
              {
                q: "Is there a restroom on the boat?",
                a: "Yes, the boat has a private head (bathroom) available for use."
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

        <div className="relative z-10 flex h-full min-h-[600px] flex-col items-center justify-center px-4 text-center">
          <h2 className="mb-8 font-outfit text-5xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:text-6xl lg:text-7xl">
            Ready to Fish?
          </h2>

          <p className="mb-12 max-w-2xl font-inter text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-2xl">
            Book your 3/4 day charter and experience the best of Hawaii sportfishing
          </p>

          <FareHarborButton
            itemId={FAREHARBOR_ITEMS.PRIVATE}
            className="rounded-full bg-red-600 px-12 py-5 font-outfit text-xl font-bold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-2xl hover:scale-105"
          >
            Book Your Trip
          </FareHarborButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
