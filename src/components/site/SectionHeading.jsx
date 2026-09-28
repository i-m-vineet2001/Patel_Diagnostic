import React from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}) {
  return (
    <Reveal className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2563EB] mb-4">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-[1.1]">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-lg text-slate-600">{subtitle}</p>}
    </Reveal>
  );
}
