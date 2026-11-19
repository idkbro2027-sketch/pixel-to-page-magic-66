import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X, Scissors, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" }, { to: "/servizi", label: "Servizi" },
  { to: "/chi-siamo", label: "Chi siamo" }, { to: "/galleria", label: "Galleria" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function Logo() {
  return <Link to="/" aria-label="Blackwood Barber — Home" className="brand"><span className="brand-name">BLACKWOOD<span className="text-primary">.</span></span><span className="brand-sub">BARBER · NAPOLI</span></Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <header className="site-header"><div className="site-width flex h-full items-center justify-between gap-6">
    <Logo />
    <nav aria-label="Navigazione principale" className="hidden items-center gap-8 lg:flex">{links.map(link => <Link key={link.to} to={link.to} className={`nav-link ${pathname === link.to ? "active" : ""}`} aria-current={pathname === link.to ? "page" : undefined}>{link.label}</Link>)}</nav>
    <Button asChild variant="gold" className="hidden h-11 px-5 text-[10px] lg:inline-flex"><Link to="/contatti">Prenota ora <ArrowUpRight /></Link></Button>
    <Button ref={toggleRef} variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Chiudi menu" : "Apri menu"} aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    {open && <nav id="menu-mobile" className="mobile-nav lg:hidden" aria-label="Navigazione mobile">{links.map(link => <Link key={link.to} to={link.to} className={`nav-link ${pathname === link.to ? "active" : ""}`} aria-current={pathname === link.to ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}<Button asChild variant="gold"><Link to="/contatti" onClick={() => setOpen(false)}>Prenota ora <ArrowUpRight /></Link></Button></nav>}
  </div></header>;
}

export function SiteFooter() {
  const [social, setSocial] = useState(false);
  return <footer className="section-rule"><div className="site-width py-14"><div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center"><Logo /><nav aria-label="Navigazione nel piè di pagina" className="flex flex-wrap gap-6">{links.map(link => <Link key={link.to} to={link.to} className="nav-link">{link.label}</Link>)}</nav><div className="flex items-center gap-3"><Button variant="editorial" size="icon" aria-label="Instagram — profilo dimostrativo" title="Instagram — profilo dimostrativo" onClick={() => setSocial(!social)}><Instagram /></Button><Scissors size={20} className="text-primary" /></div></div>{social && <p role="status" className="mt-6 text-sm text-muted-foreground">Profilo Instagram dimostrativo: nessun account reale collegato.</p>}<div className="mt-12 flex flex-col justify-between gap-3 border-t border-border pt-6 text-[10px] text-muted-foreground md:flex-row"><span>© 2026 BLACKWOOD BARBER. Tutti i diritti riservati.</span><span>Attività immaginaria · Sito dimostrativo · Fotografie illustrative</span><span>Fatto con carattere. A Napoli.</span></div></div></footer>;
}