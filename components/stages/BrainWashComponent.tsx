"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Dot = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
};

export default function TopSecret() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDot = {
        id: Date.now() + Math.random(),
        x:
          Math.random() *
          (typeof window !== "undefined" ? window.innerWidth : 800),
        y:
          Math.random() *
          (typeof window !== "undefined" ? window.innerHeight : 600),
        size: 25,
        duration: 50,
      };

      setDots((prev: Dot[]) => [...prev, newDot]);

      setTimeout(() => {
        setDots((prev) => prev.filter((dot: Dot) => dot.id !== newDot.id));
      }, newDot.duration);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen noselect bg-gradient-to-b relative overflow-hidden border-black">
      {dots.map((dot: Dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-red-600 animate-pulse"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animation: `fadeOut ${dot.duration}ms ease-out forwards`,
          }}
        />
      ))}

      <h1
        className="text-6xl font-bold text-center relative z-10 text-red-600"
        style={{ WebkitTextStroke: "3px black", paintOrder: "stroke fill" }}
      >
        FOCUS HERE AND DO NOT MOVE
      </h1>
      <Image
        src="/images/11.png"
        alt="7Eyes Alt Logo"
        width={150}
        height={150}
        className="mx-auto mt-15 mb-15 relative z-10"
        priority={true}
      />

      <style jsx>{`
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }
      `}</style>
    </main>
  );
}
