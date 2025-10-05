import { Award, Users, Calendar } from "lucide-react";

const PositionsOfResponsibility = () => {
  const positions = [
    {
      title: "Secretary, Student Development Council",
      organization: "IISER Bhopal",
      period: "Oct 2023 - Aug 2024",
      responsibilities: [
        "Organized institute-wide initiatives, workshops, and panel discussions to promote student growth"
      ]
    },
    {
      title: "Founder and Lead, Entrepreneurship Cell",
      organization: "IISER Bhopal",
      period: "Dec 2023 - Aug 2024",
      responsibilities: [
        "Fostered a startup culture by hosting networking sessions and speaker events for aspiring entrepreneurs"
      ]
    },
    {
      title: "Institute Placement Coordinator",
      organization: "Center for Career Development, IISER Bhopal",
      period: "Aug 2022 - Oct 2023",
      responsibilities: [
        "Coordinated campus placements and industry outreach; achieved a notable increase in recruiter engagement"
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
