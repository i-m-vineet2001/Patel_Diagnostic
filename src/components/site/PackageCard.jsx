
// import React from "react";
// import { Check } from "lucide-react";
// import { ALL_ORGANS } from "./siteData";

// export default function PackageCard({ pkg, onEnquire }) {
//   const dark = pkg.popular;

//   return (
//     <div
//       className={`
//         group
//         relative
//         h-full
//         flex
//         flex-col

//         /* IMPORTANT:
//            Allows MOST POPULAR badge to sit outside card */
//         overflow-visible

//         rounded-[28px]
//         p-8

//         border
//         transition-all
//         duration-500
//         ease-out

//         hover:-translate-y-2

//         ${
//           dark
//             ? `
//               bg-[#0F172A]
//               border-[#0F172A]
//               text-white

//               shadow-[0_20px_60px_rgba(15,23,42,0.18)]

//               hover:shadow-[0_28px_75px_rgba(15,23,42,0.25)]
//             `
//             : `
//               bg-white/35
//               backdrop-blur-2xl
//               backdrop-saturate-150

//               border-white/70
//               ring-1
//               ring-[#7A2E44]/[0.06]

//               shadow-[0_12px_45px_rgba(122,46,68,0.07)]

//               hover:bg-white/45
//               hover:border-white/90
//               hover:ring-[#C6577B]/20
//               hover:shadow-[0_25px_65px_rgba(122,46,68,0.14)]
//             `
//         }
//       `}
//     >
//       {/* =====================================================
//           GLASS EFFECT LAYER
//       ====================================================== */}

//       {!dark && (
//         <>
//           {/* Top glass highlight */}
//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-x-8
//               top-0
//               h-px
//               bg-gradient-to-r
//               from-transparent
//               via-white
//               to-transparent
//               opacity-90
//               rounded-full
//             "
//           />

//           {/* Burgundy reflection */}
//           <div
//             className="
//               pointer-events-none
//               absolute
//               -right-24
//               -top-24
//               h-56
//               w-56
//               rounded-full

//               bg-[#7A2E44]/[0.045]
//               blur-[70px]

//               transition-all
//               duration-700

//               group-hover:bg-[#7A2E44]/[0.08]
//               group-hover:scale-110
//             "
//           />

//           {/* Pink reflection */}
//           <div
//             className="
//               pointer-events-none
//               absolute
//               -bottom-24
//               -left-20
//               h-52
//               w-52
//               rounded-full

//               bg-[#C6577B]/[0.05]
//               blur-[70px]

//               transition-all
//               duration-700

//               group-hover:bg-[#C6577B]/[0.09]
//               group-hover:scale-110
//             "
//           />

//           {/* Diagonal glass shine */}
//           <div
//             className="
//               pointer-events-none
//               absolute
//               -right-24
//               top-10
//               h-36
//               w-72

//               rotate-[-25deg]

//               bg-gradient-to-r
//               from-transparent
//               via-white/20
//               to-transparent

//               blur-2xl
//               opacity-0

//               transition-all
//               duration-700

//               group-hover:translate-x-[-20px]
//               group-hover:opacity-100
//             "
//           />

//           {/* Top-left decorative corner */}
//           <span
//             className="
//               pointer-events-none
//               absolute
//               left-0
//               top-0

//               h-9
//               w-9

//               rounded-tl-[28px]

//               border-l
//               border-t
//               border-[#C6577B]/20

//               transition-all
//               duration-500

//               group-hover:h-14
//               group-hover:w-14
//               group-hover:border-[#C6577B]/45
//             "
//           />

//           {/* Bottom-right decorative corner */}
//           <span
//             className="
//               pointer-events-none
//               absolute
//               bottom-0
//               right-0

//               h-9
//               w-9

//               rounded-br-[28px]

//               border-r
//               border-b
//               border-[#C6577B]/20

//               transition-all
//               duration-500

//               group-hover:h-14
//               group-hover:w-14
//               group-hover:border-[#C6577B]/45
//             "
//           />
//         </>
//       )}

//       {/* =====================================================
//           MOST POPULAR
//       ====================================================== */}

//       {dark && (
//         <span
//           className="
//             absolute
//             -top-3
//             left-8
//             z-30

//             bg-[#10B981]
//             text-white

//             font-mono
//             text-[11px]
//             font-semibold
//             tracking-[0.16em]

//             px-4
//             py-1.5

//             rounded-full

//             border
//             border-white/20

//             shadow-[0_8px_25px_rgba(16,185,129,0.35)]

//             whitespace-nowrap
//           "
//         >
//           MOST POPULAR
//         </span>
//       )}

//       {/* =====================================================
//           PACKAGE NAME
//       ====================================================== */}

//       <h3
//         className={`
//           relative
//           text-xl
//           font-semibold
//           tracking-tight

//           ${dark ? "text-white" : "text-[#7A2E44]"}
//         `}
//       >
//         {pkg.name}
//       </h3>

//       {/* =====================================================
//           TAGLINE
//       ====================================================== */}

//       <p
//         className={`
//           relative
//           mt-1
//           text-sm

//           ${dark ? "text-slate-400" : "text-[#7B7075]"}
//         `}
//       >
//         {pkg.tagline}
//       </p>

//       {/* =====================================================
//           PRICE
//       ====================================================== */}

//       <div className="relative mt-6 flex items-baseline gap-2">
//         <span
//           className={`
//             font-mono
//             text-4xl
//             font-medium
//             tracking-tight

//             ${dark ? "text-white" : "text-[#7A2E44]"}
//           `}
//         >
//           ₹{pkg.price}
//         </span>

//         <span
//           className={`
//             font-mono
//             text-xs
//             tracking-wide

//             ${dark ? "text-slate-400" : "text-[#9A858D]"}
//           `}
//         >
//           / {pkg.tests} TESTS
//         </span>
//       </div>

//       {/* =====================================================
//           VITALITY INDEX
//       ====================================================== */}

//       <p
//         className={`
//           relative
//           mt-7

//           font-mono
//           text-[11px]
//           tracking-widest

//           ${dark ? "text-slate-400" : "text-[#9A858D]"}
//         `}
//       >
//         VITALITY INDEX
//       </p>

//       <div className="relative mt-3 flex gap-1">
//         {ALL_ORGANS.map((o) => (
//           <span
//             key={o}
//             title={o}
//             className={`
//               h-1.5
//               flex-1
//               rounded-full

//               transition-all
//               duration-500

//               ${
//                 pkg.coverage.includes(o)
//                   ? "bg-[#10B981]"
//                   : dark
//                     ? "bg-slate-700"
//                     : "bg-[#E7DDE0]"
//               }
//             `}
//           />
//         ))}
//       </div>

//       {/* =====================================================
//           COVERAGE
//       ====================================================== */}

//       <p
//         className={`
//           relative
//           mt-2
//           text-xs

//           ${dark ? "text-slate-400" : "text-[#7B7075]"}
//         `}
//       >
//         {pkg.coverage.join(" · ")}
//       </p>

//       {/* =====================================================
//           FEATURES
//       ====================================================== */}

//       <ul className="relative mt-7 flex-1 space-y-3">
//         {pkg.features.map((f) => (
//           <li
//             key={f}
//             className={`
//               flex
//               gap-3
//               text-sm

//               ${dark ? "text-slate-300" : "text-[#5F5960]"}
//             `}
//           >
//             <Check
//               className="
//                 mt-0.5
//                 h-4
//                 w-4
//                 shrink-0
//                 text-[#10B981]
//               "
//               strokeWidth={2}
//             />

//             {f}
//           </li>
//         ))}
//       </ul>

//       {/* =====================================================
//           PREMIUM ENQUIRE BUTTON
//       ====================================================== */}

//       <button
//         onClick={() => onEnquire(pkg.name)}
//         className={`
//           relative
//           mt-8
//           h-12
//           rounded-xl

//           font-semibold
//           tracking-wide

//           border

//           transition-all
//           duration-300
//           ease-out

//           ${
//             dark
//               ? `
//                 bg-[#C6577B]
//                 border-[#C6577B]
//                 text-white

//                 shadow-[0_8px_25px_rgba(198,87,123,0.20)]

//                 hover:bg-[#B94C70]
//                 hover:border-[#B94C70]

//                 hover:shadow-[0_12px_32px_rgba(198,87,123,0.30)]

//                 hover:-translate-y-0.5
//               `
//               : `
//                 bg-white/30
//                 backdrop-blur-xl

//                 border-white/70

//                 text-[#7A2E44]

//                 shadow-[0_6px_20px_rgba(122,46,68,0.05)]

//                 hover:bg-[#7A2E44]
//                 hover:border-[#7A2E44]

//                 hover:text-white

//                 hover:shadow-[0_12px_30px_rgba(122,46,68,0.18)]

//                 hover:-translate-y-0.5
//               `
//           }
//         `}
//       >
//         Enquire Now
//       </button>

//       {/* =====================================================
//           PREMIUM BOTTOM ACCENT
//       ====================================================== */}

//       {!dark && (
//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-0
//             left-1/2

//             h-[2px]
//             w-0

//             -translate-x-1/2

//             bg-gradient-to-r
//             from-[#7A2E44]
//             via-[#C6577B]
//             to-[#E7A7B9]

//             transition-all
//             duration-500

//             group-hover:w-[65%]
//           "
//         />
//       )}
//     </div>
//   );
// }





import React from "react";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { ALL_ORGANS } from "./siteData";

export default function PackageCard({ pkg, onEnquire }) {
  const featured = Boolean(pkg.popular);

  return (
    <article
      className={`group relative isolate flex h-full flex-col overflow-visible rounded-[30px] border p-7 transition-all duration-500 ease-out hover:-translate-y-1.5 sm:p-8 ${
        featured
          ? "border-[#7A2E44] bg-[#7A2E44] text-white shadow-[0_22px_55px_rgba(122,46,68,0.22)] hover:shadow-[0_28px_65px_rgba(122,46,68,0.30)]"
          : "border-[#EADCE1] bg-white/80 text-[#34252B] shadow-[0_12px_35px_rgba(122,46,68,0.06)] backdrop-blur-xl hover:border-[#C6577B]/40 hover:bg-white hover:shadow-[0_22px_50px_rgba(122,46,68,0.12)]"
      }`}
    >
      {!featured && (
        <>
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="pointer-events-none absolute -right-12 -top-12 -z-10 h-40 w-40 rounded-full bg-[#C6577B]/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-150" />
          <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-[#7A2E44] via-[#C6577B] to-[#E7A7B9] transition-transform duration-500 group-hover:scale-x-100" />
        </>
      )}

      {featured && (
        <span className="absolute -top-3.5 left-7 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-[#C6577B] px-3.5 py-1.5 text-[10px] font-bold tracking-[0.16em] text-white shadow-[0_8px_22px_rgba(198,87,123,0.3)]">
          <Sparkles className="h-3 w-3" />
          MOST POPULAR
        </span>
      )}

      <div className="relative">
        <p
          className={`mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] ${featured ? "text-white/60" : "text-[#A27C89]"}`}
        >
          Health screening
        </p>
        <h3
          className={`text-xl font-semibold tracking-tight sm:text-[22px] ${featured ? "text-white" : "text-[#7A2E44]"}`}
        >
          {pkg.name}
        </h3>
        <p
          className={`mt-1.5 min-h-10 text-sm leading-6 ${featured ? "text-white/70" : "text-[#78666D]"}`}
        >
          {pkg.tagline}
        </p>

        <div
          className={`mt-5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 border-b pb-5 ${featured ? "border-white/15" : "border-[#F0E5E9]"}`}
        >
          <span
            className={`text-4xl font-semibold tracking-[-0.04em] sm:text-[42px] ${featured ? "text-white" : "text-[#7A2E44]"}`}
          >
            ₹{pkg.price}
          </span>
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${featured ? "text-white/55" : "text-[#A28B94]"}`}
          >
            {pkg.tests} tests included
          </span>
        </div>
      </div>

      <section className="relative mt-5" aria-label="Package coverage">
        <div className="flex items-center justify-between gap-3">
          <p
            className={`text-[10px] font-bold uppercase tracking-[0.17em] ${featured ? "text-white/60" : "text-[#A27C89]"}`}
          >
            Vitality index
          </p>
          <span
            className={`text-[10px] ${featured ? "text-white/50" : "text-[#B09AA2]"}`}
          >
            {pkg.coverage.length} areas
          </span>
        </div>
        <div className="mt-3 flex gap-1.5">
          {ALL_ORGANS.map((organ) => {
            const included = pkg.coverage.includes(organ);
            return (
              <span
                key={organ}
                title={`${organ}${included ? " included" : " not included"}`}
                className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                  included
                    ? "bg-[#10B981]"
                    : featured
                      ? "bg-white/15"
                      : "bg-[#E9DDE2]"
                }`}
              />
            );
          })}
        </div>
        <p
          className={`mt-2.5 text-xs leading-5 ${featured ? "text-white/65" : "text-[#78666D]"}`}
        >
          {pkg.coverage.join(" · ")}
        </p>
      </section>

      <ul className="relative mt-6 flex-1 space-y-3.5">
        {pkg.features.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-3 text-sm leading-5 ${featured ? "text-white/85" : "text-[#5F5056]"}`}
          >
            <span
              className={`mt-0.5 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${featured ? "bg-white/10 text-[#A8F0D2]" : "bg-[#F8EAF0] text-[#C6577B]"}`}
            >
              <Check className="h-3 w-3" strokeWidth={2.5} />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onEnquire(pkg.name)}
        className={`relative mt-8 inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-2xl border px-4 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6577B] focus-visible:ring-offset-2 ${
          featured
            ? "border-[#C6577B] bg-[#C6577B] text-white shadow-[0_8px_22px_rgba(198,87,123,0.2)] hover:border-[#D87594] hover:bg-[#D87594] hover:shadow-[0_12px_28px_rgba(198,87,123,0.28)]"
            : "border-[#E8D3DB] bg-[#FBF5F7] text-[#7A2E44] hover:border-[#7A2E44] hover:bg-[#7A2E44] hover:text-white hover:shadow-[0_10px_25px_rgba(122,46,68,0.16)]"
        }`}
      >
        Enquire Now
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </article>
  );
}
