import React, { memo } from "react";
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion";

const ParticleEffect = memo(({ particles }) => {
  const particleColors = [
    "bg-blue-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-indigo-400",
    "bg-cyan-400",
    "bg-violet-400",
  ];

  const getRandomColor = () => 
    particleColors[Math.floor(Math.random() * particleColors.length)];

  const getRandomXOffset = () => (Math.random() - 0.5) * 100;
  const getRandomYOffset = () => -Math.random() * 100;

  return (
    <AnimatePresence>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-1 h-1 rounded-full ${getRandomColor()}`}
          initial={{ x: particle.x, y: particle.y, scale: 0, opacity: 1 }}
          animate={{
            x: particle.x + getRandomXOffset(),
            y: particle.y + getRandomYOffset(),
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        />
      ))}
    </AnimatePresence>
  );
});

ParticleEffect.propTypes = {
  particles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })
  ).isRequired,
};

ParticleEffect.displayName = 'ParticleEffect';

export { ParticleEffect };
