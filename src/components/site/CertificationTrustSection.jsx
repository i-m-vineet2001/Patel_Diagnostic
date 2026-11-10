
// import React from "react";
// import {
//   ArrowUpRight,
//   MapPin,
//   ScanLine,
//   ShieldCheck,
//   Star,
// } from "lucide-react";

// const defaultGoogleReviewUrl =
//   "https://www.google.com/maps/place/PATEL+DIAGNOSTIC+CENTRE/@22.1174091,84.0376858,17z/data=!4m8!3m7!1s0x3a20ed6da1efd2c5:0x685d2f96906a726!8m2!3d22.1174091!4d84.0376858!9m1!1b1!16s%2Fg%2F11ff5dqym1?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D";

// const defaultGoogleMapsUrl =
//   "https://www.google.com/maps/dir//PATEL+DIAGNOSTIC+CENTRE,+428Q%2BX38,+Sundargarh,+Odisha+770001/@22.1174862,84.0273158,3148m/data=!3m1!1e3!4m8!4m7!1m5!1m1!1s0x3a20ed6da1efd2c5:0x685d2f96906a726!2m2!1d84.0376858!2d22.1174091?entry=ttu";

// export default function CertificationTrustSection({
//   // Replace this with the Google Business Profile's official “Get more reviews” link
//   // (usually a g.page/.../review link) for the direct write-review form.
//   googleReviewUrl = defaultGoogleReviewUrl,
//   googleMapsUrl = defaultGoogleMapsUrl,
// }) {
//   return (
//     <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-24">
//       <div className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full bg-[#C6577B]/[0.06] blur-3xl" />
//       <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#7A2E44]/[0.045] blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
//         {/* Stack through tablet widths to prevent the editorial heading from overflowing */}
//         <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
//           <div className="min-w-0 lg:sticky lg:top-28">
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-px w-8 shrink-0 bg-[#C6577B]" />
//               <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A54867] sm:text-xs sm:tracking-[0.24em]">
//                 Quality & assurance
//               </p>
//             </div>

//             <h2 className="max-w-[13ch] font-sans font-semibold text-[clamp(2.35rem,4.6vw,3.8rem)] leading-[1.06] tracking-[-0.045em] text-[#7A2E44]">
//               Care built on{" "}
//               <span className="font-sans font-semibold text-[#C6577B]">
//                 quality standards.
//               </span>
//             </h2>

//             <div className="mt-7 h-px w-20 bg-[#C6577B]/70" />

//             <p className="mt-6 max-w-md text-sm leading-7 text-[#68545B] sm:text-[15px] sm:leading-8">
//               Patel Diagnostic Centre is registered under the ISO 9001:2015
//               Quality Management System. View the certificate, find our centre,
//               or share your experience on Google.
//             </p>

//             <div className="mt-8 inline-flex max-w-full items-center gap-3 rounded-full border border-[#7A2E44]/10 bg-[#FBF5F6] px-4 py-3">
//               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7A2E44] text-white">
//                 <ShieldCheck size={16} strokeWidth={1.7} />
//               </div>
//               <div className="min-w-0">
//                 <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#A54867] sm:tracking-[0.18em]">
//                   Quality management system
//                 </p>
//                 <p className="mt-0.5 text-xs font-semibold text-[#7A2E44]">
//                   ISO 9001:2015
//                 </p>
//               </div>
//             </div>

//             <p className="mt-8 text-[10px] font-semibold tracking-[0.16em] text-[#7A2E44]/70 sm:tracking-[0.2em]">
//               PATEL DIAGNOSTIC CENTRE
//             </p>
//           </div>

//           <div className="min-w-0">
//             <div className="mb-4 flex flex-wrap items-end justify-between gap-4 border-b border-[#7A2E44]/15 pb-4">
//               <div>
//                 <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A54867]">
//                   Registration certificate
//                 </p>
//                 <h3 className="mt-1.5 font-sans text-2xl font-semibold tracking-[-0.03em] text-[#7A2E44] sm:text-3xl">
//                   ISO 9001:2015
//                 </h3>
//               </div>
//               <span className="rounded-full border border-[#7A2E44]/10 bg-[#FBF5F6] px-3 py-1.5 font-mono text-[10px] tracking-wide text-[#7A2E44]/75">
//                 MSC1224911
//               </span>
//             </div>

//             <a
//               href="/images/iso-certificate.png"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Open ISO 9001:2015 certificate in a new tab"
//               className="group relative block overflow-hidden rounded-2xl border border-[#7A2E44]/10 bg-[#FBF5F6] p-3 shadow-[0_20px_60px_-35px_rgba(72,32,43,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_-30px_rgba(72,32,43,0.3)] sm:rounded-3xl sm:p-5"
//             >
//               <div className="overflow-hidden rounded-xl bg-white p-2 sm:p-3">
//                 <img
//                   src="/images/iso-certificate.png"
//                   alt="Patel Diagnostic Centre ISO 9001:2015 Certificate of Registration"
//                   className="mx-auto h-auto max-h-[720px] w-full object-contain"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="flex items-center justify-between gap-3 px-1 pt-4">
//                 <p className="text-xs font-medium text-[#7A2E44]/75">
//                   View certificate
//                 </p>
//                 <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7A2E44] text-white transition-colors group-hover:bg-[#C6577B]">
//                   <ArrowUpRight size={15} />
//                 </span>
//               </div>
//             </a>

//             <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
//               {/* Entire review card is now an active link, including the QR image */}
//               <a
//                 href={googleReviewUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Open Patel Diagnostic Centre on Google to leave a review"
//                 className="group block min-w-0 rounded-2xl border border-[#7A2E44]/10 bg-[#FBF5F6]/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6577B]/30 hover:bg-[#FBF5F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6577B] sm:p-5"
//               >
//                 <div className="flex items-center gap-2 text-[#A54867]">
//                   <Star size={14} />
//                   <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
//                     Google reviews
//                   </p>
//                 </div>
//                 <h4 className="mt-2 font-sans text-base font-semibold tracking-[-0.02em] text-[#7A2E44] sm:text-lg">
//                   Share your experience
//                 </h4>
//                 <p className="mt-1 text-xs leading-5 text-[#68545B]">
//                   Tap here to open Google and leave feedback for our centre.
//                 </p>
//                 <div className="mt-4 flex justify-center rounded-xl border border-[#7A2E44]/[0.06] bg-white p-3">
//                   <img
//                     src="/images/google-review-qr.jpg"
//                     alt="Google review QR code for Patel Diagnostic Centre"
//                     className="h-auto w-full max-w-[220px] transition-transform duration-300 group-hover:scale-[1.015]"
//                     loading="lazy"
//                   />
//                 </div>
//                 <p className="mt-3 flex items-center gap-2 text-[10px] leading-5 text-[#806B72]">
//                   <ScanLine size={13} className="shrink-0 text-[#C6577B]" />
//                   Tap this card or scan the QR code
//                   <ArrowUpRight size={12} className="ml-auto shrink-0" />
//                 </p>
//               </a>

//               <a
//                 href={googleMapsUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Open Patel Diagnostic Centre directions in Google Maps"
//                 className="group block min-w-0 rounded-2xl border border-[#7A2E44]/10 bg-[#FBF5F6]/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6577B]/30 hover:bg-[#FBF5F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6577B] sm:p-5"
//               >
//                 <div className="flex items-center gap-2 text-[#A54867]">
//                   <MapPin size={14} />
//                   <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
//                     Find our centre
//                   </p>
//                 </div>
//                 <h4 className="mt-2 font-sans text-base font-semibold tracking-[-0.02em] text-[#7A2E44] sm:text-lg">
//                   Directions on Google Maps
//                 </h4>
//                 <p className="mt-1 text-xs leading-5 text-[#68545B]">
//                   Open directions to Patel Diagnostic Centre, Sundargarh.
//                 </p>
//                 <div className="mt-4 flex justify-center rounded-xl border border-[#7A2E44]/[0.06] bg-white p-3">
//                   <img
//                     src="/images/google-directions-qr.jpg"
//                     alt="Google Maps directions QR code for Patel Diagnostic Centre"
//                     className="h-auto w-full max-w-[220px] transition-transform duration-300 group-hover:scale-[1.015]"
//                     loading="lazy"
//                   />
//                 </div>
//                 <p className="mt-3 flex items-center gap-2 text-[10px] leading-5 text-[#806B72]">
//                   <ScanLine size={13} className="shrink-0 text-[#C6577B]" />
//                   Tap this card or scan to navigate
//                   <ArrowUpRight size={12} className="ml-auto shrink-0" />
//                 </p>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }











import React from "react";
import {
  ArrowUpRight,
  MapPin,
  ScanLine,
  ShieldCheck,
  Star,
} from "lucide-react";

const defaultGoogleReviewUrl =
  "https://www.google.com/maps/place/PATEL+DIAGNOSTIC+CENTRE/@22.1174091,84.0376858,17z/data=!4m8!3m7!1s0x3a20ed6da1efd2c5:0x685d2f96906a726!8m2!3d22.1174091!4d84.0376858!9m1!1b1!16s%2Fg%2F11ff5dqym1?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D";

const defaultGoogleMapsUrl =
  "https://www.google.com/maps/dir//PATEL+DIAGNOSTIC+CENTRE,+428Q%2BX38,+Sundargarh,+Odisha+770001/@22.1174862,84.0273158,3148m/data=!3m1!1e3!4m8!4m7!1m5!1m1!1s0x3a20ed6da1efd2c5:0x685d2f96906a726!2m2!1d84.0376858!2d22.1174091?entry=ttu";

export default function CertificationTrustSection({
  // Replace this with the Google Business Profile's official “Get more reviews” link
  // (usually a g.page/.../review link) for the direct write-review form.
  googleReviewUrl = defaultGoogleReviewUrl,
  googleMapsUrl = defaultGoogleMapsUrl,
}) {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-24">
      <div className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full bg-[#C6577B]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#7A2E44]/[0.045] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Stack through tablet widths to prevent the editorial heading from overflowing */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="min-w-0 lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-[#C6577B]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A54867] sm:text-xs sm:tracking-[0.24em]">
                Quality & assurance
              </p>
            </div>

            <h2 className="max-w-[13ch] font-sans font-semibold text-[clamp(2.35rem,4.6vw,3.8rem)] leading-[1.06] tracking-[-0.045em] text-[#7A2E44]">
              Care built on{" "}
              <span className="font-sans font-semibold text-[#C6577B]">
                quality standards.
              </span>
            </h2>

            <div className="mt-7 h-px w-20 bg-[#C6577B]/70" />

            <p className="mt-6 max-w-md text-sm leading-7 text-[#68545B] sm:text-[15px] sm:leading-8">
              Patel Diagnostic Centre is registered under the ISO 9001:2015
              Quality Management System. View the certificate, find our centre,
              or share your experience on Google.
            </p>

            <div className="mt-8 inline-flex max-w-full items-center gap-3 rounded-full border border-[#7A2E44]/10 bg-[#FBF5F6] px-4 py-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7A2E44] text-white">
                <ShieldCheck size={16} strokeWidth={1.7} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#A54867] sm:tracking-[0.18em]">
                  Quality management system
                </p>
                <p className="mt-0.5 text-xs font-semibold text-[#7A2E44]">
                  ISO 9001:2015
                </p>
              </div>
            </div>

            {/* GAC / IAF accreditation promotion artwork — blends into the white section */}
            <div className="mt-7 w-full max-w-[460px] overflow-hidden rounded-xl bg-white">
              <img
                src="/images/iaf-gac-accreditation-promo.png"
                alt="GAC accreditation, IAF multilateral recognition, and ISO 9001:2015 certification promotion"
                className="block h-auto w-full object-contain opacity-[0.97] mix-blend-multiply transition-opacity duration-700 ease-out hover:opacity-100"
                loading="lazy"
              />
            </div>

            <p className="mt-8 text-[10px] font-semibold tracking-[0.16em] text-[#7A2E44]/70 sm:tracking-[0.2em]">
              PATEL DIAGNOSTIC CENTRE
            </p>
          </div>

          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-4 border-b border-[#7A2E44]/15 pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A54867]">
                  Registration certificate
                </p>
                <h3 className="mt-1.5 font-sans text-2xl font-semibold tracking-[-0.03em] text-[#7A2E44] sm:text-3xl">
                  ISO 9001:2015
                </h3>
              </div>
              <span className="rounded-full border border-[#7A2E44]/10 bg-[#FBF5F6] px-3 py-1.5 font-mono text-[10px] tracking-wide text-[#7A2E44]/75">
                MSC1224911
              </span>
            </div>

            <a
              href="/images/iso-certificate.png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open ISO 9001:2015 certificate in a new tab"
              className="group relative block overflow-hidden rounded-2xl border border-[#7A2E44]/10 bg-[#FBF5F6] p-3 shadow-[0_20px_60px_-35px_rgba(72,32,43,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_-30px_rgba(72,32,43,0.3)] sm:rounded-3xl sm:p-5"
            >
              <div className="overflow-hidden rounded-xl bg-white p-2 sm:p-3">
                <img
                  src="/images/iso-certificate.png"
                  alt="Patel Diagnostic Centre ISO 9001:2015 Certificate of Registration"
                  className="mx-auto h-auto max-h-[720px] w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-1 pt-4">
                <p className="text-xs font-medium text-[#7A2E44]/75">
                  View certificate
                </p>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7A2E44] text-white transition-colors group-hover:bg-[#C6577B]">
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </a>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {/* Entire review card is now an active link, including the QR image */}
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Patel Diagnostic Centre on Google to leave a review"
                className="group block min-w-0 rounded-2xl border border-[#7A2E44]/10 bg-[#FBF5F6]/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6577B]/30 hover:bg-[#FBF5F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6577B] sm:p-5"
              >
                <div className="flex items-center gap-2 text-[#A54867]">
                  <Star size={14} />
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                    Google reviews
                  </p>
                </div>
                <h4 className="mt-2 font-sans text-base font-semibold tracking-[-0.02em] text-[#7A2E44] sm:text-lg">
                  Share your experience
                </h4>
                <p className="mt-1 text-xs leading-5 text-[#68545B]">
                  Tap here to open Google and leave feedback for our centre.
                </p>
                <div className="mt-4 flex justify-center rounded-xl border border-[#7A2E44]/[0.06] bg-white p-3">
                  <img
                    src="/images/google-review-qr.jpg"
                    alt="Google review QR code for Patel Diagnostic Centre"
                    className="h-auto w-full max-w-[220px] transition-transform duration-300 group-hover:scale-[1.015]"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 flex items-center gap-2 text-[10px] leading-5 text-[#806B72]">
                  <ScanLine size={13} className="shrink-0 text-[#C6577B]" />
                  Tap this card or scan the QR code
                  <ArrowUpRight size={12} className="ml-auto shrink-0" />
                </p>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Patel Diagnostic Centre directions in Google Maps"
                className="group block min-w-0 rounded-2xl border border-[#7A2E44]/10 bg-[#FBF5F6]/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6577B]/30 hover:bg-[#FBF5F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6577B] sm:p-5"
              >
                <div className="flex items-center gap-2 text-[#A54867]">
                  <MapPin size={14} />
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                    Find our centre
                  </p>
                </div>
                <h4 className="mt-2 font-sans text-base font-semibold tracking-[-0.02em] text-[#7A2E44] sm:text-lg">
                  Directions on Google Maps
                </h4>
                <p className="mt-1 text-xs leading-5 text-[#68545B]">
                  Open directions to Patel Diagnostic Centre, Sundargarh.
                </p>
                <div className="mt-4 flex justify-center rounded-xl border border-[#7A2E44]/[0.06] bg-white p-3">
                  <img
                    src="/images/google-directions-qr.jpg"
                    alt="Google Maps directions QR code for Patel Diagnostic Centre"
                    className="h-auto w-full max-w-[220px] transition-transform duration-300 group-hover:scale-[1.015]"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 flex items-center gap-2 text-[10px] leading-5 text-[#806B72]">
                  <ScanLine size={13} className="shrink-0 text-[#C6577B]" />
                  Tap this card or scan to navigate
                  <ArrowUpRight size={12} className="ml-auto shrink-0" />
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
