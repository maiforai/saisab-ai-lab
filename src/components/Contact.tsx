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
            <div className="bg-card border border-border rounded-md p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <Mail className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1 text-sm">Primary Email</h3>
              <a href="mailto:saisab21@iiserb.ac.in" className="text-sm text-muted-foreground hover:text-primary">
                saisab21@iiserb.ac.in
              </a>
            </div>

            <div className="bg-card border border-border rounded-md p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <Mail className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1 text-sm">Secondary Email</h3>
              <a href="mailto:sadhusaisab@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
                sadhusaisab@gmail.com
              </a>
            </div>

            <div className="bg-card border border-border rounded-md p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
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

            <div className="bg-card border border-border rounded-md p-5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
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
          <div className="bg-muted/50 border border-border rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-3">Curriculum Vitae</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Download my CV for detailed information about my research, publications, and experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                asChild
                className="shadow-md hover:shadow-lg transition-all"
              >
                <a href="/Saisab_Sadhu_CV_Short.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Short CV
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="hover:shadow-md transition-all"
              >
                <a href="/Saisab_Sadhu_CV_Full.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Full CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
