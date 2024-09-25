'use client'

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Marquee = () => {
  const [isClient, setIsClient] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

    const scroll = document.querySelector('[data-scroll-container]')?.__locomotiveScroll;
    
    if (scroll) {
      // Short delay to ensure proper initialization
      const timer = setTimeout(() => {
        scroll.update();
      }, 50);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div 
      ref={marqueeRef}
      // data-scroll 
      // data-scroll-section
      // data-scroll-speed='0.3' 
      className="w-full py-10 md:py-20 bg-[#029acd] overflow-x-hidden "
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 text-white flex whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="marquee-title-home text-[6rem] md:text-[15rem] leading-none font-semibold py-10 px-5"
        >
          NEUROCODE<span className="text-[#e25b4a]">.</span>
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="marquee-title-home text-[6rem] md:text-[15rem] leading-none font-semibold py-10 flex items-center px-5"
        >
          NEUROCODE<span className="text-[#e25b4a]">.</span>
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;