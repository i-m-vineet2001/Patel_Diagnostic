import React from "react";
import { Heart, Quote } from "lucide-react";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Patient Feedback",
    role: "Patient / Family Feedback",
    text: "The staff was supportive and explained the process clearly. The entire experience felt comfortable and well managed.",
  },
  {
    name: "Patient Feedback",
    role: "Patient / Family Feedback",
    text: "From sample collection to receiving the report, the process was smooth and the team was very helpful throughout.",
  },
  {
    name: "Patient Feedback",
    role: "Patient / Family Feedback",
    text: "The staff treated us with patience and care. We appreciated how clearly everything was explained to us.",
  },
];

export default function PatientTestimonials() {
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
          AMBIENT WARM GLOWS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -top-48
          -left-48
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#C6577B]/[0.055]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          -right-48
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#7A2E44]/[0.045]
          blur-[120px]
        "
      />

      {/* =====================================================
          SUBTLE WARM GRID
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
          FLOATING LIGHT DOTS
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        <span
          className="
            absolute
            left-[8%]
            top-[30%]
            h-2
            w-2
            rounded-full
            bg-[#C6577B]/20
            shadow-[0_0_18px_rgba(198,87,123,0.2)]
            animate-[floatDot_8s_ease-in-out_infinite]
          "
        />

        <span
          className="
            absolute
            right-[10%]
            top-[20%]
            h-3
            w-3
            rounded-full
            bg-[#C6577B]/15
            blur-[1px]
            shadow-[0_0_20px_rgba(198,87,123,0.18)]
            animate-[floatDot_9s_ease-in-out_infinite_1s]
          "
        />

        <span
          className="
            absolute
            left-[14%]
            bottom-[24%]
            h-1.5
            w-1.5
            rounded-full
            bg-white
            shadow-[0_0_18px_rgba(255,255,255,0.8)]
            animate-[floatDot_7s_ease-in-out_infinite_2s]
          "
        />

        <span
          className="
            absolute
            right-[17%]
            bottom-[20%]
            h-2
            w-2
            rounded-full
            bg-[#7A2E44]/15
            animate-[floatDot_10s_ease-in-out_infinite_1s]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeading
          center
          eyebrow="Patient Stories"
          title="Care that goes beyond the report."
          subtitle="Feedback from patients and families about their experience with our team and diagnostic services."
        />

        {/* ===================================================
            TESTIMONIAL CARDS
        ==================================================== */}

        <div className="mt-16 grid md:grid-cols-3 gap-7">
          {testimonials.map((item, index) => (
            <Reveal key={index} delay={index * 0.1} className="h-full">
              <article
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-[28px]
                  bg-white/55
                  backdrop-blur-2xl
                  backdrop-saturate-150
                  border
                  border-white/70
                  ring-1
                  ring-[#7A2E44]/[0.05]
                  p-8
                  shadow-[0_14px_50px_rgba(122,46,68,0.065)]
                  transition-all
                  duration-700
                  ease-out
                  hover:-translate-y-2
                  hover:bg-white/70
                  hover:border-[#C6577B]/20
                  hover:shadow-[0_25px_65px_rgba(122,46,68,0.11)]
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

                {/* Ambient card glow */}
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
                    group-hover:bg-[#C6577B]/[0.08]
                  "
                />

                {/* Quote icon */}
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

                {/* Feedback */}
                <blockquote
                  className="
                    relative
                    mt-7
                    text-[15px]
                    leading-7
                    text-[#5F5960]
                  "
                >
                  “{item.text}”
                </blockquote>

                {/* Divider */}
                <div
                  className="
                    relative
                    mt-7
                    h-px
                    w-full
                    bg-[#7A2E44]/[0.07]
                  "
                />

                {/* Patient info */}
                <div className="relative mt-6 flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#7A2E44]/10
                      border
                      border-[#7A2E44]/10
                    "
                  >
                    <Heart
                      className="h-5 w-5 text-[#C6577B]"
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-[#7A2E44]">{item.name}</p>

                    <p className="mt-0.5 text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>

                {/* Bottom accent */}
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
              </article>
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
