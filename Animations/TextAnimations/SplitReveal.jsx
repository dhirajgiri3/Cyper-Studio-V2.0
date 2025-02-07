"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SplitReveal = ({
  text,
  width = "100%",
  fontsize = "1rem",
  lineheight = "1.5",
  letterSpace = "0",
  fontweight = "400",
  color = "inherit",
  tfont = "0.9rem",
  mfont = "0.8rem",
  className,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const letters = useMemo(() => text.split(""), [text]);

  const containerStyle = {
    width,
    display: 'inline-block',
  };

  const spanStyle = {
    display: 'inline-block',
    fontSize: fontsize,
    color,
    lineHeight: lineheight,
    letterSpacing: letterSpace,
    fontWeight: fontweight,
    fontFamily: 'var(--font)',
  };

  const animationVariants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.02,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div ref={ref} className={className}>
      <div style={containerStyle}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            style={{
              ...spanStyle,
              [`@media (max-width: 1000px)`]: {
                fontSize: tfont,
              },
              [`@media (max-width: 768px)`]: {
                fontSize: mfont,
              },
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default SplitReveal;
