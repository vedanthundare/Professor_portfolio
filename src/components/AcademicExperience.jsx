import React from 'react';
import { motion } from 'framer-motion';

const academicExperienceData = [
  {
    step: 1,
    title: 'Assistant Professor',
    institution: 'KJSIT, Mumbai',
    duration: 'Jan 2020 – Present',
    description: 'Teaching undergraduate and postgraduate courses, guiding projects, and contributing to academic research and curriculum development.'
  },
  {
    step: 2,
    title: 'Faculty',
    institution: 'Saraswati College of Engineering',
    duration: 'Jan 2019 – May 2020',
    description: 'Engaged in teaching, mentoring students, and participating in departmental activities.'
  },
  {
    step: 3,
    title: 'Visiting Faculty',
    institution: 'VJTI, Mumbai',
    duration: 'Aug 2019 – Dec 2019',
    description: 'Delivered lectures and workshops, focusing on specialized engineering topics.'
  },
  {
    step: 4,
    title: 'Faculty',
    institution: 'SIES Graduate School of Engineering',
    duration: 'Jul 2011 – Dec 2011',
    description: 'Taught core engineering subjects and contributed to academic events.'
  },
  {
    step: 5,
    title: 'Faculty',
    institution: 'M. H. Saboo Siddik College',
    duration: 'Jun 2010 – Jul 2011',
    description: 'Handled teaching responsibilities and student guidance.'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.18 },
  }),
};

const AcademicExperience = () => {
  return (
    <section id="academic-experience" className="relative py-16 md:py-24 px-2 md:px-8 overflow-hidden min-h-[70vh] w-full">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-indigo-400 mb-8 md:mb-12 text-center">Academic Experience</h2>
        <div className="relative flex justify-center w-full">
          {/* Timeline vertical line */}
          <div className="timeline-line absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-indigo-400 via-purple-400 to-blue-400 z-0" />
          <ul className="timeline-list w-full flex flex-col gap-0 relative z-10">
            {academicExperienceData.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.li
                  key={idx}
                  className={`timeline-item group flex w-full mb-8 md:mb-16 relative ${isLeft ? 'justify-start' : 'justify-end'}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={idx}
                  variants={cardVariants}
                >
                  {/* Dot */}
                  <span className="timeline-dot absolute left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white/20 border-2 border-indigo-400 z-20 shadow-lg" />
                  {/* Card */}
                  <div
                    className={`timeline-card relative max-w-full md:max-w-[340px] w-full glassy-card px-4 md:px-7 py-5 md:py-6 rounded-2xl shadow-xl border border-indigo-400/20 backdrop-blur-xl bg-white/10 transition-all duration-300 ${isLeft ? 'md:ml-16 md:mr-auto ml-4' : 'md:mr-16 md:ml-auto mr-4'}
                      ${isLeft ? 'origin-left' : 'origin-right'}`}
                  >
                    {/* Animated border lines */}
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                    <h3 className="text-base md:text-lg font-semibold text-indigo-200 font-serif mb-1">{exp.title} - {exp.institution}</h3>
                    <p className="text-indigo-300 text-xs md:text-sm font-medium mb-2">{exp.duration}</p>
                    <p className="text-indigo-100 text-sm md:text-base leading-relaxed">{exp.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
        {/* Custom Timeline CSS */}
        <style>{`
          .timeline-line {
            min-height: ${academicExperienceData.length * 120}px;
          }
          .timeline-list {
            margin-top: 0;
            margin-bottom: 0;
          }
          .timeline-item {
            min-height: 80px;
          }
          .timeline-dot {
            box-shadow: 0 2px 12px 0 rgba(99,102,241,0.18);
          }
          .timeline-card {
            position: relative;
            z-index: 10;
          }
          @media (max-width: 900px) {
            .timeline-card {
              margin-left: 24px !important;
              margin-right: 0 !important;
              width: calc(100vw - 48px) !important;
              max-width: 100vw !important;
            }
            .timeline-dot {
              left: 24px !important;
              transform: none !important;
            }
            .timeline-line {
              left: 32px !important;
              transform: none !important;
            }
          }
          @media (max-width: 700px) {
            .timeline-card {
              margin-left: 12px !important;
              margin-right: 0 !important;
              width: calc(100vw - 24px) !important;
              max-width: 100vw !important;
              padding-left: 12px !important;
              padding-right: 12px !important;
            }
            .timeline-dot {
              left: 12px !important;
              transform: none !important;
            }
            .timeline-line {
              left: 8px !important;
              transform: none !important;
            }
          }
          /* Animated border lines for timeline cards */
          .timeline-card .line {
            background: linear-gradient(90deg, #818cf8, #a78bfa, #38bdf8);
            position: absolute;
            transition: none;
            transform: scale(0);
            opacity: 1;
            border-radius: 2px;
            z-index: 20;
            height: 2px;
          }
          .timeline-card .line:nth-child(1){
            transform-origin: 100% 100%;
            height: 2px;
            width: 20%;
            bottom: 0;
            left: 0;
          }
          .timeline-card .line:nth-child(4){
            transform-origin: 0 100%;
            height: 2px;
            width: 20%;
            top: -1px;
            right: 0;
          }
          .timeline-card .line:nth-child(2){
            transform-origin: 100% 100%;
            height: 100%;
            width: 2px;
            bottom: 0;
            left: -1px;
          }
          .timeline-card .line:nth-child(5){
            transform-origin: 100% 0;
            height: 100%;
            width: 2px;
            bottom: 0;
            right: -1px;
          }
          .timeline-card .line:nth-child(3){
            transform-origin: 0 100%;
            height: 2px;
            width: 100%;
            top: -1px;
            left: -1px;
          }
          .timeline-card .line:nth-child(6){
            transform-origin: 100% 0;
            height: 2px;
            width: 100%;
            bottom: 0;
            right: -1px;
          }
          .timeline-card:hover > .line {
            transform: scale(1);
            opacity: 1;
            transition: all 1s;
          }
          .timeline-card:hover > .line:nth-child(2),
          .timeline-card:hover > .line:nth-child(5) {
            transition-delay: 0.5s;
          }
          .timeline-card:hover > .line:nth-child(3),
          .timeline-card:hover > .line:nth-child(6) {
            transition-delay: 0.9s;
          }
          .timeline-card {
            overflow: hidden;
            position: relative;
            z-index: 1;
          }
        `}</style>
      </div>
    </section>
  );
};

export default AcademicExperience; 