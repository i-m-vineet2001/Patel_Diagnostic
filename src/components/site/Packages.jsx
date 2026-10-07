// import React from "react";
// import Reveal from "./Reveal";
// import SectionHeading from "./SectionHeading";
// import PackageCard from "./PackageCard";
// import { packages } from "./siteData";

// export default function Packages({ onEnquire }) {
//   return (
//     <section id="packages" className="py-24 md:py-32 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <SectionHeading
//           center
//           eyebrow="Checkup Ledger"
//           title="Popular health packages"
//           subtitle="Thoughtfully curated panels for every stage of life. Enquire and our care team will call you to schedule."
//         />
//         <div className="mt-16 -mx-6 px-6 pt-4 flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar md:overflow-visible">
//           {packages.map((p, i) => (
//             <Reveal
//               key={p.name}
//               delay={i * 0.1}
//               className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-auto"
//             >
//               <PackageCard pkg={p} onEnquire={onEnquire} />
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
import PackageCard from "./PackageCard";

import { packages } from "./siteData";

export default function Packages({ onEnquire }) {
  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-[#FBF5F6] py-24 md:py-32"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          absolute
          -top-40
          -right-40
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
          TOP CONTINUITY ECG
      ====================================================== */}

      <div className="absolute top-0 left-0 w-full h-20 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="
              M0 55
              H300
              L325 55
              L345 38
              L368 70
              L390 18
              L412 82
              L435 55
              H650
              C760 55 810 30 900 30
              C1010 30 1060 70 1150 70
              H1440
            "
            stroke="#C6577B"
            strokeWidth="2"
            opacity="0.16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}

        <SectionHeading
          center
          eyebrow="Health Packages"
          title="Thoughtful health packages for every stage of life."
          subtitle="Choose from carefully curated diagnostic packages designed to make preventive healthcare simple, accessible, and convenient."
        />

        {/* ===================================================
            PACKAGE CARDS
        ==================================================== */}

        <div
          className="
            mt-16
            -mx-6
            px-6
            pt-4

            flex
            md:grid
            md:grid-cols-3

            gap-6

            overflow-x-auto
            snap-x
            snap-mandatory
            no-scrollbar

            md:overflow-visible
          "
        >
          {packages.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.1}
              className="
                snap-center
                shrink-0
                w-[85%]
                sm:w-[60%]
                md:w-auto
              "
            >
              <PackageCard pkg={p} onEnquire={onEnquire} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM CONTINUITY CURVE
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
              M0 70
              C180 20 300 20 480 65
              C650 105 790 105 960 55
              C1120 10 1270 20 1440 65
            "
            stroke="#7A2E44"
            strokeWidth="1.5"
            opacity="0.12"
          />
        </svg>
      </div>

      {/* Small decorative elements */}

      <div
        className="
          absolute
          top-1/3
          left-8
          w-2
          h-2
          rounded-full
          bg-[#C6577B]/30
        "
      />

      <div
        className="
          absolute
          bottom-1/3
          right-8
          w-3
          h-3
          rounded-full
          bg-[#7A2E44]/15
        "
      />
    </section>
  );
}