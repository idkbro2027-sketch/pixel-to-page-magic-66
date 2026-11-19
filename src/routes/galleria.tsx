import { createFileRoute } from "@tanstack/react-router";
import { GallerySection } from "@/components/blackwood-sections";
import { pageHead } from "@/lib/blackwood";
export const Route = createFileRoute("/galleria")({ head: () => pageHead("Galleria", "Il mondo BLACKWOOD in immagini: tagli uomo, dettagli di stile e atmosfera della barberia. Fotografie illustrative del sito dimostrativo."), component: GalleryPage });
function GalleryPage() { return <><div className="site-width page-intro"><p className="eyebrow">Uno sguardo da vicino</p><h1 className="section-title">Galleria Blackwood</h1></div><GallerySection full /></>; }