import { Trophy, Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Achievements & Recognition
            </span>
          </h2>

          <div className="space-y-6">
            {/* Top achievement */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-primary/50 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Trophy className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Top Performer, FinNLP-Earnings2Insights Shared Task
                  </h3>
                  <p className="text-primary font-semibold mb-4">EMNLP 2025</p>
                  <div className="space-y-3 text-foreground/90">
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong className="text-primary">#1 Rank</strong> on the official 'Win Rate vs 
                        Analyst Report' automatic evaluation metric, with our system's reports being 
                        preferred over those from professional human analysts
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong className="text-primary">5th Place Globally</strong> in the definitive 
                        human evaluation on the primary metric of investment accuracy
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-6 border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a 
                      href="https://sites.google.com/nlg.csie.ntu.edu.tw/finnlp-2025-emnlp/shared-task-finnlp-2025-emnlp?authuser=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Task Overview
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Workshops & Conferences */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      Climate Change AI Summer School
                    </h4>
                    <p className="text-sm text-muted-foreground">Pittsburgh, US (2024)</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Engaged with leading researchers on ML applications for climate science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Hands-on workshops on climate modeling and predictive analytics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      7th Summer School on AI
                    </h4>
                    <p className="text-sm text-muted-foreground">IIIT Hyderabad</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Selected for intensive program by Centre for Visual Information Technology (CVIT)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Workshops on computer vision, deep learning, and AI technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
