import React from "react";
const About = () => {
  return <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 heading-numbered reveal" data-number="01">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 reveal">
            <div className="space-y-4 text-slate">
              <p className="text-justify">Hey, I'm Bhargav.</p>
              
              <p className="text-justify">My journey into tech started with a deep curiosity for how systems work, evolving from tuning dashboards to building end-to-end applications. While exploring data dashboards, resume matchers, and skill engines, I realized my true calling is building solutions that save time and simplify decision-making.
            </p>
              
              <p className="text-justify">Currently, I'm focused on developing front-end dashboards, building scalable, user-friendly interfaces, and exploring new frontiers.
            </p>
              
              <p className="text-justify">When I'm not coding, you'll find me lifting at the gym, soaking up insights on LinkedIn, or exploring new cities with a backpack and no plan.
            </p>
              
              <p>Here are a few technologies I've been working with recently:</p>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 max-w-md mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-highlight">▹</span> 
                  <span className="text-slate-lighter">JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-highlight">▹</span> 
                  <span className="text-slate-lighter">TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-highlight">▹</span> 
                  <span className="text-slate-lighter">Angular</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-highlight">▹</span> 
                  <span className="text-slate-lighter">React</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-highlight">▹</span> 
                  <span className="text-slate-lighter">Python</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-highlight">▹</span> 
                  <span className="text-slate-lighter">Node.js</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative reveal group">
            <div className="relative rounded-md overflow-hidden bg-highlight/20 z-10">
              <div className="absolute inset-0 bg-highlight/20 group-hover:bg-transparent z-20 transition-colors duration-300"></div>
              <img src="/Ram-uploads/d038f940-b2f5-408d-ada8-67f0511601a8.png" alt="Bhargav Ram Buska - Professional headshot" className="w-full h-auto rounded-md grayscale group-hover:grayscale-0 transition duration-300" />
            </div>
            <div className="absolute border-2 border-highlight rounded-md w-full h-full top-4 left-4 -z-0 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;