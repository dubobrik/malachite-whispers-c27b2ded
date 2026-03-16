import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import LizardDivider from "@/components/LizardDivider";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AmbientAtmosphere from "@/components/AmbientAtmosphere";

const Index = () => {
  return (
    <>
      <AmbientAtmosphere />
      <Header />
      <main>
        <Hero />
        <Approach />
        <LizardDivider />
        <Services />
        <About />
        <LizardDivider />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
