// // @ts-ignore
// import React from "react";
// // @ts-ignore
// import { motion, useScroll, useTransform } from "framer-motion";
// // @ts-ignore
// import { ArrowRight, ShieldCheck } from "lucide-react";
// import { Image } from "@/components/ui/image";

// const stats = [
//   { value: "99.9%", label: "Report accuracy" },
//   { value: "2,500+", label: "Tests offered" },
//   { value: "6 hrs", label: "Avg. turnaround" },
// ];

// export default function Hero() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 800], [0, 160]);
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center overflow-hidden"
//     >
//       <motion.div style={{ y }} className="absolute inset-0">
//         <Image
//           src="https://media.base44.com/images/public/6ab87b83930074af4c46587b/ede11c965_generated_933f09bd.jpg"
//           alt="Bright glass-walled diagnostic laboratory at sunrise"
//           className="w-full h-full"
//         />
//       </motion.div>
//       <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-[#F8FAFC]/30" />
//       <div className="absolute inset-0 micro-grid opacity-60" />
//       <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//           className="max-w-2xl"
//         >
//           <span className="inline-flex items-center gap-2 glass border border-white rounded-full px-4 py-2 font-mono text-xs tracking-wider text-[#0F172A]">
//             <ShieldCheck className="w-4 h-4 text-[#10B981]" /> NABL & CAP
//             ACCREDITED LABS
//           </span>
//           <h1 className="mt-7 text-[2.6rem] sm:text-5xl md:text-7xl font-extrabold text-[#0F172A] leading-[1.02]">
//             Precise diagnostics.
//             <br />
//             <span className="text-[#2563EB]">Compassionate</span> care.
//           </h1>
//           <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl">
//             From routine blood work to advanced imaging, Lumina delivers results
//             you can trust — processed in state-of-the-art labs and reviewed by
//             expert pathologists.
//           </p>
//           <div className="mt-10 flex flex-col sm:flex-row gap-4">
//             <a
//               href="#contact"
//               className="pulse-ring inline-flex h-14 items-center justify-center gap-2 px-8 rounded-xl bg-[#2563EB] text-white font-semibold hover:bg-[#1d4ed8] transition-colors"
//             >
//               Book a Test <ArrowRight className="w-4 h-4" />
//             </a>
//             <a
//               href="#services"
//               className="inline-flex h-14 items-center justify-center px-8 rounded-xl glass border border-slate-200 text-[#0F172A] font-semibold hover:border-[#2563EB] transition-colors"
//             >
//               View Services
//             </a>
//           </div>
//           <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg">
//             {stats.map((s) => (
//               <div key={s.label} className="border-l border-slate-300 pl-4">
//                 <p className="font-mono text-2xl md:text-3xl font-medium text-[#0F172A]">
//                   {s.value}
//                 </p>
//                 <p className="text-xs md:text-sm text-slate-500 mt-1">
//                   {s.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Healthcare / Diagnostic Center Slides
const slides = [
  {
    id: 1,
    title: "Advanced Diagnostics. Better Healthcare.",
    subtitle:
      "Accurate diagnostic testing and reliable results to help you and your doctor make informed healthcare decisions.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80",
    cta: "Explore Services",
  },
  {
    id: 2,
    title: "Care Begins with Accurate Diagnosis",
    subtitle:
      "Modern diagnostic technology combined with trusted expertise for precise, timely, and dependable results.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80",
    cta: "Our Diagnostics",
  },
  {
    id: 3,
    title: "Your Health. Our Priority.",
    subtitle:
      "From routine health checkups to advanced laboratory investigations, we are committed to delivering quality diagnostic care.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
    cta: "Book a Test",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[550px] overflow-hidden bg-[#7a2e44]">
      {/* Slides Container */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-1000 ease-out"
            />

            {/* Medical Pink/Burgundy Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#7a2e44]/90 via-[#7a2e44]/65 to-[#c6577b]/30" />

            {/* Additional Dark Overlay */}
            <div className="absolute inset-0 z-10 bg-black/20" />

            {/* Slide Content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
              <div className="max-w-4xl">
                {/* Small Label */}
                <span className="inline-block mb-5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-medium tracking-wide">
                  Trusted Diagnostic Care
                </span>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-5 drop-shadow-lg">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
                  {slide.subtitle}
                </p>

                {/* CTA */}
                <button className="px-8 py-3.5 bg-[#C6577B] hover:bg-[#b5486b] text-white font-semibold rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Radio Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              index === currentIndex
                ? "w-8 h-3 bg-[#C6577B]"
                : "w-3 h-3 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}