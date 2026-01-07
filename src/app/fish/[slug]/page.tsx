import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { species, getSpeciesBySlug } from '@/data/species';
import CloudinaryImage from '@/components/CloudinaryImage';
import Footer from '@/components/Footer';
import { Calendar, Ruler, Target } from 'lucide-react';
import InnerNavigation from '@/components/InnerNavigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return species.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const fish = getSpeciesBySlug(slug);

  if (!fish) {
    return {
      title: 'Species Not Found | Reel Addiction III',
    };
  }

  return {
    title: `${fish.hawaiianName} (${fish.name}) | Reel Addiction III - Hawaii Fishing`,
    description: `Target ${fish.name} on your Hawaiian fishing charter. ${fish.description.slice(0, 150)}...`,
  };
}

export default async function FishSpeciesPage({ params }: PageProps) {
  const { slug } = await params;
  const fish = getSpeciesBySlug(slug);

  if (!fish) {
    notFound();
  }

  // Get other species for navigation
  const otherSpecies = species.filter((s) => s.slug !== slug);

  return (
    <main className="min-h-screen bg-white">
      <InnerNavigation />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <CloudinaryImage
          src={fish.image}
          alt={`${fish.name} caught aboard Reel Addiction III`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 text-center">
          <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            {fish.season}
          </p>
          <h1 className="mb-2 font-outfit text-5xl font-bold text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            {fish.hawaiianName}
          </h1>
          <p className="font-inter text-2xl text-white/90 md:text-3xl">
            {fish.name}
          </p>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            <div className="py-6 text-center">
              <Calendar className="mx-auto mb-2 h-6 w-6 text-red-600" />
              <p className="font-outfit text-xs font-semibold uppercase tracking-wider text-gray-500">
                Best Season
              </p>
              <p className="font-inter font-semibold text-[#1B3A5F]">{fish.season}</p>
            </div>
            <div className="py-6 text-center">
              <Ruler className="mx-auto mb-2 h-6 w-6 text-red-600" />
              <p className="font-outfit text-xs font-semibold uppercase tracking-wider text-gray-500">
                Average Size
              </p>
              <p className="font-inter font-semibold text-[#1B3A5F]">{fish.size}</p>
            </div>
            <div className="py-6 text-center">
              <Target className="mx-auto mb-2 h-6 w-6 text-red-600" />
              <p className="font-outfit text-xs font-semibold uppercase tracking-wider text-gray-500">
                Technique
              </p>
              <p className="font-inter font-semibold text-[#1B3A5F]">Trolling & Live Bait</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-12">
            {/* About */}
            <div>
              <h2 className="mb-6 font-outfit text-3xl font-bold text-[#1B3A5F]">
                About {fish.hawaiianName}
              </h2>
              <p className="font-inter text-lg leading-relaxed text-gray-700">
                {fish.description}
              </p>
            </div>

            {/* How We Target Them */}
            <div>
              <h2 className="mb-6 font-outfit text-3xl font-bold text-[#1B3A5F]">
                How We Target Them
              </h2>
              <p className="font-inter text-lg leading-relaxed text-gray-700">
                {fish.techniques}
              </p>
            </div>

            {/* Hawaii Connection */}
            <div className="rounded-2xl bg-[#1B3A5F] p-8 md:p-12">
              <h2 className="mb-6 font-outfit text-3xl font-bold text-white">
                Hawaii Connection
              </h2>
              <p className="font-inter text-lg leading-relaxed text-white/90">
                {fish.hawaiiFact}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F]">
            Ready to Catch {fish.hawaiianName}?
          </h2>
          <p className="mb-10 font-inter text-xl text-gray-600">
            Book your charter and target Hawaii's most prized game fish.
          </p>
          <Link
            href="/charters"
            className="inline-block rounded-full bg-red-600 px-10 py-4 font-outfit text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-xl"
          >
            View Charters
          </Link>
        </div>
      </section>

      {/* Other Species Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center font-outfit text-3xl font-bold text-[#1B3A5F]">
            Other Species We Target
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {otherSpecies.map((s) => (
              <Link
                key={s.slug}
                href={`/fish/${s.slug}`}
                className="group rounded-2xl border-2 border-gray-200 bg-white p-4 transition-all hover:border-red-400 hover:shadow-lg"
              >
                <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl">
                  <CloudinaryImage
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <p className="font-outfit font-bold text-[#1B3A5F] group-hover:text-red-600 transition-colors">
                  {s.hawaiianName}
                </p>
                <p className="font-inter text-sm text-gray-500">{s.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
