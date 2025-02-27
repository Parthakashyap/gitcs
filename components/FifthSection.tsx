"use client";

import { useEffect, useState } from 'react';
import { CarouselDemo } from './ui/carousel-demo';

export default function FifthSection() {
  const [scrollState, setScrollState] = useState({
    visible: false,
    exiting: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const entranceThreshold = window.innerHeight * 3; // Threshold to enter (after fourth section)
      const exitThreshold = window.innerHeight * 4; // Original threshold to exit
      
      // Determine if section should be visible or exiting
      if (offset > entranceThreshold && offset < exitThreshold) {
        setScrollState({ visible: true, exiting: false });
      } else if (offset >= exitThreshold) {
        setScrollState({ visible: true, exiting: true });
      } else {
        setScrollState({ visible: false, exiting: false });
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[20] ${
      !scrollState.visible ? "translate-y-full" : // Initially below viewport
      scrollState.exiting ? "-translate-y-full" : // Exit animation (same as original)
      "translate-y-0" // Visible position
    }`}>
      <div className="absolute inset-0 bg-white">
        <div className="container mx-auto px-4 h-full">
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
            <div className="text-center mb-2">
              <h2 className="md:text-5xl text-3xl font-bold mb-4 text-[#230344]">STUDENT SUCCESS STORIES</h2>
              <p className="text-[#1F94F3] mb-2">Endless possibilities begin here</p>
            </div>

            <div className="relative">
              <div className='mt-8 md:mt-0 md:-mb-32'>
                <CarouselDemo />
              </div>
              
              <div className="relative w-full md:mt-0 mt-24">
                <div className="flex space-x-4 animate-marquee w-max">
                  {[...Array(4)].flatMap(() => [
                    <img
                      key="1"
                      src="/images/slide1.png"
                      alt="Students 1"
                      className="w-56 object-contain rounded-xl"
                    />, 
                    <img
                      key="2"
                      src="/images/slide2.png"
                      alt="Students 2"
                      className="w-56 object-contain rounded-xl"
                    />, 
                    <img
                      key="3"
                      src="/images/slide3.png"
                      alt="Students 3"
                      className="w-56 object-contain rounded-xl"
                    />, 
                    <img
                      key="4"
                      src="/images/slide4.png"
                      alt="Students 4"
                      className="w-56 object-contain rounded-xl"
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