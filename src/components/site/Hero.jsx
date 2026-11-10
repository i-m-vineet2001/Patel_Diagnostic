


// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

// const slides = [
//   {
//     id: 1,
//     eyebrow: "PATEL DIAGNOSTIC CENTRE · SUNDARGARH",
//     title: "A clearer picture\nof your health.",
//     subtitle:
//       "Thoughtful diagnostic care, dependable testing, and results you and your doctor can trust.",
//     image: "/images/patho02.webp",
//     cta: "Explore our services",
//     href: "#services",
//   },
//   {
//     id: 2,
//     eyebrow: "PRECISION WITH A PERSONAL TOUCH",
//     title: "Care begins with\nknowing more.",
//     subtitle:
//       "Modern diagnostic technology meets attentive service—so every step feels clear and reassuring.",
//     image: "/images/path01.webp",
//     cta: "View diagnostics",
//     href: "#services",
//   },
//   {
//     id: 3,
//     eyebrow: "YOUR NEIGHBOURHOOD HEALTH PARTNER",
//     title: "Your health is\nour commitment.",
//     subtitle:
//       "From routine checkups to laboratory investigations, we’re here to support your health journey.",
//     image: "/images/patho03.webp",
//     cta: "Get in touch",
//     href: "#contact",
//   },
//   {
//     id: 4,
//     eyebrow: "",
//     title: "Precision in every test.\nCare in every step.",
//     subtitle:
//       "Reliable diagnostic services powered by modern technology and a commitment to your well-being.",
//     image: "/images/patho03.webp",
//     cta: "Get in touch",
//     href: "#contact",
//   },
// ];

// export default function HeroCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const activeSlide = slides[currentIndex];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((index) => (index + 1) % slides.length);
//     }, 6500);
//     return () => clearInterval(timer);
//   }, []);

//   const handlePrev = () =>
//     setCurrentIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
//   const handleNext = () =>
//     setCurrentIndex((index) => (index + 1) % slides.length);

//   return (
//     <section
//       id="home"
//       aria-label="Patel Diagnostic Centre introduction"
//       className="relative isolate min-h-[620px] h-[82vh] max-h-[880px] w-full overflow-hidden bg-[#351521]"
//     >
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           aria-hidden={index !== currentIndex}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentIndex
//               ? "z-0 opacity-100"
//               : "pointer-events-none z-0 opacity-0"
//           }`}
//         >
//           <img
//             src={slide.image}
//             alt="Patel Diagnostic Centre"
//             fetchPriority={index === 0 ? "high" : "auto"}
//             loading={index === 0 ? "eager" : "lazy"}
//             decoding="async"
//             className="absolute inset-0 h-full w-full object-cover"
//           />
//         </div>
//       ))}

//       <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#2c111c]/90 via-[#4a1c2d]/72 to-[#7a2e44]/18" />
//       <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2c111c]/55 via-transparent to-[#2c111c]/15" />

//       <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-center px-6 pb-24 pt-28 sm:px-10 lg:px-16">
//         <div className="max-w-[790px] text-left">
//           <div className="mb-7 flex items-center gap-3">
//             <span className="h-px w-11 bg-[#e8a8bc]" />
//             <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f4dce4] sm:text-xs">
//               {activeSlide.eyebrow}
//             </p>
//           </div>

//           <h1
//             key={`title-${activeSlide.id}`}
//             className="whitespace-pre-line text-[clamp(2.8rem,6.4vw,6rem)] font-medium leading-[0.97] tracking-[-0.055em] text-white [text-wrap:balance] drop-shadow-[0_2px_18px_rgba(25,8,15,0.2)]"
//           >
//             {activeSlide.title}
//           </h1>

//           <p
//             key={`subtitle-${activeSlide.id}`}
//             className="mt-6 max-w-[550px] text-base leading-7 text-white/85 sm:text-lg sm:leading-8"
//           >
//             {activeSlide.subtitle}
//           </p>

//           <div className="mt-9 flex flex-wrap items-center gap-5">
//             <a
//               href={activeSlide.href}
//               className="group inline-flex min-h-14 items-center gap-3 bg-[#c6577b] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(42,12,25,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a94365] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
//             >
//               {activeSlide.cta}
//               <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//             </a>
//             <a
//               href="#about"
//               className="inline-flex min-h-14 items-center px-1 text-sm font-medium text-white/90 underline decoration-white/35 underline-offset-[6px] transition hover:decoration-white"
//             >
//               Meet our centre
//             </a>
//           </div>

//           <div className="mt-12 flex items-center gap-4 text-xs tracking-wide text-white/70 sm:mt-16">
//             <span className="font-medium text-white">
//               {String(currentIndex + 1).padStart(2, "0")}
//             </span>
//             <span className="h-px w-12 bg-white/35" />
//             <span>Reliable diagnostics, close to home</span>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-7 right-6 z-20 flex items-center gap-3 sm:bottom-10 sm:right-10 lg:right-16">
//         <div
//           className="mr-2 flex items-center gap-2"
//           aria-label={`Slide ${currentIndex + 1} of ${slides.length}`}
//         >
//           {slides.map((slide, index) => (
//             <button
//               key={slide.id}
//               onClick={() => setCurrentIndex(index)}
//               aria-label={`Show slide ${index + 1}`}
//               aria-current={index === currentIndex ? "true" : undefined}
//               className={`h-[3px] transition-all duration-300 ${
//                 index === currentIndex
//                   ? "w-9 bg-[#e8a8bc]"
//                   : "w-4 bg-white/45 hover:bg-white/80"
//               }`}
//             />
//           ))}
//         </div>
//         <button
//           onClick={handlePrev}
//           aria-label="Previous slide"
//           className="flex h-11 w-11 items-center justify-center border border-white/35 text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
//         >
//           <ChevronLeft className="h-5 w-5" />
//         </button>
//         <button
//           onClick={handleNext}
//           aria-label="Next slide"
//           className="flex h-11 w-11 items-center justify-center border border-white/35 text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
//         >
//           <ChevronRight className="h-5 w-5" />
//         </button>
//       </div>
//     </section>
//   );
// }









// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

// const slides = [
//   {
//     id: 1,
//     eyebrow: "PATEL DIAGNOSTIC CENTRE · SUNDARGARH",
//     title: "A clearer picture\nof your health.",
//     subtitle:
//       "Thoughtful diagnostic care, dependable testing, and results you and your doctor can trust.",
//     image: "/images/patho02.webp",
//     cta: "Explore our services",
//     href: "#services",
//   },
//   {
//     id: 2,
//     eyebrow: "PRECISION WITH A PERSONAL TOUCH",
//     title: "Care begins with\nknowing more.",
//     subtitle:
//       "Modern diagnostic technology meets attentive service—so every step feels clear and reassuring.",
//     image: "/images/path01.webp",
//     cta: "View diagnostics",
//     href: "#services",
//   },
//   {
//     id: 3,
//     eyebrow: "YOUR NEIGHBOURHOOD HEALTH PARTNER",
//     title: "Your health is\nour commitment.",
//     subtitle:
//       "From routine checkups to laboratory investigations, we’re here to support your health journey.",
//     image: "/images/patho03.webp",
//     cta: "Get in touch",
//     href: "#contact",
//   },
//   {
//     id: 4,
//     eyebrow: "",
//     title: "Precision in every test.\nCare in every step.",
//     subtitle:
//       "Reliable diagnostic services powered by modern technology and a commitment to your well-being.",
//     image: "/images/patho03.webp",
//     cta: "Get in touch",
//     href: "#contact",
//   },
// ];

// export default function HeroCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const activeSlide = slides[currentIndex];

//   const [isMobile, setIsMobile] = useState(false);
//   const [reduceMotion, setReduceMotion] = useState(false);

//   useEffect(() => {
//     const mobileQuery = window.matchMedia("(max-width: 767px)");
//     const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

//     const updatePreferences = () => {
//       setIsMobile(mobileQuery.matches);
//       setReduceMotion(motionQuery.matches);
//     };

//     updatePreferences();

//     mobileQuery.addEventListener("change", updatePreferences);
//     motionQuery.addEventListener("change", updatePreferences);

//     return () => {
//       mobileQuery.removeEventListener("change", updatePreferences);
//       motionQuery.removeEventListener("change", updatePreferences);
//     };
//   }, []);

//   // Automatic rotation is disabled on mobile to avoid unnecessary
//   // image downloads and preserve the first slide as the LCP image.
//   useEffect(() => {
//     if (isMobile || reduceMotion) return;

//     const timer = setInterval(() => {
//       setCurrentIndex((index) => (index + 1) % slides.length);
//     }, 6500);

//     return () => clearInterval(timer);
//   }, [isMobile, reduceMotion]);

//   const handlePrev = () => {
//     setCurrentIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((index) => (index + 1) % slides.length);
//   };

//   return (
//     <section
//       id="home"
//       aria-label="Patel Diagnostic Centre introduction"
//       className="relative isolate min-h-[620px] h-[82vh] max-h-[880px] w-full overflow-hidden bg-[#351521]"
//     >
//       {/* Render only the active image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           key={activeSlide.image}
//           src={activeSlide.image}
//           alt="Patel Diagnostic Centre"
//           fetchPriority={currentIndex === 0 ? "high" : "auto"}
//           loading="eager"
//           decoding="async"
//           sizes="100vw"
//           className="absolute inset-0 h-full w-full object-cover"
//         />
//       </div>

//       {/* Gradient overlays */}
//       <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#2c111c]/90 via-[#4a1c2d]/72 to-[#7a2e44]/18" />

//       <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2c111c]/55 via-transparent to-[#2c111c]/15" />

//       {/* Hero content */}
//       <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-center px-6 pb-24 pt-28 sm:px-10 lg:px-16">
//         <div className="max-w-[790px] text-left">
//           {activeSlide.eyebrow && (
//             <div className="mb-7 flex items-center gap-3">
//               <span className="h-px w-11 bg-[#e8a8bc]" />

//               <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f4dce4] sm:text-xs">
//                 {activeSlide.eyebrow}
//               </p>
//             </div>
//           )}

//           <h1
//             key={`title-${activeSlide.id}`}
//             className="whitespace-pre-line text-[clamp(2.8rem,6.4vw,6rem)] font-medium leading-[0.97] tracking-[-0.055em] text-white [text-wrap:balance] drop-shadow-[0_2px_18px_rgba(25,8,15,0.2)]"
//           >
//             {activeSlide.title}
//           </h1>

//           <p
//             key={`subtitle-${activeSlide.id}`}
//             className="mt-6 max-w-[550px] text-base leading-7 text-white/85 sm:text-lg sm:leading-8"
//           >
//             {activeSlide.subtitle}
//           </p>

//           <div className="mt-9 flex flex-wrap items-center gap-5">
//             <a
//               href={activeSlide.href}
//               className="group inline-flex min-h-14 items-center gap-3 bg-[#c6577b] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(42,12,25,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a94365] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
//             >
//               {activeSlide.cta}

//               <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//             </a>

//             <a
//               href="#about"
//               className="inline-flex min-h-14 items-center px-1 text-sm font-medium text-white/90 underline decoration-white/35 underline-offset-[6px] transition hover:decoration-white"
//             >
//               Meet our centre
//             </a>
//           </div>

//           <div className="mt-12 flex items-center gap-4 text-xs tracking-wide text-white/70 sm:mt-16">
//             <span className="font-medium text-white">
//               {String(currentIndex + 1).padStart(2, "0")}
//             </span>

//             <span className="h-px w-12 bg-white/35" />

//             <span>Reliable diagnostics, close to home</span>
//           </div>
//         </div>
//       </div>

//       {/* Carousel controls */}
//       <div className="absolute bottom-7 right-6 z-20 flex items-center gap-3 sm:bottom-10 sm:right-10 lg:right-16">
//         <div
//           className="mr-2 flex items-center gap-2"
//           aria-label={`Slide ${currentIndex + 1} of ${slides.length}`}
//         >
//           {slides.map((slide, index) => (
//             <button
//               key={slide.id}
//               onClick={() => setCurrentIndex(index)}
//               aria-label={`Show slide ${index + 1}`}
//               aria-current={index === currentIndex ? "true" : undefined}
//               className={`h-[3px] transition-all duration-300 ${
//                 index === currentIndex
//                   ? "w-9 bg-[#e8a8bc]"
//                   : "w-4 bg-white/45 hover:bg-white/80"
//               }`}
//             />
//           ))}
//         </div>

//         <button
//           onClick={handlePrev}
//           aria-label="Previous slide"
//           className="flex h-11 w-11 items-center justify-center border border-white/35 text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
//         >
//           <ChevronLeft className="h-5 w-5" />
//         </button>

//         <button
//           onClick={handleNext}
//           aria-label="Next slide"
//           className="flex h-11 w-11 items-center justify-center border border-white/35 text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
//         >
//           <ChevronRight className="h-5 w-5" />
//         </button>
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
    image: "/images/patho02.webp",
    cta: "Explore our services",
    href: "#services",
  },
  {
    id: 2,
    eyebrow: "PRECISION WITH A PERSONAL TOUCH",
    title: "Care begins with\nknowing more.",
    subtitle:
      "Modern diagnostic technology meets attentive service—so every step feels clear and reassuring.",
    image: "/images/patho01.webp",
    cta: "View diagnostics",
    href: "#services",
  },
  {
    id: 3,
    eyebrow: "YOUR NEIGHBOURHOOD HEALTH PARTNER",
    title: "Your health is\nour commitment.",
    subtitle:
      "From routine checkups to laboratory investigations, we’re here to support your health journey.",
    image: "/images/patho03.webp",
    cta: "Get in touch",
    href: "#contact",
  },
  {
    id: 4,
    eyebrow: "",
    title: "Precision in every test.\nCare in every step.",
    subtitle:
      "Reliable diagnostic services powered by modern technology and a commitment to your well-being.",
    image: "/images/patho03.webp",
    cta: "Get in touch",
    href: "#contact",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeSlide = slides[currentIndex];

  // Preload the next slide's image so transitions remain smooth.
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    const nextImage = slides[nextIndex].image;

    const image = new Image();
    image.src = nextImage;
  }, [currentIndex]);

  // Auto-rotate all four slides.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
  };

  const handleNext = () => {
    setCurrentIndex((index) => (index + 1) % slides.length);
  };

  return (
    <section
      id="home"
      aria-label="Patel Diagnostic Centre introduction"
      className="relative isolate min-h-[620px] h-[82vh] max-h-[880px] w-full overflow-hidden bg-[#351521]"
    >
      {/* All four slides stay in the carousel */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          aria-hidden={index !== currentIndex}
          className={`absolute inset-0 transition-opacity ${
            index === currentIndex
              ? "z-0 opacity-100 duration-1000"
              : "pointer-events-none z-0 opacity-0 duration-700"
          }`}
        >
          <img
            src={slide.image}
            alt="Patel Diagnostic Centre"
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#2c111c]/90 via-[#4a1c2d]/72 to-[#7a2e44]/18" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2c111c]/55 via-transparent to-[#2c111c]/15" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-center px-6 pb-24 pt-28 sm:px-10 lg:px-16">
        <div className="max-w-[790px] text-left">
          {activeSlide.eyebrow && (
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-11 bg-[#e8a8bc]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f4dce4] sm:text-xs">
                {activeSlide.eyebrow}
              </p>
            </div>
          )}

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

      {/* Controls */}
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
