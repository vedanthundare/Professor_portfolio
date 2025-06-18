import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 px-2 md:px-8">
      {/* Removed animated background accent shapes (now handled globally) */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-y-8 md:gap-y-12 w-full">
        <div className="col-span-12 flex flex-col items-start text-left gap-4 md:gap-6 w-full">
          <motion.h1
            className="text-2xl md:text-6xl font-serif font-bold text-indigo-400 drop-shadow mb-2"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Dr. Pradnya Patil
          </motion.h1>

          <motion.h2
            className="text-base md:text-2xl font-sans font-medium text-gray-200 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Assistant Professor, Department of Computer Engineering
          </motion.h2>

          <motion.p
            className="text-sm md:text-lg md:text-xl italic text-gray-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            “Teaching is a continuous cycle of learning, and every student inspired is a step toward a better future.”
          </motion.p>

          {/* Fixed CTA Button */}
          <motion.a
            href="#contact"
            className="inline-block mt-4 px-6 md:px-10 py-2 md:py-3 rounded-full text-sm md:text-white font-bold md:text-lg shadow-xl transition-all relative overflow-hidden border-2 border-transparent group focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            whileHover={{ scale: 1.07, boxShadow: '0 0 24px 4px #a5b4fc' }}
            whileTap={{ scale: 0.98 }}
            style={{
              boxShadow: '0 4px 32px 0 rgba(99,102,241,0.25)',
              background: 'linear-gradient(90deg, rgba(99,102,241,0.95) 0%, rgba(139,92,246,0.85) 50%, rgba(59,130,246,0.95) 100%)',
            }}
          >
            <span className="relative z-20 flex items-center gap-2">
              <svg
                className="w-5 h-5 animate-pulse text-white/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5" />
                <path d="M16 17h6m0 0-2-2m2 2-2 2" />
              </svg>
              <span className="whitespace-nowrap text-white">Let's Connect!</span>
            </span>

            {/* Glossy highlight */}
            <span className="absolute top-0 left-0 w-full h-1/2 bg-white/20 rounded-t-full opacity-60 blur-sm pointer-events-none z-10" />

            {/* Animated border effect */}
            <span className="absolute inset-0 rounded-full border-2 border-indigo-400/40 group-hover:border-indigo-300/80 transition-all duration-300 animate-pulse pointer-events-none z-10" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
