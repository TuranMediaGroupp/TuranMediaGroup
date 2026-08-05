
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-white to-[#EEF2FF]">
      <div className="mx-auto grid min-h-[820px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#5B3DF5] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#5B3DF5]" />
            Professional Music Distribution
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-[1.05] text-[#111827] lg:text-7xl">
            Release Your
            <br />
            Music
            <br />
            Worldwide.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600 lg:text-xl">
            Turan Media Group helps independent artists distribute,
            protect and monetize their music across Spotify,
            Apple Music, TikTok, YouTube Music and more than
            150 streaming platforms worldwide.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#5B3DF5] px-8 py-4 font-semibold text-white shadow-lg shadow-[#5B3DF5]/25 transition hover:scale-[1.02] hover:bg-[#6D4EFF]">
              Apply Now
            </button>

            <button className="rounded-full border border-[#D1D5DB] bg-white px-8 py-4 font-semibold text-[#111827] transition hover:border-[#5B3DF5] hover:text-[#5B3DF5]">
              Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "20M+", label: "Streams" },
              { value: "15M+", label: "TikTok" },
              { value: "1M+", label: "YouTube UGC" },
              { value: "10+", label: "Artists" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm"
              >
                <div className="text-3xl font-bold text-[#111827]">
                  {item.value}
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glow */}
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-[#5B3DF5]/10 blur-3xl" />

          <div className="overflow-hidden rounded-[36px] border border-white/60 bg-white shadow-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Turan Media Group"
              width={800}
              height={900}
              priority
              className="h-[720px] w-full object-cover"
            />
          </div>

          {/* Floating card */}
          <motion.div
            className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-white/60 bg-white/95 p-6 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5B3DF5]">
                  Turan Media Group
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#111827]">
                  Global Distribution
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF2FF] text-[#5B3DF5]">
                🎵
              </div>
            </div>

            <p className="mt-4 leading-7 text-gray-600">
              Deliver your music to the world's biggest streaming services
              while keeping full control over your rights.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Spotify", "Apple Music", "YouTube", "TikTok"].map(
                (platform) => (
                  <span
                    key={platform}
                    className="rounded-full bg-[#F3F4F6] px-3 py-2 text-sm font-medium text-[#111827]"
                  >
                    {platform}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
