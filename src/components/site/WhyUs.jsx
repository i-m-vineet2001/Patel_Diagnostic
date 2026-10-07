// import React from "react";
// import { Target, UserCheck, Home, Building2 } from "lucide-react";
// import Reveal from "./Reveal";
// import SectionHeading from "./SectionHeading";

// const items = [
//   {
//     icon: Target,
//     metric: "99.9%",
//     title: "Accuracy",
//     text: "Multi-level quality checks and international proficiency testing.",
//   },
//   {
//     icon: UserCheck,
//     metric: "40+",
//     title: "Expert Pathologists",
//     text: "MD-qualified specialists review every critical report.",
//   },
//   {
//     icon: Home,
//     metric: "7 DAYS",
//     title: "Home Sample Collection",
//     text: "Trained phlebotomists at your door, from 6 AM onwards.",
//   },
//   {
//     icon: Building2,
//     metric: "12",
//     title: "State-of-the-art Labs",
//     text: "Fully automated, NABL-accredited facilities across the city.",
//   },
// ];

// export default function WhyUs() {
//   return (
//     <section className="relative py-24 md:py-32 bg-[#0F172A] overflow-hidden">
//       <div className="absolute inset-0 opacity-[0.07] micro-grid" />
//       <div className="relative max-w-6xl mx-auto px-6">
//         <Reveal className="max-w-2xl">
//           <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#10B981] mb-4">
//             Why Choose Us
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1]">
//             Clinical excellence you can measure.
//           </h2>
//         </Reveal>
//         <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden">
//           {items.map((it, i) => (
//             <Reveal
//               key={it.title}
//               delay={i * 0.08}
//               className="bg-[#0F172A] p-8 h-full hover:bg-[#131d36] transition-colors"
//             >
//               <it.icon className="w-7 h-7 text-[#2563EB]" strokeWidth={1.25} />
//               <p className="mt-8 font-mono text-3xl text-white">{it.metric}</p>
//               <h3 className="mt-2 font-semibold text-white">{it.title}</h3>
//               <p className="mt-2 text-sm text-slate-400">{it.text}</p>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

import { Target, UserCheck, Home, Building2 } from "lucide-react";

import Reveal from "./Reveal";

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
    <section
      className="
        relative
        py-24
        md:py-32
        bg-[#0F172A]
        overflow-hidden
      "
    >
      {/* =====================================================
          PINK MEDICAL GRID
      ====================================================== */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(198, 87, 123, 0.10) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(198, 87, 123, 0.10) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* =====================================================
          BURGUNDY GLOW
      ====================================================== */}

      <div
        className="
          absolute
          -top-48
          -right-48
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#7A2E44]/15
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =====================================================
          PINK GLOW
      ====================================================== */}

      <div
        className="
          absolute
          -bottom-48
          -left-48
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#C6577B]/10
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ===================================================
            HEADING
        ==================================================== */}

        <Reveal className="max-w-2xl">
          <p
            className="
              font-mono
              text-xs
              tracking-[0.2em]
              uppercase
              text-[#C6577B]
              mb-4
            "
          >
            Why Choose Us
          </p>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-white
              leading-[1.1]
              tracking-tight
            "
          >
            Clinical excellence you can measure.
          </h2>

          <p
            className="
              mt-5
              text-slate-400
              max-w-xl
              leading-relaxed
            "
          >
            Trusted diagnostic care built around accuracy, experienced
            professionals, modern technology, and patient convenience.
          </p>
        </Reveal>

        {/* ===================================================
            METRIC GRID
        ==================================================== */}

        <div
          className="
            mt-14
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-px
            bg-white/10
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            shadow-2xl
            shadow-black/20
          "
        >
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={i * 0.08}
              className="
                group
                relative
                bg-[#0F172A]
                p-8
                h-full
                overflow-hidden
                transition-all
                duration-500
                hover:bg-[#131b2e]
              "
            >
              {/* ===========================================
                  CARD HOVER GLOW
              ============================================ */}

              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-40
                  h-40
                  rounded-full
                  bg-[#C6577B]/0
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-[#C6577B]/10
                "
              />

              {/* ===========================================
                  ICON
              ============================================ */}

              <div
                className="
                  relative
                  w-11
                  h-11
                  rounded-xl
                  bg-[#C6577B]/10
                  border
                  border-[#C6577B]/15
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:bg-[#7A2E44]
                  group-hover:border-[#7A2E44]
                  group-hover:scale-105
                "
              >
                <it.icon
                  className="
                    w-6
                    h-6
                    text-[#C6577B]
                    transition-colors
                    duration-500
                    group-hover:text-white
                  "
                  strokeWidth={1.25}
                />
              </div>

              {/* ===========================================
                  METRIC
              ============================================ */}

              <p
                className="
                  relative
                  mt-8
                  font-mono
                  text-3xl
                  font-medium
                  text-white
                  tracking-tight
                "
              >
                {it.metric}
              </p>

              {/* ===========================================
                  TITLE
              ============================================ */}

              <h3
                className="
                  relative
                  mt-2
                  font-semibold
                  text-white
                "
              >
                {it.title}
              </h3>

              {/* ===========================================
                  DESCRIPTION
              ============================================ */}

              <p
                className="
                  relative
                  mt-2
                  text-sm
                  leading-6
                  text-slate-400
                "
              >
                {it.text}
              </p>

              {/* ===========================================
                  PINK BOTTOM ACCENT
              ============================================ */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-[#C6577B]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* =====================================================
          ECG CONTINUITY
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-16
          pointer-events-none
          opacity-20
        "
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="
              M0 45
              H330
              L350 45
              L370 25
              L392 65
              L415 12
              L438 68
              L460 45
              H720
              C850 45 900 25 1010 25
              C1120 25 1180 55 1280 55
              H1440
            "
            stroke="#C6577B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}