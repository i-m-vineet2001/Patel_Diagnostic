import React from "react";
import { Check } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div className="group relative h-full glass rounded-2xl border border-slate-200/80 p-7 transition-all duration-500 hover:border-[#2563EB] hover:shadow-[inset_0_0_24px_rgba(37,99,235,0.06),0_20px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1">
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#2563EB]/40 rounded-tl-2xl" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#2563EB]/40 rounded-br-2xl" />
      <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#2563EB] transition-colors duration-500">
        <Icon
          className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-500"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-[#0F172A]">
        {service.title}
      </h3>
      <p className="mt-2 text-slate-600">{service.text}</p>
      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
        <div className="overflow-hidden">
          <p className="mt-5 pt-5 border-t border-slate-200 font-mono text-[11px] tracking-widest text-slate-400">
            COMMON TESTS
          </p>
          <ul className="mt-3 space-y-2">
            {service.tests.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <Check className="w-4 h-4 text-[#10B981]" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
