// import React from "react";

// import { Check } from "lucide-react";

// import { ALL_ORGANS } from "./siteData";

// export default function PackageCard({ pkg, onEnquire }) {
//   const dark = pkg.popular;

//   return (
//     <div
//       className={`relative h-full flex flex-col rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-1 ${
//         dark
//           ? "bg-[#0F172A] border-[#0F172A] text-white shadow-2xl"
//           : "bg-white border-slate-200 hover:border-[#C6577B]/50 shadow-sm hover:shadow-xl hover:shadow-[#7A2E44]/10"
//       }`}
//     >
//       {/* MOST POPULAR - KEEP GREEN */}
//       {dark && (
//         <span className="absolute -top-3 left-8 bg-[#10B981] text-white font-mono text-[11px] tracking-widest px-3 py-1 rounded-full shadow-lg">
//           MOST POPULAR
//         </span>
//       )}

//       {/* Package Name */}
//       <h3
//         className={`text-xl font-semibold ${
//           dark ? "text-white" : "text-[#0F172A]"
//         }`}
//       >
//         {pkg.name}
//       </h3>

//       {/* Tagline */}
//       <p
//         className={`mt-1 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}
//       >
//         {pkg.tagline}
//       </p>

//       {/* Price */}
//       <div className="mt-6 flex items-baseline gap-2">
//         <span className="font-mono text-4xl font-medium">₹{pkg.price}</span>

//         <span
//           className={`font-mono text-xs ${
//             dark ? "text-slate-400" : "text-slate-500"
//           }`}
//         >
//           / {pkg.tests} TESTS
//         </span>
//       </div>

//       {/* Vitality Index */}
//       <p
//         className={`mt-7 font-mono text-[11px] tracking-widest ${
//           dark ? "text-slate-400" : "text-slate-400"
//         }`}
//       >
//         VITALITY INDEX
//       </p>

//       <div className="mt-3 flex gap-1">
//         {ALL_ORGANS.map((o) => (
//           <span
//             key={o}
//             title={o}
//             className={`h-1.5 flex-1 rounded-full ${
//               pkg.coverage.includes(o)
//                 ? "bg-[#10B981]"
//                 : dark
//                   ? "bg-slate-700"
//                   : "bg-slate-200"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Coverage */}
//       <p
//         className={`mt-2 text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}
//       >
//         {pkg.coverage.join(" · ")}
//       </p>

//       {/* Features */}
//       <ul className="mt-7 space-y-3 flex-1">
//         {pkg.features.map((f) => (
//           <li key={f} className="flex gap-3 text-sm">
//             <Check className="w-4 h-4 mt-0.5 text-[#10B981] shrink-0" />

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
//           mt-8
//           h-12
//           rounded-xl
//           font-semibold
//           tracking-wide
//           transition-all
//           duration-300
//           border

//           ${
//             dark
//               ? `
//                 bg-[#C6577B]
//                 border-[#C6577B]
//                 text-white
//                 shadow-lg
//                 shadow-[#C6577B]/20
//                 hover:bg-[#b94c70]
//                 hover:border-[#b94c70]
//                 hover:shadow-xl
//                 hover:shadow-[#C6577B]/30
//                 hover:-translate-y-0.5
//               `
//               : `
//                 bg-[#FBF5F6]
//                 border-[#C6577B]/20
//                 text-[#7A2E44]
//                 hover:bg-[#7A2E44]
//                 hover:border-[#7A2E44]
//                 hover:text-white
//                 hover:shadow-lg
//                 hover:shadow-[#7A2E44]/15
//                 hover:-translate-y-0.5
//               `
//           }
//         `}
//       >
//         Enquire Now
//       </button>
//     </div>
//   );
// }

import React from "react";
import { Check } from "lucide-react";
import { ALL_ORGANS } from "./siteData";

export default function PackageCard({ pkg, onEnquire }) {
  const dark = pkg.popular;

  return (
    <div
      className={`
        group
        relative
        h-full
        flex
        flex-col

        /* IMPORTANT:
           Allows MOST POPULAR badge to sit outside card */
        overflow-visible

        rounded-[28px]
        p-8

        border
        transition-all
        duration-500
        ease-out

        hover:-translate-y-2

        ${
          dark
            ? `
              bg-[#0F172A]
              border-[#0F172A]
              text-white

              shadow-[0_20px_60px_rgba(15,23,42,0.18)]

              hover:shadow-[0_28px_75px_rgba(15,23,42,0.25)]
            `
            : `
              bg-white/35
              backdrop-blur-2xl
              backdrop-saturate-150

              border-white/70
              ring-1
              ring-[#7A2E44]/[0.06]

              shadow-[0_12px_45px_rgba(122,46,68,0.07)]

              hover:bg-white/45
              hover:border-white/90
              hover:ring-[#C6577B]/20
              hover:shadow-[0_25px_65px_rgba(122,46,68,0.14)]
            `
        }
      `}
    >
      {/* =====================================================
          GLASS EFFECT LAYER
      ====================================================== */}

      {!dark && (
        <>
          {/* Top glass highlight */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-8
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
              opacity-90
              rounded-full
            "
          />

          {/* Burgundy reflection */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-56
              w-56
              rounded-full

              bg-[#7A2E44]/[0.045]
              blur-[70px]

              transition-all
              duration-700

              group-hover:bg-[#7A2E44]/[0.08]
              group-hover:scale-110
            "
          />

          {/* Pink reflection */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20
              h-52
              w-52
              rounded-full

              bg-[#C6577B]/[0.05]
              blur-[70px]

              transition-all
              duration-700

              group-hover:bg-[#C6577B]/[0.09]
              group-hover:scale-110
            "
          />

          {/* Diagonal glass shine */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              top-10
              h-36
              w-72

              rotate-[-25deg]

              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent

              blur-2xl
              opacity-0

              transition-all
              duration-700

              group-hover:translate-x-[-20px]
              group-hover:opacity-100
            "
          />

          {/* Top-left decorative corner */}
          <span
            className="
              pointer-events-none
              absolute
              left-0
              top-0

              h-9
              w-9

              rounded-tl-[28px]

              border-l
              border-t
              border-[#C6577B]/20

              transition-all
              duration-500

              group-hover:h-14
              group-hover:w-14
              group-hover:border-[#C6577B]/45
            "
          />

          {/* Bottom-right decorative corner */}
          <span
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0

              h-9
              w-9

              rounded-br-[28px]

              border-r
              border-b
              border-[#C6577B]/20

              transition-all
              duration-500

              group-hover:h-14
              group-hover:w-14
              group-hover:border-[#C6577B]/45
            "
          />
        </>
      )}

      {/* =====================================================
          MOST POPULAR
      ====================================================== */}

      {dark && (
        <span
          className="
            absolute
            -top-3
            left-8
            z-30

            bg-[#10B981]
            text-white

            font-mono
            text-[11px]
            font-semibold
            tracking-[0.16em]

            px-4
            py-1.5

            rounded-full

            border
            border-white/20

            shadow-[0_8px_25px_rgba(16,185,129,0.35)]

            whitespace-nowrap
          "
        >
          MOST POPULAR
        </span>
      )}

      {/* =====================================================
          PACKAGE NAME
      ====================================================== */}

      <h3
        className={`
          relative
          text-xl
          font-semibold
          tracking-tight

          ${dark ? "text-white" : "text-[#7A2E44]"}
        `}
      >
        {pkg.name}
      </h3>

      {/* =====================================================
          TAGLINE
      ====================================================== */}

      <p
        className={`
          relative
          mt-1
          text-sm

          ${dark ? "text-slate-400" : "text-[#7B7075]"}
        `}
      >
        {pkg.tagline}
      </p>

      {/* =====================================================
          PRICE
      ====================================================== */}

      <div className="relative mt-6 flex items-baseline gap-2">
        <span
          className={`
            font-mono
            text-4xl
            font-medium
            tracking-tight

            ${dark ? "text-white" : "text-[#7A2E44]"}
          `}
        >
          ₹{pkg.price}
        </span>

        <span
          className={`
            font-mono
            text-xs
            tracking-wide

            ${dark ? "text-slate-400" : "text-[#9A858D]"}
          `}
        >
          / {pkg.tests} TESTS
        </span>
      </div>

      {/* =====================================================
          VITALITY INDEX
      ====================================================== */}

      <p
        className={`
          relative
          mt-7

          font-mono
          text-[11px]
          tracking-widest

          ${dark ? "text-slate-400" : "text-[#9A858D]"}
        `}
      >
        VITALITY INDEX
      </p>

      <div className="relative mt-3 flex gap-1">
        {ALL_ORGANS.map((o) => (
          <span
            key={o}
            title={o}
            className={`
              h-1.5
              flex-1
              rounded-full

              transition-all
              duration-500

              ${
                pkg.coverage.includes(o)
                  ? "bg-[#10B981]"
                  : dark
                    ? "bg-slate-700"
                    : "bg-[#E7DDE0]"
              }
            `}
          />
        ))}
      </div>

      {/* =====================================================
          COVERAGE
      ====================================================== */}

      <p
        className={`
          relative
          mt-2
          text-xs

          ${dark ? "text-slate-400" : "text-[#7B7075]"}
        `}
      >
        {pkg.coverage.join(" · ")}
      </p>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <ul className="relative mt-7 flex-1 space-y-3">
        {pkg.features.map((f) => (
          <li
            key={f}
            className={`
              flex
              gap-3
              text-sm

              ${dark ? "text-slate-300" : "text-[#5F5960]"}
            `}
          >
            <Check
              className="
                mt-0.5
                h-4
                w-4
                shrink-0
                text-[#10B981]
              "
              strokeWidth={2}
            />

            {f}
          </li>
        ))}
      </ul>

      {/* =====================================================
          PREMIUM ENQUIRE BUTTON
      ====================================================== */}

      <button
        onClick={() => onEnquire(pkg.name)}
        className={`
          relative
          mt-8
          h-12
          rounded-xl

          font-semibold
          tracking-wide

          border

          transition-all
          duration-300
          ease-out

          ${
            dark
              ? `
                bg-[#C6577B]
                border-[#C6577B]
                text-white

                shadow-[0_8px_25px_rgba(198,87,123,0.20)]

                hover:bg-[#B94C70]
                hover:border-[#B94C70]

                hover:shadow-[0_12px_32px_rgba(198,87,123,0.30)]

                hover:-translate-y-0.5
              `
              : `
                bg-white/30
                backdrop-blur-xl

                border-white/70

                text-[#7A2E44]

                shadow-[0_6px_20px_rgba(122,46,68,0.05)]

                hover:bg-[#7A2E44]
                hover:border-[#7A2E44]

                hover:text-white

                hover:shadow-[0_12px_30px_rgba(122,46,68,0.18)]

                hover:-translate-y-0.5
              `
          }
        `}
      >
        Enquire Now
      </button>

      {/* =====================================================
          PREMIUM BOTTOM ACCENT
      ====================================================== */}

      {!dark && (
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2

            h-[2px]
            w-0

            -translate-x-1/2

            bg-gradient-to-r
            from-[#7A2E44]
            via-[#C6577B]
            to-[#E7A7B9]

            transition-all
            duration-500

            group-hover:w-[65%]
          "
        />
      )}
    </div>
  );
}