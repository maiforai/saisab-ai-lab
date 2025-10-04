import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Recognition & Achievements
          </h2>

          <div className="space-y-6">
            {/* Top achievement */}
            <div className="border-l-4 border-primary bg-card border border-border rounded-md p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  FinNLP-Earnings2Insights Shared Task
                </h3>
                <p className="text-sm text-primary font-semibold mb-4">EMNLP 2025</p>
              </div>
              
              <div className="space-y-3 text-sm text-foreground/85 leading-relaxed mb-4">
                <div className="flex items-start">
                  <Award className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p>
                    Ranked <strong>#1</strong> in the 'Win Rate vs Analyst Report' metric, where the system's 
                    generated reports were preferred over professional human analyst reports in automated evaluation
                  </p>
                </div>
                <div className="flex items-start">
                  <Award className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p>
                    Achieved <strong>5th place globally</strong> in human evaluation on the primary investment 
                    accuracy metric among all participating systems
                  </p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm"
                asChild
              >
                <a 
                  href="https://sites.google.com/nlg.csie.ntu.edu.tw/finnlp-2025-emnlp/shared-task-finnlp-2025-emnlp?authuser=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shared Task Details
                </a>
              </Button>
            </div>

            {/* Academic Programs */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Academic Programs</h3>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-md p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-semibold text-foreground mb-1">
                    Climate Change AI Summer School
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3">Pittsburgh, USA • 2024</p>
                  <ul className="space-y-1.5 text-sm text-foreground/75">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Participated in workshops on machine learning applications for climate science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Engaged with researchers on climate modeling and predictive analytics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-md p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                  <h4 className="font-semibold text-foreground mb-1">
                    7th Summer School on AI
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3">IIIT Hyderabad</p>
                  <ul className="space-y-1.5 text-sm text-foreground/75">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Selected for intensive program by Centre for Visual Information Technology (CVIT)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Attended workshops on computer vision, deep learning, and AI technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
