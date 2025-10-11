"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CircuitBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Generate random circuit elements
    const generateCircuitElements = () => {
      const container = containerRef.current;
      if (!container) return;

      // Clear existing elements
      const existingElements = container.querySelectorAll(
        ".circuit-line, .circuit-node, .circuit-branch"
      );
      existingElements.forEach((el) => el.remove());

      // Generate random circuit lines
      for (let i = 0; i < 15; i++) {
        const line = document.createElement("div");
        line.className = "circuit-line";
        line.style.top = `${Math.random() * 100}%`;
        line.style.left = `${Math.random() * 100}%`;
        line.style.width = `${20 + Math.random() * 60}%`;
        line.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg)`;
        line.style.color = ["#00e6e6", "#0066ff", "#6600cc"][
          Math.floor(Math.random() * 3)
        ];
        line.style.animationDelay = `${Math.random() * 5}s`;
        line.style.animationDuration = `${8 + Math.random() * 10}s`;
        container.appendChild(line);
      }

      // Generate random circuit nodes
      for (let i = 0; i < 12; i++) {
        const node = document.createElement("div");
        node.className = "circuit-node";
        node.style.top = `${Math.random() * 100}%`;
        node.style.left = `${Math.random() * 100}%`;
        node.style.width = `${4 + Math.random() * 8}px`;
        node.style.height = node.style.width;
        node.style.color = ["#00e6e6", "#0066ff", "#6600cc"][
          Math.floor(Math.random() * 3)
        ];
        node.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(node);
      }

      // Generate random circuit branches
      for (let i = 0; i < 8; i++) {
        const branch = document.createElement("div");
        branch.className = "circuit-branch";
        branch.style.top = `${Math.random() * 100}%`;
        branch.style.left = `${Math.random() * 100}%`;
        branch.style.width = `${15 + Math.random() * 30}%`;
        branch.style.transform = `rotate(${(Math.random() - 0.5) * 60}deg)`;
        branch.style.color = ["#00e6e6", "#0066ff", "#6600cc"][
          Math.floor(Math.random() * 3)
        ];
        branch.style.animationDelay = `${Math.random() * 4}s`;
        container.appendChild(branch);
      }
    };

    // Initial generation
    generateCircuitElements();

    // Regenerate every 30 seconds for variety
    const interval = setInterval(generateCircuitElements, 30000);

    // GSAP animations for energy flows with performance optimization
    const energyFlows = containerRef.current.querySelectorAll(".circuit-line");
    energyFlows.forEach((flow) => {
      gsap.to(flow, {
        opacity: 0.8,
        scaleX: 1.1,
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 2,
        force3D: true,
        transformOrigin: "center center",
      });
    });

    // Optimize performance by reducing animation frequency on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Reduce animation complexity on mobile
      gsap.globalTimeline.timeScale(0.7);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden will-change-transform"
    >
      {/* Base dark background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a001a] to-black" />

      {/* Organic circuit grid pattern */}
      <div className="absolute inset-0 circuit-grid opacity-30" />

      {/* Dynamic energy flows */}
      <div className="absolute inset-0">
        {/* Organic horizontal energy flows */}
        <div className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-energy-flow-organic" />
        <div
          className="absolute top-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00e6e6] to-transparent opacity-40 animate-energy-flow-curved"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-3/4 w-full h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-50 animate-energy-flow-organic"
          style={{ animationDelay: "4s" }}
        />

        {/* Organic vertical energy flows */}
        <div
          className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-40 animate-energy-flow-v"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#00e6e6] to-transparent opacity-30 animate-energy-flow-v"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-300 to-transparent opacity-35 animate-energy-flow-v"
          style={{ animationDelay: "5s" }}
        />
      </div>

      {/* Diagonal energy flows with organic patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform -rotate-12 origin-left animate-energy-flow-d"
            style={{
              top: "20%",
              animationDelay: "1s",
            }}
          />
          <div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#00e6e6]/25 to-transparent transform rotate-12 origin-right animate-energy-flow-d"
            style={{
              top: "60%",
              animationDelay: "3s",
            }}
          />
          <div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent transform -rotate-6 origin-left animate-energy-flow-d"
            style={{
              top: "80%",
              animationDelay: "5s",
            }}
          />
        </div>
      </div>

      {/* Dynamic data streams */}
      <div className="absolute inset-0">
        <div
          className="absolute w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent opacity-60 animate-data-stream"
          style={{
            left: "15%",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-px h-6 bg-gradient-to-b from-[#00e6e6] to-transparent opacity-50 animate-data-stream"
          style={{
            left: "35%",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute w-px h-10 bg-gradient-to-b from-cyan-300 to-transparent opacity-40 animate-data-stream"
          style={{
            left: "65%",
            animationDelay: "6s",
          }}
        />
        <div
          className="absolute w-px h-7 bg-gradient-to-b from-cyan-500 to-transparent opacity-55 animate-data-stream"
          style={{
            left: "85%",
            animationDelay: "9s",
          }}
        />
      </div>

      {/* Enhanced glow overlay with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-[#00e6e6]/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/3 via-transparent to-blue-500/3" />

      {/* Additional organic circuit patterns */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-1/6 left-1/6 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-cyan-400/20 rounded-full animate-node-pulse"
          style={{
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute bottom-1/6 right-1/6 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 border border-[#00e6e6]/15 rounded-full animate-node-glow"
          style={{
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border border-cyan-300/25 rounded-full animate-node-flicker"
          style={{
            animationDelay: "1s",
          }}
        />
      </div>
    </div>
  );
};

export default CircuitBackground;
