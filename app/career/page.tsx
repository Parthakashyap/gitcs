"use client";

import { ChevronDown, Menu, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import woMan from "@/public/images/wo-man.png";
import career1 from "@/public/images/Frame206.png";
import career2 from "@/public/images/Frame207.png";
import career3 from "@/public/images/Frame208.png";

export default function Career() {
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
        <div className="absolute inset-0 bg-[#230344]/60">
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

            <button className="hidden md:block bg-white text-purple-900 px-6 py-2 rounded-full hover:bg-purple-100 transition-colors">
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
            <h1 className="md:text-7xl text-5xl font-bold text-white mb-32">
              Shape Your Future with Expert
              <br />
              Career Guidance
            </h1>
            <div className="absolute bottom-6">
              <p className="text-white/90 text-xl ">
                Start Your Journey
              </p>
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

      {/* Online Career Counseling Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#230344] mb-2">
              ONLINE CAREER COUNSELING
            </h2>
            <p className="text-blue-500 text-base md:text-lg">
              We offer a wide range of programs to help students and
              <br className="hidden md:block" /> professionals enhance their
              skills and career prospects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#230344] mb-6">
                EXPERT GUIDANCE FOR
                <br className="hidden md:block" />
                YOUR CAREER PATH
              </h3>
              <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                Get personalized career counseling from experienced
                professionals to explore career options, study paths, and skill
                development opportunities.
              </p>
              <ul className="space-y-4 md:space-y-6 mb-6 md:mb-8">
  {[
    "One-on-one virtual counseling sessions",
    "Career roadmap planning",
    "Industry-specific guidance",
    "College and university recommendations",
  ].map((item, index, arr) => (
    <li key={index} className="flex items-start gap-3 md:gap-4">
      {/* Dot & Line Container */}
      <div className="relative flex flex-col items-center">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#230344]"></div>
        {index !== arr.length - 1 && (
          <div className="w-0.5 bg-[#230344] h-4 md:h-6 lg:h-8 absolute top-full"></div>
        )}
      </div>
      {/* Text */}
      <span className="text-sm md:text-base">{item}</span>
    </li>
  ))}
</ul>

              <div className="flex justify-center md:justify-start">
                <Button className="bg-[#230344] text-white hover:bg-purple-800 px-6 py-2 md:px-8 md:py-3">
                  Join Now
                </Button>
              </div>
            </div>

            <div>
            <Image
    src={woMan}
    alt="Career Guidance"
    className="rounded-3xl shadow-xl w-full max-w-lg mx-auto"
  />
            </div>
          </div>
        </div>
      </section>

      {/* Career Fair Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#230344] text-center mb-12 md:mb-16">
            ONLINE CAREER FAIR / UNIVERSITY FAIR
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                img: career1,
                alt: "Live Sessions",
                text: "Live sessions with university officers",
              },
              {
                img: career2,
                alt: "Career Fair",
                text: "Career fair networking with industry experts",
              },
              {
                img: career3,
                alt: "Scholarship Info",
                text: "Scholarship and funding information",
              },
            ].map((item, index) => (
              <div key={index} className="col-span-1">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-span-1 flex flex-col justify-center text-center lg:text-left">
              <h3 className="text-lg md:text-xl font-bold text-[#230344]/80 mb-4">
                CONNECT WITH GLOBAL UNIVERSITIES AND EMPLOYERS
              </h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Participate in virtual career and university fairs to meet
                representatives from top institutions and companies.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button className="bg-[#230344] text-white hover:bg-purple-800 px-6 py-2 md:px-8 md:py-3">
                  Join the Fair
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Assessment Section */}
      <section className="md:py-20 pt-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#230344] mb-4">
              CAREER ASSESSMENT TEST
            </h2>
            <p className="text-blue-500 text-sm md:text-base leading-relaxed">
              Take our career assessment test to identify your skills,
              interests,
              <br className="hidden md:block" />
              and potential career paths.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:gap-32 gap-8 mt-8 items-center">
        {/** Step 1 */}
        <div className="relative flex flex-col items-center justify-center border-[3px] border-[#1B005D] rounded-full w-60 h-60 p-6 text-center">
          <div className="absolute -top-4 left-[65%] transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-[#1B005D] text-white text-lg font-bold rounded-full">
            1
          </div>
          <p className="mt-6 text-[#1B005D] text-sm font-bold md:text-base">
            Scientifically designed aptitude and personality assessments
          </p>
        </div>

        {/** Step 2 */}
        <div className="relative flex flex-col items-center justify-center border-[3px] border-[#1B005D] rounded-full w-60 h-60 p-6 text-center">
          <div className="absolute -top-4 left-[65%] transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-[#1B005D] text-white text-lg font-bold rounded-full">
            2
          </div>
          <p className="mt-6 text-[#1B005D] text-sm font-bold md:text-base">
            Detailed career suggestions and report analysis
          </p>
        </div>

        {/** Step 3 */}
        <div className="relative flex flex-col items-center justify-center border-[3px] border-[#1B005D] rounded-full w-60 h-60 p-6 text-center">
          <div className="absolute -top-4 left-[65%] transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-[#1B005D] text-white text-lg font-bold rounded-full">
            3
          </div>
          <p className="mt-6 text-[#1B005D] text-sm font-bold md:text-base">
            Personalized study and career recommendations
          </p>
        </div>
      </div>
        </div>
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
      <section className="md:pt-32 ">
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
