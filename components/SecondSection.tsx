"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import boy1 from "@/public/images/boy1.png";
import girl1 from "@/public/images/girl1.png";
import nase from "@/public/images/image 20.png";
import ccg from "@/public/images/image 21.png";
import talkEd from "@/public/images/talkEd.png";
import careerConnect from "@/public/images/Career Connect.png";
import eduVerse from "@/public/images/EduVerse (1).png";
import skillAcademy from "@/public/images/Skill Academy (1).png";

const SecondSection = () => {
  // Define carousel images for the middle logo section
  const carouselItems = [
    {
      src: talkEd,
      alt: "talkEd Logo",
    },
    {
      src: careerConnect,
      alt: "careerConnect Logo",
    },
    {
      src: eduVerse,
      alt: "eduVerse Logo ",
    },
    {
      src: skillAcademy,
      alt: "skillAcademy Logo ",
    },
  ];

  // State to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Refs for scroll animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftColumnRef = useRef(null);
  const carouselRef = useRef(null);
  const rightColumnRef = useRef(null);

  // InView hooks for animation triggers
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  const isLeftColumnInView = useInView(leftColumnRef, {
    once: false,
    amount: 0.3,
  });
  const isCarouselInView = useInView(carouselRef, { once: false, amount: 0.3 });
  const isRightColumnInView = useInView(rightColumnRef, {
    once: false,
    amount: 0.3,
  });

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <motion.div
      ref={sectionRef}
      className="relative w-full py-16 overflow-hidden mt-14 bg-white"
    >
      {/* Decorative curved lines */}
      <div className="absolute top-0 left-0 md:block hidden">
        <svg width="180" height="200" viewBox="0 0 180 200">
          <path
            d="M0,200 Q180,120 0,0"
            fill="none"
            stroke="#30004a"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 md:block hidden">
        <svg width="180" height="200" viewBox="0 0 180 200">
          <path
            d="M180,0 Q0,80 180,200"
            fill="none"
            stroke="#30004a"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Header text centered with pop-up animation */}
        <motion.div
          ref={titleRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="md:text-5xl text-3xl font-bold mb-4 text-[#230344]">
            WHY STUDY ABROAD WITH US
          </h2>
          <p className="text-[#1F94F3] mb-2">Professional-Streamlined-Simple</p>
        </motion.div>

        {/* Three-column layout that exactly matches the image */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cards container - 4 cards side by side with exact spacing */}
          <div className="md:flex flex-nowrap gap-4 lg:w-2/3 hidden">
            {/* Card 1 - talkEd */}
            <div className="w-1/4">
              <div className="rounded-3xl overflow-hidden shadow-lg relative">
                <img
                  src="/images/boy1.png"
                  alt="Student with notebook"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-white w-32 p-4 flex items-center justify-center">
                    <img
                      src="/images/talkEd.png"
                      alt="talkEd Logo"
                      className="h-16 w-auto"
                    />
                  </div>
                  <div className=" mt-12"></div>
                </div>
              </div>
            </div>

            {/* Card 2 - Career Connect */}
            <div className="w-1/4">
              <div className="rounded-3xl overflow-hidden shadow-lg relative">
                <img
                  src="/images/girl1.png"
                  alt="Professional woman"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-white w-32 p-4 flex items-center justify-center">
                    <img
                      src="/images/Career Connect.png"
                      alt="Career Connect Logo"
                      className="h-16 w-auto"
                    />
                  </div>
                  <div className=" mt-12"></div>
                </div>
              </div>
            </div>

            {/* Card 3 - National Academy */}
            <div className="w-1/4">
              <div className="rounded-3xl overflow-hidden shadow-lg relative">
                <img
                  src="/images/image 20.png"
                  alt="Graduate student"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-white w-32 h-24 p-4 flex items-center justify-center">
                    <img
                      src="/images/Skill Academy (1).png"
                      alt="National Academy for Skill Education Logo"
                      className="h-auto w-auto"
                    />
                  </div>
                  <div className=" mt-12"></div>
                </div>
              </div>
            </div>

            {/* Card 4 - Complete Career Guidance */}
            <div className="w-1/4">
              <div className="rounded-3xl overflow-hidden shadow-lg relative">
                <img
                  src="/images/image 21.png"
                  alt="Student with backpack"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-white w-32 p-4 flex items-center justify-center">
                    <img
                      src="/images/image 22.png"
                      alt="Complete Career Guidance Logo"
                      className="h-16 w-auto"
                    />
                  </div>
                  <div className=" mt-12"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content - OUR INITIATIVES */}
          <div className="lg:w-1/3 flex flex-col justify-center mt-8 lg:mt-0 px-4">
            <h2 className="text-4xl font-bold text-[#30004a] mb-6">
              OUR INITIATIVES
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. In sit neque tellus felis
              vestibulum.. Tortor mauris est nullam sit. Nam malesuada purus in
              in eu dolor.. Eget mauris ut sed integer nisl dictum venenatis..
              Ac condimentum sed cursus vulputate. Nulla massa ornare donec
              semper ac cras quam.. Aliquet tristique facilisis tincidunt
              vulputate molestie auctor donec sit.. Lorem suscipit pharetra
              etiam elit lacus commodo tristique hendrerit.. Lectus diam
              venenatis sit felis pulvinar adipiscing in nec vitae.. Donec at
              convallis ullamcorper a vulputate eros orci vel sit.. Auctor
              facilisis fames et et netus in hac vel fusce vitae nibh.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-32 md:hidden flex flex-col justify-center items-center relative w-full h-96 sm:h-80 md:h-96">
              {/* Carousel container with fixed height */}
              <div className="relative w-full h-64 overflow-hidden">
                {/* Carousel items */}
                {carouselItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image 
                        src={item.src} 
                        alt={item.alt}
                        className="object-contain max-h-full max-w-full"
                        width={500}
                        height={350}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carousel indicators */}
              <div className="absolute bottom-4 flex justify-center gap-2 z-20 w-full">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-[#30004a]' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
    </motion.div>
  );
};

export default SecondSection;
