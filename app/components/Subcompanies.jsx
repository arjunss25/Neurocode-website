import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Subcompanies = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="w-full h-auto lg:h-[70vh] bg-[#f1f1f1] flex lg:flex-row flex-col gap-5 px-5 lg:px-20 items-center py-10 lg:py-0">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        className="card-container w-full lg:w-1/2 h-[50vh]"
      >
        <div className="card w-full h-[50vh] lg:h-full bg-black rounded-xl flex items-center justify-center text-[3rem] p-8 leading-[3rem]">
        <h1 className="text-white">&quot;Innovative <span className="text-[#029acd]">Digital Solutions</span>, Tailored for You.&quot;</h1>
        </div>
      </motion.div>

      <div className="card-container w-full lg:w-1/2 h-auto lg:h-[50vh] flex lg:flex-row flex-col gap-5">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          className="card w-full lg:w-1/2 h-[50vh] lg:h-full bg-white rounded-xl flex items-center justify-center p-8"
        >
          <h1 className="text-[1.8rem] leading-[2rem]">
            &quot;Building the Future, <span className="text-[#e25b4a]">One Line of Code</span> at a Time.&quot;
          </h1>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          className="card w-full lg:w-1/2 h-[50vh] lg:h-full bg-white rounded-xl flex items-center justify-center p-8"
        >
          <h1 className="text-[1.8rem] leading-[2rem]">
            &quot;Crafting Seamless Experiences for <span className="text-[#e25b4a]">Web and Mobile</span>.&quot;
          </h1>

        </motion.div>
      </div>
    </div>
  );
};

export default Subcompanies;