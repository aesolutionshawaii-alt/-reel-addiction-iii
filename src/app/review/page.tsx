'use client'

import QRCode from 'react-qr-code'

type Platform = {
  name: string
  url: string
}

const platforms: Platform[] = [
  {
    name: 'FishingBooker',
    url: 'https://fishingbooker.com/reviews/edit/1247101?token=401sRZFiIdbOBYh',
  },
  {
    name: 'TripAdvisor',
    url: 'https://www.tripadvisor.com/UserReviewEdit-g11900445-d26852561',
  },
  {
    name: 'Google',
    url: 'https://g.page/r/CeoUKUR8cX3lEAE/review',
  },
]

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-navy text-offwhite">
      <div className="max-w-md mx-auto px-6 py-12">
        <div className="text-label uppercase tracking-widest text-offwhite/60 mb-6 text-center">
          Reel Addiction III
        </div>

        <h1 className="font-outfit text-4xl font-light leading-tight text-center mb-3">
          Mahalo for fishing with us
        </h1>

        <p className="text-offwhite/75 text-center mb-10 leading-relaxed">
          Scan or tap to leave a quick review. Your words help us more than anything.
        </p>

        <div className="space-y-4">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="bg-offwhite text-navy rounded-card p-6 shadow-card"
            >
              <div className="font-outfit text-xl font-semibold mb-5 text-center">
                {p.name}
              </div>

              <div className="flex justify-center mb-5 bg-white p-3 rounded-lg">
                <QRCode
                  value={p.url}
                  size={180}
                  level="M"
                  bgColor="#ffffff"
                  fgColor="#0c1e3c"
                />
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-medium py-3 rounded-button bg-navy text-offwhite hover:bg-navy-light transition-colors"
              >
                Open on this device
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-offwhite/60 leading-relaxed">
          <div className="text-offwhite/80 font-medium mb-1">Tight lines,</div>
          <div>Captain JR &amp; the crew</div>
          <div className="mt-1">Reel Addiction III · Ko Olina Marina</div>
        </div>
      </div>
    </main>
  )
}
