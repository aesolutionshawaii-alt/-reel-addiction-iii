'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
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

  if (submitted) {
    return (
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
    );
  }

  return (
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
  );
}
