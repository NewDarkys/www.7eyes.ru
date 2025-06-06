"use client";

import { useState } from "react";
import Image from "next/image";

export default function CRTEffect() {
  const [isStarted, setIsStarted] = useState(false);
  const handleStart = () => {
    setIsStarted(true);

    (async () => {
      const audioCtx = new window.AudioContext();
      const source = audioCtx.createBufferSource();
      const arrayBuffer = await fetch("/audio/perfect_loop.wav").then((res) =>
        res.arrayBuffer()
      );
      const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
      const gainNode = audioCtx.createGain();

      gainNode.gain.value = 1;

      source.buffer = audioBuffer;
      source.loop = true;

      source.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      source.start();
    })();
  };

  return (
    <div
      className={`animated-CRT z-[10000] ${
        !isStarted ? "" : "pointer-events-none"
      }`}
    >
      {!isStarted ? (
        <div
          className="relative inset-0 flex z-[9999] items-center justify-center bg-black text-white cursor-pointer w-full h-screen overflow-hidden"
          onClick={handleStart}
        >
          <h1 className="text-2xl font-bold relative">Login as guest 👆</h1>
        </div>
      ) : (
        <>
          <div className="scanline relative w-full h-screen overflow-hidden pointer-events-none"></div>
          <Image
            src="/images/CRT.png"
            alt="CRT Screen Effect"
            priority
            style={{ objectFit: "cover" }}
            fill
            sizes="100vw"
            quality={100}
            className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none opacity-10 z-[9998]"
          />
        </>
      )}
    </div>
  );
}
