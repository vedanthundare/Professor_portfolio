import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Rocket } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

const ProjectGuidance = () => {
  const deployedProjects = [
    'Faculty Profile Management System (Institute level)',
    'Virtual Lab for Social Media Analytics',
    'Biometric Attendance System (Yoga Vidya Niketan)',
  ];

  return (
    <section id="project-guidance" className="py-12 md:py-20 px-2 md:px-8">
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="col-span-12 text-2xl md:text-4xl font-serif font-bold text-indigo-400 mb-8 md:mb-12 text-center">Project Guidance</h2>
        <ThreeDCard className="col-span-12 md:col-span-6 min-h-[140px] md:min-h-[220px] w-full min-w-0">
          <Layers className="w-6 h-6 text-indigo-400 mb-2" />
          <h3 className="text-lg md:text-xl font-semibold text-indigo-200 font-serif mb-2">Types of Projects</h3>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            <li>Mini Projects</li>
            <li>Minor Projects</li>
            <li>Major Projects</li>
          </ul>
        </ThreeDCard>
        <ThreeDCard className="col-span-12 md:col-span-6 min-h-[140px] md:min-h-[220px] w-full min-w-0">
          <Rocket className="w-6 h-6 text-indigo-400 mb-2" />
          <h3 className="text-lg md:text-xl font-semibold text-indigo-200 font-serif mb-2">Deployed Projects</h3>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            {deployedProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </ThreeDCard>
      </motion.div>
    </section>
  );
};

export default ProjectGuidance; 