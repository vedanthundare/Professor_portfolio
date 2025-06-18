import React, { useRef } from 'react';

/**
 * 3D Card with mouse tilt effect, glassmorphism, and CSS-only shine hover effect.
 * Props:
 * - children: card content
 * - image: optional background image URL
 * - className: extra classes
 */
const ThreeDCard = ({ children, image, className = '' }) => {
  const cardRef = useRef(null);
  let rotateX = 0;
  let rotateY = 0;
  let isMouseOver = false;

  // Helper functions
  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  // Animation loop
  function animate() {
    if (!isMouseOver) {
      rotateX = lerp(rotateX, 0, 0.08);
      rotateY = lerp(rotateY, 0, 0.08);
    }
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
    requestAnimationFrame(animate);
  }

  // Mouse events
  function handleMouseMove(e) {
    if (!isMouseOver) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    rotateY = clamp(mouseX / 10, -15, 15);
    rotateX = clamp(-mouseY / 10, -15, 15);
  }
  function handleMouseEnter() {
    isMouseOver = true;
    if (cardRef.current) cardRef.current.style.transition = 'none';
    animate();
  }
  function handleMouseLeave() {
    isMouseOver = false;
    if (cardRef.current) cardRef.current.style.transition = 'transform 0.6s';
  }

  return (
    <div
      ref={cardRef}
      className={`three-d-card relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 glassy-card group w-full min-w-0 ${className}`}
      style={{
        background: image ? `url(${image}) center/cover no-repeat` : 'rgba(30, 30, 40, 0.25)',
        minHeight: 140,
        minWidth: 0,
        cursor: 'pointer',
        transition: 'transform 0.6s',
        willChange: 'transform',
        backdropFilter: 'blur(18px) saturate(160%)',
        WebkitBackdropFilter: 'blur(18px) saturate(160%)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25), 0 0 20px 0 rgba(0,255,255,0.10)',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glossy overlay */}
      <span className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-br from-white/40 via-white/10 to-transparent rounded-t-2xl opacity-60 pointer-events-none" />
      <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full w-full">
        {children}
      </div>
      {/* Shine effect via ::before */}
      <style jsx>{`
        .three-d-card {
          position: relative;
        }
        .three-d-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(0,255,255,0.13), transparent);
          transform: translateY(-100%);
          transition: transform 0.45s cubic-bezier(.4,1,.7,1);
          pointer-events: none;
          z-index: 30;
        }
        .three-d-card:hover::before {
          transform: translateY(100%);
        }
      `}</style>
    </div>
  );
};

export default ThreeDCard; 