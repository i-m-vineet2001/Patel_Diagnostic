import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "./siteData";

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 micro-grid opacity-70" />
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Diagnostic Matrix" title="Every test you need, under one roof." subtitle="Hover over a category to explore commonly booked tests." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}