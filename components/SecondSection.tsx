"use client";

import { useEffect, useState } from "react";
import CapIcon from "@/public/images/cap.svg";
import GlobeIcon from "@/public/images/globe.svg";
import BagIcon from "@/public/images/bag.svg";

export default function SecondSection() {
  const [scrolled, setScrolled] = useState(false);
  const [previousSectionScrolled, setPreviousSectionScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const sectionHeight = window.innerHeight;
      
      // Check if we've scrolled to where the previous section should slide up
      const previousSectionThreshold = sectionHeight * 0.00000000000001; // Adjust this value as needed
      
      // Track previous section scroll state
      if (offset > previousSectionThreshold) {
        setPreviousSectionScrolled(true);
      } else {
        setPreviousSectionScrolled(false);
      }
      
      // Current section animation logic
      const threshold = window.innerHeight * 1;
      
      if (offset > threshold && visible) {
        setScrolled(true);
        
        setTimeout(() => {
          setVisible(false);
        }, 700);
      } 
      else if (offset < threshold && !visible) {
        setVisible(true);
        setTimeout(() => {
          setScrolled(false);
        }, 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 10) * -1;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
      translateZ(20px)
      scale(1.02)
    `;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)";
  };

  const icons = [CapIcon, GlobeIcon, BagIcon];

  return (
    <section
      className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[50] ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      } ${!visible ? "opacity-0 pointer-events-none" : "opacity-100"} ${
        previousSectionScrolled ? "translate-y-1" : "translate-y-full"
      }`}
    >
      <div className="absolute inset-0 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 py-2 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="md:text-5xl text-3xl font-bold mb-4 text-[#230344]">
                WHY STUDY ABROAD WITH US
              </h2>
              <p className="text-[#1F94F3] mb-2">
                Professional-Streamlined-Simple
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 -mt-16 md:-mt-0 relative">
              {[
                {
                  title: "Expert Guidance & Support",
                  description:
                    "Our experienced advisors assist you every step of the way, from application to arrival.",
                  position: "bottom",
                  bg: "from-purple-500/10 to-blue-500/10",
                  gradientPosition: "bottom-4 left-4",
                  textMove:
                    "translate-y-[-20px] group-hover:translate-y-[20px]", // Moves down on hover
                },
                {
                  title: "Wide Range of Study Destinations",
                  description:
                    "Choose from top universities across multiple countries worldwide.",
                  position: "top",
                  bg: "from-green-500/10 to-teal-500/10",
                  gradientPosition: "top-4 left-4",
                  textMove:
                    "translate-y-[20px] group-hover:translate-y-[-20px]", // Moves up on hover
                },
                {
                  title: "Career-Focused Programs",
                  description:
                    "Find programs designed to enhance your career prospects and global opportunities.",
                  position: "bottom",
                  bg: "from-amber-500/10 to-orange-500/10",
                  gradientPosition: "bottom-4 left-4",
                  textMove:
                    "translate-y-[-20px] group-hover:translate-y-[20px]", // Moves down on hover
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="card-3d group h-full w-full"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-[#230344] text-white p-[1.6rem] md:p-8 rounded-2xl md:h-[300px] w-full relative overflow-hidden flex flex-col justify-between">
                    {/* Gradient Dot */}
                    <div
                      className={`absolute ${item.gradientPosition} w-24 h-32 bg-[#FBFFAD] rounded-full shadow-4xl blur-2xl opacity-40`}
                    ></div>

                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>

                    {/* Text Animation */}
                    <div
                      className={`relative z-10 transition-all duration-500 ${item.textMove}`}
                    >
                      <h3 className="text-2xl font-light mb-3 w-44">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm md:w-full w-52">
                        {item.description}
                      </p>
                    </div>

                    {/* Image Placement - Slowed Down Animation */}
                    <div
                      className={`absolute transition-all duration-[7000ms] ease-in-out group ${
                        item.position === "top"
                          ? "-top-3 -right-3"
                          : "-bottom-3 -right-3"
                      } w-32 h-32 flex items-center justify-center rounded-2xl ${
                        index !== 3
                          ? "group-hover:top-2 group-hover:-right-2 transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:opacity-90"
                          : ""
                      }`}
                    >
                      {/* Light Background */}
                      <div className="absolute w-full h-full bg-[#f5f5f5] rounded-bl-2xl rounded-tl-2xl transition-all duration-300 ease-in-out group-hover:opacity-0"></div>
                      {index === 1 ? (
                        // Render these elements only for the middle card
                        <>
                          <div className="absolute top-2 -left-8 group-hover:opacity-0">
                            <div className="w-8 h-8 bg-[#f5f5f5] rounded-l-full rounded-r-none ">
                              <div className="w-8 h-8 bg-[#230344] rounded-l-full rounded-t-none rotate-180"></div>
                            </div>
                          </div>
                          <div className="absolute top-[7.96874976rem] right-3 group-hover:opacity-0">
                            <div className="w-8 h-8 bg-[#f5f5f5] rounded-l-full rounded-r-none">
                              <div className="w-8 h-8 bg-[#230344] -rotate-90 rounded-r-full rounded-b-none"></div>
                            </div>
                          </div>
                        </>
                      ) : (
                        // Render a different element for the first and third card
                        <div>
                          <div className="absolute bottom-[0.7rem] -left-8 group-hover:opacity-0">
                            <div className="w-8 h-8 bg-[#f5f5f5] rounded-l-full rounded-r-none ">
                              <div className="w-8 h-8 bg-[#230344]  rounded-b-full rounded-l-none"></div>
                            </div>
                          </div>
                          <div className="absolute -top-[1.97578rem] right-3 group-hover:opacity-0">
                            <div className="w-8 h-[2.1rem] bg-[#f5f5f5] rounded-l-full rounded-r-none">
                              <div className="w-8 h-8  bg-[#230344]  rounded-b-full rounded-l-none"></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Image Container */}
                      <div className="relative w-24 h-24 flex items-center justify-center bg-[#230344] rounded-full">
                        <img
                          src={icons[index].src}
                          alt={item.title}
                          className="w-16 h-16"
                        />
                      </div>
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