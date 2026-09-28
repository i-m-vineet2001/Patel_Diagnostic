import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import PackageCard from "./PackageCard";
import { packages } from "./siteData";

export default function Packages({ onEnquire }) {
  return (
    <section id="packages" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          center
          eyebrow="Checkup Ledger"
          title="Popular health packages"
          subtitle="Thoughtfully curated panels for every stage of life. Enquire and our care team will call you to schedule."
        />
        <div className="mt-16 -mx-6 px-6 pt-4 flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar md:overflow-visible">
          {packages.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.1}
              className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-auto"
            >
              <PackageCard pkg={p} onEnquire={onEnquire} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
    