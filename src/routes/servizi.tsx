import { createFileRoute } from "@tanstack/react-router";
import { ServicesSection, ContactSection } from "@/components/blackwood-sections";
import { pageHead } from "@/lib/blackwood";
export const Route = createFileRoute("/servizi")({ head: () => pageHead("Servizi e prezzi", "Scopri il listino BLACKWOOD: taglio uomo €20, barba €15, taglio e barba €30, trattamento premium €40. Barberia dimostrativa a Napoli."), component: ServicesPage });
function ServicesPage() { return <><div className="site-width page-intro"><p className="eyebrow">Blackwood Barber</p><h1 className="section-title">I nostri servizi</h1></div><ServicesSection full /><ContactSection /></>; }