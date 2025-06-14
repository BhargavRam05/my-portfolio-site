
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-navy/90 backdrop-blur-md shadow-md" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-highlight font-bold text-2xl">BR</a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item, i) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="navbar-link text-slate-lighter font-mono text-sm"
                >
                  <span className="text-highlight">0{i+1}.</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="hidden md:flex border-highlight text-highlight hover:bg-highlight/10"
          asChild
        >
          <a href="#contact">Say Hello</a>
        </Button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-highlight"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-navy-light w-full h-full flex flex-col justify-center items-center transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      >
        <nav>
          <ul className="flex flex-col space-y-6 text-center">
            {["About", "Skills", "Projects", "Contact"].map((item, i) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-slate-lighter hover:text-highlight text-lg font-mono"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="text-highlight mb-2">0{i+1}.</div> 
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="mt-12 border-highlight text-highlight hover:bg-highlight/10"
          onClick={() => setIsMobileMenuOpen(false)}
          asChild
        >
          <a href="#contact">Say Hello</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
