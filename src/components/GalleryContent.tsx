'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

type GalleryImage = {
  _id: string;
  caption?: string;
  date?: string;
  species?: string[];
  imageUrl: string;
  largeUrl?: string;
};

function formatDate(date?: string) {
  if (!date) return null;
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function SpeciesPills({ species, small = false }: { species?: string[]; small?: boolean }) {
  if (!species || species.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {species.map((s) => (
        <span
          key={s}
          className={`rounded-full bg-white/20 font-outfit uppercase tracking-wider text-white backdrop-blur-sm ${
            small ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'
          }`}
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}
        >
          {s.replace(/-/g, ' ')}
        </span>
      ))}
    </div>
  );
}

export default function GalleryContent({ images }: { images: GalleryImage[] }) {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [largeLoaded, setLargeLoaded] = useState(false);

  const openLightbox = (image: GalleryImage) => {
    setLargeLoaded(false);
    setLightboxImage(image);
  };

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
        <div className="mx-auto max-w-[1600px] px-1 md:px-[39px]">
          <div className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-2 lg:grid-cols-4">
            {images.map((image) => (
              <button
                key={image._id}
                onClick={() => openLightbox(image)}
                className="group relative aspect-[4/5] overflow-hidden bg-gray-100 focus:outline-none"
              >
                <Image
                  src={image.imageUrl}
                  alt={image.caption || 'Gallery photo'}
                  fill
                  className="object-cover transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                />

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-start gap-1.5 p-3 text-left opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-100">
                  {image.caption && (
                    <p
                      className="line-clamp-2 font-outfit text-sm leading-snug text-white"
                      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}
                    >
                      {image.caption}
                    </p>
                  )}
                  <SpeciesPills species={image.species} small />
                  {image.date && (
                    <p
                      className="font-outfit text-[10px] uppercase tracking-widest text-white/70"
                      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}
                    >
                      {formatDate(image.date)}
                    </p>
                  )}
                </div>
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
            className="relative h-full max-h-[80vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grid thumbnail is already cached — show it instantly while the large version loads */}
            <Image
              src={lightboxImage.imageUrl}
              alt={lightboxImage.caption || 'Gallery photo'}
              fill
              className="object-contain"
              sizes="100vw"
            />
            {lightboxImage.largeUrl && (
              <Image
                key={lightboxImage._id}
                src={lightboxImage.largeUrl}
                alt={lightboxImage.caption || 'Gallery photo'}
                fill
                className={`object-contain transition-opacity duration-300 ${
                  largeLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                sizes="100vw"
                onLoad={() => setLargeLoaded(true)}
              />
            )}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-2 px-6 text-center">
            {lightboxImage.caption && (
              <p className="font-inter text-sm text-white/90">{lightboxImage.caption}</p>
            )}
            <SpeciesPills species={lightboxImage.species} small />
            {lightboxImage.date && (
              <p className="font-outfit text-[10px] uppercase tracking-widest text-white/50">
                {formatDate(lightboxImage.date)}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
