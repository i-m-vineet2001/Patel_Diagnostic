// @ts-ignore
import React from "react";
import { Microscope, HeartHandshake, Cpu } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Microscope,
    title: "Our Mission",
    text: "Make accurate, affordable diagnostics accessible to every family, every day.",
  },
  {
    icon: HeartHandshake,
    title: "Commitment to Health",
    text: "Every sample is handled with care, every patient treated with dignity and warmth.",
  },
  {
    icon: Cpu,
    title: "Technological Accuracy",
    text: "Fully automated analysers and barcoded tracking eliminate manual error.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] group">
            <Image
              src="https://media.base44.com/images/public/6ab87b83930074af4c46587b/9f3836e82_generated_ccbdeb3e.jpg"
              alt="Lab scientist carefully processing samples"
              className="w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="glass absolute -bottom-6 -right-2 md:-right-8 border border-white rounded-2xl p-5 shadow-xl">
            <p className="font-mono text-3xl text-[#0F172A]">18+</p>
            <p className="text-sm text-slate-500">Years of trusted care</p>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="About Lumina"
            title="Diagnostics built on trust, precision and care."
            subtitle="Since 2008, Lumina Diagnostics has served over 2 million patients across the city. We combine world-class laboratory technology with a deeply human approach — because behind every sample is a person waiting for answers."
          />
          <div className="mt-10 space-y-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
                  <p.icon
                    className="w-5 h-5 text-[#2563EB]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A]">{p.title}</h3>
                  <p className="text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
