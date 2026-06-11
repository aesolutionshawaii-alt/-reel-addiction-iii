import { Metadata } from 'next';
import CloudinaryImage from '@/components/CloudinaryImage';
import Link from 'next/link';
import { Clock, Users, DollarSign, Check, Info } from 'lucide-react';
import Footer from '@/components/Footer';
import SpeciesGrid from '@/components/SpeciesGrid';
import FareHarborButton from '@/components/FareHarborButton';
import { FAREHARBOR_ITEMS } from '@/lib/fareharbor';

export const metadata: Metadata = {
  title: "Full Day Charter | Reel Addiction III - Ko Olina, Oahu",
  description: "Go deeper, more water, bigger fish. 8-10 hours on the water with O'ahu's most experienced local crew. Book your full day charter from Ko Olina Marina.",
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

export default function FullDayCharterPage() {
  return (
    <main className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 h-[120vh]">
          <CloudinaryImage
            src="charters/full-day/hero"
            alt="Full day deep sea fishing charter"
            fill
            className="animate-ken-burns object-cover"
            style={{ transform: 'scale(1.2)' }}
            sizes="100vw"
            priority
          />
        </div>

        {/* Better gradient - no hard lines */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.65) 100%)'
          }}
        />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-6xl text-center text-white">
            {/* Using Outfit font for label */}
            <p className="mb-6 animate-fade-in font-outfit text-sm font-bold uppercase tracking-[0.3em] text-red-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Full Day Charter
            </p>

            {/* Using Outfit font for main headline */}
            <h1 className="mb-8 animate-fade-in-up font-outfit text-7xl font-bold leading-[0.95] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:text-8xl lg:text-9xl">
              Go Deeper.<br />
              More Water.<br />
              Bigger Fish.
            </h1>

            {/* Using Inter font for description */}
            <p className="mb-12 animate-fade-in-up font-inter text-2xl font-light leading-relaxed text-white opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [animation-delay:200ms] md:text-3xl">
              8-10 hours with O'ahu's most experienced local crew
            </p>

            {/* Specs with Lucide icons */}
            <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-8 font-inter text-xl font-medium [animation-delay:400ms] animate-fade-in-up">
              <span className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-red-500" />
                8-10 Hours
              </span>
              <span className="text-white/40">|</span>
              <span className="flex items-center gap-2">
                <Users className="h-6 w-6 text-red-500" />
                Up to 6 Anglers
              </span>
              <span className="text-white/40">|</span>
              <span className="flex items-center gap-2 text-2xl font-bold text-red-500">
                <DollarSign className="h-6 w-6" />
                3,495
              </span>
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
              <p className="text-sm font-bold text-gray-900">10-12 Hours</p>
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
              <p className="text-lg font-bold text-red-600 md:text-xl">$3,495</p>
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
                src="charters/full-day/action"
                alt="Deep sea fishing action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Text Panel - 40% (2 cols) with dark background */}
            <div className="flex items-center bg-[#1B3A5F] px-10 py-12 lg:col-span-2">
              <div className="text-white">
                <p className="mb-3 font-outfit text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                  What to Expect
                </p>

                <h2 className="mb-6 font-outfit text-3xl font-bold leading-tight lg:text-4xl">
                  The Local Advantage
                </h2>

                <div className="space-y-4 font-inter text-base leading-relaxed opacity-90">
                  <p>
                    Captain JR calls you the night before to confirm details, check the forecast, and talk strategy. He'll let you know exactly where to park, what to bring, and when to meet based on when the bait starts biting at sunrise.
                  </p>
                  <p>
                    We leave Ko Olina on O'ahu's west side - which puts us in deep water faster than any other harbor on the island. Five minutes out, we're catching fresh Opelu for live bait while you watch the sunrise.
                  </p>
                  <p className="font-semibold opacity-100">
                    This is a local captain and crew fishing a luxury sportfishing yacht the way they grew up commercial fishing in Hawaii. Generations of knowledge.
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
              What A Full Day Looks Like
            </h2>
            <p className="font-inter text-xl text-gray-600">
              The authentic experience from someone who's been there
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                time: "Night Before",
                desc: "Captain JR calls to confirm details, discuss weather and conditions, and let you know the exact meet time based on sunrise and bait activity."
              },
              {
                time: "Pre-Dawn",
                desc: "Meet at Ko Olina Marina. Safety briefing covers life jackets, life raft location, comfortable spots on the boat, and crew introductions. Any questions you have, we answer."
              },
              {
                time: "Sunrise",
                desc: "Five minutes out of the harbor, we're catching fresh Opelu for live bait while you watch one of the most incredible sunrises you'll ever see. Whales, dolphins, and seabirds are常 companions."
              },
              {
                time: "Morning",
                desc: "We check in with our captain network, assess what's biting, and start fishing immediately. Ko Olina puts us in deep water faster than any other harbor - we're already trolling productive grounds while other boats are still running out."
              },
              {
                time: "Mid-Day",
                desc: "Combination of live bait fishing at our productive FADs and trolling between spots. This is when the big blues and yellowfin get active. Light tackle is available if you want to feel a marlin on spinning gear."
              },
              {
                time: "Afternoon Return",
                desc: "Back to the dock around 2-4pm depending on the bite. We clean and fillet up to 15lbs of your catch right there - you leave with zip-locs full of the freshest fish you've ever tasted."
              }
            ].map((item, index) => (
              <div key={index} className="group flex gap-8">
                <div className="relative flex-shrink-0">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-red-600 font-outfit text-2xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-125 relative z-10">
                    {index + 1}
                  </div>
                  {index < 5 && (
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
      <section className="relative overflow-hidden bg-[#1B3A5F] py-32">
        <div className="absolute inset-0 opacity-10">
          <CloudinaryImage
            src="charters/full-day/hero"
            alt="Background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <svg className="mx-auto mb-8 h-16 w-16 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <p className="mb-8 font-playfair text-3xl font-light italic leading-relaxed">
            Amazing trip! Great boat, great equipment, and even better Captain and Deckhand. Captain JR and Keaka went above and beyond to make sure we had a great trip. Very professional and great with the kids. A day my kids and I will never forget. We fished with them during the slow time of year and they had us on the fish all day. Highly recommend!!
          </p>

          <div>
            <p className="font-outfit text-lg font-bold">Kelly S.</p>
            <p className="font-inter text-sm text-white/70">San Francisco, CA</p>
          </div>

          {/* Star rating */}
          <div className="mt-6 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
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

      {/* ===== WHAT'S INCLUDED ===== */}
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
                  "All fishing tackle - stand-up gear and light tackle options",
                  "Fresh live Opelu bait caught daily",
                  "Ice and gallon zip-loc bags for your catch",
                  "Fish cleaning and filleting at the dock",

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
                  "Any food or drinks you prefer"
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

      {/* ===== FAQ ===== */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-6 font-outfit text-5xl font-bold text-[#1B3A5F] lg:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-xl text-gray-600">
              Everything you need to know before booking
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What time do we actually leave?",
                a: "It varies based on sunrise and when the bait starts biting — Captain JR will call you the night before with the exact meet time. Typically it's around 6am, but could be earlier or slightly later depending on conditions."
              },
              {
                q: "What makes your crew different?",
                a: "We're local boys fishing a luxury sportfishing yacht the way we grew up commercial fishing in Hawaii. Captain JR and crew have generations of knowledge in these waters — sometimes his father even crews. We're 5-star rated on Google because we keep it fun, down-to-earth, and focused on getting you on your dream fish."
              },
              {
                q: "Why fish out of Ko Olina?",
                a: "Ko Olina on O'ahu's west side puts us in deep water faster than anywhere else on the island. We're catching bait 5 minutes out of the harbor, and we have productive fishing grounds plus multiple FADs right outside. More fishing time = better odds."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between p-8 text-left transition-colors hover:bg-gray-50">
                  <h3 className="font-outfit text-2xl font-bold text-[#1B3A5F] pr-4">
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

          <div className="mt-12 text-center">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 font-outfit text-lg font-semibold text-red-600 hover:text-red-700"
            >
              See All FAQs
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative h-[700px] overflow-hidden">
        <CloudinaryImage
          src="charters/full-day/cta"
          alt="Book your charter"
          fill
          className="animate-ken-burns object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.7) 100%)'
          }}
        />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <h2 className="mb-8 font-outfit text-6xl font-bold leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] lg:text-7xl">
              Ready to Book Your<br />Full Day Charter?
            </h2>
            <p className="mb-12 font-inter text-2xl font-light leading-relaxed text-white opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Captain JR and crew are ready to put you on your dream fish
            </p>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <FareHarborButton
                itemId={FAREHARBOR_ITEMS.PRIVATE}
                className="group relative overflow-hidden rounded-full bg-red-600 px-12 py-6 font-outfit text-xl font-bold text-white shadow-2xl transition-all hover:bg-red-700 hover:scale-105 hover:shadow-red-600/50"
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 transition-opacity group-hover:opacity-100" />
              </FareHarborButton>

              <a
                href="tel:8088675473"
                className="rounded-full border-2 border-white px-12 py-6 font-outfit text-xl font-bold text-white backdrop-blur transition-all hover:bg-white hover:text-[#1B3A5F]"
              >
                (808) 867-FISH
              </a>
            </div>

            <p className="mt-10 font-inter text-sm uppercase tracking-wider opacity-75">
              5-Star Rated • Local Crew • Generations of Experience
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
