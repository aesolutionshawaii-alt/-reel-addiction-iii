// lib/charters.ts
import fs from 'fs';
import path from 'path';

export interface Charter {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  duration: string;
  departureTime: string;
  returnTime: string;
  price: number;
  maxAnglers: number;
  images: {
    hero: string;
    action: string;
    gallery: string[];
  };
  whatToExpect: {
    heading: string;
    paragraphs: string[];
  };
  testimonial?: {
    quote: string;
    author: string;
    location?: string;
  };
  targetSpecies: Array<{
    name: string;
    season: string;
    description: string;
    image: string;
  }>;
  included: string[];
  toBring: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  fareharborLink: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const chartersDirectory = path.join(process.cwd(), 'data/charters');

/**
 * Get all charter slugs
 */
export function getAllCharterSlugs(): string[] {
  const filenames = fs.readdirSync(chartersDirectory);
  return filenames.map(filename => filename.replace('.json', ''));
}

/**
 * Get data for a specific charter
 */
export function getCharterData(slug: string): Charter {
  const filePath = path.join(chartersDirectory, `${slug}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

/**
 * Get all charters data
 */
export function getAllCharters(): Charter[] {
  const slugs = getAllCharterSlugs();
  return slugs.map(slug => getCharterData(slug));
}

/**
 * Get charters sorted by price
 */
export function getChartersByPrice(): Charter[] {
  const charters = getAllCharters();
  return charters.sort((a, b) => a.price - b.price);
}
