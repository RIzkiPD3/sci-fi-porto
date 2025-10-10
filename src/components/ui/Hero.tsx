"use client";

// Hero Section statis untuk website portofolio dengan tema sci-fi tech
// Layout horizontal: foto di kiri, teks di kanan, tombol "View Profile" di bawah foto
// Menggunakan GSAP untuk animasi dan Tailwind CSS untuk styling

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero(): React.JSX.Element {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate image wrapper dari kiri
      gsap.fromTo(
        ".hero-image",
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      );

      // Animate judul & deskripsi secara stagger
      gsap.fromTo(
        ".hero-text",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.15, stagger: 0.1 }
      );

      // Animate tombol fade/scale in
      gsap.fromTo(
        ".hero-button",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 0.2 }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Kolom kiri - Foto dan tombol */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="hero-image">
            <Image
              src="/images/avatar-placeholder.svg"
              alt="Profile Avatar"
              width={300}
              height={300}
              className="rounded-xl border border-cyan-500/30 bg-black/40 p-1 shadow-[0_0_15px_rgba(0,255,255,0.2)]"
              priority
            />
          </div>
          <a
            href="#profile"
            className="hero-button mt-4 inline-block px-5 py-2 rounded-md bg-gradient-to-r from-cyan-500/20 to-cyan-300/10 text-cyan-200 border border-cyan-400/30 hover:translate-y-[-2px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            aria-label="View Profile"
            role="button"
          >
            View Profile
          </a>
        </div>

        {/* Kolom kanan - Teks */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="hero-text text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cyan-300 leading-tight">
            Full Stack Developer
          </h1>
          <p className="hero-text mt-4 text-gray-300 max-w-xl mx-auto lg:mx-0">
            Passionate about creating innovative web applications with
            cutting-edge technologies. Specializing in React, Next.js, and
            modern development practices.
          </p>

          {/* Tech tags */}
          <div className="hero-text mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full">
              React
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full">
              Next.js
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full">
              TypeScript
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
