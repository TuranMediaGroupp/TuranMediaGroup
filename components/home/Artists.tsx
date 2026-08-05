"use client";

export default function Artists() {
  const artists = [
    { name: "Kərimbəy Kərimov", externalUrl: "https://open.spotify.com/artist/0t1ZeNakprZWcGTggNP1Kl" },
    { name: "Emil Bayramov", externalUrl: "https://open.spotify.com/artist/3tkBtX28HTUsk9YVHRtq7y" },
    { name: "Ali Mamedov", externalUrl: "https://open.spotify.com/artist/2lfVSrQNpSLcPzzg5yOdui" },
    { name: "BigSavage", externalUrl: "https://open.spotify.com/artist/75xJzo86MPeerRbrfl4vQA" },
    { name: "Kradol", externalUrl: "https://open.spotify.com/artist/0v4WkcnwLruPja3MhfGXx1" },
    { name: "Ramin Guseinov", externalUrl: "https://open.spotify.com/artist/26raOxSupKv4hdxiPGUfaF" },
    { name: "Mehdi Mammadov", externalUrl: "https://open.spotify.com/artist/5HsoWPdV3zWwAd2zlJdLEz" },
    { name: "Zombio", externalUrl: "https://open.spotify.com/artist/77iMopoVcb4UZSDkotOshR" },
    { name: "Rawin", externalUrl: "https://open.spotify.com/artist/3tGXy5lrlFx0ehLZsa5bAI" },
  ];

  return (
    <section id="artists" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <span className="rounded-full bg-[#EEF2FF] px-5 py-2 text-sm font-semibold text-[#5B3DF5]">
            OUR ARTISTS
          </span>

          <h2 className="mt-8 text-5xl font-bold text-[#111827]">
            Artists We Work With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We help independent artists grow their audience,
            protect their music and build long-term careers.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Möhtəşəm Qradiyent və Artist İkonası */}
              <div className="relative flex h-[360px] w-full flex-col items-center justify-center bg-gradient-to-br from-[#5B3DF5] via-[#7C3AED] to-[#9333EA] p-6 text-white">
                <div className="absolute inset-0 bg-black/10"></div>
                
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-4xl font-bold shadow-lg backdrop-blur-md">
                  {artist.name.charAt(0)}
                </div>

                <h3 className="relative z-10 mt-6 text-3xl font-bold tracking-tight text-center truncate max-w-[320px]">
                  {artist.name}
                </h3>
              </div>

              {/* Detallar */}
              <div className="p-8">
                <p className="text-lg font-semibold text-[#5B3DF5]">
                  Turan Media Group Artist
                </p>

                <p className="mt-3 text-gray-600">Spotify Verified Profile</p>

                <a
                  href={artist.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full rounded-full bg-[#5B3DF5] py-4 text-center font-semibold text-white transition hover:bg-[#6D4EFF]"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}