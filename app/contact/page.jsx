'use client'

import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Contactlanding from "../Contactcomponents/Contactlanding";
import Contactinfo from "../Contactcomponents/Contactinfo";
import Footer from "../components/Footer";
import Contactlinks from "../Contactcomponents/Contactlinks";

export default function Contact() {
  const [isClient, setIsClient] = useState(false);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

    const initLocomotiveScroll = async () => {
      if (typeof window !== 'undefined' && window.innerWidth > 768) {
        if (!locomotiveScrollRef.current) {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;
          locomotiveScrollRef.current = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            // Add any other options you need
          });
        }
      } else if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };

    initLocomotiveScroll();

    const handleResize = () => {
      if (window.innerWidth <= 768 && locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      } else if (window.innerWidth > 768 && !locomotiveScrollRef.current) {
        initLocomotiveScroll();
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full h-auto bg-[#f1f1f1]" data-scroll-container>
      <Navbar/>
      <Contactlanding/>
      <Contactinfo/>
      <Contactlinks/>
      <Footer/>
    </div>
  );
}
