import type { Metadata } from "next";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen noselect">
      <Image
        src="/images/darkys_evo.png"
        alt="7Eyes Alt Logo"
        width={250}
        height={250}
        className="mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold text-center">Schism is inevitable.</h1>
      <p className="text-center">©7ERT 2012-2025</p>
    </main>
  );
}
