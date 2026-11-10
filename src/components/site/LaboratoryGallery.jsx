import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const labImages = [
  {
    src: "/images/laboratoryWide.webp",
    alt: "Inside the diagnostic laboratory",
    label: "Our Laboratory",
  },
  {
    src: "/images/laboratory.webp",
    alt: "Laboratory testing equipment",
    label: "Precision & Care",
  },
  {
    src: "/images/Patel Diagnostic Centre at Night.webp",
    alt: "Patel Diagnostic Centre exterior at night",
    label: "Welcoming Environment",
  },
  {
    src: "/images/reception.webp",
    alt: "Reception area of Patel Diagnostic Centre",
    label: "Reception & Patient Care",
  },
  {
    src: "/images/waiting-area.webp",
    alt: "Waiting area of Patel Diagnostic Centre",
    label: "Comfortable Waiting Area",
  },
  {
    src: "/images/ECG1.webp",
    alt: "ECG machine in use",
    label: "Advanced Diagnostic Equipment",
  },
  {
    src: "/images/ECG2.webp",
    alt: "ECG machine from a different angle",
    label: "Diagnostic Precision",
  },
  {
    src: "/images/Clinic Corner.webp",
    alt: "Clinic corner view",
    label: "Modern Facilities",
  },
];

const LaboratoryGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [remotePressed, setRemotePressed] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const changeScene = (dir) => {
    if (remotePressed) return;

    setDirection(dir === 1 ? "next" : "prev");
    setRemotePressed(true);

    // Change the image immediately so the click always updates the scene.
    setCurrentIndex(
      (prev) => (prev + dir + labImages.length) % labImages.length,
    );
    setAnimationKey((prev) => prev + 1);

    // Release the remote after its press/transition animation.
    window.setTimeout(() => {
      setRemotePressed(false);
    }, 750);
  };

  const currentImage = labImages[currentIndex];

  return (
    <section
      id="laboratory"
      className="relative overflow-hidden bg-[#FAF5F6] py-14 font-sans sm:py-20 md:py-24 lg:py-32"
    >
      <style>{`
        @keyframes slideNext {
          0% {
            opacity: 0;
            transform: perspective(1200px) translateX(40px) rotateY(-5deg) scale(.97);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: perspective(1200px) translateX(0) rotateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes slidePrev {
          0% {
            opacity: 0;
            transform: perspective(1200px) translateX(-40px) rotateY(5deg) scale(.97);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: perspective(1200px) translateX(0) rotateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes remotePress {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }

        .slide-next {
          animation: slideNext 750ms cubic-bezier(.2,.7,.2,1) both;
        }

        .slide-prev {
          animation: slidePrev 750ms cubic-bezier(.2,.7,.2,1) both;
        }

        .remote-press {
          animation: remotePress 180ms ease-in-out;
          transform-box: fill-box;
          transform-origin: center;
        }

        .remote-hit-area {
          cursor: pointer;
          outline: none;
        }

        .remote-hit-area:focus-visible {
          stroke: #C6577B;
          stroke-width: 3;
        }

        @media (prefers-reduced-motion: reduce) {
          .slide-next,
          .slide-prev,
          .remote-press {
            animation-duration: 1ms !important;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#C6577B]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <Reveal>
          <div className="mb-10 max-w-3xl sm:mb-14 md:mb-16">
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 bg-[#C6577B] sm:w-10" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C6577B] sm:text-sm sm:tracking-[0.25em]">
                Inside Our Laboratory
              </span>
              <span className="h-px w-8 bg-[#C6577B]/50 sm:w-10" />
            </div>

            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#7A2E44] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              A closer look at
              <br className="hidden sm:block" />
              <span className="text-[#C6577B]"> care and precision.</span>
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-[#6D5B61] sm:mt-7 sm:text-lg sm:leading-8 md:text-xl lg:text-2xl">
              Explore the spaces where modern technology meets a patient-first
              approach.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1fr)_220px] md:gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Image screen */}
            <div className="min-w-0">
              <div className="relative overflow-hidden rounded-2xl bg-[#2B1720] shadow-[0_25px_80px_rgba(122,46,68,0.15)] sm:rounded-[1.5rem]">
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/10]">
                  <img
                    key={animationKey}
                    src={currentImage.src}
                    alt={currentImage.alt}
                    loading="eager"
                    className={`absolute inset-0 h-full w-full object-cover ${
                      direction === "next" ? "slide-next" : "slide-prev"
                    }`}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#241018]/80 via-transparent to-[#241018]/10" />

                  <div className="absolute bottom-4 left-4 right-4 z-10 sm:bottom-7 sm:left-7 md:bottom-6 md:left-6 lg:bottom-9 lg:left-9">
                    <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-xs sm:tracking-[0.3em]">
                      Patel Diagnostic Centre
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight text-white sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
                      {currentImage.label}
                    </h3>
                  </div>

                  <div className="absolute right-3 top-3 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-medium tracking-wider text-white backdrop-blur-md sm:right-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs">
                    {String(currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(labImages.length).padStart(2, "0")}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 sm:mt-6">
                <p className="text-xs text-[#7A2E44]/60 sm:text-sm">
                  Explore our facilities
                </p>

                <div className="flex gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => changeScene(-1)}
                    disabled={remotePressed}
                    aria-label="Previous image"
                    className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-[#7A2E44]/15 bg-white text-[#7A2E44] transition hover:border-[#C6577B] hover:bg-[#C6577B] hover:text-white disabled:opacity-40 sm:h-12 sm:w-12"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => changeScene(1)}
                    disabled={remotePressed}
                    aria-label="Next image"
                    className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-[#7A2E44]/15 bg-white text-[#7A2E44] transition hover:border-[#C6577B] hover:bg-[#C6577B] hover:text-white disabled:opacity-40 sm:h-12 sm:w-12"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Person and interactive remote */}
            <div className="relative flex flex-col items-center justify-center rounded-2xl border border-[#C6577B]/10 bg-white/70 px-4 py-6 sm:rounded-[2rem] sm:px-6 sm:py-8 md:min-h-[300px] md:px-3 md:py-5 lg:min-h-[400px] lg:px-5 lg:py-8 xl:min-h-[440px]">
              <div className="text-center">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#C6577B] sm:text-xs">
                  Your Personal Tour
                </span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#7A2E44] sm:mt-3 sm:text-xl">
                  Take a look around.
                </h3>
                <p className="mt-2 text-xs leading-5 text-[#6D5B61] sm:text-sm sm:leading-6">
                  Click the remote to change the scene.
                </p>
              </div>

              <div className="relative mx-auto mt-3 w-full max-w-[190px] sm:max-w-[230px] md:max-w-[200px] lg:max-w-[250px]">
                <svg
                  viewBox="0 0 260 220"
                  className="block w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Illustration of a person holding an interactive remote"
                >
                  <ellipse
                    cx="130"
                    cy="202"
                    rx="100"
                    ry="10"
                    fill="#7A2E44"
                    opacity="0.07"
                  />

                  {/* Body */}
                  <path
                    d="M55 200 L62 135 Q68 110 100 108 L130 108 Q160 115 166 145 L170 200 Z"
                    fill="#7A2E44"
                  />
                  <path
                    d="M98 110 L113 145 L130 110"
                    fill="#FAF5F6"
                    opacity="0.9"
                  />

                  {/* Neck and head */}
                  <rect
                    x="103"
                    y="84"
                    width="28"
                    height="32"
                    rx="10"
                    fill="#E8B99E"
                  />
                  <ellipse cx="117" cy="67" rx="39" ry="43" fill="#E8B99E" />

                  {/* Hair and face */}
                  <path
                    d="M78 67 Q70 22 112 20 Q155 15 158 57 L151 44 Q128 40 112 29 Q98 45 79 48 Z"
                    fill="#382329"
                  />
                  <circle cx="103" cy="68" r="2.5" fill="#382329" />
                  <circle cx="130" cy="68" r="2.5" fill="#382329" />
                  <path
                    d="M105 83 Q117 92 130 83"
                    fill="none"
                    stroke="#A75D58"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Arm and hand */}
                  <path
                    d="M145 125 Q168 115 184 100 L197 85"
                    fill="none"
                    stroke="#7A2E44"
                    strokeWidth="22"
                    strokeLinecap="round"
                  />
                  <path
                    d="M187 88 Q194 75 202 80 L207 91 Q213 83 218 91 L221 103 Q219 116 205 119 L192 108 Z"
                    fill="#E8B99E"
                  />

                  {/* Remote body: SVG-native clickable control */}
                  <g
                    className={remotePressed ? "remote-press" : ""}
                    role="button"
                    tabIndex="0"
                    aria-label="Remote: show next laboratory image"
                    onClick={() => changeScene(1)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        changeScene(1);
                      }
                    }}
                    style={{ cursor: remotePressed ? "default" : "pointer" }}
                  >
                    <rect
                      x="197"
                      y="40"
                      width="28"
                      height="68"
                      rx="9"
                      fill="#382329"
                    />
                    <rect
                      x="202"
                      y="46"
                      width="18"
                      height="56"
                      rx="5"
                      fill="#7A2E44"
                    />
                    <circle cx="211" cy="56" r="4" fill="#C6577B" />
                    <circle
                      cx="211"
                      cy="70"
                      r="3"
                      fill="#FAF5F6"
                      opacity="0.7"
                    />
                    <circle
                      cx="211"
                      cy="81"
                      r="3"
                      fill="#FAF5F6"
                      opacity="0.7"
                    />
                    <circle
                      cx="211"
                      cy="92"
                      r="3"
                      fill="#FAF5F6"
                      opacity="0.7"
                    />

                    {/* Larger invisible hit target centered on the remote */}
                    <circle
                      cx="211"
                      cy="74"
                      r="23"
                      fill="transparent"
                      className="remote-hit-area"
                    />
                  </g>
                </svg>
              </div>

              <div className="mt-2 text-center">
                <span className="text-[10px] font-medium tracking-[0.15em] text-[#7A2E44]/50 sm:text-xs">
                  CLICK TO EXPLORE
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 flex items-center justify-center gap-3 sm:mt-20 sm:gap-4">
            <span className="h-px w-8 bg-[#C6577B]/30 sm:w-12" />
            <p className="text-xs font-medium tracking-[0.12em] text-[#7A2E44]/60 sm:text-sm sm:tracking-[0.15em]">
              CARE IN EVERY DETAIL
            </p>
            <span className="h-px w-8 bg-[#C6577B]/30 sm:w-12" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LaboratoryGallery;
