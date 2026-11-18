import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import CloudinaryImage from '@/components/CloudinaryImage';
import InnerNavigation from '@/components/InnerNavigation';
import { GIFT_CARDS_ONLINE, FAREHARBOR_GIFT_CARD_URL } from '@/lib/fareharbor';

export const metadata: Metadata = {
  alternates: { canonical: '/gift-cards' },
  title: 'Gift Certificates | Reel Addiction III | Ko Olina',
  description:
    'Give a private deep sea fishing charter from Ko Olina, Oahu. Gift certificates for the 3/4 Day, Full Day and Extravaganza aboard Reel Addiction III. Black Friday through Cyber Monday at last year’s prices.',
};

const trips = [
  { name: '3/4 Day Charter', hours: '5 to 6 hours', regular: '$3,095', holiday: '$2,495' },
  { name: 'Full Day Charter', hours: '8 to 10 hours', regular: '$3,495', holiday: '$2,995' },
  { name: 'Extravaganza', hours: 'Sunrise to sunset', regular: '$3,800', holiday: '$3,300' },
];

export default function GiftCardsPage() {
  return (
    <main className="min-h-screen bg-white">
      <InnerNavigation />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <CloudinaryImage
          src="charters/extravaganza/hero"
          alt="Reel Addiction III offshore from Ko Olina"
          fill
          className="object-cover object-[50%_30%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 lg:px-8">
            <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400">Gift certificates</p>
            <h1 className="max-w-3xl font-outfit text-4xl font-bold leading-tight text-white md:text-6xl">
              Give a day offshore with Captain JR
            </h1>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <CloudinaryImage
                src="charters/34-day/hero"
                alt="Guests fishing aboard Reel Addiction III"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="mb-6 font-outfit text-3xl font-bold text-[#1B3A5F] md:text-4xl">
                The whole boat, their date
              </h2>
              <div className="space-y-4 font-inter text-lg leading-relaxed text-gray-600">
                <p>
                  A gift certificate covers a private charter aboard Reel Addiction III for up to six guests, departing Ko
                  Olina Marina on O&rsquo;ahu&rsquo;s west side. Rods, reels, tackle and bait are on board.
                </p>
                <p>
                  You pick the trip. They pick the day, by phone or message with Captain JR, whenever they are ready to fish.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {GIFT_CARDS_ONLINE ? (
                  <a
                    href={FAREHARBOR_GIFT_CARD_URL}
                    className="inline-flex items-center justify-center rounded-button bg-red px-6 py-3 font-outfit font-semibold text-white transition-colors hover:bg-red-hover"
                  >
                    Buy a gift certificate
                  </a>
                ) : (
                  <a
                    href="tel:+18088673474"
                    className="inline-flex items-center justify-center rounded-button bg-red px-6 py-3 font-outfit font-semibold text-white transition-colors hover:bg-red-hover"
                  >
                    Call (808) 867-FISH
                  </a>
                )}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-button border border-[#1B3A5F]/30 px-6 py-3 font-outfit font-semibold text-[#1B3A5F] transition-colors hover:bg-[#1B3A5F]/5"
                >
                  Message Captain JR
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday prices */}
      <section id="holiday" className="bg-[#1B3A5F] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-label uppercase tracking-widest text-white/60">Black Friday through Cyber Monday</p>
          <h2 className="mb-4 font-outfit text-3xl font-bold md:text-4xl">Last year&rsquo;s prices, November 27 to 30</h2>
          <p className="mb-10 max-w-2xl font-inter text-lg leading-relaxed text-white/85">
            For four days every private charter goes back to what it cost last year. Book a date with code HOLIDAY at
            checkout, or buy a gift certificate during the window at the same price.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {trips.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white/5 p-6">
                <p className="font-outfit text-xl font-semibold">{t.name}</p>
                <p className="mb-5 font-inter text-sm text-white/60">{t.hours}</p>
                <p className="font-outfit text-4xl font-bold">{t.holiday}</p>
                <p className="mt-1 font-inter text-sm text-white/60">regular {t.regular}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-inter text-sm text-white/60">
            Prices before Hawai&lsquo;i excise tax. The code works on bookings made Nov 27 through Nov 30, Hawai&lsquo;i time, for
            any available date.
          </p>
          <div className="mt-8">
            <Link
              href="/charters"
              className="inline-flex items-center justify-center rounded-button bg-red px-6 py-3 font-outfit font-semibold text-white transition-colors hover:bg-red-hover"
            >
              See the charters
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="mb-8 font-outfit text-3xl font-bold text-[#1B3A5F] md:text-4xl">How it works</h2>
          <div className="space-y-6 font-inter text-lg leading-relaxed text-gray-600">
            <p>
              <span className="font-semibold text-[#1B3A5F]">Buying.</span> Call or text (808) 867-FISH, or send a message
              from the contact page. Tell us which trip and who it is for, and we email you the certificate.
            </p>
            <p>
              <span className="font-semibold text-[#1B3A5F]">Redeeming.</span> The recipient calls or messages to choose a
              date. The certificate is good for any private charter.
            </p>
            <p>
              <span className="font-semibold text-[#1B3A5F]">Military.</span> Active duty and retired military get 20% off
              every private charter with ID at the dock.{' '}
              <Link href="/charters#military" className="font-bold text-[#1B3A5F] underline decoration-red-400 underline-offset-4">
                Military rate details
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
