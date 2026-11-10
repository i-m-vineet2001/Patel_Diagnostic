// import React from "react";

// import { Star, Quote } from "lucide-react";

// import Reveal from "./Reveal";
// import SectionHeading from "./SectionHeading";

// const reviews = [
//   {
//     name: "Sumanta Patel",
//     location: "Sundargarh",
//     text: "Great service at that location",
//     rating: 5,
//   },

//   {
//     name: "Rosaline Patel",
//     location: "Sundargarh",
//     text: "Staff are highly trained. Sample collection was painless.A clean atmospheric environment. recommend for all test u serching.",
//     rating: 5,
//   },

//   {
//     name: "CHINTAMANI SWAIN",
//     location: "Sundargarh",
//     text: "Good medical atmosphere. Staff are well dress and trained. You can trust reports",
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
//           POLKA LIGHT DOTS
//       ====================================================== */}

//       <div className="absolute inset-0 pointer-events-none">
//         {/* Large soft dots */}

//         <span
//           className="
//             absolute
//             left-[8%]
//             top-[28%]

//             h-3
//             w-3

//             rounded-full

//             bg-[#C6577B]/20

//             blur-[1px]

//             shadow-[0_0_20px_rgba(198,87,123,0.20)]

//             animate-[floatDot_7s_ease-in-out_infinite]
//           "
//         />

//         <span
//           className="
//             absolute
//             right-[9%]
//             top-[22%]

//             h-2
//             w-2

//             rounded-full

//             bg-[#C6577B]/25

//             shadow-[0_0_18px_rgba(198,87,123,0.25)]

//             animate-[floatDot_9s_ease-in-out_infinite_1s]
//           "
//         />

//         <span
//           className="
//             absolute
//             left-[4%]
//             top-[62%]

//             h-2
//             w-2

//             rounded-full

//             bg-white/90

//             shadow-[0_0_20px_rgba(255,255,255,0.8)]

//             animate-[floatDot_8s_ease-in-out_infinite_2s]
//           "
//         />

//         <span
//           className="
//             absolute
//             right-[5%]
//             top-[58%]

//             h-3
//             w-3

//             rounded-full

//             bg-[#C6577B]/15

//             blur-[1px]

//             shadow-[0_0_24px_rgba(198,87,123,0.18)]

//             animate-[floatDot_10s_ease-in-out_infinite_0.5s]
//           "
//         />

//         {/* Tiny scattered dots */}

//         <span
//           className="
//             absolute
//             left-[17%]
//             top-[19%]

//             h-1.5
//             w-1.5

//             rounded-full

//             bg-[#C6577B]/25

//             animate-[floatDot_6s_ease-in-out_infinite_1.5s]
//           "
//         />

//         <span
//           className="
//             absolute
//             right-[19%]
//             top-[34%]

//             h-1.5
//             w-1.5

//             rounded-full

//             bg-[#7A2E44]/15

//             animate-[floatDot_7s_ease-in-out_infinite_2s]
//           "
//         />

//         <span
//           className="
//             absolute
//             left-[12%]
//             bottom-[25%]

//             h-1.5
//             w-1.5

//             rounded-full

//             bg-[#C6577B]/20

//             animate-[floatDot_8s_ease-in-out_infinite_3s]
//           "
//         />

//         <span
//           className="
//             absolute
//             right-[14%]
//             bottom-[22%]

//             h-2
//             w-2

//             rounded-full

//             bg-[#C6577B]/20

//             animate-[floatDot_9s_ease-in-out_infinite_1s]
//           "
//         />

//         {/* Small glass dot */}

//         <span
//           className="
//             absolute
//             left-[27%]
//             top-[44%]

//             h-2
//             w-2

//             rounded-full

//             bg-white/80

//             border
//             border-white

//             shadow-[0_0_18px_rgba(255,255,255,0.7)]

//             animate-[floatDot_11s_ease-in-out_infinite_2s]
//           "
//         />

//         <span
//           className="
//             absolute
//             right-[27%]
//             top-[48%]

//             h-1.5
//             w-1.5

//             rounded-full

//             bg-[#C6577B]/20

//             animate-[floatDot_8s_ease-in-out_infinite_4s]
//           "
//         />
//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <div className="relative z-10 max-w-6xl mx-auto px-6">
//         {/* ===================================================
//             SECTION HEADING
//         ==================================================== */}

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
//             <Reveal
//               key={r.name}
//               delay={i * 0.1}
//               className="h-full"
//             >
//               <figure
//                 className="
//                   group
//                   relative
//                   h-full
//                   overflow-hidden

//                   rounded-[28px]

//                   bg-white/80
//                   backdrop-blur-xl
//                   backdrop-saturate-150

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
//                     CARD GLASS HIGHLIGHT
//                 ========================================== */}

//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     inset-x-8
//                     top-0

//                     h-px

//                     bg-gradient-to-r
//                     from-transparent
//                     via-white
//                     to-transparent
//                   "
//                 />

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
//                     SMALL CARD DOT
//                 ========================================== */}

//                 <span
//                   className="
//                     pointer-events-none
//                     absolute
//                     right-7
//                     top-7

//                     h-1.5
//                     w-1.5

//                     rounded-full

//                     bg-[#C6577B]/30

//                     shadow-[0_0_12px_rgba(198,87,123,0.25)]

//                     transition-all
//                     duration-500

//                     group-hover:scale-150
//                     group-hover:bg-[#C6577B]/50
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

//                   <span
//                     className="
//                       ml-2
//                       text-[11px]
//                       font-mono
//                       tracking-wider
//                       text-slate-400
//                     "
//                   >
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

//                 <figcaption
//                   className="
//                     relative
//                     mt-6
//                     flex
//                     items-center
//                     gap-3
//                   "
//                 >
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

//       {/* =====================================================
//           DOT ANIMATION
//           Add this to your global CSS / index.css
//       ====================================================== */}

//       <style>{`
//         @keyframes floatDot {
//           0%,
//           100% {
//             transform: translate3d(0, 0, 0);
//             opacity: 0.35;
//           }

//           50% {
//             transform: translate3d(0, -12px, 0);
//             opacity: 0.75;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

import React from "react";
import { Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reviews = [
  {
    name: "Sumanta Patel",
    location: "Sundargarh",
    gender: "boy",
    text: "Great service at that location",
    rating: 5,
  },
  {
    name: "Rosaline Patel",
    location: "Sundargarh",
    gender: "girl",
    text: "Staff are highly trained. Sample collection was painless. A clean atmospheric environment. Recommend for all tests you are searching for.",
    rating: 5,
  },
  {
    name: "CHINTAMANI SWAIN",
    location: "Sundargarh",
    gender: "boy",
    text: "Good medical atmosphere. Staff are well dressed and trained. You can trust reports.",
    rating: 5,
  },
];

/* =========================================================
   BOY ILLUSTRATION
========================================================= */

function BoyIllustration() {
  return (
    <svg
      viewBox="0 0 220 260"
      className="h-[230px] w-[200px] sm:h-[260px] sm:w-[220px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <path
        d="M45 260 L55 185 Q65 165 110 165 Q155 165 165 185 L175 260 Z"
        fill="#7A2E44"
      />

      {/* Shirt collar */}
      <path
        d="M85 165 L110 190 L135 165"
        fill="#F8E7EC"
        stroke="#F8E7EC"
        strokeWidth="2"
      />

      {/* Neck */}
      <path d="M88 135 L88 170 Q110 190 132 170 L132 135" fill="#E8B18D" />

      {/* Face */}
      <ellipse cx="110" cy="103" rx="57" ry="65" fill="#F3C6A5" />

      {/* Ears */}
      <ellipse cx="53" cy="108" rx="11" ry="17" fill="#E8B18D" />
      <ellipse cx="167" cy="108" rx="11" ry="17" fill="#E8B18D" />

      {/* Hair */}
      <path
        d="M54 98
           Q45 35 100 27
           Q155 15 166 75
           Q171 93 164 106
           L155 80
           Q137 77 120 61
           Q95 82 64 80
           L57 112 Z"
        fill="#3B2630"
      />

      {/* Eyes */}
      <ellipse cx="88" cy="106" rx="5" ry="6" fill="#3B2630" />
      <ellipse cx="132" cy="106" rx="5" ry="6" fill="#3B2630" />

      {/* Eyebrows */}
      <path
        d="M77 94 Q88 88 99 94"
        stroke="#3B2630"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M121 94 Q132 88 143 94"
        stroke="#3B2630"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Nose */}
      <path
        d="M108 110 L103 126 Q110 130 117 126"
        stroke="#D69A78"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Smile */}
      <path
        d="M91 137 Q110 153 129 137"
        stroke="#9E4F50"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Cheeks */}
      <ellipse cx="76" cy="126" rx="10" ry="5" fill="#E99D9D" opacity="0.35" />
      <ellipse cx="144" cy="126" rx="10" ry="5" fill="#E99D9D" opacity="0.35" />

      {/* Shirt details */}
      <path d="M110 190 V260" stroke="#C6577B" strokeWidth="2" opacity="0.6" />

      {/* Decorative heart */}
      <path
        d="M154 202
           C154 194 166 193 166 202
           C166 193 178 194 178 202
           C178 211 166 218 166 218
           C166 218 154 211 154 202Z"
        fill="#E9A0B5"
      />
    </svg>
  );
}

/* =========================================================
   GIRL ILLUSTRATION
========================================================= */

function GirlIllustration() {
  return (
    <svg
      viewBox="0 0 220 260"
      className="h-[230px] w-[200px] sm:h-[260px] sm:w-[220px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <path
        d="M40 260 L50 185 Q65 165 110 165 Q155 165 170 185 L180 260 Z"
        fill="#C6577B"
      />

      {/* Dress details */}
      <path d="M75 170 Q110 200 145 170" stroke="#F8E7EC" strokeWidth="3" />

      {/* Neck */}
      <path d="M88 135 L88 170 Q110 190 132 170 L132 135" fill="#E8B18D" />

      {/* Face */}
      <ellipse cx="110" cy="103" rx="55" ry="64" fill="#F3C6A5" />

      {/* Ears */}
      <ellipse cx="55" cy="108" rx="10" ry="16" fill="#E8B18D" />
      <ellipse cx="165" cy="108" rx="10" ry="16" fill="#E8B18D" />

      {/* Hair */}
      <path
        d="M55 105
           Q35 32 100 22
           Q165 15 170 85
           L175 180
           Q155 198 145 170
           L150 115
           Q145 83 120 64
           Q94 82 65 80
           L58 115 Z"
        fill="#3B2630"
      />

      {/* Hair fringe */}
      <path
        d="M57 82
           Q83 48 111 60
           Q139 47 157 82
           Q137 78 121 63
           Q93 83 62 83Z"
        fill="#3B2630"
      />

      {/* Eyes */}
      <ellipse cx="88" cy="106" rx="5" ry="6" fill="#3B2630" />
      <ellipse cx="132" cy="106" rx="5" ry="6" fill="#3B2630" />

      {/* Eyelashes */}
      <path
        d="M82 100 L78 96 M88 99 L88 95 M94 100 L98 96"
        stroke="#3B2630"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M126 100 L122 96 M132 99 L132 95 M138 100 L142 96"
        stroke="#3B2630"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Nose */}
      <path
        d="M108 110 L103 126 Q110 130 117 126"
        stroke="#D69A78"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Smile */}
      <path
        d="M91 137 Q110 153 129 137"
        stroke="#9E4F50"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Cheeks */}
      <ellipse cx="76" cy="126" rx="10" ry="5" fill="#E99D9D" opacity="0.4" />
      <ellipse cx="144" cy="126" rx="10" ry="5" fill="#E99D9D" opacity="0.4" />

      {/* Hair accessory */}
      <circle cx="155" cy="55" r="11" fill="#E9A0B5" />
      <circle cx="155" cy="55" r="5" fill="#FFF5F7" />

      {/* Dress heart */}
      <path
        d="M154 202
           C154 194 166 193 166 202
           C166 193 178 194 178 202
           C178 211 166 218 166 218
           C166 218 154 211 154 202Z"
        fill="#F8E7EC"
      />
    </svg>
  );
}

/* =========================================================
   CLOUD REVIEW BUBBLE
========================================================= */

function ReviewCloud({ review }) {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* Cloud */}
      <div className="review-cloud relative rounded-[42px] border border-[#C6577B]/15 bg-white px-6 pb-7 pt-7 shadow-[0_12px_35px_rgba(122,46,68,0.09)]">
        {/* Cloud top curves */}
        <div className="pointer-events-none absolute -top-5 left-8 h-12 w-12 rounded-full border border-[#C6577B]/10 bg-white" />
        <div className="pointer-events-none absolute -top-7 left-[38%] h-16 w-16 rounded-full border border-[#C6577B]/10 bg-white" />
        <div className="pointer-events-none absolute -top-5 right-8 h-12 w-12 rounded-full border border-[#C6577B]/10 bg-white" />

        <div className="relative z-10">
          {/* Google review label */}
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#A1848E]">
              Google Review
            </span>
          </div>

          {/* Stars */}
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: review.rating }, (_, index) => (
              <Star
                key={index}
                className="h-5 w-5 fill-amber-400 text-amber-400"
                strokeWidth={1.4}
              />
            ))}
          </div>

          {/* Feedback */}
          <p className="text-center text-[14px] leading-6 text-[#75666C] sm:text-[15px]">
            “{review.text}”
          </p>
        </div>
      </div>

      {/* Thought bubble circles */}
      <div className="absolute -bottom-5 left-[48%] h-5 w-5 rounded-full border border-[#C6577B]/10 bg-white shadow-sm" />

      <div className="absolute -bottom-10 left-[44%] h-3 w-3 rounded-full border border-[#C6577B]/10 bg-white shadow-sm" />
    </div>
  );
}

/* =========================================================
   GOOGLE REVIEWS SECTION
========================================================= */

export default function GoogleReviews() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FBF5F6] py-20 md:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#C6577B]/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-[#7A2E44]/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          center
          eyebrow="Google Reviews"
          title="A little kindness goes a long way."
          subtitle="Experiences shared by people who trusted Patel Diagnostic Centre."
        />

        {/* Review illustrations */}
        <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-8">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.12} className="h-full">
              <div className="group relative flex h-full flex-col items-center">
                {/* Floating cloud feedback */}
                <div className="relative z-20 w-full animate-[reviewFloat_5s_ease-in-out_infinite]">
                  <ReviewCloud review={review} />
                </div>

                {/* Character */}
                <div className="relative z-10 mt-8 transition-transform duration-500 group-hover:-translate-y-2">
                  {review.gender === "girl" ? (
                    <GirlIllustration />
                  ) : (
                    <BoyIllustration />
                  )}
                </div>

                {/* Ground shadow */}
                <div className="-mt-5 h-5 w-36 rounded-full bg-[#7A2E44]/[0.08] blur-md" />

                {/* Reviewer info */}
                <div className="relative z-10 mt-3 text-center">
                  <h3 className="text-[15px] font-semibold tracking-wide text-[#7A2E44]">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-[12px] text-[#A1848E]">
                    {review.location}
                  </p>
                </div>

                {/* Decorative heart */}
                <div className="absolute right-5 top-[38%] text-[#C6577B]/30 transition-transform duration-500 group-hover:scale-125">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes reviewFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[reviewFloat_5s_ease-in-out_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}