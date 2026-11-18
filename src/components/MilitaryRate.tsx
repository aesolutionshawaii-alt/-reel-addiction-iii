import Link from 'next/link';
import CloudinaryImage from '@/components/CloudinaryImage';

export default function MilitaryRate() {
  return (
    <section id="military" className="scroll-mt-32 bg-[#1B3A5F] py-20 text-white md:scroll-mt-36 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 text-label uppercase tracking-widest text-white/60">Military rate</p>
            <h2 className="mb-6 font-outfit text-3xl font-bold md:text-4xl">
              20% off for active duty and retired military
            </h2>
            <div className="space-y-4 font-inter text-lg leading-relaxed text-white/85">
              <p>
                Any private charter, any date on the calendar. Show your military ID at the dock in Ko Olina and the rate is
                yours.
              </p>
              <p>
                Book by phone or message so we can apply the rate before you pay. Pearl Harbor, Kaneohe Bay and Schofield are
                all within an hour of the marina.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+18088673474"
                className="inline-flex items-center justify-center rounded-button bg-red px-6 py-3 font-outfit font-semibold text-white transition-colors hover:bg-red-hover"
              >
                Call (808) 867-FISH
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-button border border-white/40 px-6 py-3 font-outfit font-semibold text-white transition-colors hover:bg-white/10"
              >
                Message Captain JR
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <CloudinaryImage
              src="charters/full-day/hero"
              alt="Reel Addiction III fishing offshore from Ko Olina"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
