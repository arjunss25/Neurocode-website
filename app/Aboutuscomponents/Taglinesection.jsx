import './About-sec.css'
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Taglinesection = () => {

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
          ease: "power2.out"
        });
      };
  
      runSplit();
    }
  }, []); 




  return (
    <div className="w-full h-auto split-word-main lg:h-[60vh] flex items-center justify-center px-5 py-10 lg:px-0 lg:py-0 bg-black text-white mb-20">
      <h1 className="text-[2rem] lg:text-[4rem] leading-none split-word">We provide the perfect<br/> blend of flexibility and expertise<br/> in <span className="text-[#029acd]">Modern Web </span>and<span className="text-[#e25b4a]"> Mobile Designs</span>.</h1>
    </div>
  )
}

export default Taglinesection
