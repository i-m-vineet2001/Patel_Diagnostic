
// import React, { useState } from "react";
// import { CheckCircle2, Loader2 } from "lucide-react";

// import { apiClient } from "@/api/apiClient";
// import FormField from "./FormField";

// const types = [
//   { value: "book_test", label: "Book a test" },
//   { value: "package", label: "Health package" },
//   { value: "home_collection", label: "Home collection" },
//   { value: "general", label: "General question" },
// ];

// export default function InquiryForm({ defaultPackage = "" }) {
//   const empty = {
//     full_name: "",
//     phone: "",
//     email: "",
//     inquiry_type: defaultPackage ? "package" : "book_test",
//     package_name: defaultPackage,
//     preferred_date: "",
//     message: "",
//   };

//   const [form, setForm] = useState(empty);
//   const [status, setStatus] = useState("idle");
//   const [error, setError] = useState("");

//   const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

//   const submit = async (e) => {
//     e.preventDefault();

//     setStatus("loading");
//     setError("");

//     const data = Object.fromEntries(
//       Object.entries(form).filter(([, value]) => value !== ""),
//     );

//     try {
//       const res = await apiClient.functions.invoke("submitInquiry", data);

//       if (!res.data?.ok) {
//         throw new Error(res.data?.error || "Submission failed");
//       }

//       setStatus("done");
//     } catch {
//       setError("Something went wrong. Please try again or call us.");
//       setStatus("idle");
//     }
//   };

//   // ─────────────────────────────────────────────
//   // SUCCESS STATE
//   // ─────────────────────────────────────────────

//   if (status === "done") {
//     return (
//       <div
//         className="
//           relative
//           overflow-hidden
//           text-center
//           py-14
//           px-6
//           rounded-3xl
//           bg-white/35
//           backdrop-blur-2xl
//           backdrop-saturate-150
//           border border-white/70
//           ring-1 ring-[#7A2E44]/[0.06]
//           shadow-[0_18px_60px_rgba(122,46,68,0.08)]
//         "
//         aria-live="polite"
//       >
//         {/* Ambient glow */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             -top-20
//             left-1/2
//             -translate-x-1/2
//             w-56
//             h-56
//             rounded-full
//             bg-[#C6577B]/10
//             blur-3xl
//           "
//         />

//         <div className="relative z-10">
//           <div
//             className="
//               mx-auto
//               flex
//               items-center
//               justify-center
//               w-16
//               h-16
//               rounded-2xl
//               bg-[#10B981]/10
//               border border-[#10B981]/15
//               shadow-[0_10px_30px_rgba(16,185,129,0.08)]
//             "
//           >
//             <CheckCircle2
//               className="w-9 h-9 text-[#10B981]"
//               strokeWidth={1.5}
//             />
//           </div>

//           <h3 className="mt-6 text-2xl font-semibold text-[#7A2E44]">
//             Thank you, {form.full_name.split(" ")[0]}!
//           </h3>

//           <p className="mt-3 max-w-md mx-auto text-sm md:text-base leading-relaxed text-[#5F5960]">
//             Our care team will call you within 30 minutes during working hours.
//           </p>

//           <button
//             type="button"
//             onClick={() => {
//               setForm(empty);
//               setStatus("idle");
//             }}
//             className="
//               mt-7
//               inline-flex
//               items-center
//               justify-center
//               px-5
//               h-11
//               rounded-xl
//               bg-white/40
//               backdrop-blur-xl
//               border border-white/70
//               text-[#7A2E44]
//               font-semibold
//               shadow-[0_6px_20px_rgba(122,46,68,0.05)]
//               hover:bg-white/60
//               hover:border-[#C6577B]/20
//               hover:text-[#C6577B]
//               transition-all
//               duration-300
//             "
//           >
//             Send another inquiry
//           </button>
//         </div>

//         {/* Bottom accent */}
//         <div
//           className="
//             absolute
//             bottom-0
//             left-0
//             right-0
//             h-[2px]
//             bg-gradient-to-r
//             from-transparent
//             via-[#C6577B]
//             to-transparent
//             opacity-70
//           "
//         />
//       </div>
//     );
//   }

//   // ─────────────────────────────────────────────
//   // FORM
//   // ─────────────────────────────────────────────

//   return (
//     <form onSubmit={submit} className="relative space-y-5">
//       {/* Name + Phone */}
//       <div className="grid sm:grid-cols-2 gap-5">
//         <FormField
//           label="Full name"
//           required
//           value={form.full_name}
//           onChange={set("full_name")}
//           valid={form.full_name.trim().length > 1}
//           placeholder="Your full name"
//         />

//         <FormField
//           label="Phone"
//           type="tel"
//           required
//           value={form.phone}
//           onChange={set("phone")}
//           valid={/^[+\d\s-]{10,}$/.test(form.phone)}
//           placeholder="Your phone number"
//         />
//       </div>

//       {/* Email */}
//       <FormField
//         label="Email (optional)"
//         type="email"
//         value={form.email}
//         onChange={set("email")}
//         valid={/^\S+@\S+\.\S+$/.test(form.email)}
//         placeholder="you@example.com"
//       />

//       {/* Type + Date */}
//       <div className="grid sm:grid-cols-2 gap-5">
//         <label className="block">
//           <span
//             className="
//               text-[11px]
//               font-mono
//               font-medium
//               tracking-[0.12em]
//               uppercase
//               text-[#7A2E44]
//             "
//           >
//             I'm interested in
//           </span>

//           <div className="relative mt-2">
//             <select
//               value={form.inquiry_type}
//               onChange={set("inquiry_type")}
//               className="
//                 w-full
//                 h-12
//                 appearance-none
//                 rounded-xl
//                 bg-white/40
//                 backdrop-blur-xl
//                 backdrop-saturate-150
//                 border border-white/70
//                 px-4
//                 pr-10
//                 text-[#5F5960]
//                 outline-none
//                 shadow-[0_4px_18px_rgba(122,46,68,0.035)]
//                 transition-all
//                 duration-300
//                 focus:border-[#C6577B]/40
//                 focus:ring-4
//                 focus:ring-[#C6577B]/10
//                 focus:bg-white/55
//               "
//             >
//               {types.map((type) => (
//                 <option key={type.value} value={type.value}>
//                   {type.label}
//                 </option>
//               ))}
//             </select>

//             {/* Custom arrow */}
//             <span
//               className="
//                 pointer-events-none
//                 absolute
//                 right-4
//                 top-1/2
//                 -translate-y-1/2
//                 text-[#7A2E44]/60
//               "
//             >
//               ↓
//             </span>
//           </div>
//         </label>

//         <FormField
//           label="Preferred date"
//           type="date"
//           value={form.preferred_date}
//           onChange={set("preferred_date")}
//           valid={!!form.preferred_date}
//         />
//       </div>

//       {/* Package */}
//       {form.package_name && (
//         <FormField
//           label="Package"
//           value={form.package_name}
//           onChange={set("package_name")}
//           valid
//         />
//       )}

//       {/* Message */}
//       <FormField
//         label="Message"
//         textarea
//         value={form.message}
//         onChange={set("message")}
//         valid={form.message.trim().length > 3}
//         placeholder="Tell us how we can help..."
//       />

//       {/* Error */}
//       <p
//         aria-live="polite"
//         className="
//           min-h-[20px]
//           text-sm
//           text-red-600
//           px-1
//         "
//       >
//         {error}
//       </p>

//       {/* Submit */}
//       <button
//         type="submit"
//         disabled={status === "loading"}
//         className="
//           relative
//           overflow-hidden
//           w-full
//           h-14
//           rounded-xl
//           bg-[#C6577B]
//           text-white
//           font-semibold
//           shadow-[0_10px_30px_rgba(198,87,123,0.22)]
//           hover:bg-[#B94C70]
//           hover:shadow-[0_14px_35px_rgba(198,87,123,0.28)]
//           active:scale-[0.99]
//           disabled:opacity-70
//           disabled:cursor-not-allowed
//           transition-all
//           duration-300
//           flex
//           items-center
//           justify-center
//           gap-2
//         "
//       >
//         {/* Button shine */}
//         <span
//           className="
//             pointer-events-none
//             absolute
//             inset-y-0
//             -left-20
//             w-20
//             skew-x-[-20deg]
//             bg-white/15
//             blur-sm
//             transition-all
//             duration-700
//             group-hover:left-[110%]
//           "
//         />

//         {status === "loading" && (
//           <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
//         )}

//         <span className="relative z-10">
//           {status === "loading" ? "Submitting..." : "Submit Inquiry"}
//         </span>
//       </button>
//     </form>
//   );
// }









import React, { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  CalendarDays,
  ShieldCheck,
  PhoneCall,
  ArrowUpRight,
} from "lucide-react";

import { apiClient } from "@/api/apiClient";
import FormField from "./FormField";

const types = [
  { value: "book_test", label: "Book a test" },
  { value: "package", label: "Health package" },
  { value: "home_collection", label: "Home collection" },
  { value: "general", label: "General question" },
];

export default function InquiryForm({ defaultPackage = "" }) {
  const empty = {
    full_name: "",
    phone: "",
    email: "",
    inquiry_type: defaultPackage ? "package" : "book_test",
    package_name: defaultPackage,
    preferred_date: "",
    message: "",
  };

  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const set = (key) => (e) =>
    setForm((current) => ({ ...current, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const data = Object.fromEntries(
      Object.entries(form).filter(([, value]) => value !== ""),
    );

    try {
      const res = await apiClient.functions.invoke("submitInquiry", data);
      if (!res.data?.ok) {
        throw new Error(res.data?.error || "Submission failed");
      }
      setStatus("done");
    } catch {
      setError("Something went wrong. Please try again or call us.");
      setStatus("idle");
    }
  };

  if (status === "done") {
    return (
      <section
        className="relative isolate overflow-hidden rounded-[28px] border border-white/80 bg-white/65 px-6 py-12 text-center shadow-[0_24px_70px_rgba(122,46,68,0.10)] backdrop-blur-2xl sm:px-10"
        aria-live="polite"
      >
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#C6577B]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#7A2E44]/[0.06] blur-3xl" />

        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/15 bg-emerald-500/10 shadow-[0_12px_30px_rgba(16,185,129,0.08)]">
          <CheckCircle2
            className="h-9 w-9 text-emerald-600"
            strokeWidth={1.6}
          />
        </div>

        <p className="relative mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C6577B]">
          Inquiry received
        </p>
        <h3 className="relative mt-2 text-2xl font-semibold tracking-tight text-[#7A2E44] sm:text-3xl">
          Thank you, {form.full_name.split(" ")[0]}!
        </h3>
        <p className="relative mx-auto mt-3 max-w-md text-sm leading-7 text-[#655B61] sm:text-base">
          Our care team will call you within 30 minutes during working hours.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(empty);
            setStatus("idle");
          }}
          className="relative mt-7 inline-flex h-11 items-center justify-center rounded-xl border border-[#7A2E44]/15 bg-white/70 px-5 text-sm font-semibold text-[#7A2E44] transition duration-300 hover:border-[#C6577B]/35 hover:bg-white hover:text-[#C6577B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C6577B]/15"
        >
          Send another inquiry
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </button>

        <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C6577B]/70 to-transparent" />
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden rounded-[28px] border border-white/80 bg-white/55 p-5 shadow-[0_24px_70px_rgba(122,46,68,0.08)] backdrop-blur-2xl sm:p-7 lg:p-8">
      {/* Soft brand-light accents */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C6577B]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-[#7A2E44]/[0.05] blur-3xl" />

      <div className="relative mb-7 flex items-start gap-4 sm:mb-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7A2E44] text-white shadow-[0_10px_24px_rgba(122,46,68,0.20)]">
          <CalendarDays className="h-5 w-5" strokeWidth={1.7} />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6577B]">
            Let’s get you started
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#7A2E44] sm:text-2xl">
            Send an inquiry
          </h3>
          <p className="mt-1.5 max-w-lg text-sm leading-6 text-[#655B61]">
            Share a few details and our team will help you with your test or
            appointment.
          </p>
        </div>
      </div>

      <form onSubmit={submit} className="relative space-y-5">
        {/* Name + Phone */}
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            label="Full name"
            required
            value={form.full_name}
            onChange={set("full_name")}
            valid={form.full_name.trim().length > 1}
            placeholder="Your full name"
          />

          <FormField
            label="Phone"
            type="tel"
            required
            value={form.phone}
            onChange={set("phone")}
            valid={/^[+\d\s-]{10,}$/.test(form.phone)}
            placeholder="Your phone number"
          />
        </div>

        {/* Email */}
        <FormField
          label="Email (optional)"
          type="email"
          value={form.email}
          onChange={set("email")}
          valid={/^\S+@\S+\.\S+$/.test(form.email)}
          placeholder="you@example.com"
        />

        {/* Inquiry type + preferred date */}
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7A2E44]">
              I’m interested in
            </span>
            <div className="relative mt-2">
              <select
                value={form.inquiry_type}
                onChange={set("inquiry_type")}
                className="h-12 w-full appearance-none rounded-xl border border-white/80 bg-white/60 px-4 pr-10 text-sm text-[#5F5960] shadow-[0_4px_18px_rgba(122,46,68,0.035)] outline-none transition duration-300 hover:border-[#C6577B]/25 focus:border-[#C6577B]/45 focus:bg-white/80 focus:ring-4 focus:ring-[#C6577B]/10"
              >
                {types.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#7A2E44]/60">
                ▼
              </span>
            </div>
          </label>

          <FormField
            label="Preferred date"
            type="date"
            value={form.preferred_date}
            onChange={set("preferred_date")}
            valid={!!form.preferred_date}
          />
        </div>

        {/* Package name when preselected */}
        {form.package_name && (
          <FormField
            label="Package"
            value={form.package_name}
            onChange={set("package_name")}
            valid
          />
        )}

        {/* Message */}
        <FormField
          label="Message"
          textarea
          value={form.message}
          onChange={set("message")}
          valid={form.message.trim().length > 3}
          placeholder="Tell us how we can help..."
        />

        {/* Error message */}
        <p
          aria-live="polite"
          className="min-h-[20px] rounded-lg px-1 text-sm text-red-600"
        >
          {error}
        </p>

        {/* Submit action */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="group relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#7A2E44] px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(122,46,68,0.20)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#682438] hover:shadow-[0_16px_36px_rgba(122,46,68,0.25)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C6577B]/20"
        >
          <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/10 blur-sm transition-all duration-700 group-hover:left-[120%]" />
          {status === "loading" ? (
            <Loader2 className="relative h-4 w-4 animate-spin" aria-hidden />
          ) : (
            <ArrowUpRight
              className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          )}
          <span className="relative">
            {status === "loading" ? "Submitting..." : "Submit inquiry"}
          </span>
        </button>

        <div className="flex flex-col items-center justify-center gap-2 pt-1 text-center sm:flex-row sm:gap-5">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-[#655B61]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#C6577B]" />
            Your details are handled with care
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-[#C6577B]/40 sm:block" />
          <a
            href="tel:+919938563856"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#7A2E44] transition hover:text-[#C6577B]"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            Need help? Call us
          </a>
        </div>
      </form>
    </section>
  );
}
