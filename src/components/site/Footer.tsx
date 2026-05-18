import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-bold">
            DB <span className="text-gold">Auto</span>
          </div>
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-1">
            Ceramic Detailing — Bel Air, MD
          </p>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Precision detailing and ceramic coating for the discerning enthusiast. By appointment only.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={14} className="mt-1 shrink-0" /> Bel Air, Maryland 21014</li>
            <li className="flex gap-2"><Phone size={14} className="mt-1 shrink-0" /> (410) 555-0142</li>
            <li className="flex gap-2"><Mail size={14} className="mt-1 shrink-0" /> hello@dbautodetailing.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="Instagram" className="w-9 h-9 grid place-items-center border border-border hover:border-gold hover:text-gold transition"><Instagram size={15} /></a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 grid place-items-center border border-border hover:border-gold hover:text-gold transition"><Facebook size={15} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DB Auto Ceramic Detailing. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Crafted in Bel Air, MD</p>
        </div>
      </div>
    </footer>
  );
}
