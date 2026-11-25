import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Çerez Politikası" };

export default function CerezPage() {
  return (
    <LegalPage
      kicker="Kurumsal"
      title="Çerez politikası"
      intro="Sitemizde kullanılan çerezlerin türü, amacı ve nasıl yönetileceği aşağıdadır."
      sections={[
        {
          heading: "Çerez nedir",
          body: [
            "Çerez, tarayıcınıza bırakılan küçük bir metin dosyasıdır. Oturumun çalışması, güvenlik ve tercihlerin hatırlanması için kullanılır.",
          ],
        },
        {
          heading: "Zorunlu çerezler",
          body: [
            "Site güvenliği, çerez tercihinin saklanması ve formun düzgün iletilmesi için zorunlu çerezler açık tutulur. Bunlar olmadan kurumsal sitenin temel işlevi sağlanamaz.",
          ],
        },
        {
          heading: "Tercih çerezleri",
          body: [
            "Onay vermeniz halinde performans ve kullanım istatistikleri için çerez kullanılabilir. Reddetmeniz halinde yalnızca zorunlu çerezler kalır.",
          ],
        },
        {
          heading: "Yönetim",
          body: [
            "Tarayıcı ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezleri kapatmak bazı sayfaların çalışmasını bozabilir. Tercihinizi sitedeki çerez çubuğundan da güncelleyebilirsiniz.",
          ],
        },
      ]}
    />
  );
}
