import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import PositionsOfResponsibility from "@/components/PositionsOfResponsibility";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Publications />
        <Experience />
        <Projects />
        <Achievements />
        <PositionsOfResponsibility />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
