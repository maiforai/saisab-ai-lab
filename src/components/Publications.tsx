import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Publications
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6 py-2 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-r-lg hover:bg-card/50 pr-6">
              <div className="mb-4">
                <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide rounded mb-3">
                  Accepted
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 leading-relaxed">
                  Structured Adversarial Synthesis: A Multi-Agent Framework for Generating Persuasive 
                  Financial Analysis from Earning Call Transcripts
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  <em>EMNLP Workshop 2025</em>
                </p>
              </div>

              <div className="space-y-3 mb-5 text-sm text-foreground/85 leading-relaxed">
                <p>
                  This work presents Structured Adversarial Synthesis (SAS), a novel multi-agent framework 
                  that operationalizes a deterministic five-act adversarial debate mechanism to generate 
                  high-fidelity financial analysis from earnings call transcripts.
                </p>
                <p>
                  Through rigorous ablation studies, we empirically validate that the structured adversarial 
                  architecture significantly outperforms both single-agent and cooperative multi-agent baselines, 
                  demonstrating the effectiveness of structured debate in complex reasoning tasks.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://aclanthology.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 h-3.5 w-3.5" />
                    Paper
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://sites.google.com/nlg.csie.ntu.edu.tw/finnlp-2025-emnlp/shared-task-finnlp-2025-emnlp?authuser=0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-3.5 w-3.5" />
                    Shared Task
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
