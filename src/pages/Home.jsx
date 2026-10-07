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

export default function Home() {
  const [pkg, setPkg] = useState(null);
  return (
    <div className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages onEnquire={setPkg} />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <InquiryPanel pkg={pkg} onClose={() => setPkg(null)} />
    </div>
  );
}
