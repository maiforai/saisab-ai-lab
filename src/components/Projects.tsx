import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Structured Adversarial Synthesis (SAS)",
      description: "A novel hierarchical multi-agent framework for generating nuanced and persuasive financial analysis from earnings call transcripts.",
      outcomes: [
        "Outperformed single-agent and cooperative baselines in rigorous ablation studies",
        "Engineered parallelized intelligence-gathering phase with specialist agents",
        "Achieved top performance in FinNLP-Earnings2Insights Shared Task at EMNLP 2025"
      ],
      techStack: ["Python", "LangChain", "AutoGen", "PyTorch", "Hugging Face", "Multi-Agent Systems"],
      github: "https://github.com/saisab21",
      paper: "https://aclanthology.org/"
    },
    {
      title: "RAG Framework with Knowledge Conflict Resolution",
      description: "MS thesis project focused on overcoming imperfect retrieval augmentation and knowledge conflicts in RAG frameworks.",
      outcomes: [
        "Developing novel approaches to handle conflicting information in retrieved contexts",
        "Implementing advanced retrieval strategies for improved accuracy",
        "Creating benchmarks for evaluating RAG system robustness"
      ],
      techStack: ["Python", "LangChain", "LlamaIndex", "FAISS", "Sentence Transformers", "PyTorch"],
      github: "https://github.com/saisab21"
    },
    {
      title: "Hybrid Summarization Framework for Financial News",
      description: "Novel hybrid text summarization framework integrating BiLSTM and transformer-based abstraction for interest rate risk prediction.",
      outcomes: [
        "Integrated BiLSTM for sequential information extraction",
        "Fine-tuned transformers with reinforcement learning",
        "Curated open-source financial news dataset for Indian markets"
      ],
      techStack: ["Python", "PyTorch", "Transformers", "BiLSTM", "NLP", "Financial Analysis"],
      github: "https://github.com/saisab21"
    },
    {
      title: "Credit Risk Management Analysis",
      description: "Statistical modeling of Indian public sector banks to examine correlations between credit policies and profitability metrics.",
      outcomes: [
        "Analyzed credit-to-deposit ratios using historical CMIE portal data",
        "Developed visualizations demonstrating key risk correlations",
        "Applied advanced statistical modeling techniques"
      ],
      techStack: ["R", "Python", "Scikit-learn", "Statistical Modeling", "Data Visualization"],
      github: "https://github.com/saisab21"
    },
    {
      title: "PAWAMAAN - Smart Air Quality Monitoring System",
      description: "Campus-wide IoT air quality monitoring platform with optimized edge processing and centralized data management.",
      outcomes: [
        "Optimized platform performance by replacing Arduino with ESP32C",
        "Integrated edge processing with Raspberry Pi nodes",
        "Implemented centralized data management system"
      ],
      techStack: ["ESP32C", "Raspberry Pi", "IoT", "Python", "Edge Computing"],
      github: "https://github.com/saisab21"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
              >
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Outcomes:</h4>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-mono"
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
                    className="border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.paper && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.paper} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Paper
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
