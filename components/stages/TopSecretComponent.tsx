"use client";

import Image from "next/image";

export default function TopSecret() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen noselect bg-blue-800">
      <h1
        className="text-6xl font-bold text-center"
        style={{ WebkitTextStroke: "5px black", paintOrder: "stroke fill" }}
      >
        TOP SECRET
      </h1>
      <h2
        className="text-3xl font-bold text-center"
        style={{ WebkitTextStroke: "5px black", paintOrder: "stroke fill" }}
      >
        EYES ONLY
      </h2>
      <Image
        src="/images/Safety.png"
        alt="7Eyes Alt Logo"
        width={350}
        height={350}
        className="mx-auto mb-4"
        priority={true}
        loading="eager"
      />
      <h3
        className="text-3xl font-bold text-center"
        style={{ WebkitTextStroke: "4px black", paintOrder: "stroke fill" }}
      >
        Report of 7Eyes Main Research Laboratory
      </h3>
      <span
        className="text-xl max-w-1/2 text-left"
        style={{ WebkitTextStroke: "4px black", paintOrder: "stroke fill" }}
      >
        Viewing this document requires Level Five Security Clearance and
        permission of the 7Eyes Main Research Laboratory. Contact with this
        document by those not in possession of these authorizations is
        punishable by life imprisonment at the discretion of the 7Eyes Main
        Research Laboratory, regardless of whether the contents themselves have
        been examined.
      </span>
    </main>
  );
}
