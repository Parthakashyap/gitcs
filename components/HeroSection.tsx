"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import 'animate.css';
import logo from "@/public/images/Group 185.png";
import Image from "next/image";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [counts, setCounts] = useState({
    visa: 0,
    service: 0,
    rating: 0,
    students: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    const targets = { visa: 100, service: 24, rating: 5, students: 10000 };
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCounts({
        visa: Math.round(targets.visa * progress),
        service: Math.round(targets.service * progress),
        rating: Math.round(targets.rating * progress),
        students: Math.round(targets.students * progress),
      });
      if (currentStep === steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  // Category data with additional details for expanded view
  const categories = [
    {
      id: 'academic',
      title: 'ACADEMIC RIGOR',
      subtitle: 'Embrace challenge',
      description: 'Lorem ipsum dolor sit amet consectetur. In lectus volutpat.',
      imagePath: '/images/academic.jpg' // Replace with your actual image path
    },
    {
      id: 'outcome',
      title: 'POWERFUL OUTCOME',
      subtitle: 'Build Your Career',
      description: 'Lorem ipsum dolor sit amet consectetur. In lectus volutpat.',
      imagePath: '/images/career.jpg' // Replace with your actual image path
    },
    {
      id: 'learning',
      title: 'EXPERIENTIAL LEARNING',
      subtitle: 'Immerse Yourself',
      description: 'Lorem ipsum dolor sit amet consectetur. In lectus volutpat.',
      imagePath: '/images/learning.jpg' // Replace with your actual image path
    },
    {
      id: 'campus',
      title: 'CAMPUS LIFE',
      subtitle: 'Find Your Place',
      description: 'Lorem ipsum dolor sit amet consectetur. In lectus volutpat.',
      imagePath: '/images/campus.jpg' // Replace with your actual image path
    }
  ];

  // Add a small delay before setting the hovered state to prevent accidental triggers
  const handleMouseEnter = (categoryId: string) => {
    const timer = setTimeout(() => {
      setHoveredCategory(categoryId);
    }, 50);
    return () => clearTimeout(timer);
  };

  // Add a small delay before clearing the hovered state to prevent flickering
  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setHoveredCategory(null);
    }, 50);
    return () => clearTimeout(timer);
  };

  return (
    <section className="">
      <div className="bg-gradient-to-br from-purple-900 to-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        ></div>

        <div className="h-full flex flex-col justify-center relative z-10">
          {/* Top navigation bar with three sections - now full width */}
          <nav className="relative z-20 w-full">
            {/* Upper navigation bar */}
            <div className="bg-[#230344] text-white w-full">
              <div className="flex justify-between items-center h-8 w-full px-4 md:px-8 lg:px-12">
                <div className="flex">
                  <a href="#" className="px-4 hover:text-purple-400">Global Forum</a>
                  <a href="#" className="px-4 hover:text-purple-400">Students Club</a>
                  <a href="#" className="px-4 hover:text-purple-400">Online Career Fair</a>
                </div>
                <div className="flex">
                  <a href="#" className="px-4 hover:text-purple-400">Coordinator</a>
                  <a href="#" className="px-4 hover:text-purple-400">Eduverse</a>
                  <a href="#" className="px-4 hover:text-purple-400">Education Loans</a>
                </div>
              </div>
            </div>
            
            {/* Main navigation */}
            <div className="bg-white text-[#230344] relative w-full">
              <div className="flex justify-between items-center h-8 w-full px-4 md:px-8 lg:px-12">
                <div className="flex">
                  <a href="#" className="px-6 flex items-center font-medium">
                    Skillverse <ChevronDown className="w-4 h-4 ml-1" />
                  </a>
                  <a href="#" className="px-6 flex items-center font-medium">
                    School/University <ChevronDown className="w-4 h-4 ml-1" />
                  </a>
                  <a href="#" className="px-6 flex items-center font-medium">
                    Opportunity Orbit <ChevronDown className="w-4 h-4 ml-1" />
                  </a>
                </div>
                
                <div className="flex">
                  <a href="#" className="px-6 flex items-center font-medium">
                    Ideal UP <ChevronDown className="w-4 h-4 ml-1" />
                  </a>
                  <a href="#" className="px-6 flex items-center font-medium">
                    Event <ChevronDown className="w-4 h-4 ml-1" />
                  </a>
                  <a href="#" className="px-6 flex items-center font-medium">
                    About Us <ChevronDown className="w-4 h-4 ml-1" />
                  </a>
                  <a href="#" className="px-6 border border-purple-900 rounded-md py-1 ml-2">Login</a>
                </div>
              </div>
              
              {/* Centered logo with arrow-like element */}
              <div className="absolute left-1/2 -translate-x-1/2 z-20" style={{ width: "300px", top: "-40px" }}>
                <div className="bg-[#F0FFFF] shadow-2xl relative shadow-black flex items-center px-5 py-4"
                     style={{ 
                       clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
                       filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                     }}>
                  <div className="mr-4 flex-shrink-0">
                    <div>
                      <Image src={logo} alt="NETWORKING" className="h-16 p-2 w-auto" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-[#230344] text-[24px] font-bold leading-none tracking-wider" style={{ letterSpacing: "1px" }}>NETWORKING</h3>
                    <p className="text-[#230344] text-[10px] tracking-[0.2em] mt-1">EVERY CAREER COUNTS</p>
                  </div>
                </div>
              </div>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden absolute right-4 text-purple-900"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile menu - adjusted position since navbar is no longer fixed */}
          {menuOpen && (
            <div className="absolute top-28 left-0 w-full bg-white p-6 flex flex-col items-center gap-4 text-purple-900 md:hidden z-20 shadow-md">
              <a href="#" className="hover:text-purple-400">Skillverse</a>
              <a href="#" className="hover:text-purple-400">School/University</a>
              <a href="#" className="hover:text-purple-400">Opportunity Orbit</a>
              <a href="#" className="hover:text-purple-400">Ideal UP</a>
              <a href="#" className="hover:text-purple-400">Event</a>
              <a href="#" className="hover:text-purple-400">About Us</a>
              <button className="bg-purple-900 text-white px-6 py-2 rounded hover:bg-purple-800 transition-colors">
                Login
              </button>
            </div>
          )}

          <div className="text-center text-white mt-40 pt-20 px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Attend CT's Biggest
              <br />
              Australia Education Fair
            </h1>
          </div>
          {/* <button
            onClick={handleScrollDown}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </button> */}

          <div className="mt-24 px-4">
            {/* Stats section commented out in original code */}
          </div>
          

          {/* Bottom categories section with smooth hover animation */}
          <div className="absolute -bottom-32 left-0 right-0 flex text-white w-full overflow-hidden">
            <div className="flex w-full">
              {categories.map((category) => (
                <div 
                  key={category.id}
                  className={`
                    relative transition-all duration-700 ease-in-out
                    border-r border-white/20 last:border-r-0
                    overflow-hidden
                    bg-purple-900/80 hover:bg-purple-800/90
                  `}
                  style={{
                    flex: hoveredCategory === category.id ? '2' : '1',
                    minWidth: 0,
                    transition: 'flex 0.7s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                    willChange: 'flex',
                    height: hoveredCategory === category.id ? '140px' : '110px',
                  }}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Background image that appears on hover */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
                    style={{ 
                      backgroundImage: `url(${category.imagePath})`,
                      opacity: hoveredCategory === category.id ? 0.3 : 0,
                      transition: 'opacity 0.7s ease'
                    }}
                  ></div>
                  
                  {/* Content container with smooth transition */}
                  <div className="p-4 text-center relative z-10 h-full flex flex-col justify-center">
                    <div className="uppercase text-sm font-bold mb-2 transition-all duration-700">
                      {category.title}
                    </div>
                    <h3 className="text-xl transition-all duration-700">{category.subtitle}</h3>
                    
                    {/* Description text that appears on hover with smooth transition */}
                    <div 
                      style={{ 
                        maxHeight: hoveredCategory === category.id ? '100px' : '0',
                        opacity: hoveredCategory === category.id ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
                        marginTop: hoveredCategory === category.id ? '12px' : '0'
                      }}
                    >
                      <p className="text-white/90 text-sm transition-all duration-700">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}