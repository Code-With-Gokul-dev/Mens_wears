'use client';
import { animate, motion, useMotionValue } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { CarouselData } from '../../data/Images';
import Image from 'next/image';

export default function FramerAutoplayCarousel({ duration = 3000 }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;
      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index]);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIndex((current) => (current + 1) % CarouselData.length);
      }, duration);
      return () => clearInterval(interval);
    }
  }, [isHovered, duration]);
  return (
    <div className="w-full lg:px-10 sm:p-4 p-2">
      <h2 className="text-2xl mb-4 sr-only">
        Autoplay Carousel (Hover to Pause)
      </h2>
      <div className="flex flex-col gap-3">
        <div
          className="relative overflow-hidden rounded-lg"
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div className="flex" style={{ x }}>
            {CarouselData.map((item) => (
              <div key={item.id} className="shrink-0 w-full h-150 relative">
                <Image fill
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full  rounded-lg select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? 'opacity-40 cursor-not-allowed bg-neutral-300'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            disabled={index === CarouselData.length - 1}
            onClick={() => setIndex((i) => Math.min(CarouselData.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === CarouselData.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-neutral-300'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {CarouselData.map((_, i) => (
              <button
                key={CarouselData[i]?.id ?? CarouselData[i]?.url ?? `dot-${i}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
