"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Navbar(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate navbar entrance
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          menuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
        );
        gsap.fromTo(
          ".menu-item",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.2, stagger: 0.1, delay: 0.1 }
        );
      }, menuRef);
      return () => ctx.revert();
    } else if (!isMenuOpen && menuRef.current) {
      const ctx = gsap.context(() => {
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }, menuRef);
      return () => ctx.revert();
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-orbitron text-xl font-bold text-cyan-glow hover:text-blue-glow transition-all duration-300 hover:scale-105"
            >
              Portfolio
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 navbar-menu">
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link text-gray-300 hover:text-cyan-glow px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="nav-link text-gray-300 hover:text-cyan-glow px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link text-gray-300 hover:text-cyan-glow px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-cyan-glow hover:bg-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/40 backdrop-blur-md border-t border-cyan-500/20">
          <button
            onClick={() => scrollToSection("about")}
            className="menu-item block text-gray-300 hover:text-cyan-glow px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:bg-cyan-500/10 rounded-md"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="menu-item block text-gray-300 hover:text-cyan-glow px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:bg-cyan-500/10 rounded-md"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="menu-item block text-gray-300 hover:text-cyan-glow px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:bg-cyan-500/10 rounded-md"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
