"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselDemo } from './ui/carousel-demo';

export default function FifthSection() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = window.innerHeight * 4;
      setScrolled(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "ANKIT",
      university: "Arizona State University, USA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
      text: "Grateful to Richard Sir and the entire SIO Team, for making my dream to study in the US come true. Their understanding and efforts to find matching scholarships, they helped me every step of the way. They even helped me to fill in my visa application, also to look for accommodation, and connected me with previous students as well. I highly recommend any aspirant to go with SIO, since they have the best team and treat every student with utmost sincerity. Cheers to SIO!"
    },
    {
      id: 2,
      name: "ANSHITA PASARI",
      university: "The University of Sheffield, UK",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
      text: "Grateful to Richard Sir and the entire SIO Team, for making my dream to study in the UK come true. Their understanding and efforts to find matching scholarships, they helped me every step of the way. They even helped me to fill in my visa application, also to look for accommodation, and connected me with previous students as well. I highly recommend any aspirant to go with SIO, since they have the best team and treat every student with utmost sincerity. Cheers to SIO!"
    },
    {
      id: 3,
      name: "ABHISHEK KUMAR",
      university: "Deakin University, Canada",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
      text: "Grateful to Richard Sir and the entire SIO Team, for making my dream to study in Canada come true. Their understanding and efforts to find matching scholarships, they helped me every step of the way. They even helped me to fill in my visa application, also to look for accommodation, and connected me with previous students as well. I highly recommend any aspirant to go with SIO, since they have the best team and treat every student with utmost sincerity. Cheers to SIO!"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev % testimonials.length) + 1);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 1 ? testimonials.length : prev - 1));
  };

  return (
    <section className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[20] ${
      scrolled ? "-translate-y-full" : "translate-y-0"
    }`}>
      <div className="absolute inset-0 bg-white">
        <div className="container mx-auto px-4 h-full">
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
            <div className="text-center mb-2">
              <h2 className="text-5xl font-bold text-purple-900 mb-2">STUDENT SUCCESS STORIES</h2>
              <p className="text-blue-500">Endless possibilities begin here</p>
            </div>

            <div className="relative">
              
              <div className='mt-8 md:mt-0 md:-mb-32'>
              <CarouselDemo/>
              </div>



              <div className="hidden md:grid grid-cols-4 gap-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500&auto=format&fit=crop"
                  alt="Students 1"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=500&auto=format&fit=crop"
                  alt="Students 2"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop"
                  alt="Students 3"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=500&auto=format&fit=crop"
                  alt="Students 4"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}