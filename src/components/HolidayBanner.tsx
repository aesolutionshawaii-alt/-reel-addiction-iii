'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

// Black Friday through Cyber Monday 2026. Times are Hawaii Standard Time (UTC-10).
const SHOW_FROM = Date.parse('2026-11-18T00:00:00-10:00');
const WINDOW_START = Date.parse('2026-11-27T00:00:00-10:00');
const WINDOW_END = Date.parse('2026-11-30T23:59:59-10:00');
const STORAGE_KEY = 'ra-holiday-banner-2026';

export default function HolidayBanner() {
  const [state, setState] = useState<'hidden' | 'teaser' | 'live'>('hidden');

  useEffect(() => {
    const now = Date.now();
    if (now < SHOW_FROM || now > WINDOW_END) return;
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === 'dismissed') return;
    } catch {
      // private mode or blocked storage: still show the banner
    }
    setState(now >= WINDOW_START ? 'live' : 'teaser');
  }, []);

  if (state === 'hidden') return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'dismissed');
    } catch {
      // ignore
    }
    setState('hidden');
  };

  return (
    <div className="relative bg-[#c41e3a] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-10 py-2.5 text-center font-inter text-[13px] leading-snug md:text-sm">
        {state === 'teaser' ? (
          <p>
            <span className="font-semibold">Black Friday to Cyber Monday:</span> every private charter at last year&rsquo;s
            prices, Nov 27 to 30.{' '}
            <Link href="/gift-cards" className="underline underline-offset-4 decoration-white/70 hover:decoration-white">
              Details and gift certificates
            </Link>
          </p>
        ) : (
          <p>
            <span className="font-semibold">Last year&rsquo;s prices through Monday, Nov 30.</span> Use code HOLIDAY at
            checkout.{' '}
            <Link href="/charters" className="underline underline-offset-4 decoration-white/70 hover:decoration-white">
              Book a charter
            </Link>
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
