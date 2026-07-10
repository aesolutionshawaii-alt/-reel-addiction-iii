'use client';

import { useEffect, useState } from 'react';
import FareHarborButton from '@/components/FareHarborButton';
import { FAREHARBOR_ITEMS } from '@/lib/fareharbor';

const PHONE = '+18088673474';
const PHONE_DISPLAY = '(808) 867-FISH';

export default function MessageCaptain() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Message Captain JR"
          className="fixed bottom-6 right-6 z-[90] inline-flex items-center gap-2.5 rounded-full bg-navy px-5 py-3.5 font-outfit text-sm font-semibold uppercase tracking-wide text-white shadow-[0_10px_30px_rgba(12,30,60,0.4)] transition-all hover:-translate-y-0.5 hover:bg-red max-sm:h-14 max-sm:w-14 max-sm:justify-center max-sm:p-0"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px] shrink-0">
            <path
              d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="max-sm:hidden">Message Captain JR</span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Message Captain JR"
          className="fixed bottom-6 right-6 z-[95] flex w-[360px] max-w-[calc(100vw-32px)] animate-[rise_0.22s_ease] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_24px_64px_rgba(12,30,60,0.45)]"
        >
          <div className="relative bg-navy px-5 pb-6 pt-5 text-white">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xl leading-none text-white transition-colors hover:bg-white/25"
            >
              ×
            </button>
            <div className="font-outfit text-2xl font-bold leading-none">
              Message Captain JR
            </div>
            <p className="mt-3 font-inter text-sm leading-relaxed text-white/85">
              {status === 'sent'
                ? 'Tight lines.'
                : "Captain JR is often out on the water. Leave a note and he'll get back to you as soon as he's back in range."}
            </p>
          </div>

          {status === 'sent' ? (
            <div className="px-6 pb-11 pt-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-2xl text-white">
                ✓
              </div>
              <div className="font-outfit text-2xl font-bold leading-none text-navy">
                Message sent
              </div>
              <p className="mt-3 font-inter text-[15px] leading-relaxed text-gray-600">
                Thanks, {form.name.split(' ')[0] || 'friend'}. Captain JR will reply to {form.email} shortly. For anything urgent, call or text {PHONE_DISPLAY}.
              </p>
            </div>
          ) : (
            <>
              <form className="p-4 pb-5" onSubmit={handleSubmit}>
                <div className="flex gap-2.5">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={update('name')}
                    required
                    className="mb-2.5 w-full flex-1 rounded-lg border border-gray-300 px-3.5 py-3 font-inter text-[15px] text-navy transition-colors focus:border-red focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={form.phone}
                    onChange={update('phone')}
                    className="mb-2.5 w-full flex-1 rounded-lg border border-gray-300 px-3.5 py-3 font-inter text-[15px] text-navy transition-colors focus:border-red focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={update('email')}
                  required
                  className="mb-2.5 w-full rounded-lg border border-gray-300 px-3.5 py-3 font-inter text-[15px] text-navy transition-colors focus:border-red focus:outline-none"
                />
                <textarea
                  placeholder="What can Captain JR help you with? Dates, group size, what you're hoping to catch..."
                  value={form.message}
                  onChange={update('message')}
                  required
                  className="mb-2.5 min-h-[84px] w-full resize-y rounded-lg border border-gray-300 px-3.5 py-3 font-inter text-[15px] text-navy transition-colors focus:border-red focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-1 w-full rounded-lg bg-red p-3.5 font-outfit text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-red-hover disabled:cursor-default disabled:opacity-55"
                >
                  {status === 'sending' ? 'Sending...' : 'Send to Captain JR'}
                </button>
                {status === 'error' && (
                  <p className="mt-2 text-center font-inter text-[13px] text-red">
                    Something went wrong. Please call {PHONE_DISPLAY} or try again.
                  </p>
                )}
              </form>

              <div className="border-t border-gray-200 px-4 pb-5 pt-4">
                <div className="mb-3 text-center font-inter text-[11px] uppercase tracking-[0.16em] text-gray-400">
                  Or reach us directly
                </div>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-3.5 py-3 font-outfit text-sm font-semibold text-navy transition-colors hover:border-red hover:bg-offwhite"
                  >
                    Call or text {PHONE_DISPLAY}
                  </a>
                  <FareHarborButton
                    itemId={FAREHARBOR_ITEMS.PRIVATE}
                    className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-3.5 py-3 font-outfit text-sm font-semibold text-navy transition-colors hover:border-red hover:bg-offwhite"
                  >
                    Book a charter
                  </FareHarborButton>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
