"use client";

import { useState } from "react";

export default function FeaturedReleases() {
  const [showAll, setShowAll] = useState(false);

  // Göndərdiyin Spotify track linklərinə əsasən yenilənmiş siyahı
  const releases = [
    {
      title: "Track 1",
      artist: "Kərimbəy Kərimov",
      externalUrl: "https://open.spotify.com/track/0F8sZ7aSO70hU3JbvMEIH2",
    },
    {
      title: "Track 2",
      artist: "Emil Bayramov",
      externalUrl: "https://open.spotify.com/track/6H2SFBXgFF9pIFZfNBMkBY",
    },
    {
      title: "Track 3",
      artist: "Ali Mamedov",
      externalUrl: "https://open.spotify.com/track/1a6JrNZvG7wdXzZ7N9ikZL",
    },
    {
      title: "Track 4",
      artist: "BigSavage",
      externalUrl: "https://open.spotify.com/track/7qNKYgxnzVw5TaK3BSAM49",
    },
    {
      title: "Track 5",
      artist: "Kradol",
      externalUrl: "https://open.spotify.com/track/5ogsiQwq30wWTaQTgCXKnW",
    },
    {
      title: "Track 6",
      artist: "Ramin Guseinov",
      externalUrl: "https://open.spotify.com/track/4xWsZ3RBd2e6z9SydYPKEg",
    },
    {
      title: "Track 7",
      artist: "Mehdi Mammadov",
      externalUrl: "https://open.spotify.com/track/7rgBdDeCJFO5Z56AUYzk9a",
    },
  ];

  // Əvvəlcə ilk 3 mahnı görünür, düyməyə basıldıqda hamısı açılır
  const displayedReleases = showAll ? releases : releases.slice(0, 3);

  return (
    <section id="releases" className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <span className="rounded-full bg-[#EEF2FF] px-5 py-2 text-sm font-semibold text-[#5B3DF5]">
            LATEST RELEASES
          </span>

          <h2 className="mt-8 text-5xl font-bold text-[#111827]">
            Featured Music Releases
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Explore the latest hits distributed and managed by Turan Media Group.
          </p>
        </div>

        {/* Mahnı kartları */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {displayedReleases.map((release, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative flex h-[240px] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#5B3DF5] to-[#8B5CF6] text-white shadow-md">
                <div className="text-center p-4">
                  <span className="text-5xl">🎵</span>
                  <h3 className="mt-4 text-2xl font-bold truncate max-w-[280px]">
                    {release.artist}
                  </h3>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-[#5B3DF5]">
                  Turan Media Group
                </p>
                <h4 className="mt-1 text-xl font-bold text-gray-900">
                  {release.artist} - New Release
                </h4>

                <a
                  href={release.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-full bg-[#5B3DF5] py-3 text-center font-semibold text-white transition hover:bg-[#6D4EFF]"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bütün mahnıları göstər / Daha az göstər düyməsi */}
        {releases.length > 3 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-full bg-[#111827] px-8 py-4 font-semibold text-white transition hover:bg-[#374151]"
            >
              {showAll ? "Daha az göstər" : "Bütün mahnıları göstər"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}