import { Metadata } from 'next';
import Link from 'next/link';
import CloudinaryImage from '@/components/CloudinaryImage';
import Footer from '@/components/Footer';
import { Phone, MapPin, Clock } from 'lucide-react';
import InnerNavigation from '@/components/InnerNavigation';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact Us | Reel Addiction III - Book Your Charter",
  description: "Contact Captain JR to book your Hawaiian fishing charter. Call (808) 867-FISH or send us a message. Departing from Ko Olina Marina, Oahu.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white"><InnerNavigation />
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <CloudinaryImage
          src="contact/hero"
          alt="Ko Olina Marina at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            Get In Touch
          </p>
          <h1 className="mb-6 font-outfit text-5xl font-bold text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            Contact Us
          </h1>
          <p className="max-w-2xl font-inter text-xl text-white/90 md:text-2xl">
            Questions? Ready to book? We're here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 font-outfit text-3xl font-bold text-[#1B3A5F]">
                  Let's Talk Fishing
                </h2>
                <p className="font-inter text-lg text-gray-600">
                  Ready to book your fishing adventure? Have questions about our charters?
                  Give us a call or send a message - we'd love to hear from you.
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-100">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-bold text-[#1B3A5F]">Phone</h3>
                  <a
                    href="tel:+18088673474"
                    className="font-outfit text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
                  >
                    (808) 867-FISH
                  </a>
                  <p className="font-inter text-sm text-gray-500 mt-1">
                    Call or text anytime
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-100">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-bold text-[#1B3A5F]">Location</h3>
                  <p className="font-inter text-gray-700">Ko Olina Marina, Slip F7</p>
                  <p className="font-inter text-gray-600">92-100 Waipahe Place</p>
                  <p className="font-inter text-gray-600">Kapolei, HI 96707</p>
                  <a
                    href="https://maps.google.com/?q=Ko+Olina+Marina+Kapolei+Hawaii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-inter text-sm font-semibold text-red-600 hover:text-red-700 mt-2 transition-colors"
                  >
                    Get Directions
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-100">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-outfit text-lg font-bold text-[#1B3A5F]">Charter Times</h3>
                  <p className="font-inter text-gray-700">Morning departures around 6:00 AM</p>
                  <p className="font-inter text-gray-600 text-sm mt-1">
                    Exact time confirmed night before based on conditions
                  </p>
                  <p className="font-inter text-gray-600 text-sm">
                    Available 7 days a week, weather permitting
                  </p>
                </div>
              </div>

              {/* Quick Book Card */}
              <div className="rounded-2xl bg-[#1B3A5F] p-8">
                <h3 className="mb-2 font-outfit text-xl font-bold text-white">
                  Ready to Book?
                </h3>
                <p className="mb-6 font-inter text-white/80">
                  Book directly online through FareHarbor for instant confirmation
                </p>
                <Link
                  href="https://fareharbor.com/embeds/book/reeladdictioniii/?full-items=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-red-600 px-8 py-3 font-outfit font-bold text-white transition-colors hover:bg-red-700"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-center font-outfit text-3xl font-bold text-[#1B3A5F]">
            Find Us at Ko Olina Marina
          </h2>
          <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.5!2d-158.128!3d21.329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006f7e7a8a4e5d%3A0x3a7e8f8a8a8a8a8a!2sKo%20Olina%20Marina!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ko Olina Marina Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
