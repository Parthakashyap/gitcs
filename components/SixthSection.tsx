"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = window.innerHeight * 4.5;
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
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Contact Form Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm text-gray-600 uppercase">
                  Send us an email
                </p>
                <h2 className="text-3xl font-semibold">
                  Got a question? Ask our team!
                </h2>
                <p className="text-gray-600">
                  Fill out the contact form and we will get back to you with the
                  right answer.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="p-3 border rounded-md bg-gray-50"
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="p-3 border rounded-md bg-gray-50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="p-3 border rounded-md bg-gray-50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone*"
                    className="p-3 border rounded-md bg-gray-50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select className="p-3 border rounded-md bg-gray-50">
                    <option value="">State of residence</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="p-3 border rounded-md bg-gray-50"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border rounded-md bg-gray-50"
                />
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Image Section */}
            <div className="hidden md:block">


            </div>


            <div className="absolute left-1/2 w-[36%] bottom-0 transform -translate-x-1/2">
              {/* Counseling Pathway Section */}
              <div className="bg-gray-50 p-6  rounded-lg mt-8 border-t-4 border-blue-500">
                <h3 className="text-lg font-semibold mb-4">
                  Get your counseling pathway
                </h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 p-3 border rounded-md"
                  />
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 rounded-md">
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
