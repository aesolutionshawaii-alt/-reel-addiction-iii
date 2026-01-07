'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/catch', label: 'Fish' },
  { href: '/charters', label: 'Charters' },
  { href: '/vessel', label: 'Vessel' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const MOBILE_NAV_LINKS = [
  { href: '/', label: 'Home' },
  ...NAV_LINKS,
];

export default function InnerNavigation({ disablePrefetch = false }: { disablePrefetch?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
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
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={disablePrefetch ? false : undefined}
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

              {/* Desktop CTA */}
              <Link
                href="https://fareharbor.com/embeds/book/reeladdictioniii/?full-items=yes"
                prefetch={disablePrefetch ? false : undefined}
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

            {/* Mobile Hamburger Button - only shows when menu is closed */}
            {!menuOpen && (
              <button
                onClick={() => setMenuOpen(true)}
                className={`md:hidden p-2 transition-colors ${
                  scrolled ? 'text-[#1B3A5F]' : 'text-white'
                }`}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - rendered via portal */}
      <MobileMenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
        disablePrefetch={disablePrefetch}
      />
    </>
  );
}

interface MobileMenuOverlayProps {
  open: boolean;
  onClose: () => void;
  pathname: string | null;
  disablePrefetch: boolean;
}

function MobileMenuOverlay({ open, onClose, pathname, disablePrefetch }: MobileMenuOverlayProps) {
  const [mounted, setMounted] = useState(false);
  const previousOpen = useRef(open);

  // Track mounted state for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle body scroll lock and video pause/resume
  useEffect(() => {
    // Only dispatch events when open state actually changes (not on mount)
    if (previousOpen.current !== open) {
      if (open) {
        document.body.style.overflow = 'hidden';
        window.dispatchEvent(new CustomEvent('pauseAllVideos'));
      } else {
        document.body.style.overflow = '';
        window.dispatchEvent(new CustomEvent('resumeAllVideos'));
      }
      previousOpen.current = open;
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Don't render anything on server or before mount
  if (!mounted) return null;

  const overlay = (
    <div
      className={`fixed inset-0 bg-[#1B3A5F] transition-all duration-500 ease-out ${
        open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      style={{ zIndex: 55 }}
      aria-hidden={!open}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white transition-colors hover:text-white/70"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col items-center justify-center h-full gap-8">
        {MOBILE_NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            prefetch={disablePrefetch ? false : undefined}
            onClick={onClose}
            className={`font-outfit text-2xl font-medium tracking-wide transition-all duration-300 ${
              pathname === link.href ? 'text-red-400' : 'text-white/80 hover:text-white'
            }`}
            style={{
              transitionDelay: open ? `${i * 50}ms` : '0ms',
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              opacity: open ? 1 : 0,
            }}
            tabIndex={open ? 0 : -1}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="https://fareharbor.com/embeds/book/reeladdictioniii/?full-items=yes"
          prefetch={disablePrefetch ? false : undefined}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-4 bg-red-600 text-white px-8 py-3 rounded-full font-outfit font-semibold tracking-wide hover:bg-red-700 transition-colors"
          style={{
            transitionDelay: open ? '350ms' : '0ms',
            transform: open ? 'translateY(0)' : 'translateY(20px)',
            opacity: open ? 1 : 0,
          }}
          tabIndex={open ? 0 : -1}
        >
          Book Now
        </Link>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}