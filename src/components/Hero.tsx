"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { photos } from "@/data/photos";

const slides = [
  { image: photos.site, caption: "Şantiye yönetimi" },
  { image: photos.steel, caption: "Çelik strüktür" },
  { image: photos.crew, caption: "Saha ekipleri" },
  { image: photos.tower, caption: "Yüksek yapı" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ivory">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].image}
              alt={slides[index].caption}
              fill
              priority
              sizes="100vw"
              className="kenburns object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/78 to-ivory/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-ivory/35" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-[max(4rem,env(safe-area-inset-bottom))] pt-32 sm:px-6 lg:justify-center lg:px-10 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.22em] text-gold sm:text-[11px] sm:tracking-[0.48em]"
        >
          İnşaat · Taahhüt · Güçlendirme
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl font-serif text-[2.35rem] leading-[1.08] text-ink sm:mt-6 sm:text-7xl sm:leading-[0.92] lg:text-[5.4rem]"
        >
          Şantiye disiplininden
          <br />
          teslim kalitesine.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 max-w-xl text-base leading-7 text-charcoal sm:mt-8 sm:text-lg sm:leading-9"
        >
          Digor Group; hastane, okul, villa, yurt, ofis ve enerji işlerinde
          tadilat, taahhüt ve temel bina güçlendirme yürütür. Program görünür,
          kalite ölçülür, teslim tartışılmaz.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <Link
            href="/projeler"
            className="btn-gold inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-8 py-3.5 text-[12px] uppercase tracking-[0.22em] text-paper"
          >
            Projeler
          </Link>
          <Link
            href="/hizmetler"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-ink/20 bg-paper/55 px-8 py-3.5 text-[12px] uppercase tracking-[0.22em] text-ink backdrop-blur-sm"
          >
            Hizmetler
          </Link>
        </motion.div>
        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.18em] text-muted sm:mt-16 sm:gap-6 sm:tracking-[0.28em]">
          {slides.map((s, i) => (
            <button key={s.caption} type="button" onClick={() => setIndex(i)} className="text-left">
              <span className={i === index ? "text-gold" : ""}>0{i + 1}</span>
              {i === index && <span className="ml-3 text-ink">{s.caption}</span>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
