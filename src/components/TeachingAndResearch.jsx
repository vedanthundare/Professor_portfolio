import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, Star } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

const TeachingAndResearch = () => {
  const subjectsTaught = [
    'Operating Systems',
    'Distributed Systems',
    'Cloud Computing',
    'Advanced Algorithms',
    'Social Media Analytics',
  ];

  const researchAreas = [
    'Machine Learning',
    'Computer Networks',
    'NLP',
    'Sanskrit & Machine Translation',
    'Rainfall Prediction',
    'Yoga and Wellness',
    'Indian Knowledge Systems',
  ];

  const researchSpecialization = [
    'OS',
    'RPA',
    'App Dev',
    'Religion & Culture',
    'Environment & Sustainability',
  ];

  return (
    <section id="teaching-research" className="relative py-16 md:py-24 px-2 md:px-8 overflow-hidden flex items-center min-h-[70vh] w-full">
      {/* Removed section-specific gradient background accent */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-indigo-400 mb-8 md:mb-12 text-center">Teaching & Research</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-stretch justify-center">
          {[
            {
              icon: <BookOpen className="w-8 h-8 text-indigo-400 mb-2" />, 
              title: 'Subjects Taught', 
              items: subjectsTaught
            },
            {
              icon: <FlaskConical className="w-8 h-8 text-indigo-400 mb-2" />, 
              title: 'Research Areas', 
              items: researchAreas
            },
            {
              icon: <Star className="w-8 h-8 text-indigo-400 mb-2" />, 
              title: 'Research Specialization', 
              items: researchSpecialization
            }
          ].map((card, idx) => (
            <ThreeDCard key={card.title} className="min-h-[160px] md:min-h-[260px] w-full min-w-0">
              {card.icon}
              <h3 className="text-lg md:text-xl font-bold text-indigo-200 font-serif mb-2 text-center drop-shadow">{card.title}</h3>
              <ul className="space-y-2 text-gray-100 text-sm md:text-base text-center font-medium">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
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

export default TeachingAndResearch; 