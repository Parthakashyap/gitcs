'use client'
import {  useState } from "react";
import { cn } from '@/lib/utils'
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import logo from "@/public/images/Group 185.png";
import logoW from "@/public/images/Group.png";




export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={cn('flex justify-center bg-transparent ')}>
       <nav className="relative z-20 w-full">
              {/* Upper navigation bar - hidden on mobile */}
              <div className="bg-[#230344] text-white w-full hidden md:block">
                <div className="flex justify-between items-center h-8 w-full px-4 md:px-8 lg:px-12">
                  <div className="flex">
                    <a href="#" className="px-4 hover:text-purple-400">
                      Global Forum
                    </a>
                    <a href="#" className="px-4 hover:text-purple-400">
                      Students Club
                    </a>
                    <a href="#" className="px-4 hover:text-purple-400">
                      Online Career Fair
                    </a>
                  </div>
                  <div className="flex">
                    <a href="#" className="px-4 hover:text-purple-400">
                      Coordinator
                    </a>
                    <a href="#" className="px-4 hover:text-purple-400">
                      Eduverse
                    </a>
                    <a href="#" className="px-4 hover:text-purple-400">
                      Education Loans
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile header */}
              <div className="bg-[#230344] flex justify-between items-center p-3 md:hidden">
                <div className="flex items-center">
                  <Menu
                    className="w-6 h-6 text-white mr-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                  />
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div>
                        <Image
                          src={logoW}
                          alt="NETWORKING"
                          className="h-8 w-auto"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start ml-2">
                      <h3 className="text-white text-sm font-bold leading-none tracking-wider">
                        NETWORKING
                      </h3>
                      <p className="text-white text-[8px] tracking-[0.1em]">
                        EVERY CAREER COUNTS
                      </p>
                    </div>
                  </div>
                </div>
                <button className="bg-white text-[#230344] text-xs px-3 py-1 rounded">
                  Login
                </button>
              </div>

              {/* Main navigation - hidden on mobile */}
              <div className="bg-white text-[#230344] relative w-full hidden md:block">
                <div className="flex justify-between items-center h-8 w-full px-4 md:px-8 lg:px-12">
                  <div className="flex">
                    <a href="#" className="px-6 flex items-center font-medium">
                      Skillverse <ChevronDown className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/university"
                      className="px-6 flex items-center font-medium"
                    >
                      School/University <ChevronDown className="w-4 h-4 ml-1" />
                    </a>
                    <a href="#" className="px-6 flex items-center font-medium">
                      Opportunity Orbit <ChevronDown className="w-4 h-4 ml-1" />
                    </a>
                  </div>

                  <div className="flex">
                    <a href="#" className="px-6 flex items-center font-medium">
                      Ideal UP <ChevronDown className="w-4 h-4 ml-1" />
                    </a>
                    <a href="#" className="px-6 flex items-center font-medium">
                      Event <ChevronDown className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/aboutUs"
                      className="px-6 flex items-center font-medium"
                    >
                      About Us <ChevronDown className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="#"
                      className="px-4 transition duration-200 ease-in-out hover:bg-purple-900 hover:text-white   border border-purple-900 rounded-md py-0 ml-2"
                    >
                      Login
                    </a>
                  </div>
                </div>

                {/* Centered logo with arrow-like element - only for desktop */}
                <div
  className="absolute left-1/2 -translate-x-1/2 z-20"
  style={{ width: "300px", top: "-40px" }}
>
  <svg
    width="0"
    height="0"
    className="absolute"
  >
    <defs>
      <clipPath id="roundedPolygon" clipPathUnits="objectBoundingBox">
        <path d="
          M 0.02 0.02 
          H 0.98 
          Q 1 0.02 1 0.04 
          V 0.78 
          Q 1 0.80 0.98 0.82 
          L 0.52 0.98 
          Q 0.50 1 0.48 0.98 
          L 0.02 0.82 
          Q 0 0.80 0 0.78 
          V 0.04 
          Q 0 0.02 0.02 0.02 
          Z
        " />
      </clipPath>
    </defs>
  </svg>

  <div
    className="bg-white shadow-2xl relative shadow-black flex items-center px-5 py-4"
    style={{
      WebkitClipPath: "url(#roundedPolygon)",
      clipPath: "url(#roundedPolygon)",
      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
    }}
  >
    <div className="mr-4 flex-shrink-0">
      <div>
        <Image
          src={logo}
          alt="NETWORKING"
          className="h-16 p-2 w-auto"
        />
      </div>
    </div>

    <div className="flex flex-col items-center">
      <h3
        className="text-[#230344] text-[24px] font-bold leading-none tracking-wider"
        style={{ letterSpacing: "1px" }}
      >
        NETWORKING
      </h3>
      <p className="text-[#230344] text-[10px] tracking-[0.2em] mt-1">
        EVERY CAREER COUNTS
      </p>
    </div>
  </div>
</div>

              </div>
            </nav>

            {/* Mobile menu */}

            {menuOpen && (
              <div className="absolute top-14 left-0 w-full bg-white p-6 flex flex-col items-start gap-4 text-purple-900 md:hidden z-20 shadow-md">
                {/* Top links from the upper desktop bar */}
                <a href="#" className="w-full py-2 border-b border-gray-200">
                  Global Forum
                </a>
                <a href="#" className="w-full py-2 border-b border-gray-200">
                  Students Club
                </a>
                <a href="#" className="w-full py-2 border-b border-gray-200">
                  Online Career Fair
                </a>
                <a href="#" className="w-full py-2 border-b border-gray-200">
                  Coordinator
                </a>
                <a href="#" className="w-full py-2 border-b border-gray-200">
                  Eduverse
                </a>
                <a href="#" className="w-full py-2 border-b border-gray-200">
                  Education Loans
                </a>

                {/* Main nav links from the desktop navbar */}
                <a
                  href="#"
                  className="w-full py-2 border-b border-gray-200 flex justify-between items-center"
                >
                  Skillverse <ChevronDown className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-full py-2 border-b border-gray-200 flex justify-between items-center"
                >
                  School/University <ChevronDown className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-full py-2 border-b border-gray-200 flex justify-between items-center"
                >
                  Opportunity Orbit <ChevronDown className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-full py-2 border-b border-gray-200 flex justify-between items-center"
                >
                  Ideal UP <ChevronDown className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-full py-2 border-b border-gray-200 flex justify-between items-center"
                >
                  Event <ChevronDown className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-full py-2 border-b border-gray-200 flex justify-between items-center"
                >
                  About Us <ChevronDown className="w-4 h-4" />
                </a>
              </div>
            )}
    </nav>
  )
}
