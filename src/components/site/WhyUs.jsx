import React from "react";
import { Target, UserCheck, Home, Building2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: Target,
    metric: "99.9%",
    title: "Accuracy",
    text: "Multi-level quality checks and international proficiency testing.",
  },
  {
    icon: UserCheck,
    metric: "40+",
    title: "Expert Pathologists",
    text: "MD-qualified specialists review every critical report.",
  },
  {
    icon: Home,
    metric: "7 DAYS",
    title: "Home Sample Collection",
    text: "Trained phlebotomists at your door, from 6 AM onwards.",
  },
  {
    icon: Building2,
    metric: "12",
    title: "State-of-the-art Labs",
    text: "Fully automated, NABL-accredited facilities across the city.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] micro-grid" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#10B981] mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1]">
            Clinical excellence you can measure.
          </h2>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={i * 0.08}
              className="bg-[#0F172A] p-8 h-full hover:bg-[#131d36] transition-colors"
            >
              <it.icon className="w-7 h-7 text-[#2563EB]" strokeWidth={1.25} />
              <p className="mt-8 font-mono text-3xl text-white">{it.metric}</p>
              <h3 className="mt-2 font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
