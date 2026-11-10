


// import React from "react";
// import { Heart, Quote, MessageCircleHeart } from "lucide-react";
// import Reveal from "./Reveal";
// import SectionHeading from "./SectionHeading";

// const testimonials = [
//   {
//     name: "Patient Feedback",
//     role: "Patient / Family Feedback",
//     text: "The staff was supportive and explained the process clearly. The entire experience felt comfortable and well managed.",
//   },
//   {
//     name: "Patient Feedback",
//     role: "Patient / Family Feedback",
//     text: "From sample collection to receiving the report, the process was smooth and the team was very helpful throughout.",
//   },
//   {
//     name: "Patient Feedback",
//     role: "Patient / Family Feedback",
//     text: "The staff treated us with patience and care. We appreciated how clearly everything was explained to us.",
//   },
// ];

// export default function PatientTestimonials() {
//   return (
//     <section className="relative isolate overflow-hidden bg-[#FBF5F6] py-20 sm:py-24 md:py-28">
//       {/* Ambient blush atmosphere */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#C6577B]/10 blur-[110px]"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -bottom-44 -right-40 h-[30rem] w-[30rem] rounded-full bg-[#7A2E44]/[0.07] blur-[120px]"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 opacity-[0.22]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(198,87,123,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(198,87,123,0.045) 1px, transparent 1px)",
//           backgroundSize: "56px 56px",
//         }}
//       />

//       <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-3xl">
//           <SectionHeading
//             center
//             eyebrow="Patient Stories · Shared Experiences"
//             title="Care that goes beyond the report."
//             subtitle="Feedback from patients and families about their experience with our team and diagnostic services."
//           />
//         </div>

//         <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3 md:gap-6">
//           {testimonials.map((item, index) => (
//             <Reveal
//               key={`${item.text}-${index}`}
//               delay={index * 0.09}
//               className="h-full"
//             >
//               <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#EADCE1]/90 bg-white/75 p-7 shadow-[0_12px_36px_rgba(122,46,68,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C6577B]/30 hover:bg-white hover:shadow-[0_24px_55px_rgba(122,46,68,0.12)] sm:p-8">
//                 <div
//                   aria-hidden="true"
//                   className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#C6577B]/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-150"
//                 />
//                 <div className="relative flex items-center justify-between">
//                   <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C6577B]/15 bg-[#F9EAF0] text-[#7A2E44] transition-colors duration-300 group-hover:bg-[#7A2E44] group-hover:text-white">
//                     <Quote className="h-5 w-5" strokeWidth={1.6} />
//                   </span>
//                   <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B18D99]">
//                     Patient voice
//                   </span>
//                 </div>

//                 <blockquote className="relative mt-6 flex-1 text-[15px] leading-7 text-[#5F5056]">
//                   “{item.text}”
//                 </blockquote>

//                 <div className="relative mt-7 h-px bg-gradient-to-r from-[#7A2E44]/15 via-[#C6577B]/20 to-transparent" />

//                 <div className="relative mt-5 flex items-center gap-3">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C6577B]/15 bg-[#FBF0F4] text-[#C6577B]">
//                     <Heart className="h-[17px] w-[17px]" strokeWidth={1.7} />
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-[#7A2E44]">
//                       {item.name}
//                     </p>
//                     <p className="mt-0.5 text-xs text-[#8D737D]">{item.role}</p>
//                   </div>
//                 </div>

//                 <div
//                   aria-hidden="true"
//                   className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#7A2E44] via-[#C6577B] to-[#E7A7B9] transition-all duration-500 group-hover:w-full"
//                 />
//               </article>
//             </Reveal>
//           ))}
//         </div>

//         <div className="mt-9 flex items-center justify-center gap-2.5 text-center text-xs text-[#8D737D]">
//           <MessageCircleHeart className="h-4 w-4 shrink-0 text-[#C6577B]" />
//           <span>
//             Every patient experience helps us keep care thoughtful and
//             welcoming.
//           </span>
//         </div>
//       </div>

//       <div
//         aria-hidden="true"
//         className="pointer-events-none relative mt-16 h-12 w-full sm:mt-20 sm:h-16"
//       >
//         <svg
//           className="absolute inset-0 h-full w-full"
//           viewBox="0 0 1440 80"
//           preserveAspectRatio="none"
//           fill="none"
//         >
//           <path
//             d="M0 45 H330 L350 45 L370 27 L392 63 L415 14 L438 66 L460 45 H720 C850 45 900 27 1010 27 C1120 27 1180 55 1280 55 H1440"
//             stroke="#C6577B"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             opacity="0.14"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }










import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    person: "A patient",
    experience: "A comfortable visit",
    text: "The staff was supportive and explained the process clearly. The whole visit felt comfortable and well managed.",
    character: "boy",
    tone: "rose",
  },
  {
    person: "A patient",
    experience: "A smooth process",
    text: "From sample collection to receiving the report, the process felt smooth. The team was helpful throughout.",
    character: "girl",
    tone: "cream",
  },
  {
    person: "A family member",
    experience: "Kind and patient care",
    text: "The staff treated us with patience and care. We appreciated how clearly everything was explained.",
    character: "boy",
    tone: "rose",
  },
];

function PatientIllustration({ character = "boy" }) {
  const isGirl = character === "girl";

  return (
    <svg
      viewBox="0 0 180 190"
      className="h-[150px] w-[145px] sm:h-[170px] sm:w-[160px]"
      role="img"
      aria-label={`Hand-drawn illustration of a ${character}`}
      fill="none"
    >
      {/* Hair */}
      {isGirl ? (
        <path
          d="M48 72 C43 31 69 18 91 20 C126 18 139 43 132 82
             L127 119 L54 119 Z"
          fill="#5A3540"
        />
      ) : (
        <path
          d="M52 66 C49 30 75 20 95 23 C120 21 135 42 130 68
             L119 83 L60 83 Z"
          fill="#3B2630"
        />
      )}

      {/* Ears */}
      <ellipse cx="51" cy="81" rx="9" ry="12" fill="#DFA17F" />
      <ellipse cx="129" cy="81" rx="9" ry="12" fill="#DFA17F" />

      {/* Face */}
      <path
        d="M58 56 C58 39 121 39 121 56 L121 91
           C121 113 108 128 90 128 C72 128 58 113 58 91 Z"
        fill="#F0B995"
      />

      {/* Fringe */}
      {isGirl ? (
        <>
          <path
            d="M55 68 C55 37 76 28 94 31 C116 29 129 47 126 68
               C112 57 101 61 90 65 C76 70 65 65 55 68 Z"
            fill="#5A3540"
          />
          <path
            d="M52 65 C44 88 48 112 58 124"
            stroke="#5A3540"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path
            d="M128 65 C136 88 132 112 122 124"
            stroke="#5A3540"
            strokeWidth="11"
            strokeLinecap="round"
          />
        </>
      ) : (
        <path
          d="M54 69 C52 42 75 30 94 34 C112 29 127 46 126 67
             C111 61 102 64 91 68 C76 72 64 66 54 69 Z"
          fill="#3B2630"
        />
      )}

      {/* Face details */}
      <circle cx="77" cy="84" r="2.8" fill="#3B2630" />
      <circle cx="103" cy="84" r="2.8" fill="#3B2630" />
      <path
        d="M80 101 Q90 110 100 101"
        stroke="#9A514B"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="68" cy="94" r="5" fill="#D98789" opacity=".35" />
      <circle cx="112" cy="94" r="5" fill="#D98789" opacity=".35" />

      {/* Neck */}
      <path d="M79 122 L79 139 L101 139 L101 122" fill="#DFA17F" />

      {/* Clothing */}
      <path
        d="M58 139 Q90 126 122 139 L139 181 L41 181 Z"
        fill={isGirl ? "#D98BA5" : "#C6577B"}
      />
      <path
        d="M78 136 L90 150 L102 136"
        stroke="#F9EAF0"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Arms */}
      <path
        d="M58 148 L46 170 M122 148 L134 170"
        stroke="#F0B995"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PatientTestimonials() {
  return (
    <section className="relative overflow-hidden bg-[#FBF5F6] py-20 sm:py-24 md:py-28">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#C6577B]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -right-32 h-96 w-96 rounded-full bg-[#7A2E44]/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C6577B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#C6577B]">
              Patient Stories
            </span>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#7A2E44] md:text-5xl">
              A few words,
              <span className="font-serif italic text-[#C6577B]">
                {" "}
                from the heart.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#765D65] md:text-base">
              Small moments and shared experiences from patients and families.
            </p>
          </div>
        </Reveal>

        {/* Testimonial cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {testimonials.map((item, index) => (
            <Reveal key={`${item.experience}-${index}`} delay={index * 0.1}>
              <article className="group relative flex h-full min-h-[390px] flex-col items-center overflow-hidden rounded-[30px] border border-[#EADCE1]/80 bg-white/55 px-5 pb-6 pt-5 shadow-[0_12px_36px_rgba(122,46,68,0.05)] transition-all duration-500 hover:-translate-y-1 hover:bg-white/75 hover:shadow-[0_20px_45px_rgba(122,46,68,0.09)]">
                {/* Ambient glow */}
                <div
                  aria-hidden="true"
                  className={`absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl ${
                    item.tone === "cream"
                      ? "bg-[#E8C9B7]/30"
                      : "bg-[#C6577B]/10"
                  }`}
                />

                {/* Thought cloud */}
                <div className="relative z-10 w-full">
                  <div className="thought-cloud relative rounded-[28px] border border-[#EADCE1] bg-white/90 px-5 py-5 shadow-[0_7px_24px_rgba(122,46,68,0.045)]">
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-[9px] left-10 h-4 w-4 rounded-full border border-[#EADCE1] bg-white"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute -bottom-[22px] left-[54px] h-2.5 w-2.5 rounded-full border border-[#EADCE1] bg-white"
                    />

                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#C6577B]">
                      {item.experience}
                    </p>

                    <blockquote className="text-[13px] leading-6 text-[#65535A] sm:text-sm">
                      “{item.text}”
                    </blockquote>
                  </div>
                </div>

                {/* Character illustration */}
                <div className="relative mt-5 flex flex-1 items-end justify-center">
                  <div
                    aria-hidden="true"
                    className={`absolute bottom-1 h-24 w-36 rounded-full blur-2xl ${
                      item.tone === "cream"
                        ? "bg-[#E8C9B7]/25"
                        : "bg-[#C6577B]/10"
                    }`}
                  />

                  <div className="relative transition-transform duration-500 group-hover:-translate-y-1">
                    <PatientIllustration character={item.character} />
                  </div>
                </div>

                {/* Patient label */}
                <div className="relative mt-2 flex items-center gap-2 text-xs text-[#8D737D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C6577B]/70" />
                  {item.person}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Footer message */}
        <div className="mt-9 text-center text-xs leading-6 text-[#8D737D]">
          Each experience is personal. Thank you for sharing yours with us.
        </div>
      </div>

      {/* Floating thought-cloud animation */}
      <style>{`
        @keyframes thoughtFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .thought-cloud {
          animation: thoughtFloat 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .thought-cloud {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
