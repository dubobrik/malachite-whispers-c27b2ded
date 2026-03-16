import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import LizardDivider from "@/components/LizardDivider";
import Services from "@/components/Services";

import ReviewsLink from "@/components/ReviewsLink";
import Contact from "@/components/Contact";
import Donate from "@/components/Donate";
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
        <ReviewsLink />
        <Contact />
        <Donate />
      </main>
      <Footer />
    </>
  );
};

export default Index;
