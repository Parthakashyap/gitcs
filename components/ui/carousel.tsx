"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import Image from "next/image";

interface SlideData {
  title: string;
  testimonial: string;
  university: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
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

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, title, testimonial, university } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-[22rem] bg-blue-900/50 backdrop-blur-sm rounded-xl transition-all duration-150 ease-out "
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <Image
            src="/images/Rectangle.png"
            alt="grains"
            fill
            className="w-full h-full object-cover absolute"
          />
          <div className="absolute inset-0 bg-gradient-to-b border-2 rounded-xl border-white from-blue-900/10 to-blue-900/90 opacity-80" />

          <article
            className={`relative -mt-12 md:-mt-0 z-20 p-[4vmin] transition-opacity duration-1000 ease-in-out flex flex-col items-center justify-center text-center h-full ${
              current === index ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="28"
              viewBox="0 0 36 28"
              fill="none"
              className="md:ml-[-24rem]"
            >
              <path
                d="M16.6296 2.81465L14.3068 0.887329C5.56226 5.84331 1.46326 11.4876 0.370195 17.8203C-0.449605 23.0516 1.5999 27.1816 6.79196 27.1816C10.4811 27.1816 14.0335 24.7036 14.8533 20.5736C15.5365 15.7553 12.8038 12.8643 9.388 12.176C10.7543 7.49531 16.4929 2.81465 16.6296 2.81465ZM28.38 11.9006C29.883 7.35765 35.3483 2.81465 35.485 2.81465L33.1622 0.887329C24.4177 5.84331 20.3187 11.4876 19.2256 17.8203C18.4058 23.0516 20.4553 27.1816 25.6474 27.1816C29.3365 27.1816 32.8889 24.7036 33.5721 20.5736C34.3919 15.7553 31.7959 12.589 28.38 11.9006Z"
                fill="url(#paint0_radial_42_10)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_42_10"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(10.2781 5.39492) rotate(60.9542) scale(24.9209 29.9395)"
                >
                  <stop stop-color="#FED425" />
                  <stop offset="1" stop-color="#FF6929" />
                </radialGradient>
              </defs>
            </svg>
            <blockquote className="text-sm md:w-96 md:text-base lg:text-md mb-4 italic">
              {testimonial}
            </blockquote>

            <div className="md:w-24 md:h-24 w-12 h-12 rounded-full overflow-hidden border-2 border-white mb-4 mt-2 ">
              <Image
                src={src}
                alt={title}
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>

            <div className="text-center max-w-xl px-6">
              <h2 className="text-lg md:text-2xl lg:text-3xl text-yellow-400 font-semibold ">
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

const CarouselControl = ({
  type,
  title,
  handleClick,
}: {
  type: string;
  title: string;
  handleClick: () => void;
}) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 md:-mt-44 mt-4 justify-center bg-blue-600/60 backdrop-blur-sm border-2 border-white/20 rounded-full focus:border-white/50 focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-white" />
    </button>
  );
};

export default function Carousel({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

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
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
