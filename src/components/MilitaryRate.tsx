import CloudinaryImage from '@/components/CloudinaryImage';

export default function MilitaryRate() {
  return (
    <section id="military" className="scroll-mt-32 bg-[#1B3A5F] py-20 text-white md:scroll-mt-36 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 text-label uppercase tracking-widest text-white/60">Active Duty and Retired Military</p>
            <h2 className="mb-6 font-outfit text-3xl font-bold md:text-4xl">
              20% Military Discount on Oahu Fishing Charters
            </h2>
            <div className="space-y-4 font-inter text-lg leading-relaxed text-white/85">
              <p>
                Any private charter on the calendar: 3/4 Day, Full Day or the Extravaganza. Up to 6 guests aboard a 62-foot
                Ocean Yacht out of Ko Olina Marina.
              </p>
              <p>
                Call or text (808) 867-FISH to book the military rate. Valid military ID required at the dock.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+18088673474"
                className="inline-flex items-center justify-center rounded-button bg-red px-6 py-3 font-outfit font-semibold text-white transition-colors hover:bg-red-hover"
              >
                Call (808) 867-FISH
              </a>
              <a
                href="sms:+18088673474"
                className="inline-flex items-center justify-center rounded-button border border-white/40 px-6 py-3 font-outfit font-semibold text-white transition-colors hover:bg-white/10"
              >
                Text (808) 867-FISH
              </a>
            </div>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <CloudinaryImage
              src="images/cta-group"
              alt="Guests and crew on the dock at Ko Olina holding two yellowfin tuna"
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
