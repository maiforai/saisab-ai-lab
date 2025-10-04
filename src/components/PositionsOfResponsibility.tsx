import { Award, Users, Calendar } from "lucide-react";

const PositionsOfResponsibility = () => {
  const positions = [
    {
      title: "Research Assistant",
      organization: "IISER Bhopal",
      period: "2023 - Present",
      responsibilities: [
        "Leading research initiatives in Natural Language Processing and Large Language Models",
        "Mentoring junior researchers in machine learning techniques",
        "Contributing to publications and academic presentations"
      ]
    },
    {
      title: "Teaching Assistant",
      organization: "IISER Bhopal",
      period: "2023 - 2024",
      responsibilities: [
        "Assisted in teaching Data Science and Machine Learning courses",
        "Conducted tutorial sessions and lab demonstrations",
        "Evaluated student assignments and projects"
      ]
    },
    {
      title: "Student Coordinator",
      organization: "Department of Data Science",
      period: "2022 - 2023",
      responsibilities: [
        "Organized departmental events and workshops",
        "Coordinated between students and faculty",
        "Managed academic and extracurricular activities"
      ]
    }
  ];

  return (
    <section id="positions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
            Positions of Responsibility
          </h2>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-1">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        <span>{position.organization}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{position.period}</span>
                    </div>
                  </div>
                  <Award className="w-6 h-6 text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>

                <ul className="space-y-2">
                  {position.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositionsOfResponsibility;
