import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const faqData = [
  {
    question: "What innovative services do you offer?",
    answer: "We push the boundaries of digital innovation with cutting-edge services including AI-driven web development, blockchain integration, IoT app creation, and immersive AR/VR experiences. Our solutions are tailored to propel your business into the future of technology."
  },
  {
    question: "How do you ensure rapid development without compromising quality?",
    answer: "Our agile development process, coupled with state-of-the-art CI/CD pipelines, allows us to deliver high-quality products swiftly. We employ test-driven development and automated QA processes to maintain impeccable standards while adhering to tight timelines."
  },
  {
    question: "What sets your ongoing support apart from others?",
    answer: "Our support goes beyond mere maintenance. We offer proactive performance optimization, real-time monitoring, and continuous innovation updates. Our dedicated team ensures your digital assets evolve with emerging technologies and market trends."
  },
  {
    question: "How do you stay ahead of the curve with emerging technologies?",
    answer: "We have a dedicated R&D team that continuously explores and experiments with emerging technologies. This allows us to seamlessly integrate cutting-edge solutions like quantum computing, edge AI, and advanced data analytics into our development stack."
  },
  {
    question: "Can you elaborate on your approach to creating secure and scalable applications?",
    answer: "Security and scalability are cornerstones of our development philosophy. We implement zero-trust architecture, use advanced encryption protocols, and design cloud-native solutions that can scale infinitely. Our security measures are constantly updated to guard against evolving cyber threats."
  }
];

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6 last:mb-0"
    >
      <motion.button
        className="flex justify-between items-center w-full text-left p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-lg font-bold pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <MinusIcon className="w-6 h-6" />
          ) : (
            <PlusIcon className="w-6 h-6" />
          )}
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="p-4 bg-white text-gray-700 rounded-b-lg shadow-inner">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-[#f1f1f1] overflow-hidden">
      <div className="max-w-4xl mx-auto" ref={containerRef}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;