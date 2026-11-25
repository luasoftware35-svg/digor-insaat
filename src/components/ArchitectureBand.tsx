"use client";

import Image from "next/image";
import { photos } from "@/data/photos";

const panels = [
  {
    src: photos.archMass,
    kicker: "01",
    title: "Hacim",
    text: "Cephe, kütle, çizgi",
  },
  {
    src: photos.archBone,
    kicker: "02",
    title: "Strüktür",
    text: "Beton, çelik, ritim",
  },
  {
    src: photos.archSpace,
    kicker: "03",
    title: "Mekân",
    text: "Işık, boşluk, teslim",
  },
];

export function ArchitectureBand() {
  return (
    <section className="border-y border-[var(--line)] bg-ivory">
      <p className="px-4 py-5 text-[11px] uppercase tracking-[0.35em] text-gold sm:px-6 lg:px-10">
        Çizgiden mekâna
      </p>
      <div className="arch-band">
        {panels.map((panel) => (
          <article key={panel.title} className="arch-panel group">
            <div className="arch-media">
              <Image
                src={panel.src}
                alt={panel.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="arch-veil" />
            <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-8 lg:p-10">
              <p className="font-serif text-5xl leading-none text-paper/25 transition duration-700 group-hover:text-gold/55 md:text-6xl">
                {panel.kicker}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-paper md:text-4xl">{panel.title}</h2>
              <p className="mt-2 max-w-[14rem] text-[11px] uppercase tracking-[0.22em] text-paper/70">
                {panel.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
