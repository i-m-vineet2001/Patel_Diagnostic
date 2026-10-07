// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Logo from "./Logo";

// const links = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Packages", href: "#packages" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   // Replace with your actual WhatsApp number (include country code, without '+' or spaces)
//   const phoneNumber = "9777730400";
//   const message = encodeURIComponent(
//     "Hello! I would like to inquire about booking a test at Patel HealthCare & Diagnostics.",
//   );
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

//   return (
//     <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
//       <nav className="glass max-w-6xl mx-auto rounded-2xl border border-rose-100 bg-cream/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] px-5 h-16 flex items-center justify-between">
//         <a href="#home" aria-label="Lumina Diagnostics home">
//           <Logo />
//         </a>

//         {/* Desktop Nav Links */}
//         <div className="hidden md:flex items-center gap-1">
//           {links.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0F172A] rounded-lg hover:bg-slate-100/70 transition-colors"
//             >
//               {l.label}
//             </a>
//           ))}
//         </div>

//         {/* Desktop Actions (WhatsApp Icon + Book a Test) */}
//         <div className="hidden md:flex items-center gap-2.5">
//           <a
//             href={whatsappUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Chat on WhatsApp"
//             className="h-11 w-11 flex items-center justify-center rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white transition-colors shadow-sm"
//           >
//             {/* Real WhatsApp Circular Logo SVG */}
//             <svg
//               className="w-6 h-6 fill-current"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m0 1.79c2.19 0 4.25.85 5.8 2.39 3.11 3.11 3.11 8.18 0 11.29-1.55 1.55-3.61 2.39-5.8 2.39-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.03.8.81-2.95-.19-.31A8.09 8.09 0 0 1 3.84 11.9c0-4.51 3.67-8.18 8.2-8.18m4.49 10.45c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.66.81-.81.98-.15.17-.31.19-.56.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.52.11-.11.25-.28.38-.42.13-.14.17-.23.25-.38.08-.15.04-.28-.02-.4-.06-.13-.57-1.38-.79-1.89-.21-.49-.43-.42-.59-.43h-.5c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.02 2.59.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
//             </svg>
//           </a>
//           <a
//             href="#contact"
//             className="h-11 inline-flex items-center px-5 rounded-xl bg-[#C6577B] text-white text-sm font-semibold hover:bg-[#dd6a8e] transition-colors"
//           >
//             Book a Test
//           </a>
//         </div>

//         {/* Mobile Menu Trigger */}
//         <button
//           className="md:hidden h-11 w-11 flex items-center justify-center rounded-lg text-[#0F172A]"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//         >
//           {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//         </button>
//       </nav>

//       {/* Mobile Menu Dropdown */}
//       {open && (
//         <div className="glass md:hidden max-w-6xl mx-auto mt-2 rounded-2xl border border-white/80 shadow-lg p-3 flex flex-col">
//           {links.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               onClick={() => setOpen(false)}
//               className="px-4 py-3 text-base font-medium text-slate-700 rounded-lg hover:bg-slate-100"
//             >
//               {l.label}
//             </a>
//           ))}
//           <div className="mt-2 flex items-center gap-2">
//             <a
//               href={whatsappUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={() => setOpen(false)}
//               aria-label="Chat on WhatsApp"
//               className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm shrink-0"
//             >
//               <svg
//                 className="w-6 h-6 fill-current"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m0 1.79c2.19 0 4.25.85 5.8 2.39 3.11 3.11 3.11 8.18 0 11.29-1.55 1.55-3.61 2.39-5.8 2.39-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.03.8.81-2.95-.19-.31A8.09 8.09 0 0 1 3.84 11.9c0-4.51 3.67-8.18 8.2-8.18m4.49 10.45c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.66.81-.81.98-.15.17-.31.19-.56.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.52.11-.11.25-.28.38-.42.13-.14.17-.23.25-.38.08-.15.04-.28-.02-.4-.06-.13-.57-1.38-.79-1.89-.21-.49-.43-.42-.59-.43h-.5c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.02 2.59.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
//               </svg>
//             </a>
//             <a
//               href="#contact"
//               onClick={() => setOpen(false)}
//               className="h-12 flex-1 flex items-center justify-center rounded-xl bg-[#2563EB] text-white font-semibold"
//             >
//               Book a Test
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const phoneNumber = "9777730400";
  const message = encodeURIComponent(
    "Hello! I would like to inquire about booking a test at Patel HealthCare & Diagnostics.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav className="glass max-w-6xl mx-auto rounded-2xl border border-rose-100 bg-cream/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] px-5 h-16 flex items-center justify-between">
        <a href="#home" aria-label="Patel Diagnostics home">
          <Logo />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0F172A] rounded-lg hover:bg-slate-100/70 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions (WhatsApp Icon + Book a Test) */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="h-11 w-11 flex items-center justify-center rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white transition-colors shadow-sm"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m0 1.79c2.19 0 4.25.85 5.8 2.39 3.11 3.11 3.11 8.18 0 11.29-1.55 1.55-3.61 2.39-5.8 2.39-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.03.8.81-2.95-.19-.31A8.09 8.09 0 0 1 3.84 11.9c0-4.51 3.67-8.18 8.2-8.18m4.49 10.45c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.66.81-.81.98-.15.17-.31.19-.56.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.52.11-.11.25-.28.38-.42.13-.14.17-.23.25-.38.08-.15.04-.28-.02-.4-.06-.13-.57-1.38-.79-1.89-.21-.49-.43-.42-.59-.43h-.5c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.02 2.59.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
            </svg>
          </a>
          <a
            href="#contact"
            className="h-11 inline-flex items-center px-5 rounded-xl bg-[#C6577B] text-white text-sm font-semibold hover:bg-[#dd6a8e] transition-colors"
          >
            Book a Test
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden h-11 w-11 flex items-center justify-center rounded-lg text-[#0F172A]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="glass md:hidden max-w-6xl mx-auto mt-2 rounded-2xl border border-white/80 shadow-lg p-3 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-base font-medium text-slate-700 rounded-lg hover:bg-slate-100"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              aria-label="Chat on WhatsApp"
              className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm shrink-0"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m0 1.79c2.19 0 4.25.85 5.8 2.39 3.11 3.11 3.11 8.18 0 11.29-1.55 1.55-3.61 2.39-5.8 2.39-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.03.8.81-2.95-.19-.31A8.09 8.09 0 0 1 3.84 11.9c0-4.51 3.67-8.18 8.2-8.18m4.49 10.45c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.66.81-.81.98-.15.17-.31.19-.56.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.52.11-.11.25-.28.38-.42.13-.14.17-.23.25-.38.08-.15.04-.28-.02-.4-.06-.13-.57-1.38-.79-1.89-.21-.49-.43-.42-.59-.43h-.5c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.02 2.59.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="h-12 flex-1 flex items-center justify-center rounded-xl bg-[#C6577B] text-white font-semibold"
            >
              Book a Test
            </a>
          </div>
        </div>
      )}
    </header>
  );
}