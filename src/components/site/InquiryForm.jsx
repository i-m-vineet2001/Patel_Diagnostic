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
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const data = Object.fromEntries(
      Object.entries(form).filter(([, v]) => v !== ""),
    );
    try {
      const res = await apiClient.functions.invoke("submitInquiry", data);
      if (!res.data?.ok)
        throw new Error(res.data?.error || "Submission failed");
      setStatus("done");
    } catch {
      setError("Something went wrong. Please try again or call us.");
      setStatus("idle");
    }
  };

  if (status === "done") {
    return (
      <div className="text-center py-12" aria-live="polite">
        <CheckCircle2
          className="w-14 h-14 text-[#10B981] mx-auto"
          strokeWidth={1.5}
        />
        <h3 className="mt-5 text-2xl font-semibold text-[#0F172A]">
          Thank you, {form.full_name.split(" ")[0]}!
        </h3>
        <p className="mt-2 text-slate-600">
          Our care team will call you within 30 minutes during working hours.
        </p>
        <button
          onClick={() => {
            setForm(empty);
            setStatus("idle");
          }}
          className="mt-6 text-[#2563EB] font-semibold"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          label="Full name"
          textarea={true}
          required
          value={form.full_name}
          onChange={set("full_name")}
          valid={form.full_name.trim().length > 1}
        />
        <FormField
          label="Phone"
          textarea={true}
          type="tel"
          required
          value={form.phone}
          onChange={set("phone")}
          valid={/^[+\d\s-]{10,}$/.test(form.phone)}
        />
      </div>
      <FormField
        label="Email (optional)"
        textarea={true}
        type="email"
        value={form.email}
        onChange={set("email")}
        valid={/^\S+@\S+\.\S+$/.test(form.email)}
      />
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            I'm interested in
          </span>
          <select
            value={form.inquiry_type}
            onChange={set("inquiry_type")}
            className="mt-2 w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-[#0F172A] focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            {types.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
        <FormField
          label="Preferred date"
          textarea={true}
          type="date"
          value={form.preferred_date}
          onChange={set("preferred_date")}
          valid={!!form.preferred_date}
        />
      </div>
      {form.package_name && (
        <FormField
          label="Package"
          textarea={true}
          value={form.package_name}
          onChange={set("package_name")}
          valid
        />
      )}
      <FormField
        label="Message"
        textarea
        value={form.message}
        onChange={set("message")}
        valid={form.message.trim().length > 3}
      />
      <p aria-live="polite" className="text-sm text-red-600 min-h-[1px]">
        {error}
      </p>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-14 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] disabled:opacity-70 transition-colors flex items-center justify-center gap-2"
      >
        {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}{" "}
        Submit Inquiry
      </button>
    </form>
  );
}
