
// import React from "react";

// export default function Logo({ light = false }) {
//   return (
//     <span className="flex items-center gap-3">
//       {/* Logo Image */}
//       <img
//         src="/logoGlass4.png"
//         alt="PATEL DIAGNOSTIC CENTER Logo"
//         className="w-15 h-12 object-contain"
//       />

//       {/* Brand Name */}
//       <span
//         className={`font-heading font-bold text-xl tracking-tight ${
//           light ? "text-white" : "text-[#7a2e44]"
//         }`}
//       >
//         PATEL DIAGNOSTIC CENTER
//       </span>
//     </span>
//   );
// }







import React from "react";

export default function Logo({
  light = false,
  className = "",
  compact = false,
}) {
  return (
    <span
      className={`group inline-flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}
      aria-label="Patel Diagnostic Center"
    >
      {/* Brand mark */}
      <span className="relative flex h-11 w-12 shrink-0 items-center justify-center sm:h-12 sm:w-14">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl bg-[#C6577B]/[0.08] blur-md transition duration-300 group-hover:bg-[#C6577B]/[0.14]"
        />
        <img
          src="/logoGlass4.png"
          alt="PATEL DIAGNOSTIC CENTER logo"
          className="relative h-full w-full object-contain drop-shadow-[0_3px_8px_rgba(122,46,68,0.10)]"
        />
      </span>

      {/* Wordmark */}
      <span
        className={`min-w-0 font-heading font-bold leading-tight tracking-[-0.035em] ${
          compact ? "text-base sm:text-lg" : "text-[17px] sm:text-xl"
        } ${light ? "text-white" : "text-[#7A2E44]"}`}
      >
        <span className="block whitespace-nowrap">PATEL DIAGNOSTIC</span>
        <span
          className={`mt-0.5 block text-[0.68em] font-semibold tracking-[0.19em] ${
            light ? "text-white/75" : "text-[#C6577B]"
          }`}
        >
          CENTER
        </span>
      </span>
    </span>
  );
}
