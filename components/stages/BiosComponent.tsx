"use client";

import Typewriter from "typewriter-effect";

export default function Bios() {
  return (
    <div className="font-mono bg-black text-green-400 p-6 rounded-lg border border-green-800 flex flex-col items-left justify-start min-h-screen noselect">
      <Typewriter
        options={{
          loop: false,
          delay: 0,
          cursor: "▋",
          cursorClassName: "text-green-400",
          deleteSpeed: 0,
          wrapperClassName: "text-sm leading-relaxed",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("CPU MODB_High<br/>")
            .typeString("MEMORY Check  640TB + 2048TB  OK<br/>")

            // Резко выводим половину оставшегося текста
            .pasteString(
              `
JA Hi-SYS Re-BOOT!
再起動用オペレーティングシステム, Ver.2.1.lb<br/>
Copyright(C) 2025,2026 日本重化学工業共同体, 通産省, 防衛庁 <br/>
CO-CPU    Check    256seg    OK<br/>
I/O VECTORS    Check    OK<br/>
CONSOLE DELIVERS    Check    OK<br/>
ROOFLING TABLES    Check    OK<br/>
STARTS ANALYZER    Check    SLAVE    OK<br/>
VIRUS PROTECTION    Check    GREEN    OK<br/>
<br/>
addr PSP blks size    SYSTEM CONFIGURATION<br/>
  owner/parameters<br/>
<br/>
D0E0 sys    1    5216    kozalc<br/>
D2C4 2081    1    12384    ersqrr<br/>
D2C5 DBER    1    21392    smalldrv<br/>
DE02-E000    1    8160    &lt;free&gt;<br/>
  &lt;free&gt;<br/>
0586 sys    1    2144    shimem total: 53 TB ---<br/>
0600 sys    1    3968    hemmj86<br/>`,
              null
            )
            .pauseFor(0)
            .pasteString(
              `
0706 sys    1    13356    smalldrv<br/>
07FD sys    1    13258    adamBD_CON<br/>
10CB sys    4    65224    &lt;config&gt;<br/>
ICDb &lt;---    1    15008    share/L:500<br/>
2081 &lt;---    1    13712    smalldrv<br/>
`,
              null
            )
            .pauseFor(100)
            .pasteString(
              `
23DB-9FFF    1    508464    &lt;free&gt;<br/>
--- HEMS ver14,0 (frame: C000h) ---<br/>
handle pages size name ---<br/>
---<br/>
free    116    18567<br/>
total    128    2048T<br/>
<br/>
`,
              null
            )
            .typeString(
              "日本語認識システムK O Z A I C ? Ver.2.1 /RI for JA_Hi-SYS<br/>"
            )
            .typeString("(C)2014 Reset Co.,Ltd.<br/>")
            .pasteString(
              `
K O Z A I C ? をシステムに組み込みました.<br/>
`,
              null
            )
            .pasteString(
              `
1 A — S Y S が進ドライバ Ver.1.00
`,
              null
            )
            .start();
        }}
      />
    </div>
  );
}
