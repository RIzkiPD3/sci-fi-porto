"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface GSAPAnimationsProps {
  children: React.ReactNode;
}

const GSAPAnimations: React.FC<GSAPAnimationsProps> = ({ children }) => {
  useEffect(() => {
    // Set initial state
    gsap.set("body", { opacity: 0 });
    gsap.set(".fade-in", { opacity: 0, y: 30 });
    gsap.set(".slide-in-left", { opacity: 0, x: -50 });
    gsap.set(".slide-in-right", { opacity: 0, x: 50 });
    gsap.set(".scale-in", { opacity: 0, scale: 0.8 });

    // Create timeline for page load animation
    const tl = gsap.timeline();

    // Fade in body
    tl.to("body", {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate elements with stagger
    tl.to(
      ".fade-in",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.4"
    );

    tl.to(
      ".slide-in-left",
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.3"
    );

    tl.to(
      ".slide-in-right",
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.3"
    );

    tl.to(
      ".scale-in",
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.2"
    );

    // Add scroll-triggered animations
    const scrollElements = document.querySelectorAll(".scroll-reveal");

    scrollElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Add hover animations for interactive elements
    const hoverElements = document.querySelectorAll(".hover-glow");

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          scale: 1.05,
          boxShadow: "0 0 20px rgba(0, 230, 230, 0.5)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          scale: 1,
          boxShadow: "0 0 0px rgba(0, 230, 230, 0)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf("*");
    };
  }, []);

  return <>{children}</>;
};

export default GSAPAnimations;
