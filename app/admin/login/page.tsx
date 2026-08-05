"use client";
export const dynamic = 'force-dynamic'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert(error.message);
    return;
  }

  router.push("/admin/dashboard");
};

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F9FD]">

      <div className="w-full max-w-md rounded-[32px] bg-white p-10 shadow-2xl">

        <h1 className="mb-2 text-center text-4xl font-bold text-[#111827]">
          Admin Login
        </h1>

        <p className="mb-10 text-center text-gray-500">
          Turan Media Group Dashboard
        </p>

        <form
  onSubmit={handleLogin}
  className="space-y-6"
>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#5B3DF5]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#5B3DF5]"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-[#5B3DF5] py-4 font-semibold text-white transition hover:bg-[#6D4EFF]"
          >
            Login
          </button>

        </form>

      </div>

    </main>
  );
}