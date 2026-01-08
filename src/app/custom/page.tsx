import { Metadata } from 'next';
import CloudinaryImage from '@/components/CloudinaryImage';
import Link from 'next/link';
import { Heart, Briefcase, Compass, Users, Anchor, Phone, Star, Gift } from 'lucide-react';
import Footer from '@/components/Footer';
import InnerNavigation from '@/components/InnerNavigation';
import CustomHeroContent from '@/components/CustomHeroContent';

export const metadata: Metadata = {
  title: "Custom Charters | Reel Addiction III - Private Events & Memorials",
  description: "Custom charter experiences on Oahu's finest vessel. Memorial services, corporate events, celebrations, and inter-island overnighters. Contact Captain JR.",
};

const customCharters = [
  {
    icon: Heart,
    title: 'Memorial Services',
    subtitle: 'Ash Scatterings at Sea',
    description: 'Honor your loved one with a dignified ocean memorial. We provide a peaceful, private setting for families to scatter ashes in Hawaii\'s beautiful waters. Captain JR and crew handle every detail with the respect and care your family deserves.',
    features: ['Private charter for your family', 'Flowers and lei available', 'Flexible timing and location', 'Calm, protected waters'],
    image: 'images/custom/custom-memorial',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    subtitle: 'Team Building & Client Entertainment',
    description: 'Impress clients or reward your team with a day on the water. Nothing builds relationships like shared adventure. Our 62\' yacht comfortably hosts groups for fishing, cruising, or a combination of both.',
    features: ['Up to 6 guests plus crew', 'Fishing or cruising options', 'Catering can be arranged', 'Perfect for team building'],
    image: 'images/custom/custom-corporate',
    aspectRatio: '4/5',
  },
  {
    icon: Compass,
    title: 'Inter-Island Overnighters',
    subtitle: 'Multi-Day Adventures',
    description: 'Take the ultimate Hawaiian fishing adventure with an overnight trip to neighboring islands or remote fishing grounds. Three staterooms and full amenities make extended trips comfortable.',
    features: ['3 private staterooms', '3 full bathrooms', 'Extended range capability', 'Custom itineraries'],
    image: 'images/custom/custom-overnight',
  },
  {
    icon: Users,
    title: 'Special Celebrations',
    subtitle: 'Birthdays, Anniversaries & More',
    description: 'Celebrate life\'s milestones on the water. Whether it\'s a birthday, anniversary, bachelor party, or just a special day with friends and family, we\'ll make it memorable.',
    features: ['Customized experiences', 'Sunset cruises available', 'Fishing or leisure', 'Photo opportunities'],
    image: 'images/custom/custom-celebration',
  },
  {
    icon: Anchor,
    title: 'Boat Escorts',
    subtitle: 'Event & Vessel Support',
    description: 'Need escort services for a special event, race, or vessel transport? Reel Addiction III is fast, capable, and professionally crewed for any marine support needs.',
    features: ['Fast response capability', 'Professional crew', 'Communication equipped', 'Flexible scheduling'],
    image: 'images/custom/custom-escort',
  },
  {
    icon: Gift,
    title: 'Charity & Fundraisers',
    subtitle: 'Supporting Local Causes',
    description: 'We regularly donate trips to local charities and fundraisers. If you\'re organizing a benefit auction or community event, reach out about a donated charter package.',
    features: ['Auction packages available', 'Local causes supported', 'Flexible trip options', 'Great auction item'],
    image: 'images/custom/custom-charity',
  },

];

export default function CustomChartersPage() {
  return (
    <main className="min-h-screen bg-white"><InnerNavigation />


      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <CloudinaryImage
          src="images/custom/custom-hero"
          alt="Reel Addiction III at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        <CustomHeroContent />
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-outfit text-3xl font-bold text-[#1B3A5F] md:text-4xl">
            More Than a Fishing Boat
          </h2>
          <p className="font-inter text-lg leading-relaxed text-gray-600">
            While fishing is our passion, Reel Addiction III is equipped for much more. Our 62' yacht with three staterooms, three bathrooms, air conditioning, and professional crew makes us the perfect choice for any occasion on the water — from the most solemn to the most celebratory.
          </p>
        </div>
      </section>

      {/* ===== CHARTER TYPES ===== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-20">
            {customCharters.map((charter, index) => (
              <div
                key={index}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? 'lg:direction-rtl' : ''
                  }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-2xl shadow-xl ${!charter.aspectRatio ? 'h-[350px] md:h-[450px]' : ''
                    } ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  style={charter.aspectRatio ? { aspectRatio: charter.aspectRatio } : undefined}
                >
                  <CloudinaryImage
                    src={charter.image}
                    alt={charter.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                      <charter.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-outfit text-sm font-semibold uppercase tracking-wider text-red-500">
                        {charter.subtitle}
                      </p>
                    </div>
                  </div>

                  <h3 className="mb-4 font-outfit text-3xl font-bold text-[#1B3A5F] md:text-4xl">
                    {charter.title}
                  </h3>

                  <p className="mb-6 font-inter text-lg leading-relaxed text-gray-600">
                    {charter.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-3">
                    {charter.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Star className="h-4 w-4 shrink-0 text-red-500" />
                        <span className="font-inter text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GIVING BACK ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-[#1B3A5F] p-10 text-center md:p-16">
            <Gift className="mx-auto mb-6 h-12 w-12 text-red-400" />
            <h2 className="mb-6 font-outfit text-3xl font-bold text-white md:text-4xl">
              Supporting Our Community
            </h2>
            <p className="mb-8 font-inter text-lg leading-relaxed text-white/80">
              We believe in giving back to the community that supports us. Throughout the year, we donate charter trips to local charities, school fundraisers, and community organizations. If you're organizing a benefit event and think a fishing charter would make a great auction item, we'd love to hear from you.
            </p>
            <p className="font-inter text-white/60">
              Past beneficiaries include local schools, youth sports programs, conservation organizations, and community nonprofits.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PRICING NOTE ===== */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 font-outfit text-2xl font-bold text-[#1B3A5F] md:text-3xl">
            Custom Pricing
          </h2>
          <p className="mb-8 font-inter text-lg text-gray-600">
            Every custom charter is unique. Pricing depends on duration, destination, services needed, and your specific requirements. Contact us directly to discuss your event and receive a personalized quote.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
            Let's Plan Your Charter
          </h2>
          <p className="mb-10 font-inter text-xl text-gray-600">
            Call Captain JR directly to discuss your custom charter needs
          </p>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a
              href="tel:808-867-3474"
              className="flex items-center gap-3 rounded-full bg-[#1B3A5F] px-8 py-4 font-outfit text-lg font-bold text-white transition-all hover:bg-[#2a4a6f] hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              (808) 867-FISH
            </a>
            <Link
              href="/charters"
              className="rounded-full border-2 border-[#1B3A5F] px-8 py-4 font-outfit text-lg font-bold text-[#1B3A5F] transition-all hover:bg-[#1B3A5F] hover:text-white"
            >
              View Fishing Charters
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}