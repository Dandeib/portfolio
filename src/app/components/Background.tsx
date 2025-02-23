'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>

      <div className="fixed inset-0 -z-30 bg-[#0a0a0f]" />
      <div 
        className="fixed inset-0 -z-20 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `rotate(${mousePosition.x * 2}deg) scale(${1 + mousePosition.y * 0.1})`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div 
        className="fixed inset-0 -z-20 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`
        }}
      />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: `
                radial-gradient(circle at center, 
                rgba(147, 51, 234, ${0.03 - i * 0.01}) 0%,
                transparent 70%)
              `,
              left: `${30 + i * 10}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div 
        className="fixed inset-0 -z-10 opacity-[0.15] pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
    </>
  );
} 