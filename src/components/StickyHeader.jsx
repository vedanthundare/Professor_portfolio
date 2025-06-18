import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About', img: 'https://plus.unsplash.com/premium_photo-1747769554829-509fc9395e53?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { href: '#education', label: 'Education', img: 'https://images.unsplash.com/photo-1748040833639-07951051026c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { href: '#academic-experience', label: 'Experience', img: 'https://images.unsplash.com/photo-1748306295424-de2d800de85d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { href: '#teaching-research', label: 'Research', img: 'https://images.unsplash.com/photo-1748324575258-b51559c5fefd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { href: '#publications', label: 'Publications', img: 'https://images.unsplash.com/photo-1746121813274-50f7f8d4bad4?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { href: '#project-guidance', label: 'Projects', img: 'https://images.unsplash.com/photo-1748306295424-de2d800de85d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { href: '#achievements', label: 'Achievements', img: 'https://images.unsplash.com/photo-1748040833639-07951051026c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { href: '#certifications-fdps', label: 'Certifications', img: 'https://plus.unsplash.com/premium_photo-1747769554829-509fc9395e53?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { href: '#roles-memberships', label: 'Roles', img: 'https://images.unsplash.com/photo-1748324575258-b51559c5fefd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { href: '#contact', label: 'Contact', img: 'https://images.unsplash.com/photo-1746121813274-50f7f8d4bad4?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const defaultPreviewImg = navLinks[0].img;

const StickyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [previewImg, setPreviewImg] = useState(defaultPreviewImg);

  // Animate menu links in staggered fashion
  const menuVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
    closed: { opacity: 0 },
  };
  const linkVariants = {
    open: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } },
    closed: { y: 60, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <header className="w-full z-50 fixed top-0 left-0">
      {/* Top nav bar */}
      <nav className="flex items-center justify-end px-2 md:px-[8%] py-4 md:py-5 max-w-full mx-auto relative">
        <div className="menu-toggle cursor-pointer select-none relative w-16 md:w-20 flex flex-col items-end">
          <motion.div
            id="menu-open"
            className="hamburger-icon absolute top-0 right-0 flex flex-col justify-center items-center w-10 h-10"
            style={{ opacity: menuOpen ? 0 : 1, pointerEvents: menuOpen ? 'none' : 'auto' }}
            initial={false}
            animate={{ y: menuOpen ? -10 : 0, x: menuOpen ? -5 : 0, rotate: menuOpen ? -5 : 0, opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            onClick={() => setMenuOpen(true)}
          >
            {/* Hamburger icon (3 bars) */}
            <span className="block w-7 h-0.5 bg-white rounded transition-all duration-300 mb-1" />
            <span className="block w-7 h-0.5 bg-white rounded transition-all duration-300 mb-1" />
            <span className="block w-7 h-0.5 bg-white rounded transition-all duration-300" />
          </motion.div>
        </div>
      </nav>
      {/* Overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0f0f0f] z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close button in overlay */}
            <button
              aria-label="Close menu"
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-900/80 hover:bg-gray-800 text-white text-2xl md:text-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
            <motion.div
              className="relative w-full h-full flex flex-col md:flex-row items-center justify-center"
              initial={{ scale: 1.1, rotate: -10, opacity: 0.5, x: -100, y: -100 }}
              animate={{ scale: 1, rotate: 0, opacity: 1, x: 0, y: 0 }}
              exit={{ scale: 1.1, rotate: -10, opacity: 0.5, x: -100, y: -100 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              {/* Preview image (hidden on mobile) */}
              <div className="hidden md:flex flex-1 items-center justify-center h-full">
                <motion.div className="menu-preview-img relative w-[220px] md:w-[350px] h-[280px] md:h-[450px] overflow-hidden rounded-2xl shadow-2xl border border-gray-800 bg-gray-900/60">
                  <motion.img
                    key={previewImg}
                    src={previewImg}
                    alt="Preview"
                    initial={{ opacity: 0, scale: 1.1, rotate: 10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              {/* Menu links only */}
              <div className="flex-1 flex flex-col justify-center items-center gap-6 md:gap-12 w-full max-w-xs md:max-w-xl px-2 md:px-4">
                <motion.div
                  className="menu-links flex flex-col gap-2 md:gap-4 mb-6 md:mb-8 w-full"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      className="link relative"
                      variants={linkVariants}
                    >
                      <a
                        href={link.href}
                        className="nav-anim-link text-2xl md:text-4xl lg:text-5xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 relative w-full block text-center md:text-left"
                        onMouseEnter={() => setPreviewImg(link.img)}
                        onFocus={() => setPreviewImg(link.img)}
                        onMouseLeave={() => setPreviewImg(defaultPreviewImg)}
                        onBlur={() => setPreviewImg(defaultPreviewImg)}
                        onClick={() => setMenuOpen(false)}
                        tabIndex={0}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>{`
        .menu-links .nav-anim-link {
          position: relative;
          display: block;
          z-index: 1;
          overflow: hidden;
        }
        .menu-links .nav-anim-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(129,140,248,0.18) 0%, rgba(139,92,246,0.12) 100%);
          border-bottom: 2px solid transparent;
          border-image: linear-gradient(to right, #818cf8, #a78bfa, #38bdf8) 1;
          transform: scaleY(0);
          transform-origin: bottom left;
          transition: transform 0.3s cubic-bezier(.4,0,.2,1);
          z-index: -1;
        }
        .menu-links .link:hover .nav-anim-link::after,
        .menu-links .link:focus-within .nav-anim-link::after {
          transform: scaleY(1);
        }
      `}</style>
    </header>
  );
};

export default StickyHeader; 