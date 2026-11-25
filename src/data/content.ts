import { photos } from "./photos";

export const company = {
  name: "Digor Group",
  legal: "Digor Group İnşaat ve Taahhüt",
  tagline: "Şehirler çizgiyle, güven teslimle büyür.",
  phone: "0554 132 50 84",
  phoneHref: "tel:+905541325084",
  email: "info@digorgroup.com",
  address: "Yenişehir Mah. 75 Sok. No:5/A, 20040 Denizli Merkezefendi/Denizli",
  hours: "Pazartesi — Cuma, 09:00–18:00",
  website: "https://digorgroup.com",
};

export const legalNav = [
  { href: "/gizlilik", label: "Gizlilik Politikası" },
  { href: "/kvkk", label: "KVKK Aydınlatma" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
  { href: "/yasal-uyari", label: "Yasal Uyarı" },
];

export const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/surdurulebilirlik", label: "Kalite" },
  { href: "/kariyer", label: "Kariyer" },
  { href: "/iletisim", label: "İletişim" },
];

export const services = [
  {
    slug: "taahhut",
    title: "Taahhüt İşleri",
    kicker: "01",
    summary:
      "Tek muhatap, tek ritim: plan, saha, tedarik ve teslim aynı masada yürür.",
    body: "Karmaşık bir yapı, dağınık bir ekipten değil; net bir komuta hattından doğar. Digor Group anahtar teslim taahhütte iş programını, maliyeti ve iş güvenliğini aynı dilde konuşturur. Teslim günü sürpriz değildir — aylarca ölçülmüş bir kapanıştır.",
    points: [
      "Anahtar teslim yapı taahhüdü",
      "İş programı ve maliyet kontrolü",
      "Şantiye ve lojistik yönetimi",
      "Geçici kabul / kesin kabul süreci",
    ],
    image: photos.site,
  },
  {
    slug: "guclendirme",
    title: "Temel Bina Güçlendirme",
    kicker: "02",
    summary:
      "Mevcut yapıyı ayakta tutmak: temel, perde, kolon ve döşemede mühendislik güçlendirmesi.",
    body: "Güçlendirme, yeni bina yapmak kadar titizlik ister. Mevcut taşıyıcı sistem okunur, zemin ve deprem etkisi hesaplanır, imalat işleyen bir yapının içinde yürütülür. Digor Group temel bina güçlendirmede saha ile mühendisliği aynı dilde tutar.",
    points: [
      "Temel güçlendirme ve zemin iyileştirme",
      "Kolon, kiriş ve perde güçlendirmesi",
      "Deprem yönetmeliğine uygun müdahale",
      "İşleyen bina içinde kontrollü imalat",
    ],
    image: photos.steel,
  },
  {
    slug: "egitim",
    title: "Eğitim Yapıları",
    kicker: "03",
    summary:
      "Derslikten laboratuvara, bahçeden spor salonuna: öğrenmenin mekânını kurarız.",
    body: "Bir okul, duvarlardan fazlasıdır. Sabah girişinin sakinliği, merdivenlerin güvenliği, laboratuvarın ışığı ve bahçenin nefesi birlikte tasarlanır. Digor Group eğitim yapılarında akustik, sirkülasyon ve uzun ömürlü malzemeyi aynı çizgide tutar — çünkü çocuklar, öğretmenler ve yıllar bu mekânı paylaşır.",
    points: [
      "İlkokul, lise ve üniversite kampüsleri",
      "Laboratuvar ve atölye yapıları",
      "Yurt ve sosyal tesisler",
      "Deprem yönetmeliğine uygun güçlendirme",
    ],
    image: photos.school,
  },
  {
    slug: "saglik",
    title: "Sağlık Yapıları",
    kicker: "04",
    summary:
      "Hastane durmaz. Şantiye de o gerçeğe göre yazılır.",
    body: "Sağlık yapısında milimetre, hayat demektir. Medikal gaz, steril alan, acil sirkülasyon ve HVAC aynı anda çözülür. Digor Group hastane ve poliklinik işlerinde şantiyeyi, işletmenin bir gün bile duramayacağı bir binaya göre yönetir.",
    points: [
      "Hastane ve tıp merkezi inşaatı",
      "Ameliyathane ve steril alanlar",
      "Poliklinik ve sağlık kampüsleri",
      "Teknik altyapı ve medikal koordinasyon",
    ],
    image: photos.hospital,
  },
  {
    slug: "otel",
    title: "Otel ve Turizm",
    kicker: "05",
    summary:
      "Açılış tarihi bir vaattir. Biz o tarihi koruyan şantiyeyi kurarız.",
    body: "Bir otelde lobi ilk izlenim, oda ise gecenin tamamıdır. Cephe, ıslak hacim, mutfak ve teknik katlar paralel ilerler; çünkü turizmde takvim cirodur. Digor Group, misafirin adım attığı günü şantiyenin ilk gününden itibaren görür.",
    points: [
      "Şehir oteli ve resort inşaatı",
      "Lobi, oda ve F&B hacimleri",
      "Cephe ve iç mekân koordinasyonu",
      "İşletmeye hazır teslim paketi",
    ],
    image: photos.hotel,
  },
  {
    slug: "kat-karsiligi",
    title: "Kat Karşılığı",
    kicker: "06",
    summary:
      "Arsa sahibinin hakkı görünür, inşaatın ritmi paylaşılır.",
    body: "Kat karşılığı bir sözleşme değil, bir ortaklıktır. Fizibilite, bağımsız bölüm paylaşımı ve hak ediş aynı raporda durur. Digor Group arsa sahibini kapı dışında bırakmaz; her kat yükseldikçe güven de yükselir.",
    points: [
      "Fizibilite ve imar analizi",
      "Sözleşme ve bağımsız bölüm planı",
      "İnşaat ve kalite denetimi",
      "Teslim, iskan ve tapu süreci",
    ],
    image: photos.tower,
  },
  {
    slug: "kamu",
    title: "Kamu ve Kurumsal",
    kicker: "07",
    summary:
      "Şartname kâğıtta kalmaz; şantiyenin günlük diline dönüşür.",
    body: "Kamu ve kurumsal yapılarda uzun ömür, bakımı kolay detay ve denetime hazır dosya aynı işin parçasıdır. Digor Group idari kampüs ve sosyal tesislerde mevzuatı bir engel değil, kalitenin iskeleti olarak okur.",
    points: [
      "İdari ve sosyal tesisler",
      "Kurumsal ofis ve kampüs",
      "İhale ve şartname uyumu",
      "Bakım kolaylığı odaklı detay",
    ],
    image: photos.facade,
  },
];

export const projects = [
  {
    slug: "odak-hastanesi",
    title: "Odak Hastanesi",
    location: "Türkiye",
    year: "Teslim",
    sector: "Sağlık",
    area: "Bakım · Onarım · Tadilat",
    status: "Tamamlandı",
    summary: "Hastane işletmesi durmadan bakım, onarım ve tadilat.",
    image: "/projects/odak-hastanesi.jpg",
    gallery: [],
  },
  {
    slug: "bahcesehir-koleji",
    title: "Bahçeşehir Koleji",
    location: "Türkiye",
    year: "Teslim",
    sector: "Eğitim",
    area: "Tadilat",
    status: "Tamamlandı",
    summary: "Eğitim yapısında tadilat: derslik ve ortak alanların yenilenmesi.",
    image: photos.school,
    gallery: [photos.campus, photos.crew],
  },
  {
    slug: "isparta-belediye-otopark",
    title: "Isparta Belediyesi Otopark",
    location: "Isparta",
    year: "Teslim",
    sector: "Kamu",
    area: "Otopark",
    status: "Tamamlandı",
    summary: "Isparta Belediyesi otopark yapımı ve saha düzenlemesi.",
    image: "/projects/isparta-otopark.jpg",
    gallery: [],
  },
  {
    slug: "basmaci-rezidans",
    title: "Basmacı Rezidans",
    location: "Türkiye",
    year: "Teslim",
    sector: "Konut",
    area: "Bakım · Onarım",
    status: "Tamamlandı",
    summary: "Rezidans yapısında bakım ve onarım işleri.",
    image: photos.tower,
    gallery: [photos.facade, photos.interior],
  },
  {
    slug: "didim-mavisehir-villa",
    title: "Didim Mavişehir Villa",
    location: "Didim · Denizli Öğretmenler Sitesi",
    year: "Teslim",
    sector: "Villa",
    area: "Villa",
    status: "Tamamlandı",
    summary: "Didim Mavişehir, Denizli Öğretmenler Sitesi'nde villa işi.",
    image: photos.hotel,
    gallery: [photos.facade, photos.crew],
  },
  {
    slug: "camlik-feridun-basmaci",
    title: "Çamlık Feridun Basmacı Evi",
    location: "Çamlık",
    year: "Teslim",
    sector: "Konut",
    area: "Ev tadilatı",
    status: "Tamamlandı",
    summary: "Feridun Basmacı evinde kapsamlı tadilat.",
    image: photos.facade,
    gallery: [photos.interior, photos.site],
  },
  {
    slug: "atateks",
    title: "Atateks",
    location: "Türkiye",
    year: "Teslim",
    sector: "Endüstri",
    area: "Komple tadilat",
    status: "Tamamlandı",
    summary: "Atateks tesisinde komple tadilat.",
    image: photos.steel,
    gallery: [photos.site, photos.crew],
  },
  {
    slug: "kimil-tekstil",
    title: "Kımıl Tekstil Ofis",
    location: "Türkiye",
    year: "Teslim",
    sector: "Ofis",
    area: "İç tadilat",
    status: "Tamamlandı",
    summary: "Kımıl Tekstil'in kendi ofisinde iç tadilat.",
    image: photos.interior,
    gallery: [photos.tower, photos.facade],
  },
  {
    slug: "yagmur-enerji-nam-nam-hes",
    title: "Yağmur Enerji — Nam Nam HES",
    location: "Türkiye",
    year: "Teslim",
    sector: "Enerji",
    area: "HES projesi",
    status: "Tamamlandı",
    summary: "Yağmur Enerji Nam Nam hidroelektrik santral projesi.",
    image: photos.aerial,
    gallery: [photos.steel, photos.site],
  },
  {
    slug: "urla-ikiz-villalar",
    title: "Urla İkiz Villalar",
    location: "Urla",
    year: "Teslim",
    sector: "Villa",
    area: "İkiz villa",
    status: "Tamamlandı",
    summary: "Urla'da ikiz villa işi.",
    image: photos.hotel,
    gallery: [photos.aerial, photos.interior],
  },
  {
    slug: "isparta-onur-erkek-yurdu",
    title: "Isparta Onur Erkek Yurdu",
    location: "Isparta",
    year: "Teslim",
    sector: "Eğitim",
    area: "Komple tadilat · yurt-apart",
    status: "Tamamlandı",
    summary: "Erkek yurdunun komple tadilatı; yapı yurt apartmana çevrildi.",
    image: "/projects/isparta-onur-yurdu.webp",
    gallery: [],
  },
  {
    slug: "kusadasi-12-villa",
    title: "Kuşadası 12 Villa",
    location: "Kuşadası",
    year: "Teslim",
    sector: "Villa",
    area: "12 villa",
    status: "Tamamlandı",
    summary: "Kuşadası'nda on iki villalık iş.",
    image: photos.tower,
    gallery: [photos.hotel, photos.site],
  },
  {
    slug: "villa-bella-denizli",
    title: "Villa Bella",
    location: "Denizli · Bahçeşehir karşısı",
    year: "Teslim",
    sector: "Villa",
    area: "Villa",
    status: "Tamamlandı",
    summary: "Denizli'de, Bahçeşehir karşısında Villa Bella.",
    image: "/projects/villa-bella.jpg",
    gallery: [],
  },
];

export const stats = [
  { value: 13, suffix: "+", label: "Yıllık deneyim" },
  { value: 13, suffix: "", label: "Tamamlanan iş" },
  { value: 7, suffix: "", label: "Faaliyet alanı" },
  { value: 8, suffix: "+", label: "Şehir ve bölge" },
];

export const timeline = [
  {
    year: "2013",
    title: "Lisans",
    text: "Serhat Özçalımlı, Süleyman Demirel Üniversitesi İnşaat Mühendisliği bölümünden mezun oldu.",
  },
  {
    year: "YL",
    title: "Yüksek lisans",
    text: "Lisansın ardından yüksek lisansını tamamladı; mühendislik bilgisi sahayla birlikte derinleşti.",
  },
  {
    year: "Akademi",
    title: "Akademide",
    text: "Bugün akademide çalışmaya devam eder; Digor Group saha işlerini aynı titizlikle yürütür.",
  },
  {
    year: "Saha",
    title: "Teslim edilen işler",
    text: "Hastane, okul, belediye, villa, HES ve yurt tadilatından enerji projesine uzanan portföy.",
  },
];

export const visionMission = [
  {
    kicker: "01",
    title: "Misyonumuz",
    lead: "Söz verdiğimiz yapıyı, hoşumuza gitmeyen hiçbir işe el sürmeden teslim etmek.",
    text: "Digor Group; bakım, tadilat, taahhüt ve temel bina güçlendirmede ofis ile sahayı aynı dilde tutar. Hastaneden villaya, yurt apartmanından HES projesine her işte maliyet görünür, kalite ölçülür, teslim tartışılmaz. Mühendislik hesabı masada kalmaz; duvara, temele ve teslim dosyasına işler.",
  },
  {
    kicker: "02",
    title: "Vizyonumuz",
    lead: "Yıllar sonra da ayakta duran, adı güvenle anılan yapılar bırakmak.",
    text: "Akademinin titizliği ile şantiyenin ritmini aynı çatıda tutmak istiyoruz. Güçlendirdiğimiz temel, yenilediğimiz yurt, teslim ettiğimiz villa: her iş Digor adının durduğu çizgi olsun. Büyümek daha fazla metrekare değil; her yeni işte aynı standardı koruyabilmektir.",
  },
];

export const values = [
  {
    title: "Disiplin",
    text: "Takvim bir slayt değil, sahada her sabah yeniden kurulan düzendir.",
  },
  {
    title: "Şeffaflık",
    text: "Maliyet, süre ve kalite aynı raporda durur. Gölgede kalan rakam yoktur.",
  },
  {
    title: "Zanaat",
    text: "Görünen cephe kadar, görünmeyen detay da teslim gününden önce kapanır.",
  },
  {
    title: "Sorumluluk",
    text: "İş güvenliği ve komşu hakları, beton dökülmeden önce masadadır.",
  },
];

export const process = [
  { step: "01", title: "Keşif", text: "Arsa konuşur, imar cevap verir, riskler masaya çıkar." },
  { step: "02", title: "Plan", text: "Bütçe kilitlenir, tedarik sıralanır, takvim nefes alır." },
  { step: "03", title: "İnşa", text: "Saha, kalite ve güvenlik aynı ritimde yükselir." },
  { step: "04", title: "Teslim", text: "Puntalama, eğitim ve garanti dosyası ile yapı yaşama bırakılır." },
];

export const jobs = [
  {
    title: "Şantiye Şefi",
    location: "İstanbul",
    type: "Tam zamanlı",
    text: "Eğitim ve sağlık yapıları deneyimi olan, iş programını sahada yönetebilen profil.",
  },
  {
    title: "Mimari Uygulama Mimarı",
    location: "İstanbul",
    type: "Tam zamanlı",
    text: "Detay çözümü, imalat koordinasyonu ve şantiye revizyonlarında güçlü.",
  },
  {
    title: "İş Güvenliği Uzmanı",
    location: "Ankara",
    type: "Proje bazlı",
    text: "ISO 45001 bilgisi ve yüksek kat / sağlık yapısı saha deneyimi.",
  },
];

export { chairman, faqs } from "./chairman";
