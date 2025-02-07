export const sizeClasses = {
  small: "px-4 py-2 text-sm rounded-md",
  medium: "px-6 py-3 text-sm rounded-lg",
  large: "px-8 py-4 text-base rounded-xl",
};

export const variantClasses = {
  default: `
    bg-gradient-to-r from-neutral-900 to-neutral-800
    text-neutral-50 
    border border-neutral-800/10
    hover:from-neutral-800 hover:to-neutral-900
    hover:border-neutral-700/20
    hover:shadow-hover
    active:transform active:scale-[0.98]
    transition-all duration-300 ease-smooth
  `,
  primary: `
    bg-primary
    text-white 
    hover:shadow-glow
    hover:border-primary-light/30
    hover:from-primary-dark hover:to-primary
    hover:shadow-[0_8px_25px_-5px_rgba(59,130,246,0.25)]
    active:transform active:scale-[0.98]
    transition-all duration-300 ease-smooth
  `,
  secondary: `
    bg-gradient-to-r from-accent-2/80 to-accent-2
    text-neutral-200 font-light
    border-none
    hover:from-accent-1 hover:to-accent-2
    hover:border-accent-3/50
    hover:text-neutral-900
    hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)]
    active:transform active:scale-[0.98]
    transition-all duration-300 ease-smooth
  `,
  light: `
    bg-light 
    text-neutral-900
    hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)]
    hover:border-neutral-300/20
    active:transform active:scale-[0.98]
    transition-all duration-300 ease-smooth
  `,
  success: `
    bg-semantic-success
    text-white
    border border-semantic-success/10
    hover:shadow-[0_8px_25px_-5px_rgba(16,185,129,0.25)]
    hover:border-semantic-success/20
    active:transform active:scale-[0.98]
    transition-all duration-300 ease-smooth
  `,
  danger: `
    bg-semantic-danger
    text-white
    border border-semantic-danger/10
    hover:shadow-[0_8px_25px_-5px_rgba(239,68,68,0.25)]
    hover:border-semantic-danger/20
    active:transform active:scale-[0.98]
    transition-all duration-300 ease-smooth
  `,
  outline: `
    bg-white
    border-2
    border-primary/80
    text-primary-dark
    hover:bg-primary-50
    hover:border-primary
    hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)]
    active:transform active:scale-[0.98]
    transition-all duration-300 ease-smooth
  `,
  ghost: `
    bg-transparent
    text-accent-1
    hover:bg-primary-50
    hover:text-primary
    active:transform active:scale-[0.98]
    transition-all duration-300 ease-smooth
    focus:ring-2 focus:ring-primary-100
  `,
};

export const glowEffects = {
  default: "after:bg-neutral-900/10",
  primary: "after:bg-primary/20",
  secondary: "after:bg-accent-3/15",
  success: "after:bg-semantic-success/15",
  danger: "after:bg-semantic-danger/15",
  outline: "after:bg-primary/10",
  ghost: "after:bg-primary/10",
};
