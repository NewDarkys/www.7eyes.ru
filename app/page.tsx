"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const clickHandler = () => {
    router.replace("/login");
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen" onClick={clickHandler}>
        <h1 className="">Click to login</h1>
      </div>
      <main className="flex flex-col items-center justify-center min-h-screen noselect">
        <Image
          src="/images/darkys_evo.png"
          alt="7Eyes Alt Logo"
          width={250}
          height={250}
          className="mx-auto mb-4"
          priority={false}
        />
        <h1 className="text-2xl font-bold text-center">Universum regitur</h1>
        <p className="text-center">©7ERT 2012-2025</p>
      </main>
    </div>
  );
}
//
