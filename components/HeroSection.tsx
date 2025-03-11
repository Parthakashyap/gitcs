"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import "animate.css";
import logo from "@/public/images/Group 185.png";
import logoW from "@/public/images/Group.png";
import Image from "next/image";
import { Navbar } from "./navbar";

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
      id: "academic",
      title: "ACADEMIC RIGOR",
      subtitle: "Embrace challenge",
      description:
        "Lorem ipsum dolor sit amet consectetur. In lectus volutpat.",
      imagePath: "/images/academic.jpeg", // Replace with your actual image path
    },
    {
      id: "outcome",
      title: "POWERFUL OUTCOME",
      subtitle: "Build Your Career",
      description:
        "Lorem ipsum dolor sit amet consectetur. In lectus volutpat.",
      imagePath: "/images/outcome.jpeg", // Replace with your actual image path
    },
    {
      id: "learning",
      title: "EXPERIENTIAL LEARNING",
      subtitle: "Immerse Yourself",
      description:
        "Lorem ipsum dolor sit amet consectetur. In lectus volutpat.",
      imagePath: "/images/learning.jpeg", // Replace with your actual image path
    },
    {
      id: "campus",
      title: "CAMPUS LIFE",
      subtitle: "Find Your Place",
      description:
        "Lorem ipsum dolor sit amet consectetur. In lectus volutpat.",
      imagePath: "/images/campus.jpeg", // Replace with your actual image path
    },
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-grow flex flex-col h-screen">
        <div className="bg-gradient-to-br from-purple-900 to-black h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/bg.png')" }}
          ></div>

          <div className="h-full flex flex-col justify-between relative z-10">
            <Navbar/>

            {/* Hero content section */}
            <div className="flex-grow flex flex-col justify-center md:mt-0 mt-[1.5rem]">
              <div className="text-center text-white mt-16 md:mt-40 pt-4 md:pt-20 px-4">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-32 leading-tight">
                  Attend CT's Biggest
                  <br />
                  Australia Education Fair
                </h1>
              </div>
            </div>

            {/* Bottom categories section - Only visible on desktop */}
            <div className="hidden md:block relative text-white w-full overflow-hidden mt-auto">
              <div className="flex flex-row w-full">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`
                      relative 
                      transition-all duration-700 ease-in-out
                      border-t border-r border-white last:border-r-0
                      overflow-hidden
                      bg-transparent hover:bg-black/90
                    `}
                    style={{
                      flex: hoveredCategory === category.id ? "2" : "1",
                      minWidth: 0,
                      transition:
                        "flex 0.7s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                      willChange: "flex",
                      height:
                        hoveredCategory === category.id ? "140px" : "110px",
                    }}
                    onMouseEnter={() => setHoveredCategory(category.id)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {/* Background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
                      style={{
                        backgroundImage: `url(${category.imagePath})`,
                        opacity: hoveredCategory === category.id ? 0.6 : 0,
                        transition: "opacity 0.7s ease",
                      }}
                    ></div>

                    {/* Content container */}
                    <div className="p-4 text-center relative z-10 h-full flex flex-col justify-center">
                      <div className="uppercase text-sm font-bold mb-1 transition-all duration-700">
                        {category.title}
                      </div>
                      <h3 className="text-xl transition-all duration-700">
                        {category.subtitle}
                      </h3>

                      {/* Description text that appears on hover (desktop only) */}
                      <div
                        style={{
                          maxHeight:
                            hoveredCategory === category.id ? "100px" : "0",
                          opacity: hoveredCategory === category.id ? 1 : 0,
                          overflow: "hidden",
                          transition:
                            "all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                          marginTop:
                            hoveredCategory === category.id ? "12px" : "0",
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

      {/* Mobile Categories Section - Separate section below the hero image */}
      <div className="md:hidden  w-full">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative bg-purple-900/90 border-b border-white/10 last:border-b-0"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${category.imagePath})` }}
            ></div>

            {/* Content container */}
            <div className="p-4 text-center relative z-10">
              <div className="uppercase text-sm font-bold mb-1 text-white">
                {category.title}
              </div>
              <h3 className="text-xl text-white">{category.subtitle}</h3>

              {/* Description text always visible on mobile */}
              <div className="mt-2">
                <p className="text-white/90 text-sm">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
