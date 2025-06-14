import React from "react";
import { Card, CardContent } from "@/components/ui/card";
const skillCategories = [{
  title: "Front-end Development",
  skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "React", "Next.js", "Tailwind CSS"]
}, {
  title: "Back-end Development",
  skills: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "RESTful APIs", "Firebase", "PySpark"]
}, {
  title: "Tools & Others",
  skills: ["Git & GitHub", "Jest", "Docker", "CI/CD", "Figma", "AWS", "Linux"]
}];
const Skills = () => {
  return <section id="skills" className="section-padding bg-navy-light">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 heading-numbered reveal" data-number="02">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => <Card key={i} className="border-highlight/20 bg-navy hover:border-highlight/50 transition-all duration-300 reveal">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-slate-lighter">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, j) => <li key={j} className="flex items-start gap-2">
                      <span className="text-highlight mt-1">▹</span>
                      <span className="font-normal text-gray-400">{skill}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Skills;