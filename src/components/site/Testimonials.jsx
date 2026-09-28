import React from "react";
import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reviews = [
  {
    name: "Anita Rao",
    location: "Indiranagar",
    text: "The home sample collection was on time and the phlebotomist was so gentle. Got my reports on WhatsApp the same evening — incredibly smooth.",
    rating: 5,
  },
  {
    name: "Rajesh Menon",
    location: "Koramangala",
    text: "Booked the Comprehensive Care package. The doctor consultation that followed actually explained my reports clearly. Felt looked after, not processed.",
    rating: 5,
  },
  {
    name: "Fatima Sheikh",
    location: "Jayanagar",
    text: "Spotless lab, polite staff, and reports that my family doctor trusted immediately. Lumina is now our default for any test.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          center
          eyebrow="Patient Voices"
          title="Trusted by families across the city"
          subtitle="Real experiences from people who chose Lumina for their diagnostics."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <figure className="relative h-full glass rounded-2xl border border-slate-200 p-7">
                <Quote className="w-8 h-8 text-blue-100" strokeWidth={1.5} />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-[#10B981] text-[#10B981]"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-slate-700 leading-relaxed">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#2563EB] text-white font-semibold flex items-center justify-center">
                    {r.name[0]}
                  </span>
                  <span>
                    <p className="font-semibold text-[#0F172A]">{r.name}</p>
                    <p className="text-sm text-slate-500">{r.location}</p>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
