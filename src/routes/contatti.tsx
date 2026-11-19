import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/blackwood-sections";
import { pageHead } from "@/lib/blackwood";
export const Route = createFileRoute("/contatti")({ head: () => pageHead("Contatti e appuntamenti", "Contatti, orari e indirizzo di esempio di BLACKWOOD BARBER a Napoli. Numero WhatsApp segnaposto: nessuna prenotazione reale disponibile."), component: ContactPage });
function ContactPage() { return <><div className="site-width page-intro"><p className="eyebrow">Ci vediamo da Blackwood</p><h1 className="section-title">Contatti e appuntamenti</h1></div><ContactSection full /></>; }