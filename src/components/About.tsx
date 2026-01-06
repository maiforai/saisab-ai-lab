const About = () => {
  const skills = {
    "Languages": ["Python (PyTorch, TensorFlow, Scikit-learn, etc)", "C", "R", "MATLAB", "HTML", "Javascript"],
    "Deep Learning & NLP": ["Hugging Face (Transformers, PEFT)", "NLTK", "Gensim", "spaCy", "stanza"],
    "GenAI & Research": ["Multi-Agent Systems (AutoGen)", "DPO", "LoRA/QLoRA", "G-Eval"],
    "Dev Tools": ["Bash", "Git", "VS Code", "Jupyter", "Docker", "SLURM", "Kubernetes"]
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            About
          </h2>

          <div className="space-y-5 text-base text-foreground/85 mb-14 leading-relaxed">
            <p>
              I am currently pursuing my MS in Data Science and Engineering at IISER Bhopal, where my research focuses on 
              architecting dialectical AI systems—models that arrive at truth through adversarial debate. I believe that by 
              externalizing the reasoning process into structured cross-examination between agents, we can achieve not only 
              higher accuracy but also inherent explainability.
            </p>
            <p>
              My Master's thesis work on DARE (Dialectical Adversarial RAG Engine), accepted at ECIR 2026, introduces a 
              "Devil's Advocate" agent to subject claims to rigorous scrutiny, demonstrating that dynamic adversarial 
              credibility assessment could improve factual consistency by 77%. I further explored this intersection of 
              performance and transparency in Structured Adversarial Synthesis (SAS), published at the EMNLP 2025 Workshop.
            </p>
            <p>
              I am deeply committed to the societal implications of AI, as reflected in my research on gender differentials 
              in STEM at IIT Delhi and my work on Legal NLP (accepted at IJCAI-AACL 2025). My research interests lie in 
              advancing adversarial frameworks as a "safety and explainability layer" for foundational models.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-foreground">Technical Expertise</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-background border border-border rounded text-sm text-foreground hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
