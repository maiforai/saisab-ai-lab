import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Researcher (MS Thesis)",
      organization: "BDS Lab, IISER Bhopal",
      location: "Bhopal, India",
      period: "May 2025 - Present",
      supervisors: "PI: Dr. Tanmoy Basu | Co-PI: Dr. Biswajit Patra",
      highlights: [
        "Conducting research on overcoming imperfect retrieval augmentation and knowledge conflicts in RAG frameworks",
        "Developing methods to handle contradictory information in retrieved contexts",
        "Investigating advanced retrieval strategies for improved system reliability"
      ]
    },
    {
      title: "Undergraduate Researcher (BS Thesis)",
      organization: "BDS Lab, IISER Bhopal",
      location: "Bhopal, India",
      period: "Jan 2025 - Apr 2025",
      supervisors: "PI: Dr. Tanmoy Basu | Co-PI: Dr. Biswajit Patra",
      highlights: [
        "Developed novel hybrid text summarization framework integrating BiLSTM and transformer-based abstraction",
        "Applied reinforcement learning for model fine-tuning on financial news analysis",
        "Curated domain-specific dataset for interest rate risk assessment in Indian markets"
      ]
    },
    {
      title: "Research Intern",
      organization: "School of Public Policy, IIT Delhi",
      location: "New Delhi, India",
      period: "May 2024 - July 2024",
      supervisors: "Supervisors: Dr. Nandana Sengupta, Dr. Ravinder Kaur, Dr. Sangeeta Kohli",
      highlights: [
        "Analyzed faculty profiles and publication patterns using IRINS data",
        "Investigated gender differentials in high-stakes examination performance",
        "Researched viability of supernumerary quota policies in technical education"
      ]
    },
    {
      title: "Research Intern",
      organization: "I-Lab, IISER Bhopal",
      location: "Bhopal, India",
      period: "May 2023 - July 2023",
      supervisors: "Supervisor: Dr. Mitradip Bhattacharjee (Senior Member, IEEE)",
      highlights: [
        "Developed PDMS/PEDOT:PSS-based pressure sensors using 3D-printed molds",
        "Conducted iterative design optimization for sensor prototypes"
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
