
import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const magneticTarget = useRef(null);

  const springConfig = { damping: 25, stiffness: 600 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Multiple trail cursors for cool effect
  const trails = [
    { x: useSpring(cursorX, { damping: 20, stiffness: 200 }), y: useSpring(cursorY, { damping: 20, stiffness: 200 }), size: 40, opacity: 0.15 },
    { x: useSpring(cursorX, { damping: 15, stiffness: 150 }), y: useSpring(cursorY, { damping: 15, stiffness: 150 }), size: 32, opacity: 0.25 },
    { x: useSpring(cursorX, { damping: 10, stiffness: 100 }), y: useSpring(cursorY, { damping: 10, stiffness: 100 }), size: 24, opacity: 0.35 }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      let x = e.clientX - 16;
      let y = e.clientY - 16;
      
      // Magnetic effect
      if (magneticTarget.current) {
        const rect = magneticTarget.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
        const maxDistance = Math.max(rect.width, rect.height) * 2;
        if (distance < maxDistance) {
          const strength = 0.5;
          x = centerX - 16 + (e.clientX - centerX) * (1 - strength);
          y = centerY - 16 + (e.clientY - centerY) * (1 - strength);
        }
      }

      cursorX.set(x);
      cursorY.set(y);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = (e) => {
      setIsHovering(true);
      magneticTarget.current = e.target;
    };
    const handleMouseLeave = () => {
      setIsHovering(false);
      magneticTarget.current = null;
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Animated trails */}
      {trails.map((trail, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
          style={{
            x: trail.x,
            y: trail.y,
            width: trail.size,
            height: trail.size,
            opacity: trail.opacity,
            left: -trail.size / 2 + 16,
            top: -trail.size / 2 + 16
          }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="absolute rounded-full border-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: 32,
          height: 32,
          left: -16,
          top: -16
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 2 : 1,
          borderColor: isHovering ? '#8b5cf6' : '#3b82f6',
          boxShadow: isHovering ? '0 0 30px rgba(139, 92, 246, 0.6)' : '0 0 15px rgba(59, 130, 246, 0.3)'
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
      </motion.div>
    </div>
  );
};
