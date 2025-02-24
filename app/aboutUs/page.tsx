"use client";

import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ImagesSliderDemo } from "@/components/ui/images-slider-demo";
import Image from "next/image";
import uni1 from "@/public/images/Uni1.png";
import uni2 from "@/public/images/Uni2.png";
import uni3 from "@/public/images/Uni3.png";
import uni4 from "@/public/images/Uni4.png";
import { GlobeDemo } from "@/components/ui/globeDemo";

export default function AboutUsPage() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const teamMembers = [
    {
      name: "Adam Williams",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Rachel McDermott",
      role: "Co-Founder & Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Eve Williams",
      role: "Co-Founder & CMO",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    },
  ];

  const universityPartners = [
    {
      name: "Oxford University",
      logo: uni1,
    },
    {
      name: "Yale University",
      logo: uni2,
    },
    {
      name: "University of Auckland",
      logo: uni3,
    },
    {
      name: "University of Sydney",
      logo: uni4,
    },
  ];

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
            <div className="absolute top-16 left-0 w-full bg-black/90 p-6 flex flex-col items-center gap-4 text-white md:hidden">
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
              <a href="aboutUs" className="hover:text-purple-400">
                About Us
              </a>
              <button className="bg-white text-[#230344] px-6 py-2 rounded-full hover:bg-purple-100 transition-colors">
                Contact
              </button>
            </div>
          )}

          <div className="container mx-auto px-6 md:px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="md:text-7xl text-5xl font-bold text-white mb-32">
              Empowering Global Learners
              <br />
              for a Brighter Future
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
                  <text fill="white" fontSize="12" letterSpacing="14">
                    <textPath xlinkHref="#circlePath" startOffset="0%">
                      Explore More
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Button */}
              <button
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
                className="absolute flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                <ChevronDown className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="text-center md:text-left">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#230344]">
                    WHO WE ARE
                  </h2>
                  <p className="text-[#1F94F3] mb-2">
                    Endless possibilities begin here
                  </p>
                </div>

                <p className="text-black text-base md:text-lg leading-relaxed">
                  We are a team of dedicated education consultants passionate
                  about helping students achieve their dream of studying abroad.
                  With years of experience, we provide expert guidance,
                  application assistance, and end-to-end support.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                  {[
                    "/images/Uni1.png",
                    "/images/Uni2.png",
                    "/images/Uni3.png",
                    "/images/Uni4.png",
                  ].map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`University Logo ${index + 1}`}
                      className="h-12 md:h-24 w-auto object-contain max-w-full"
                    />
                  ))}
                </div>

                <div className="mt-8">
                  <Button className="bg-[#230344] text-white px-6 md:px-8 py-4 md:py-6 rounded-full text-lg md:text-xl hover:bg-purple-900 transition-colors w-full md:w-auto">
                    Learn More About Us
                  </Button>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="aspect-[4/3] w-full max-w-md md:max-w-full rounded-2xl overflow-hidden">
                  <ImagesSliderDemo />
                </div>
                <div className="absolute -bottom-4 right-1/2 translate-x-1/2 md:translate-x-0 md:-right-8 w-24 md:w-32 h-24 md:h-32 bg-[#230344] rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-white text-center">
                    <div className="text-2xl md:text-3xl font-bold">15+</div>
                    <div className="text-xs md:text-sm">
                      Years of
                      <br />
                      Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                  alt="Students in classroom"
                  className="rounded-3xl shadow-xl max-w-full h-auto"
                />
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#230344] mb-6 md:mb-8">
                  OUR COMMITMENT TO
                  <br className="hidden md:block" />
                  EDUCATION & EXCELLENCE
                </h2>

                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mission</h3>
                    <p className="text-gray-600">
                      To provide high-quality education and career guidance to
                      students and educators worldwide, bridging the gap between
                      knowledge and opportunity.
                    </p>
                  </div>

                  <div className="w-full h-[0.2rem] bg-[#230344]/20 rounded-full" />

                  <div>
                    <h3 className="text-xl font-bold mb-2">Vision</h3>
                    <p className="text-gray-600">
                      To create a world with an empowered academic community
                      that fosters innovation, skill development, and lifelong
                      learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#230344] mb-2">
              SCHOOL & UNIVERSITY PARTNERS
            </h2>
            <p className="text-[#1F94F3] mb-2">
              Collaborating with Leading Educational Institutions
            </p>
          </div>

          {/* Logos Section */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-8">
            {universityPartners.map((partner, index) => (
              <Image
                key={index}
                src={partner.logo}
                alt={partner.name}
                className="h-24 md:h-40 w-auto object-contain"
                width={150}
                height={96}
              />
            ))}
          </div>

          {/* Button Section */}
          <div className="text-center">
            <Button
              variant="outline"
              className="border-[#230344] text-[#230344] hover:bg-purple-900 hover:text-white rounded-full px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"
            >
              View Our Partners
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#230344] mb-2">
              MEET THE MINDS BEHIND OUR MISSION
            </h2>
            <p className="text-blue-500 text-sm md:text-base">
              Our team brings vast experience in education, career guidance, and
              industry insights,
              <br className="hidden md:block" />
              dedicated to shaping the future of education.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-[#230344]/30 text-center"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {member.name}
                  </h3>
                  <div className="w-full h-px bg-purple-900/20 rounded-full mb-2" />
                  <p className="text-gray-600 text-sm md:text-base">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className=" bg-white">
        <div className="max-w-9xl mx-auto px-6 pl-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Contact Form Section */}
            <div className="space-y-8 w-full md:w-[90%] md:pl-24">
              <div className="space-y-4">
                <p className="text-sm text-gray-600 uppercase">
                  Send us an email
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Got a question? Ask our team!
                </h2>
                <div className="w-24 h-[.15rem] bg-[#1F94F3]"></div>
                <p className="hidden md:block text-gray-600">
                  Fill out the contact form, and we will get back to you with
                  the right answer.
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
            <div className="hidden -mt-40 md:flex justify-center">
              <GlobeDemo />
            </div>
          </div>
        </div>
      </div>
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
      <section className="md:pt-12 ">
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
