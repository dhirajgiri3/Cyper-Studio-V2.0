import React from 'react';
import { motion } from 'framer-motion';
import MagneticWrapper from '@/app/Components/Buttons/MagneticWrapper';

const HoverCard = ({
  children,
  className = '',
  color = 'bg-white',
  glowColor = 'rgba(255, 255, 255, 0.1)',
  strength = 0.15,
  scale = 1.02,
}) => {
  return (
    <MagneticWrapper
      strength={strength}
      dampening={0.8}
      radius={120}
      smoothing={0.3}
    >
      <motion.div
        className={`
          relative rounded-xl overflow-hidden
          ${className}
        `}
        initial={{ borderRadius: '1rem' }}
        whileHover={{ 
          scale,
          borderRadius: '1.2rem 0.8rem 1rem 1.2rem',
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25
        }}
      >
        <motion.div
          className={`
            absolute inset-0 opacity-0
            ${color}
          `}
          initial={{ opacity: 0 }}
          whileHover={{ 
            opacity: 0.1,
            background: `radial-gradient(
              800px circle at var(--mouse-x) var(--mouse-y), 
              ${glowColor},
              transparent 40%
            )`
          }}
          transition={{ duration: 0.3 }}
        />
        {children}
      </motion.div>
    </MagneticWrapper>
  );
};

export default React.memo(HoverCard);
