import { Metadata } from 'next';
import Image from 'next/image';
import CloudinaryImage from '@/components/CloudinaryImage';
import Link from 'next/link';
import FareHarborButton from '@/components/FareHarborButton';
import { FAREHARBOR_ITEMS } from '@/lib/fareharbor';

export const metadata: Metadata = {
  title: "Shared Charter | Reel Addiction III - Ko Olina, Oahu",
  description: "Join a shared deep sea fishing charter from Ko Olina. $500 per person, minimum 4 guests. Same boat, same captain, split the cost.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SharedCharterPage() {
  return (
    <main className="relative min-h-screen">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <CloudinaryImage
          src="charters/full-day/hero"
          alt="Deep sea fishing charter"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-10 pb-6">
        <div className="mx-auto max-w-7xl px-6 flex justify-center">
          <Link href="/">
            <Image
              src="/images/logo-white.png"
              alt="Reel Addiction III"
              width={200}
              height={60}
              className="drop-shadow-lg"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-140px)] items-center">
        <div className="mx-auto max-w-7xl px-6 py-16 w-full">
          <div className="max-w-2xl">

            {/* Left - Text */}
            <div className="text-white">
              <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                Shared Charter
              </p>

              <h1 className="mb-6 font-outfit text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Same Boat.<br />
                Split the Cost.
              </h1>

              <p className="mb-10 font-inter text-xl text-white/80 leading-relaxed">
                Full day offshore with Captain JR. You book a spot, we fill the rest.
                If we don't hit 4 guests, you get a full refund.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-10 mb-12">
                <div>
                  <p className="font-outfit text-5xl font-bold text-white">$500</p>
                  <p className="font-inter text-base text-white/70 mt-1">per person</p>
                </div>
                <div>
                  <p className="font-outfit text-5xl font-bold text-white">8-10</p>
                  <p className="font-inter text-base text-white/70 mt-1">hours fishing</p>
                </div>
                <div>
                  <p className="font-outfit text-5xl font-bold text-white">4-6</p>
                  <p className="font-inter text-base text-white/70 mt-1">guests per trip</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-6">
                <FareHarborButton
                  itemId={FAREHARBOR_ITEMS.SHARED}
                  className="inline-block rounded-full bg-red-600 px-12 py-4 font-outfit text-lg font-bold text-white transition-all hover:bg-red-700 hover:scale-105 hover:shadow-xl"
                >
                  Book Your Spot
                </FareHarborButton>

                <Link
                  href="/charters"
                  className="font-inter text-white/80 hover:text-white transition-colors"
                >
                  or view private charters →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <p className="font-inter text-white/60">
              Ko Olina Marina, O'ahu • Trip confirms 24hrs before • Full refund if minimum not met
            </p>
            <a
              href="tel:808-867-3474"
              className="font-outfit font-bold text-white hover:text-red-400 transition-colors"
            >
              Questions? Call Captain JR
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
