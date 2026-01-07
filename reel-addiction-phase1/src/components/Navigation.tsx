'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { species } from '@/data/species';
import { ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    href: '/fish',
    label: 'Fish',
    children: species.map((s) => ({
      href: `/fish/${s.slug}`,
      label: s.hawaiianName,
      sublabel: s.name,
    })),
  },
  { href: '/charters', label: 'Charters' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [fishDropdownOpen, setFishDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Don't show nav on studio pages
  const isStudioPage = pathname?.startsWith('/studio');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setFishDropdownOpen(false);
  }, [pathname]);

  // Don't render on studio pages
  if (isStudioPage) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1B3A5F]/95 backdrop-blur-sm shadow-lg py-2'
          : 'bg-gradient-to-b from-black/50 to-transparent py-4'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-white.png"
              alt="Reel Addiction III"
              width={160}
              height={64}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className={`flex items-center gap-1 font-outfit text-sm font-semibold uppercase tracking-wider transition-colors ${
                        pathname?.startsWith('/fish')
                          ? 'text-red-400'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-[#1B3A5F] border border-white/10 rounded-xl shadow-2xl py-2 min-w-[220px]">
                        <Link
                          href="/fish"
                          className="block px-4 py-3 font-outfit text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          All Species
                        </Link>
                        <div className="h-px bg-white/10 mx-4 my-1" />
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 hover:bg-white/10 transition-colors"
                          >
                            <span className="font-outfit text-sm font-semibold text-white">
                              {child.label}
                            </span>
                            <span className="font-inter text-xs text-white/50 ml-2">
                              {child.sublabel}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-outfit text-sm font-semibold uppercase tracking-wider transition-colors ${
                      pathname === item.href
                        ? 'text-red-400'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="https://fareharbor.com/embeds/book/reeladdictioniii/?full-items=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-outfit text-sm font-bold uppercase tracking-wider transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
            <div className="pt-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setFishDropdownOpen(!fishDropdownOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 font-outfit text-base font-semibold text-white/90"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            fishDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {fishDropdownOpen && (
                        <div className="bg-white/5 rounded-lg mx-4 mb-2 overflow-hidden">
                          <Link
                            href="/fish"
                            className="block px-4 py-3 font-outfit text-sm text-white/80 border-b border-white/10"
                          >
                            All Species
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-3 font-outfit text-sm text-white/70"
                            >
                              {child.label}
                              <span className="text-white/40 ml-2 font-inter">
                                {child.sublabel}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 font-outfit text-base font-semibold ${
                        pathname === item.href ? 'text-red-400' : 'text-white/90'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-4 pt-4">
                <Link
                  href="https://fareharbor.com/embeds/book/reeladdictioniii/?full-items=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-600 text-white text-center px-6 py-3 rounded-full font-outfit font-bold uppercase tracking-wider"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
