'use client'

import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Showreelsec from "./components/Showreelsec";
import Featured from "./components/Featured";
import Subcompanies from "./components/Subcompanies";
import Footer from "./components/Footer";

export default function Home() {
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('locomotive-scroll').then((locomotiveModule) => {
        const scroll = new locomotiveModule.default({
          el: scrollContainerRef.current,
          smooth: true,
          // other options...
        });

        setLocomotiveScroll(scroll);

        return () => {
          if (scroll) scroll.destroy();
        };
      });
    }
  }, []);

  useEffect(() => {
    if (locomotiveScroll) {
      setTimeout(() => {
        if (locomotiveScroll && typeof locomotiveScroll.update === 'function') {
          locomotiveScroll.update();
        }
      }, 500);
    }
  }, [locomotiveScroll]);

  return (
    <div ref={scrollContainerRef} data-scroll-container>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Showreelsec />
      <Featured />
      <Subcompanies />
      <Footer />
    </div>
  );
}