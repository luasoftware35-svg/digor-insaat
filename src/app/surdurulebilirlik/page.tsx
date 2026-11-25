import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Kalite ve Sürdürülebilirlik" };

const items = [
  {
    title: "İş güvenliği",
    text: "ISO 45001 yaklaşımıyla saha günlükleri, eğitimler ve denetimler teslim takviminin parçasıdır.",
  },
  {
    title: "Kalite güvence",
    text: "Malzeme onayları, numune panelleri ve imalat kontrolleri kademeli olarak kapanır.",
  },
  {
    title: "Çevre",
    text: "Atık ayrıştırma, gürültü ve toz yönetimi, komşu yapıların hakları ile birlikte planlanır.",
  },
  {
    title: "Enerji ve işletme",
    text: "Cephe, HVAC ve aydınlatma seçimleri yalnızca ilk maliyeti değil, işletme ömrünü de hesaba katar.",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        kicker="Kalite"
        title="Sürdürülebilirlik teslimden sonra başlar."
        text="Belge duvarda durmaz. Güvenli saha, ölçülebilir malzeme ve yaşayan bina Digor’un günlük rutinidir."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="min-h-[200px] border border-[var(--line)] bg-paper p-6 md:min-h-[240px] md:p-10">
                <p className="text-[11px] tracking-[0.3em] text-gold">0{i + 1}</p>
                <h2 className="mt-4 font-serif text-3xl">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
