import React from 'react';
import './index.css'; // Ensure Tailwind CSS is imported
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import AcademicExperience from './components/AcademicExperience';
import TeachingAndResearch from './components/TeachingAndResearch';
import Publications from './components/Publications';
import ProjectGuidance from './components/ProjectGuidance';
import Achievements from './components/Achievements';
import CertificationsFDPs from './components/CertificationsFDPs';
import RolesMemberships from './components/RolesMemberships';
import Contact from './components/Contact';
import FloatingButton from './components/FloatingButton';
import StickyHeader from './components/StickyHeader';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans px-4 md:px-20 py-8 space-y-16 relative overflow-x-hidden">
      {/* Global gradient background effect */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[40vw] h-[40vw] bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-gradient-to-tr from-indigo-400/20 via-blue-400/10 to-transparent rounded-full blur-2xl" />
      </div>
      <StickyHeader />
      <Hero />
      <About />
      <Education />
      <AcademicExperience />
      <TeachingAndResearch />
      <Publications />
      <ProjectGuidance />
      <Achievements />
      <CertificationsFDPs />
      <RolesMemberships />
      <Contact />
      <FloatingButton />
    </div>
  );
}

export default App;
