const stats = [
  {
    value: "20M+",
    title: "Total Streams",
  },
  {
    value: "15M+",
    title: "TikTok Streams",
  },
  {
    value: "1M+",
    title: "YouTube UGC",
  },
  {
    value: "600K+",
    title: "Spotify Streams",
  },
];

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="bg-[#F8F9FD] py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-[#EEF2FF] px-5 py-2 text-sm font-semibold text-[#5B3DF5]">
            OUR NUMBERS
          </span>

          <h2 className="mt-8 text-5xl font-bold text-[#111827]">
            Trusted By Artists
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We help artists grow faster with global distribution,
            monetization and professional support.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] bg-white p-10 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <h3 className="text-6xl font-bold text-[#5B3DF5]">
                {item.value}
              </h3>

              <p className="mt-5 text-lg text-gray-600">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}