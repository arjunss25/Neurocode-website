'use client'

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Marquee from "./Marquee";






const Marqueesetup = () => {
  
    const [isClient, setIsClient] = useState(false);
    const marqueeRef = useRef(null);
  
    useEffect(() => {
      setIsClient(true);
  
      const scrollContainer = document.querySelector('[data-scroll-container]');
      const scroll = scrollContainer?.__locomotiveScroll;
  
      if (scroll) {
        const updateScroll = () => {
          scroll.update();
        };
  
        // Ensure scroll updates properly
        updateScroll();
  
        return () => {
          scroll.off('call', updateScroll);
        };
      }
    }, []);
  
    if (!isClient) {
      return null;
    }
  
    return (
      <div 
        ref={marqueeRef}
        data-scroll 
        data-scroll-section
        data-scroll-speed='0.5' 
        className="w-full py-10 md:py-20 bg-[#8fec16] overflow-x-hidden relative h-[70vh]"
      >
       <Marquee/>
      </div>
  )
}

export default Marqueesetup
