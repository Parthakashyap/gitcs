"use client";

import { ChevronDown, Menu, MoveDown } from "lucide-react";
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

  const topUniversity = [
    {
      title: "Havard University",
      date: "19 Jan, 2025",
      duration: "15 min",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=500&auto=format&fit=crop",
      degree: "Bachelor Degree",
      subtitle: "Bachelor of Science in Computer Science",
      location: "New York, USA",
    },
    {
      title: "Live Career Counseling",
      date: "15 Jan, 2025",
      duration: "15 min",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
      degree: "Bachelor Degree",
      subtitle: "Bachelor of Science in Computer Science",
      location: "New York, USA",
    },
    {
      title: "Success for Your Future",
      date: "10 Jan, 2025",
      duration: "25 min",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500&auto=format&fit=crop",
      degree: "Bachelor Degree",
      subtitle: "Bachelor of Science in Computer Science",
      location: "New York, USA",
    },
    {
      title: "Havard University",
      date: "19 Jan, 2025",
      duration: "15 min",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=500&auto=format&fit=crop",
      degree: "Bachelor Degree",
      subtitle: "Bachelor of Science in Computer Science",
      location: "New York, USA",
    },
    {
      title: "Live Career Counseling",
      date: "15 Jan, 2025",
      duration: "15 min",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop",
      degree: "Bachelor Degree",
      subtitle: "Bachelor of Science in Computer Science",
      location: "New York, USA",
    },
    {
      title: "Success for Your Future",
      date: "10 Jan, 2025",
      duration: "25 min",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=500&auto=format&fit=crop",
      degree: "Bachelor Degree",
      subtitle: "Bachelor of Science in Computer Science",
      location: "New York, USA",
    },
  ];

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
              <a href=" /mediaCommunity" className="hover:text-purple-400">
                Media & Community
              </a>
              <a href=" /aboutUs" className="hover:text-purple-400">
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-32">
              Shape Your Future with Expert <br />
              Career Guidance
            </h1>
            <div>
              <p className="text-white/90 text-xl ">Start Your Journey</p>
              <button
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
                className=" p-2 rounded-full  transition-colors"
              >
                <MoveDown className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#230344] mb-2">
              Explore Top Universities in the USA
            </h2>
            <p className="text-blue-500">
              We offer a wide range of programs to help students and
              professionals
              <br className="hidden md:block" />
              enhance their skills and career prospects.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {topUniversity.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-[#230344]/50 max-w-sm flex flex-col mx-auto"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-md font-bold text-gray-900">
                    {event.subtitle}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                    <span>🎓 {event.degree}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                    <span>⏳ {event.duration}</span>
                  </div>

                  {/* Bottom Section - Location & Button */}
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>📍 {event.location}</span>
                    </div>
                    <button className="text-[#230344] border border-[#230344] rounded-full px-4 py-2 text-sm font-semibold hover:bg-purple-100">
                      Enroll now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="border border-[#230344] text-[#230344] hover:bg-[#230344] hover:text-white rounded-full px-6 py-2">
            View all
          </button>
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
      <section className="md:pt-12 bg-gray-50 ">
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
