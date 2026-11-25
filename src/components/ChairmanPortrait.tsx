"use client";

import { useState } from "react";
import { chairman } from "@/data/chairman";

export function ChairmanPortrait() {
  const [missing, setMissing] = useState(true);

  if (missing) {
    return (
      <div className="flex h-full min-h-[420px] flex-col justify-end bg-sand/55 p-8 md:min-h-[560px]">
        <p className="text-[11px] uppercase tracking-[0.32em] text-gold">Yönetim Kurulu Başkanı</p>
        <p className="mt-3 font-serif text-3xl md:text-4xl">{chairman.name}</p>
        <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
          Fotoğrafı eklemek için dosyayı public klasörüne serhat-ozcalimli.jpg
          adıyla koyun.
        </p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={chairman.photo}
      alt={chairman.name}
      className="absolute inset-0 h-full w-full object-cover object-top"
      onError={() => setMissing(true)}
    />
  );
}
