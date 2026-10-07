
import React from "react";
import { Siren, ArrowUpRight, HeartPulse } from "lucide-react";

import Logo from "./Logo";

const quick = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Packages", "#packages"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0F172A] text-slate-400">
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      {/* Burgundy glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-48
          -right-48

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#7A2E44]/20

          blur-[130px]
        "
      />

      {/* Pink glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          -left-48

          h-[450px]
          w-[450px]

          rounded-full

          bg-[#C6577B]/10

          blur-[130px]
        "
      />

      {/* =====================================================
          SUBTLE MEDICAL GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(198, 87, 123, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(198, 87, 123, 0.055) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* =====================================================
          TOP ECG CONTINUITY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          w-full
          h-16
          opacity-25
        "
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="
              M0 40
              H330
              L350 40
              L370 20
              L392 60
              L415 10
              L438 64
              L460 40
              H720
              C850 40 900 22 1010 22
              C1120 22 1180 52 1280 52
              H1440
            "
            stroke="#C6577B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* =====================================================
          EMERGENCY GLASS BAR
      ====================================================== */}

      <div className="relative z-10 pt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="
              group
              relative
              overflow-hidden

              rounded-2xl

              bg-red-500/[0.06]
              backdrop-blur-xl
              backdrop-saturate-150

              border
              border-red-400/20

              shadow-[0_12px_40px_rgba(0,0,0,0.12)]

              transition-all
              duration-500

              hover:bg-red-500/[0.09]
              hover:border-red-400/30
            "
          >
            {/* Glass highlight */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-10
                top-0
                h-px

                bg-gradient-to-r
                from-transparent
                via-red-200/40
                to-transparent
              "
            />

            {/* Soft emergency glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16

                h-32
                w-32

                rounded-full

                bg-red-500/10

                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                sm:flex-row

                items-center
                justify-center

                gap-3

                px-6
                py-4

                text-center
              "
            >
              {/* Icon */}
              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0

                  items-center
                  justify-center

                  rounded-xl

                  bg-red-500/10
                  border
                  border-red-400/15
                "
              >
                <Siren className="h-4 w-4 text-red-300" strokeWidth={1.7} />
              </span>

              <p className="text-sm text-red-100/80">
                Medical emergency? Call{" "}
                <a
                  href="tel:108"
                  className="
                    font-semibold
                    text-white
                    underline
                    underline-offset-4
                    decoration-red-300/60

                    transition-colors
                    hover:text-red-200
                  "
                >
                  108
                </a>{" "}
                or our 24/7 helpline{" "}
                <a
                  href="tel:+918045678911"
                  className="
                    font-semibold
                    text-white
                    underline
                    underline-offset-4
                    decoration-red-300/60

                    transition-colors
                    hover:text-red-200
                  "
                >
                  +91 80 4567 8911
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <Logo light />

            <p
              className="
                mt-5
                max-w-sm

                text-sm
                leading-7

                text-slate-400
              "
            >
              Accurate diagnostics and compassionate care for every family since
              2017.
            </p>

            {/* Trust indicator */}
            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2

                rounded-full

                bg-white/[0.04]
                backdrop-blur-xl

                border
                border-white/[0.08]

                px-4
                py-2

                text-[11px]
                font-mono
                tracking-[0.16em]
                text-slate-400
              "
            >
              <HeartPulse
                className="h-3.5 w-3.5 text-[#C6577B]"
                strokeWidth={1.7}
              />
              TRUSTED DIAGNOSTIC CARE
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>
            <p
              className="
                font-mono
                text-[10px]
                tracking-[0.2em]
                text-[#C6577B]

                mb-5
              "
            >
              QUICK LINKS
            </p>

            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
              {quick.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="
                      group/link
                      inline-flex
                      items-center
                      gap-1.5

                      text-slate-400

                      transition-all
                      duration-300

                      hover:text-white
                      hover:translate-x-1
                    "
                  >
                    <span>{label}</span>

                    <ArrowUpRight
                      className="
                        h-3
                        w-3

                        opacity-0
                        -translate-x-1
                        translate-y-1

                        transition-all
                        duration-300

                        group-hover/link:opacity-100
                        group-hover/link:translate-x-0
                        group-hover/link:translate-y-0

                        text-[#C6577B]
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              REACH US
          ================================================== */}

          <div>
            <p
              className="
                font-mono
                text-[10px]
                tracking-[0.2em]
                text-[#C6577B]

                mb-5
              "
            >
              REACH US
            </p>

            <div className="space-y-3 text-sm">
              <p className="leading-6 text-slate-400">
                BESIDE CHABI HOTEL, B T Road, Mahesdihi
                <br />
                Sundargarh, Odisha, 770001
              </p>

              <a
                href="tel:+919938563856"
                className="
                  block
                  w-fit

                  text-slate-400

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                +91 99385 63856
              </a>

              <a
                href="mailto:care@pateldiagnostic.in"
                className="
                  block
                  w-fit

                  text-slate-400

                  transition-colors
                  duration-300

                  hover:text-[#E9A0B5]
                "
              >
                @need to update
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div
          className="
            mt-14
            h-px
            w-full

            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* =====================================================
            BOTTOM ROW
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            sm:flex-row

            items-center
            justify-between

            gap-4

            pt-7

            text-xs
            text-slate-500
          "
        >
          <p>
            © {new Date().getFullYear()} Patel Diagnostic. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span
              className="
                h-1.5
                w-1.5

                rounded-full

                bg-[#10B981]

                shadow-[0_0_10px_rgba(16,185,129,0.5)]
              "
            />

            <span>Quality-focused diagnostic care</span>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ECG
      ====================================================== */}

      <div
        className="
          pointer-events-none
          relative
          h-14
          w-full

          opacity-20
        "
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 70"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="
              M0 38
              H330
              L350 38
              L370 20
              L392 57
              L415 10
              L438 60
              L460 38
              H720
              C850 38 900 23 1010 23
              C1120 23 1180 50 1280 50
              H1440
            "
            stroke="#C6577B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* =====================================================
          BOTTOM PINK ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full

          bg-gradient-to-r
          from-transparent
          via-[#C6577B]
          to-transparent

          opacity-60
        "
      />
    </footer>
  );
}