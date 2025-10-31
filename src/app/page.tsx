import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import Reasons from "@/components/Reasons";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Advantages from "@/components/Advantages";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="snap-container">

        <section id="hero" className="snap-child">
          <Hero />
        </section>

        <section id="about" className="snap-child">
          <About />
        </section>

        <section id="solutions" className="snap-child">
          <Solutions />
        </section>

        <section id="Advantages" className="snap-child">
          <Advantages />
        </section>

        <section id="howItWorks" className="snap-child">
          <HowItWorks />
        </section>

        <section id="reasons" className="snap-child">
          <Reasons />
        </section>

        <section id="faq" className="snap-child">
          <FAQ />
        </section>

        <section id="cta" className="snap-child">
          <CTA />
        </section>


      </main>
      <Footer />
    </>
  );
}

// <section id="potential" className="snap-child">
//<Potential/>
//<PotentialCharts />
//  </section>
//