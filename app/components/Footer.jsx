import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const text = "neurocode.";
  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-full h-auto lg:h-screen bg-black px-5 lg:px-20 pt-10 lg:pt-20 pb-0 flex flex-col justify-between">
      {/* top-section */}
      <div className="top-sec w-full h-auto lg:h-[30vh] flex lg:flex-row flex-col">
        <div className="left-sec w-full lg:w-1/2 h-full">
        <h1 className="text-[3rem] text-white leading-none">Relax. We&apos;ve got you.</h1>
          <div className="start flex gap-3 items-center mt-8 lg-mt-0">
            <Link href="/contact" className="px-3 md:px-4 py-1 md:py-2 border-2 rounded-full border-white text-white font-light">
              Start the project
            </Link>
            <Link href="/contact" className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-white flex items-center justify-center text-white">
              <GoArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="right-sec w-full lg:w-1/2 h-full flex justify-end mt-5 lg:mt-0">
          <div className="w-full lg:w-1/2 flex justify-start lg:justify-center">
            <div className="links text-white flex flex-col gap-3 text-[2rem] leading-none">
              <Link href="/" className="text-[1.5rem] font-medium flex gap-2 items-center">Home</Link>
              <Link href="/about" className="text-[1.5rem] font-medium flex gap-2 items-center">About</Link>
              <Link href="/services" className="text-[1.5rem] font-medium flex gap-2 items-center">Services</Link>
              <Link href="/portfolio" className="text-[1.5rem] font-medium flex gap-2 items-center">Portfolio</Link>
              <Link href="/careers" className="text-[1.5rem] font-medium flex gap-2 items-center">Careers</Link>
              <Link href="/contact" className="text-[1.5rem] font-medium flex gap-2 items-center">Contact us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* bottom-section */}
      <div className="bottom-sec w-full h-auto lg:h-[15vh] flex items-center leading-none justify-center items-end mt-10 lg:mt-0 py-2">
        <motion.h2
          ref={ref}
          className="text-white text-[3.5rem] lg:text-[15rem] flex overflow-hidden"
        >
          {isMounted &&
            text.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate={controls}
                custom={index}
              >
                {letter}
              </motion.span>
            ))}
        </motion.h2>
      </div>

      <div className="bottom-box w-full h-[20vh] border-t-[2px] border-zinc-200 flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-5">
        <h3 className="text-white w-[90%] lg:w-full text-center lg:text-left">Copyright © Neurocode International Pvt Ltd</h3>
        <div className="flex gap-5">
          <h3 className="text-white">Instagram</h3>
          <h3 className="text-white">LinkedIn</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;