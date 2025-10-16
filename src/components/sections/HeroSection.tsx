"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection(): React.JSX.Element {
  const heroRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero text elements with stagger
      gsap.fromTo(
        ".hero-greeting",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-name",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-description",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-button",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.6,
          ease: "back.out(1.7)",
        }
      );

      // Add subtle floating animation to hero content
      gsap.to(".hero-content", {
        y: -10,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="hero-content">
          {/* Greeting */}
          <h2 className="hero-greeting font-orbitron text-lg md:text-xl text-cyan-glow mb-4 font-medium">
            Hi, I&apos;m
          </h2>

          {/* Name */}
          <h1 className="hero-name font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            [Your Name]
          </h1>

          {/* Description */}
          <p className="hero-description text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
            A passionate full-stack developer creating innovative web
            applications with cutting-edge technologies. Specializing in React,
            Next.js, and modern development practices that push the boundaries
            of what&apos;s possible.
          </p>

          {/* CTA Button */}
          <button
            ref={buttonRef}
            onClick={scrollToAbout}
            className="hero-button group relative inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,230,230,0.3)]"
          >
            <span className="relative z-10">Lihat Selengkapnya</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
