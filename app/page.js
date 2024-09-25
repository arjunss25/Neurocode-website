'use client';

import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Showreelsec from "./components/Showreelsec";
import Featured from "./components/Featured";
import Subcompanies from "./components/Subcompanies";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
import Whatwearedoing from "./components/Whatwearedoing";
import FAQ from "./components/FAQ";

const Page = () => {  // Changed 'page' to 'Page'
  const scrollContainerRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    const initLocomotiveScroll = () => {
      if (window.innerWidth >= 1024 && !locomotiveScrollRef.current) {
        import('locomotive-scroll').then((locomotiveModule) => {
          locomotiveScrollRef.current = new locomotiveModule.default({
            el: scrollContainerRef.current,
            smooth: true,
          });
        });
      }
    };

    const destroyLocomotiveScroll = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        destroyLocomotiveScroll();
      } else {
        initLocomotiveScroll();
      }
    };

    // Scroll to top on refresh
    window.scrollTo(0, 0);

    // Initialize Locomotive Scroll if on desktop
    if (window.innerWidth >= 1024) {
      initLocomotiveScroll();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      destroyLocomotiveScroll();
    };
  }, []);

  useEffect(() => {
    if (locomotiveScrollRef.current) {
      setTimeout(() => {
        locomotiveScrollRef.current.update();
      }, 500);
    }
  });

  return (
    <div ref={scrollContainerRef} data-scroll-container>
      <Navbar />
      <Landingpage />
      {/* <Marquee /> */}
      <About />
      <Showreelsec />
      <Featured />
      <Whatwearedoing />
      <FAQ />
      <Subcompanies />
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
