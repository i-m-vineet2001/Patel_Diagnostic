

// import React from "react";
// import { Check } from "lucide-react";

// export default function FormField({ label, textarea, valid, value, ...props }) {
//   const ok = valid && value;

//   const cls = `
//     mt-2
//     w-full
//     rounded-xl

//     /* GLASS */
//     bg-white/40
//     backdrop-blur-xl
//     backdrop-saturate-150

//     border
//     ${ok ? "border-[#10B981]/50" : "border-white/70"}

//     px-4

//     text-[#5F5960]

//     placeholder:text-slate-400

//     outline-none

//     transition-all
//     duration-300

//     ${
//       ok
//         ? `
//           focus:border-[#10B981]
//           focus:ring-4
//           focus:ring-[#10B981]/10
//         `
//         : `
//           focus:border-[#C6577B]/40
//           focus:ring-4
//           focus:ring-[#C6577B]/10
//           focus:bg-white/55
//         `
//     }

//     shadow-[0_4px_18px_rgba(122,46,68,0.035)]
//   `;

//   return (
//     <label className="block relative">
//       {/* Label */}
//       <span
//         className="
//           text-[11px]
//           font-mono
//           font-medium
//           tracking-[0.12em]
//           uppercase
//           text-[#7A2E44]
//         "
//       >
//         {label}
//       </span>

//       {/* Field */}
//       {textarea ? (
//         <textarea
//           rows={4}
//           value={value}
//           className={`
//             ${cls}
//             py-3
//             resize-none
//             leading-6
//           `}
//           {...props}
//         />
//       ) : (
//         <input
//           value={value}
//           className={`
//             ${cls}
//             h-12
//             pr-10
//           `}
//           {...props}
//         />
//       )}

//       {/* Valid Check */}
//       {ok && !textarea && (
//         <span
//           className="
//             absolute
//             right-3
//             top-[38px]

//             flex
//             h-6
//             w-6

//             items-center
//             justify-center

//             rounded-full

//             bg-[#10B981]/10

//             border
//             border-[#10B981]/15

//             animate-[fieldCheck_0.3s_ease-out]
//           "
//         >
//           <Check
//             className="
//               h-3.5
//               w-3.5
//               text-[#10B981]
//             "
//             strokeWidth={2.5}
//             aria-hidden
//           />
//         </span>
//       )}

//       {/* Bottom glass highlight */}
//       <span
//         className="
//           pointer-events-none
//           absolute
//           left-5
//           right-5
//           bottom-0

//           h-px

//           bg-gradient-to-r
//           from-transparent
//           via-white/80
//           to-transparent

//           opacity-60
//         "
//       />

//       <style>{`
//         @keyframes fieldCheck {
//           from {
//             transform: scale(0.7);
//             opacity: 0;
//           }

//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </label>
//   );
// }











import React from "react";
import { Check } from "lucide-react";

export default function FormField({ label, textarea, valid, value, ...props }) {
  const ok = Boolean(valid && value);

  const fieldBase = `
    mt-2 w-full rounded-2xl
    border bg-white/65 backdrop-blur-xl backdrop-saturate-150
    px-4 text-[14px] text-[#5F5960]
    placeholder:text-[#A99AA0]
    outline-none transition-all duration-300 ease-out
    shadow-[0_5px_20px_rgba(122,46,68,0.045)]
    hover:bg-white/75
    focus:bg-white/90 focus:ring-4
    ${
      ok
        ? "border-emerald-300/70 focus:border-emerald-400 focus:ring-emerald-500/10"
        : "border-[#E8D6DC] focus:border-[#C6577B]/55 focus:ring-[#C6577B]/10"
    }
  `;

  return (
    <label className="group relative block">
      <span className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7A2E44]">
        <span>{label}</span>
        {ok && !textarea && (
          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium normal-case tracking-normal text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Verified
          </span>
        )}
      </span>

      {textarea ? (
        <textarea
          rows={4}
          value={value}
          className={`${fieldBase} min-h-[124px] resize-y py-3.5 leading-6`}
          {...props}
        />
      ) : (
        <div className="relative">
          <input
            value={value}
            className={`${fieldBase} h-[50px] pr-12`}
            {...props}
          />
          {ok && (
            <span className="pointer-events-none absolute right-3.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-200/70 bg-emerald-50/80 text-emerald-600 shadow-sm animate-[fieldCheck_0.25s_ease-out]">
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
            </span>
          )}
        </div>
      )}

      <span className="pointer-events-none absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-70" />

      <style>{`
        @keyframes fieldCheck {
          from { transform: translateY(-50%) scale(0.72); opacity: 0; }
          to { transform: translateY(-50%) scale(1); opacity: 1; }
        }
      `}</style>
    </label>
  );
}
