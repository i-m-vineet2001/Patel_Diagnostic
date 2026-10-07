
import React from "react";

export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-3">
      {/* Logo Image */}
      <img
        src="/logoGlass.png"
        alt="Patel Diagnostic Logo"
        className="w-15 h-12 object-contain"
      />

      {/* Brand Name */}
      <span
        className={`font-heading font-bold text-xl tracking-tight ${
          light ? "text-white" : "text-[#7a2e44]"
        }`}
      >
        Patel <span className="font-bold text-[#C6577B]">Diagnostic Center</span>
      </span>
    </span>
  );
}