"use client";

import { useEffect, useState } from "react";

export default function ThirdSection() {
  const [scrollState, setScrollState] = useState({
    visible: false,
    exiting: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const entranceThreshold = window.innerHeight; // Threshold to enter
      const exitThreshold = window.innerHeight * 2; // Original threshold to exit
      
      // Determine if section should be visible or exiting
      if (offset > entranceThreshold && offset < exitThreshold) {
        setScrollState({ visible: true, exiting: false });
      } else if (offset >= exitThreshold) {
        setScrollState({ visible: true, exiting: true });
      } else {
        setScrollState({ visible: false, exiting: false });
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const destinations = [
    { country: "Study in USA", flag: "/images/USA.avif", backFlag: "/images/L1.png" },
    { country: "Study in UK", flag: "/images/UK.png", backFlag: "/images/L2.png" },
    { country: "Study in Canada", flag: "/images/canada.avif", backFlag: "/images/L3.png" },
    { country: "Study in Australia", flag: "/images/Aus.jpg", backFlag: "/images/L4.png" },
    { country: "Study in Italy", flag: "/images/italy.avif", backFlag: "/images/L5.png" },
    { country: "Study in New Zealand", flag: "/images/NZ.png", backFlag: "/images/L6.png" },
  ];

  return (
    <section className="mt-20">
      <div className=" bg-white">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-center mb-12 text-white">
            <h2 className="md:text-5xl text-3xl font-bold mb-4 text-[#230344]">
              EXPLORE TOP STUDY DESTINATIONS
            </h2>
            <p className="text-[#1F94F3] mb-2">Professional·Streamlined·Simple</p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-4 max-w-6xl mx-auto">
            {destinations.map((dest) => (
              <FlipCard key={dest.country} dest={dest} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlipCard({ dest }: { dest: { country: string; flag: string; backFlag: string } }) {
  const [count, setCount] = useState(0);

  const handleMouseEnter = () => {
    setCount(0); // Reset count when hover starts
    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += 1;
      setCount(currentCount);
      if (currentCount >= 100) clearInterval(interval);
    }, 15);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="flip-card group md:w-[300px] md:h-[200px] w-[160px] max-w-[300px] aspect-[3/2]"
        onMouseEnter={handleMouseEnter}
      >
        <div className="flip-inner w-full h-full">
          {/* Front Side */}
          <div className="flip-front">
            <img
              src={dest.flag}
              alt={`Study in ${dest.country}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back Side */}
          <div className="flip-back relative">
            {/* Back Image */}
            <img
              src={dest.backFlag}
              alt={`Study in ${dest.country}`}
              className="w-full h-full object-cover opacity-70"
            />
            {/* Counter Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold text-3xl">
              <p>{count}+</p>
              <p className="text-xl">Admission</p>
            </div>
          </div>
        </div>
      </div>

      {/* Country Name Below Image */}
      <p className="text-center mt-2 text-lg font-bold text-black">{dest.country}</p>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
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
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}