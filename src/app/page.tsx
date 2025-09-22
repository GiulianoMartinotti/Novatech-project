import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Contact from "@/components/Contact";
import HowItWorks from "@/components/HowItWorks";
import Projects from "@/components/Projects";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="snap-container">
        
        <section id="hero" className="snap-child">
          <Hero />
        </section>

        <section id="soluciones" className="snap-child">
          <Solutions variant="lift" />
        </section>

        <HowItWorks />
        <Projects />
        <Benefits />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
