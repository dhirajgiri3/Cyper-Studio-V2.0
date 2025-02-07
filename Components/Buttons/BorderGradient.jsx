import React from "react";
import { motion } from "framer-motion";

const gradientsByVariant = {
  default: "linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
  primary: "linear-gradient(45deg, rgba(59,130,246,0.3), rgba(99,102,241,0.3))",
  secondary: "linear-gradient(45deg, rgba(139,92,246,0.3), rgba(167,139,250,0.3))",
  success: "linear-gradient(45deg, rgba(20,184,166,0.3), rgba(16,185,129,0.3))",
  danger: "linear-gradient(45deg, rgba(244,63,94,0.3), rgba(225,29,72,0.3))",
};

export const BorderGradient = ({ variant = "default" }) => {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-[1px] rounded-lg bg-black" />
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: gradientsByVariant[variant],
          backgroundSize: "200% 200%",
          animation: "gradient-shift 3s ease infinite",
        }}
      />
    </motion.div>
  );
};