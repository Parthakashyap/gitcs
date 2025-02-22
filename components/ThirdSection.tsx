"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThirdSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = window.innerHeight * 2.5;
      setScrolled(offset > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const destinations = [
    { country: "USA", flag: "/images/USA.avif", backFlag: "/images/USA-back.avif" },
    { country: "UK", flag: "/images/UK.png", backFlag: "/images/UK-back.png" },
    { country: "Canada", flag: "/images/canada.avif", backFlag: "/images/canada-back.avif" },
    { country: "Australia", flag: "/images/Aus.jpg", backFlag: "/images/Aus-back.jpg" },
    { country: "Italy", flag: "/images/italy.avif", backFlag: "/images/italy-back.avif" },
    { country: "New Zealand", flag: "/images/NZ.png", backFlag: "/images/NZ-back.png" },
  ];

  return (
    <section
      className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[40] ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="absolute inset-0 bg-white">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-center mb-12 text-white">
            <h2 className="md:text-5xl text-3xl font-bold mb-4 text-purple-900">
              EXPLORE TOP STUDY DESTINATIONS
            </h2>
            <p className="text-blue-400">Professional·Streamlined·Simple</p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-4 max-w-6xl mx-auto">
  {destinations.map((dest) => (
    <div key={dest.country} className="flex flex-col items-center">
      <div className="flip-card group w-[300px] h-[200px]">
        <div className="flip-inner w-full h-full">
          {/* Front Side */}
          <div className="flip-front">
            <img
              src={dest.flag}
              alt={`Study in ${dest.country}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Back Side */}
          <div className="flip-back">
            <img
              src={dest.backFlag}
              alt={`Study in ${dest.country}`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Country Name Below Image */}
      <p className="text-center mt-2 text-lg font-medium text-purple-900">
        {dest.country}
      </p>
    </div>
  ))}
</div>

        </div>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          width: 300px;
          height: 200px;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
        }

        .flip-card:hover .flip-inner {
          transform: rotateY(180deg);
        }

        .flip-front,
        .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          overflow: hidden;
        }

        .flip-back {
          transform: rotateY(180deg);
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
}
