'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CloudinaryImage from '@/components/CloudinaryImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type InteriorSlide = {
  image: string;
  heading: string;
  text: string;
};

type InteriorCarouselProps = {
  title: string;
  description: string;
  slides: InteriorSlide[];
};

export default function InteriorCarousel({ title, description, slides }: InteriorCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
    dragFree: false,
    duration: 18,
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
    <section className="bg-white py-20 lg:py-28">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-7xl px-6 lg:mb-16">
        <div className="text-center">
          <h2 className="mb-4 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mx-auto max-w-3xl font-inter text-lg text-gray-600 md:text-xl">
            {description}
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div className="overflow-hidden px-4 md:px-[8%]" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-0 shrink-0 grow-0 basis-[85%] px-2 md:basis-[58%] md:px-4"
              >
                {/* Slide - image with caption overlaid lower-left */}
                <div
                  className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-xl shadow-2xl"
                  style={{ aspectRatio: '16/10' }}
                >
                  <CloudinaryImage
                    src={slide.image}
                    alt={slide.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 92vw, 80vw"
                    priority={index === 0}
                  />
                  {/* Bottom gradient for legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                  {/* Caption - lower left, small */}
                  <div className="absolute bottom-0 left-0 max-w-md p-5 md:p-7">
                    <h3 className="mb-1 font-outfit text-base font-bold text-white md:text-lg">
                      {slide.heading}
                    </h3>
                    <p className="font-inter text-xs leading-relaxed text-white/85 md:text-sm">
                      {slide.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Buttons - overlaid, always visible */}
        <button
          onClick={scrollPrev}
          className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white md:left-[4%] md:h-12 md:w-12"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-[#1B3A5F]" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white md:right-[4%] md:h-12 md:w-12"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-[#1B3A5F]" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="mt-10 flex justify-center gap-3">
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
