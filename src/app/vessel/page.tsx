'use client';

import CloudinaryImage from '@/components/CloudinaryImage';
import Link from 'next/link';
import { Gauge, Anchor, Wind, Snowflake, Users, Bath, Bed, Waves, Shield, Award } from 'lucide-react';
import Footer from '@/components/Footer';

const specs = [
  { icon: Anchor, label: 'Length', value: '62 ft', detail: 'Ocean Yacht' },
  { icon: Gauge, label: 'Top Speed', value: '40+ mph', detail: 'Fastest in Ko Olina' },
  { icon: Wind, label: 'Beam', value: '17.4 ft', detail: 'Stable platform' },
  { icon: Users, label: 'Capacity', value: '6 Anglers', detail: 'Plus crew' },
  { icon: Bed, label: 'Staterooms', value: '3', detail: 'Full accommodations' },
  { icon: Bath, label: 'Bathrooms', value: '3 Full', detail: 'Private heads' },
];

export default function TheVesselPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back to Home */}
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-700 shadow-lg backdrop-blur transition-colors hover:bg-white hover:text-red-600"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Home</span>
      </Link>

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <CloudinaryImage
          src="vessel/vessel-hero"
          alt="Reel Addiction III - 62ft Ocean Yacht"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-end justify-end px-6 pb-20 text-right md:px-16 lg:px-24">
          <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            62' Ocean Yacht
          </p>
          <h1 className="mb-6 font-outfit text-5xl font-bold text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            Reel Addiction III
          </h1>
          <p className="max-w-2xl font-inter text-xl text-white/90 md:text-2xl">
            The largest and fastest charter fishing boat in Ko Olina
          </p>
        </div>
      </section>

      {/* ===== QUICK SPECS BAR ===== */}
      <section className="border-b border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {specs.map((spec, index) => (
              <div key={index} className="text-center">
                <spec.icon className="mx-auto mb-2 h-6 w-6 text-red-500" />
                <p className="font-outfit text-2xl font-bold text-[#1B3A5F]">{spec.value}</p>
                <p className="font-inter text-sm text-gray-500">{spec.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEAKEEPER - THE GAME CHANGER ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Waves className="h-6 w-6 text-red-500" />
                <p className="font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                  Game Changer
                </p>
              </div>
              <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
                SeaKeeper 16 Gyro Stabilizer
              </h2>
              <div className="space-y-4 font-inter text-lg leading-relaxed text-gray-600">
                <p>
                  Reel Addiction III is fitted with the revolutionary <strong className="text-[#1B3A5F]">SeaKeeper 16 gyro stabilizing system</strong> that eliminates over 80% of the boat's roll.
                </p>
                <p>
                  This means we fish comfortably when other boats won't even leave the dock. Rough conditions that would have guests turning green on other charters feel smooth and stable on our vessel.
                </p>
                <p className="font-semibold text-[#1B3A5F]">
                  Once you fish on a boat with SeaKeeper, you'll never want to fish without one.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-50 p-6 text-center">
                  <p className="font-outfit text-4xl font-bold text-red-600">80%</p>
                  <p className="font-inter text-sm text-gray-600">Roll eliminated</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-6 text-center">
                  <p className="font-outfit text-4xl font-bold text-red-600">100%</p>
                  <p className="font-inter text-sm text-gray-600">More comfortable</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:h-[500px]">
              <CloudinaryImage
                src="vessel/vessel-seakeeper"
                alt="SeaKeeper stabilizing system"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPEED ADVANTAGE ===== */}
<section className="py-20">
  <div className="mx-auto max-w-[1800px] px-6">
    <div className="grid grid-cols-1 overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-5">
      {/* Image - 60% (3 cols) */}
      <div className="relative h-[400px] lg:col-span-3 lg:h-[600px]">
        <CloudinaryImage
          src="vessel/vessel-speed"
          alt="Reel Addiction III running offshore"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>
      {/* Text Panel - 40% (2 cols) with dark background */}
      <div className="flex items-center bg-[#1B3A5F] px-10 py-16 lg:col-span-2">
        <div className="text-white">
          <p className="mb-3 font-outfit text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Speed Matters
          </p>
          <h2 className="mb-6 font-outfit text-3xl font-bold leading-tight lg:text-4xl">
            40+ MPH Gets You There First
          </h2>
          <div className="space-y-4 font-inter text-base leading-relaxed opacity-90">
            <p>
              Reel Addiction III is one of the fastest charter boats on O'ahu. Our twin Caterpillar motors push us to speeds over 40 mph — that's 10-15 mph faster than most charter boats.
            </p>
            <p>
              What does speed mean for you? More fishing time. While other boats are still running out, we're already on the fish. We can reach productive grounds 40+ miles offshore that slower boats simply can't access in a day trip.
            </p>
            <p className="font-semibold opacity-100">
              When the bite is hot 30 miles out, we're there in 45 minutes. Other boats? Over an hour. That extra time on the water translates to more fish in the box.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ===== COMFORT & AMENITIES ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              Luxury Meets Function
            </h2>
            <p className="font-inter text-lg text-gray-600">
              All the comforts of a yacht with serious fishing capability
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Snowflake,
                title: 'Air-Conditioned Flybridge',
                description: 'Enclosed flybridge keeps you cool and protected from the elements. Watch the action from above in comfort.'
              },
              {
                icon: Bed,
                title: '3 Private Staterooms',
                description: 'Full sleeping accommodations for extended trips. Each stateroom is private and comfortable.'
              },
              {
                icon: Bath,
                title: '3 Full Bathrooms',
                description: 'Three full heads means no waiting. Private, clean, and properly appointed for a day offshore.'
              },
              {
                icon: Anchor,
                title: 'Massive Cockpit',
                description: 'Huge fishing cockpit with plenty of room for multiple anglers to fight fish simultaneously.'
              },
              {
                icon: Shield,
                title: '300 Gal Fresh Water',
                description: 'Ample fresh water for rinsing, cleaning, and staying comfortable all day long.'
              },
              {
                icon: Award,
                title: 'Dual Generators',
                description: 'Two generators provide redundant power for all systems — AC, electronics, and fishing gear.'
              },
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border-2 border-gray-100 bg-white p-8 transition-all hover:border-red-200 hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-50">
                  <item.icon className="h-7 w-7 text-red-500" />
                </div>
                <h3 className="mb-3 font-outfit text-xl font-bold text-[#1B3A5F]">{item.title}</h3>
                <p className="font-inter leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAPTAIN JR ===== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <CloudinaryImage
                src="vessel/captain-jr"
                alt="Captain JR"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="mb-2 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                Your Captain
              </p>
              <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
                Captain JR
              </h2>
              <div className="space-y-4 font-inter text-lg leading-relaxed text-gray-600">
                <p>
                  Captain JR has been fishing commercially and running charter boats on O'ahu for most of his life. With <strong className="text-[#1B3A5F]">over 30 years of experience</strong> in these waters, he knows where the fish are — and more importantly, when they'll be there.
                </p>
                <p>
                  He's deeply connected in Hawaii's fishing community. When something's biting offshore, he knows about it. When conditions change, he adapts. His decades of local knowledge are your biggest advantage.
                </p>
                <p>
                  Whether you're a first-time angler or a seasoned pro, Captain JR and his crew will make your day memorable. They love what they do, and it shows.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-full bg-[#1B3A5F] px-6 py-3">
                  <p className="font-outfit font-bold text-white">30+ Years Experience</p>
                </div>
                <div className="rounded-full bg-[#1B3A5F] px-6 py-3">
                  <p className="font-outfit font-bold text-white">Local Knowledge</p>
                </div>
                <div className="rounded-full bg-[#1B3A5F] px-6 py-3">
                  <p className="font-outfit font-bold text-white">Commercial Background</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
            Ko Olina Marina
          </h2>
          <p className="mb-8 font-inter text-lg leading-relaxed text-gray-600">
            Conveniently located at Ko Olina harbor on O'ahu's west side. We're close to the best fishing grounds — five minutes from the dock and we're already in deep water while other boats are still running out of Kewalo Basin.
          </p>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.603716545786!2d-158.1207375!3d21.326669499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0063b6ee483129%3A0xe57d717c442914ea!2sReel%20Addiction%20III%20Sport%20Fishing!5e0!3m2!1sen!2sus!4v1767325239125!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=""
            />
          </div>
          <p className="mt-6 font-inter text-gray-500">
            Ko Olina Marina, Slip F7 • Kapolei, HI 96707
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#1B3A5F] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-outfit text-4xl font-bold text-white md:text-5xl">
            See It For Yourself
          </h2>
          <p className="mb-10 font-inter text-xl text-white/80">
            Book your charter and experience fishing on O'ahu's finest vessel
          </p>
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