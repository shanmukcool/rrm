import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Rose Petals */}
      <motion.div
        className="absolute top-20 left-10 w-8 h-8 bg-brand-primary/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-brand-primary/15 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/4 w-4 h-4 bg-brand-primary/20 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute top-60 right-1/3 w-5 h-5 bg-brand-primary/12 rounded-full"
        animate={{
          y: [0, 18, 0],
          x: [0, -12, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
};

export default FloatingElements;