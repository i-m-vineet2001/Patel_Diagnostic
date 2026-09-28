import React from "react";

export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative w-9 h-9 rounded-xl bg-[#df398f] flex items-center justify-center">
        <span className="absolute w-4 h-[2px] bg-white rounded" />
        <span className="absolute h-4 w-[2px] bg-white rounded" />
        <span className="absolute -right-0.5 -top-0.5 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-white" />
      </span>
      <span
        className={`font-heading font-bold text-lg tracking-tight ${light ? "text-white" : "text-[#0F172A]"}`}
      >
        Lumina<span className="font-medium text-[#2563EB]"> Diagnostics</span>
      </span>
    </span>
  );
}
