'use client';
import { animate, motion, useMotionValue } from 'motion/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';


export const items = [
   
    {
        id: 2,
        url: '/assets/asset 5.jpeg',
        title: 'BOXIEN BAY',
    },
    {
        id: 7,
        url: '/assets/asset 5.jpeg',
        title: 'Snowy Mountain Highway',
    },
    {
        id: 8,
        url: '/assets/asset 5.jpeg',
        title: 'FOGGY FOLS',
    }


];

export default function FramerDraggableCarousel() {
    const [index, setIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    useEffect(() => {
        if (!isDragging && containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth || 1;
            const targetX = -index * containerWidth;
            animate(x, targetX, {
                type: 'spring',
                stiffness: 300,
                damping: 30,
            });
        }
    }, [index, x, isDragging]);
    return (
        <div className="w-full lg:px-10 sm:p-4 p-2">
            <div className="flex flex-col gap-3">
                <div className="relative overflow-hidden rounded-lg" ref={containerRef}>
                    <motion.div
                        className="flex"
                        drag="x"
                        dragElastic={0.2}
                        dragMomentum={false}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={(e, info) => {
                            setIsDragging(false);
                            const containerWidth = containerRef.current?.offsetWidth || 1;
                            const offset = info.offset.x;
                            const velocity = info.velocity.x;
                            let newIndex = index;
                            if (Math.abs(velocity) > 500) {
                                newIndex = velocity > 0 ? index - 1 : index + 1;
                            } else if (Math.abs(offset) > containerWidth * 0.3) {
                                newIndex = offset > 0 ? index - 1 : index + 1;
                            }
                            newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
                            setIndex(newIndex);
                        }}
                        style={{ x }}
                    >
                        {items.map((item) => (
                            <div key={item.id} className="shrink-0 w-full aspect-square relative">
                                <Image fill
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-lg select-none pointer-events-none"
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </motion.div>

                    <motion.button
                        disabled={index === 0}
                        onClick={() => setIndex((i) => Math.max(0, i - 1))}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${index === 0
                                ? 'opacity-40 cursor-not-allowed'
                                : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
                            }`}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="black"
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
                        disabled={index === items.length - 1}
                        onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${index === items.length - 1
                                ? 'opacity-40 cursor-not-allowed'
                                : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
                            }`}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="black"
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
                        {items.map((_, i) => (
                            <button
                                key={items[i]?.id ?? items[i]?.url ?? `dot-${i}`}
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
