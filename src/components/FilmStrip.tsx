"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/content";

export function FilmStrip() {
  const items = [...projects, ...projects];

  return (
    <section className="overflow-hidden border-y border-[var(--line)] bg-paper py-8">
      <div className="mb-6 px-4 text-[11px] uppercase tracking-[0.35em] text-gold sm:px-6 lg:px-10">
        Saha ritmi
      </div>
      <div className="marquee">
        <div className="marquee-track gap-5 pr-5">
          {items.map((p, i) => (
            <Link
              key={`${p.slug}-${i}`}
              href={`/projeler/${p.slug}`}
              className="img-zoom relative h-44 w-[min(18.5rem,calc(100vw-2rem))] shrink-0 overflow-hidden md:h-64 md:w-[28rem]"
            >
              <Image src={p.image} alt={p.title} fill sizes="28rem" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold">{p.sector}</p>
                <p className="font-serif text-xl text-paper">{p.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
