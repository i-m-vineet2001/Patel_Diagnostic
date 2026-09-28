import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import InquiryForm from "./InquiryForm";

const details = [
  {
    icon: MapPin,
    label: "Visit us",
    value: "42 Residency Road, Ashok Nagar, Bengaluru 560025",
    href: "https://maps.google.com/?q=Residency+Road+Bengaluru",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 80 4567 8900",
    href: "tel:+918045678900",
  },
  {
    icon: Mail,
    label: "Email",
    value: "care@luminadiagnostics.in",
    href: "mailto:care@luminadiagnostics.in",
  },
  {
    icon: Clock,
    label: "Timings",
    value: "Mon–Sat 6:30 AM – 9 PM · Sun 7 AM – 1 PM",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 micro-grid opacity-70" />
      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Inquiry Gateway"
            title="Book a test or ask us anything."
            subtitle="Share a few details and our care team will get back to you shortly."
          />
          <Reveal className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-wider text-[#0F172A] glass border border-slate-200 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />{" "}
            HOME COLLECTION SLOTS AVAILABLE TODAY
          </Reveal>
          <div className="mt-10 space-y-6">
            {details.map((d) => {
              const Inner = (
                <div className="flex gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                    <d.icon
                      className="w-5 h-5 text-[#2563EB]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                      {d.label}
                    </p>
                    <p className="text-[#0F172A]">{d.value}</p>
                  </div>
                </div>
              );
              return d.href ? (
                <a
                  key={d.label}
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="block hover:opacity-80"
                >
                  {Inner}
                </a>
              ) : (
                <div key={d.label}>{Inner}</div>
              );
            })}
          </div>
        </div>
        <Reveal className="lg:col-span-3" delay={0.1}>
          <div className="glass rounded-3xl border border-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 md:p-10">
            <InquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
