
// // @ts-ignore
// import React from "react";
// import {
//   Microscope,
//   HeartHandshake,
//   Cpu,
//   Building,
// } from "lucide-react";
// import { Image } from "@/components/ui/image";
// import Reveal from "./Reveal";
// import SectionHeading from "./SectionHeading";

// const pillars = [
//   {
//     icon: Microscope,
//     title: "Our Mission",
//     text: "To provide accurate, accessible, and reliable diagnostic services that help every patient make informed healthcare decisions.",
//   },
//   {
//     icon: HeartHandshake,
//     title: "Patient-Centred Care",
//     text: "Every sample is handled with care, and every patient is treated with dignity, compassion, and respect.",
//   },
//   {
//     icon: Cpu,
//     title: "Technology & Accuracy",
//     text: "Modern diagnostic equipment, systematic processes, and quality-focused practices help deliver dependable results.",
//   },
// ];

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-[#FBF5F6] py-24 md:py-32"
//     >
//       {/* =====================================================
//           CONTINUITY DIVIDER
//       ====================================================== */}
//       <div className="absolute top-0 left-0 w-full h-24 pointer-events-none overflow-hidden">
//         <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[120%] h-32 rounded-[50%] bg-white" />
//         <svg
//           className="absolute top-5 left-0 w-full h-14 opacity-30"
//           viewBox="0 0 1440 100"
//           preserveAspectRatio="none"
//           fill="none"
//         >
//           <path
//             d="M0 50 H250 C270 50 280 50 300 50 L330 50 L350 30 L375 70 L400 12 L425 88 L450 50 L500 50 H1440"
//             stroke="#C6577B"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         <div className="absolute top-7 left-[12%] w-2 h-2 rounded-full bg-[#C6577B]/40" />
//         <div className="absolute top-10 right-[15%] w-3 h-3 rounded-full bg-[#7A2E44]/20" />
//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center pt-8">
        
//         {/* ===================================================
//             IMAGE & EXPERIENCE BADGE
//         ==================================================== */}
//         <Reveal className="relative">
//           <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group shadow-lg shadow-[#7A2E44]/10">
//             <Image
//               src="https://media.base44.com/images/public/6ab87b83930074af4c46587b/9f3836e82_generated_ccbdeb3e.jpg"
//               alt="Healthcare professional working in a diagnostic laboratory"
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#7A2E44]/20 via-transparent to-transparent pointer-events-none" />
//           </div>

//           <div
//             className="
//               absolute
//               -bottom-6
//               -right-2
//               md:-right-8
//               rounded-2xl
//               p-5
//               bg-white/70
//               backdrop-blur-xl
//               border border-white/80
//               shadow-xl
//               shadow-[#7A2E44]/10
//             "
//           >
//             <p className="font-mono text-3xl font-semibold text-[#7A2E44]">
//               18+
//             </p>
//             <p className="text-sm text-slate-500">
//               Years of trusted care
//             </p>
//           </div>

//           <div className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-[#C6577B]/10 -z-10" />
//         </Reveal>

//         {/* ===================================================
//             TEXT CONTENT & PARTNER NETWORKS
//         ==================================================== */}
//         <div>
//           <SectionHeading
//             eyebrow="About Patel Diagnostic"
//             title="Diagnostics built on trust, precision and care."
//             subtitle="At Patel Diagnostic, we believe accurate diagnosis is the first step towards better healthcare. We combine modern diagnostic technology with a patient-first approach to deliver reliable results with care and responsibility."
//           />

//           {/* PILLARS */}
//           <div className="mt-10 space-y-6">
//             {pillars.map((p, i) => (
//               <Reveal
//                 key={p.title}
//                 delay={i * 0.1}
//                 className="flex gap-4"
//               >
//                 <div
//                   className="
//                     w-12
//                     h-12
//                     shrink-0
//                     rounded-xl
//                     bg-[#C6577B]/10
//                     border border-[#C6577B]/15
//                     flex
//                     items-center
//                     justify-center
//                   "
//                 >
//                   <p.icon
//                     className="w-5 h-5 text-[#7A2E44]"
//                     strokeWidth={1.7}
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-[#7A2E44]">
//                     {p.title}
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed mt-1">
//                     {p.text}
//                   </p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>

//           {/* =================================================
//               PARTNER NETWORK TRUST STRIP (ADDED HERE)
//           ================================================== */}
//           <Reveal delay={0.3}>
//             <div className="mt-10 pt-8 border-t border-[#7A2E44]/15">
//               <p className="text-xs font-mono tracking-[0.15em] text-[#C6577B] uppercase mb-4 font-medium">
//                 Authorized Collection & Reference Partner Networks
//               </p>
              
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                 <div className="p-3 rounded-xl bg-white/80 backdrop-blur-md border border-[#7A2E44]/15 text-center shadow-sm hover:shadow-md transition-shadow">
//                   <p className="font-bold text-xs text-[#7A2E44]">Dr. Lal PathLabs</p>
//                   <p className="text-[9px] text-slate-500 font-mono mt-0.5">Authorized Collection</p>
//                 </div>
//                 <div className="p-3 rounded-xl bg-white/80 backdrop-blur-md border border-[#7A2E44]/15 text-center shadow-sm hover:shadow-md transition-shadow">
//                   <p className="font-bold text-xs text-[#7A2E44]">SRL Diagnostics</p>
//                   <p className="text-[9px] text-slate-500 font-mono mt-0.5">Authorized Partner</p>
//                 </div>
//                 <div className="p-3 rounded-xl bg-white/80 backdrop-blur-md border border-[#7A2E44]/15 text-center shadow-sm hover:shadow-md transition-shadow">
//                   <p className="font-bold text-xs text-[#7A2E44]">Thyrocare</p>
//                   <p className="text-[9px] text-slate-500 font-mono mt-0.5">Authorized Center</p>
//                 </div>
//                 <div className="p-3 rounded-xl bg-white/80 backdrop-blur-md border border-[#7A2E44]/15 text-center shadow-sm hover:shadow-md transition-shadow">
//                   <p className="font-bold text-xs text-[#7A2E44]">Vimta Labs</p>
//                   <p className="text-[9px] text-slate-500 font-mono mt-0.5">Reference Partner</p>
//                 </div>
//               </div>
//             </div>
//           </Reveal>

//         </div>
//       </div>

//       {/* =====================================================
//           BOTTOM DECORATIVE CONTINUITY
//       ====================================================== */}
//       <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none">
//         <svg
//           className="absolute bottom-0 w-full h-full"
//           viewBox="0 0 1440 100"
//           preserveAspectRatio="none"
//           fill="none"
//         >
//           <path
//             d="M0 70 C180 20 300 20 480 65 C650 105 790 105 960 55 C1120 10 1270 20 1440 65"
//             stroke="#C6577B"
//             strokeWidth="1.5"
//             opacity="0.15"
//           />
//         </svg>
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
  ArrowUpRight,
  Building2,
  ShieldCheck,
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
    title: "Patient-centred care",
    text: "Every sample is handled with care, and every patient is treated with dignity, compassion, and respect.",
  },
  {
    icon: Cpu,
    title: "Technology & accuracy",
    text: "Modern diagnostic equipment, systematic processes, and quality-focused practices help deliver dependable results.",
  },
];

const partnerNetworks = [
  { name: "Dr. Lal PathLabs", descriptor: "Authorized Collection" },
  { name: "Thyrocare", descriptor: "Authorized Collection" },
  { name: "Red Cliff", descriptor: "Authorized Collection" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FBF5F6] py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle section transition */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 overflow-hidden">
        <div className="absolute -top-20 left-1/2 h-32 w-[120%] -translate-x-1/2 rounded-[50%] bg-white" />
        <svg
          className="absolute left-0 top-5 h-14 w-full opacity-20"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 50 H250 C270 50 280 50 300 50 L330 50 L350 30 L375 70 L400 12 L425 88 L450 50 H1440"
            stroke="#C6577B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 pt-8 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        {/* Visual story */}
        <Reveal className="relative mx-auto w-full max-w-[520px] lg:mx-0">
          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-[#C6577B]/20" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#C6577B]/[0.07]" />

          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#E9D9DE] shadow-[0_24px_70px_-30px_rgba(122,46,68,0.32)]">
            <Image
              src="https://media.base44.com/images/public/6ab87b83930074af4c46587b/9f3836e82_generated_ccbdeb3e.jpg"
              alt="Healthcare professional working in a diagnostic laboratory"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#391522]/35 via-transparent to-white/10" />
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/50 bg-white/75 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A2E44] backdrop-blur-xl sm:left-7 sm:top-7">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6577B]" />
              Care with precision
            </div>
          </div>

          <div className="absolute -bottom-5 right-3 rounded-2xl border border-white/80 bg-white/85 px-5 py-4 shadow-[0_16px_45px_-20px_rgba(122,46,68,0.35)] backdrop-blur-xl sm:-bottom-7 sm:right-7 sm:px-6 sm:py-5">
            <div className="flex items-end gap-3">
              <span className="font-serif text-4xl leading-none tracking-tight text-[#7A2E44] sm:text-5xl">
                10+
              </span>
              <span className="mb-0.5 max-w-[110px] text-xs leading-snug text-[#69545B] sm:text-sm">
                Years of trusted care
              </span>
            </div>
          </div>

          <div className="absolute -right-3 top-[42%] hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-white/65 text-[#7A2E44] shadow-lg backdrop-blur-md sm:flex">
            <ShieldCheck size={25} strokeWidth={1.5} />
          </div>
        </Reveal>

        {/* About content */}
        <div className="relative">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6577B]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A54867]">
                About Patel Diagnostic
              </span>
            </div>
            <SectionHeading
              eyebrow=""
              title="Diagnostics built on trust, precision and care."
              subtitle="At Patel Diagnostic, we believe accurate diagnosis is the first step towards better healthcare. We combine modern diagnostic technology with a patient-first approach to deliver reliable results with care and responsibility."
            />
          </Reveal>

          <div className="mt-9 space-y-3.5">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <article className="group flex gap-4 rounded-2xl border border-[#7A2E44]/[0.08] bg-white/65 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C6577B]/25 hover:bg-white hover:shadow-[0_14px_35px_-24px_rgba(122,46,68,0.35)] sm:gap-5 sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7A2E44] text-white transition-colors duration-300 group-hover:bg-[#C6577B] sm:h-12 sm:w-12">
                    <pillar.icon size={20} strokeWidth={1.7} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2.5">
                      <span className="font-mono text-[10px] tracking-widest text-[#C6577B]">
                        {pillar.number}
                      </span>
                      <h3 className="text-sm font-semibold tracking-tight text-[#7A2E44] sm:text-base">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-[13px] leading-6 text-[#6F5C62] sm:text-sm">
                      {pillar.text}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="mt-1 hidden shrink-0 text-[#C6577B]/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
                  />
                </article>
              </Reveal>
            ))}
          </div>

          {/* Partner network trust strip */}
          <Reveal delay={0.25}>
            <div className="mt-9 border-t border-[#7A2E44]/15 pt-6">
              <div className="mb-4 flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#C6577B]/10 text-[#7A2E44]">
                  <Building2 size={16} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#A54867]">
                    Partner network
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#6F5C62]">
                    Authorized collection and reference partner networks
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {partnerNetworks.map((partner) => (
                  <div
                    key={partner.name}
                    className="rounded-xl border border-[#7A2E44]/10 bg-white/70 px-3 py-3 transition-colors hover:border-[#C6577B]/30 hover:bg-white"
                  >
                    <p className="text-xs font-bold leading-snug text-[#7A2E44]">
                      {partner.name}
                    </p>
                    <p className="mt-1.5 text-[9px] leading-snug text-[#8A747B]">
                      {partner.descriptor}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Fine-line section ending */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full opacity-20">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 70 C180 20 300 20 480 65 C650 105 790 105 960 55 C1120 10 1270 20 1440 65"
            stroke="#C6577B"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  );
}
