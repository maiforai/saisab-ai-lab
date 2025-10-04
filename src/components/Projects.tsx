import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Structured Adversarial Synthesis (SAS)",
      description: "A hierarchical multi-agent framework implementing a deterministic five-act adversarial debate mechanism for generating financial analysis from earnings call transcripts.",
      outcomes: [
        "Demonstrated superiority over single-agent and cooperative baselines through ablation studies",
        "Implemented parallelized intelligence-gathering with specialized agent roles",
        "Achieved top performance in human evaluation metrics at FinNLP-Earnings2Insights"
      ],
      techStack: ["Python", "LangChain", "AutoGen", "PyTorch", "Hugging Face", "Multi-Agent Systems"],
      github: "https://github.com/saisab21",
      paper: "https://aclanthology.org/"
    },
    {
      title: "RAG Framework with Knowledge Conflict Resolution",
      description: "Research on addressing imperfect retrieval augmentation and conflicting information in retrieval-augmented generation systems.",
      outcomes: [
        "Developing methods to handle contradictory information in retrieved contexts",
        "Implementing advanced retrieval strategies for improved system reliability",
        "Creating evaluation benchmarks for RAG system robustness"
      ],
      techStack: ["Python", "LangChain", "LlamaIndex", "FAISS", "Sentence Transformers", "PyTorch"],
      github: "https://github.com/saisab21"
    },
    {
      title: "Hybrid Summarization Framework for Financial News",
      description: "A novel framework integrating BiLSTM and transformer-based approaches for text summarization, applied to interest rate risk prediction in financial markets.",
      outcomes: [
        "Combined sequential information extraction with transformer abstraction",
        "Applied reinforcement learning for model fine-tuning",
        "Curated domain-specific dataset for Indian financial markets"
      ],
      techStack: ["Python", "PyTorch", "Transformers", "BiLSTM", "NLP", "Financial Analysis"],
      github: "https://github.com/saisab21"
    },
    {
      title: "Credit Risk Management Analysis",
      description: "Statistical analysis of credit policies and profitability correlations in Indian public sector banks using econometric modeling.",
      outcomes: [
        "Analyzed credit-to-deposit ratios using CMIE historical data",
        "Identified key correlations between risk management and profitability",
        "Applied statistical modeling techniques for financial analysis"
      ],
      techStack: ["R", "Python", "Scikit-learn", "Statistical Modeling", "Data Visualization"],
      github: "https://github.com/saisab21"
    },
    {
      title: "PAWAMAAN - Smart Air Quality Monitoring",
      description: "IoT-based air quality monitoring platform with edge computing capabilities for campus-wide environmental sensing.",
      outcomes: [
        "Optimized system performance through ESP32C microcontroller implementation",
        "Integrated edge processing using Raspberry Pi nodes",
        "Developed centralized data management architecture"
      ],
      techStack: ["ESP32C", "Raspberry Pi", "IoT", "Python", "Edge Computing"],
      github: "https://github.com/saisab21"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Research Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-border rounded-md p-6 bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">Key Contributions</h4>
                  <ul className="space-y-1.5 text-sm text-foreground/75">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start leading-relaxed">
                        <span className="text-primary mr-2">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded text-xs font-mono hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-3.5 w-3.5" />
                      Repository
                    </a>
                  </Button>
                  {project.paper && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <a href={project.paper} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3.5 w-3.5" />
                        Publication
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

export default Projects;
