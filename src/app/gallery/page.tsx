import { Metadata } from 'next';
import Link from 'next/link';
import CloudinaryImage from '@/components/CloudinaryImage';
import Footer from '@/components/Footer';
import InnerNavigation from '@/components/InnerNavigation';
import GalleryContent from '@/components/GalleryContent';
import GalleryHeroContent from '@/components/GalleryHeroContent';
import { client } from '@/sanity/lib/client';
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Gallery | Reel Addiction III - Trophy Catches & Fishing Photos",
  description: "Browse trophy catches and unforgettable moments from Reel Addiction III fishing charters. Marlin, tuna, mahi mahi, and more from Oahu's best charter boat.",
};

async function getGalleryImages() {
  return await client.fetch(`
    *[_type == "galleryImage"] | order(date desc) {
      _id,
      caption,
      date,
      "imageUrl": image.asset->url + "?w=800&q=80&auto=format"
    }
  `);
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <main className="min-h-screen bg-white"><InnerNavigation />
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] overflow-hidden">
        <CloudinaryImage
          src="images/gallery-hero"
          alt="Trophy catches from Reel Addiction III"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        <GalleryHeroContent />
      </section>

      <GalleryContent images={images} />

      {/* CTA Section */}
      <section className="bg-[#1B3A5F] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-outfit text-4xl font-bold text-white md:text-5xl">
            Want Your Catch in Our Gallery?
          </h2>
          <p className="mb-10 font-inter text-xl text-white/80">
            Book your charter and create memories that last a lifetime.
          </p>
          <Link
            href="/charters"
            className="inline-block rounded-full bg-red-600 px-10 py-4 font-outfit text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-xl"
          >
            Book Your Charter
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}