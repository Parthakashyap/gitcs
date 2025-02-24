"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { CarouselDemo } from "@/components/ui/carousel-demo";
import {  Menu } from "lucide-react";


export default function SummerProgram() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  const toggleProgram = (program: string) => {
    setExpandedProgram(expandedProgram === program ? null : program);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.height = "auto";
  }, []);
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#230344]/30">
        <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center px-6 md:px-[10%]">
          <div className="flex items-center gap-2">
            <img src="/images/Group.png" alt="logo" className="h-12 md:h-16 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-white text-sm">
            <a href="/" className="hover:text-purple-400">Home</a>
            <a href="/program" className="hover:text-purple-400">Program</a>
            <a href="/career" className="hover:text-purple-400">Career & Guidance</a>
            <a href="/studentResource" className="hover:text-purple-400">Student Resources</a>
            <a href="/mediaCommunity" className="hover:text-purple-400">Media & Community</a>
            <a href="/aboutUs" className="hover:text-purple-400">About Us</a>
          </div>

          <button className="hidden md:block bg-white text-[#230344] px-6 py-2 rounded-full hover:bg-purple-100 transition-colors">
            Contact
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#230344] p-6 flex flex-col items-center gap-4 text-white md:hidden">
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
          <button className="bg-white text-[#230344] px-6 py-2 rounded-full hover:bg-purple-100 transition-colors">
            Contact
          </button>
        </div>
        )}

        <div className="container mx-auto px-6 md:px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-32">
            Discover Programs That
            <br />
            Shape Your Future!
          </h1>
          <div className="relative flex items-center justify-center pt-32 w-24 h-24">
      {/* Rotating Text */}
      <div className="absolute w-full h-full animate-spin-slow">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <path
              id="circlePath"
              d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>
          <text fill="white" fontSize="12" letterSpacing="8">
            <textPath xlinkHref="#circlePath" startOffset="0%">
              Explore  Programs
            </textPath>
          </text>
        </svg>
      </div>

      {/* Button */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </button>
    </div>
        </div>
      </div>
    </section>

      {/* Comprehensive Programs Section */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#230344] mb-2">
        OUR COMPREHENSIVE PROGRAMS
      </h2>
      <p className="text-blue-500 text-sm md:text-base">
        We offer a wide range of programs designed to help students and
        professionals thrive
      </p>
      <p className="text-gray-500 text-sm md:text-base">
        Find the right career programs
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Student Development Program */}
      <div className="bg-[#2303441A] border-2 border-[#23034480] p-6 md:p-8 rounded-3xl">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
          Empowering Students for a Brighter Future
        </h3>
        <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
          Our student development programs are designed to build skills,
          confidence, and global competence.
        </p>
        <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <li className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 bg-[#230344] rounded-full"></div>
            <span>Leadership Training</span>
          </li>
          <li className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 bg-[#230344] rounded-full"></div>
            <span>Communication & Soft Skills Development</span>
          </li>
          <li className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 bg-[#230344] rounded-full"></div>
            <span>International Exposure Workshops</span>
          </li>
          <li className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 bg-[#230344] rounded-full"></div>
            <span>Research & Research Program</span>
          </li>
        </ul>
        <div className="flex justify-center">
          <button className="bg-[#230344] text-white px-5 py-2 rounded-full hover:bg-purple-800 transition">
            Join Now
          </button>
        </div>
      </div>

      {/* Teaching & Learning Program */}
      <div className="bg-[#2303441A] border-2 border-[#23034480] p-6 md:p-8 rounded-3xl">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
          Enhancing Teaching & Learning Excellence
        </h3>
        <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
          Our faculty development programs help educators stay updated
          with modern teaching techniques and methodologies.
        </p>
        <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <li className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 bg-[#230344] rounded-full"></div>
            <span>Advanced Teaching Techniques</span>
          </li>
          <li className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 bg-[#230344] rounded-full"></div>
            <span>Active Learning & E-Learning Tools</span>
          </li>
          <li className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 bg-[#230344] rounded-full"></div>
            <span>Research & Publications Training</span>
          </li>
          <li className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 bg-[#230344] rounded-full"></div>
            <span>Cross-Cultural Teaching Methods</span>
          </li>
        </ul>
        <div className="flex justify-center">
          <button className="bg-[#230344] text-white px-5 py-2 rounded-full hover:bg-purple-800 transition">
            Join Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Short-term Programs Section */}
      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
      <div>
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
          alt="Students in workshop"
          className="rounded-3xl w-full"
        />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#230344] mb-6">
          SHORT-TERM INTENSIVE LEARNING PROGRAMS
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Our summer and winter programs offer a unique opportunity for
          students to explore new subjects, cultures, and academic
          interests. Join us for an enriching experience that combines the
          best of academic learning, cultural immersion, and networking
          opportunities, setting them ideal for students looking to
          advance their education during semester breaks.
        </p>

        <div className="space-y-4">
          {[
            { id: "exchange", label: "International Exchange Programs", description: "Experience new academic environments and expand your global perspective through our exchange programs." },
            { id: "bootcamp", label: "Subject-Specific Bootcamps", description: "Intensive training programs focused on specific subjects and skills development." },
            { id: "cultural", label: "Cultural Immersion Programs", description: "Immerse yourself in different cultures while learning and growing academically." },
            { id: "certification", label: "Certification Courses", description: "Gain industry-recognized certifications to boost your career prospects." }
          ].map(({ id, label, description }) => (
            <div key={id} className="border-b-2 p-4 cursor-pointer" onClick={() => toggleProgram(id)}>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm md:text-base">{label}</span>
                <ArrowRight className={`w-5 h-5 transition-transform ${expandedProgram === id ? "rotate-90" : ""}`} />
              </div>
              {expandedProgram === id && (
                <p className="mt-2 text-sm text-gray-600">{description}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="mt-8 bg-[#230344] text-white hover:bg-purple-800">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#230344] mb-2">
        MASTER THE SKILLS OF TOMORROW
      </h2>
      <p className="text-blue-500">
        Enhance your skills with industry-relevant training and certifications
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Training Cards */}
      {[ 
        { title: "AI & Data Science Training", desc: "Master AI algorithms, machine learning, and data analytics through real-world applications." },
        { title: "Business & Entrepreneurship", desc: "Learn business strategy, startup development, strategies, and financial planning." },
        { title: "Creative & Design Thinking", desc: "Enhance your problem-solving skills through innovation and creativity workshops." },
        { title: "IT & Software Development Courses", desc: "Develop coding, cybersecurity, and software engineering skills to excel in the tech industry." }
      ].map((item, index) => (
        <div key={index} className="border-gray border-2 bg-white p-6 md:p-8 rounded-3xl">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <svg
              className="w-6 h-6 text-[#230344]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-4">{item.title}</h3>
          <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Journey Section */}
      <section className="py-20 bg-[#2E0B49] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          YOUR JOURNEY TOWARDS SUCCESS
        </h2>

        {/* Timeline Container */}
        <div className="relative max-w-md mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/50 -translate-x-1/2"></div>

          {/* Steps */}
          <div className="relative flex flex-col items-center space-y-16">
            {/* Step 1 (Right) */}
            <div className="relative flex items-center w-full">
              <div className="w-1/2"></div>
              <div className="w-4 h-4 bg-white rounded-full border border-white absolute left-1/2 -translate-x-1/2"></div>
              <div className="w-1/2 flex justify-start pl-6">
                <div className="bg-white/10 text-white px-6 py-2 rounded-lg shadow-lg backdrop-blur-md text-sm font-semibold">
                  1. Choose a Program
                </div>
              </div>
            </div>

            {/* Step 2 (Left) */}
            <div className="relative flex items-center w-full">
              <div className="w-1/2 flex justify-end pr-6">
                <div className="bg-white/10 text-white px-6 py-2 rounded-lg shadow-lg backdrop-blur-md text-sm font-semibold">
                  2. Apply & Enroll
                </div>
              </div>
              <div className="w-4 h-4 bg-white rounded-full border border-white absolute left-1/2 -translate-x-1/2"></div>
              <div className="w-1/2"></div>
            </div>

            {/* Step 3 (Right) */}
            <div className="relative flex items-center w-full">
              <div className="w-1/2"></div>
              <div className="w-4 h-4 bg-white rounded-full border border-white absolute left-1/2 -translate-x-1/2"></div>
              <div className="w-1/2 flex justify-start pl-6">
                <div className="bg-white/10 text-white px-6 py-2 rounded-lg shadow-lg backdrop-blur-md text-sm font-semibold">
                  3. Gain Skills & Certification
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-16">
          <button className="bg-white text-[#2E0B49] px-6 py-2 rounded-md font-semibold shadow-md border border-white hover:bg-gray-200 transition">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Circular Decorations */}
      <div className="absolute top-10 left-0 w-24 h-24 border border-white/20 rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-32 h-32 border border-white/20 rounded-full"></div>
    </section>

      {/* Success Stories Section */}
      <section className="pt-20 bg-gray-50 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#230344] mb-2">
              OUR STUDENT & FACULTY SUCCESS STORIES
            </h2>
            <p className="text-blue-500">
              Read what our community has to say about their experience
            </p>
          </div>

          <CarouselDemo />
        </div>
      </section>

      {/* Help Section */}
      <div className="mx-screen px-4 flex items-center justify-center mt-32 md:mt-0">
        <div className=" hidden md:block w-[40%]">
          <div className="bg-gray-50 p-6 rounded-lg mt-8 border-t-4 border-blue-500 shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
            Need Career Advice? Reach Out to Us!
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
      <section className="md:pt-12 bg-gray-50">
        <footer className="bg-[#1c1f2a] text-white ">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
              {/* Logo and Description */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Where will your studies take you?
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  At educations.com, we believe that students who study abroad
                  become the next generation of globally-minded adventurers and
                  leaders - and we want more of you to do it! Every year, our
                  search engine helps over 8 million students connect with some
                  of the best universities and schools around the world.
                </p>
              </div>
              <div className="md:hidden flex grid-cols-2 gap-8">
                {/* Company Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Blog & Updates
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Universities
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="hidden md:flex gap-8">
                {/* Company Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Blog & Updates
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Universities
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="tel:+918422016687"
                      className="text-gray-400 hover:text-white"
                    >
                      +91 84220-16687
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@careerthrive.in"
                      className="text-gray-400 hover:text-white"
                    >
                      info@careerthrive.in
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/918422016687"
                      className="text-gray-400 hover:text-white"
                    >
                      WhatsApp: +91 84220-16687
                    </a>
                  </li>
                  <li className="text-gray-400">
                    Surat | Mumbai | Pune | Bangalore | Ahmedabad
                  </li>
                  <li className="text-gray-400">
                    Online sessions are also available
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex gap-6 mb-6 md:mb-0">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
