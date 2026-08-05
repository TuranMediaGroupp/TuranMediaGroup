"use client";

import { useState } from "react";

const faq = [
  {
    question: "How long does music distribution take?",
    answer:
      "Most releases are delivered to streaming platforms within 1–5 business days depending on the platform.",
  },
  {
    question: "Do I keep 100% of my rights?",
    answer:
      "Yes. You always keep ownership of your music and copyrights.",
  },
  {
    question: "Can I get an Official Artist Channel?",
    answer:
      "Yes. We help eligible artists obtain a YouTube Official Artist Channel.",
  },
  {
    question: "Do you offer Content ID?",
    answer:
      "Yes. We protect your music across YouTube and help monetize user-generated content.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-[#EEF2FF] px-5 py-2 text-sm font-semibold text-[#5B3DF5]">
            FAQ
          </span>

          <h2 className="mt-8 text-5xl font-bold text-[#111827]">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-16 space-y-5">

          {faq.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <h3 className="text-xl font-semibold">
                  {item.question}
                </h3>

                <span className="text-3xl text-[#5B3DF5]">
                  {open === index ? "−" : "+"}
                </span>

              </button>

              {open === index && (
                <div className="px-8 pb-8 text-gray-600 leading-8">
                  {item.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}