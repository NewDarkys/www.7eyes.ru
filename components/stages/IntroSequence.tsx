"use client";

import { useState, useEffect } from "react";

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
var isMounted: boolean;

export default function Intro() {
  const [stage, setStage] = useState<Stage>("idle");

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const playBackgroundMusic = async (audioName: string, isLooped: boolean) => {
    try {
      const audioCtx = new (window.AudioContext ||
        (
          window as Window &
            typeof globalThis & { webkitAudioContext?: typeof AudioContext }
        ).webkitAudioContext)();
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
    const runSequence = async () => {
      if (isMounted) {
        return;
      }
      isMounted = true;
      const audioUrls = [
        "/audio/websfx/login_process.mp3",
        "/audio/websfx/secret_warning.mp3",
        "/audio/websfx/brainwash.mp3",
        "/audio/websfx/loading_stages.mp3",
        "/audio/perfect_loop.wav",
        "/audio/websfx/password_prompt.mp3",
      ];

      await Promise.all(
        audioUrls.map((url) => fetch(url).then((res) => res.arrayBuffer()))
      );

      console.log("All audio preloaded, starting sequence...");

      setStage("loginProcess");
      playBackgroundMusic("/audio/websfx/login_process.mp3", false);
      await delay(2320);
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
      playBackgroundMusic("/audio/websfx/password_prompt.mp3", false);

      setStage("passwordPrompt");
    };
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        runSequence();
      } else {
        window.addEventListener("load", runSequence);
      }
    }
    runSequence();
  }, []);

  return (
    <div>
      {stage === "idle" ? (
        <div className="relative inset-0 flex z-[9999] items-center justify-center bg-black text-white cursor-pointer w-full h-screen overflow-hidden"></div>
      ) : (
        <>
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
