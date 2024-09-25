import './Services.css';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Servicestagline = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {

      const runSplit = () => {
        const typeSplit = new SplitType(".split-word", {
          types: "lines, words"
        });

        const words = document.querySelectorAll(".word");
        words.forEach((word) => {
          const lineMask = document.createElement("div");
          lineMask.className = "line-mask";
          word.appendChild(lineMask);
        });

        createAnimation();
      };

      const createAnimation = () => {
        const allMasks = Array.from(document.querySelectorAll(".word .line-mask"));

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".split-word-main",
            start: "top center",
            end: "bottom center",
            scrub: 1 
          }
        });

        tl.to(allMasks, {
          width: "0%",
          duration: 0.5,
          delay: 0.2,
          stagger: 0.1,
          ease: "power2.out",
          onComplete: () => {
            allMasks.forEach(mask => mask.style.display = "none"); // Hide or remove masks after animation
          }
        });
      };

      runSplit();
    }
  }, []); 

  return (
    <div className="w-full h-auto split-word-main lg:h-[60vh] flex items-center justify-center px-5 py-10 lg:px-0 lg:py-0 bg-black text-white">
      <h1 className="text-[2rem] lg:text-[4rem] leading-none text-center split-word">
        We craft visually captivating and thought-provoking <span className="text-[#029acd]">Websites</span> and <span className="text-[#e25b4a]">Mobile</span> apps that engage, motivate, and drive action.
      </h1>
    </div>
  );
}

export default Servicestagline;
