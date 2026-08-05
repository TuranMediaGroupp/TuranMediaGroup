export default function OAC() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            YouTube Services
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Official Artist Channel
            <br />
            & Content ID
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Build your official artist presence on YouTube, protect your
            music with Content ID and monetize user-generated content
            worldwide.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-gray-200 p-8 transition hover:shadow-lg">
            <h3 className="text-2xl font-semibold">
              Official Artist Channel
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Merge your YouTube channels into one verified Official Artist
              Channel with the music note badge.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 transition hover:shadow-lg">
            <h3 className="text-2xl font-semibold">
              YouTube Content ID
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Detect and monetize videos using your music across YouTube.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 transition hover:shadow-lg">
            <h3 className="text-2xl font-semibold">
              Rights Management
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Protect your catalog, manage copyrights and maximize your
              revenue from digital platforms.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}