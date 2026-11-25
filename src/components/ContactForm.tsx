"use client";

import Link from "next/link";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {sent ? (
        <div className="border border-[var(--line)] bg-paper p-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Teşekkürler</p>
          <p className="mt-4 font-serif text-3xl">Mesajınız alındı. En kısa sürede dönüş yapacağız.</p>
        </div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-[11px] uppercase tracking-[0.22em] text-muted">
              Ad Soyad
              <input
                required
                name="name"
                autoComplete="name"
                className="mt-2 w-full border-b border-[var(--line)] bg-transparent py-3 text-base tracking-normal text-ink outline-none focus:border-gold"
              />
            </label>
            <label className="block text-[11px] uppercase tracking-[0.22em] text-muted">
              Firma
              <input
                name="company"
                autoComplete="organization"
                className="mt-2 w-full border-b border-[var(--line)] bg-transparent py-3 text-base tracking-normal text-ink outline-none focus:border-gold"
              />
            </label>
            <label className="block text-[11px] uppercase tracking-[0.22em] text-muted">
              E-posta
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-2 w-full border-b border-[var(--line)] bg-transparent py-3 text-base tracking-normal text-ink outline-none focus:border-gold"
              />
            </label>
            <label className="block text-[11px] uppercase tracking-[0.22em] text-muted">
              Telefon
              <input
                name="phone"
                autoComplete="tel"
                className="mt-2 w-full border-b border-[var(--line)] bg-transparent py-3 text-base tracking-normal text-ink outline-none focus:border-gold"
              />
            </label>
            <label className="block text-[11px] uppercase tracking-[0.22em] text-muted md:col-span-2">
              Konu
              <select
                name="topic"
                className="mt-2 w-full border-b border-[var(--line)] bg-transparent py-3 text-base text-ink outline-none focus:border-gold"
                defaultValue="Taahhüt"
              >
                <option>Taahhüt</option>
                <option>Temel bina güçlendirme</option>
                <option>Bakım · onarım · tadilat</option>
                <option>Eğitim yapıları</option>
                <option>Sağlık yapıları</option>
                <option>Diğer</option>
              </select>
            </label>
          </div>
          <label className="block text-[11px] uppercase tracking-[0.22em] text-muted">
            Mesaj
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-none border-b border-[var(--line)] bg-transparent py-3 text-base tracking-normal text-ink outline-none focus:border-gold"
            />
          </label>
          <label className="flex items-start gap-3 text-sm leading-6 text-muted">
            <input required type="checkbox" name="kvkk" className="mt-1 accent-[var(--gold)]" />
            <span>
              <Link href="/kvkk" className="text-gold">
                KVKK aydınlatma metnini
              </Link>{" "}
              okudum, kişisel verilerimin teklif ve iletişim amacıyla işlenmesini kabul ediyorum.
            </span>
          </label>
          <button
            type="submit"
            className="btn-gold min-h-11 rounded-full bg-ink px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-paper"
          >
            Gönder
          </button>
        </>
      )}
    </form>
  );
}
