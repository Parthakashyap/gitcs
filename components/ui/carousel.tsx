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
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[22rem] bg-purple-900/50 backdrop-blur-sm rounded-xl transition-all duration-150 ease-out">
          <Image
            src="/images/Grains.png"
            alt="grains"
            fill
            className="w-full h-full object-cover absolute"
          />
          <div className="absolute inset-0 bg-gradient-to-b border-2 rounded-xl border-white from-[#230344] to-[#230344]/50 opacity-80" />

          <article
            className={`relative -mt-12 md:-mt-0 z-20 p-[4vmin] transition-opacity duration-1000 ease-in-out flex flex-col items-center justify-center text-center h-full ${
              current === index ? "opacity-100 visible" : "opacity-30 visible"
            }`}
          >
            <blockquote className="text-sm md:w-96 md:text-base lg:text-md mb-4 italic">
              {testimonial}
            </blockquote>

            <div className="md:w-24 md:h-24 w-12 h-12 rounded-full overflow-hidden border-2 border-white mb-4 mt-2 z-50">
              <Image
                src={src}
                alt={title}
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>

            <div className="text-center max-w-xl px-6">
              <h2 className="text-lg md:text-2xl lg:text-3xl text-yellow-400 font-semibold">
                {title}
              </h2>
              <p className="text-sm md:text-base opacity-80">{university}</p>
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
