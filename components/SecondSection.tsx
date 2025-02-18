"use client";

import { useEffect, useState } from 'react';

export default function SecondSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = window.innerHeight * 0.5;
      setScrolled(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / 10) * -1;
    const rotateY = (x - centerX) / 10;
    
    card.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
      translateZ(20px)
      scale(1.02)
    `;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
  };

  return (
    <section className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[50] ${
      scrolled ? "-translate-y-full" : "translate-y-0"
    }`}>
      <div className="absolute inset-0 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-6xl font-light mb-6">
                Advanced Leadership
                <br />
                Strategies
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Explore case studies and real-world examples that illustrate the
                application of advanced leadership strategies in various
                industries. Enhance your decision-making skills, refine your
                communication techniques, and develop the ability to influence
                and motivate others.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 relative">
  {[
    {
      title: "Adaptive Leadership Framework",
      description:
        "Learn to navigate and lead through complex and rapidly changing environments.",
      icon: (
        <svg
          className="w-12 h-12 text-white/80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 4h16M4 12h16M4 20h16" strokeLinecap="round" />
          <path d="M4 4L12 12L20 4M4 12L12 20L20 12" strokeLinecap="round" />
        </svg>
      ),
      bg: "from-purple-500/10 to-blue-500/10",
    },
    {
      title: "Transformational Leadership Techniques",
      description:
        "Discover powerful strategies to inspire and drive positive organizational change.",
      icon: (
        <svg
          className="w-12 h-12 text-white/80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 4v16m-8-8h16" strokeLinecap="round" />
          <path d="M12 4l-4 4m4-4l4 4" strokeLinecap="round" />
          <path d="M12 20l-4-4m4 4l4-4" strokeLinecap="round" />
        </svg>
      ),
      bg: "from-green-500/10 to-teal-500/10",
    },
    {
      title: "Influential Communication Mastery",
      description:
        "Develop advanced communication skills to effectively engage and influence stakeholders.",
      icon: (
        <svg
          className="w-12 h-12 text-white/80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M8 12h.01M12 12h.01M16 12h.01" strokeLinecap="round" />
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
          <path d="M15 9l-3 3-3-3" strokeLinecap="round" />
        </svg>
      ),
      bg: "from-amber-500/10 to-orange-500/10",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="card-3d group h-full w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white p-8 rounded-3xl h-[300px] w-full shadow-xl relative overflow-hidden flex flex-col justify-between">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        ></div>

        <div className="relative z-10">
          <div className="mb-4">{item.icon}</div>
          <h3 className="text-2xl font-light mb-3">{item.title}</h3>
          <p className="text-white/70 text-sm">{item.description}</p>
        </div>

        <div className="absolute bottom-6 right-6 bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-colors">
          <svg
            className="w-4 h-4 transform rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
    </section>
  );
}