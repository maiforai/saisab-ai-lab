import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Publications
            </span>
          </h2>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-mono rounded mb-3">
                  ACCEPTED
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Structured Adversarial Synthesis: A Multi-Agent Framework for Generating Persuasive 
                  Financial Analysis from Earning Call Transcripts
                </h3>
                <p className="text-muted-foreground mb-4">
                  EMNLP Workshop 2025
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6 text-foreground/90">
              <p>
                <strong className="text-primary">Research Contribution:</strong> Designed Structured Adversarial 
                Synthesis (SAS), a novel multi-agent framework that operationalizes a deterministic five-act 
                adversarial debate to generate high-fidelity financial analysis.
              </p>
              <p>
                <strong className="text-primary">Key Finding:</strong> Empirically validated the framework's 
                superiority through a rigorous ablation study, demonstrating that the structured adversarial 
                architecture significantly outperforms single-agent and cooperative baselines.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                <a 
                  href="https://aclanthology.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Publication
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                <a 
                  href="https://sites.google.com/nlg.csie.ntu.edu.tw/finnlp-2025-emnlp/shared-task-finnlp-2025-emnlp?authuser=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Task Overview
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
