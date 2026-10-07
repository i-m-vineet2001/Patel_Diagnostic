// import React from "react";
// import Reveal from "./Reveal";

// export default function SectionHeading({
//   eyebrow,
//   title,
//   subtitle,
//   center = false,
// }) {
//   return (
//     <Reveal className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
//       <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#2563EB] mb-4">
//         {eyebrow}
//       </p>
//       <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-[1.1]">
//         {title}
//       </h2>
//       {subtitle && <p className="mt-5 text-lg text-slate-600">{subtitle}</p>}
//     </Reveal>
//   );
// }

import React from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}) {
  return (
    <Reveal className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {/* Glass Eyebrow */}
      <div
        className={`
          inline-flex items-center
          px-6 py-3
          rounded-full

          /* real glass effect */
          bg-white/25
          backdrop-blur-2xl
          backdrop-saturate-150

          /* glass edge */
          border border-white/60
          ring-1 ring-[#C6577B]/[0.08]

          /* depth */
          shadow-[0_12px_40px_rgba(122,46,68,0.10)]

          /* subtle inner shine */
          before:absolute
          before:inset-0
          before:rounded-full
          before:bg-gradient-to-b
          before:from-white/30
          before:to-transparent
          before:pointer-events-none

          relative
          overflow-hidden

          ${center ? "mx-auto" : ""}
        `}
      >
        {/* tiny glass highlight */}
        <span className="absolute top-0 left-[15%] right-[15%] h-px bg-white/80" />

        <span
          className="
            relative z-10
            font-mono
            text-[10px] md:text-xs
            tracking-[0.25em]
            uppercase
            font-medium
            text-[#C6577B]
          "
        >
          {eyebrow}
        </span>
      </div>

      {/* Heading */}
      <h2
        className="
          mt-7
          text-3xl md:text-5xl
          font-bold
          tracking-tight
          leading-[1.08]
          text-[#7A2E44]
        "
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className="
            mt-5
            text-lg
            leading-relaxed
            text-slate-600
          "
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}