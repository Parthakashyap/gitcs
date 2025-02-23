"use client";

import { useState, useRef, useEffect, useId } from "react";
import Image from "next/image";

interface SlideData {
  title: string;
  testimonial: string;
  university: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
}

const Slide = ({ slide, index, current }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const { src, title, testimonial, university } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 "
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[22rem] bg-purple-900/50 backdrop-blur-sm rounded-3xl transition-all duration-150 ease-out border-2 border-">
          <Image
            src="/images/Grains.png"
            alt="grains"
            fill
            className="w-full h-full object-cover absolute"
          />
          <div className="absolute inset-0 bg-gradient-to-b  border-t-8 border-l-8 border-[#4c3666] rounded-2xl from-[#230344] to-[#230344]/50 opacity-80" />

          <article
  className={`relative -mt-12 md:mt-0 z-20 p-[4vmin] transition-opacity duration-1000 ease-in-out flex flex-col items-center text-center h-full ${
    current === index ? "opacity-100" : "opacity-30"
  }`}
>
  {/* Quote Icon - Positioned Near the Top */}
  <div className="absolute md:left-8 top-16 md:top-12">
    <svg
      width="36"
      height="28"
      viewBox="0 0 36 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6296 2.81453L14.3068 0.887207C5.56226 5.84319 1.46326 11.4875 0.370195 17.8202C-0.449605 23.0515 1.5999 27.1815 6.79196 27.1815C10.4811 27.1815 14.0335 24.7035 14.8533 20.5735C15.5365 15.7552 12.8038 12.8642 9.388 12.1758C10.7543 7.49519 16.4929 2.81453 16.6296 2.81453ZM28.38 11.9005C29.883 7.35753 35.3483 2.81453 35.485 2.81453L33.1622 0.887207C24.4177 5.84319 20.3187 11.4875 19.2256 17.8202C18.4058 23.0515 20.4553 27.1815 25.6474 27.1815C29.3365 27.1815 32.8889 24.7035 33.5721 20.5735C34.3919 15.7552 31.7959 12.5888 28.38 11.9005Z"
        fill="url(#paint0_radial_136_20)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_136_20"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10.2781 5.39479) rotate(60.9542) scale(24.9209 29.9395)"
        >
          <stop stopColor="#FED425" />
          <stop offset="1" stopColor="#FF6929" />
        </radialGradient>
      </defs>
    </svg>
  </div>

  {/* Testimonial Text - Positioned at the Top */}
  <blockquote className="md:mt-10 mt-20 text-sm md:w-[80%] md:text-base lg:text-sm italic flex-grow">
    {testimonial}
  </blockquote>

  {/* Fixed Bottom Section */}
  <div className="absolute md:bottom-4 -bottom-7 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
    {/* Profile Image */}
    <div className="md:w-14 md:h-14 w-10 h-10 rounded-full overflow-hidden border-2 border-white mb-2">
      <Image
        src={src}
        alt={title}
        className="w-full h-full object-cover"
        width={100}
        height={100}
      />
    </div>

    {/* User Information */}
    <div className="text-center">
      <h2 className="text-lg md:text-2xl lg:text-3xl text-yellow-400 font-semibold">
        {title}
      </h2>
      <p className="text-sm md:text-base opacity-80">{university}</p>
    </div>
  </div>
</article>


        </div>
      </li>
    </div>
  );
};

export default function Carousel({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} current={current} />
        ))}
      </ul>
    </div>
  );
}
