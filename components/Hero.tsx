import React from "react";
import Image from "next/image";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  heroImageUrl: string;
}

const Hero: React.FC<{ data: HeroProps }> = ({ data }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-950 pt-16">
      <div className="text-center px-4">
        {data.heroImageUrl && (
          <div className="mb-8 relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/20">
            <Image
              src={data.heroImageUrl}
              alt={`${data.name}'s profile picture`}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {data.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-4">
          {data.role}
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {data.tagline}
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;