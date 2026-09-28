import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav className="glass max-w-6xl mx-auto rounded-2xl border border-rose-100 bg-cream/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] px-5 h-16 flex items-center justify-between">
        <a href="#home" aria-label="Lumina Diagnostics home">
          <Logo />
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0F172A] rounded-lg hover:bg-slate-100/70 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex h-11 items-center px-5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
        >
          Book a Test
        </a>
        <button
          className="md:hidden h-11 w-11 flex items-center justify-center rounded-lg text-[#0F172A]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>
      {open && (
        <div className="glass md:hidden max-w-6xl mx-auto mt-2 rounded-2xl border border-white/80 shadow-lg p-3 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-base font-medium text-slate-700 rounded-lg hover:bg-slate-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 h-12 flex items-center justify-center rounded-xl bg-[#2563EB] text-white font-semibold"
          >
            Book a Test
          </a>
        </div>
      )}
    </header>
  );
}
