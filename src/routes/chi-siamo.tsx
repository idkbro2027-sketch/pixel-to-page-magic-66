import { createFileRoute } from "@tanstack/react-router";
import { AboutSection, TestimonialsSection } from "@/components/blackwood-sections";
import { pageHead } from "@/lib/blackwood";
export const Route = createFileRoute("/chi-siamo")({ head: () => pageHead("La nostra storia", "La filosofia BLACKWOOD BARBER: ascolto, precisione e cura maschile. Tradizione napoletana e carattere contemporaneo. Sito dimostrativo."), component: AboutPage });
function AboutPage() { return <><div className="site-width page-intro"><p className="eyebrow">Le persone, prima dello stile</p><h1 className="section-title">La nostra storia</h1></div><AboutSection full /><TestimonialsSection /></>; }