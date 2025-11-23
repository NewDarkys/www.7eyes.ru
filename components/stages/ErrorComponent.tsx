"use client";

import { useState, useEffect } from "react";

export default function ErrorComponent() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 75);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        className={`flex flex-col items-center justify-center min-h-screen noselect bg-gradient-to-b relative overflow-hidden transition-opacity duration-75 ${
          !showFirst ? "bg-black" : "bg-red-600"
        }`}
      >
        <span
          className={` text-red-600 ${
            !showFirst ? "text-red-600 border-red-600" : ""
          } text-6xl lg:text-9xl  border-3  font-bold `}
        >
          ERROR
        </span>
      </div>
    </div>
  );
}
