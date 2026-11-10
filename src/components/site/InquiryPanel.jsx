
// import React from "react";

// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetDescription,
// } from "@/components/ui/sheet";

// import InquiryForm from "./InquiryForm";

// export default function InquiryPanel({ pkg, onClose }) {
//   return (
//     <Sheet open={!!pkg} onOpenChange={(open) => !open && onClose()}>
//       <SheetContent
//         side="right"
//         className="
//           w-full
//           sm:max-w-lg
//           overflow-y-auto

//           /* WARM GLASS BACKGROUND */
//           bg-[#FBF5F6]/90
//           backdrop-blur-2xl
//           backdrop-saturate-150

//           border-l
//           border-white/70

//           shadow-[-20px_0_70px_rgba(122,46,68,0.12)]

//           p-6
//           sm:p-8
//         "
//       >
//         {/* =====================================================
//             SOFT GLASS GLOW
//         ====================================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             -top-32
//             -right-32

//             h-72
//             w-72

//             rounded-full

//             bg-[#C6577B]/[0.08]

//             blur-[90px]
//           "
//         />

//         <div
//           className="
//             pointer-events-none
//             absolute
//             -bottom-32
//             -left-32

//             h-72
//             w-72

//             rounded-full

//             bg-[#7A2E44]/[0.055]

//             blur-[90px]
//           "
//         />

//         {/* =====================================================
//             SUBTLE GRID
//         ====================================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-0
//             opacity-20
//           "
//           style={{
//             backgroundImage: `
//               linear-gradient(
//                 rgba(198, 87, 123, 0.045) 1px,
//                 transparent 1px
//               ),
//               linear-gradient(
//                 90deg,
//                 rgba(198, 87, 123, 0.045) 1px,
//                 transparent 1px
//               )
//             `,
//             backgroundSize: "45px 45px",
//           }}
//         />

//         {/* =====================================================
//             CONTENT
//         ====================================================== */}

//         <div className="relative z-10">
//           <SheetHeader className="text-left mb-7">
//             {/* Glass eyebrow */}
//             <div
//               className="
//                 inline-flex
//                 w-fit
//                 items-center

//                 rounded-full

//                 bg-white/30
//                 backdrop-blur-xl

//                 border
//                 border-white/70

//                 ring-1
//                 ring-[#C6577B]/[0.06]

//                 px-4
//                 py-2

//                 shadow-[0_8px_25px_rgba(122,46,68,0.06)]
//               "
//             >
//               <p
//                 className="
//                   font-mono
//                   text-[10px]
//                   tracking-[0.2em]
//                   uppercase
//                   font-medium
//                   text-[#C6577B]
//                 "
//               >
//                 Package Enquiry
//               </p>
//             </div>

//             <SheetTitle
//               className="
//                 mt-5

//                 text-2xl
//                 sm:text-3xl

//                 font-bold
//                 tracking-tight

//                 text-[#7A2E44]
//               "
//             >
//               {pkg}
//             </SheetTitle>

//             <SheetDescription
//               className="
//                 mt-2

//                 text-[15px]
//                 leading-6

//                 text-slate-600
//               "
//             >
//               Leave your details and we'll call to confirm your slot and answer
//               any questions.
//             </SheetDescription>
//           </SheetHeader>

//           {/* ===================================================
//               FORM GLASS CONTAINER
//           ==================================================== */}

//           {pkg && (
//             <div
//               className="
//                 relative

//                 rounded-[26px]

//                 bg-white/45
//                 backdrop-blur-xl
//                 backdrop-saturate-150

//                 border
//                 border-white/70

//                 ring-1
//                 ring-[#7A2E44]/[0.05]

//                 p-5
//                 sm:p-6

//                 shadow-[0_15px_45px_rgba(122,46,68,0.07)]
//               "
//             >
//               {/* Top glass highlight */}
//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   inset-x-8
//                   top-0

//                   h-px

//                   bg-gradient-to-r
//                   from-transparent
//                   via-white
//                   to-transparent
//                 "
//               />

//               {/* Small decorative dot */}
//               <span
//                 className="
//                   pointer-events-none
//                   absolute
//                   right-6
//                   top-6

//                   h-2
//                   w-2

//                   rounded-full

//                   bg-[#C6577B]/25

//                   shadow-[0_0_15px_rgba(198,87,123,0.25)]
//                 "
//               />

//               <InquiryForm key={pkg} defaultPackage={pkg} />
//             </div>
//           )}
//         </div>

//         {/* =====================================================
//             BOTTOM ACCENT
//         ====================================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-0
//             left-0

//             h-[2px]
//             w-full

//             bg-gradient-to-r
//             from-[#7A2E44]
//             via-[#C6577B]
//             to-[#E9A0B5]
//           "
//         />
//       </SheetContent>
//     </Sheet>
//   );
// }








import React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import InquiryForm from "./InquiryForm";

export default function InquiryPanel({ pkg, onClose }) {
  return (
    <Sheet open={!!pkg} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        className="
          relative
          w-full
          overflow-y-auto
          border-l border-white/75
          bg-[#FBF5F6]/95
          p-5
          shadow-[-24px_0_80px_rgba(122,46,68,0.14)]
          backdrop-blur-2xl
          backdrop-saturate-150
          sm:max-w-lg sm:p-7
        "
      >
        {/* Ambient brand glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#C6577B]/10 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#7A2E44]/[0.06] blur-[90px]"
        />

        {/* Quiet, low-contrast grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(198, 87, 123, 0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(198, 87, 123, 0.045) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />

        <div className="relative z-10">
          <SheetHeader className="mb-7 text-left">
            <div className="inline-flex w-fit items-center rounded-full border border-white/75 bg-white/55 px-3.5 py-2 shadow-[0_8px_25px_rgba(122,46,68,0.06)] ring-1 ring-[#C6577B]/[0.06] backdrop-blur-xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6577B]">
                Package enquiry
              </p>
            </div>

            <SheetTitle className="mt-4 break-words text-2xl font-semibold leading-tight tracking-tight text-[#7A2E44] sm:text-3xl">
              {pkg}
            </SheetTitle>

            <SheetDescription className="mt-2 max-w-sm text-sm leading-6 text-[#655B61] sm:text-[15px]">
              Leave your details and our care team will call to confirm your
              slot and answer any questions.
            </SheetDescription>
          </SheetHeader>

          {pkg && (
            <div className="relative rounded-[26px] border border-white/80 bg-white/55 p-4 shadow-[0_18px_50px_rgba(122,46,68,0.08)] ring-1 ring-[#7A2E44]/[0.04] backdrop-blur-xl sm:p-5">
              {/* Glass edge highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-5 h-2 w-2 rounded-full bg-[#C6577B]/30 shadow-[0_0_15px_rgba(198,87,123,0.25)]"
              />

              <InquiryForm key={pkg} defaultPackage={pkg} />
            </div>
          )}
        </div>

        {/* Brand-colored bottom rule */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#7A2E44] via-[#C6577B] to-[#E9A0B5]"
        />
      </SheetContent>
    </Sheet>
  );
}
