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
//   const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

//   const submit = async (e) => {
//     e.preventDefault();
//     setStatus("loading");
//     setError("");
//     const data = Object.fromEntries(
//       Object.entries(form).filter(([, v]) => v !== ""),
//     );
//     try {
//       const res = await apiClient.functions.invoke("submitInquiry", data);
//       if (!res.data?.ok)
//         throw new Error(res.data?.error || "Submission failed");
//       setStatus("done");
//     } catch {
//       setError("Something went wrong. Please try again or call us.");
//       setStatus("idle");
//     }
//   };

//   if (status === "done") {
//     return (
//       <div className="text-center py-12" aria-live="polite">
//         <CheckCircle2
//           className="w-14 h-14 text-[#10B981] mx-auto"
//           strokeWidth={1.5}
//         />
//         <h3 className="mt-5 text-2xl font-semibold text-[#0F172A]">
//           Thank you, {form.full_name.split(" ")[0]}!
//         </h3>
//         <p className="mt-2 text-slate-600">
//           Our care team will call you within 30 minutes during working hours.
//         </p>
//         <button
//           onClick={() => {
//             setForm(empty);
//             setStatus("idle");
//           }}
//           className="mt-6 text-[#2563EB] font-semibold"
//         >
//           Send another inquiry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={submit} className="space-y-5">
//       <div className="grid sm:grid-cols-2 gap-5">
//         <FormField
//           label="Full name"
//           textarea={true}
//           required
//           value={form.full_name}
//           onChange={set("full_name")}
//           valid={form.full_name.trim().length > 1}
//         />
//         <FormField
//           label="Phone"
//           textarea={true}
//           type="tel"
//           required
//           value={form.phone}
//           onChange={set("phone")}
//           valid={/^[+\d\s-]{10,}$/.test(form.phone)}
//         />
//       </div>
//       <FormField
//         label="Email (optional)"
//         textarea={true}
//         type="email"
//         value={form.email}
//         onChange={set("email")}
//         valid={/^\S+@\S+\.\S+$/.test(form.email)}
//       />
//       <div className="grid sm:grid-cols-2 gap-5">
//         <label className="block">
//           <span className="text-sm font-medium text-slate-700">
//             I'm interested in
//           </span>
//           <select
//             value={form.inquiry_type}
//             onChange={set("inquiry_type")}
//             className="mt-2 w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-[#0F172A] focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-blue-100"
//           >
//             {types.map((t) => (
//               <option key={t.value} value={t.value}>
//                 {t.label}
//               </option>
//             ))}
//           </select>
//         </label>
//         <FormField
//           label="Preferred date"
//           textarea={true}
//           type="date"
//           value={form.preferred_date}
//           onChange={set("preferred_date")}
//           valid={!!form.preferred_date}
//         />
//       </div>
//       {form.package_name && (
//         <FormField
//           label="Package"
//           textarea={true}
//           value={form.package_name}
//           onChange={set("package_name")}
//           valid
//         />
//       )}
//       <FormField
//         label="Message"
//         textarea
//         value={form.message}
//         onChange={set("message")}
//         valid={form.message.trim().length > 3}
//       />
//       <p aria-live="polite" className="text-sm text-red-600 min-h-[1px]">
//         {error}
//       </p>
//       <button
//         type="submit"
//         disabled={status === "loading"}
//         className="w-full h-14 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] disabled:opacity-70 transition-colors flex items-center justify-center gap-2"
//       >
//         {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}{" "}
//         Submit Inquiry
//       </button>
//     </form>
//   );
// }

import React, { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

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

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

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

  // ─────────────────────────────────────────────
  // SUCCESS STATE
  // ─────────────────────────────────────────────

  if (status === "done") {
    return (
      <div
        className="
          relative
          overflow-hidden
          text-center
          py-14
          px-6
          rounded-3xl
          bg-white/35
          backdrop-blur-2xl
          backdrop-saturate-150
          border border-white/70
          ring-1 ring-[#7A2E44]/[0.06]
          shadow-[0_18px_60px_rgba(122,46,68,0.08)]
        "
        aria-live="polite"
      >
        {/* Ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            -top-20
            left-1/2
            -translate-x-1/2
            w-56
            h-56
            rounded-full
            bg-[#C6577B]/10
            blur-3xl
          "
        />

        <div className="relative z-10">
          <div
            className="
              mx-auto
              flex
              items-center
              justify-center
              w-16
              h-16
              rounded-2xl
              bg-[#10B981]/10
              border border-[#10B981]/15
              shadow-[0_10px_30px_rgba(16,185,129,0.08)]
            "
          >
            <CheckCircle2
              className="w-9 h-9 text-[#10B981]"
              strokeWidth={1.5}
            />
          </div>

          <h3 className="mt-6 text-2xl font-semibold text-[#7A2E44]">
            Thank you, {form.full_name.split(" ")[0]}!
          </h3>

          <p className="mt-3 max-w-md mx-auto text-sm md:text-base leading-relaxed text-[#5F5960]">
            Our care team will call you within 30 minutes during working hours.
          </p>

          <button
            type="button"
            onClick={() => {
              setForm(empty);
              setStatus("idle");
            }}
            className="
              mt-7
              inline-flex
              items-center
              justify-center
              px-5
              h-11
              rounded-xl
              bg-white/40
              backdrop-blur-xl
              border border-white/70
              text-[#7A2E44]
              font-semibold
              shadow-[0_6px_20px_rgba(122,46,68,0.05)]
              hover:bg-white/60
              hover:border-[#C6577B]/20
              hover:text-[#C6577B]
              transition-all
              duration-300
            "
          >
            Send another inquiry
          </button>
        </div>

        {/* Bottom accent */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#C6577B]
            to-transparent
            opacity-70
          "
        />
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // FORM
  // ─────────────────────────────────────────────

  return (
    <form onSubmit={submit} className="relative space-y-5">
      {/* Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-5">
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

      {/* Type + Date */}
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span
            className="
              text-[11px]
              font-mono
              font-medium
              tracking-[0.12em]
              uppercase
              text-[#7A2E44]
            "
          >
            I'm interested in
          </span>

          <div className="relative mt-2">
            <select
              value={form.inquiry_type}
              onChange={set("inquiry_type")}
              className="
                w-full
                h-12
                appearance-none
                rounded-xl
                bg-white/40
                backdrop-blur-xl
                backdrop-saturate-150
                border border-white/70
                px-4
                pr-10
                text-[#5F5960]
                outline-none
                shadow-[0_4px_18px_rgba(122,46,68,0.035)]
                transition-all
                duration-300
                focus:border-[#C6577B]/40
                focus:ring-4
                focus:ring-[#C6577B]/10
                focus:bg-white/55
              "
            >
              {types.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            {/* Custom arrow */}
            <span
              className="
                pointer-events-none
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-[#7A2E44]/60
              "
            >
              ↓
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

      {/* Package */}
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

      {/* Error */}
      <p
        aria-live="polite"
        className="
          min-h-[20px]
          text-sm
          text-red-600
          px-1
        "
      >
        {error}
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="
          relative
          overflow-hidden
          w-full
          h-14
          rounded-xl
          bg-[#C6577B]
          text-white
          font-semibold
          shadow-[0_10px_30px_rgba(198,87,123,0.22)]
          hover:bg-[#B94C70]
          hover:shadow-[0_14px_35px_rgba(198,87,123,0.28)]
          active:scale-[0.99]
          disabled:opacity-70
          disabled:cursor-not-allowed
          transition-all
          duration-300
          flex
          items-center
          justify-center
          gap-2
        "
      >
        {/* Button shine */}
        <span
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-20
            w-20
            skew-x-[-20deg]
            bg-white/15
            blur-sm
            transition-all
            duration-700
            group-hover:left-[110%]
          "
        />

        {status === "loading" && (
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
        )}

        <span className="relative z-10">
          {status === "loading" ? "Submitting..." : "Submit Inquiry"}
        </span>
      </button>
    </form>
  );
}