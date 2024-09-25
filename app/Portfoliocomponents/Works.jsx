import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

const WorkCard = ({ imageUrl }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="m-4"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={imageUrl}
        alt="Work item"
        className="w-full  object-cover rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </motion.div>
  );
};

const Works = ({ images }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <div className="w-full min-h-screen p-8">
      <h2 className="text-[4rem] md:text-[5rem] leading-none mb-8">Our Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <WorkCard key={index} imageUrl={image} />
        ))}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Works), { ssr: false });