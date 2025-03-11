"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WorldMap from "./worldMap";

export default function ContactSection() {
  // Controls for the different animations
  const titleControls = useAnimation();
  const formControls = useAnimation();
  const mapControls = useAnimation();
  
  // Refs to detect when elements are in view
  const [titleRef, titleInView] = useInView({ 
    threshold: 0.1,
    triggerOnce: false 
  });
  const [formRef, formInView] = useInView({ 
    threshold: 0.1,
    triggerOnce: false 
  });
  const [mapRef, mapInView] = useInView({ 
    threshold: 0.1,
    triggerOnce: false 
  });

  // Effect to control animations based on scroll
  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    } else {
      titleControls.start("hidden");
    }
    
    if (formInView) {
      formControls.start("visible");
    } else {
      formControls.start("hidden");
    }
    
    if (mapInView) {
      mapControls.start("visible");
    } else {
      mapControls.start("hidden");
    }
  }, [titleInView, formInView, mapInView, titleControls, formControls, mapControls]);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
    }
  };

  const mapVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <section className="mt-6 mb-6">
      <div className="bg-white">
        <div className="max-w-9xl mx-auto px-6 md:pl-10 pl-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center relative">
            {/* Contact Form Section */}
            <motion.div 
              ref={formRef}
              animate={formControls}
              initial="hidden"
              variants={formVariants}
              className="space-y-8 w-full md:w-[90%] md:pl-24"
            >
              <div className="space-y-4">
                <motion.div
                  ref={titleRef}
                  animate={titleControls}
                  initial="hidden"
                  variants={titleVariants}
                >
                  <p className="text-sm text-gray-600 uppercase">
                    Send us an email
                  </p>
                  <h2 className="text-3xl md:text-4xl font-semibold py-2">
                    Got a question? Ask our team!
                  </h2>
                  <div className="w-24 h-[.15rem] bg-[#1F94F3]"></div>
                  <p className="hidden md:block text-gray-600 py-4">
                    Fill out the contact form, and we will get back to you with the
                    right answer.
                  </p>
                </motion.div>
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
            </motion.div>

            {/* Map Section */}
            <motion.div
              ref={mapRef}
              animate={mapControls}
              initial="hidden"
              variants={mapVariants}
              className="w-full"
            >
              <WorldMap />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}