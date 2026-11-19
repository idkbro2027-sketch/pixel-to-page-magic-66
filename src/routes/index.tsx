import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutSection, ContactSection, GallerySection, ServicesSection, TestimonialsSection } from "@/components/blackwood-sections";
import { pageHead } from "@/lib/blackwood";
import interior from "@/assets/interior.webp.asset.json";
import interiorSmall from "@/assets/interior-960.webp.asset.json";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => pageHead("Lo stile è una questione di carattere", "BLACKWOOD BARBER a Napoli: taglio uomo, cura della barba e rituali premium. Una barberia dal carattere autentico. Sito dimostrativo."),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <>
    <section className="hero" aria-label="Blackwood Barber Napoli"><img className="hero-photo" src={interior.url} srcSet={`${interiorSmall.url} 960w, ${interior.url} 1672w`} sizes="100vw" alt="BLACKWOOD: poltrone da barbiere in pelle, dettagli in ottone e vista su Napoli" fetchPriority="high" width="1672" height="941" /><div className="hero-content site-width reveal"><p className="eyebrow">Blackwood Barber · Napoli</p><h1 className="hero-title">Lo stile è una<br />questione di<br /><em>carattere.</em></h1><p className="hero-copy">Tagli precisi. Barbe impeccabili. Un’esperienza autentica.<br />L’arte del barbiere, reinterpretata per l’uomo di oggi.</p><Button asChild variant="gold" className="h-12 px-6 text-[10px]"><Link to="/contatti">Prenota il tuo appuntamento <ArrowUpRight /></Link></Button><div className="mt-7 flex items-center gap-3 text-[9px] uppercase tracking-[2px] text-muted-foreground"><span className="h-px w-6 bg-primary" />Tradizione. Precisione. Personalità.</div></div><div className="hero-caption site-width"><span className="flex items-center gap-2"><MapPin size={12} /> Napoli, Italia</span><a href="#servizi" aria-label="Scopri i servizi" className="flex items-center gap-3 transition-colors hover:text-primary">Scopri Blackwood <ArrowDown size={15} /></a><span className="hidden sm:block">L’eleganza è nei dettagli.</span></div></section>
    <div id="servizi"><ServicesSection /></div><AboutSection /><GallerySection /><TestimonialsSection /><ContactSection />
  </>;
}
