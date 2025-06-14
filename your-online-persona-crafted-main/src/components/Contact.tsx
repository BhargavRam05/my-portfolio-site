
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-navy-light">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="font-mono text-highlight mb-2 reveal">04. What's Next?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">Get In Touch</h2>
          <p className="text-slate reveal">
            Currently exploring roles across front-end, full stack, and data pipelines. 
            If you're building cool tech or want a crazy resume-matching engine — let's talk!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-slate mb-6">Ready to start a conversation? Reach out directly:</p>
          <a 
            href="mailto:bhargavram70930@gmail.com" 
            className="inline-block text-highlight hover:text-highlight/80 transition-colors text-lg border border-highlight px-8 py-3 rounded hover:bg-highlight/10"
          >
            bhargavram70930@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
