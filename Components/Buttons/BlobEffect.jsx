import React from "react";
import { motion } from "framer-motion";

const BlobEffect = ({ intensity = 0.8 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Primary Glow Blob */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.15, 0],
          scale: [0.8, 1.2, 0.8],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div 
          className="absolute inset-0 rounded-full bg-primary/30 blur-2xl"
          style={{ transform: `scale(${intensity})` }}
        />
      </motion.div>

      {/* Secondary Rotating Blob */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.2, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div 
          className="absolute inset-0 rounded-full bg-accent-3/20 blur-2xl"
          style={{ transform: `scale(${intensity * 0.9})` }}
        />
      </motion.div>

      {/* Accent Blob */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.15, 0],
          scale: [0.9, 1.3, 0.9],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-light/30 to-accent-3/30 blur-2xl"
          style={{ transform: `scale(${intensity * 1.1})` }}
        />
      </motion.div>
    </div>
  );
};

export { BlobEffect };
