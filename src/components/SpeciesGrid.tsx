import Link from 'next/link';
import CloudinaryImage from '@/components/CloudinaryImage';

type Species = {
  slug?: string;
  name: string;
  season: string;
  image: string;
};

interface SpeciesGridProps {
  species: Species[];
}

export default function SpeciesGrid({ species }: SpeciesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {species.map((speciesItem, index) => {
        const CardContent = (
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

              {speciesItem.slug && (
                <div className="mt-4 flex items-center gap-2 font-inter text-sm font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>Learn More</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        );

        if (speciesItem.slug) {
          return (
            <Link
              key={speciesItem.slug}
              href={`/fish/${speciesItem.slug}`}
              className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {CardContent}
            </Link>
          );
        }

        return (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl shadow-xl"
          >
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}
