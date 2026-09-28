import React from "react";
import { Check } from "lucide-react";

export default function FormField({ label, textarea, valid, value, ...props }) {
  const ok = valid && value;
  const cls = `mt-2 w-full rounded-xl border bg-white px-4 text-[#0F172A] focus:outline-none focus:ring-4 transition-colors ${ok ? "border-[#10B981] focus:ring-emerald-100" : "border-slate-200 focus:border-[#2563EB] focus:ring-blue-100"}`;
  return (
    <label className="block relative">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      {textarea ? (
        <textarea
          rows={4}
          value={value}
          className={`${cls} py-3 resize-none`}
          {...props}
        />
      ) : (
        <input value={value} className={`${cls} h-12 pr-10`} {...props} />
      )}
      {ok && !textarea && (
        <Check
          className="absolute right-3 top-[42px] w-4 h-4 text-[#10B981]"
          aria-hidden
        />
      )}
    </label>
  );
}
