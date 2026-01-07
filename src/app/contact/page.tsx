'use client';

import { useState } from 'react';
import Link from 'next/link';
import CloudinaryImage from '@/components/CloudinaryImage';
import Footer from '@/components/Footer';
import { Phone, MapPin, Clock, Send } from 'lucide-react';
import InnerNavigation from '@/components/InnerNavigation';
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    charterType: '',
    partySize: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with form handler (Formspree, custom API, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-outfit text-2xl font-bold text-[#1B3A5F]">
                    Message Sent!
                  </h3>
                  <p className="mb-6 font-inter text-gray-600">
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        preferredDate: '',
                        charterType: '',
                        partySize: '',
                        message: '',
                      });
                    }}
                    className="font-outfit font-semibold text-red-600 hover:text-red-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="mb-6 font-outfit text-2xl font-bold text-[#1B3A5F]">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block font-inter text-sm font-semibold text-gray-700">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 font-inter text-gray-900 placeholder-gray-400 transition-colors focus:border-red-500 focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block font-inter text-sm font-semibold text-gray-700">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 font-inter text-gray-900 placeholder-gray-400 transition-colors focus:border-red-500 focus:outline-none"
                          placeholder="(555) 555-5555"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block font-inter text-sm font-semibold text-gray-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 font-inter text-gray-900 placeholder-gray-400 transition-colors focus:border-red-500 focus:outline-none"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="charterType" className="mb-2 block font-inter text-sm font-semibold text-gray-700">
                          Charter Type
                        </label>
                        <select
                          id="charterType"
                          name="charterType"
                          value={formData.charterType}
                          onChange={handleChange}
                          className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 font-inter text-gray-900 transition-colors focus:border-red-500 focus:outline-none"
                        >
                          <option value="">Select charter...</option>
                          <option value="3-4-day">3/4 Day (6 hours)</option>
                          <option value="full-day">Full Day (8-10 hours)</option>
                          <option value="extravaganza">Extravaganza (10-12 hours)</option>
                          <option value="custom">Custom Charter</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="partySize" className="mb-2 block font-inter text-sm font-semibold text-gray-700">
                          Party Size
                        </label>
                        <select
                          id="partySize"
                          name="partySize"
                          value={formData.partySize}
                          onChange={handleChange}
                          className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 font-inter text-gray-900 transition-colors focus:border-red-500 focus:outline-none"
                        >
                          <option value="">Select size...</option>
                          <option value="1-2">1-2 guests</option>
                          <option value="3-4">3-4 guests</option>
                          <option value="5-6">5-6 guests</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="mb-2 block font-inter text-sm font-semibold text-gray-700">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-3 font-inter text-gray-900 transition-colors focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block font-inter text-sm font-semibold text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-lg border-2 border-gray-200 bg-white px-4 py-3 font-inter text-gray-900 placeholder-gray-400 transition-colors focus:border-red-500 focus:outline-none"
                        placeholder="Tell us about your trip - special occasions, experience level, fish you want to target..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-red-600 py-4 font-outfit font-bold text-white transition-colors hover:bg-red-700 disabled:bg-red-400"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
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
