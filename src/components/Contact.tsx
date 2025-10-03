import { Mail, Github, Linkedin, Download, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Let's Connect
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            I'm always open to discussing research opportunities, collaborations, or exciting projects 
            in AI and NLP. Feel free to reach out!
          </p>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a 
              href="mailto:saisab21@iiserb.ac.in"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
            >
              <Mail className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">Email (Primary)</h3>
              <p className="text-sm text-muted-foreground">saisab21@iiserb.ac.in</p>
            </a>

            <a 
              href="mailto:sadhusaisab@gmail.com"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
            >
              <Mail className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">Email (Secondary)</h3>
              <p className="text-sm text-muted-foreground">sadhusaisab@gmail.com</p>
            </a>

            <a 
              href="https://github.com/saisab21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
            >
              <Github className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground">@saisab21</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/saisab-sadhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
            >
              <Linkedin className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Saisab Sadhu</p>
            </a>
          </div>

          {/* CV Download */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/30 rounded-lg p-8">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Detailed CV</h3>
            <p className="text-muted-foreground mb-6">
              Download my complete curriculum vitae for a comprehensive overview of my experience, 
              publications, and technical skills.
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="/Saisab_Sadhu_CV.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Full CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
