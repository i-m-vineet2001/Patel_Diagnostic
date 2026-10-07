// import React from "react";
// import Reveal from "./Reveal";
// import SectionHeading from "./SectionHeading";
// import ServiceCard from "./ServiceCard";
// import { services } from "./siteData";

// export default function Services() {
//   return (
//     <section id="services" className="relative py-24 md:py-32">
//       <div className="absolute inset-0 micro-grid opacity-70" />
//       <div className="relative max-w-6xl mx-auto px-6">
//         <SectionHeading eyebrow="Diagnostic Matrix" title="Every test you need, under one roof." subtitle="Hover over a category to explore commonly booked tests." />
//         <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
//           {services.map((s, i) => (
//             <Reveal key={s.title} delay={(i % 3) * 0.08}>
//               <ServiceCard service={s} />
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "./siteData";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FBF5F6] py-24 md:py-32"
    >
      {/* =====================================================
          SUBTLE MEDICAL GRID
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.25]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(198, 87, 123, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(198, 87, 123, 0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* =====================================================
          DECORATIVE GLOW
      ====================================================== */}

      <div
        className="
          absolute
          -top-32
          -right-32
          w-96
          h-96
          rounded-full
          bg-[#C6577B]/10
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-96
          h-96
          rounded-full
          bg-[#7A2E44]/5
          blur-3xl
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Heading */}

        <SectionHeading
          eyebrow="Our Diagnostic Services"
          title="Comprehensive testing, under one roof."
          subtitle="From routine health checkups to specialized investigations, Patel Diagnostic provides reliable diagnostic services with modern technology and a patient-first approach."
        />

        {/* ===================================================
            SERVICE CARDS
        ==================================================== */}

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* =====================================================
          ECG CONTINUITY DIVIDER
      ====================================================== */}

      <div className="relative mt-24 h-20 w-full pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="
              M0 55
              H330
              L355 55
              L375 35
              L400 75
              L425 15
              L450 85
              L475 55
              H650
              C750 55 790 25 880 25
              C980 25 1030 70 1120 70
              H1440
            "
            stroke="#C6577B"
            strokeWidth="2"
            opacity="0.18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* =====================================================
          SMALL DECORATIVE DOTS
      ====================================================== */}

      <div className="absolute top-1/3 left-8 w-2 h-2 rounded-full bg-[#C6577B]/30" />

      <div className="absolute top-2/3 right-10 w-3 h-3 rounded-full bg-[#7A2E44]/15" />
    </section>
  );
}