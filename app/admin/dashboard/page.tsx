"use client";
export const dynamic = 'force-dynamic'
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Demo = {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  artist_name: string;
  music_link: string;
  message: string;
  demo_file: string;
};

export default function Dashboard() {
  const [demos, setDemos] = useState<Demo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDemos();
  }, []);

  async function fetchDemos() {
    const { data, error } = await supabase
      .from("demo_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (data) {
      setDemos(data);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#F6F8FC]">
      <div className="flex">
        <aside className="w-72 min-h-screen bg-[#111827] p-8 text-white">
          <h1 className="text-3xl font-bold">Turan</h1>
          <p className="mb-12 text-gray-400">Media Group</p>

          <nav className="space-y-3">
            <div className="rounded-xl bg-[#5B3DF5] px-5 py-4 font-semibold">
              Dashboard
            </div>
            <div className="rounded-xl px-5 py-4 hover:bg-gray-800 transition">
              Demo Requests
            </div>
            <div className="rounded-xl px-5 py-4 hover:bg-gray-800 transition">
              Artists
            </div>
            <div className="rounded-xl px-5 py-4 hover:bg-gray-800 transition">
              Releases
            </div>
            <div className="rounded-xl px-5 py-4 hover:bg-gray-800 transition">
              Settings
            </div>
          </nav>
        </aside>

        <section className="flex-1 p-12">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="mt-3 text-gray-500">Welcome back, Turan 👋</p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-gray-500">Demo Requests</p>
              <h2 className="mt-3 text-5xl font-bold">{demos.length}</h2>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-gray-500">Artists</p>
              <h2 className="mt-3 text-5xl font-bold">10</h2>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-gray-500">Releases</p>
              <h2 className="mt-3 text-5xl font-bold">0</h2>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-gray-500">Total Streams</p>
              <h2 className="mt-3 text-5xl font-bold">20M+</h2>
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold">Recent Demo Requests</h2>

            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="py-4 font-semibold">Artist</th>
                  <th className="font-semibold">Email</th>
                  <th className="font-semibold">Music</th>
                  <th className="font-semibold">Message</th>
                  <th className="font-semibold">Demo File</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="py-10 text-center text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : demos.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-10 text-center text-gray-500">
                      No demo submissions yet.
                    </td>
                  </tr>
                ) : (
                  demos.map((demo) => (
                    <tr key={demo.id} className="border-b hover:bg-gray-50">
                      <td className="py-5 font-medium text-gray-900">
                        {demo.artist_name}
                      </td>
                      <td className="text-gray-600">
                        {demo.email}
                      </td>
                      <td>
                        {demo.music_link ? (
                          <a
                            href={demo.music_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#5B3DF5] hover:underline"
                          >
                            Open Link
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="max-w-xs truncate text-gray-600">
                        {demo.message ? demo.message : "-"}
                      </td>
                      <td>
                        {demo.demo_file ? (
                          <a
                            href={demo.demo_file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:underline font-medium"
                          >
                            Open Demo
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}