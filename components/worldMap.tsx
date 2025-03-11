'use client'
import worldMap from "../public/images/worldmap.png";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Define types for location data
interface Location {
  id: number;
  country: string;
  image: string;
  // Using percentages for positioning
  x: number; // x-coordinate as percentage (0-100)
  y: number; // y-coordinate as percentage (0-100)
}

// Location data with normalized coordinates (0-100%)
const locations: Location[] = [
  { id: 1, country: "Canada", image: "/flags/ca.png", x: 15, y: 30 },
  { id: 2, country: "USA", image: "/flags/us.png", x: 17, y: 45 },
  { id: 3, country: "UK", image: "/flags/gb.png", x: 49, y: 30 },
  { id: 4, country: "Italy", image: "/flags/it.png", x: 48, y: 46 },
  { id: 5, country: "Australia", image: "/flags/au.png", x: 76, y: 70 },
  { id: 6, country: "New Zealand", image: "/flags/nz.png", x: 88, y: 78 },
];

const WorldMap: React.FC = () => {
  const [visiblePointers, setVisiblePointers] = useState<number[]>([]);
  const [containerWidth, setContainerWidth] = useState(0);
  const animationTriggered = useRef<boolean>(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Function to animate pointers in sequence
    const animatePointers = () => {
      if (animationTriggered.current) return;
      animationTriggered.current = true;
      
      // Stagger the animations
      locations.forEach((location, index) => {
        setTimeout(() => {
          setVisiblePointers(prev => [...prev, location.id]);
        }, 200 * index);
      });
    };
    
    // Set up Intersection Observer for scroll detection
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animatePointers();
        }
      },
      { threshold: 0.2 }
    );
    
    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }
    
    // Handle resize and initial size
    const updateDimensions = () => {
      if (mapContainerRef.current) {
        setContainerWidth(mapContainerRef.current.offsetWidth);
      }
    };
    
    // Initial size measurement
    updateDimensions();
    
    // Setup resize listener
    window.addEventListener("resize", updateDimensions);
    
    return () => {
      if (mapContainerRef.current) {
        observer.unobserve(mapContainerRef.current);
      }
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  
  // Calculate pointer size as a percentage of container width
  const getPointerSize = () => {
    // Base size relative to container width
    const baseSize = Math.max(containerWidth * 0.05, 30); // Min size of 30px
    const maxSize = 60; // Max size in pixels
    return Math.min(baseSize, maxSize);
  };
  
  // Animation variants for pointers
  const pointerVariants: Variants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };
  
  // Continuous jiggle animation
  const jiggleVariants: Variants = {
    jiggle: {
      rotate: [0, -3, 3, -2, 2, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

  // Calculate pointer size
  const pointerSize = getPointerSize();
  // Calculate triangle size based on pointer size
  const triangleSize = Math.max(pointerSize * 0.1, 5);

  return (
    <div className="flex justify-center">
      <div className="w-[80%] relative" ref={mapContainerRef}>
        <Image 
          src={worldMap} 
          alt="World Map with Locations" 
          width={500} 
          height={300} 
          className="w-full" 
        />
        
        {containerWidth > 0 && locations.map((location) => (
          <AnimatePresence key={location.id}>
            {visiblePointers.includes(location.id) && (
              <motion.div
                className="absolute cursor-pointer"
                style={{
                  top: `${location.y}%`,
                  left: `${location.x}%`,
                  transform: "translate(-50%, -100%)" // Center the pin
                }}
                initial="hidden"
                animate="visible"
                variants={pointerVariants}
              >
                <motion.div 
                  className="flex flex-col items-center"
                  animate="jiggle"
                  variants={jiggleVariants}
                >
                  {/* Circle with flag image - size scales with container width */}
                  <div 
                    className="rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden"
                    style={{
                      width: `${pointerSize}px`,
                      height: `${pointerSize}px`
                    }}
                  >
                    <img 
                      src={location.image} 
                      alt={location.country} 
                      className="object-contain" 
                      style={{ 
                        width: `${pointerSize * 0.8}px`, 
                        height: `${pointerSize * 0.8}px`,
                        objectFit: 'contain', 
                        display: 'block', 
                        margin: 'auto' 
                      }}
                    />
                  </div>
                  
                  {/* Pointer triangle below circle - size scales with container width */}
                  <div 
                    style={{
                      width: 0,
                      height: 0,
                      marginTop: "-1px",
                      borderLeft: `${triangleSize}px solid transparent`,
                      borderRight: `${triangleSize}px solid transparent`,
                      borderTop: `${triangleSize}px solid white`
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default WorldMap;