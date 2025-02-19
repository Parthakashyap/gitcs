"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { CarouselDemo } from "@/components/ui/carousel-demo";

export default function SummerProgram() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  const toggleProgram = (program: string) => {
    setExpandedProgram(expandedProgram === program ? null : program);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-purple-900/30">
          <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center px-[10%]">
            <div className="flex items-center gap-2">
              <img src="/images/Group.png" alt="logo" className="h-16 w-auto" />
            </div>
            <div className="hidden md:flex gap-8 text-white text-sm">
              <a href="#" className="hover:text-purple-400">
                Home
              </a>
              <a href="/program" className="hover:text-purple-400">
                Program
              </a>
              <a href="#" className="hover:text-purple-400">
                Career & Guidance
              </a>
              <a href="#" className="hover:text-purple-400">
                Student Resources
              </a>
              <a href="#" className="hover:text-purple-400">
                Media & Community
              </a>
              <a href="#" className="hover:text-purple-400">
                About Us
              </a>
            </div>
            <button className="hidden md:block bg-white text-purple-900 px-6 py-2 rounded-full hover:bg-purple-100 transition-colors">
              Contact
            </button>
          </nav>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-7xl font-bold text-white mb-6">
              Discover Programs That
              <br />
              Shape Your Future!
            </h1>
            <button
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
              className="mt-12 p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ChevronDown className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Comprehensive Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-900 mb-2">
              OUR COMPREHENSIVE PROGRAMS
            </h2>
            <p className="text-blue-500">
              We offer a wide range of programs designed to help students and
              professionals thrive
            </p>
            <p className="text-gray-500">Find the right career programs</p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Student Development Program */}
            <div className="bg-[#2303441A] border-2 border-[#23034480] p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">
                Empowering Students for a Brighter Future
              </h3>
              <p className="text-gray-600 mb-6">
                Our student development programs are designed to build skills,
                confidence, and global competence.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-purple-900 rounded-full"></div>
                  <span>Leadership Training</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-purple-900 rounded-full"></div>
                  <span>Communication & Soft Skills Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-purple-900 rounded-full"></div>
                  <span>International Exposure Workshops</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-purple-900 rounded-full"></div>
                  <span>Research & Research Program</span>
                </li>
              </ul>
              <div className="flex justify-center">
                <Button className="bg-purple-900 text-white hover:bg-purple-800">
                  Join Now
                </Button>
              </div>
            </div>

            {/* Teaching & Learning Program */}
            <div className="bg-[#2303441A] border-2 border-[#23034480] p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">
                Enhancing Teaching & Learning Excellence
              </h3>
              <p className="text-gray-600 mb-6">
                Our faculty development programs help educators stay updated
                with modern teaching techniques and methodologies.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-purple-900 rounded-full"></div>
                  <span>Advanced Teaching Techniques</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-purple-900 rounded-full"></div>
                  <span>Active Learning & E-Learning Tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-purple-900 rounded-full"></div>
                  <span>Research & Publications Training</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-purple-900 rounded-full"></div>
                  <span>Cross-Cultural Teaching Methods</span>
                </li>
              </ul>
              <div className="flex justify-center">
                <Button className="bg-purple-900 text-white hover:bg-purple-800">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short-term Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                alt="Students in workshop"
                className="rounded-3xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-purple-900 mb-6">
                SHORT-TERM INTENSIVE LEARNING PROGRAMS
              </h2>
              <p className="text-gray-600 mb-8">
                Our summer and winter programs offer a unique opportunity for
                students to explore new subjects, cultures, and academic
                interests. Join us for an enriching experience that combines the
                best of academic learning, cultural immersion, and networking
                opportunities, setting them ideal for students looking to
                advance their education during semester breaks.
              </p>

              <div className="space-y-4">
                <div
                  className="border-b-2 p-4 cursor-pointer"
                  onClick={() => toggleProgram("exchange")}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">
                      International Exchange Programs
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform ${
                        expandedProgram === "exchange" ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {expandedProgram === "exchange" && (
                    <p className="mt-2 text-sm text-gray-600">
                      Experience new academic environments and expand your
                      global perspective through our exchange programs.
                    </p>
                  )}
                </div>

                <div
                  className="p-4  border-b-2"
                  onClick={() => toggleProgram("bootcamp")}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">
                      Subject-Specific Bootcamps
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform ${
                        expandedProgram === "bootcamp" ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {expandedProgram === "bootcamp" && (
                    <p className="mt-2 text-sm text-gray-600">
                      Intensive training programs focused on specific subjects
                      and skills development.
                    </p>
                  )}
                </div>

                <div
                  className="border-b-2 p-4 "
                  onClick={() => toggleProgram("cultural")}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">
                      Cultural Immersion Programs
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform ${
                        expandedProgram === "cultural" ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {expandedProgram === "cultural" && (
                    <p className="mt-2 text-sm text-gray-600">
                      Immerse yourself in different cultures while learning and
                      growing academically.
                    </p>
                  )}
                </div>

                <div
                  className="p-4  border-b-2"
                  onClick={() => toggleProgram("certification")}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Certification Courses</span>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform ${
                        expandedProgram === "certification" ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {expandedProgram === "certification" && (
                    <p className="mt-2 text-sm text-gray-600">
                      Gain industry-recognized certifications to boost your
                      career prospects.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <Button className="mt-8 bg-purple-900 text-white hover:bg-purple-800">
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
            <h2 className="text-4xl font-bold text-purple-900 mb-2">
              MASTER THE SKILLS OF TOMORROW
            </h2>
            <p className="text-blue-500">
              Enhance your skills with industry-relevant training and
              certifications
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* AI & Data Science */}
            <div className="border-gray border-2 bg-white p-8 rounded-3xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-purple-900"
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
              <h3 className="text-xl font-bold mb-4">
                AI & Data Science Training
              </h3>
              <p className="text-gray-600">
                Master AI algorithms, machine learning, and data analytics
                through real-world applications.
              </p>
            </div>

            {/* Business & Entrepreneurship */}
            <div className="border-gray border-2 bg-white p-8 rounded-3xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-purple-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Business & Entrepreneurship
              </h3>
              <p className="text-gray-600">
                Learn business strategy, startup development, strategies, and
                financial planning.
              </p>
            </div>

            {/* Creative & Design Thinking */}
            <div className="border-gray border-2 bg-white p-8 rounded-3xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-purple-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Creative & Design Thinking
              </h3>
              <p className="text-gray-600">
                Enhance your problem-solving skills through innovation and
                creativity workshops.
              </p>
            </div>

            {/* IT & Software Development */}
            <div className="border-gray border-2 bg-white p-8 rounded-3xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-purple-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">
                IT & Software Development Courses
              </h3>
              <p className="text-gray-600">
                Develop coding, cybersecurity, and software engineering skills
                to excel in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              YOUR JOURNEY TOWARDS SUCCESS
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2"></div>

            <div className="space-y-24 relative">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm relative z-10">
                  1
                </div>
                <div className="flex-1 bg-white/5 backdrop-blur-sm p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">Choose a Program</h3>
                  <p className="text-white/80">
                    Browse our comprehensive range of programs and select the
                    one that aligns with your goals.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm relative z-10">
                  2
                </div>
                <div className="flex-1 bg-white/5 backdrop-blur-sm p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">Apply & Enroll</h3>
                  <p className="text-white/80">
                    Complete the application process and secure your spot in the
                    program.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm relative z-10">
                  3
                </div>
                <div className="flex-1 bg-white/5 backdrop-blur-sm p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-2">
                    Gain Skills & Certification
                  </h3>
                  <p className="text-white/80">
                    Learn from experts, complete your coursework, and earn your
                    certification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button className="bg-white text-purple-900 hover:bg-gray-100">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="pt-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-900 mb-2">
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
      <div className="mx-screen px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-gray-200 border-t-4 border-blue-600 p-8 rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            Need Guidance? We're Here to Help!
          </h3>
          <p className="text-gray-600 mb-6">
            Let us help you choose the right program
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
            >
              Learn More
            </Button>
            <Button className="bg-purple-900 text-white hover:bg-purple-800">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <section className="py-12 bg-gray-50">
        <footer className="bg-[#1c1f2a] text-white h-screen">
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
