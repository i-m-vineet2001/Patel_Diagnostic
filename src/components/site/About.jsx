// // @ts-ignore
// import React from "react";
// import { Microscope, HeartHandshake, Cpu } from "lucide-react";
// import { Image } from "@/components/ui/image";
// import Reveal from "./Reveal";
// import SectionHeading from "./SectionHeading";

// const pillars = [
//   {
//     icon: Microscope,
//     title: "Our Mission",
//     text: "Make accurate, affordable diagnostics accessible to every family, every day.",
//   },
//   {
//     icon: HeartHandshake,
//     title: "Commitment to Health",
//     text: "Every sample is handled with care, every patient treated with dignity and warmth.",
//   },
//   {
//     icon: Cpu,
//     title: "Technological Accuracy",
//     text: "Fully automated analysers and barcoded tracking eliminate manual error.",
//   },
// ];

// export default function About() {
//   return (
//     <section id="about" className="py-24 md:py-32 bg-white">
//       <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
//         <Reveal className="relative">
//           <div className="rounded-3xl overflow-hidden aspect-[4/5] group">
//             <Image
//               src="https://media.base44.com/images/public/6ab87b83930074af4c46587b/9f3836e82_generated_ccbdeb3e.jpg"
//               alt="Lab scientist carefully processing samples"
//               className="w-full h-full transition-transform duration-700 group-hover:scale-105"
//             />
//           </div>
//           <div className="glass absolute -bottom-6 -right-2 md:-right-8 border border-white rounded-2xl p-5 shadow-xl">
//             <p className="font-mono text-3xl text-[#0F172A]">18+</p>
//             <p className="text-sm text-slate-500">Years of trusted care</p>
//           </div>
//         </Reveal>
//         <div>
//           <SectionHeading
//             eyebrow="About Lumina"
//             title="Diagnostics built on trust, precision and care."
//             subtitle="Since 2008, Lumina Diagnostics has served over 2 million patients across the city. We combine world-class laboratory technology with a deeply human approach — because behind every sample is a person waiting for answers."
//           />
//           <div className="mt-10 space-y-6">
//             {pillars.map((p, i) => (
//               <Reveal key={p.title} delay={i * 0.1} className="flex gap-4">
//                 <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
//                   <p.icon
//                     className="w-5 h-5 text-[#2563EB]"
//                     strokeWidth={1.5}
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-[#0F172A]">{p.title}</h3>
//                   <p className="text-slate-600">{p.text}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// @ts-ignore

import React from "react";

import {
  Microscope,
  HeartHandshake,
  Cpu,
} from "lucide-react";

import { Image } from "@/components/ui/image";

import Reveal from "./Reveal";

import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Microscope,
    title: "Our Mission",
    text: "To provide accurate, accessible, and reliable diagnostic services that help every patient make informed healthcare decisions.",
  },

  {
    icon: HeartHandshake,
    title: "Patient-Centred Care",
    text: "Every sample is handled with care, and every patient is treated with dignity, compassion, and respect.",
  },

  {
    icon: Cpu,
    title: "Technology & Accuracy",
    text: "Modern diagnostic equipment, systematic processes, and quality-focused practices help deliver dependable results.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FBF5F6] py-24 md:py-32"
    >
      {/* =====================================================
          CONTINUITY DIVIDER
          Creates a soft visual transition from the Hero
      ====================================================== */}

      <div className="absolute top-0 left-0 w-full h-24 pointer-events-none overflow-hidden">
        {/* Soft curved background transition */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[120%] h-32 rounded-[50%] bg-white" />

        {/* Decorative ECG line */}
        <svg
          className="absolute top-5 left-0 w-full h-14 opacity-30"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 50
              H250
              C270 50 280 50 300 50
              L330 50
              L350 30
              L375 70
              L400 12
              L425 88
              L450 50
              L500 50
              H1440"
            stroke="#C6577B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Small decorative circles */}
        <div className="absolute top-7 left-[12%] w-2 h-2 rounded-full bg-[#C6577B]/40" />
        <div className="absolute top-10 right-[15%] w-3 h-3 rounded-full bg-[#7A2E44]/20" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center pt-8">
        
        {/* ===================================================
            IMAGE
        ==================================================== */}

        <Reveal className="relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group shadow-lg shadow-[#7A2E44]/10">
            <Image
              src="https://media.base44.com/images/public/6ab87b83930074af4c46587b/9f3836e82_generated_ccbdeb3e.jpg"
              alt="Healthcare professional working in a diagnostic laboratory"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Soft image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#7A2E44]/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* =================================================
              EXPERIENCE CARD
          ================================================== */}

          <div
            className="
              absolute
              -bottom-6
              -right-2
              md:-right-8
              rounded-2xl
              p-5
              bg-white/70
              backdrop-blur-xl
              border border-white/80
              shadow-xl
              shadow-[#7A2E44]/10
            "
          >
            <p className="font-mono text-3xl font-semibold text-[#7A2E44]">
              18+
            </p>

            <p className="text-sm text-slate-500">
              Years of trusted care
            </p>
          </div>

          {/* Decorative pink circle */}
          <div
            className="
              absolute
              -top-5
              -left-5
              w-16
              h-16
              rounded-full
              bg-[#C6577B]/10
              -z-10
            "
          />
        </Reveal>

        {/* ===================================================
            TEXT CONTENT
        ==================================================== */}

        <div>
          <SectionHeading
            eyebrow="About Patel Diagnostic"
            title="Diagnostics built on trust, precision and care."
            subtitle="At Patel Diagnostic, we believe accurate diagnosis is the first step towards better healthcare. We combine modern diagnostic technology with a patient-first approach to deliver reliable results with care and responsibility."
          />

          {/* =================================================
              PILLARS
          ================================================== */}

          <div className="mt-10 space-y-6">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.1}
                className="flex gap-4"
              >
                {/* Icon */}
                <div
                  className="
                    w-12
                    h-12
                    shrink-0
                    rounded-xl
                    bg-[#C6577B]/10
                    border border-[#C6577B]/15
                    flex
                    items-center
                    justify-center
                  "
                >
                  <p.icon
                    className="w-5 h-5 text-[#7A2E44]"
                    strokeWidth={1.7}
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-[#7A2E44]">
                    {p.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mt-1">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM DECORATIVE CONTINUITY
      ====================================================== */}

      <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 70
              C180 20 300 20 480 65
              C650 105 790 105 960 55
              C1120 10 1270 20 1440 65"
            stroke="#C6577B"
            strokeWidth="1.5"
            opacity="0.15"
          />
        </svg>
      </div>
    </section>
  );
}