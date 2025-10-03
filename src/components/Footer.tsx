import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-bold text-foreground mb-1">
              Saisab Sadhu
            </h3>
            <p className="text-xs text-muted-foreground">
              AI Researcher & Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5">
            <a
              href="https://github.com/saisab21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/saisab-sadhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:saisab21@iiserb.ac.in"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Saisab Sadhu
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
