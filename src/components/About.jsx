import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
// Example icon imports (replace with your icon library as needed)
import { Heart, BookOpen, Star, Users, Eye } from 'lucide-react';

const aboutItems = [
  {
    icon: <Heart className="w-5 h-5 text-indigo-400" />,
    title: 'Values',
    text: 'Dedication, Sincerity, Punctuality',
  },
  {
    icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
    title: 'Teaching Philosophy',
    text: 'Emphasis on practical exposure, motivation, teamwork, and conceptual clarity.',
  },
  {
    icon: <Star className="w-5 h-5 text-indigo-400" />,
    title: 'Interests',
    text: 'Yoga, Sanskrit, Dance, Painting',
  },
  {
    icon: <Users className="w-5 h-5 text-indigo-400" />,
    title: 'Inspiration',
    text: 'Parents as role models, instilling core values and a strong work ethic.',
  },
  {
    icon: <Eye className="w-5 h-5 text-indigo-400" />,
    title: 'Vision',
    text: 'Empowering students for societal betterment through technology and holistic education.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 px-2 md:px-8 overflow-hidden flex flex-col md:flex-row items-center min-h-[80vh] w-full">
      {/* Removed section-specific gradient background accent */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left: Bio/summary with glass effect */}
        <motion.div
          className="md:w-2/5 w-full flex justify-center items-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="backdrop-blur-xl bg-white/10 border border-indigo-400/20 shadow-2xl rounded-2xl p-6 md:p-10 flex flex-col gap-4 md:gap-6 glassy-card w-full max-w-full">
            <AnimatedHeading as="h2" className="text-left drop-shadow-lg">About Dr. Pradnya Patil</AnimatedHeading>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-left font-medium">
              Passionate educator and researcher dedicated to empowering students through holistic education and technological innovation. Committed to fostering a collaborative, value-driven learning environment that inspires curiosity, creativity, and lifelong growth.
            </p>
          </div>
        </motion.div>
        {/* Right: Grouped info cards with glassmorphism and animated hover */}
        <div className="md:w-3/5 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center justify-center">
          {aboutItems.map((item, idx) => (
            <motion.div
              key={item.title}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-indigo-400/20 shadow-xl transition-all text-left relative overflow-hidden glassy-card group cursor-pointer hover:scale-[1.03] min-h-[140px] md:min-h-[200px] h-full min-w-0 w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
              whileHover={{
                scale: 1.06,
                boxShadow: '0 8px 32px 0 rgba(99,102,241,0.25)',
                backgroundColor: 'rgba(99,102,241,0.10)',
                borderColor: 'rgba(139,92,246,0.4)',
              }}
            >
              {/* Glossy highlight */}
              <span className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-br from-white/40 via-white/10 to-transparent rounded-t-2xl opacity-60 pointer-events-none" />
              <div className="mt-1 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-indigo-200 font-serif mb-1 text-left drop-shadow">{item.title}</h3>
                <p className="text-gray-100 text-sm md:text-base leading-relaxed text-left font-medium">{item.text}</p>
              </div>
              {/* Animated underline on hover */}
              <motion.span
                className="absolute bottom-3 left-6 w-0 h-1 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 opacity-70 group-hover:w-2/3 transition-all duration-500"
                whileHover={{ width: '66%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About; 