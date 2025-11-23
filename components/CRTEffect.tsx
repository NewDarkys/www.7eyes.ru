"use client";

import Image from "next/image";

export default function CRTEffect() {
  return (
    <div className={`animated-CRT z-[10000] pointer-events-none`}>
      <div className="scanline relative w-full h-screen overflow-hidden pointer-events-none"></div>
      <Image
        src="/images/CRT.png"
        alt="CRT Screen Effect"
        priority={true}
        style={{ objectFit: "cover" }}
        fill
        sizes="100vw"
        quality={100}
        className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none opacity-10 z-[9998]"
      />
    </div>
  );
}
