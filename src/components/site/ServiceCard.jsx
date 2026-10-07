// import React from "react";
// import { Check } from "lucide-react";

// export default function ServiceCard({ service }) {
//   const Icon = service.icon;
//   return (
//     <div className="group relative h-full glass rounded-2xl border border-slate-200/80 p-7 transition-all duration-500 hover:border-[#2563EB] hover:shadow-[inset_0_0_24px_rgba(37,99,235,0.06),0_20px_40px_rgba(15,23,42,0.06)] hover:-translate-y-1">
//       <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#2563EB]/40 rounded-tl-2xl" />
//       <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#2563EB]/40 rounded-br-2xl" />
//       <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#2563EB] transition-colors duration-500">
//         <Icon
//           className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-500"
//           strokeWidth={1.5}
//         />
//       </div>
//       <h3 className="mt-6 text-xl font-semibold text-[#0F172A]">
//         {service.title}
//       </h3>
//       <p className="mt-2 text-slate-600">{service.text}</p>
//       <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
//         <div className="overflow-hidden">
//           <p className="mt-5 pt-5 border-t border-slate-200 font-mono text-[11px] tracking-widest text-slate-400">
//             COMMON TESTS
//           </p>
//           <ul className="mt-3 space-y-2">
//             {service.tests.map((t) => (
//               <li
//                 key={t}
//                 className="flex items-center gap-2 text-sm text-slate-700"
//               >
//                 <Check className="w-4 h-4 text-[#10B981]" /> {t}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Check, MessageCircle, ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  const whatsappNumber = "9777730400";

  const whatsappMessage = `Hello Patel Diagnostic,

I would like to enquire about the "${service.title}" package.

Could you please share the price, available timings, and other details?

Thank you.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-[28px]

        /* GLASS */
        bg-white/35
        backdrop-blur-2xl
        backdrop-saturate-150

        /* GLASS EDGE */
        border
        border-white/70
        ring-1
        ring-[#7A2E44]/[0.06]

        p-7

        /* PREMIUM DEPTH */
        shadow-[0_12px_45px_rgba(122,46,68,0.08)]

        transition-all
        duration-500
        ease-out

        hover:-translate-y-2
        hover:bg-white/45
        hover:border-white/90
        hover:ring-[#C6577B]/20
        hover:shadow-[0_25px_65px_rgba(122,46,68,0.14)]
      "
    >
      {/* =====================================================
          GLASS HIGHLIGHT
      ====================================================== */}

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
          opacity-90
        "
      />

      {/* =====================================================
          SOFT BURGUNDY GLASS REFLECTION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-56
          w-56
          rounded-full
          bg-[#7A2E44]/[0.055]
          blur-[70px]
          transition-all
          duration-700
          group-hover:bg-[#7A2E44]/[0.10]
          group-hover:scale-110
        "
      />

      {/* =====================================================
          SOFT PINK GLASS REFLECTION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-20
          h-52
          w-52
          rounded-full
          bg-[#C6577B]/[0.055]
          blur-[70px]
          transition-all
          duration-700
          group-hover:bg-[#C6577B]/[0.10]
          group-hover:scale-110
        "
      />

      {/* =====================================================
          DIAGONAL GLASS SHINE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          top-8
          h-40
          w-72
          rotate-[-25deg]
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          blur-2xl
          opacity-0
          transition-all
          duration-700
          group-hover:translate-x-[-20px]
          group-hover:opacity-100
        "
      />

      {/* =====================================================
          DECORATIVE CORNERS
      ====================================================== */}

      <span
        className="
          absolute
          left-0
          top-0
          h-9
          w-9
          rounded-tl-[28px]
          border-l
          border-t
          border-[#C6577B]/20

          transition-all
          duration-500

          group-hover:h-14
          group-hover:w-14
          group-hover:border-[#C6577B]/45
        "
      />

      <span
        className="
          absolute
          bottom-0
          right-0
          h-9
          w-9
          rounded-br-[28px]
          border-b
          border-r
          border-[#C6577B]/20

          transition-all
          duration-500

          group-hover:h-14
          group-hover:w-14
          group-hover:border-[#C6577B]/45
        "
      />

      {/* =====================================================
          ICON GLASS
      ====================================================== */}

      <div
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl

          bg-white/35
          backdrop-blur-xl

          border
          border-white/80
          ring-1
          ring-[#7A2E44]/[0.05]

          shadow-[0_8px_25px_rgba(122,46,68,0.07)]

          transition-all
          duration-500

          group-hover:-translate-y-1
          group-hover:scale-105
          group-hover:bg-[#7A2E44]
          group-hover:border-[#7A2E44]
          group-hover:shadow-[0_10px_30px_rgba(122,46,68,0.20)]
        "
      >
        <Icon
          className="
            h-6
            w-6
            text-[#7A2E44]

            transition-all
            duration-500

            group-hover:text-white
            group-hover:scale-110
          "
          strokeWidth={1.5}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative">
        <h3
          className="
            mt-6
            text-xl
            font-semibold
            tracking-tight
            text-[#7A2E44]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-2
            text-[15px]
            leading-7
            text-slate-600
          "
        >
          {service.text}
        </p>
      </div>

      {/* =====================================================
          COMMON TESTS
      ====================================================== */}

      <div
        className="
          relative
          grid
          grid-rows-[0fr]
          opacity-0

          transition-all
          duration-500
          ease-out

          group-hover:grid-rows-[1fr]
          group-hover:opacity-100
        "
      >
        <div className="overflow-hidden">
          <div
            className="
              mt-5
              border-t
              border-[#7A2E44]/10
              pt-5
            "
          >
            <p
              className="
                font-mono
                text-[10px]
                font-medium
                tracking-[0.2em]
                text-[#C6577B]
              "
            >
              COMMON TESTS
            </p>

            <ul className="mt-3 space-y-2">
              {service.tests.map((t) => (
                <li
                  key={t}
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-600
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full

                      bg-[#C6577B]/10
                      border
                      border-[#C6577B]/10
                    "
                  >
                    <Check className="h-3 w-3 text-[#7A2E44]" strokeWidth={2} />
                  </span>

                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* =====================================================
          WHATSAPP INQUIRY
      ====================================================== */}

      <div className="relative mt-6">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${service.title} on WhatsApp`}
          className="
            group/whatsapp

            flex
            w-full
            items-center
            justify-between

            rounded-xl

            /* GLASS BUTTON */
            bg-white/30
            backdrop-blur-xl

            border
            border-white/70

            px-4
            py-3

            text-sm
            font-medium
            text-[#7A2E44]

            shadow-[0_6px_20px_rgba(122,46,68,0.05)]

            transition-all
            duration-300

            hover:bg-[#7A2E44]
            hover:border-[#7A2E44]
            hover:text-white
            hover:shadow-[0_10px_25px_rgba(122,46,68,0.18)]
          "
        >
          <span className="flex items-center gap-2.5">
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full

                bg-[#C6577B]/10
                border
                border-[#C6577B]/10

                transition-all
                duration-300

                group-hover/whatsapp:bg-white/15
                group-hover/whatsapp:border-white/10
              "
            >
              <MessageCircle
                className="
                  h-4
                  w-4
                  text-[#7A2E44]

                  transition-colors
                  duration-300

                  group-hover/whatsapp:text-white
                "
                strokeWidth={1.8}
              />
            </span>

            <span>Enquire on WhatsApp</span>
          </span>

          <ArrowUpRight
            className="
              h-4
              w-4

              transition-transform
              duration-300

              group-hover/whatsapp:translate-x-0.5
              group-hover/whatsapp:-translate-y-0.5
            "
          />
        </a>
      </div>

      {/* =====================================================
          PREMIUM BOTTOM ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-1/2

          h-[2px]
          w-0

          -translate-x-1/2

          bg-gradient-to-r
          from-[#7A2E44]
          via-[#C6577B]
          to-[#E7A7B9]

          transition-all
          duration-500

          group-hover:w-[70%]
        "
      />
    </div>
  );
}