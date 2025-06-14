import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Link } from "lucide-react";

const featuredProjects = [
  {
    title: "Cloud Architect Job Market Dashboard",
    description: "An interactive job analytics platform with resume matching, salary trends, skill match engine, and a clean UI built using React, Tailwind CSS, and Recharts.",
    image: "/Ram-uploads/1ddd5bd2-952c-4c87-b7f7-c43d3b9b1928.png",
    tags: ["React", "Recharts", "Tailwind CSS", "JSON"],
    links: {
      github: "https://github.com/BhargavRam05",
      demo: "https://github.com/BhargavRam05"
    }
  },
  {
    title: "Vertex-Style AI Dashboard Clone",
    description: "A front-end replica of Google's AI playground built with Angular and RxJS with modular UI and real-time filtering.",
    image: "/Ram-uploads/606cef15-9ee9-4e5d-a728-7a4ac6e4a25c.png",
    tags: ["Angular", "RxJS", "TypeScript"],
    links: {
      github: "https://github.com/BhargavRam05",
      demo: "https://github.com/BhargavRam05"
    }
  },
  {
    title: "CodePulse: AI Debugger Assistant",
    description: "Developed a sophisticated debugging layer that fundamentally changes how developers fix code. CodePulse integrates directly with IDEs, intelligently analyzes error messages and logs, and suggests precise, live code fixes. This tool significantly accelerates the debugging process by providing immediate, context-aware solutions directly within your development environment.",
    image: "/Ram-uploads/19f9185c-12b9-4fa5-b042-617abe880957.png",
    tags: ["Python", "VSCode API"],
    links: {
      github: "https://github.com/BhargavRam05",
      demo: "https://github.com/BhargavRam05"
    }
  }
];

const otherProjects = [
  {
    title: "Resume Matcher App",
    description: "A no-BS resume sniping tool — paste a JD, upload your resume, and let it fire back a match score + targeted edits using local parsing and JavaScript logic.",
    tags: ["JavaScript", "JSON", "DOM"],
    links: {
      github: "https://github.com/BhargavRam05",
      demo: "https://github.com/BhargavRam05"
    }
  },
  {
    title: "JobScan XR (Augmented ATS Simulator)",
    description: "Built a mock ATS screening simulator in XR where resumes get scored visually in 3D space based on keyword alignment, skill stacks, and formatting — a futuristic HR playground.",
    tags: ["Three.js", "JavaScript", "JSON"],
    links: {
      github: "https://github.com/BhargavRam05",
      demo: "https://github.com/BhargavRam05"
    }
  },
  {
    title: "Terminal-based Job Filter Sniper",
    description: "A CLI utility that slices through thousands of job listings in seconds, using Python and regex to sniff out ATS matches and ghost job traps.",
    tags: ["Python", "Terminal", "Text Processing"],
    links: {
      github: "https://github.com/BhargavRam05",
      demo: "https://github.com/BhargavRam05"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 heading-numbered reveal" data-number="03">
          Featured Projects
        </h2>
        
        <div className="space-y-32 mb-32">
          {featuredProjects.map((project, i) => (
            <div 
              key={i} 
              className={`grid md:grid-cols-12 gap-6 items-center reveal ${
                i % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className={`md:col-span-7 ${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                <div className="relative group overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-highlight/20 group-hover:bg-transparent z-10 transition-colors duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className={`md:col-span-5 ${i % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                <div className={`text-right ${i % 2 === 0 ? "" : "text-left"}`}>
                  <p className="font-mono text-highlight mb-1">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4 text-slate-lighter">{project.title}</h3>
                </div>
                
                <div className={`relative bg-navy-light p-6 rounded-lg shadow-xl ${
                  i % 2 === 0 ? "md:-mr-16 z-10" : "md:-ml-16 z-10"
                }`}>
                  <p className="text-slate mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, j) => (
                      <span 
                        key={j} 
                        className="font-mono text-xs text-slate-lighter bg-navy px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 justify-end">
                    <a href={project.links.github} className="text-slate-lighter hover:text-highlight transition-colors" aria-label="GitHub repository">
                      <Github size={20} />
                    </a>
                    <a href={project.links.demo} className="text-slate-lighter hover:text-highlight transition-colors" aria-label="Live demo">
                      <Link size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-8 text-center reveal">Other Noteworthy Projects</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, i) => (
            <Card 
              key={i} 
              className="bg-navy-light border-highlight/10 hover:border-highlight/30 hover:translate-y-[-5px] transition-all duration-300 reveal"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-highlight">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={project.links.github} className="text-slate-lighter hover:text-highlight transition-colors" aria-label="GitHub repository">
                      <Github size={18} />
                    </a>
                    <a href={project.links.demo} className="text-slate-lighter hover:text-highlight transition-colors" aria-label="Live demo">
                      <Link size={18} />
                    </a>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2 text-slate-lighter">{project.title}</h4>
                <p className="text-slate text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="font-mono text-xs text-slate-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
