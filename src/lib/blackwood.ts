export const services = [
  { name: "Taglio uomo", price: 20, description: "Consulenza, taglio su misura e styling. Il tuo stile, curato in ogni dettaglio.", detail: "Taglio a forbice o sfumatura, lavaggio e finitura con prodotti professionali.", icon: "cut" },
  { name: "Modellatura barba", price: 15, description: "Linee precise e proporzioni perfette. Una barba che racconta chi sei.", detail: "Definizione dei contorni, panno caldo e trattamento con olio da barba.", icon: "beard" },
  { name: "Taglio + Barba", price: 30, description: "L’equilibrio perfetto. Un rituale completo per un look impeccabile.", detail: "Taglio personalizzato e modellatura della barba, con styling finale.", icon: "combo" },
  { name: "Trattamento premium", price: 40, description: "Prenditi il tuo tempo. L’esperienza Blackwood, senza compromessi.", detail: "Taglio, barba, panno caldo e trattamento dedicato a cute e capelli.", icon: "premium" },
] as const;

export const demoContact = {
  phoneDisplay: "+39 000 000 0000",
  whatsappUrl: "https://wa.me/390000000000?text=Ciao%20BLACKWOOD%2C%20vorrei%20prenotare%20un%20appuntamento.",
  email: "ciao@blackwood.example",
  address: "Via del Barbiere, 12 · 80100 Napoli",
};

export function pageHead(title: string, description: string) {
  return { meta: [
    { title: `${title} | BLACKWOOD BARBER Napoli` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | BLACKWOOD BARBER Napoli` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] };
}