import {
  Music2,
  Disc3,
  Play,
  Radio,
  Podcast,
  Headphones,
} from "lucide-react";

const platforms = [
  { name: "Spotify", icon: Music2 },
  { name: "Apple Music", icon: Disc3 },
  { name: "YouTube Music", icon: Play },
  { name: "TikTok", icon: Radio },
  { name: "Deezer", icon: Headphones },
  { name: "Amazon Music", icon: Podcast },
];

export default function Platforms() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5B3DF5]">
            DISTRIBUTION PARTNERS
          </p>

          <h2 className="mt-6 text-4xl font-bold text-[#111827]">
            Deliver Everywhere
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Release your music to the world's biggest streaming services
            from one dashboard.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <div
                key={platform.name}
                className="group flex items-center gap-5 rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#5B3DF5] hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF2FF] transition group-hover:bg-[#5B3DF5]">
                  <Icon
                    size={30}
                    className="text-[#5B3DF5] group-hover:text-white"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#111827]">
                    {platform.name}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Available
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}