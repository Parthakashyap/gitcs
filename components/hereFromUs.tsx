"use client";
import React, { useState, useRef, useEffect } from 'react';

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
      videoSrc: '/path-to-video1.mp4',
      posterImage: '/api/placeholder/400/500'
    },
    {
      id: 2,
      name: 'Eve Rose',
      description: 'How I got my dream fulfilled',
      videoSrc: '/path-to-video2.mp4',
      posterImage: '/api/placeholder/400/500'
    },
    {
      id: 3,
      name: 'Berlin Cruck',
      description: 'Discovering my own path',
      videoSrc: '/path-to-video3.mp4',
      posterImage: '/api/placeholder/400/500'
    }
  ];

  // Track hover state for each card
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Create refs for each video
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Curved lines */}
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
      {/* Header section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-purple-900 mb-1">HERE FORM US</h2>
        <p className="text-blue-400">Networking</p>
      </div>
      
      {/* Cards container */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {profiles.map((profile, index) => (
          <div
            key={profile.id}
            className="relative w-full sm:w-64 h-96 bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out"
            style={{ transform: hoveredCard === profile.id ? 'scale(1.08)' : 'scale(1)' }}
            onMouseEnter={() => handleMouseEnter(profile.id)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Video element */}
            <video
              ref={el => videoRefs.current[index] = el}
              className="w-full h-full object-cover"
              src={profile.videoSrc}
              poster={profile.posterImage}
              muted
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
            
            {/* Play button (visible only when not hovered) */}
            <div 
              className="absolute right-4 bottom-4 w-10 h-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center transition-opacity duration-300 ease-in-out"
              style={{ opacity: hoveredCard === profile.id ? 0 : 1 }}
            >
              <div className="w-0 h-0 border-t-6 border-t-transparent border-l-10 border-l-gray-800 border-b-6 border-b-transparent ml-1"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkingSection;