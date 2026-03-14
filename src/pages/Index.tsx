import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import LizardDivider from "@/components/LizardDivider";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
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
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
