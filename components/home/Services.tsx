const services = [
  {
    title: "Music Distribution",
    description:
      "Release your music to Spotify, Apple Music, TikTok, YouTube Music and 150+ digital platforms.",
    number: "01",
  },
  {
    title: "Official Artist Channel",
    description:
      "Verify your YouTube channel and receive your Official Artist Channel.",
    number: "02",
  },
  {
    title: "YouTube Content ID",
    description:
      "Protect your music and earn revenue whenever your content is used.",
    number: "03",
  },
  {
    title: "Music Publishing",
    description:
      "Collect publishing royalties and protect your copyrights worldwide.",
    number: "04",
  },
  {
    title: "Playlist Promotion",
    description:
      "Grow your audience through editorial playlists and digital marketing.",
    number: "05",
  },
  {
    title: "Artist Management",
    description:
      "Professional support from release planning to long-term artist growth.",
    number: "06",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8F9FD] py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-[#EEF2FF] px-5 py-2 text-sm font-semibold text-[#5B3DF5]">
            OUR SERVICES
          </span>

          <h2 className="mt-8 text-5xl font-bold text-[#111827]">
            Everything Artists Need
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Professional solutions for music distribution,
            copyright protection and worldwide artist development.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-[32px] border border-gray-200 bg-white p-10 transition duration-300 hover:-translate-y-3 hover:border-[#5B3DF5] hover:shadow-2xl"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF2FF] text-2xl font-bold text-[#5B3DF5] transition group-hover:bg-[#5B3DF5] group-hover:text-white">
                  {service.number}
                </div>

                <span className="text-3xl text-gray-300 transition group-hover:translate-x-2 group-hover:text-[#5B3DF5]">
                  →
                </span>

              </div>

              <h3 className="mt-10 text-2xl font-bold text-[#111827]">
                {service.title}
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                {service.description}
              </p>

              <button className="mt-10 font-semibold text-[#5B3DF5]">
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}