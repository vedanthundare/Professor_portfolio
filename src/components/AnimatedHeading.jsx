import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedHeading
 * Animates each letter of the heading when in view.
 * Props:
 * - children: heading text
 * - as: 'h1' | 'h2' | 'h3' (default: 'h2')
 * - className: extra classes
 */
const AnimatedHeading = ({ children, as = 'h2', className = '' }) => {
  const Tag = as;
  const text = typeof children === 'string' ? children : '';
  const letters = text.split('');

  // Animation variants for each letter
  const letterVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 600,
        damping: 30,
        delay: 0.04 * i,
      },
    }),
  };

  return (
    <Tag
      className={`animated-heading text_box font-bold text-indigo-400 mb-2 text-center ${className}`}
      style={{
        fontWeight: 200,
        fontSize: '2.2em',
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
      }}
    >
      <span className="text-wrapper inline-block relative overflow-hidden">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            className="letter inline-block"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={letterVariants}
            style={{ display: 'inline-block', transformOrigin: '50% 100%' }}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
      <span className="sr-only">{text}</span>
      <style jsx>{`
        .animated-heading {
          font-family: inherit;
          font-weight: 200;
          letter-spacing: -0.01em;
        }
        @media (max-width: 700px) {
          .animated-heading {
            font-size: 1.4em;
          }
        }
      `}</style>
    </Tag>
  );
};

export default AnimatedHeading; 