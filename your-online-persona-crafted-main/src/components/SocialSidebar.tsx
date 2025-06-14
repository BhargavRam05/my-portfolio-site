
import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const SocialSidebar = () => {
  return (
    <>
      {/* Left sidebar */}
      <div className="fixed bottom-0 left-6 md:left-8 hidden lg:block z-10">
        <div className="flex flex-col items-center space-y-6">
          <a
            href="https://github.com/BhargavRam05"
            aria-label="GitHub"
            className="text-slate hover:text-highlight hover:-translate-y-1 transition-all duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/bhargav-ram-buska-2986701b3/"
            aria-label="LinkedIn"
            className="text-slate hover:text-highlight hover:-translate-y-1 transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-slate hover:text-highlight hover:-translate-y-1 transition-all duration-300"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:bhargavram70930@gmail.com"
            aria-label="Email"
            className="text-slate hover:text-highlight hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={20} />
          </a>
          <div className="h-24 w-px bg-slate-light mt-4"></div>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="fixed bottom-0 right-6 md:right-8 hidden lg:block z-10">
        <div className="flex flex-col items-center">
          <a
            href="mailto:contact@example.com"
            className="font-mono text-slate vertical-text hover:text-highlight hover:-translate-y-1 transition-all duration-300"
            style={{ writingMode: "vertical-rl" }}
          >
            contact@example.com
          </a>
          <div className="h-24 w-px bg-slate-light mt-4"></div>
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;
