
// import React from "react";

// import { MapPin, Phone, Clock, Mail, ArrowUpRight } from "lucide-react";

// import Reveal from "./Reveal";
// import SectionHeading from "./SectionHeading";
// import InquiryForm from "./InquiryForm";

// const details = [
//   {
//     icon: MapPin,
//     label: "Visit us",
//     value: "BESIDE CHABI HOTEL, B T Road, Mahesdihi, Sundargarh-770001, Odisha",
//     href: "https://maps.app.goo.gl/Tw7Df2JQPFYK87Ma9",
//   },
//   {
//     icon: Phone,
//     label: "Call us",
//     value: "+91 99385 63856",
//     href: "tel:+919938563856",
//   },
//   {
//     icon: Mail,
//     label: "Email",
//     value: "care@pateldiagnostic.in",
//     href: "mailto:care@pateldiagnostic.in",
//   },
//   {
//     icon: Clock,
//     label: "Timings",
//     value: "Mon–Sat 6:30 AM – 9 PM · Sun 7 AM – 1 PM",
//   },
// ];

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="
//         relative
//         overflow-hidden

//         py-24
//         md:py-32

//         bg-[#FBF5F6]
//       "
//     >
//       {/* =====================================================
//           BACKGROUND GLOW
//       ====================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -top-48
//           -right-48

//           h-[500px]
//           w-[500px]

//           rounded-full

//           bg-[#C6577B]/[0.07]

//           blur-[120px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -bottom-48
//           -left-48

//           h-[450px]
//           w-[450px]

//           rounded-full

//           bg-[#7A2E44]/[0.045]

//           blur-[120px]
//         "
//       />

//       {/* =====================================================
//           SUBTLE MEDICAL GRID
//       ====================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
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
//           FLOATING LIGHT DOTS
//       ====================================================== */}

//       <div className="absolute inset-0 pointer-events-none">
//         <span
//           className="
//             absolute
//             left-[8%]
//             top-[25%]

//             h-3
//             w-3
//             rounded-full

//             bg-[#C6577B]/20

//             shadow-[0_0_20px_rgba(198,87,123,0.20)]

//             animate-[floatDot_8s_ease-in-out_infinite]
//           "
//         />

//         <span
//           className="
//             absolute
//             right-[10%]
//             top-[18%]

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
//             left-[15%]
//             bottom-[25%]

//             h-2
//             w-2
//             rounded-full

//             bg-white/90

//             shadow-[0_0_20px_rgba(255,255,255,0.8)]

//             animate-[floatDot_7s_ease-in-out_infinite_2s]
//           "
//         />

//         <span
//           className="
//             absolute
//             right-[6%]
//             bottom-[28%]

//             h-3
//             w-3
//             rounded-full

//             bg-[#C6577B]/15

//             shadow-[0_0_20px_rgba(198,87,123,0.18)]

//             animate-[floatDot_10s_ease-in-out_infinite_1s]
//           "
//         />

//         <span
//           className="
//             absolute
//             left-[30%]
//             top-[15%]

//             h-1.5
//             w-1.5
//             rounded-full

//             bg-[#7A2E44]/20
//           "
//         />
//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}

//       <div
//         className="
//           relative
//           z-10

//           max-w-6xl
//           mx-auto
//           px-6

//           grid
//           lg:grid-cols-5
//           gap-12
//         "
//       >
//         {/* ===================================================
//             LEFT CONTENT
//         ==================================================== */}

//         <div className="lg:col-span-2">
//           <SectionHeading
//             eyebrow="Inquiry Gateway"
//             title="Book a test or ask us anything."
//             subtitle="Share a few details and our care team will get back to you shortly."
//           />

//           {/* ================================================
//               AVAILABILITY GLASS PILL
//           ================================================= */}

//           <Reveal
//             className="
//               mt-8
//               inline-flex
//               items-center
//               gap-2.5

//               rounded-full

//               bg-white/35
//               backdrop-blur-xl
//               backdrop-saturate-150

//               border
//               border-white/70

//               ring-1
//               ring-[#7A2E44]/[0.05]

//               px-4
//               py-2.5

//               font-mono
//               text-[10px]
//               tracking-[0.14em]

//               text-[#7A2E44]

//               shadow-[0_8px_25px_rgba(122,46,68,0.06)]
//             "
//           >
//             <span
//               className="
//                 relative
//                 flex
//                 h-2
//                 w-2
//               "
//             >
//               <span
//                 className="
//                   absolute
//                   inline-flex
//                   h-full
//                   w-full

//                   rounded-full

//                   bg-[#10B981]

//                   opacity-60

//                   animate-ping
//                 "
//               />

//               <span
//                 className="
//                   relative
//                   inline-flex
//                   h-2
//                   w-2

//                   rounded-full

//                   bg-[#10B981]

//                   shadow-[0_0_10px_rgba(16,185,129,0.5)]
//                 "
//               />
//             </span>
//             HOME COLLECTION SLOTS AVAILABLE TODAY
//           </Reveal>

//           {/* =================================================
//               CONTACT DETAILS
//           ================================================== */}

//           <div className="mt-10 space-y-3">
//             {details.map((d, index) => {
//               const Icon = d.icon;

//               const Inner = (
//                 <div
//                   className="
//                     group/detail
//                     relative

//                     flex
//                     gap-4

//                     rounded-2xl

//                     bg-white/25
//                     backdrop-blur-xl
//                     backdrop-saturate-150

//                     border
//                     border-white/60

//                     px-4
//                     py-4

//                     shadow-[0_8px_25px_rgba(122,46,68,0.035)]

//                     transition-all
//                     duration-400

//                     hover:bg-white/45
//                     hover:border-white/90
//                     hover:shadow-[0_12px_30px_rgba(122,46,68,0.08)]
//                     hover:-translate-y-0.5
//                   "
//                 >
//                   {/* Glass highlight */}
//                   <span
//                     className="
//                       pointer-events-none
//                       absolute
//                       inset-x-6
//                       top-0

//                       h-px

//                       bg-gradient-to-r
//                       from-transparent
//                       via-white
//                       to-transparent
//                     "
//                   />

//                   {/* Icon */}
//                   <div
//                     className="
//                       relative

//                       flex
//                       w-11
//                       h-11
//                       shrink-0

//                       items-center
//                       justify-center

//                       rounded-xl

//                       bg-[#C6577B]/[0.08]

//                       border
//                       border-[#C6577B]/[0.12]

//                       transition-all
//                       duration-400

//                       group-hover/detail:bg-[#7A2E44]
//                       group-hover/detail:border-[#7A2E44]
//                     "
//                   >
//                     <Icon
//                       className="
//                         w-5
//                         h-5

//                         text-[#7A2E44]

//                         transition-colors
//                         duration-400

//                         group-hover/detail:text-white
//                       "
//                       strokeWidth={1.5}
//                     />
//                   </div>

//                   {/* Text */}
//                   <div className="relative min-w-0 pr-4">
//                     <p
//                       className="
//                         text-[10px]
//                         font-mono
//                         tracking-[0.16em]
//                         text-[#C6577B]
//                         uppercase
//                       "
//                     >
//                       {d.label}
//                     </p>

//                     <p
//                       className="
//                         mt-1

//                         text-sm
//                         leading-6

//                         text-[#5F5960]
//                       "
//                     >
//                       {d.value}
//                     </p>
//                   </div>

//                   {/* Arrow for clickable items */}
//                   {d.href && (
//                     <ArrowUpRight
//                       className="
//                         absolute
//                         right-4
//                         top-1/2

//                         h-4
//                         w-4

//                         -translate-y-1/2
//                         translate-x-1

//                         text-[#C6577B]

//                         opacity-0

//                         transition-all
//                         duration-300

//                         group-hover/detail:opacity-100
//                         group-hover/detail:translate-x-0
//                       "
//                     />
//                   )}
//                 </div>
//               );

//               return d.href ? (
//                 <a
//                   key={d.label}
//                   href={d.href}
//                   target={d.href.startsWith("http") ? "_blank" : undefined}
//                   rel={d.href.startsWith("http") ? "noreferrer" : undefined}
//                   className="block"
//                 >
//                   {Inner}
//                 </a>
//               ) : (
//                 <div key={d.label}>{Inner}</div>
//               );
//             })}
//           </div>
//         </div>

//         {/* ===================================================
//             INQUIRY FORM
//         ==================================================== */}

//         <Reveal className="lg:col-span-3" delay={0.1}>
//           <div
//             className="
//               group/form
//               relative
//               overflow-hidden

//               rounded-[28px]

//               bg-white/40
//               backdrop-blur-2xl
//               backdrop-saturate-150

//               border
//               border-white/70

//               ring-1
//               ring-[#7A2E44]/[0.05]

//               p-6
//               md:p-10

//               shadow-[0_20px_60px_rgba(122,46,68,0.08)]

//               transition-all
//               duration-500

//               hover:shadow-[0_28px_75px_rgba(122,46,68,0.12)]
//             "
//           >
//             {/* =============================================
//                 FORM GLASS HIGHLIGHT
//             ============================================== */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-x-10
//                 top-0

//                 h-px

//                 bg-gradient-to-r
//                 from-transparent
//                 via-white
//                 to-transparent
//               "
//             />

//             {/* =============================================
//                 FORM AMBIENT GLOW
//             ============================================== */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute

//                 -right-24
//                 -top-24

//                 h-52
//                 w-52

//                 rounded-full

//                 bg-[#C6577B]/[0.045]

//                 blur-[70px]

//                 transition-all
//                 duration-700

//                 group-hover/form:bg-[#C6577B]/[0.07]
//               "
//             />

//             <div
//               className="
//                 pointer-events-none
//                 absolute

//                 -bottom-24
//                 -left-24

//                 h-52
//                 w-52

//                 rounded-full

//                 bg-[#7A2E44]/[0.035]

//                 blur-[70px]
//               "
//             />

//             {/* =============================================
//                 FORM CONTENT
//             ============================================== */}

//             <div className="relative z-10">
//               <InquiryForm />
//             </div>

//             {/* =============================================
//                 BOTTOM ACCENT
//             ============================================== */}

//             <div
//               className="
//                 absolute
//                 bottom-0
//                 left-1/2

//                 h-[2px]
//                 w-0

//                 -translate-x-1/2

//                 bg-gradient-to-r
//                 from-[#7A2E44]
//                 via-[#C6577B]
//                 to-[#E9A0B5]

//                 transition-all
//                 duration-700

//                 group-hover/form:w-[70%]
//               "
//             />
//           </div>
//         </Reveal>
//       </div>

//       {/* =====================================================
//           ECG CONTINUITY
//       ====================================================== */}

//       <div
//         className="
//           relative
//           z-10

//           mt-20
//           h-16
//           w-full

//           pointer-events-none
//           opacity-20
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
//           />
//         </svg>
//       </div>

//       {/* =====================================================
//           BOTTOM ACCENT
//       ====================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-0
//           left-0

//           h-[2px]
//           w-full

//           bg-gradient-to-r
//           from-transparent
//           via-[#C6577B]
//           to-transparent

//           opacity-50
//         "
//       />

//       {/* =====================================================
//           FLOAT DOT ANIMATION
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
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ArrowUpRight,
  MessageCircle,
  CalendarDays,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import InquiryForm from "./InquiryForm";

const details = [
  {
    icon: MapPin,
    label: "Visit us",
    value: "BESIDE CHABI HOTEL, B T Road, Mahesdihi, Sundargarh-770001, Odisha",
    href: "https://maps.app.goo.gl/Tw7Df2JQPFYK87Ma9",
    action: "Get directions",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 99385 63856",
    href: "tel:+919938563856",
    action: "Call centre",
  },
  {
    icon: Mail,
    label: "Email",
    value: "pdcsudargarh@gmail.com",
    href: "mailto:pdcsudargarh@gmail.com",
    action: "Send an email",
  },
  {
    icon: Clock,
    label: "Timings",
    value: "Mon–Sat(6:30 AM – 8:30 PM), Sun(6:30 AM – 8:00 PM)",
    action: "",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FBF5F6] py-20 sm:py-24 lg:py-28"
    >
      {/* Soft brand atmosphere */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[500px] w-[500px] rounded-full bg-[#C6577B]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[450px] w-[450px] rounded-full bg-[#7A2E44]/[0.045] blur-[120px]" />

      {/* Delicate background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(198, 87, 123, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(198, 87, 123, 0.045) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[8%] top-[25%] h-2.5 w-2.5 rounded-full bg-[#C6577B]/20 shadow-[0_0_20px_rgba(198,87,123,0.2)] animate-[floatDot_8s_ease-in-out_infinite]" />
        <span className="absolute right-[10%] top-[18%] h-2 w-2 rounded-full bg-[#C6577B]/25 shadow-[0_0_18px_rgba(198,87,123,0.25)] animate-[floatDot_9s_ease-in-out_infinite_1s]" />
        <span className="absolute left-[15%] bottom-[25%] h-2 w-2 rounded-full bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-[floatDot_7s_ease-in-out_infinite_2s]" />
        <span className="absolute right-[6%] bottom-[28%] h-3 w-3 rounded-full bg-[#C6577B]/15 shadow-[0_0_20px_rgba(198,87,123,0.18)] animate-[floatDot_10s_ease-in-out_infinite_1s]" />
        <span className="absolute left-[30%] top-[15%] h-1.5 w-1.5 rounded-full bg-[#7A2E44]/20" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        {/* Contact information */}
        <div className="lg:pt-2">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6577B]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A54867]">
                Contact & appointments
              </span>
            </div>
            <SectionHeading
              eyebrow=""
              title="Book a test or ask us anything."
              subtitle="Share a few details and our care team will get back to you shortly."
            />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/65 px-4 py-3 shadow-[0_8px_25px_rgba(122,46,68,0.06)] backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.35)]" />
              </span>
              <span className="text-[9px] font-semibold tracking-[0.13em] text-[#7A2E44] sm:text-[10px]">
                HOME COLLECTION SLOTS AVAILABLE TODAY
              </span>
            </div>
          </Reveal>

          <div className="mt-8 space-y-3">
            {details.map((detail, index) => {
              const Icon = detail.icon;
              const card = (
                <div className="group/detail relative flex gap-4 overflow-hidden rounded-2xl border border-white/80 bg-white/55 px-4 py-4 shadow-[0_8px_25px_rgba(122,46,68,0.035)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C6577B]/25 hover:bg-white/85 hover:shadow-[0_14px_35px_rgba(122,46,68,0.08)] sm:px-5">
                  <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C6577B]/15 bg-[#C6577B]/[0.09] text-[#7A2E44] transition-colors duration-300 group-hover/detail:border-[#7A2E44] group-hover/detail:bg-[#7A2E44] group-hover/detail:text-white">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>
                  <div className="relative min-w-0 flex-1 pr-2">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#A54867]">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-[13px] leading-6 text-[#65565C] sm:text-sm">
                      {detail.value}
                    </p>
                    {detail.action && (
                      <p className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-[#7A2E44] transition-colors group-hover/detail:text-[#C6577B]">
                        {detail.action}
                        <ArrowUpRight size={12} />
                      </p>
                    )}
                  </div>
                  {detail.href && (
                    <ArrowUpRight
                      size={15}
                      className="absolute right-4 top-4 text-[#C6577B]/65 transition-transform group-hover/detail:-translate-y-0.5 group-hover/detail:translate-x-0.5"
                    />
                  )}
                </div>
              );

              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    detail.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="block"
                >
                  {card}
                </a>
              ) : (
                <div key={detail.label}>{card}</div>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <a
              href="https://wa.me/919938563856"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-[#7A2E44] px-5 py-3 text-xs font-semibold tracking-wide text-white shadow-[0_12px_28px_-12px_rgba(122,46,68,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6577B]"
            >
              <MessageCircle size={16} />
              Message us on WhatsApp
              <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        {/* Inquiry form */}
        <Reveal delay={0.1} className="min-w-0">
          <div className="group/form relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/70 p-5 shadow-[0_24px_70px_-38px_rgba(122,46,68,0.3)] backdrop-blur-2xl transition-shadow duration-500 hover:shadow-[0_28px_80px_-34px_rgba(122,46,68,0.32)] sm:p-7 md:p-9">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-[#C6577B]/[0.06] blur-[70px] transition-colors duration-700 group-hover/form:bg-[#C6577B]/[0.09]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-[#7A2E44]/[0.04] blur-[70px]" />

            <div className="relative z-10 mb-6 flex items-start justify-between gap-4 border-b border-[#7A2E44]/10 pb-5">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A54867]">
                  Patient inquiry
                </p>
                <h3 className="mt-1.5 font-serif text-2xl tracking-tight text-[#7A2E44] sm:text-3xl">
                  How can we help?
                </h3>
                <p className="mt-2 text-xs leading-5 text-[#806B72]">
                  Fill in the form and we’ll connect with you.
                </p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#C6577B]/15 bg-[#C6577B]/[0.08] text-[#7A2E44]">
                <CalendarDays size={19} strokeWidth={1.6} />
              </div>
            </div>

            <div className="relative z-10">
              <InquiryForm />
            </div>

            <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#7A2E44] via-[#C6577B] to-[#E9A0B5] transition-all duration-700 group-hover/form:w-[70%]" />
          </div>
        </Reveal>
      </div>

      {/* ECG continuity */}
      <div className="pointer-events-none relative z-10 mt-16 h-14 w-full opacity-20 sm:mt-20 sm:h-16">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 45 H330 L350 45 L370 27 L392 63 L415 14 L438 66 L460 45 H720 C850 45 900 27 1010 27 C1120 27 1180 55 1280 55 H1440"
            stroke="#C6577B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#C6577B] to-transparent opacity-50" />

      <style>{`
        @keyframes floatDot {
          0%, 100% {
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
