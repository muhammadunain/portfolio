import React from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';
import PulseDot from '../../../components/Dot';

const Section1 = () => {
  return (
    <motion.section
      className="px-4 py-6 md:px-16 md:py-6 text-white flex flex-col justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay:'0.2', ease: 'easeOut' }}
    >
      <div className="flex flex-col md:flex-row justify-between w-full">
        {/* Left Text */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-base leading-tight">
            I’m Murtaza.<br />
            Product Designer.<br />
            No-Code Expert.
          </h1>

          <ul className="space-y-2 text-lg md:text-sm font-base">
            <li>• 13+ Years in Product Design</li>
            <li>• Webflow & Framer Partner</li>
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
