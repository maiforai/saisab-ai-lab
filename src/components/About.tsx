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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            About
          </h2>

          <div className="space-y-5 text-base text-foreground/85 mb-14 leading-relaxed">
            <p>
              I am currently pursuing my MS in Data Science and Engineering at IISER Bhopal, where my research focuses on 
              overcoming imperfect retrieval augmentation and knowledge conflicts in RAG frameworks. My work explores 
              the intersection of theoretical foundations and practical implementations in natural language processing 
              and large language models.
            </p>
            <p>
              My recent work on Structured Adversarial Synthesis (SAS) introduces a novel multi-agent framework for 
              generating financial analysis from earnings call transcripts. This research, accepted at the EMNLP Workshop 2025, 
              demonstrates how structured adversarial debate mechanisms can enhance the quality of AI-generated analysis 
              compared to single-agent and cooperative approaches.
            </p>
            <p>
              My research interests lie in advancing the capabilities of language models through multi-agent architectures, 
              retrieval-augmented generation, and hybrid summarization approaches. I aim to develop systems that bridge 
              theoretical rigor with practical applicability in real-world domains.
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
