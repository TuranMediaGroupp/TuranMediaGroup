import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
<Reveal>
  <section id="about" className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

        {/* LEFT */}

        <div className="relative">

          <div className="overflow-hidden rounded-[34px] shadow-2xl">

            <Image
              src="/images/about.jpg"
              alt="About Turan Media Group"
              width={700}
              height={850}
              className="h-[720px] w-full object-cover"
            />

          </div>

          <div className="absolute -bottom-8 -right-8 rounded-3xl bg-white p-8 shadow-2xl">

            <h3 className="text-5xl font-bold text-[#5B3DF5]">
              20M+
            </h3>

            <p className="mt-2 text-gray-600">
              Total Streams
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <span className="rounded-full bg-[#EEF2FF] px-5 py-2 text-sm font-semibold text-[#5B3DF5]">
            ABOUT US
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-[#111827]">
            Helping Artists
            <br />
            Build Global
            <br />
            Careers.
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Turan Media Group provides professional music distribution,
            YouTube Official Artist Channel, Content ID,
            publishing administration and promotional services for
            independent artists around the world.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            Our goal is simple:
            help every artist release music professionally,
            protect copyrights,
            collect royalties and reach millions of listeners.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8">

            <div className="rounded-3xl border border-gray-200 p-7">

              <h3 className="text-4xl font-bold text-[#5B3DF5]">
                150+
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Digital Platforms
              </p>

            </div>

            <div className="rounded-3xl border border-gray-200 p-7">

              <h3 className="text-4xl font-bold text-[#5B3DF5]">
                10+
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Professional Artists
              </p>

            </div>

          </div>

          <button className="mt-12 rounded-full bg-[#5B3DF5] px-8 py-4 font-semibold text-white transition hover:bg-[#6D4EFF]">
            Learn More
          </button>

        </div>

      </div>
    </section>
</Reveal>
  );
}