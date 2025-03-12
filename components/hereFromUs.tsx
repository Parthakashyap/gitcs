"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface Profile {
  id: number;
  name: string;
  description: string;
  videoSrc: string;
  posterImage: string;
}

const NetworkingSection: React.FC = () => {
  const profiles: Profile[] = [
    {
      id: 1,
      name: 'Adam Jose',
      description: 'How to boost your career',
      videoSrc: '/videos/demo.mp4',
      posterImage: '/api/placeholder/400/500'
    },
    {
      id: 2,
      name: 'Eve Rose',
      description: 'How I got my dream fulfilled',
      videoSrc: '/videos/demo.mp4',
      posterImage: '/api/placeholder/400/500'
    },
    {
      id: 3,
      name: 'Berlin Cruck',
      description: 'Discovering my own path',
      videoSrc: '/videos/demo.mp4',
      posterImage: '/api/placeholder/400/500'
    },
    {
      id: 4,
      name: 'Berlin Cruck',
      description: 'Discovering my own path',
      videoSrc: '/videos/demo.mp4',
      posterImage: '/api/placeholder/400/500'
    }
  ];

  // Track hover state for each card
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Create refs for each video
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  // Create ref for scroll detection
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false, // Set to false to trigger animation every time it enters viewport
    amount: 0.2, // Trigger when 20% of the component is visible
  });

  // Set up video refs
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, profiles.length);
  }, [profiles.length]);

  // Handle hover state changes
  useEffect(() => {
    profiles.forEach((profile, index) => {
      const videoElement = videoRefs.current[index];
      if (!videoElement) return;

      if (hoveredCard === profile.id) {
        videoElement.play().catch(e => console.log("Video play failed:", e));
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    });
  }, [hoveredCard, profiles]);

  const handleMouseEnter = (profileId: number) => {
    setHoveredCard(profileId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div className="relative w-full md:mt-12 mt-4 py-16 overflow-hidden" ref={sectionRef}>
      {/* Curved lines */}
      <div className="absolute top-0 left-0 md:block hidden">
        <svg width="180" height="200" viewBox="0 0 180 200">
          <path d="M0,200 Q180,120 0,0" fill="none" stroke="#30004a" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 md:block hidden">
        <svg width="180" height="200" viewBox="0 0 180 200">
          <path d="M180,0 Q0,80 180,200" fill="none" stroke="#30004a" strokeWidth="2" />
        </svg>
      </div>
      {/* Header section */}
      <div className="text-center mb-10">
        <h2 className="md:text-5xl text-3xl font-bold mb-4 text-[#230344]">HERE FORM US</h2>
        <p className="text-[#1F94F3] mb-2">Networking</p>
      </div>
      
      {/* Cards container with framer motion - animate based on scroll */}
      <motion.div 
        className="flex flex-wrap justify-center gap-6 px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {profiles.map((profile, index) => {
          // Use a div wrapper to handle the hover scaling separately from the animation
          return (
            <div 
              key={profile.id}
              className="relative"
              style={{ 
                transform: hoveredCard === profile.id ? 'scale(1.08)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out'
              }}
              onMouseEnter={() => handleMouseEnter(profile.id)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="relative w-full sm:w-64 h-96 bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                variants={cardVariants}
              >
                {/* Video element */}
                <video
                  ref={el => videoRefs.current[index] = el}
                  className="w-full h-full object-cover"
                  src={profile.videoSrc}
                  poster={profile.posterImage}
                  playsInline
                  loop
                  preload="metadata"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Text content that disappears on hover */}
                <div 
                  className="absolute bottom-0 left-0 p-6 w-full transition-opacity duration-300 ease-in-out"
                  style={{ opacity: hoveredCard === profile.id ? 0 : 1 }}
                >
                  <h3 className="text-white text-xl font-semibold mb-1">{profile.name}</h3>
                  <p className="text-white text-sm">{profile.description}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default NetworkingSection;