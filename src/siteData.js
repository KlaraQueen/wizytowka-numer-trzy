export const siteData = {
  companyName: "Beauty Nails",
  ownerName: "Karolina",

  images: {
    hero: require("./Images/hero.jpg"),
    team: require("./Images/team.png"),
    gallery: [
      { src: require("./Images/gallery-1.jpg"), alt: "Manicure hybrydowy" },
      { src: require("./Images/gallery-2.jpg"), alt: "Pedicure" },
      { src: require("./Images/gallery-3.jpg"), alt: "Nail art" },
      { src: require("./Images/gallery-4.jpg"), alt: "Zabieg pielęgnacyjny" },
    ],
    logo: null,
  },

  hero: {
    title: "Twoje dłonie i stopy zasługują na najlepszą pielęgnację.",
    subtitle: "Profesjonalny manicure, pedicure i zabiegi pielęgnacyjne. Stworzymy piękne paznokcie, które zachwycą – od klasycznego lakieru po wymyślny nail art.",
    buttonText: "Umów się na wizytę",
  },

  services: {
    label: "Zapoznaj się z naszą ofertą",
    title: "Usługi beauty",
    items: [
      { icon: "manicure", title: "Manicure hybrydowy", description: "Trwały manicure hybrydowy z pełną pielęgnacją dłoni. Wybór spośród setek kolorów i efektów." },
      { icon: "pedicure", title: "Pedicure", description: "Kompleksowy pedicure z peelingiem, masażem stóp i pielęgnacją paznokci. Idealny relaks po ciężkim dniu." },
      { icon: "nailArt", title: "Nail art", description: "Ręcznie wykonywane zdobienia – od subtelnych akcentów po wymyślne wzory. Realizujemy Twoje pomysły." },
      { icon: "extensions", title: "Przedłużanie paznokci", description: "Przedłużanie żelowe i akrylowe. Naturalny wygląd i trwałość na wiele tygodni." },
      { icon: "care", title: "Zabiegi pielęgnacyjne", description: "Parafina, odżywki, masaże dłoni i stóp – kompleksowa regeneracja skóry i paznokci." },
    ],
  },

  pricing: {
    label: "Cennik",
    title: "Orientacyjne ceny usług",
    subtitle: "Ceny mogą się różnić w zależności od rodzaju zabiegu i dodatków. Skontaktuj się po szczegóły.",
    items: [
      { name: "Manicure klasyczny", price: "od 60 zł", unit: "z pielęgnacją" },
      { name: "Manicure hybrydowy", price: "od 90 zł", unit: "pełny zabieg" },
      { name: "Pedicure", price: "od 100 zł", unit: "z peelingiem i masażem" },
      { name: "Pedicure hybrydowy", price: "od 130 zł", unit: "kompletny zabieg" },
      { name: "Nail art", price: "od 20 zł", unit: "za paznokieć / dodatek" },
      { name: "Przedłużanie paznokci", price: "od 120 zł", unit: "pełny zestaw" },
    ],
  },

  team: {
    label: "Poznaj nas",
    title: "Nasz zespół",
    description: "Doświadczone stylistki paznokci z pasją do beauty. Tworzymy paznokcie, które zachwycają – od klasyki po najnowsze trendy.",
    employees: [
      { name: "Karolina", role: "Właścicielka", description: "Kieruje salonem i specjalizuje się w manicure hybrydowym oraz nail art." },
      { name: "Katarzyna", role: "Stylistka paznokci", description: "Ekspertka od pedicure i zabiegów pielęgnacyjnych dłoni i stóp." },
      { name: "Anna", role: "Manicurystka", description: "Specjalizuje się w przedłużaniu paznokci i stylizacji hybrydowej." },
      { name: "Magdalena", role: "Stylistka", description: "Tworzy wymyślne zdobienia i realizuje indywidualne projekty nail art." },
      { name: "Paulina", role: "Kosmetolożka", description: "Zabiegi pielęgnacyjne, parafina i regeneracja skóry dłoni." },
    ],
  },

  reviews: {
    label: "Opinie Google",
    title: "Co mówią o nas klientki",
    items: [
      { author: "Anna K.", text: "Profesjonalna obsługa od A do Z. Manicure hybrydowy trzyma się idealnie, a paznokcie wyglądają rewelacyjnie. Polecam Beauty Nails każdej, kto szuka solidnego salonu!", rating: 5 },
      { author: "Tomasz M.", text: "Żona jest zachwycona! Zakupiłem jej voucher na pedicure – wróciła zrelaksowana i z pięknymi paznokciami. Na pewno wrócimy.", rating: 5 },
      { author: "Magdalena W.", text: "Świetny salon! Chodzę od roku. Zawsze punktualnie, ceny fair, a efekt pracy zachwyca. Nail art robią mistrzowsko. Polecam!", rating: 5 },
    ],
  },

  about: {
    label: "O nas",
    title: "Jakie usługi beauty oferujemy?",
    description: "Oferta jest szeroka i można ją elastycznie dopasować do potrzeb. Zajmujemy się manicure, pedicure, przedłużaniem paznokci oraz zabiegami pielęgnacyjnymi. W naszym zespole pracują stylistki z wieloletnim doświadczeniem.",
    works: [
      "manicure klasyczny i hybrydowy",
      "pedicure z peelingiem i masażem",
      "nail art – zdobienia ręczne",
      "przedłużanie paznokci żelowe i akrylowe",
      "zabiegi pielęgnacyjne – parafina, odżywki",
    ],
  },

  contact: {
    title: "Skontaktuj się",
    address: "Beauty Nails\nul. Przykładowa 15\n22-400 Przykład",
    nip: "000-000-00-00",
    regon: "000000000",
    phone: "+48 000 000 000",
    phoneHref: "tel:+48000000000",
    email: "kontakt@beautynails.pl",
    emailHref: "mailto:kontakt@beautynails.pl",
    area: "Zamość i okolice do 50 km",
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com" },
      { name: "YouTube", href: "https://youtube.com" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "X", href: "https://x.com" },
    ],
  },

  gallery: {
    title: "Nasze prace",
  },

  nav: {
    items: [
      { id: "o-nas", label: "O nas" },
      { id: "uslugi", label: "Usługi" },
      { id: "cennik", label: "Cennik" },
      { id: "zespol", label: "Nasz zespół" },
      { id: "realizacje", label: "Galeria" },
      { id: "opinie", label: "Opinie" },
      { id: "kontakt", label: "Kontakt" },
    ],
  },
};
