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

export default function FishingGuidePage() {
  return (
    <main className="min-h-screen bg-white">
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
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">✓</span>
                <span>Night fishing for Tuna and Swordfish (late spring/early summer)</span>
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

      {/* ===== CTA ===== */}
      <section className="bg-[#1B3A5F] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-outfit text-4xl font-bold text-white md:text-5xl">
            Ready to Book Your Adventure?
          </h2>
          <p className="mb-6 font-inter text-xl text-white/80">
            Reel Addiction III departs from Ko Olina Harbor with the only SeaKeeper gyro stabilizer in the fleet — meaning we fish when other boats can't!
          </p>

          <div className="mb-10 flex flex-col items-center gap-4 font-inter text-xl text-white">
            <a href="tel:808-867-3474" className="flex items-center gap-2 transition-colors hover:text-red-400">
              <Phone className="h-5 w-5" />
              (808) 867-FISH (3474)
            </a>
          </div>

          <div className="mb-10 grid gap-4 text-center md:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-6">
              <p className="mb-1 font-outfit text-2xl font-bold text-white">$2,495</p>
              <p className="font-inter text-white/70">3/4 Day (6 hours)</p>
            </div>
            <div className="rounded-xl bg-white/10 p-6">
              <p className="mb-1 font-outfit text-2xl font-bold text-white">$2,995</p>
              <p className="font-inter text-white/70">Full Day (8-10 hours)</p>
            </div>
            <div className="rounded-xl bg-white/10 p-6">
              <p className="mb-1 font-outfit text-2xl font-bold text-white">$3,300</p>
              <p className="font-inter text-white/70">Extravaganza</p>
            </div>
          </div>

          <Link
            href="/charters"
            className="inline-block rounded-full bg-red-600 px-10 py-4 font-outfit text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-xl"
          >
            View Charters
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}