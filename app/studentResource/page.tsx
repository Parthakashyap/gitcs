"use client";

import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function StudentResourcesPage() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  const toggleProgram = (program: string) => {
    setExpandedProgram(expandedProgram === program ? null : program);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.height = "auto";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}

      <section className="relative h-screen bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#230344]/50">
          <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center px-6 md:px-[10%]">
            <div className="flex items-center gap-2">
              <img
                src="/images/Group.png"
                alt="logo"
                className="h-12 md:h-16 w-auto"
              />
            </div>

            {/* Desktop Menu */}
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

            <button className="hidden md:block bg-white text-[#230344] px-6 py-2 rounded-full hover:bg-purple-100 transition-colors">
              Contact
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>

          {/* Mobile Menu */}
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
              <button className="bg-white text-[#230344] px-6 py-2 rounded-full hover:bg-purple-100 transition-colors">
                Contact
              </button>
            </div>
          )}

          <div className="container mx-auto px-6 md:px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Your Gateway to Academic &<br />
              Career Success
            </h1>
            <div className=" flex items-center justify-center w-24 h-24 absolute bottom-6">
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
              Explore  Resources
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

      {/* Resources Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#230344] mb-2">
              STUDENT RESOURCES OVERVIEW SECTION
            </h2>
            <p className="text-blue-500 text-sm sm:text-base">
              We provide a variety of tools, forms, and communities to help
              students excel in academics and
              <br className="hidden sm:block" />
              career planning
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* University Application Forms */}
            <div className="bg-white p-6 sm:p-8 border-2 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-[#230344]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                University Application Forms
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Access application forms for top universities worldwide, along
                with step-by-step guidance.
              </p>
              <Button className="bg-[#230344] text-white hover:bg-purple-800">
                Download Forms
              </Button>
            </div>

            {/* Upcoming Exams */}
            <div className="bg-white p-6 sm:p-8 border-2 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-[#230344]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Upcoming Exams
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Get schedules, registration details, and preparation tips for
                standardized tests.
              </p>
              <Button className="bg-[#230344] text-white hover:bg-purple-800">
                View Exam Schedule
              </Button>
            </div>

            {/* IdealUp Program */}
            <div className="bg-white p-6 sm:p-8 border-2 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-[#230344]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                IdealUp (For 11 & 12 Grade, For UG Students)
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Providing academic support, career mentorship, and
                skill-building workshops.
              </p>
              <Button className="bg-[#230344] text-white hover:bg-purple-800">
                Learn More
              </Button>
            </div>

            {/* Student Clubs */}
            <div className="bg-white p-6 sm:p-8 border-2 rounded-3xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-[#230344]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Student Clubs
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Join student-run clubs for academic excellence, extracurricular
                activities, and networking.
              </p>
              <Button className="bg-[#230344] text-white hover:bg-purple-800">
                Join a Club
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pathway Section */}
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
                <div className="w-32 h-32 bg-gradient-to-t from-white/50 to-white/10 rounded-full absolute blur-[1px]"/>

                  <div className="bg-white/10 text-white px-6 py-2 rounded-lg shadow-lg backdrop-blur-md text-sm font-semibold">
                    1. Choose a Program
                  </div>
                </div>
              </div>

              {/* Step 2 (Left) */}
              <div className="relative flex items-center w-full">
                <div className="w-1/2 flex justify-end pr-6">
                <div className="w-32 h-32 bg-gradient-to-t from-white/50 to-white/10 rounded-full absolute left-2 blur-[1px]"/>

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
                <div className="w-32 h-32 bg-gradient-to-t from-white/50 to-white/10 rounded-full absolute right-2 blur-[1px]"/>

                  <div className="bg-white/10 text-white px-6 py-2 rounded-lg shadow-lg backdrop-blur-md text-sm font-semibold">
                    3. Gain Skills & Certification
                  </div>
                </div>
              </div>

{/* Step 4 (Left) */}
<div className="relative flex items-center w-full">
                <div className="w-1/2 flex justify-end pr-6">
                <div className="w-32 h-32 bg-gradient-to-t from-white/50 to-white/10 rounded-full absolute  blur-[1px]"/>

                  <div className="bg-white/10 text-white px-6 py-2 rounded-lg shadow-lg backdrop-blur-md text-sm font-semibold">
                    2. Apply & Enroll
                  </div>
                </div>
                <div className="w-4 h-4 bg-white rounded-full border border-white absolute left-1/2 -translate-x-1/2"></div>
                <div className="w-1/2"></div>
              </div>
              
            </div>
          </div>

          {/* Button */}
          <div className="mt-16">
            <button className="bg-white text-[#230344] px-6 py-2 rounded-md font-semibold shadow-md border border-white hover:bg-gray-200 transition">
              Get Started Now
            </button>
          </div>
        </div>

        {/* Circular Decorations */}
        <div className="absolute top-10 left-0 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-0 w-32 h-32 border border-white/20 rounded-full"></div>
      </section>

      {/* Help Section */}
      <div className="mx-screen px-4 flex items-center justify-center mt-32 md:mt-0 absolute w-full">
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
      <section className="md:pt-32">
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
