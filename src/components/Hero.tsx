import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Saisab Sadhu
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            AI Researcher & Engineer
          </h2>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-foreground/80 mb-3">
            MS in Data Science & Engineering, IISER Bhopal
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl">
            Specializing in Large Language Models, Multi-Agent Systems, and Retrieval-Augmented Generation (RAG)
          </p>

          {/* Key achievements */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl">
            <div className="bg-card border border-border rounded-md p-5">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Publication</div>
              <div className="text-foreground font-semibold mb-1">EMNLP Workshop 2025</div>
              <div className="text-sm text-muted-foreground">Structured Adversarial Synthesis for Financial Analysis</div>
            </div>
            <div className="bg-card border border-border rounded-md p-5">
              <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Achievement</div>
              <div className="text-foreground font-semibold mb-1">#1 Rank - FinNLP Shared Task</div>
              <div className="text-sm text-muted-foreground">Win Rate vs Analyst Report Metric</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('publications')}
            >
              Publications
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
            >
              <a href="/Saisab_Sadhu_CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-5 items-center">
            <span className="text-sm text-muted-foreground">Connect:</span>
            <a 
              href="https://github.com/saisab21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/saisab-sadhu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:saisab21@iiserb.ac.in"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
