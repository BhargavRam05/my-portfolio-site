
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import ScrollToTop from "@/components/ScrollToTop";
import useScrollReveal from "@/hooks/useScrollReveal";

const Index = () => {
  // Initialize scroll reveal
  useScrollReveal();

  return (
    <div className="min-h-screen bg-navy text-slate-light">
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
