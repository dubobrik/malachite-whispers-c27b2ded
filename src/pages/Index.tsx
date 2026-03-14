import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import LizardDivider from "@/components/LizardDivider";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import AmbientAtmosphere from "@/components/AmbientAtmosphere";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={handleComplete} />}
      </AnimatePresence>
      {!loading && <AmbientAtmosphere />}
      <Header />
      <main>
        <Hero />
        <LizardDivider />
        <Approach />
        <LizardDivider />
        <Services />
        <LizardDivider />
        <About />
        <LizardDivider />
        <Testimonials />
        <LizardDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
