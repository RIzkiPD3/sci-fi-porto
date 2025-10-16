import React from "react";

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-cyan-glow mb-8 fade-in">
          About
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed fade-in">
          This is where your about section will go. The layout is ready for your
          content.
        </p>
      </div>
    </section>
  );
};

export default About;
