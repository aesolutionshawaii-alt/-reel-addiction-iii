'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function InnerNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-white/70 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logo-white.png"
              alt="Reel Addiction III"
              width={180}
              height={48}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { href: '/about', label: 'About' },
              { href: '/catch', label: 'Fish' },
              { href: '/charters', label: 'Charters' },
              { href: '/vessel', label: 'Vessel' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-outfit text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                  scrolled
                    ? pathname === link.href
                      ? 'text-red-600'
                      : 'text-[#1B3A5F]/80 hover:text-[#1B3A5F]'
                    : pathname === link.href
                      ? 'text-red-400'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="https://fareharbor.com/embeds/book/reeladdictioniii/?full-items=yes"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-outfit text-[13px] font-semibold uppercase tracking-[0.1em] px-5 py-2.5 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu scrolled={scrolled} pathname={pathname} />
        </div>
      </nav>
    </header>
  );
}

function MobileMenu({ scrolled, pathname }: { scrolled: boolean; pathname: string | null }) {
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className={`relative z-50 p-2 transition-colors ${
          open ? 'text-white' : scrolled ? 'text-[#1B3A5F]' : 'text-white'
        }`}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          )}
        </svg>
      </button>

      {/* Fullscreen Overlay */}
      <div
        className={`fixed inset-0 bg-[#1B3A5F] transition-all duration-500 ease-out ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/fish', label: 'Fish' },
            { href: '/charters', label: 'Charters' },
            { href: '/vessel', label: 'Vessel' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/contact', label: 'Contact' },
          ].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-outfit text-2xl font-medium tracking-wide transition-all duration-300 ${
                pathname === link.href ? 'text-red-400' : 'text-white/80 hover:text-white'
              }`}
              style={{
                transitionDelay: open ? `${i * 50}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                opacity: open ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="https://fareharbor.com/embeds/book/reeladdictioniii/?full-items=yes"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 bg-red-600 text-white px-8 py-3 rounded-full font-outfit font-semibold tracking-wide hover:bg-red-700 transition-colors"
            style={{
              transitionDelay: open ? '300ms' : '0ms',
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              opacity: open ? 1 : 0,
            }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}