"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white/95 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Turan Media Group"
            width={46}
            height={46}
            priority
          />

          <div>
            <h2 className="text-lg font-bold text-[#111827]">
              Turan Media Group
            </h2>

            <p className="text-xs text-gray-500">
              Professional Music Distribution
            </p>
          </div>
        </Link>

        {/* Menu */}

        <nav className="hidden items-center gap-10 lg:flex">
          {[
            "Home",
            "About",
            "Services",
            "Artists",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${
                item === "Home"
                  ? ""
                  : item.toLowerCase()
              }`}
              className="relative text-[15px] font-semibold text-[#111827] transition hover:text-[#5B3DF5]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right */}

        <button className="rounded-full bg-[#5B3DF5] px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#6D4EFF]">
          Apply Now
        </button>
      </div>
    </header>
  );
}