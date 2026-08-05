export default function Demo() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Sol tərəf */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Send Your Demo
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Ready To
            <br />
            Work With Us?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Send your music demo to Turan Media Group. Our team will
            review your submission and contact you if your project
            matches our services.
          </p>

          <div className="mt-10 space-y-4">

            <div className="rounded-xl bg-white p-5 shadow-sm">
              🎵 Music Distribution
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              ▶ YouTube Official Artist Channel
            </div>

            <div className="rounded-xl bg-white p-5 shadow-sm">
              © Content ID & Rights Management
            </div>

          </div>
        </div>

        {/* Sağ tərəf */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <input
              type="text"
              placeholder="Artist Name"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-black"
            />

            <button
              className="w-full rounded-xl bg-black py-4 font-medium text-white transition hover:bg-gray-800"
            >
              Send Demo
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}