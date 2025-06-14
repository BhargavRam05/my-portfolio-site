
import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-navy">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/BhargavRam05"
              aria-label="GitHub"
              className="text-slate hover:text-highlight transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/bhargav-ram-buska-2986701b3/"
              aria-label="LinkedIn"
              className="text-slate hover:text-highlight transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-slate hover:text-highlight transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:bhargavram70930@gmail.com"
              aria-label="Email"
              className="text-slate hover:text-highlight transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-sm text-slate">
            <p>Designed & Built by Bhargav Ram Buska</p>
            <p>© {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
