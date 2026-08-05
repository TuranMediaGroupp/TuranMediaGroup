export default function Trusted() {
  const companies = [
    "Spotify",
    "Apple Music",
    "YouTube",
    "TikTok",
    "Instagram",
    "Amazon Music",
  ];

  return (
    <section className="border-y border-gray-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
          Trusted Distribution Partners
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">

          {companies.map((item) => (
            <div
              key={item}
              className="flex h-24 items-center justify-center rounded-2xl border border-gray-200 bg-[#FAFAFA] font-semibold text-gray-600 transition hover:border-[#5B3DF5] hover:text-[#5B3DF5]"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}