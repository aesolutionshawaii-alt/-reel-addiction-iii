'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

type GalleryImage = {
  _id: string;
  caption?: string;
  date?: string;
  imageUrl: string;
};

export default function GalleryContent({ images }: { images: GalleryImage[] }) {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  if (!images || images.length === 0) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="font-inter text-lg text-gray-500">No gallery images yet. Check back soon!</p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Image Grid - Instagram Style */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-4xl px-1 md:px-4">
          <div className="grid grid-cols-3 gap-1 md:gap-2">
            {images.map((image) => (
              <button
                key={image._id}
                onClick={() => setLightboxImage(image)}
                className="group relative aspect-[4/5] overflow-hidden bg-gray-100 focus:outline-none"
              >
                <Image
                  src={image.imageUrl}
                  alt={image.caption || 'Gallery photo'}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                  sizes="(max-width: 768px) 33vw, 300px"
                />
              </button>
            ))}
          </div>
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
            className="absolute right-4 top-4 z-10 p-2 text-white/70 transition-colors hover:text-white"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="relative h-full max-h-[85vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.imageUrl}
              alt={lightboxImage.caption || 'Gallery photo'}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          {lightboxImage.caption && (
            <p className="absolute bottom-4 left-0 right-0 text-center font-inter text-sm text-white/80">
              {lightboxImage.caption}
            </p>
          )}
        </div>
      )}
    </>
  );
}