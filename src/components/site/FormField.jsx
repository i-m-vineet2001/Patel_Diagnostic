// import React from "react";
// import { Check } from "lucide-react";

// export default function FormField({ label, textarea, valid, value, ...props }) {
//   const ok = valid && value;
//   const cls = `mt-2 w-full rounded-xl border bg-white px-4 text-[#0F172A] focus:outline-none focus:ring-4 transition-colors ${ok ? "border-[#10B981] focus:ring-emerald-100" : "border-slate-200 focus:border-[#2563EB] focus:ring-blue-100"}`;
//   return (
//     <label className="block relative">
//       <span className="text-sm font-medium text-slate-700">{label}</span>
//       {textarea ? (
//         <textarea
//           rows={4}
//           value={value}
//           className={`${cls} py-3 resize-none`}
//           {...props}
//         />
//       ) : (
//         <input value={value} className={`${cls} h-12 pr-10`} {...props} />
//       )}
//       {ok && !textarea && (
//         <Check
//           className="absolute right-3 top-[42px] w-4 h-4 text-[#10B981]"
//           aria-hidden
//         />
//       )}
//     </label>
//   );
// }

import React from "react";
import { Check } from "lucide-react";

export default function FormField({ label, textarea, valid, value, ...props }) {
  const ok = valid && value;

  const cls = `
    mt-2
    w-full
    rounded-xl

    /* GLASS */
    bg-white/40
    backdrop-blur-xl
    backdrop-saturate-150

    border
    ${ok ? "border-[#10B981]/50" : "border-white/70"}

    px-4

    text-[#5F5960]

    placeholder:text-slate-400

    outline-none

    transition-all
    duration-300

    ${
      ok
        ? `
          focus:border-[#10B981]
          focus:ring-4
          focus:ring-[#10B981]/10
        `
        : `
          focus:border-[#C6577B]/40
          focus:ring-4
          focus:ring-[#C6577B]/10
          focus:bg-white/55
        `
    }

    shadow-[0_4px_18px_rgba(122,46,68,0.035)]
  `;

  return (
    <label className="block relative">
      {/* Label */}
      <span
        className="
          text-[11px]
          font-mono
          font-medium
          tracking-[0.12em]
          uppercase
          text-[#7A2E44]
        "
      >
        {label}
      </span>

      {/* Field */}
      {textarea ? (
        <textarea
          rows={4}
          value={value}
          className={`
            ${cls}
            py-3
            resize-none
            leading-6
          `}
          {...props}
        />
      ) : (
        <input
          value={value}
          className={`
            ${cls}
            h-12
            pr-10
          `}
          {...props}
        />
      )}

      {/* Valid Check */}
      {ok && !textarea && (
        <span
          className="
            absolute
            right-3
            top-[38px]

            flex
            h-6
            w-6

            items-center
            justify-center

            rounded-full

            bg-[#10B981]/10

            border
            border-[#10B981]/15

            animate-[fieldCheck_0.3s_ease-out]
          "
        >
          <Check
            className="
              h-3.5
              w-3.5
              text-[#10B981]
            "
            strokeWidth={2.5}
            aria-hidden
          />
        </span>
      )}

      {/* Bottom glass highlight */}
      <span
        className="
          pointer-events-none
          absolute
          left-5
          right-5
          bottom-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/80
          to-transparent

          opacity-60
        "
      />

      <style>{`
        @keyframes fieldCheck {
          from {
            transform: scale(0.7);
            opacity: 0;
          }

          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </label>
  );
}