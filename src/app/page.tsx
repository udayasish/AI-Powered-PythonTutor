"use client";

import AboutSection from "@/components/AboutSection";
import CallToActionSection from "@/components/CallToActionSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

import { useState } from "react";



export default function Home() {
  const [aiTutor, setAiTutor] = useState<boolean>(false);
 
  return (
    <div className="bg-[#3e82e7]">
      <Navbar />
      <HeroSection aiTutor={aiTutor} setAiTutor={setAiTutor}/>
      <AboutSection />
      <FeaturesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
