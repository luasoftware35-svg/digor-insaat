import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Preloader } from "@/components/Preloader";
import { company } from "@/data/content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f3eb",
};

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: "Digor Group | İnşaat ve Taahhüt",
    template: "%s | Digor Group",
  },
  description:
    "Digor Group İnşaat ve Taahhüt. Hastane, okul, villa, yurt, ofis ve enerji yapılarında tadilat, taahhüt ve temel bina güçlendirme. TLS ile korunan kurumsal site.",
  keywords: [
    "Digor Group",
    "inşaat",
    "taahhüt",
    "bina güçlendirme",
    "tadilat",
    "Isparta",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Digor Group",
    title: "Digor Group | İnşaat ve Taahhüt",
    description:
      "Kurumsal inşaat ve taahhüt. Tadilat, güçlendirme ve anahtar teslim saha işleri.",
    url: company.website,
  },
  icons: {
    icon: "/logo-light.png",
    apple: "/logo-light.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory text-ink">
        <JsonLd />
        <Preloader />
        <div className="grain" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
