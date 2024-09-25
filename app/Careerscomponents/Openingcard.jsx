import React, { useState, useEffect } from 'react';
import { GoArrowDown, GoArrowUp, GoArrowUpRight } from "react-icons/go";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Openingcard = ({ jobDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <motion.div 
        className="w-full border-black border-b-[2px] overflow-hidden"
        initial={{ height: '15vh' }}
        animate={{ height: isExpanded ? 'auto' : '15vh' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <div className="h-[15vh] flex items-center justify-between px-5 py-2">
          <div className="flex items-center justify-between w-full">
            <h2 className=" text-[1.5rem] lg:text-[2rem] w-[60%] truncate">{jobDetails.title}</h2>
            <h3 className="w-[20%] text-center">{jobDetails.type}</h3>
            <div className="w-[20%] flex justify-end">
              <button 
                onClick={toggleExpand}
                className="p-4 rounded-full bg-zinc-300 flex items-center justify-center text-[1rem]"
              >
                {isExpanded ? <GoArrowUp /> : <GoArrowDown />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="px-5 py-4"
            >
              {['responsibilities', 'requirements', 'benefits', 'skills'].map((section) => (
                <div key={section} className="mb-4">
                  <h3 className="text-xl font-semibold capitalize mb-2">{section}:</h3>
                  <ul className="list-disc pl-5">
                    {jobDetails[section].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="start flex gap-3 items-center">
                <Link
                  href={`/application?title=${encodeURIComponent(jobDetails.title)}`}
                  className="px-3 md:px-4 py-1 md:py-2 border-2 rounded-full border-zinc-500 font-light hover:bg-zinc-100"
                >
                  Apply Now
                </Link>
                <div className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-zinc-500 flex items-center justify-center">
                  <GoArrowUpRight />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Openingcard;
