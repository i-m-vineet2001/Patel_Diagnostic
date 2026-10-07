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
//     <Sheet open={!!pkg} onOpenChange={(o) => !o && onClose()}>
//       <SheetContent
//         side="right"
//         className="w-full sm:max-w-lg overflow-y-auto bg-[#F8FAFC]"
//       >
//         <SheetHeader className="text-left mb-6">
//           <p className="font-mono text-xs tracking-[0.2em] text-[#2563EB]">
//             PACKAGE ENQUIRY
//           </p>
//           <SheetTitle className="text-2xl font-bold text-[#0F172A]">
//             {pkg}
//           </SheetTitle>
//           <SheetDescription>
//             Leave your details and we'll call to confirm your slot and answer
//             any questions.
//           </SheetDescription>
//         </SheetHeader>
//         {pkg && <InquiryForm key={pkg} defaultPackage={pkg} />}
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
          w-full
          sm:max-w-lg
          overflow-y-auto

          /* WARM GLASS BACKGROUND */
          bg-[#FBF5F6]/90
          backdrop-blur-2xl
          backdrop-saturate-150

          border-l
          border-white/70

          shadow-[-20px_0_70px_rgba(122,46,68,0.12)]

          p-6
          sm:p-8
        "
      >
        {/* =====================================================
            SOFT GLASS GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -top-32
            -right-32

            h-72
            w-72

            rounded-full

            bg-[#C6577B]/[0.08]

            blur-[90px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32

            h-72
            w-72

            rounded-full

            bg-[#7A2E44]/[0.055]

            blur-[90px]
          "
        />

        {/* =====================================================
            SUBTLE GRID
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-20
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(198, 87, 123, 0.045) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(198, 87, 123, 0.045) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "45px 45px",
          }}
        />

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="relative z-10">
          <SheetHeader className="text-left mb-7">
            {/* Glass eyebrow */}
            <div
              className="
                inline-flex
                w-fit
                items-center

                rounded-full

                bg-white/30
                backdrop-blur-xl

                border
                border-white/70

                ring-1
                ring-[#C6577B]/[0.06]

                px-4
                py-2

                shadow-[0_8px_25px_rgba(122,46,68,0.06)]
              "
            >
              <p
                className="
                  font-mono
                  text-[10px]
                  tracking-[0.2em]
                  uppercase
                  font-medium
                  text-[#C6577B]
                "
              >
                Package Enquiry
              </p>
            </div>

            <SheetTitle
              className="
                mt-5

                text-2xl
                sm:text-3xl

                font-bold
                tracking-tight

                text-[#7A2E44]
              "
            >
              {pkg}
            </SheetTitle>

            <SheetDescription
              className="
                mt-2

                text-[15px]
                leading-6

                text-slate-600
              "
            >
              Leave your details and we'll call to confirm your slot and answer
              any questions.
            </SheetDescription>
          </SheetHeader>

          {/* ===================================================
              FORM GLASS CONTAINER
          ==================================================== */}

          {pkg && (
            <div
              className="
                relative

                rounded-[26px]

                bg-white/45
                backdrop-blur-xl
                backdrop-saturate-150

                border
                border-white/70

                ring-1
                ring-[#7A2E44]/[0.05]

                p-5
                sm:p-6

                shadow-[0_15px_45px_rgba(122,46,68,0.07)]
              "
            >
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
                "
              />

              {/* Small decorative dot */}
              <span
                className="
                  pointer-events-none
                  absolute
                  right-6
                  top-6

                  h-2
                  w-2

                  rounded-full

                  bg-[#C6577B]/25

                  shadow-[0_0_15px_rgba(198,87,123,0.25)]
                "
              />

              <InquiryForm key={pkg} defaultPackage={pkg} />
            </div>
          )}
        </div>

        {/* =====================================================
            BOTTOM ACCENT
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0

            h-[2px]
            w-full

            bg-gradient-to-r
            from-[#7A2E44]
            via-[#C6577B]
            to-[#E9A0B5]
          "
        />
      </SheetContent>
    </Sheet>
  );
}