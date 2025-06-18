import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, BookOpenCheck, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 px-2 md:px-8">
      <motion.div
        className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-12 w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="col-span-12 bg-gray-900/80 border border-gray-800 rounded-2xl shadow-lg p-4 md:p-12 mx-auto w-full min-w-0">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-indigo-400 mb-6 md:mb-8 text-center">Contact</h2>
          <p className="text-base md:text-lg text-gray-300 text-center mb-6 md:mb-8">
            Feel free to reach out for collaborations, inquiries, or just to connect!
          </p>
          {/* Contact Form Placeholder */}
          <motion.form
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-300 mb-1">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 w-4 h-4 text-indigo-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="pl-10 pr-3 py-2 w-full rounded-md bg-gray-950 border border-gray-800 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-xs md:text-base"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-300 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 w-4 h-4 text-indigo-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="pl-10 pr-3 py-2 w-full rounded-md bg-gray-950 border border-gray-800 text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-xs md:text-base"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block w-full rounded-md bg-gray-950 border border-gray-800 text-gray-100 px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-xs md:text-base"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 rounded-md text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </motion.form>
          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-4 md:space-x-6 mt-8 md:mt-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" title="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" title="ORCID">
              <BookOpenCheck className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" title="Google Scholar">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v18m0 0l-6-6m6 6l6-6" /></svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 