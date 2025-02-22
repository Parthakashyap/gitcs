"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlobeDemo } from "./ui/globeDemo";

export default function ContactSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = window.innerHeight * 5;
      setScrolled(offset > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[10] ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="absolute inset-0 bg-white">
        <div className="max-w-9xl mx-auto px-6 pl-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Form Section */}
            <div className="space-y-8">
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
            <div className="hidden -mt-60 md:flex justify-center">
              <GlobeDemo/>
            </div>
          </div>

          {/* Counseling Pathway Section */}
          <div className=" hidden md:block max-w-lg mx-auto md:absolute md:left-1/2 md:bottom-0 md:transform md:-translate-x-1/2 w-full">
            <div className="bg-gray-50 p-6 rounded-lg mt-8 border-t-4 border-blue-500 shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
                Get your counseling pathway
              </h3>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-3 border rounded-md"
                />
                <Button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
