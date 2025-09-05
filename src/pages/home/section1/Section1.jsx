import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Circle } from 'lucide-react';
import PulseDot from '../../../components/Dot';

const Section1 = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    "Product Manager Business Analyst",
    "UX Strategist",
    "MVP Builder & AI Integration Lead",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <motion.section
      className="px-8 py-6  md:py-6 text-white flex flex-col justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay:'0.2', ease: 'easeOut' }}
    >
      <div className="flex flex-col md:flex-row justify-between w-full">
        {/* Left Text */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-base leading-tight">
            I'm Murtaza.<br />
            {/* Fixed height container to prevent layout shifts */}
            <div className="h-[3.5rem] md:h-[4rem] flex items-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  className="inline-block"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <ul className="space-y-2 text-lg md:text-sm font-base">
            <li>• 16+ Years in product management, UX design, & business analysis</li>
            <li>• 50+ projects delivered across fintech, healthcare, SaaS, logistics, & martech</li>
          </ul>
        </div>

        {/* Right Contact */}
        <div className="mt-10 md:mt-0 flex flex-col justify-end text-right text-sm md:text-base space-y-3">
          <div className="flex items-center justify-end space-x-2">
            <PulseDot />
            <span>Available for work</span>
          </div>
          <a
            href="mailto:ma@hellorovamo.com"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            ma@hellorovamo.com
          </a>
        </div>

      </div>
    </motion.section>
  );
};

export default Section1;