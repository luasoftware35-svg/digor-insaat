import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/content";

export const metadata: Metadata = { title: "İletişim" };

export default function IletisimPage() {
  return (
    <>
      <PageHero
        kicker="İletişim"
        title="Projenizi masaya koyalım."
        text="Keşif, fizibilite veya teklif. Tadilat, taahhüt ve temel bina güçlendirme için aynı ofis yanıt verir. İletişim TLS ile şifrelenir; KVKK kapsamında işlenir."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Ofis</p>
          <ul className="mt-8 space-y-8">
            {[
              ["Adres", company.address],
              ["Telefon", company.phone],
              ["E-posta", company.email],
              ["Çalışma", company.hours],
            ].map(([k, v]) => (
              <li key={k}>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted">{k}</p>
                {k === "Telefon" ? (
                  <a href={company.phoneHref} className="mt-2 block font-serif text-xl sm:text-2xl">
                    {v}
                  </a>
                ) : (
                  <p className="mt-2 break-words font-serif text-xl leading-snug sm:text-2xl">{v}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-24 lg:px-10">
        <p className="mb-8 text-[11px] uppercase tracking-[0.3em] text-gold">Sık sorulanlar</p>
        <Faq />
      </section>
    </>
  );
}
