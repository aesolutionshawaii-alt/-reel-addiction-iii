'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CloudinaryImage from '@/components/CloudinaryImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CarouselSlide = {
  image: string;
  heading: string;
  text: string;
  stats?: string;
};

type PremiumCarouselProps = {
  title: string;
  description: string;
  slides: CarouselSlide[];
};

export default function PremiumCarousel({ title, description, slides }: PremiumCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: false,
    skipSnaps: false,
    dragFree: false,
    duration: 15,
    containScroll: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-28 lg:py-32">
      {/* Header */}
      <div className="relative mx-auto mb-16 max-w-7xl px-6 lg:mb-20">
        <div className="text-center">
          <h2 className="mb-4 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mx-auto max-w-3xl font-inter text-lg text-gray-600 md:text-xl">
            {description}
          </p>
        </div>

        {/* Navigation Arrows - Porsche style, top right */}
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 gap-2 md:flex">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-gray-300 bg-white transition-all hover:border-[#1B3A5F] hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-gray-300 bg-white transition-all hover:border-[#1B3A5F] hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden px-4 md:px-[10%]" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-0 shrink-0 grow-0 basis-[95%] px-2 md:basis-[80%] md:px-4"
            >
              {/* Slide Content - Image left, Text right */}
              <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-20">
                {/* Image */}
                <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '4/3' }}>
                  <CloudinaryImage
                    src={slide.image}
                    alt={slide.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    priority={index === 0}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 font-outfit text-xl font-bold text-[#1B3A5F] md:text-2xl lg:text-3xl">
                    {slide.heading}
                  </h3>
                  <p className="mb-6 font-inter text-sm leading-relaxed text-gray-600 lg:text-base">
                    {slide.text}
                  </p>
                  {slide.stats && (
                    <div className="flex flex-wrap gap-4 font-inter text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {slide.stats.split(' | ').map((stat, statIndex) => (
                        <span key={statIndex} className="flex items-center gap-4">
                          {statIndex > 0 && <span className="text-gray-300">•</span>}
                          {stat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Arrows */}
      <div className="mt-10 flex justify-center gap-4 md:hidden">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white transition-all hover:border-[#1B3A5F] disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white transition-all hover:border-[#1B3A5F] disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="mt-12 flex justify-center gap-3 lg:mt-16">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-[#1B3A5F]'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}