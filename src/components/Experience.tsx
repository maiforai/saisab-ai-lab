import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Graduate & Undergraduate Researcher",
      organization: "BDS Lab, IISER Bhopal",
      location: "Bhopal, India",
      period: "Jan 2025 - Present",
      supervisors: "PI: Dr. Tanmay Basu | Co-PIs: Dr. Dwaipayan Roy, Dr. Biswajit Patra",
      highlights: [
        "MS Thesis: Investigating mechanisms to overcome imperfect retrieval and resolve knowledge conflicts in RAG. Developed a dialectical engine built upon the structured adversarial framework; operationalizes formal cross-examination to dynamically assess source credibility based on logical resilience, achieving substantial gains over strong baselines.",
        "BS Thesis: Engineered a hybrid extractive–abstractive summarization pipeline achieving strong performance (53.13 ROUGE-1) on CNN/DailyMail; developed a ModernBERT-based Siamese extractive stage using a scaled adaptive margin triplet loss for optimal candidate ranking."
      ]
    },
    {
      title: "Research Intern",
      organization: "School of Public Policy, IIT Delhi",
      location: "New Delhi, India",
      period: "May 2024 - July 2024",
      supervisors: "Guide: Dr. Nandana Sengupta, Dr. Ravinder Kaur, Dr. Sangeeta Kohli",
      highlights: [
        "Analyzed 2000+ faculty profiles (IRINS) to identify a 12% gender differential in negative marking impact; evaluated the socio-economic viability and impact of the 20% supernumerary quota for women at IITs."
      ]
    },
    {
      title: "Research Intern",
      organization: "I-Lab, IISER Bhopal",
      location: "Bhopal, India",
      period: "May 2023 - July 2023",
      supervisors: "Guide: Dr. Mitradip Bhattacharjee",
      highlights: [
        "Engineered PDMS/PEDOT:PSS pressure sensors using SLA 3D-printed molds; optimized sensor head geometry through iterative prototyping to achieve optimal pressure response."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Research Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-4 top-2 w-4 h-4 rounded-full bg-primary border-2 border-background" />

                  <div className="bg-card border border-border rounded-md p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold mt-1 text-sm">
                        <Briefcase className="h-3.5 w-3.5" />
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-xs text-primary/80 mb-4 font-mono">{exp.supervisors}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm text-foreground/80 leading-relaxed">
                          <span className="text-primary mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
