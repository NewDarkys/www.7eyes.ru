"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function CRTEffect() {
  return (
    <div>
      <div className="scanline"></div>
      <Image
        src="/images/CRT.png"
        alt="CRT Screen Effect"
        priority
        style={{ objectFit: "cover" }}
        fill
        sizes="100vw"
        quality={100}
        className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none opacity-10"
      />
    </div>
  );
}
