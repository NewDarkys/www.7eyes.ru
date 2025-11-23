"use client";

import Image from "next/image";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen noselect bg-gradient-to-b relative overflow-hidden border-black">
      <h1
        className="text-6xl font-bold text-center relative z-10 text-white"
        style={{ WebkitTextStroke: "3px black", paintOrder: "stroke fill" }}
      >
        Initializing Login Procedure
      </h1>
      <Image
        src="/images/loading.gif"
        alt="7Eyes Alt Logo"
        width={150}
        height={150}
        className="mx-auto mt-15 mb-15 relative z-10"
        priority={false}
      />
    </main>
  );
}
