"use client";

import Image from "next/image";

export default function Badge({
  src,
  tooltip,
}: {
  src: string;
  tooltip: string;
}) {
  return (
    <div className="relative group w-[90px] h-[90px] mr-5 ml-5 rounded-[12px] border-4 border-[#2b2b2b] flex items-center justify-center">
      <div className="p-0.5">
        <Image
          src={src}
          alt="Badge"
          width={100}
          height={100}
          priority={true}
          unoptimized
          className="object-cover rounded-[10px]"
        />
      </div>
      <span className="z-10 absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {tooltip}
      </span>
    </div>
  );
}
