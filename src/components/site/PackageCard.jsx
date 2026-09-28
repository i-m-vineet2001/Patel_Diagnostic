import React from "react";
import { Check } from "lucide-react";
import { ALL_ORGANS } from "./siteData";

export default function PackageCard({ pkg, onEnquire }) {
  const dark = pkg.popular;
  return (
    <div
      className={`relative h-full flex flex-col rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-1 ${dark ? "bg-[#0F172A] border-[#0F172A] text-white shadow-2xl" : "bg-white border-slate-200 hover:border-[#2563EB]"}`}
    >
      {dark && (
        <span className="absolute -top-3 left-8 bg-[#10B981] text-white font-mono text-[11px] tracking-widest px-3 py-1 rounded-full">
          MOST POPULAR
        </span>
      )}
      <h3
        className={`text-xl font-semibold ${dark ? "text-white" : "text-[#0F172A]"}`}
      >
        {pkg.name}
      </h3>
      <p
        className={`mt-1 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}
      >
        {pkg.tagline}
      </p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-mono text-4xl font-medium">₹{pkg.price}</span>
        <span
          className={`font-mono text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}
        >
          / {pkg.tests} TESTS
        </span>
      </div>
      <p
        className={`mt-7 font-mono text-[11px] tracking-widest ${dark ? "text-slate-400" : "text-slate-400"}`}
      >
        VITALITY INDEX
      </p>
      <div className="mt-3 flex gap-1">
        {ALL_ORGANS.map((o) => (
          <span
            key={o}
            title={o}
            className={`h-1.5 flex-1 rounded-full ${pkg.coverage.includes(o) ? "bg-[#10B981]" : dark ? "bg-slate-700" : "bg-slate-200"}`}
          />
        ))}
      </div>
      <p
        className={`mt-2 text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}
      >
        {pkg.coverage.join(" · ")}
      </p>
      <ul className="mt-7 space-y-3 flex-1">
        {pkg.features.map((f) => (
          <li key={f} className="flex gap-3 text-sm">
            <Check className="w-4 h-4 mt-0.5 text-[#10B981] shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={() => onEnquire(pkg.name)}
        className={`mt-8 h-12 rounded-xl font-semibold transition-colors ${dark ? "bg-[#2563EB] text-white hover:bg-[#3b74f0]" : "bg-slate-100 text-[#0F172A] hover:bg-[#2563EB] hover:text-white"}`}
      >
        Enquire Now
      </button>
    </div>
  );
}
