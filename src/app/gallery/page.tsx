import { Metadata } from 'next';
import Link from 'next/link';
import HeroImage from '@/components/HeroImage';

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

type GalleryDoc = {
  _id: string;
  _type: 'dailyCatch' | 'galleryImage';
  caption?: string;
  date?: string;
  species?: string[];
  assetRef: string;
  imageUrl: string;
  largeUrl: string;
};

async function getGalleryImages(): Promise<GalleryDoc[]> {
  const docs: GalleryDoc[] = await client.fetch(`
    *[_type in ["dailyCatch", "galleryImage"]] | order(date desc) {
      _id,
      _type,
      caption,
      date,
      species,
      "assetRef": image.asset._ref,
      "imageUrl": image.asset->url + "?w=800&q=80&auto=format",
      "largeUrl": image.asset->url + "?w=1600&q=80&auto=format"
    }
  `);

  // Some photos exist as both a dailyCatch and a galleryImage (same asset).
  // Prefer the dailyCatch version (it carries species data), then drop any
  // remaining repeats of the same asset.
  const dailyCatchRefs = new Set(
    docs.filter((d) => d._type === 'dailyCatch').map((d) => d.assetRef)
  );
  const seen = new Set<string>();
  return docs.filter((d) => {
    if (d._type === 'galleryImage' && dailyCatchRefs.has(d.assetRef)) return false;
    if (seen.has(d.assetRef)) return false;
    seen.add(d.assetRef);
    return true;
  });
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <main className="min-h-screen bg-white"><InnerNavigation />
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] overflow-hidden">
        <HeroImage
          src="images/gallery-hero"
          mobileSrc="images/gallery-hero-mobile"
          alt="Gallery"
          objectPosition="top"
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