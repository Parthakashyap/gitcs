import React from 'react';
import Image from 'next/image';

const SecondSection = () => {
  return (
    <div className="relative w-full py-16 overflow-hidden mt-32 bg-white">
      {/* Decorative curved lines */}
      <div className="absolute top-0 left-0">
        <svg width="180" height="200" viewBox="0 0 180 200">
          <path d="M0,200 Q180,120 0,0" fill="none" stroke="#30004a" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0">
        <svg width="180" height="200" viewBox="0 0 180 200">
          <path d="M180,0 Q0,80 180,200" fill="none" stroke="#30004a" strokeWidth="2" />
        </svg>
      </div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Header text centered */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#30004a] tracking-wide">WHY STUDY ABROAD WITH US</h2>
          <p className="text-[#2a9df4] mt-1">Professional-Streamlined-Simple</p>
        </div>

        {/* Three column layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column - Text content */}
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold text-[#30004a] mb-4">WHY STUDY ABROAD WITH US</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. In sit neque tellus felis vestibulum.. Tortor mauris est nullam sit. Nam malesuada purus in in eu dolor.. Eget mauris ut sed integer nisl dictum venenatis.. Ac condimentum sed cursus vulputate. Nulla massa ornare donec semper ac cras quam.. Aliquet tristique facilisis tincidunt vulputate molestie auctor donec sit.. Lorem suscipit pharetra etiam elit lacus commodo tristique hendrerit.. Lectus diam venenatis sit felis pulvinar adipiscing in nec vitae.. Donec at convallis ullamcorper a vulputate eros orci vel sit.. Auctor facilisis fames et et netus in hac vel fusce vitae nibh.
            </p>
          </div>

          {/* Middle column - Logo card */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center items-center h-full w-full">
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <Image 
                    src="/images/talked-logo.png" 
                    alt="talkEd Logo" 
                    width={300} 
                    height={150}
                    className="w-full"
                  />
                </div>
                <p className="text-gray-500 text-sm">Education Through Conversation</p>
              </div>
            </div>
          </div>

          {/* Right column - Two image cards */}
          <div className="lg:w-80 flex flex-row gap-4">
  {/* Expert Guidance Card */}
  <div className="relative rounded-3xl overflow-hidden h-96 shadow-lg w-1/2">
    <Image 
      src="/images/graduate-student.jpg" 
      alt="Expert Guidance" 
      fill
      className="object-cover"
    />
    <div className="absolute bottom-12 left-0 bg-red-600 px-4 py-3 w-32">
      <h4 className="text-white text-xl font-medium">Expert Guidance</h4>
    </div>
  </div>

  {/* Career Programs Card */}
  <div className="relative rounded-3xl overflow-hidden h-96 shadow-lg w-1/2">
    <Image 
      src="/images/female-student.jpg" 
      alt="Career Programs" 
      fill
      className="object-cover"
    />
    <div className="absolute bottom-12 left-0 bg-pink-600 px-4 py-3 w-32">
      <h4 className="text-white text-xl font-medium">Career Programs</h4>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default SecondSection;