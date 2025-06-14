
import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const reveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", reveal);
    // To check the scroll position on page load
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);
};

export default useScrollReveal;
