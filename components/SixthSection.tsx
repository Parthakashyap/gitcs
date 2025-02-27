"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlobeDemo } from "./ui/globeDemo";

export default function ContactSection() {
  const [scrollState, setScrollState] = useState({
    visible: false,
    exiting: false
  });
  
  // Additional state for animation triggers
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const entranceThreshold = window.innerHeight * 4; // Threshold to enter (after fifth section)
      const exitThreshold = window.innerHeight * 5; // Original threshold to exit
      
      // Determine if section should be visible or exiting
      if (offset > entranceThreshold && offset < exitThreshold) {
        setScrollState({ visible: true, exiting: false });
        // Trigger content animation after a short delay when section becomes visible
        setTimeout(() => setContentVisible(true), 300);
      } else if (offset >= exitThreshold) {
        setScrollState({ visible: true, exiting: true });
        setContentVisible(false);
      } else {
        setScrollState({ visible: false, exiting: false });
        setContentVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[10] ${
        !scrollState.visible ? "translate-y-full" : // Initially below viewport
        scrollState.exiting ? "-translate-y-full" : // Exit animation (same as original)
        "translate-y-0" // Visible position
      }`}
    >
      <div className="absolute inset-0 bg-white">
        <div className="max-w-9xl mx-auto px-6 pl-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center relative">
            {/* Contact Form Section */}
            <div 
              className={`space-y-8 w-full md:w-[90%] md:pl-24 transition-all duration-1000 
                ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
            >
              <div className="space-y-4">
                <p className="text-sm text-gray-600 uppercase">
                  Send us an email
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Got a question? Ask our team!
                </h2>
                <div className="w-24 h-[.15rem] bg-[#1F94F3]"></div>
                <p className="hidden md:block text-gray-600">
                  Fill out the contact form, and we will get back to you with the
                  right answer.
                </p>
              </div>

              <form className="space-y-2 md:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-full p-3 border rounded-md bg-gray-50"
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full p-3 border rounded-md bg-gray-50"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full p-3 border rounded-md bg-gray-50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone*"
                    className="w-full p-3 border rounded-md bg-gray-50"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="w-full p-3 border rounded-md bg-gray-50">
                    <option value="">State of residence</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 border rounded-md bg-gray-50"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border rounded-md bg-gray-50"
                />
                <div className="flex justify-center">
                <Button className="w-full md:w-auto bg-[#230344] hover:bg-purple-900 text-white px-6 py-3 rounded-3xl">
                  Send Message
                </Button>
                </div>
              </form>
            </div>

            {/* Image Section */}
            <div 
              className={`hidden -mt-40 md:flex justify-center transition-all duration-1000
                ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
            >
              <GlobeDemo/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}