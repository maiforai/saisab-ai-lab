import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Contact
          </h2>
          
          <p className="text-base text-foreground/80 mb-10 leading-relaxed">
            I welcome opportunities to discuss research collaborations, academic positions, or projects 
            in natural language processing and artificial intelligence.
          </p>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="bg-card border border-border rounded-md p-5">
              <Mail className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1 text-sm">Primary Email</h3>
              <a href="mailto:saisab21@iiserb.ac.in" className="text-sm text-muted-foreground hover:text-primary">
                saisab21@iiserb.ac.in
              </a>
            </div>

            <div className="bg-card border border-border rounded-md p-5">
              <Mail className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1 text-sm">Secondary Email</h3>
              <a href="mailto:sadhusaisab@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
                sadhusaisab@gmail.com
              </a>
            </div>

            <div className="bg-card border border-border rounded-md p-5">
              <Github className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1 text-sm">GitHub</h3>
              <a 
                href="https://github.com/saisab21"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-sm text-muted-foreground hover:text-primary"
              >
                github.com/saisab21
              </a>
            </div>

            <div className="bg-card border border-border rounded-md p-5">
              <Linkedin className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1 text-sm">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/saisab-sadhu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                linkedin.com/in/saisab-sadhu
              </a>
            </div>
          </div>

          {/* CV Download */}
          <div className="bg-muted/50 border border-border rounded-md p-8 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-3">Curriculum Vitae</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Download my complete CV for detailed information about my research, publications, and experience.
            </p>
            <Button 
              asChild
            >
              <a href="/Saisab_Sadhu_CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
