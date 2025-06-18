import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const rolesMembershipsData = [
  'CodeAI Club Coordinator – KJSIT',
  'Co-Coordinator – FDPs, Webinars, Internships, Research Proposals',
  'Member – IEI (Associate Chartered Engineer)',
  'Member – ISTE',
  'Member – IEEE',
  'Member – AWGP',
  'Member – Mausam',
];

const RolesMemberships = () => {
  return (
    <section id="roles-memberships" className="py-20 px-4 md:px-8">
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="col-span-12 text-4xl font-serif font-bold text-indigo-400 mb-12 text-center">Roles & Memberships</h2>
        {rolesMembershipsData.map((role, index) => (
          <motion.div
            key={index}
            className="col-span-12 md:col-span-4 flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-3 md:px-6 py-2 md:py-4 text-xs md:text-base font-medium text-indigo-100 shadow hover:shadow-lg transition mx-auto min-h-[44px] md:min-h-[88px] w-full max-w-full justify-center min-w-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Users className="w-6 h-6 text-indigo-400" />
            <span>{role}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RolesMemberships; 