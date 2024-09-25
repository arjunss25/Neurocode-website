'use client'


import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Servicesmarquee = () => {

    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }



  return (
    <div className="w-full py-10 bg-[#029acd] overflow-x-hidden ">
      <div className="text border-t-2 border-b-2 border-zinc-300 text-white flex whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[6rem] md:text-[9rem] leading-none font-semibold py-10 px-5"
        >
         Let&apos;s Work Together<span className="text-[#e25b4a]">.</span>
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[6rem] md:text-[9rem] leading-none font-semibold py-10 flex items-center px-5"
        >
          Let&apos;s Work Together<span className="text-[#e25b4a]">.</span>
        </motion.h1>
      </div>
    </div>
  )
}

export default Servicesmarquee
