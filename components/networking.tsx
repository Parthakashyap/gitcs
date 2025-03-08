'use client'
import React, { useEffect, useRef, useState } from 'react';

const NetworkingGrid = () => {
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);
  const column4Ref = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate placeholder posts with consistent values
  const generatePosts = (count: number, seed: number) => {
    return Array.from({ length: count }).map((_, index) => {
      // Use deterministic values based on seed and index
      const id = seed * 100 + index;
      return {
        id,
        title: `Networking`,
        subtitle: 'Early Career Growth',
        likes: 10 + (id % 40), // Deterministic but looks random
        comments: 1 + (id % 10),
        shares: 1 + (id % 5)
      };
    });
  };

  // Use fixed seeds for each column to ensure consistency
  const postsColumn1 = generatePosts(4, 1);
  const postsColumn2 = generatePosts(4, 2);
  const postsColumn3 = generatePosts(4, 3);
  const postsColumn4 = generatePosts(4, 4);

  // Calculate the container height on mount and window resize
  useEffect(() => {
    const calculateHeight = () => {
      if (gridContainerRef.current) {
        // Find the tallest column
        const columns = [column1Ref.current, column2Ref.current, column3Ref.current, column4Ref.current];
        const maxHeight = Math.max(...columns.map(col => col?.offsetHeight || 0));
        
        setContainerHeight(maxHeight);
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    
    // Run it again after images might have loaded
    const timer = setTimeout(calculateHeight, 1000);
    
    return () => {
      window.removeEventListener('resize', calculateHeight);
      clearTimeout(timer);
    };
  }, [isClient]); // Re-run when isClient changes

  useEffect(() => {
    const handleScroll = () => {
      if (!gridContainerRef.current || !containerRef.current) return;
      
      // Get the container's position
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerBottom = rect.bottom;
      
      // Only apply scroll effect when container is in view
      if (containerBottom < 0 || containerTop > window.innerHeight) return;
      
      // Calculate how far we've scrolled into the container
      const scrollProgress = Math.max(0, Math.min(1, -containerTop / (containerBottom - containerTop)));
      const scrollAmount = scrollProgress * 100; // Maximum scroll amount in pixels
      
      // Columns 1 and 3 move up (negative transform)
      if (column1Ref.current) column1Ref.current.style.transform = `translateY(-${scrollAmount}px)`;
      if (column3Ref.current) column3Ref.current.style.transform = `translateY(-${scrollAmount}px)`;
      
      // Columns 2 and 4 move down (positive transform)
      if (column2Ref.current) column2Ref.current.style.transform = `translateY(${scrollAmount}px)`;
      if (column4Ref.current) column4Ref.current.style.transform = `translateY(${scrollAmount}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerHeight]);

  // LinkedIn-style post renderer
  const renderPost = (post: { id: number; title: string; subtitle: string; likes: number; comments: number; shares: number }) => (
    <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
      {/* Header */}
      <div className="flex items-center p-3 bg-white">
        <div className="h-8 w-8 bg-purple-900 rounded-md flex items-center justify-center text-white text-xs mr-2">
          <span>N</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold">{post.title}</p>
              <p className="text-xs text-gray-500">{post.subtitle}</p>
            </div>
            <div className="text-blue-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pb-2">
        <p className="text-xs text-gray-600 mb-2">
          Lorem ipsum dolor sit amet consectetur. Viverra commodo cursus enim arcu sed...
          <span className="text-blue-400"> Read More</span>
        </p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-2 gap-1 px-3">
        <div className="h-16 bg-gray-200 rounded overflow-hidden">
          <img src="/api/placeholder/150/100" alt="Meeting" className="w-full h-full object-cover" />
        </div>
        <div className="h-16 bg-gray-200 rounded overflow-hidden">
          <img src="/api/placeholder/150/100" alt="Office" className="w-full h-full object-cover" />
        </div>
        <div className="h-16 bg-gray-200 rounded overflow-hidden">
          <img src="/api/placeholder/150/100" alt="Team" className="w-full h-full object-cover" />
        </div>
        <div className="h-16 bg-gray-200 rounded overflow-hidden">
          <img src="/api/placeholder/150/100" alt="People" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Engagement */}
      <div className="flex items-center justify-between px-3 py-2 text-xs text-gray-500 border-t mt-2">
        <div className="flex items-center">
          <span className="bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center mr-1">♥</span>
          <span>{post.likes}</span>
        </div>
        <div>{post.comments} comments • {post.shares} shares</div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-4 border-t">
        <button className="p-2 flex items-center justify-center">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
        <button className="p-2 flex items-center justify-center">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        </button>
        <button className="p-2 flex items-center justify-center">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
          </svg>
        </button>
        <button className="p-2 flex items-center justify-center">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="bg-[#230344] py-8 px-4"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-white text-5xl font-bold mb-4">NETWORKING</h1>
        <p className="text-[#1F94F3] mb-2">Early Career Growth</p>
      </div>

      {/* Grid container with fixed height and overflow - THIS IS THE KEY CHANGE */}
      <div 
        ref={gridContainerRef}
        className="relative overflow-hidden max-w-6xl mx-auto"
        style={{ height: containerHeight > 0 ? `${containerHeight}px` : 'auto' }}
      >
        {/* Grid columns with animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Column 1 - Moves up on scroll */}
          <div ref={column1Ref} className="transition-transform duration-300 ease-out">
            {postsColumn1.map(post => renderPost(post))}
          </div>

          {/* Column 2 - Moves down on scroll */}
          <div ref={column2Ref} className="transition-transform duration-300 ease-out">
            {postsColumn2.map(post => renderPost(post))}
          </div>

          {/* Column 3 - Moves up on scroll (hidden on smaller screens) */}
          <div ref={column3Ref} className="transition-transform duration-300 ease-out hidden lg:block">
            {postsColumn3.map(post => renderPost(post))}
          </div>

          {/* Column 4 - Moves down on scroll (hidden on smaller screens) */}
          <div ref={column4Ref} className="transition-transform duration-300 ease-out hidden lg:block">
            {postsColumn4.map(post => renderPost(post))}
          </div>
        </div>
      </div>

      {/* Load more button - positioned outside the grid container */}
      <div className="text-center mt-8 pb-8">
        <button className="px-8 py-2 bg-[#230344] rounded-full border border-white text-white text-sm hover:bg-white hover:text-[#230344] transition-colors">
          Load more
        </button>
      </div>
    </div>
  );
};

export default NetworkingGrid;