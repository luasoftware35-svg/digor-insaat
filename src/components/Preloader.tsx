"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Preloader() {
  const [phase, setPhase] = useState<"boot" | "show" | "hide">("boot");

  useEffect(() => {
    if (sessionStorage.getItem("digor-preloader")) {
      setPhase("hide");
      return;
    }

    setPhase("show");
    const hide = window.setTimeout(() => {
      sessionStorage.setItem("digor-preloader", "1");
      setPhase("hide");
    }, 1800);

    return () => window.clearTimeout(hide);
  }, []);

  if (phase === "boot" || phase === "hide") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#080808]">
      <div className="page-enter text-center">
        <Image
          src="/logo-dark.png"
          alt="Digor Group"
          width={750}
          height={680}
          className="mx-auto h-40 w-auto object-contain sm:h-52"
          priority
        />
      </div>
    </div>
  );
}
