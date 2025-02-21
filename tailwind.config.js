module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        light: 'var(--light)',
        dark: 'var(--dark)',
        para: 'var(--para)',
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          light: 'var(--primary-light)',
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        accent: {
          1: 'var(--accent-1)',
          2: 'var(--accent-2)',
          3: 'var(--accent-3)',
          gradient: 'var(--accent-gradient)',
        },
        semantic: {
          success: 'var(--success)',
          warning: 'var(--warning)',
          danger: 'var(--danger)',
          info: 'var(--info)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '128': '32rem',
        '144': '36rem',
      },
      minHeight: {
        'card': '40rem',
      },
      minWidth: {
        'card': '30rem',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.23, 1, 0.32, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'custom-ease': 'cubic-bezier(0.25, 0.4, 0.25, 0.9)',
        'custom-spring': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      animation: {
        gradient: 'gradient-shift 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'aurora': 'aurora 20s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        aurora: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(var(--primary-rgb), 0.35)',
        hover: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      perspective: {
        '1000': '1000px',
      },
      transformOrigin: {
        'left-center': 'left center',
        'center-left': 'center left',
        'center-right': 'center right',
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
        'masonry': 'repeat(auto-fill, minmax(350px, 1fr))',
      },
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '4/3',
        'square': '1/1',
      },
      height: {
        'dynamic-sm': 'clamp(350px, 40vh, 450px)',
        'dynamic-md': 'clamp(400px, 50vh, 600px)',
        'dynamic-lg': 'clamp(500px, 60vh, 700px)',
      },
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cool-gradient': 'linear-gradient(45deg, var(--primary), var(--accent-1))',
        'mesh-pattern': 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20v20H0z" fill="%23FFFFFF" fill-opacity="0.05"/%3E%3C/svg%3E")',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-gpu': {
          transform: 'translate3d(0, 0, 0)',
        },
      })
    },
  ],
}