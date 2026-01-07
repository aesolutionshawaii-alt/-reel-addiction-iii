'use client';

import { useState } from 'react';
import Link from 'next/link';
import CloudinaryImage from '@/components/CloudinaryImage';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';
import InnerNavigation from '@/components/InnerNavigation';
// Gallery images - update these paths with actual Cloudinary images
const galleryImages = [
  { src: 'gallery/catch-1', alt: 'Blue marlin catch', category: 'marlin' },
  { src: 'gallery/catch-2', alt: 'Yellowfin tuna catch', category: 'tuna' },
  { src: 'gallery/catch-3', alt: 'Mahi mahi catch', category: 'mahi' },
  { src: 'gallery/catch-4', alt: 'Family fishing trip', category: 'people' },
  { src: 'gallery/catch-5', alt: 'Ono wahoo catch', category: 'wahoo' },
  { src: 'gallery/catch-6', alt: 'Sunset fishing', category: 'scenery' },
  { src: 'gallery/catch-7', alt: 'Striped marlin jump', category: 'marlin' },
  { src: 'gallery/catch-8', alt: 'Group charter', category: 'people' },
  { src: 'gallery/catch-9', alt: 'Big ahi', category: 'tuna' },
  { src: 'gallery/catch-10', alt: 'Boat at sea', category: 'scenery' },
  { src: 'gallery/catch-11', alt: 'Double mahi hookup', category: 'mahi' },
  { src: 'gallery/catch-12', alt: 'Captain with trophy', category: 'people' },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'marlin', label: 'Marlin' },
  { id: 'tuna', label: 'Tuna' },
  { id: 'mahi', label: 'Mahi Mahi' },
  { id: 'wahoo', label: 'Wahoo' },
  { id: 'people', label: 'Guests' },
  { id: 'scenery', label: 'Scenery' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<(typeof galleryImages)[0] | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-white"><InnerNavigation />
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <CloudinaryImage
          src="gallery/hero"
          alt="Trophy catches from Reel Addiction III"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            Our Catches
          </p>
          <h1 className="mb-6 font-outfit text-5xl font-bold text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            Gallery
          </h1>
          <p className="max-w-2xl font-inter text-xl text-white/90 md:text-2xl">
            Trophy catches and unforgettable moments
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap rounded-full px-5 py-2 font-outfit text-sm font-semibold transition-colors ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredImages.map((image, index) => (
              <button
                key={image.src}
                onClick={() => setLightboxImage(image)}
                className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <CloudinaryImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                    <svg className="h-6 w-6 text-[#1B3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="py-16 text-center">
              <p className="font-inter text-lg text-gray-500">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

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

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute right-4 top-4 p-2 text-white/70 transition-colors hover:text-white"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="relative h-full max-h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <CloudinaryImage
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <p className="absolute bottom-4 left-0 right-0 text-center font-inter text-white/70">
            {lightboxImage.alt}
          </p>
        </div>
      )}

      <Footer />
    </main>
  );
}
