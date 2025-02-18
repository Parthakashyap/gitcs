"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ImagesSliderDemo } from './ui/images-slider-demo';

export default function FourthSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = window.innerHeight * 2.5;
      setScrolled(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[30] ${
      scrolled ? "-translate-y-full" : "translate-y-0"
    }`}>
      <div className="absolute inset-0 bg-white">
        <div className="container mx-auto px-4 h-full">
          <div className="max-w-7xl mx-auto h-full flex items-center">
            <div className="grid grid-cols-2 gap-16 w-full">
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold text-purple-900 mb-2">WHO WE ARE</h2>
                  <p className="text-blue-500">Endless possibilities begin here</p>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are a team of dedicated education consultants passionate about helping students 
                  achieve their dream of studying abroad. With years of experience, we provide expert 
                  guidance, application assistance, and end-to-end support.
                </p>

                <div className="flex flex-wrap gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=150&auto=format&fit=crop" 
                    alt="University Logo 1"
                    className="h-16 w-auto object-contain"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=150&auto=format&fit=crop" 
                    alt="University Logo 2"
                    className="h-16 w-auto object-contain"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?q=80&w=150&auto=format&fit=crop" 
                    alt="University Logo 3"
                    className="h-16 w-auto object-contain"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=150&auto=format&fit=crop" 
                    alt="University Logo 4"
                    className="h-16 w-auto object-contain"
                  />
                </div>

                <Button className="bg-purple-900 text-white px-8 py-6 rounded-full text-lg hover:bg-purple-800 transition-colors">
                  Learn More About Us
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <ImagesSliderDemo/>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-900 rounded-full flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm">Years of<br />Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}