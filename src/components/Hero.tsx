import { ArrowRight, Github, Linkedin, Mail, Download, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "./AnimatedBackground";
import { useState, useEffect } from "react";

const Hero = () => {
  const [achievementIndex, setAchievementIndex] = useState(0);

  const achievements = [
    {
      title: "#1 Win Rate vs Analyst Report",
      description: "FinNLP Shared Task @ EMNLP 2025 | Overall 5th Rank Globally"
    },
    {
      title: "Student Innovation Grant (Rs. 2 Lakhs)",
      description: "AI Fintech Platform Development | DST, GOI Funded"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAchievementIndex((prev) => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [achievements.length]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-background pt-20 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start mb-12">
            {/* Profile Picture */}
            <div className="mx-auto md:mx-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Saisab Sadhu - AI Researcher"
                  className="relative w-[180px] h-[180px] md:w-[200px] md:h-[200px] object-cover rounded-lg shadow-lg border-2 border-border transition-transform group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Main Content */}
            <div>
              {/* Main headline */}
              <h1 className="text-5xl md:text-6xl font-bold mb-3 text-foreground tracking-tight">
                Saisab Sadhu
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-5 tracking-tight">
                AI Researcher & Engineer
              </h2>
              
              {/* Sub-headline */}
              <p className="text-xl md:text-2xl text-foreground/80 mb-2 font-light">
                MS in Data Science & Engineering
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Indian Institute of Science Education and Research, Bhopal
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Research Areas: Multi-Agent Systems, Overcoming Imperfect Retrieval & Knowledge Conflict in RAG, and LLM Explainability
              </p>
            </div>
          </div>

          {/* Key achievements */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Recent Publication</div>
              <div className="text-lg text-foreground font-semibold mb-1">ECIR 2026</div>
              <div className="text-sm text-muted-foreground leading-relaxed">DARE: Dialectical Alignment for Retrieval-Enhanced LLMs</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Achievement</div>
              <div className="relative h-[52px]">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === achievementIndex 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="text-lg text-foreground font-semibold mb-1">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="shadow-md hover:shadow-lg transition-all"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('publications')}
              className="hover:shadow-md transition-all"
            >
              Publications
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="hover:shadow-md transition-all"
            >
              <a href="/Saisab_Sadhu_CV_Short.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Short CV
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="hover:shadow-md transition-all"
            >
              <a href="/Saisab_Sadhu_CV_Full.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Full CV
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
              href="#"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Google Scholar Profile"
            >
              <GraduationCap className="h-5 w-5" />
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
