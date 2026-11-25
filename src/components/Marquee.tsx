import { services } from "@/data/content";

export function Marquee() {
  const items = [...services, ...services];

  return (
    <div className="border-y border-[var(--line)] bg-paper py-6">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((s, i) => (
            <span
              key={`${s.slug}-${i}`}
              className="mx-6 font-serif text-2xl text-ink/80 md:mx-8 md:text-4xl"
            >
              {s.title}
              <span className="mx-8 text-gold">—</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
