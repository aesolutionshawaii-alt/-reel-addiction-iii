'use client';

import Link from 'next/link';
import { Clock, Users, Shield, ChevronRight, Check } from 'lucide-react';
import Footer from '@/components/Footer';
import CloudinaryImage from '@/components/CloudinaryImage';

const charters = [
    {
        name: '3/4 Day Charter',
        tagline: 'The Sweet Spot',
        description: 'Perfect for visitors who want serious fishing without sacrificing evening plans. Fish the prime morning hours and be back by early afternoon.',
        duration: '5-6 Hours',
        price: '$2,495',
        maxAnglers: 6,
        image: 'charters/34-day/hero',
        href: '/charters/3-4-day',
        highlights: [
            'Best for vacationers',
            'Morning bite focus',
            'Back by 2pm',
            'Full tackle included',
        ],
        bestFor: 'Families & first-timers',
    },
    {
        name: 'Full Day Charter',
        tagline: 'Maximum Fishing Time',
        description: 'Extended hours on the water means more techniques, more locations, and more opportunities to land your trophy fish.',
        duration: '10-12 Hours',
        price: '$2,995',
        maxAnglers: 6,
        image: 'charters/full-day/hero',
        href: '/charters/full-day',
        highlights: [
            'All-day fishing',
            'Multiple techniques',
            'Farther offshore',
            'Morning & evening bites',
        ],
        bestFor: 'Serious anglers',
    },
    {
        name: 'Extravaganza',
        tagline: 'The Ultimate Trip',
        description: 'Dark to dark. 40+ miles offshore. Hawaii\'s only guaranteed charter. This is the trip where records are broken.',
        duration: 'Sunrise to Sunset',
        price: '$3,300',
        maxAnglers: 6,
        image: 'charters/extravaganza/hero',
        href: '/charters/extravaganza',
        highlights: [
            'Catch guarantee',
            '40+ miles offshore',
            'All techniques deployed',
            'Maximum trophy potential',
        ],
        bestFor: 'Trophy hunters',
        featured: true,
    },
];

export default function ChartersPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Back to Home */}
            <Link
                href="/"
                className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-700 shadow-lg backdrop-blur transition-colors hover:bg-white hover:text-red-600"
            >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Home</span>
            </Link>

            {/* ===== HERO SECTION ===== */}
            <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
                <CloudinaryImage
                    src="charters/charters-hero"
                    alt="Reel Addiction III offshore fishing"
                    fill
                    className="object-cover object-top md:object-[center_30%]"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                        Ko Olina, O'ahu
                    </p>
                    <h1 className="mb-6 font-outfit text-5xl font-bold text-white drop-shadow-lg md:text-6xl lg:text-7xl">
                        Choose Your Adventure
                    </h1>
                    <p className="max-w-2xl font-inter text-xl text-white/90 md:text-2xl">
                        Three ways to experience Hawaii's best sportfishing
                    </p>
                </div>
            </section>

            {/* ===== CHARTER CARDS ===== */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {charters.map((charter, index) => (
                            <Link
                                key={index}
                                href={charter.href}
                                className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${charter.featured ? 'ring-2 ring-red-500' : ''
                                    }`}
                            >
                                {/* Featured Badge */}
                                {charter.featured && (
                                    <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                                        <Shield className="h-3.5 w-3.5" />
                                        Guaranteed
                                    </div>
                                )}

                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <CloudinaryImage
                                        src={charter.image}
                                        alt={charter.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    {/* Price Badge */}
                                    <div className="absolute bottom-4 right-4 rounded-full bg-white px-4 py-2 font-outfit text-xl font-bold text-red-600 shadow-lg">
                                        {charter.price}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-6">
                                    <p className="mb-1 font-inter text-sm font-semibold uppercase tracking-wider text-red-500">
                                        {charter.tagline}
                                    </p>
                                    <h2 className="mb-3 font-outfit text-2xl font-bold text-[#1B3A5F]">
                                        {charter.name}
                                    </h2>
                                    <p className="mb-6 font-inter text-gray-600">
                                        {charter.description}
                                    </p>

                                    {/* Quick Specs */}
                                    <div className="mb-6 flex gap-6 border-y border-gray-100 py-4">
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-5 w-5 text-gray-400" />
                                            <span className="font-inter text-sm text-gray-700">{charter.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="h-5 w-5 text-gray-400" />
                                            <span className="font-inter text-sm text-gray-700">{charter.maxAnglers} Max</span>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div className="mb-6 space-y-2">
                                        {charter.highlights.map((highlight, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <Check className="h-4 w-4 text-green-500" />
                                                <span className="font-inter text-sm text-gray-700">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Best For Tag */}
                                    <div className="mt-auto">
                                        <span className="inline-block rounded-full bg-gray-100 px-4 py-1.5 font-inter text-xs font-semibold uppercase tracking-wide text-gray-600">
                                            Best for: {charter.bestFor}
                                        </span>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-6 flex items-center gap-2 font-outfit font-bold text-red-600 transition-colors group-hover:text-red-700">
                                        View Details
                                        <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== COMPARISON TABLE ===== */}
            <section className="bg-gray-50 py-20 md:py-28">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
                            Quick Comparison
                        </h2>
                        <p className="font-inter text-lg text-gray-600">
                            Not sure which trip is right for you? Here's the breakdown.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                        <div className="-mx-6 overflow-x-auto px-6">
                            <table className="w-full min-w-[600px]">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-[#1B3A5F] text-white">
                                        <th className="px-4 py-4 text-left font-outfit text-sm font-bold md:px-6 md:text-lg">Feature</th>
                                        <th className="px-4 py-4 text-center font-outfit text-sm font-bold md:px-6 md:text-lg">3/4 Day</th>
                                        <th className="px-4 py-4 text-center font-outfit text-sm font-bold md:px-6 md:text-lg">Full Day</th>
                                        <th className="px-4 py-4 text-center font-outfit text-sm font-bold md:px-6 md:text-lg">Extravaganza</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="px-4 py-4 font-inter text-sm font-medium text-gray-900 md:px-6">Duration</td>
                                        <td className="px-4 py-4 text-center font-inter text-sm text-gray-700 md:px-6">5-6 hours</td>
                                        <td className="px-4 py-4 text-center font-inter text-sm text-gray-700 md:px-6">10-12 hours</td>
                                        <td className="px-4 py-4 text-center font-inter text-sm text-gray-700 md:px-6">Dark to dark</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-4 font-inter text-sm font-medium text-gray-900 md:px-6">Price</td>
                                        <td className="px-4 py-4 text-center font-outfit text-sm font-bold text-gray-900 md:px-6">$2,495</td>
                                        <td className="px-4 py-4 text-center font-outfit text-sm font-bold text-gray-900 md:px-6">$2,995</td>
                                        <td className="px-4 py-4 text-center font-outfit text-sm font-bold text-gray-900 md:px-6">$3,300</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-4 font-inter text-sm font-medium text-gray-900 md:px-6">Offshore Range</td>
                                        <td className="px-4 py-4 text-center font-inter text-sm text-gray-700 md:px-6">15-25 mi</td>
                                        <td className="px-4 py-4 text-center font-inter text-sm text-gray-700 md:px-6">25-35 mi</td>
                                        <td className="px-4 py-4 text-center font-inter text-sm text-gray-700 md:px-6">40+ mi</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-4 font-inter text-sm font-medium text-gray-900 md:px-6">Guarantee</td>
                                        <td className="px-4 py-4 text-center font-inter text-gray-400 md:px-6">—</td>
                                        <td className="px-4 py-4 text-center font-inter text-gray-400 md:px-6">—</td>
                                        <td className="px-4 py-4 text-center md:px-6">
                                            <Check className="mx-auto h-5 w-5 text-green-500" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-4 font-inter text-sm font-medium text-gray-900 md:px-6">Best For</td>
                                        <td className="px-4 py-4 text-center font-inter text-sm text-gray-700 md:px-6">Visitors</td>
                                        <td className="px-4 py-4 text-center font-inter text-sm text-gray-700 md:px-6">Anglers</td>
                                        <td className="px-4 py-4 text-center font-inter text-sm text-gray-700 md:px-6">Trophy</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-4 font-inter text-sm font-medium text-gray-900 md:px-6">Return</td>
                                        <td className="px-4 py-4 text-center font-inter text-sm text-gray-700 md:px-6">~2pm</td>
                                        <td className="px-4 py-4 text-center font-inter text-sm text-gray-700 md:px-6">~6pm</td>
                                        <td className="px-4 py-4 text-center font-inter text-sm text-gray-700 md:px-6">Sunset</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== STILL NOT SURE CTA ===== */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
                        Still Not Sure?
                    </h2>
                    <p className="mb-8 font-inter text-lg text-gray-600">
                        Call Captain JR directly. He'll ask about your experience level, what you want to catch, and your schedule — then recommend the right trip for your group.
                    </p>
                    <a
                        href="tel:808-867-3474"
                        className="inline-flex items-center gap-3 rounded-full bg-[#1B3A5F] px-8 py-4 font-outfit text-lg font-bold text-white transition-all hover:bg-[#2a4a6f] hover:shadow-xl"
                    >
                        <span>(808) 867-FISH</span>
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}