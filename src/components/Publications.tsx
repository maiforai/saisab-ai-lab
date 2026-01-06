import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
    {
      status: "Accepted",
      venue: "ECIR 2026",
      fullVenue: "48th European Conference of Information Retrieval",
      title: "DARE: A Dialectical Framework for Adversarial and Evidence-Aware RAG",
      description: [
        "Resolved factual conflicts in RAG via a dialectical cross-examination process; achieved SOTA gains of 77% on FaithEval and 28% on RAMDocs.",
        "Introduced dynamic credibility assessment, a mechanism that infers source reliability from logical resilience to adversarial challenges rather than static weighting."
      ],
      paperLink: "https://aclanthology.org/",
    },
    {
      status: "Published",
      venue: "EMNLP Workshop 2025",
      fullVenue: "Proceedings of The 10th Workshop on FinNLP (EMNLP 2025)",
      title: "Structured Adversarial Synthesis: A Multi-Agent Framework for Generating Persuasive Financial Analysis from Earning Call Transcripts",
      description: [
        "Designed a hierarchical agentic framework modeling investment committee debates to synthesize persuasive financial analysis; demonstrated a 68.75% win rate over cooperative baselines."
      ],
      paperLink: "https://aclanthology.org/",
      sharedTaskLink: "https://sites.google.com/nlg.csie.ntu.edu.tw/finnlp-2025-emnlp/shared-task-finnlp-2025-emnlp?authuser=0"
    },
    {
      status: "Accepted",
      venue: "IJCAI-AACL 2025 Workshop",
      fullVenue: "JustNLP Workshop at IJCAI-AACL 2025",
      title: "Structure-Aware Chunking for Abstractive Summarization of Long Legal Documents",
      description: [
        "Proposed a rhetorically-informed pipeline for ultra-long legal documents; identified the \"Coherence Gap\" trade-off between local phrase accuracy and global narrative flow."
      ],
      paperLink: "https://aclanthology.org/",
    },
    {
      status: "Accepted",
      venue: "AAAI 2026",
      fullVenue: "AAAI 2026 EGSAI Community Activity",
      title: "Hierarchical Pedagogical Oversight: A Multi-Agent Adversarial Framework for Reliable AI Tutoring",
      description: [
        "Operationalized adversarial oversight for reliable AI tutoring; an 8B-parameter model structured via HPO outperformed GPT-4o by 3.3% in Macro F1 on the MRBench dataset."
      ],
      paperLink: "https://aaai.org/",
    }
  ];

  return (
    <section id="publications" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Publications
          </h2>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div 
                key={index}
                className="border-l-4 border-primary pl-6 py-2 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-r-lg hover:bg-card/50 pr-6"
              >
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide rounded">
                      {pub.status}
                    </span>
                    <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded">
                      {pub.venue}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 leading-relaxed">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    <em>{pub.fullVenue}</em>
                  </p>
                </div>

                <div className="space-y-2 mb-5 text-sm text-foreground/85 leading-relaxed">
                  {pub.description.map((desc, i) => (
                    <p key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{desc}</span>
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href={pub.paperLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-3.5 w-3.5" />
                      Paper
                    </a>
                  </Button>
                  {pub.sharedTaskLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={pub.sharedTaskLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-3.5 w-3.5" />
                        Shared Task
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
