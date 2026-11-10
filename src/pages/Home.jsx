// import React, { useState } from "react";
// import Navbar from "@/components/site/Navbar";
// import Hero from "@/components/site/Hero";
// import About from "@/components/site/About";
// import Services from "@/components/site/Services";
// import Packages from "@/components/site/Packages";
// import WhyUs from "@/components/site/WhyUs";
// import Testimonials from "@/components/site/GoogleReviews.jsx";
// import Contact from "@/components/site/Contact";
// import Footer from "@/components/site/Footer";
// import InquiryPanel from "@/components/site/InquiryPanel";
// import GalleryAndTrust from "@/components/site/GalleryAndTrust";
// import CertificationTrustSection from "@/components/site/CertificationTrustSection";

// export default function Home() {
//   const [pkg, setPkg] = useState(null);
//   return (
//     <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <GalleryAndTrust />
//         <CertificationTrustSection />
//         <Services />
//         <Packages onEnquire={setPkg} />
//         <WhyUs />
//         <Testimonials />
//         <Contact />
//       </main>
//       <Footer />
//       <InquiryPanel pkg={pkg} onClose={() => setPkg(null)} />
//     </div>
//   );
// }






import React, { useState } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Packages from "@/components/site/Packages";
import WhyUs from "@/components/site/WhyUs";
import Testimonials from "@/components/site/GoogleReviews.jsx";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import InquiryPanel from "@/components/site/InquiryPanel";
import GalleryAndTrust from "@/components/site/LaboratoryGallery";
import CertificationTrustSection from "@/components/site/CertificationTrustSection";

export default function Home() {
  const [pkg, setPkg] = useState(null);
  return (
    <div className="pd-homepage min-h-screen overflow-x-hidden bg-[#FBF7F4]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <GalleryAndTrust />
        <CertificationTrustSection />
        <Services />
        <Packages onEnquire={setPkg} />
        <WhyUs/>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <InquiryPanel pkg={pkg} onClose={() => setPkg(null)} />
    </div>
  );
}
