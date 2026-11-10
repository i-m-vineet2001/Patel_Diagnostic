
// import React from "react";

// import { Target, UserCheck, Home, Building2 } from "lucide-react";

// import Reveal from "./Reveal";

// const items = [
//   {
//     icon: Target,
//     metric: "99.9%",
//     title: "Accuracy",
//     text: "Multi-level quality checks and international proficiency testing.",
//   },
//   {
//     icon: UserCheck,
//     metric: "40+",
//     title: "Expert Pathologists",
//     text: "MD-qualified specialists review every critical report.",
//   },
//   {
//     icon: Home,
//     metric: "7 DAYS",
//     title: "Home Sample Collection",
//     text: "Trained phlebotomists at your door, from 6 AM onwards.",
//   },
//   {
//     icon: Building2,
//     metric: "12",
//     title: "State-of-the-art Labs",
//     text: "Fully automated, NABL-accredited facilities across the city.",
//   },
// ];

// export default function WhyUs() {
//   return (
//     <section
//       className="
//         relative
//         py-24
//         md:py-32
//         bg-[#0F172A]
//         overflow-hidden
//       "
//     >
//       {/* =====================================================
//           PINK MEDICAL GRID
//       ====================================================== */}

//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(
//               rgba(198, 87, 123, 0.10) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(198, 87, 123, 0.10) 1px,
//               transparent 1px
//             )
//           `,
//           backgroundSize: "48px 48px",
//         }}
//       />

//       {/* =====================================================
//           BURGUNDY GLOW
//       ====================================================== */}

//       <div
//         className="
//           absolute
//           -top-48
//           -right-48
//           w-[500px]
//           h-[500px]
//           rounded-full
//           bg-[#7A2E44]/15
//           blur-[120px]
//           pointer-events-none
//         "
//       />

//       {/* =====================================================
//           PINK GLOW
//       ====================================================== */}

//       <div
//         className="
//           absolute
//           -bottom-48
//           -left-48
//           w-[450px]
//           h-[450px]
//           rounded-full
//           bg-[#C6577B]/10
//           blur-[120px]
//           pointer-events-none
//         "
//       />

//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <div className="relative z-10 max-w-6xl mx-auto px-6">
//         {/* ===================================================
//             HEADING
//         ==================================================== */}

//         <Reveal className="max-w-2xl">
//           <p
//             className="
//               font-mono
//               text-xs
//               tracking-[0.2em]
//               uppercase
//               text-[#C6577B]
//               mb-4
//             "
//           >
//             Why Choose Us
//           </p>

//           <h2
//             className="
//               text-3xl
//               md:text-5xl
//               font-bold
//               text-white
//               leading-[1.1]
//               tracking-tight
//             "
//           >
//             Clinical excellence you can measure.
//           </h2>

//           <p
//             className="
//               mt-5
//               text-slate-400
//               max-w-xl
//               leading-relaxed
//             "
//           >
//             Trusted diagnostic care built around accuracy, experienced
//             professionals, modern technology, and patient convenience.
//           </p>
//         </Reveal>

//         {/* ===================================================
//             METRIC GRID
//         ==================================================== */}

//         <div
//           className="
//             mt-14
//             grid
//             sm:grid-cols-2
//             lg:grid-cols-4
//             gap-px
//             bg-white/10
//             rounded-3xl
//             overflow-hidden
//             border
//             border-white/10
//             shadow-2xl
//             shadow-black/20
//           "
//         >
//           {items.map((it, i) => (
//             <Reveal
//               key={it.title}
//               delay={i * 0.08}
//               className="
//                 group
//                 relative
//                 bg-[#0F172A]
//                 p-8
//                 h-full
//                 overflow-hidden
//                 transition-all
//                 duration-500
//                 hover:bg-[#131b2e]
//               "
//             >
//               {/* ===========================================
//                   CARD HOVER GLOW
//               ============================================ */}

//               <div
//                 className="
//                   absolute
//                   -top-20
//                   -right-20
//                   w-40
//                   h-40
//                   rounded-full
//                   bg-[#C6577B]/0
//                   blur-3xl
//                   transition-all
//                   duration-500
//                   group-hover:bg-[#C6577B]/10
//                 "
//               />

//               {/* ===========================================
//                   ICON
//               ============================================ */}

//               <div
//                 className="
//                   relative
//                   w-11
//                   h-11
//                   rounded-xl
//                   bg-[#C6577B]/10
//                   border
//                   border-[#C6577B]/15
//                   flex
//                   items-center
//                   justify-center
//                   transition-all
//                   duration-500
//                   group-hover:bg-[#7A2E44]
//                   group-hover:border-[#7A2E44]
//                   group-hover:scale-105
//                 "
//               >
//                 <it.icon
//                   className="
//                     w-6
//                     h-6
//                     text-[#C6577B]
//                     transition-colors
//                     duration-500
//                     group-hover:text-white
//                   "
//                   strokeWidth={1.25}
//                 />
//               </div>

//               {/* ===========================================
//                   METRIC
//               ============================================ */}

//               <p
//                 className="
//                   relative
//                   mt-8
//                   font-mono
//                   text-3xl
//                   font-medium
//                   text-white
//                   tracking-tight
//                 "
//               >
//                 {it.metric}
//               </p>

//               {/* ===========================================
//                   TITLE
//               ============================================ */}

//               <h3
//                 className="
//                   relative
//                   mt-2
//                   font-semibold
//                   text-white
//                 "
//               >
//                 {it.title}
//               </h3>

//               {/* ===========================================
//                   DESCRIPTION
//               ============================================ */}

//               <p
//                 className="
//                   relative
//                   mt-2
//                   text-sm
//                   leading-6
//                   text-slate-400
//                 "
//               >
//                 {it.text}
//               </p>

//               {/* ===========================================
//                   PINK BOTTOM ACCENT
//               ============================================ */}

//               <div
//                 className="
//                   absolute
//                   bottom-0
//                   left-0
//                   h-[2px]
//                   w-0
//                   bg-[#C6577B]
//                   transition-all
//                   duration-500
//                   group-hover:w-full
//                 "
//               />
//             </Reveal>
//           ))}
//         </div>
//       </div>

//       {/* =====================================================
//           ECG CONTINUITY
//       ====================================================== */}

//       <div
//         className="
//           absolute
//           bottom-0
//           left-0
//           w-full
//           h-16
//           pointer-events-none
//           opacity-20
//         "
//       >
//         <svg
//           className="w-full h-full"
//           viewBox="0 0 1440 80"
//           preserveAspectRatio="none"
//           fill="none"
//         >
//           <path
//             d="
//               M0 45
//               H330
//               L350 45
//               L370 25
//               L392 65
//               L415 12
//               L438 68
//               L460 45
//               H720
//               C850 45 900 25 1010 25
//               C1120 25 1180 55 1280 55
//               H1440
//             "
//             stroke="#C6577B"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }






import React from "react";
import Reveal from "./Reveal";

const bubbles = [
  { label: "Blood Tests", className: "bubble-one" },
  { label: "ECG", className: "bubble-two" },
  { label: "X-Ray", className: "bubble-three" },
  { label: "Ultrasound", className: "bubble-four" },
  { label: "TMT", className: "bubble-five" },
  { label: "PFT", className: "bubble-six" },
];

export default function WhyUs() {
  return (
    <section
      aria-label="Why Patel Diagnostic Centre"
      className="relative overflow-hidden bg-[#FBF5F6] py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* LEFT: TEXT */}
        <Reveal>
          <div className="max-w-lg">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6577B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#C6577B]">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-4xl font-medium leading-[1.15] tracking-tight text-[#7A2E44] md:text-5xl">
              Care that feels
              <br />
              <span className="font-sans not-italic font-medium text-[#C6577B]">
                a little more personal.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#765D65] md:text-base">
              We believe getting a health check should feel simple and
              comfortable. At Patel Diagnostic Centre, we’re here to support you
              with the tests you need, every step of the way.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#C6577B]" />
              <p className="text-xs tracking-wide text-[#7A2E44]">
                Here for your health, with care.
              </p>
            </div>
          </div>
        </Reveal>

        {/* RIGHT: BOY + FLOATING CAPSULE BALLOONS */}
        <Reveal delay={0.15}>
          <div className="relative mx-auto h-[440px] w-full max-w-[520px]">
            <style>{`
              @keyframes balloonFloat {
                0%, 100% { transform: translateY(0) rotate(-2deg); }
                50% { transform: translateY(-12px) rotate(2deg); }
              }

              @keyframes balloonFloatAlt {
                0%, 100% { transform: translateY(-5px) rotate(2deg); }
                50% { transform: translateY(9px) rotate(-2deg); }
              }

              @keyframes tinyFloat {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-7px); }
              }

              .why-bubble {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid rgba(198, 87, 123, 0.22);
                border-radius: 9999px;
                background: rgba(255, 255, 255, 0.86);
                color: #7A2E44;
                font-size: 12px;
                font-weight: 500;
                letter-spacing: 0.01em;
                padding: 13px 21px;
                box-shadow: 0 8px 24px rgba(122, 46, 68, 0.06);
                white-space: nowrap;
                animation: balloonFloat 4s ease-in-out infinite;
              }

              .bubble-one {
                top: 30px;
                left: 12%;
                animation-delay: 0s;
              }

              .bubble-two {
                top: 90px;
                right: 7%;
                background: #F4E4E9;
                animation-name: balloonFloatAlt;
                animation-delay: 0.5s;
              }

              .bubble-three {
                top: 165px;
                left: 2%;
                animation-delay: 1s;
              }

              .bubble-four {
                top: 205px;
                right: 3%;
                background: #F4E4E9;
                animation-name: balloonFloatAlt;
                animation-delay: 1.2s;
              }

              .bubble-five {
                top: 285px;
                left: 15%;
                animation-delay: 0.7s;
              }

              .bubble-six {
                top: 315px;
                right: 18%;
                background: #F4E4E9;
                animation-name: balloonFloatAlt;
                animation-delay: 1.5s;
              }

              @media (prefers-reduced-motion: reduce) {
                .why-bubble {
                  animation: none;
                }
              }
            `}</style>

            {/* Soft background circle */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EBD1DA]/50"
            />

            {/* Floating capsule balloons */}
            {bubbles.map((bubble) => (
              <div
                key={bubble.label}
                className={`why-bubble ${bubble.className}`}
              >
                {bubble.label}
              </div>
            ))}

            {/* Hand-drawn style boy illustration */}
            <svg
              viewBox="0 0 260 330"
              className="absolute bottom-0 left-1/2 z-10 h-[275px] w-[230px] -translate-x-1/2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Illustration of a boy holding balloon strings"
              role="img"
            >
              {/* Balloon strings */}
              <path
                d="M137 85 C145 125 105 145 130 180"
                stroke="#C6577B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M137 85 C165 120 180 145 140 180"
                stroke="#C6577B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M137 85 C110 120 120 150 130 180"
                stroke="#C6577B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Hair */}
              <path
                d="M82 86 C67 54 91 26 128 30 C163 24 185 53 175 87
                   L163 106 L91 105 Z"
                fill="#3B2630"
              />
              <path
                d="M88 57 C100 37 121 39 130 45 C143 31 163 45 168 61"
                stroke="#3B2630"
                strokeWidth="8"
                strokeLinecap="round"
              />

              {/* Ears */}
              <ellipse cx="82" cy="103" rx="12" ry="15" fill="#DFA17F" />
              <ellipse cx="174" cy="103" rx="12" ry="15" fill="#DFA17F" />

              {/* Face */}
              <path
                d="M87 74 C87 49 168 49 168 74 L168 111
                   C168 137 151 153 128 153
                   C105 153 87 135 87 111 Z"
                fill="#F0B995"
              />

              {/* Fringe */}
              <path
                d="M83 82 C77 56 101 44 121 48 C138 38 165 51 173 76
                   C159 68 148 68 136 74 C119 80 100 73 83 82 Z"
                fill="#3B2630"
              />

              {/* Eyes */}
              <circle cx="110" cy="103" r="3.2" fill="#3B2630" />
              <circle cx="145" cy="103" r="3.2" fill="#3B2630" />

              {/* Smile */}
              <path
                d="M115 121 Q128 132 141 121"
                stroke="#9A514B"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Neck */}
              <path d="M115 148 L115 167 L142 167 L142 148" fill="#DFA17F" />

              {/* Shirt */}
              <path
                d="M94 164 Q128 151 163 164
                   L190 230 L165 242 L158 207
                   L158 286 L98 286 L98 207
                   L91 242 L66 230 Z"
                fill="#C6577B"
              />

              {/* Shirt collar */}
              <path
                d="M112 160 L128 179 L145 160"
                stroke="#F4E4E9"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Arms */}
              <path
                d="M92 172 L68 220 L111 192"
                stroke="#F0B995"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M164 172 L180 210 L143 190"
                stroke="#F0B995"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Hand holding the strings */}
              <circle cx="130" cy="182" r="11" fill="#F0B995" />
              <path
                d="M126 180 L137 181"
                stroke="#D18B6A"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Trousers */}
              <path
                d="M98 280 L158 280 L153 318 L128 318 L124 290
                   L118 318 L94 318 Z"
                fill="#7A2E44"
              />

              {/* Shoes */}
              <path
                d="M94 315 L120 315 Q125 326 110 328 L84 328 Q83 320 94 315 Z"
                fill="#3B2630"
              />
              <path
                d="M132 315 L153 315 Q165 326 151 328 L127 328 Z"
                fill="#3B2630"
              />
            </svg>

            {/* Tiny decorative dots */}
            <span
              aria-hidden="true"
              className="absolute left-[22%] top-[42%] h-2 w-2 rounded-full bg-[#C6577B]/50"
              style={{ animation: "tinyFloat 3s ease-in-out infinite" }}
            />
            <span
              aria-hidden="true"
              className="absolute right-[20%] top-[52%] h-3 w-3 rounded-full bg-[#7A2E44]/20"
              style={{ animation: "tinyFloat 4s ease-in-out infinite" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
