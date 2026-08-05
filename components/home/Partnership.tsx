export default function Partnership() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Sol tərəf */}
        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Global Partnership
          </p>

          <h2 className="mt-4 text-5xl font-bold leading-tight">
            Distribute Music
            <br />
            Worldwide
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help artists release music across all major streaming
            platforms while protecting their rights and maximizing revenue.
          </p>

          <button className="mt-10 rounded-lg bg-black px-7 py-3 font-medium text-white transition hover:bg-gray-800">
            Become a Partner
          </button>

        </div>

        {/* Sağ tərəf */}
        <div className="grid gap-6">

          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold">
              Music Distribution
            </h3>

            <p className="mt-3 text-gray-600">
              Release music on Spotify, Apple Music,
              YouTube Music, TikTok and 150+ platforms.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold">
              Royalty Collection
            </h3>

            <p className="mt-3 text-gray-600">
              Collect your royalties from digital platforms worldwide.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold">
              Copyright Protection
            </h3>

            <p className="mt-3 text-gray-600">
              Protect your music with YouTube Content ID and copyright tools.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}