"use client";

import { useEffect, useState } from "react";

export default function SecondSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = window.innerHeight * 1.5;
      setScrolled(offset > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <section
      className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[50] ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="absolute inset-0 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className=" mb-16">
              <h2 className="md:text-6xl text-4xl font-bold md:mb-6 mb-2">
                WHY STUDY ABROAD WITH US
              </h2>
              <p className="text-blue-600 max-w-2xl mb-2">
                Professional-Streamlined-Simple
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 -mt-16 md:-mt-0 relative">
              {[
                {
                  title: "Expert Guidance & Support",
                  description:
                    "Our experienced advisors assist you every step of the way, from application to arrival.",
                  icon: "🎓",
                  position: "bottom",
                  bg: "from-purple-500/10 to-blue-500/10",
                },
                {
                  title: "Wide Range of Study Destinations",
                  description:
                    "Choose from top universities across multiple countries worldwide.",
                  icon: "🌍",
                  position: "top",
                  bg: "from-green-500/10 to-teal-500/10",
                },
                {
                  title: "Career-Focused Programs",
                  description:
                    "Find programs designed to enhance your career prospects and global opportunities.",
                  icon: "💼",
                  position: "bottom",
                  bg: "from-amber-500/10 to-orange-500/10",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="card-3d group h-full w-full"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white p-[1.6rem] md:p-8 rounded- md:h-[300px] w-full  relative overflow-hidden flex flex-col justify-between">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-light mb-3 w-44">{item.title}</h3>
                      <p className="text-white/70 text-sm w-52">
                        {item.description}
                      </p>
                    </div>

                    {/* Icon Placement */}
                    <div
                      className={`absolute transition-all duration-300 ease-in-out group ${
                        item.position === "top"
                          ? "-top-3 -right-3"
                          : "-bottom-3 -right-3"
                      } w-32 h-32 flex items-center justify-center rounded-2xl ${
                        index !== 3
                          ? "group-hover:top-2 group-hover:-right-2 transform group-hover:-translate-x-1 group-hover:-translate-y-1"
                          : ""
                      }`}
                    >
                      {/* Light Background */}
                      <div className="absolute w-full h-full bg-[#f5f5f5] rounded-2xl transition-all duration-300 ease-in-out group-hover:opacity-0"></div>

                      {/* Icon Container */}
                      <div className="relative w-24 h-24 flex items-center justify-center bg-[#372749] rounded-full">
                        <span className="text-6xl">{item.icon}</span>
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
