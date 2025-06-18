import React from 'react';
import { motion } from 'framer-motion';
import { BookMarked, Globe } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

const Publications = () => {
  const nationalPapers = 2;
  const internationalPapers = 7;

  return (
    <section id="publications" className="relative py-16 md:py-24 px-2 md:px-8 overflow-hidden flex items-center min-h-[60vh] w-full">
      {/* Removed section-specific gradient background accent */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-indigo-400 mb-8 md:mb-12 text-center">Publications</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch justify-center">
          {[
            {
              icon: <BookMarked className="w-8 h-8 text-indigo-400 mb-2" />, 
              count: nationalPapers,
              label: 'National Conference Papers',
              delay: 0
            },
            {
              icon: <Globe className="w-8 h-8 text-indigo-400 mb-2" />, 
              count: internationalPapers,
              label: 'International Journals/Conference Papers',
              delay: 0.18
            }
          ].map((card, idx) => (
            <ThreeDCard key={card.label} className="min-h-[140px] md:min-h-[220px] w-full min-w-0">
              {card.icon}
              <p className="text-3xl md:text-5xl font-bold text-indigo-200 mb-2 drop-shadow">{card.count}</p>
              <h3 className="text-lg md:text-xl font-semibold text-indigo-100 text-center font-serif mb-2 drop-shadow">{card.label}</h3>
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

export default Publications; 