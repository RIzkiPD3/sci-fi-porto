import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";

export default function Home() {
  return (
    <div className="relative z-10">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section Placeholder */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center p-8"
      >
        <div className="max-w-4xl mx-auto text-center content-container">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-cyan-glow mb-8 fade-in text-readable">
            About
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed fade-in text-readable">
            This is where your about section will go. The layout is ready for
            your content.
          </p>
        </div>
      </section>

      {/* Projects Section Placeholder */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center p-8"
      >
        <div className="max-w-6xl mx-auto text-center content-container">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-blue-glow mb-8 fade-in text-readable">
            Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed fade-in text-readable">
            This is where your projects section will go. The layout is ready for
            your content.
          </p>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center p-8"
      >
        <div className="max-w-4xl mx-auto text-center content-container">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-cyan-glow mb-8 fade-in text-readable">
            Contact
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed fade-in text-readable">
            This is where your contact section will go. The layout is ready for
            your content.
          </p>
        </div>
      </section>
    </div>
  );
}
