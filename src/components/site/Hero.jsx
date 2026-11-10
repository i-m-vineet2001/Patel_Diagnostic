
// "use client";

// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Healthcare / Diagnostic Center Slides
// const slides = [
//   {
//     id: 1,
//     title: "Advanced Diagnostics. Better Healthcare.",
//     subtitle:
//       "Accurate diagnostic testing and reliable results to help you and your doctor make informed healthcare decisions.",
//     image:
//       "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80",
//     cta: "Explore Services",
//   },
//   {
//     id: 2,
//     title: "Care Begins with Accurate Diagnosis",
//     subtitle:
//       "Modern diagnostic technology combined with trusted expertise for precise, timely, and dependable results.",
//     image:
//       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80",
//     cta: "Our Diagnostics",
//   },
//   {
//     id: 3,
//     title: "Your Health. Our Priority.",
//     subtitle:
//       "From routine health checkups to advanced laboratory investigations, we are committed to delivering quality diagnostic care.",
//     image:
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
//     cta: "Book a Test",
//   },
// ];

// export default function HeroCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-advance slides every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   return (
//     <section className="relative w-full h-[85vh] min-h-[550px] overflow-hidden bg-[#7a2e44]">
//       {/* Slides Container */}
//       <div className="absolute inset-0 w-full h-full">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//               index === currentIndex
//                 ? "opacity-100 z-10"
//                 : "opacity-0 z-0 pointer-events-none"
//             }`}
//           >
//             {/* Background Image */}
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-1000 ease-out"
//             />

//             {/* Medical Pink/Burgundy Gradient Overlay */}
//             <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#7a2e44]/90 via-[#7a2e44]/65 to-[#c6577b]/30" />

//             {/* Additional Dark Overlay */}
//             <div className="absolute inset-0 z-10 bg-black/20" />

//             {/* Slide Content */}
//             <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
//               <div className="max-w-4xl">
//                 {/* Small Label */}
//                 <span className="inline-block mb-5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-medium tracking-wide">
//                   Trusted Diagnostic Care
//                 </span>

//                 {/* Main Heading */}
//                 <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-5 drop-shadow-lg">
//                   {slide.title}
//                 </h1>

//                 {/* Subtitle */}
//                 <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
//                   {slide.subtitle}
//                 </p>

//                 {/* CTA */}
//                 <button className="px-8 py-3.5 bg-[#C6577B] hover:bg-[#b5486b] text-white font-semibold rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//                   {slide.cta}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Left Arrow */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 focus:outline-none"
//         aria-label="Previous Slide"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={handleNext}
//         className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 focus:outline-none"
//         aria-label="Next Slide"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       {/* Radio Dot Indicators */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`transition-all duration-300 rounded-full focus:outline-none ${
//               index === currentIndex
//                 ? "w-8 h-3 bg-[#C6577B]"
//                 : "w-3 h-3 bg-white/50 hover:bg-white/80"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }









import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const slides = [
  {
    id: 1,
    eyebrow: "PATEL DIAGNOSTIC CENTRE · SUNDARGARH",
    title: "A clearer picture\nof your health.",
    subtitle:
      "Thoughtful diagnostic care, dependable testing, and results you and your doctor can trust.",
    image: "public/images/patho02.png",
    cta: "Explore our services",
    href: "#services",
  },
  {
    id: 2,
    eyebrow: "PRECISION WITH A PERSONAL TOUCH",
    title: "Care begins with\nknowing more.",
    subtitle:
      "Modern diagnostic technology meets attentive service—so every step feels clear and reassuring.",
    image: "public/images/path01.png",
    cta: "View diagnostics",
    href: "#services",
  },
  {
    id: 3,
    eyebrow: "YOUR NEIGHBOURHOOD HEALTH PARTNER",
    title: "Your health is\nour commitment.",
    subtitle:
      "From routine checkups to laboratory investigations, we’re here to support your health journey.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
    cta: "Get in touch",
    href: "#contact",
  },
  {
    id: 4,
    eyebrow: "",
    title: "Precision in every test.\nCare in every step.",
    subtitle:
      "Reliable diagnostic services powered by modern technology and a commitment to your well-being.",
    image: "public/images/patho03.png",
    cta: "Get in touch",
    href: "#contact",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeSlide = slides[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () =>
    setCurrentIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % slides.length);

  return (
    <section
      id="home"
      aria-label="Patel Diagnostic Centre introduction"
      className="relative isolate min-h-[620px] h-[82vh] max-h-[880px] w-full overflow-hidden bg-[#351521]"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          aria-hidden={index !== currentIndex}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex
              ? "z-0 opacity-100"
              : "pointer-events-none z-0 opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover object-center"
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </div>
      ))}

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#2c111c]/90 via-[#4a1c2d]/72 to-[#7a2e44]/18" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2c111c]/55 via-transparent to-[#2c111c]/15" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-center px-6 pb-24 pt-28 sm:px-10 lg:px-16">
        <div className="max-w-[790px] text-left">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-11 bg-[#e8a8bc]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f4dce4] sm:text-xs">
              {activeSlide.eyebrow}
            </p>
          </div>

          <h1
            key={`title-${activeSlide.id}`}
            className="whitespace-pre-line text-[clamp(2.8rem,6.4vw,6rem)] font-medium leading-[0.97] tracking-[-0.055em] text-white [text-wrap:balance] drop-shadow-[0_2px_18px_rgba(25,8,15,0.2)]"
          >
            {activeSlide.title}
          </h1>

          <p
            key={`subtitle-${activeSlide.id}`}
            className="mt-6 max-w-[550px] text-base leading-7 text-white/85 sm:text-lg sm:leading-8"
          >
            {activeSlide.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href={activeSlide.href}
              className="group inline-flex min-h-14 items-center gap-3 bg-[#c6577b] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(42,12,25,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a94365] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {activeSlide.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex min-h-14 items-center px-1 text-sm font-medium text-white/90 underline decoration-white/35 underline-offset-[6px] transition hover:decoration-white"
            >
              Meet our centre
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 text-xs tracking-wide text-white/70 sm:mt-16">
            <span className="font-medium text-white">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-12 bg-white/35" />
            <span>Reliable diagnostics, close to home</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 right-6 z-20 flex items-center gap-3 sm:bottom-10 sm:right-10 lg:right-16">
        <div
          className="mr-2 flex items-center gap-2"
          aria-label={`Slide ${currentIndex + 1} of ${slides.length}`}
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
              className={`h-[3px] transition-all duration-300 ${
                index === currentIndex
                  ? "w-9 bg-[#e8a8bc]"
                  : "w-4 bg-white/45 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center border border-white/35 text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center border border-white/35 text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
