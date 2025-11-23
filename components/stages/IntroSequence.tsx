"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import TopSecretComponent from "../stages/TopSecretComponent";
import BrainWashComponent from "../stages/BrainWashComponent";
import ErrorComponent from "../stages/ErrorComponent";
import BrainCalibrationComponent from "../stages/BrainCalibrationComponent";
import BiosComponent from "../stages/BiosComponent";
import PasswordPromptComponent from "../stages/PasswordPromptComponent";
import LoginProcessConponent from "./LoginProcessComponent";

type Stage =
  | "idle"
  | "loginProcess"
  | "topSecret"
  | "brainWash"
  | "error"
  | "brainCalibration"
  | "bios"
  | "passwordPrompt"
  | "completed";

export default function Intro() {
  const [stage, setStage] = useState<Stage>("idle");

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const playBackgroundMusic = async (audioName: string, isLooped: boolean) => {
    try {
      const audioCtx = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      const source = audioCtx.createBufferSource();
      const arrayBuffer = await fetch(audioName).then((res) =>
        res.arrayBuffer()
      );
      const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
      const gainNode = audioCtx.createGain();
      gainNode.gain.value = 1;
      source.buffer = audioBuffer;
      source.loop = isLooped;
      source.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      source.start();

      console.log("Sound started:", audioName);
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  const startErrorSequence = async () => {
    setStage("error");
    await delay(800);
    setStage("brainCalibration");
    await delay(1300);
    setStage("bios");
  };

  useEffect(() => {
    (async () => {
      setStage("loginProcess");
      playBackgroundMusic("/audio/websfx/login_process.mp3", false);
      await delay(300);
      setStage("topSecret");
      playBackgroundMusic("/audio/websfx/secret_warning.mp3", false);
      await delay(520);
      setStage("brainWash");
      playBackgroundMusic("/audio/websfx/brainwash.mp3", false);
      await delay(500);

      startErrorSequence();

      playBackgroundMusic("/audio/websfx/loading_stages.mp3", false);
      await delay(3000);
      playBackgroundMusic("/audio/perfect_loop.wav", true);
      await delay(500);
      setStage("passwordPrompt");
    })();
  }, []);

  return (
    <div
      className={`animated-CRT z-[10000] ${
        stage !== "idle" ? "pointer-events-none" : ""
      }`}
    >
      {stage === "idle" ? (
        <div className="relative inset-0 flex z-[9999] items-center justify-center bg-black text-white cursor-pointer w-full h-screen overflow-hidden">
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

          {stage === "loginProcess" && <LoginProcessConponent />}
          {stage === "topSecret" && <TopSecretComponent />}
          {stage === "brainWash" && <BrainWashComponent />}
          {stage === "error" && <ErrorComponent />}
          {stage === "brainCalibration" && <BrainCalibrationComponent />}
          {stage === "bios" && <BiosComponent />}
          {stage === "passwordPrompt" && <PasswordPromptComponent />}
        </>
      )}
    </div>
  );
}
