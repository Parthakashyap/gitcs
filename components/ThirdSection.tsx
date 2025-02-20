"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ThirdSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = window.innerHeight * 2.5;
      setScrolled(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / 10) * -1;
    const rotateY = (x - centerX) / 10;
    
    card.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
      translateZ(30px)
      scale(1.05)
    `;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
  };

  
  const destinations = [
    { country: "USA", flag: "/images/USA.avif" },
    { country: "UK", flag: "/images/UK.png" },
    { country: "Canada", flag: "/images/canada.avif" },
    { country: "Australia", flag: "/images/Aus.jpg" },
    { country: "Italy", flag: "/images/italy.avif" },
    { country: "New Zealand", flag: "/images/NZ.png" }
  ];

  return (
    <section className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[40] ${
      scrolled ? "-translate-y-full" : "translate-y-0"
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-black">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="text-center mb-12 text-white">
            <h2 className="md:text-5xl text-3xl font-bold mb-4">EXPLORE TOP STUDY DESTINATIONS</h2>
            <p className="text-blue-400">Professional·Streamlined·Simple</p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4 max-w-6xl mx-auto">
            {destinations.map((dest) => (
              <div
                key={dest.country}
                className="card-3d group cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="aspect-[4/3]">
                    <img
                      src={dest.flag}
                      alt={`Study in ${dest.country}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-center text-white">Study in {dest.country}</h3>
                  </div>
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}