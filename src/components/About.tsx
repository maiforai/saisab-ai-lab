const About = () => {
  const skills = {
    "Programming & Scripting": ["Python", "R", "C++", "SQL", "LaTeX"],
    "Machine Learning & AI": ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "XGBoost", "LightGBM"],
    "LLMs & Generative AI": [
      "Hugging Face (transformers, PEFT)",
      "RAG Frameworks",
      "Fine-tuning (DPO, LoRA)",
      "Prompt Engineering",
      "LangChain",
      "LlamaIndex",
      "AutoGen"
    ],
    "Core NLP": ["Vector Databases (FAISS)", "NLTK", "spaCy", "Gensim", "Sentence Transformers"]
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              About Me
            </span>
          </h2>

          <div className="space-y-6 text-lg text-foreground/90 mb-16">
            <p>
              I am currently pursuing my MS in Data Science and Engineering at IISER Bhopal, where my research focuses on 
              overcoming imperfect retrieval augmentation and knowledge conflicts in RAG frameworks. My work sits at the 
              intersection of theoretical research and practical application, building systems that push the boundaries of 
              what language models can achieve.
            </p>
            <p>
              Previously, I developed Structured Adversarial Synthesis (SAS), a novel multi-agent framework that generates 
              high-fidelity financial analysis from earnings call transcripts. This work, accepted at the EMNLP Workshop 2025, 
              demonstrates how structured adversarial debate can significantly outperform single-agent and cooperative baselines.
            </p>
            <p>
              My passion lies in solving complex problems at the frontier of AI—whether it's building multi-agent systems for 
              financial analysis, creating hybrid summarization frameworks, or developing RAG architectures that handle knowledge 
              conflicts. I bridge the gap between cutting-edge research and high-impact real-world applications.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary/50 transition-colors"
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
