'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import boy1 from '@/public/images/boy1.png';
import girl1 from '@/public/images/girl1.png';
import talkEd from '@/public/images/talkEd.png';
import careerConnect from '@/public/images/Career Connect.png';
import eduVerse from '@/public/images/EduVerse (1).png';
import skillAcademy from '@/public/images/Skill Academy (1).png';

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
    }
  ];

  // State to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="relative w-full py-16 overflow-hidden mt-32 bg-white">
      {/* Decorative curved lines */}
      <div className="absolute top-0 left-0">
        <svg width="180" height="200" viewBox="0 0 180 200">
          <path d="M0,200 Q180,120 0,0" fill="none" stroke="#30004a" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0">
        <svg width="180" height="200" viewBox="0 0 180 200">
          <path d="M180,0 Q0,80 180,200" fill="none" stroke="#30004a" strokeWidth="2" />
        </svg>
      </div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Header text centered */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#30004a] tracking-wide">WHY STUDY ABROAD WITH US</h2>
          <p className="text-[#2a9df4] mt-1">Professional-Streamlined-Simple</p>
        </div>

        {/* Three column layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column - Text content */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold text-[#30004a] mb-4">WHY STUDY ABROAD WITH US</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. In sit neque tellus felis vestibulum.. Tortor mauris est nullam sit. Nam malesuada purus in in eu dolor.. Eget mauris ut sed integer nisl dictum venenatis.. Ac condimentum sed cursus vulputate. Nulla massa ornare donec semper ac cras quam.. Aliquet tristique facilisis tincidunt vulputate molestie auctor donec sit.. Lorem suscipit pharetra etiam elit lacus commodo tristique hendrerit.. Lectus diam venenatis sit felis pulvinar adipiscing in nec vitae.. Donec at convallis ullamcorper a vulputate eros orci vel sit.. Auctor facilisis fames et et netus in hac vel fusce vitae nibh.
            </p>
          </div>

          {/* Middle column - Logo carousel with fixed dimensions */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center items-center relative w-full h-96 sm:h-80 md:h-96">
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
          </div>

          {/* Right column - Two image cards */}
          <div className="lg:w-1/3 flex flex-col sm:flex-row gap-4">
            {/* Expert Guidance Card */}
            <div className="relative rounded-3xl overflow-hidden h-64 sm:h-96 shadow-lg w-full sm:w-1/2">
              <Image 
                src={boy1} 
                alt="Expert Guidance" 
                fill
                className="object-cover"
              />
              <div className="absolute bottom-12 left-0 bg-red-600 px-4 py-3 w-32">
                <h4 className="text-white text-xl font-medium">Expert Guidance</h4>
              </div>
            </div>

            {/* Career Programs Card */}
            <div className="relative rounded-3xl overflow-hidden h-64 sm:h-96 shadow-lg w-full sm:w-1/2 mt-4 sm:mt-0">
              <Image 
                src={girl1} 
                alt="Career Programs" 
                fill
                className="object-cover"
              />
              <div className="absolute bottom-12 left-0 bg-pink-600 px-4 py-3 w-32">
                <h4 className="text-white text-xl font-medium">Career Programs</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;