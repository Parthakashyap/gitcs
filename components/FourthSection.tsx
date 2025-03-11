"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ImagesSliderDemo } from "./ui/images-slider-demo";
import { motion } from "framer-motion";
import LogoScroller from "./logoScroller"; // Import the new component

export default function FourthSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="mt-14 md:mt-24">
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-8 h-full">
          <div className="max-w-7xl mx-auto h-full flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full">
              
              {/* Left Section - Optimized Slide-in */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6 md:space-y-8 text-center md:text-left"
              >
                
                <div>
                  <h2 className="md:text-5xl text-3xl font-bold mb-4 text-[#230344]">
                    WHO WE ARE
                  </h2>
                  <p className="text-[#1F94F3] mb-2">
                    Endless possibilities begin here
                  </p>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed">
                  We are a team of dedicated education consultants passionate
                  about helping students achieve their dream of studying abroad.
                  With years of experience, we provide expert guidance,
                  application assistance, and end-to-end support.
                </p>

                {/* Replace the static logos with the continuous scroller */}
                <LogoScroller />

                <Button className="bg-[#230344] text-white px-6 md:px-8 py-4 md:py-6 rounded-full text-lg md:text-xl hover:bg-purple-900 transition-colors">
                  Learn More About Us
                </Button>
              </motion.div>

              {/* Right Section - Optimized Slide-in */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Delayed for better effect
                className="relative flex justify-center"
              >
                <div className="aspect-[4/3] w-full max-w-md md:max-w-full rounded-2xl overflow-hidden">
                  <ImagesSliderDemo />
                </div>
                <div className="absolute -bottom-4 right-4 md:-right-8 w-24 md:w-32 h-24 md:h-32 bg-[#230344] rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-white text-center">
                    <div className="text-2xl md:text-3xl font-bold">15+</div>
                    <div className="text-xs md:text-sm">
                      Years of<br />Experience
                    </div>
                  </div>
                </div>
              </motion.div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}