import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Researcher (MS Thesis)",
      organization: "BDS Lab, IISER Bhopal",
      location: "Bhopal, India",
      period: "May 2025 - Present",
      supervisors: "PI - Dr. Tanmoy Basu | Co-PI - Dr. Biswajit Patra",
      highlights: [
        "Developed Structured Adversarial Synthesis (SAS), a novel hierarchical multi-agent framework for financial analysis",
        "Engineered a parallelized intelligence-gathering phase where specialist agents ground analysis in verifiable market data"
      ]
    },
    {
      title: "Undergraduate Researcher (BS Thesis)",
      organization: "BDS Lab, IISER Bhopal",
      location: "Bhopal, India",
      period: "Jan 2025 - Apr 2025",
      supervisors: "PI - Dr. Tanmoy Basu | Co-PI - Dr. Biswajit Patra",
      highlights: [
        "Developed NLP-based news-sentiment framework to quantify Interest Rate Risk",
        "Implemented hybrid text summarization framework integrating BiLSTM and transformer-based abstraction",
        "Curated open-source financial news dataset tailored to Indian markets"
      ]
    },
    {
      title: "Research Intern",
      organization: "School of Public Policy, IIT Delhi",
      location: "New Delhi, India",
      period: "May 2024 - July 2024",
      supervisors: "Guide - Dr. Nandana Sengupta, Dr. Ravinder Kaur and Dr. Sangeeta Kohli",
      highlights: [
        "Analyzed 2000+ IIT faculty profiles through IRINS data, identifying key publication and career patterns",
        "Discovered 12% differential in negative marking impact between genders in high-stakes examinations",
        "Researched the viability and impact of the 20% supernumerary quota for women at IITs"
      ]
    },
    {
      title: "Research Intern",
      organization: "I-Lab, IISER Bhopal",
      location: "Bhopal, India",
      period: "May 2023 - July 2023",
      supervisors: "Guide - Dr. Mitradip Bhattacharjee (Senior Member, IEEE)",
      highlights: [
        "Worked on PDMS/PEDOT:PSS-based pressure sensors using SLA 3D-printed molds",
        "Created multiple sensor prototypes through iterative design"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Experience
            </span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mt-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.organization}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{exp.location}</p>
                    <p className="text-sm text-primary/80 mb-4 font-mono">{exp.supervisors}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-foreground/90">
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
