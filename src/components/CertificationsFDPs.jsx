import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const certificationsData = [
  'Blockchain – Saraswati College of Engineering',
  'R Programming – A. P. Shah Engg. College + IIT Bombay',
  'Moodle LMS – Shah & Anchor Kutchhi College',
  'Deep Learning & Applications – AICTE-ISTE (Dec 2021)',
];

const CertificationsFDPs = () => {
  return (
    <section id="certifications-fdps" className="py-20 px-4 md:px-8">
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="col-span-12 text-4xl font-serif font-bold text-indigo-400 mb-12 text-center">Certifications & FDPs</h2>
        {certificationsData.map((certification, index) => (
          <motion.div
            key={index}
            className="animated-border col-span-12 md:col-span-6 flex items-center gap-3 bg-gray-900/80 border border-transparent rounded-2xl px-3 md:px-6 py-2 md:py-4 text-xs md:text-base font-medium text-indigo-100 shadow hover:shadow-lg transition mx-auto min-h-[44px] md:min-h-[72px] w-full max-w-full relative min-w-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BadgeCheck className="w-6 h-6 text-indigo-400" />
            <span>{certification}</span>
          </motion.div>
        ))}
        <style jsx>{`
          .animated-border {
            position: relative;
            z-index: 1;
            border-width: 1px !important;
          }
          .animated-border::before {
            content: '';
            position: absolute;
            inset: -1px;
            z-index: -1;
            border-radius: 16px;
            border: 1px solid transparent;
            background: conic-gradient(from var(--angle, 0turn), #381D6A 80%, #E0D1FF 88%, #E0D1FF 92%, #381D6A 100%);
            background-origin: border-box;
            -webkit-mask:
              linear-gradient(black, black) content-box,
              linear-gradient(black, black);
            mask: linear-gradient(black, black),
                  linear-gradient(black, black);
            -webkit-mask-clip: content-box, border-box;
            mask-clip: content-box, border-box;
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            animation: spin-conic 3s linear infinite;
          }
          .animated-border:hover::before {
            animation-play-state: paused;
          }
          @property --angle {
            syntax: "<angle>";
            inherits: true;
            initial-value: 0turn;
          }
          @keyframes spin-conic {
            to {
              --angle: 1turn;
            }
          }
        `}</style>
      </motion.div>
    </section>
  );
};

export default CertificationsFDPs; 