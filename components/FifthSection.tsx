"use client";

import { useEffect, useState } from 'react';
import { CarouselDemo } from './ui/carousel-demo';

export default function FifthSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = window.innerHeight * 4;
      setScrolled(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[20] ${
      scrolled ? "-translate-y-full" : "translate-y-0"
    }`}>
      <div className="absolute inset-0 bg-white">
        <div className="container mx-auto px-4 h-full">
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
            <div className="text-center mb-2">
              <h2 className="text-5xl font-bold text-purple-900 mb-2">STUDENT SUCCESS STORIES</h2>
              <p className="text-blue-500">Endless possibilities begin here</p>
            </div>

            <div className="relative">
              <div className='mt-8 md:mt-0 md:-mb-32'>
                <CarouselDemo />
              </div>
              
              <div className="hidden md:flex   relative w-full">
                <div className="flex space-x-4 animate-marquee w-max">
                  {[...Array(2)].flatMap(() => [
                    <img
                      key="1"
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500&auto=format&fit=crop"
                      alt="Students 1"
                      className="h-48 object-contain rounded-xl"
                    />, 
                    <img
                      key="2"
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=500&auto=format&fit=crop"
                      alt="Students 2"
                      className="h-56 object-contain rounded-xl"
                    />, 
                    <img
                      key="3"
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop"
                      alt="Students 3"
                      className="h-48 object-contain rounded-xl"
                    />, 
                    <img
                      key="4"
                      src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=500&auto=format&fit=crop"
                      alt="Students 4"
                      className="h-56 object-contain rounded-xl"
                    />
                  ])}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </section>
  );
}