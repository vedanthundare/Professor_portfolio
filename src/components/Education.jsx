import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

const educationData = [
  {
    degree: 'B.E. (IT)',
    institution: 'Govt. Engineering College, Aurangabad',
    year: '2008',
  },
  {
    degree: 'M.E. (Computer Engg.)',
    institution: 'Terna Engineering College, Mumbai',
    year: '2017',
  },
  {
    degree: 'M.A. in Yogashastra',
    institution: 'Kavi Kulguru Kalidas Sanskrit University, Ramtek',
    year: '',
  },
  {
    degree: 'Ph.D. (Pursuing)',
    institution: 'Computer Engineering, KJSIT, Mumbai',
    year: '',
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-16 md:py-24 px-2 md:px-8 overflow-hidden flex items-center min-h-[70vh] w-full">
      {/* Removed section-specific gradient background accent */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-indigo-400 mb-8 md:mb-12 text-center">Education</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch justify-center">
          {educationData.map((edu, index) => (
            <ThreeDCard key={index} className="min-h-[160px] md:min-h-[220px] w-full min-w-0">
              <GraduationCap className="w-8 md:w-10 h-8 md:h-10 text-indigo-400 flex-shrink-0 mb-2" />
              <div className="flex flex-col items-center justify-center w-full">
                <h3 className="text-lg md:text-xl font-semibold text-indigo-200 font-serif mb-1 text-center drop-shadow">{edu.degree}</h3>
                <p className="text-gray-100 mb-1 text-center font-medium text-sm md:text-base">{edu.institution}</p>
                {edu.year && <p className="text-xs md:text-sm text-indigo-300 font-semibold">{edu.year}</p>}
              </div>
              {/* Animated underline on hover */}
              <motion.span
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 opacity-70 group-hover:w-2/3 transition-all duration-500"
                whileHover={{ width: '66%' }}
                transition={{ duration: 0.4 }}
              />
            </ThreeDCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education; 