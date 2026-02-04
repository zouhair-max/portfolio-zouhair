"use client";

import React from 'react';

export default function ScrollingTech({ items, speed = 60 }) {
  // Duplicate items multiple times for seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient masks for smooth fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrolling container */}
      <div 
        className="flex"
        style={{ animation: `scroll ${speed}s linear infinite` }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="shrink-0 mx-4 sm:mx-6 flex items-center justify-center group"
          >
            <div className="flex items-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 bg-[#8d6a9f]/10 border-2 border-[#8d6a9f]/30 rounded-xl hover:bg-[#8d6a9f]/20 hover:border-[#8d6a9f] transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(141,106,159,0.4)]">
              <div className="text-[#8d6a9f] group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-sm sm:text-base md:text-lg font-bold text-gray-200 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

