export default function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#5B3DF5] via-[#6D4EFF] to-[#7C5CFF] px-10 py-20 text-center text-white shadow-2xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            START TODAY
          </p>

          <h2 className="mt-6 text-4xl font-bold lg:text-6xl">
            Ready To Release
            <br />
            Your Music?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/90">
            Join Turan Media Group and distribute your music to more than
            150 streaming platforms while keeping full ownership of your work.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <button className="rounded-full bg-white px-8 py-4 font-semibold text-[#5B3DF5] transition hover:scale-105">
              Apply Now
            </button>

            <button className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#5B3DF5]">
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}