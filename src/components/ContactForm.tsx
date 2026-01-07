export default function ContactForm() {
  return (
    <div>
      <h3 className="mb-2 font-outfit text-2xl font-bold text-[#1B3A5F]">
        Stay in the Loop
      </h3>
      <p className="mb-6 font-inter text-gray-600">
        Get updates on fishing conditions, special offers, and tips from Captain JR.
      </p>

      <form
        action="https://reeladdictioniii.us6.list-manage.com/subscribe/post?u=03e2df496f8f40d6304a77b9e&id=bc7ce04690&f_id=00341ce2f0"
        method="post"
        target="_blank"
        className="space-y-4"
      >
        <div>
          <label htmlFor="mce-EMAIL" className="mb-2 block font-inter text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
            placeholder="you@example.com"
            className="w-full border-2 border-gray-200 bg-white px-4 py-3 font-inter text-gray-900 placeholder-gray-400 transition-colors focus:border-[#1B3A5F] focus:outline-none"
          />
        </div>

        {/* GDPR checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="gdpr_95949"
            name="gdpr[95949]"
            value="Y"
            defaultChecked
            className="mt-1 h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
          />
          <label htmlFor="gdpr_95949" className="font-inter text-sm text-gray-600">
            I'd like to receive email updates about charters, ocean conditions, and special offers.
          </label>
        </div>

        {/* Honeypot - catches bots */}
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input
            type="text"
            name="b_03e2df496f8f40d6304a77b9e_bc7ce04690"
            tabIndex={-1}
            defaultValue=""
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 px-6 py-3 font-outfit font-bold text-white transition-colors hover:bg-red-700"
        >
          Subscribe
        </button>

        <p className="font-inter text-xs text-gray-500">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}