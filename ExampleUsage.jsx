import React from "react";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import { motion } from "framer-motion";

const ButtonSection = ({ title, description, children }) => (
  <motion.div 
    className="flex flex-col gap-4 p-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="space-y-2 max-w-xl">
      <h3 className="text-xl font-semibold bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
    <div className="flex flex-wrap items-center gap-6 p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-neutral-200/50">
      {children}
    </div>
  </motion.div>
);

export default function ExampleUsage() {
  return (
    <div className="flex flex-col gap-16 p-12 bg-gradient-to-b from-neutral-50 to-white rounded-2xl shadow-lg border border-neutral-100">
      <div className="space-y-2 max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-neutral-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Button Components
        </motion.h2>
        <motion.p
          className="text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A comprehensive collection of customizable button variants for modern
          web applications
        </motion.p>
      </div>

      {/* Core Variants */}
      <ButtonSection 
        title="Core Variants" 
        description="Essential button styles for different contexts and hierarchy levels."
      >
        {['default', 'primary', 'secondary', 'success', 'danger', 'outline', 'ghost'].map(variant => (
          <PrimaryButton 
            key={variant}
            variant={variant}
            className="min-w-[120px] justify-center"
          >
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </PrimaryButton>
        ))}

      {/* Size Variations */}
      <ButtonSection 
        title="Size Variations" 
        description="Different size variants with all possible styles."
      >
        {['default', 'primary', 'secondary'].map(variant => (
          <div key={variant} className="flex flex-col gap-4">
            <span className="text-sm font-medium text-neutral-500 capitalize">{variant}</span>
            <div className="flex items-center gap-4">
              {['small', 'medium', 'large'].map(size => (
                <PrimaryButton key={size} size={size} variant={variant}>
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </PrimaryButton>
              ))}
            </div>
          </div>
        ))}
      </ButtonSection>

      {/* Interactive Effects */}
      <ButtonSection 
        title="Interactive Effects" 
        description="Buttons with various interactive animations and effects."
      >
        <PrimaryButton variant="primary" className="button-glow">
          Glow Effect
        </PrimaryButton>
        <PrimaryButton variant="secondary" withBlob={true}>
          Blob Effect
        </PrimaryButton>
        <PrimaryButton variant="primary" withParticles={true}>
          Particle Effect
        </PrimaryButton>
        <PrimaryButton 
          variant="primary" 
          className="button-glow"
          withBlob={true}
          withParticles={true}
        >
          Combined Effects
        </PrimaryButton>
      </ButtonSection>

      {/* State Examples */}
      <ButtonSection 
        title="State Examples" 
        description="Different button states and interactions."
      >
        <PrimaryButton variant="primary">Default</PrimaryButton>
        <PrimaryButton variant="primary" disabled>Disabled</PrimaryButton>
        <PrimaryButton variant="primary" className="animate-pulse">Loading...</PrimaryButton>
        <PrimaryButton variant="success" className="group">
          <span className="group-hover:scale-105 transition-transform">Hover Scale</span>
        </PrimaryButton>
      </ButtonSection>

      {/* Icon Buttons */}
      <ButtonSection 
        title="Icon Combinations" 
        description="Buttons with different icon placements and animations."
      >
        <PrimaryButton variant="primary" className="group">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Leading Icon
        </PrimaryButton>
        <PrimaryButton variant="secondary" className="group">
          Trailing Icon
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </PrimaryButton>
        <PrimaryButton variant="outline" className="group">
          <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </PrimaryButton>
      </ButtonSection>

      {/* Call-to-Action Examples */}
      <ButtonSection 
        title="Call-to-Action Examples" 
        description="Real-world examples of button usage in different contexts."
      >
        <div className="flex flex-wrap gap-4">
          <PrimaryButton 
            variant="primary"
            size="large"
            className="button-glow group"
            withBlob={true}
            withParticles={true}
          >
            <span className="mr-2">Get Started Now</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </PrimaryButton>
          <PrimaryButton 
            variant="secondary"
            size="large"
            withBlob={true}
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Learn More
          </PrimaryButton>
        </div>
      </ButtonSection>

      {/* Full-width Buttons */}
      <ButtonSection 
        title="Full-width Examples" 
        description="Buttons that span the full width of their container."
      ></ButtonSection>
        <div className="w-full space-y-4">
          <PrimaryButton variant="primary" className="w-full justify-center">
            Full Width Button
          </PrimaryButton>
          <PrimaryButton variant="secondary" className="w-full justify-center">
            Full Width Secondary
          </PrimaryButton>
        </div>
      </ButtonSection>
    </div>
  );
}
