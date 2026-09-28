import React from "react";
import { Siren } from "lucide-react";
import Logo from "./Logo";

const quick = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Packages", "#packages"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400">
      <div className="bg-red-500/10 border-y border-red-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-red-200 text-center">
          <Siren className="w-4 h-4 text-red-400" /> Medical emergency? Call{" "}
          <a
            href="tel:108"
            className="font-semibold text-white underline underline-offset-4"
          >
            108
          </a>{" "}
          or our 24/7 helpline{" "}
          <a
            href="tel:+918045678911"
            className="font-semibold text-white underline underline-offset-4"
          >
            +91 80 4567 8911
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <Logo light />
          <p className="mt-4 text-sm max-w-xs">
            Accurate diagnostics and compassionate care for every family since
            2008.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs tracking-widest text-slate-500 mb-4">
            QUICK LINKS
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {quick.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm space-y-1">
          <p className="font-mono text-xs tracking-widest text-slate-500 mb-4">
            REACH US
          </p>
          <p>42 Residency Road, Bengaluru 560025</p>
          <a href="tel:+918045678900" className="block hover:text-white">
            +91 80 4567 8900
          </a>
          <a
            href="mailto:care@luminadiagnostics.in"
            className="block hover:text-white"
          >
            care@luminadiagnostics.in
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Lumina Diagnostics. All rights reserved.
      </div>
    </footer>
  );
}
