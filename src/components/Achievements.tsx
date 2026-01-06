import { Award, Trophy, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  const achievements = [
    {
      title: "AAAI 2026 EGSAI Selection",
      description: "Selected to present \"Hierarchical Pedagogical Oversight: A Multi-Agent Adversarial Framework for Reliable AI Tutoring\" at AAAI 2026; one of 51 works chosen from global submissions.",
      icon: Trophy
    },
    {
      title: "Top Performer, FinNLP @ EMNLP 2025",
      description: "Ranked first globally on the official 'Win Rate vs Analyst Report' metric; system reports were preferred over professional human analysts.",
      icon: Award,
      link: "https://sites.google.com/nlg.csie.ntu.edu.tw/finnlp-2025-emnlp/shared-task-finnlp-2025-emnlp?authuser=0",
      linkText: "Shared Task Details"
    },
    {
      title: "Student Innovation Grant (Rs. 2 Lakhs)",
      description: "Awarded by IICE (Funded by DST, GOI) to develop an AI fintech platform; demonstrated 68% profit increase in backtesting.",
      icon: Award
    },
    {
      title: "CARE Conference Travel Grant",
      description: "Awarded full registration waiver and travel support (IIT Guwahati) for poster presentation at the Collaborative for Academic Research Excellence Conference.",
      icon: GraduationCap
    }
  ];

  const workshops = [
    {
      title: "FinNLP Workshop at EMNLP 2025",
      location: "Virtual",
      year: "2025",
      description: "Virtually presented \"Structured Adversarial Synthesis\" and participated in shared task discussions at the 10th FinNLP Workshop."
    },
    {
      title: "CARE Conference (Data Science & AI)",
      location: "Guwahati, India",
      year: "2025",
      description: "Presented a poster on Multi-Agent Adversarial RAG at the First Mehta Family Foundation CARE Conference hosted by IIT Guwahati."
    },
    {
      title: "Climate Change AI Summer School",
      location: "Pittsburgh, USA",
      year: "2024",
      description: "Engaged with leading researchers on ML applications for climate science; participated in hands-on workshops on climate modeling."
    },
    {
      title: "7th Summer School on AI (Focus on CV & ML)",
      location: "Hyderabad, India",
      year: "2024",
      description: "Selected for an intensive program organized by the Centre for Visual Information Technology (CVIT) at IIIT Hyderabad."
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Recognition & Achievements
          </h2>

          <div className="space-y-6 mb-12">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="border-l-4 border-primary bg-card border border-border rounded-md p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <achievement.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-foreground/85 leading-relaxed mb-3">
                      {achievement.description}
                    </p>
                    {achievement.link && (
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {achievement.linkText}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Workshops & Conferences */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Workshops & Conferences</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {workshops.map((workshop, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-md p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {workshop.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    {workshop.location} • {workshop.year}
                  </p>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
