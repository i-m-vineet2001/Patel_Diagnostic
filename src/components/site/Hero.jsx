// @ts-ignore
import React from "react";
// @ts-ignore
import { motion, useScroll, useTransform } from "framer-motion";
// @ts-ignore
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Image } from "@/components/ui/image";

const stats = [
  { value: "99.9%", label: "Report accuracy" },
  { value: "2,500+", label: "Tests offered" },
  { value: "6 hrs", label: "Avg. turnaround" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 160]);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://media.base44.com/images/public/6ab87b83930074af4c46587b/ede11c965_generated_933f09bd.jpg"
          alt="Bright glass-walled diagnostic laboratory at sunrise"
          className="w-full h-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-[#F8FAFC]/30" />
      <div className="absolute inset-0 micro-grid opacity-60" />
      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 glass border border-white rounded-full px-4 py-2 font-mono text-xs tracking-wider text-[#0F172A]">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" /> NABL & CAP
            ACCREDITED LABS
          </span>
          <h1 className="mt-7 text-[2.6rem] sm:text-5xl md:text-7xl font-extrabold text-[#0F172A] leading-[1.02]">
            Precise diagnostics.
            <br />
            <span className="text-[#2563EB]">Compassionate</span> care.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl">
            From routine blood work to advanced imaging, Lumina delivers results
            you can trust — processed in state-of-the-art labs and reviewed by
            expert pathologists.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="pulse-ring inline-flex h-14 items-center justify-center gap-2 px-8 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Book a Test <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex h-14 items-center justify-center px-8 rounded-xl glass border border-slate-200 text-[#0F172A] font-semibold hover:border-[#2563EB] transition-colors"
            >
              View Services
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-slate-300 pl-4">
                <p className="font-mono text-2xl md:text-3xl font-medium text-[#0F172A]">
                  {s.value}
                </p>
                <p className="text-xs md:text-sm text-slate-500 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
