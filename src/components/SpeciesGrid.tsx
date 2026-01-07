'use client';

import { useState } from 'react';
import CloudinaryImage from '@/components/CloudinaryImage';

type Species = {
  name: string;
  season: string;
  image: string;
  description: string;
  techniques: string;
  size: string;
  hawaiiFact: string;
};

interface SpeciesGridProps {
  species: Species[];
}

export default function SpeciesGrid({ species }: SpeciesGridProps) {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);

  return (
    <>
      {/* Grid layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {species.map((speciesItem, index) => (
          <div
            key={index}
            onClick={() => setSelectedSpecies(speciesItem)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative h-96">
              <CloudinaryImage
                src={speciesItem.image}
                alt={speciesItem.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 70%)'
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="mb-2 font-outfit text-3xl font-bold transition-all duration-300 group-hover:text-red-400">
                  {speciesItem.name}
                </h3>
                <p className="font-inter text-sm font-semibold text-red-400 transition-all duration-300 group-hover:text-red-300">
                  {speciesItem.season}
                </p>

                <div className="mt-4 flex items-center gap-2 font-inter text-sm font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>Click to Learn More</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Species Modal */}
      {selectedSpecies && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedSpecies(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSpecies(null)}
              className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-red-600 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-96 w-full">
              <CloudinaryImage
                src={selectedSpecies.image}
                alt={selectedSpecies.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="mb-2 font-outfit text-5xl font-bold">{selectedSpecies.name}</h2>
                <p className="font-inter text-xl font-semibold text-red-400">{selectedSpecies.season}</p>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">About This Fish</h3>
                <p className="font-inter text-lg leading-relaxed text-gray-700">{selectedSpecies.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">Average Size</h3>
                <p className="font-inter text-lg leading-relaxed text-gray-700">{selectedSpecies.size}</p>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">How We Target Them</h3>
                <p className="font-inter text-lg leading-relaxed text-gray-700">{selectedSpecies.techniques}</p>
              </div>

              <div className="rounded-2xl bg-[#1B3A5F] p-8 text-white">
                <h3 className="mb-3 font-outfit text-2xl font-bold">Hawaii Connection</h3>
                <p className="font-inter text-lg leading-relaxed opacity-90">{selectedSpecies.hawaiiFact}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
