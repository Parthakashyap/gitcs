"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <section
      className={cn(
        "fixed w-full h-screen transition-transform duration-700 ease-in-out z-[60]",
        scrolled ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        ></div>

        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="/images/Group.png"
                alt="logo"
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex gap-8 text-white text-sm">
              <a href="/" className="hover:text-purple-400">
                Home
              </a>
              <a href="/program" className="hover:text-purple-400">
                Program
              </a>
              <a href="/career" className="hover:text-purple-400">
                Career & Guidance
              </a>
              <a href="/studentResource" className="hover:text-purple-400">
                Student Resources
              </a>
              <a href="/mediaCommunity" className="hover:text-purple-400">
                Media & Community
              </a>
              <a href="/aboutUs" className="hover:text-purple-400">
                About Us
              </a>
            </div>
            <button className="hidden md:block bg-white text-purple-900 px-6 py-2 rounded-full hover:bg-purple-100 transition-colors">
              Contact
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-[#230344]/90 p-6 flex flex-col items-center gap-4 text-white md:hidden">
              <a href="/" className="hover:text-purple-400">
                Home
              </a>
              <a href="/program" className="hover:text-purple-400">
                Program
              </a>
              <a href="/career" className="hover:text-purple-400">
                Career & Guidance
              </a>
              <a href="/studentResource" className="hover:text-purple-400">
                Student Resources
              </a>
              <a href="/mediaCommunity" className="hover:text-purple-400">
                Media & Community
              </a>
              <a href="/aboutUs" className="hover:text-purple-400">
                About Us
              </a>
              <button className="bg-white text-purple-900 px-6 py-2 rounded-full hover:bg-purple-100 transition-colors">
                Contact
              </button>
            </div>
          )}

          <div className="text-center text-white mt-20">
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Attend CT's Biggest
              <br />
              Australia Education Fair
            </h1>
          </div>

          <div className="absolute bottom-20 left-0 right-0">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-40 text-white text-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-semibold mb-2">
                    {counts.visa}%
                  </span>
                  <span className="text-xs md:text-sm uppercase tracking-wider">
                    VISA GRANT (2023-24)
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-semibold mb-2">
                    {counts.service}x7
                  </span>
                  <span className="text-xs md:text-sm uppercase tracking-wider">
                    SERVICE
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-semibold mb-2">
                    {counts.rating}★
                  </span>
                  <span className="text-xs md:text-sm uppercase tracking-wider">
                    GOOGLE RATING
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-semibold mb-2">
                    {counts.students}+
                  </span>
                  <span className="text-xs md:text-sm uppercase tracking-wider">
                    Students Abroad
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleScrollDown}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
