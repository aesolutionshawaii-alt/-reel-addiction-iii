import { Metadata } from 'next';
import { species } from '@/data/species';
import SpeciesGrid from '@/components/SpeciesGrid';
import Footer from '@/components/Footer';
import InnerNavigation from '@/components/InnerNavigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Fish Species | Reel Addiction III - Hawaii Deep Sea Fishing",
  description: "Explore the fish species we target on Oahu deep sea fishing charters. Ahi, Mahi Mahi, Blue Marlin, Ono, and more.",
};

export default function FishPage() {
  return (
    <main className="min-h-screen bg-[#1B3A5F]">
      <InnerNavigation />

      <section className="px-6 pb-12 pt-32 text-center">
        <h1 className="mb-4 font-outfit text-5xl font-bold text-white md:text-6xl">
          Fish Species
        </h1>
        <p className="mx-auto max-w-2xl font-inter text-xl text-white/80">
          The prized game fish of Hawaiian waters
        </p>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <SpeciesGrid species={species} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 font-outfit text-3xl font-bold text-[#1B3A5F]">
            When Should You Fish?
          </h2>
          <p className="mb-8 font-inter text-lg text-gray-600">
            Learn the best seasons and techniques for targeting each species.
          </p>
          <Link
            href="/oahu-deep-sea-fishing-guide"
            className="inline-block rounded-full bg-red-600 px-8 py-4 font-outfit text-lg font-bold text-white transition-all hover:bg-red-700"
          >
            View Fishing Guide
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}