import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificatesSection from "../components/CertificatesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const scrollToHash = () => {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const motionDelay = 550;
    const timer = window.setTimeout(scrollToHash, motionDelay);

    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-8">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
