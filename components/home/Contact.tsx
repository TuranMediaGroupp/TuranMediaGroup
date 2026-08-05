"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    artist_name: "",
    music_link: "",
    message: "",
  });

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.full_name || !form.email || !form.artist_name) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      let fileUrl = "";

      if (file) {
        const fileExt = file.name.split(".").pop();
        const safeName = crypto.randomUUID();
        const fileName = `${safeName}.${fileExt}`;

        const { data: uploadData, error: uploadError } =
          await supabase.storage
            .from("demo-files")
            .upload(fileName, file);

        console.log("UPLOAD:", uploadData);
        console.log("UPLOAD ERROR:", uploadError);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from("demo-files")
          .getPublicUrl(fileName);

        fileUrl = data.publicUrl;
      }

      const { error } = await supabase
        .from("demo_submissions")
        .insert([
          {
            full_name: form.full_name,
            email: form.email,
            artist_name: form.artist_name,
            music_link: form.music_link,
            message: form.message,
            demo_file: fileUrl,
          },
        ]);

      if (error) throw error;

      // Avtomatik e-poçt göndərmə sorğusu
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          artist_name: form.artist_name,
        }),
      });

      alert("Demo submitted successfully!");

      setForm({
        full_name: "",
        email: "",
        artist_name: "",
        music_link: "",
        message: "",
      });

      setFile(null);

    } catch (err: any) {
      console.log(err);

      if (err?.message) {
        alert(err.message);
      } else {
        alert(JSON.stringify(err));
      }
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-[#F8F9FD] py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-20 px-8 lg:grid-cols-2">

        {/* LEFT */}
        <div>
          <span className="rounded-full bg-[#EEF2FF] px-5 py-2 text-sm font-semibold text-[#5B3DF5]">
            CONTACT US
          </span>

          <h2 className="mt-8 text-5xl font-bold text-[#111827]">
            Let's Work
            <br />
            Together.
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Ready to release your music worldwide?
            Contact our team and start your journey with
            Turan Media Group today.
          </p>

          <div className="mt-16 space-y-8">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-lg font-bold">Email</h3>
              <p className="mt-3 text-gray-600">
                info@turanmediagroup.com
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-lg font-bold">Instagram</h3>
              <p className="mt-3 text-gray-600">
                @turanmediagroup
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-lg font-bold">Location</h3>
              <p className="mt-3 text-gray-600">
                Baku, Azerbaijan
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-[36px] bg-white p-10 shadow-2xl">
          <h3 className="text-3xl font-bold text-[#111827]">
            Send Your Demo
          </h3>

          <p className="mt-3 text-gray-600">
            Fill out the form and our team will contact you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            <input
              type="text"
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#5B3DF5]"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#5B3DF5]"
            />

            <input
              type="text"
              name="artist_name"
              value={form.artist_name}
              onChange={handleChange}
              placeholder="Artist Name"
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#5B3DF5]"
            />

            <input
              type="url"
              name="music_link"
              value={form.music_link}
              onChange={handleChange}
              placeholder="Spotify / YouTube / SoundCloud Link (Optional)"
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#5B3DF5]"
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Upload Demo (MP3 / WAV)
              </label>

              <input
                type="file"
                accept=".mp3,.wav"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setFile(e.target.files[0]);
                  }
                }}
                className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 file:mr-4 file:rounded-full file:border-0 file:bg-[#5B3DF5] file:px-5 file:py-2 file:font-semibold file:text-white"
              />
            </div>

            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your release..."
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#5B3DF5]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#5B3DF5] py-4 font-semibold text-white transition hover:bg-[#6D4EFF] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Demo"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}