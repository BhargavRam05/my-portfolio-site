import React from "react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center pt-16 section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <p className="font-mono text-highlight mb-5 reveal">Hi, my name is</p>
          <h1 className="text-4xl md:text-7xl font-bold text-slate-lighter mb-4 reveal">
            Bhargav Ram Buska.
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold text-slate mb-6 reveal">Where others see chaos, I architect clarity in code.

        </h2>
          <p className="text-slate text-lg max-w-xl mb-12 reveal text-justify">I'm a software engineer dedicated to engineering innovative digital solutions. My passion lies in crafting intelligent, interactive tools and scalable user interfaces that transform complex challenges into intuitive experiences.</p>
          <div className="reveal">
            <Button size="lg" className="border-highlight text-highlight bg-transparent hover:bg-highlight/10 border" asChild>
              <a href="#projects">Check out my work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;