
// import React from "react";

// import { Star, Quote } from "lucide-react";

// import Reveal from "./Reveal";
// import SectionHeading from "./SectionHeading";

// const reviews = [
//   {
//     name: "Anita Rao",
//     location: "Indiranagar",
//     text: "The home sample collection was on time and the phlebotomist was so gentle. Got my reports on WhatsApp the same evening — incredibly smooth.",
//     rating: 5,
//   },

//   {
//     name: "Rajesh Menon",
//     location: "Koramangala",
//     text: "Booked the Comprehensive Care package. The doctor consultation that followed actually explained my reports clearly. Felt looked after, not processed.",
//     rating: 5,
//   },

//   {
//     name: "Fatima Sheikh",
//     location: "Jayanagar",
//     text: "Spotless lab, polite staff, and reports that my family doctor trusted immediately. Lumina is now our default for any test.",
//     rating: 5,
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         py-24
//         md:py-32
//         bg-[#FBF5F6]
//       "
//     >
//       {/* =====================================================
//           SOFT WARM BACKGROUND GLOW
//       ====================================================== */}

//       <div
//         className="
//           absolute
//           -top-48
//           -right-48
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-[#C6577B]/[0.06]
//           blur-[120px]
//           pointer-events-none
//         "
//       />

//       <div
//         className="
//           absolute
//           -bottom-48
//           -left-48
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-[#7A2E44]/[0.045]
//           blur-[120px]
//           pointer-events-none
//         "
//       />

//       {/* =====================================================
//           VERY SUBTLE WARM GRID
//       ====================================================== */}

//       <div
//         className="
//           absolute
//           inset-0
//           pointer-events-none
//           opacity-30
//         "
//         style={{
//           backgroundImage: `
//             linear-gradient(
//               rgba(198, 87, 123, 0.045) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(198, 87, 123, 0.045) 1px,
//               transparent 1px
//             )
//           `,
//           backgroundSize: "52px 52px",
//         }}
//       />

//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <div className="relative z-10 max-w-6xl mx-auto px-6">
//         {/* Section Heading */}

//         <SectionHeading
//           center
//           eyebrow="Patient Voices"
//           title="Trusted by families across the city"
//           subtitle="Real experiences from people who chose Patel Diagnostic for their healthcare needs."
//         />

//         {/* ===================================================
//             TESTIMONIAL CARDS
//         ==================================================== */}

//         <div className="mt-16 grid md:grid-cols-3 gap-7">
//           {reviews.map((r, i) => (
//             <Reveal key={r.name} delay={i * 0.1} className="h-full">
//               <figure
//                 className="
//                   group
//                   relative
//                   h-full
//                   overflow-hidden

//                   rounded-[28px]

//                   bg-white/80
//                   backdrop-blur-xl

//                   border
//                   border-[#7A2E44]/[0.08]

//                   p-8

//                   shadow-[0_12px_45px_rgba(122,46,68,0.055)]

//                   transition-all
//                   duration-700
//                   ease-out

//                   hover:-translate-y-2
//                   hover:bg-white
//                   hover:border-[#C6577B]/25
//                   hover:shadow-[0_25px_65px_rgba(122,46,68,0.12)]
//                 "
//               >
//                 {/* =========================================
//                     SOFT CARD GLOW
//                 ========================================== */}

//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     -right-24
//                     -top-24

//                     h-52
//                     w-52

//                     rounded-full

//                     bg-[#C6577B]/[0.035]

//                     blur-3xl

//                     transition-all
//                     duration-700

//                     group-hover:bg-[#C6577B]/[0.09]
//                   "
//                 />

//                 {/* =========================================
//                     QUOTE ICON
//                 ========================================== */}

//                 <div
//                   className="
//                     relative
//                     flex
//                     h-12
//                     w-12
//                     items-center
//                     justify-center

//                     rounded-2xl

//                     bg-[#C6577B]/[0.08]

//                     border
//                     border-[#C6577B]/[0.12]

//                     transition-all
//                     duration-500

//                     group-hover:bg-[#7A2E44]
//                     group-hover:border-[#7A2E44]
//                   "
//                 >
//                   <Quote
//                     className="
//                       h-5
//                       w-5
//                       text-[#7A2E44]

//                       transition-colors
//                       duration-500

//                       group-hover:text-white
//                     "
//                     strokeWidth={1.5}
//                   />
//                 </div>

//                 {/* =========================================
//                     RATING
//                 ========================================== */}

//                 <div className="relative mt-6 flex items-center gap-1">
//                   {Array.from({ length: r.rating }).map((_, s) => (
//                     <Star
//                       key={s}
//                       className="
//                         h-4
//                         w-4
//                         fill-[#10B981]
//                         text-[#10B981]
//                       "
//                       strokeWidth={1.5}
//                     />
//                   ))}

//                   <span className="ml-2 text-[11px] font-mono tracking-wider text-slate-400">
//                     VERIFIED EXPERIENCE
//                   </span>
//                 </div>

//                 {/* =========================================
//                     REVIEW TEXT
//                 ========================================== */}

//                 <blockquote
//                   className="
//                     relative
//                     mt-5

//                     text-[15px]
//                     leading-7

//                     text-slate-600
//                   "
//                 >
//                   “{r.text}”
//                 </blockquote>

//                 {/* =========================================
//                     DIVIDER
//                 ========================================== */}

//                 <div
//                   className="
//                     relative
//                     mt-7
//                     h-px
//                     w-full
//                     bg-[#7A2E44]/[0.07]
//                   "
//                 />

//                 {/* =========================================
//                     PATIENT INFO
//                 ========================================== */}

//                 <figcaption className="relative mt-6 flex items-center gap-3">
//                   <span
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       shrink-0
//                       items-center
//                       justify-center

//                       rounded-full

//                       bg-[#7A2E44]

//                       text-white
//                       font-semibold

//                       shadow-[0_6px_18px_rgba(122,46,68,0.18)]
//                     "
//                   >
//                     {r.name[0]}
//                   </span>

//                   <span>
//                     <p
//                       className="
//                         font-semibold
//                         text-[#7A2E44]
//                       "
//                     >
//                       {r.name}
//                     </p>

//                     <p
//                       className="
//                         mt-0.5
//                         text-sm
//                         text-slate-500
//                       "
//                     >
//                       {r.location}
//                     </p>
//                   </span>
//                 </figcaption>

//                 {/* =========================================
//                     PREMIUM BOTTOM ACCENT
//                 ========================================== */}

//                 <div
//                   className="
//                     absolute
//                     bottom-0
//                     left-0

//                     h-[2px]
//                     w-0

//                     bg-gradient-to-r
//                     from-[#7A2E44]
//                     via-[#C6577B]
//                     to-[#E9A0B5]

//                     transition-all
//                     duration-700

//                     group-hover:w-full
//                   "
//                 />
//               </figure>
//             </Reveal>
//           ))}
//         </div>
//       </div>

//       {/* =====================================================
//           ECG CONTINUITY
//       ====================================================== */}

//       <div
//         className="
//           relative
//           mt-20
//           h-16
//           w-full
//           pointer-events-none
//         "
//       >
//         <svg
//           className="absolute inset-0 w-full h-full"
//           viewBox="0 0 1440 80"
//           preserveAspectRatio="none"
//           fill="none"
//         >
//           <path
//             d="
//               M0 45
//               H330
//               L350 45
//               L370 27
//               L392 63
//               L415 14
//               L438 66
//               L460 45
//               H720
//               C850 45 900 27 1010 27
//               C1120 27 1180 55 1280 55
//               H1440
//             "
//             stroke="#C6577B"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             opacity="0.18"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }







import React from "react";

import { Star, Quote } from "lucide-react";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reviews = [
  {
    name: "Sumanta Patel",
    location: "Sundargarh",
    text: "Great service at that location",
    rating: 5,
  },

  {
    name: "Rosaline Patel",
    location: "Sundargarh",
    text: "Staff are highly trained. Sample collection was painless.A clean atmospheric environment. recommend for all test u serching.",
    rating: 5,
  },

  {
    name: "CHINTAMANI SWAIN",
    location: "Sundargarh",
    text: "Good medical atmosphere. Staff are well dress and trained. You can trust reports",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className="
        relative
        overflow-hidden

        py-24
        md:py-32

        bg-[#FBF5F6]
      "
    >
      {/* =====================================================
          SOFT WARM BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          absolute
          -top-48
          -right-48

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#C6577B]/[0.06]

          blur-[120px]

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-48
          -left-48

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#7A2E44]/[0.045]

          blur-[120px]

          pointer-events-none
        "
      />

      {/* =====================================================
          VERY SUBTLE WARM GRID
      ====================================================== */}

      <div
        className="
          absolute
          inset-0

          pointer-events-none
          opacity-30
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
          backgroundSize: "52px 52px",
        }}
      />

      {/* =====================================================
          POLKA LIGHT DOTS
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Large soft dots */}

        <span
          className="
            absolute
            left-[8%]
            top-[28%]

            h-3
            w-3

            rounded-full

            bg-[#C6577B]/20

            blur-[1px]

            shadow-[0_0_20px_rgba(198,87,123,0.20)]

            animate-[floatDot_7s_ease-in-out_infinite]
          "
        />

        <span
          className="
            absolute
            right-[9%]
            top-[22%]

            h-2
            w-2

            rounded-full

            bg-[#C6577B]/25

            shadow-[0_0_18px_rgba(198,87,123,0.25)]

            animate-[floatDot_9s_ease-in-out_infinite_1s]
          "
        />

        <span
          className="
            absolute
            left-[4%]
            top-[62%]

            h-2
            w-2

            rounded-full

            bg-white/90

            shadow-[0_0_20px_rgba(255,255,255,0.8)]

            animate-[floatDot_8s_ease-in-out_infinite_2s]
          "
        />

        <span
          className="
            absolute
            right-[5%]
            top-[58%]

            h-3
            w-3

            rounded-full

            bg-[#C6577B]/15

            blur-[1px]

            shadow-[0_0_24px_rgba(198,87,123,0.18)]

            animate-[floatDot_10s_ease-in-out_infinite_0.5s]
          "
        />

        {/* Tiny scattered dots */}

        <span
          className="
            absolute
            left-[17%]
            top-[19%]

            h-1.5
            w-1.5

            rounded-full

            bg-[#C6577B]/25

            animate-[floatDot_6s_ease-in-out_infinite_1.5s]
          "
        />

        <span
          className="
            absolute
            right-[19%]
            top-[34%]

            h-1.5
            w-1.5

            rounded-full

            bg-[#7A2E44]/15

            animate-[floatDot_7s_ease-in-out_infinite_2s]
          "
        />

        <span
          className="
            absolute
            left-[12%]
            bottom-[25%]

            h-1.5
            w-1.5

            rounded-full

            bg-[#C6577B]/20

            animate-[floatDot_8s_ease-in-out_infinite_3s]
          "
        />

        <span
          className="
            absolute
            right-[14%]
            bottom-[22%]

            h-2
            w-2

            rounded-full

            bg-[#C6577B]/20

            animate-[floatDot_9s_ease-in-out_infinite_1s]
          "
        />

        {/* Small glass dot */}

        <span
          className="
            absolute
            left-[27%]
            top-[44%]

            h-2
            w-2

            rounded-full

            bg-white/80

            border
            border-white

            shadow-[0_0_18px_rgba(255,255,255,0.7)]

            animate-[floatDot_11s_ease-in-out_infinite_2s]
          "
        />

        <span
          className="
            absolute
            right-[27%]
            top-[48%]

            h-1.5
            w-1.5

            rounded-full

            bg-[#C6577B]/20

            animate-[floatDot_8s_ease-in-out_infinite_4s]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ===================================================
            SECTION HEADING
        ==================================================== */}

        <SectionHeading
          center
          eyebrow="Patient Voices"
          title="Trusted by families across the city"
          subtitle="Real experiences from people who chose Patel Diagnostic for their healthcare needs."
        />

        {/* ===================================================
            TESTIMONIAL CARDS
        ==================================================== */}

        <div className="mt-16 grid md:grid-cols-3 gap-7">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 0.1}
              className="h-full"
            >
              <figure
                className="
                  group
                  relative
                  h-full
                  overflow-hidden

                  rounded-[28px]

                  bg-white/80
                  backdrop-blur-xl
                  backdrop-saturate-150

                  border
                  border-[#7A2E44]/[0.08]

                  p-8

                  shadow-[0_12px_45px_rgba(122,46,68,0.055)]

                  transition-all
                  duration-700
                  ease-out

                  hover:-translate-y-2
                  hover:bg-white
                  hover:border-[#C6577B]/25
                  hover:shadow-[0_25px_65px_rgba(122,46,68,0.12)]
                "
              >
                {/* =========================================
                    CARD GLASS HIGHLIGHT
                ========================================== */}

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

                {/* =========================================
                    SOFT CARD GLOW
                ========================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24

                    h-52
                    w-52

                    rounded-full

                    bg-[#C6577B]/[0.035]

                    blur-3xl

                    transition-all
                    duration-700

                    group-hover:bg-[#C6577B]/[0.09]
                  "
                />

                {/* =========================================
                    SMALL CARD DOT
                ========================================== */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    right-7
                    top-7

                    h-1.5
                    w-1.5

                    rounded-full

                    bg-[#C6577B]/30

                    shadow-[0_0_12px_rgba(198,87,123,0.25)]

                    transition-all
                    duration-500

                    group-hover:scale-150
                    group-hover:bg-[#C6577B]/50
                  "
                />

                {/* =========================================
                    QUOTE ICON
                ========================================== */}

                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12

                    items-center
                    justify-center

                    rounded-2xl

                    bg-[#C6577B]/[0.08]

                    border
                    border-[#C6577B]/[0.12]

                    transition-all
                    duration-500

                    group-hover:bg-[#7A2E44]
                    group-hover:border-[#7A2E44]
                  "
                >
                  <Quote
                    className="
                      h-5
                      w-5

                      text-[#7A2E44]

                      transition-colors
                      duration-500

                      group-hover:text-white
                    "
                    strokeWidth={1.5}
                  />
                </div>

                {/* =========================================
                    RATING
                ========================================== */}

                <div className="relative mt-6 flex items-center gap-1">
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="
                        h-4
                        w-4

                        fill-[#10B981]
                        text-[#10B981]
                      "
                      strokeWidth={1.5}
                    />
                  ))}

                  <span
                    className="
                      ml-2
                      text-[11px]
                      font-mono
                      tracking-wider
                      text-slate-400
                    "
                  >
                    VERIFIED EXPERIENCE
                  </span>
                </div>

                {/* =========================================
                    REVIEW TEXT
                ========================================== */}

                <blockquote
                  className="
                    relative
                    mt-5

                    text-[15px]
                    leading-7

                    text-slate-600
                  "
                >
                  “{r.text}”
                </blockquote>

                {/* =========================================
                    DIVIDER
                ========================================== */}

                <div
                  className="
                    relative
                    mt-7

                    h-px
                    w-full

                    bg-[#7A2E44]/[0.07]
                  "
                />

                {/* =========================================
                    PATIENT INFO
                ========================================== */}

                <figcaption
                  className="
                    relative
                    mt-6
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      bg-[#7A2E44]

                      text-white
                      font-semibold

                      shadow-[0_6px_18px_rgba(122,46,68,0.18)]
                    "
                  >
                    {r.name[0]}
                  </span>

                  <span>
                    <p
                      className="
                        font-semibold
                        text-[#7A2E44]
                      "
                    >
                      {r.name}
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-sm
                        text-slate-500
                      "
                    >
                      {r.location}
                    </p>
                  </span>
                </figcaption>

                {/* =========================================
                    PREMIUM BOTTOM ACCENT
                ========================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0

                    h-[2px]
                    w-0

                    bg-gradient-to-r
                    from-[#7A2E44]
                    via-[#C6577B]
                    to-[#E9A0B5]

                    transition-all
                    duration-700

                    group-hover:w-full
                  "
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {/* =====================================================
          ECG CONTINUITY
      ====================================================== */}

      <div
        className="
          relative
          mt-20

          h-16
          w-full

          pointer-events-none
        "
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="
              M0 45
              H330
              L350 45
              L370 27
              L392 63
              L415 14
              L438 66
              L460 45
              H720
              C850 45 900 27 1010 27
              C1120 27 1180 55 1280 55
              H1440
            "
            stroke="#C6577B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.18"
          />
        </svg>
      </div>

      {/* =====================================================
          DOT ANIMATION
          Add this to your global CSS / index.css
      ====================================================== */}

      <style>{`
        @keyframes floatDot {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.35;
          }

          50% {
            transform: translate3d(0, -12px, 0);
            opacity: 0.75;
          }
        }
      `}</style>
    </section>
  );
}