"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagesSliderDemo } from "./ui/images-slider-demo";

export default function FourthSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = window.innerHeight * 3;
      setScrolled(offset > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[30] ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="absolute inset-0 bg-white">
        <div className="container mx-auto px-4 sm:px-8 h-full">
          <div className="max-w-7xl mx-auto h-full flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full">
              {/* Left Section */}
              <div className="space-y-6 md:space-y-8 text-center md:text-left">
                <div>
                  <h2 className="md:text-5xl text-3xl font-bold mb-4 text-[#230344]">
                    WHO WE ARE
                  </h2>
                  <p className="text-[#1F94F3]  mb-2">
                    Endless possibilities begin here
                  </p>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed">
                  We are a team of dedicated education consultants passionate
                  about helping students achieve their dream of studying abroad.
                  With years of experience, we provide expert guidance,
                  application assistance, and end-to-end support.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {[
                    "/images/Uni1.png",
                    "/images/Uni2.png",
                    "/images/Uni3.png",
                    "/images/Uni4.png",
                  ].map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`University Logo ${index + 1}`}
                      className="h-12 md:h-24 w-auto object-contain max-w-full"
                    />
                  ))}
                </div>

                <Button className="bg-[#230344] text-white px-6 md:px-8 py-4 md:py-6 rounded-full text-lg md:text-xl hover:bg-purple-900 transition-colors">
                  Learn More About Us
                </Button>
              </div>

              {/* Right Section */}
              <div className="relative flex justify-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
