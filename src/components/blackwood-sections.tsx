import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Scissors, Sparkles, Brush, Blend, MapPin, Clock, MessageCircle, ArrowLeft, ArrowRight, X, Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, demoContact } from "@/lib/blackwood";
import interior from "@/assets/interior.webp.asset.json";
import barber from "@/assets/barber.webp.asset.json";
import tools from "@/assets/tools.webp.asset.json";
import cut from "@/assets/cut.webp.asset.json";
import interiorSmall from "@/assets/interior-960.webp.asset.json";
import barberSmall from "@/assets/barber-640.webp.asset.json";
import toolsSmall from "@/assets/tools-640.webp.asset.json";
import cutSmall from "@/assets/cut-640.webp.asset.json";

export const photos = [
  { src: barber.url, thumbnail: barberSmall.url, label: "L’arte del dettaglio", alt: "Barbiere al lavoro su un taglio uomo a forbice" },
  { src: cut.url, thumbnail: cutSmall.url, label: "Linee che parlano", alt: "Profilo di un taglio uomo sfumato con barba curata" },
  { src: interior.url, thumbnail: interiorSmall.url, label: "Il nostro mondo", alt: "Interno della barberia con poltrone in pelle e specchi" },
  { src: tools.url, thumbnail: toolsSmall.url, label: "Gli strumenti del mestiere", alt: "Rasoio, forbici e pennello da barba sul piano di lavoro" },
];

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{description && <p className="section-copy mt-5 max-w-lg">{description}</p>}</div>;
}

export function ServicesSection({ full = false }: { full?: boolean }) {
  const icons = [Scissors, Brush, Blend, Sparkles];
  return <section className="section"><div className="site-width"><div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="L’arte di prendersi cura" title="Il tuo stile. La nostra firma." /><p className="section-copy max-w-xs">Tradizione nelle mani. Carattere in ogni dettaglio.<br />Scegli il tuo rituale.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((service, index) => { const Icon = icons[index] ?? Scissors; return <article key={service.name} className="service-card"><Icon className="service-icon" /><h3 className="service-name">{service.name}</h3><p className="section-copy mt-3 min-h-20 text-xs">{service.description}</p>{full && <p className="section-copy mt-4 text-xs">{service.detail}</p>}<div className="mt-7 flex items-center justify-between border-t border-border pt-5"><span className="service-price">€{service.price}</span><Button asChild variant="ghost" size="icon" aria-label={`Prenota ${service.name}`} title={`Prenota ${service.name}`}><Link to="/contatti"><ArrowUpRight className="text-primary" /></Link></Button></div></article>; })}</div>{!full && <div className="mt-8 text-center"><Button asChild variant="link" className="text-[10px] uppercase tracking-widest"><Link to="/servizi">Tutti i servizi <ArrowUpRight /></Link></Button></div>}{full && <p className="section-copy mt-8 text-xs">Listino dimostrativo · Prezzi comprensivi di IVA · Nessuna prenotazione reale disponibile.</p>}</div></section>;
}

export function AboutSection({ full = false }: { full?: boolean }) {
  return <section className="section section-rule"><div className="site-width grid items-center gap-14 md:grid-cols-2 md:gap-20"><div className="about-image"><img className="editorial-image" src={barberSmall.url} srcSet={`${barberSmall.url} 640w, ${barber.url} 1122w`} sizes="(min-width: 768px) 50vw, calc(100vw - 40px)" decoding="async" alt="Precisione e attenzione durante il taglio a forbice" loading="lazy" width="1122" height="1402" /><div className="about-stamp"><Scissors className="mx-auto mb-3" size={30} strokeWidth={1} /><span className="font-display text-xl uppercase">Passione autentica.</span><p className="mt-2 text-[9px] uppercase tracking-widest">Nessun compromesso.</p></div></div><div><SectionHeading eyebrow="Più di un semplice taglio" title="Un mestiere antico. Un carattere contemporaneo." /><p className="section-copy mt-7">BLACKWOOD nasce da un’idea semplice: lo stile non si impone, si trova. Nel cuore di Napoli, immaginiamo un luogo dove la tradizione del barbiere incontra una nuova visione della cura maschile.</p><p className="section-copy mt-5">Ogni viso ha la sua storia. Noi la ascoltiamo, poi la traduciamo in linee, proporzioni e dettagli. Con mani esperte, prodotti selezionati e il tempo che meriti.</p>{full && <p className="section-copy mt-5">La nostra filosofia mette al centro l’ascolto: una consulenza sincera, un gesto preciso e un’atmosfera in cui sentirsi a proprio agio. Dal primo colpo di forbice alla finitura, niente è lasciato al caso.</p>}<div className="mt-8 flex gap-9 border-t border-border pt-6"><div><p className="font-display text-lg text-primary">PRECISIONE</p><p className="mt-2 text-[10px] text-muted-foreground">In ogni gesto</p></div><div><p className="font-display text-lg text-primary">CARATTERE</p><p className="mt-2 text-[10px] text-muted-foreground">In ogni persona</p></div></div>{!full && <Button asChild variant="editorial" className="mt-9 h-11 px-6 text-[10px]"><Link to="/chi-siamo">La nostra storia <ArrowUpRight /></Link></Button>}</div></div></section>;
}

export function GallerySection({ full = false }: { full?: boolean }) {
  const [selected, setSelected] = useState<number | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const isOpen = selected !== null;
  const photo = selected === null ? null : photos[selected];
  useEffect(() => {
    if (!isOpen) return;
    const prior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); setSelected(null); }
      if (event.key === "ArrowRight") { event.preventDefault(); setSelected(i => i === null ? null : (i + 1) % photos.length); }
      if (event.key === "ArrowLeft") { event.preventDefault(); setSelected(i => i === null ? null : (i + photos.length - 1) % photos.length); }
      if (event.key === "Tab") { event.preventDefault(); const buttons = Array.from(dialogRef.current?.querySelectorAll<HTMLButtonElement>("button") ?? []); const current = buttons.indexOf(document.activeElement as HTMLButtonElement); const next = buttons[(current + (event.shiftKey ? buttons.length - 1 : 1)) % buttons.length]; next?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prior; document.removeEventListener("keydown", onKey); previousFocus.current?.focus(); };
  }, [isOpen]);
  return <section className="section section-rule"><div className="site-width"><div className="mb-10 flex items-end justify-between gap-5"><SectionHeading eyebrow="Dentro Blackwood" title="Il carattere si vede." />{!full && <Button asChild variant="link" className="hidden text-[10px] uppercase tracking-widest sm:inline-flex"><Link to="/galleria">Esplora la galleria <ArrowUpRight /></Link></Button>}</div><div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{photos.map((item, i) => <Button key={item.src} variant="ghost" className="gallery-item h-auto w-full rounded-none p-0" aria-label={`Apri foto: ${item.label}`} onClick={event => { previousFocus.current = event.currentTarget; setSelected(i); }}><img src={item.thumbnail} alt={item.alt} decoding="async" loading="lazy" width="600" height="750" /><span className="gallery-label"><span>{item.label}</span><Plus size={15} /></span></Button>)}</div>{full && <p className="section-copy mt-6 text-xs">Fotografie illustrative create per questa barberia immaginaria.</p>}</div>{photo && <div ref={dialogRef} className="lightbox" onClick={event => { if (event.target === event.currentTarget) setSelected(null); }} role="dialog" aria-modal="true" aria-labelledby="foto-titolo"><Button ref={closeRef} variant="ghost" size="icon" className="absolute right-5 top-5" aria-label="Chiudi foto" onClick={() => setSelected(null)}><X /></Button><img key={photo.src} src={photo.src} alt={photo.alt} decoding="async" width="1122" height="1402" /><div className="mt-5 flex w-full max-w-xl items-center justify-between gap-4"><Button variant="editorial" size="icon" aria-label="Foto precedente" onClick={() => setSelected(i => i === null ? null : (i + photos.length - 1) % photos.length)}><ArrowLeft /></Button><p id="foto-titolo" className="text-center text-sm">{photo.label} <span className="ml-3 text-muted-foreground">{(selected ?? 0) + 1} / {photos.length}</span></p><Button variant="editorial" size="icon" aria-label="Foto successiva" onClick={() => setSelected(i => i === null ? null : (i + 1) % photos.length)}><ArrowRight /></Button></div></div>}</section>;
}

export function TestimonialsSection() {
  const reviews = [
    { name: "Marco R.", quote: "Non un semplice taglio, ma un momento per sé. Precisione, stile e un’atmosfera che ti fa sentire subito a casa." },
    { name: "Alessandro D.", quote: "Finalmente un posto dove ascoltano davvero quello che cerchi. Taglio e barba curati nei minimi dettagli." },
    { name: "Luca P.", quote: "La tradizione del barbiere, con un gusto moderno. Un’esperienza che tornerei a scegliere senza pensarci." },
  ];
  return <section className="section section-rule bg-card"><div className="site-width"><div className="text-center"><p className="text-[10px] uppercase tracking-[3px] text-primary">Parole di carattere</p><h2 className="section-title">Il dettaglio fa la differenza.</h2><p className="mt-4 text-[10px] text-muted-foreground">Testimonianze di esempio · Contenuti demo, non recensioni verificate</p></div><div className="mt-12 grid gap-10 md:grid-cols-3">{reviews.map(review => <figure key={review.name} className="border-t border-border pt-7"><div className="mb-5 flex gap-1 text-primary" aria-label="Valutazione dimostrativa: 5 stelle">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={12} fill="currentColor" />)}</div><blockquote className="text-sm leading-7 text-foreground/80">“{review.quote}”</blockquote><figcaption className="mt-6 text-xs">{review.name}<span className="ml-3 text-[9px] uppercase tracking-widest text-muted-foreground">Esempio</span></figcaption></figure>)}</div></div></section>;
}

export function ContactSection({ full = false }: { full?: boolean }) {
  const [showDemo, setShowDemo] = useState(false);
  return <section className="section section-rule"><div className="site-width"><div className="grid gap-14 md:grid-cols-2"><div><SectionHeading eyebrow="Il prossimo passo è tuo" title="Prenditi il tuo tempo. Al resto pensiamo noi." /><p className="section-copy mt-6">Un nuovo taglio, la tua barba, un momento tutto tuo.<br />Ci trovi a Napoli. Ti aspettiamo da BLACKWOOD.</p><div className="mt-8 space-y-6"><div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-primary" size={19} /><div><p className="text-sm">{demoContact.address}</p><p className="mt-2 text-[10px] text-muted-foreground">Indirizzo di esempio, non una sede reale</p></div></div><div className="flex gap-4"><Clock className="mt-1 shrink-0 text-primary" size={19} /><div><p className="text-sm">Martedì – Sabato · 09:00 – 20:00</p><p className="mt-2 text-xs text-muted-foreground">Domenica e Lunedì · Chiuso</p><p className="mt-2 text-[10px] text-muted-foreground">Orari dimostrativi</p></div></div></div><Button variant="gold" className="mt-9 h-12 px-6 text-[10px]" onClick={() => setShowDemo(!showDemo)} aria-expanded={showDemo}><MessageCircle /> Prenota su WhatsApp <ArrowUpRight /></Button><p className="mt-3 text-[10px] text-muted-foreground">Numero segnaposto: {demoContact.phoneDisplay} · Nessuna prenotazione reale</p>{showDemo && <div className="mt-5 border-l border-primary pl-4" role="status"><p className="section-copy text-xs">Questo sito è una dimostrazione. Il numero WhatsApp non è operativo e non permette prenotazioni reali.</p><Button asChild variant="link" className="mt-2 h-auto p-0 text-xs"><a href={demoContact.whatsappUrl} target="_blank" rel="noopener noreferrer">Apri il collegamento dimostrativo <ArrowUpRight /></a></Button></div>}{full && <div className="mt-8 border-t border-border pt-6"><p className="text-sm">{demoContact.email}</p><p className="mt-2 text-[10px] text-muted-foreground">Email di esempio, non attiva</p></div>}</div><div className="flex flex-col justify-center"><div className="map-placeholder"><MapPin size={36} strokeWidth={1} className="mb-4 text-primary" /><p className="font-display text-3xl">NAPOLI</p><p className="mt-3 text-[10px] uppercase tracking-[2px] text-muted-foreground">Il nostro carattere, la nostra città</p><span className="mt-8 bg-background px-4 py-2 text-[10px] text-muted-foreground">Segnaposto Google Maps · Nessuna sede reale</span></div>{full && <p className="section-copy mt-6 text-xs">BLACKWOOD BARBER è un’attività immaginaria. Indirizzo, orari, telefono e immagini sono esclusivamente dimostrativi.</p>}</div></div></div></section>;
}