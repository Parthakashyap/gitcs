import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

const LogoScroller = () => {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  
  // University logos array - duplicated to create seamless loop
  const logos = [
    "/images/Uni1.png", 
    "/images/Uni2.png", 
    "/images/Uni3.png", 
    "/images/Uni4.png",
    "/images/Uni1.png", 
    "/images/Uni2.png", 
    "/images/Uni3.png", 
    "/images/Uni4.png"
  ];
  
  useEffect(() => {
    const startScrollAnimation = async () => {
      // Calculate the width to scroll (half of the content)
      const halfWidth = logos.length * 150 / 2; // Approximate width of half the logos
      
      // Create infinite loop
      while (true) {
        // Animate from starting position to -halfWidth
        await controls.start({
          x: -halfWidth,
          transition: {
            duration: 15, // Adjust speed here
            ease: "linear"
          }
        });
        
        // Reset position without animation
        await controls.set({ x: 0 });
      }
    };
    
    startScrollAnimation();
  }, [controls]);
  
  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <motion.div 
        className="flex"
        animate={controls}
        initial={{ x: 0 }}
      >
        {logos.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-4 w-36 md:w-48" // Fixed width for each logo container
          >
            <img
              src={src}
              alt={`University Logo ${index % 4 + 1}`}
              className="h-12 md:h-24 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoScroller;