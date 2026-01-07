import { Metadata } from 'next';
import Link from 'next/link';
import CloudinaryImage from '@/components/CloudinaryImage';
import Footer from '@/components/Footer';
import InnerNavigation from '@/components/InnerNavigation';
import AboutHeroContent from '@/components/AboutHeroContent';
export const metadata: Metadata = {
  title: "About Us | Reel Addiction III - O'ahu Deep Sea Fishing",
  description: "Meet Captain JR and the crew of Reel Addiction III. Premium deep sea fishing charters from Ko Olina Marina, Oahu. Generations of Hawaii fishing experience.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white"><InnerNavigation />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <CloudinaryImage
          src="images/About/about-hero-crew-v3"
          alt="Captain JR and crew aboard Reel Addiction III"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        <AboutHeroContent />
      </section>

      {/* Captain Bio Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <CloudinaryImage
                src="about/captain-jr"
                alt="Captain JR"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-2 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                  Your Captain
                </p>
                <h2 className="font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
                  Captain JR
                </h2>
              </div>

              <div className="space-y-4 font-inter text-lg leading-relaxed text-gray-700">
                <p>
                  Born and raised in Hawaii, Captain JR has been fishing these waters 
                  his entire life. What started as a passion inherited from his father 
                  has become a lifelong dedication to sharing the thrill of Hawaiian 
                  sportfishing with visitors from around the world.
                </p>
                <p>
                  With thousands of successful charters under his belt, Captain JR knows 
                  exactly where the fish are and how to put you on them. His intimate 
                  knowledge of Oahu's coastline, currents, and seasonal patterns gives 
                  Reel Addiction III guests the best possible chance at landing the fish 
                  of a lifetime.
                </p>
                <p>
                  More than just a fishing captain, JR is a storyteller, a teacher, and 
                  an ambassador for Hawaii's maritime heritage. Every trip is an opportunity 
                  to share the traditions, techniques, and aloha spirit that make Hawaiian 
                  fishing truly special.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              Our Philosophy
            </h2>
            <p className="font-inter text-xl text-gray-600">
              Every charter is personal. Whether you're a seasoned angler or 
              first-time fisherman, we tailor the experience to you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Family First',
                description: "Family-owned and operated. We treat every guest like ohana and every trip like it's our own family's adventure.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Safety Always',
                description: "USCG certified, fully insured, and equipped with the latest safety gear. Your wellbeing is our top priority.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Respect the Ocean',
                description: "Sustainable practices, catch-and-release when appropriate, and a deep respect for Hawaii's marine ecosystem.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-lg text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                  {item.icon}
                </div>
                <h3 className="mb-4 font-outfit text-xl font-bold text-[#1B3A5F]">
                  {item.title}
                </h3>
                <p className="font-inter leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vessel Teaser */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="font-outfit text-4xl font-bold text-[#1B3A5F]">
                The Vessel
              </h2>
              <p className="font-inter text-lg leading-relaxed text-gray-700">
                Reel Addiction III is a custom-built sportfishing vessel designed 
                specifically for Hawaii's offshore waters. Equipped with top-of-the-line 
                tackle, electronics, and amenities, she's ready to chase everything from 
                mahi-mahi to marlin.
              </p>
              <p className="font-inter text-lg leading-relaxed text-gray-700">
                With SeaKeeper stabilization for smooth rides even in rough seas, 
                you'll fish in comfort all day long.
              </p>
              <Link
                href="/vessel"
                className="inline-flex items-center gap-2 font-outfit text-lg font-semibold text-red-600 hover:text-red-700 transition-colors"
              >
                View Full Vessel Specs
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <CloudinaryImage
                src="vessel/exterior"
                alt="Reel Addiction III sportfishing boat"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1B3A5F] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-outfit text-4xl font-bold text-white md:text-5xl">
            Ready to Fish With Us?
          </h2>
          <p className="mb-10 font-inter text-xl text-white/80">
            Join Captain JR and crew for the fishing adventure of a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/charters"
              className="inline-block rounded-full bg-red-600 px-10 py-4 font-outfit text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-xl"
            >
              View Charters
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-full border-2 border-white px-10 py-4 font-outfit text-lg font-bold text-white transition-all hover:bg-white hover:text-[#1B3A5F]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
