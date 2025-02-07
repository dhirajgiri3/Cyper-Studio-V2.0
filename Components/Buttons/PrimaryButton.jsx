import React, { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from "framer-motion";
import { createRipples } from "./buttonEffects";
import { ParticleEffect } from "./ParticleEffect";
import { BorderGradient } from "./BorderGradient";
import { BlobEffect } from "./BlobEffect";
import { sizeClasses, variantClasses, glowEffects } from "./buttonStyles";
import useMagneticEffect from "./useMagneticEffect";

const PrimaryButton = ({
  children,
  size = "medium",
  variant = "default",
  className = "",
  disabled = false,
  withBlob = false,  // Changed default to false
  withParticles = false,  // Changed default to false
  onClick,
  ...props
}) => {
  const [particles, setParticles] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);
  const { magneticRef, handleMouseMove, handleMouseLeave } = useMagneticEffect();

  const handleClick = (e) => {
    if (disabled) return;

    if (buttonRef.current) {
      createRipples(e, buttonRef.current);
    }

    if (withParticles) {
      const rect = e.currentTarget.getBoundingClientRect();
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: `${Date.now()}-${i}`,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }));
      setParticles(newParticles);
    }

    onClick?.(e);
  };

  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => setParticles([]), 1000);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  return (
    <motion.div
      ref={magneticRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        {withBlob && isHovered && (
          <div className="absolute inset-0 w-full h-full">
            <BlobEffect intensity={0.8} />
          </div>
        )}
        <button
          ref={buttonRef}
          className={`
            relative overflow-hidden
            transition-all duration-300 ease-out font-light
            bordder-none outline-none
            focus:outline-none focus:border-none focus:ring-2 focus:ring-white/20
            disabled:cursor-not-allowed disabled:opacity-50
            ${sizeClasses[size]}
            ${variantClasses[variant]}
            ${glowEffects[variant]}
            ${className}
          `}
          onClick={handleClick}
          disabled={disabled}
          {...props}
        >
          <BorderGradient variant={variant} />
          <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide">
            {children}
          </span>
          {withParticles && <ParticleEffect particles={particles} variant={variant} />}
        </button>
      </div>
    </motion.div>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  withBlob: PropTypes.bool,
  withParticles: PropTypes.bool,
  onClick: PropTypes.func,
};

export default PrimaryButton;
