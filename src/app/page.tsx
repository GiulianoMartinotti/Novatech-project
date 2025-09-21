import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
