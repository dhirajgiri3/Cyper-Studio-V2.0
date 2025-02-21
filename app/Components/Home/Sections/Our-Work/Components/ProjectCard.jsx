import React, { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useSpring, useMotionValue, useScroll } from "framer-motion";

// Update CARD_MIN_DIMENSIONS for better mobile support
const CARD_MIN_DIMENSIONS = {
  width: {
    xs: "100%",    // mobile
    sm: "100%",    // small tablets
    md: "42vw",    // tablets
    lg: "38vw",    // desktop
    xl: "32vw",    // large screens
  },
  height: {
    xs: "380px",   // mobile (fixed height for consistency)
    sm: "420px",   // small tablets
    md: "45vh",    // tablets
    lg: "50vh",    // desktop
    xl: "55vh",    // large screens
  },
};

// Add new layout configurations
const LAYOUT_CONFIGS = {
  hero: { cols: 8, rows: 2, weight: 1 },
  large: { cols: 6, rows: 2, weight: 2 },
  wide: { cols: 6, rows: 1, weight: 2 },
  tall: { cols: 4, rows: 2, weight: 3 },
  normal: { cols: 4, rows: 1, weight: 4 },
};

// Add new animation configs
const ANIMATION_VARIANTS = {
  card: {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    hover: {
      y: -8,
      transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
    },
  },
  image: {
    hover: {
      scale: 1.08,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  content: {
    hover: {
      y: -4,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },
};

// Add enhanced animation variants
const TRANSITION_VARIANTS = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    filter: 'blur(10px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

// Add utility function for dynamic padding calculation
const calculateDynamicPadding = (width, height, variant) => {
  // Base padding calculation using card dimensions
  const basePadding = Math.min(width, height) * 0.05; // 5% of smallest dimension
  const maxPadding = Math.min(width, height) * 0.1; // 10% of smallest dimension

  // Variant specific multipliers
  const variantMultipliers = {
    hero: { base: 1.4, min: 24, max: 56 },
    wide: { base: 1.2, min: 20, max: 48 },
    vertical: { base: 1.1, min: 20, max: 44 },
    normal: { base: 1.0, min: 16, max: 40 },
  };

  const multiplier = variantMultipliers[variant] || variantMultipliers.normal;

  // Calculate padding with constraints
  const calculatedPadding = Math.round(basePadding * multiplier.base);
  const finalPadding = Math.min(
    Math.max(calculatedPadding, multiplier.min),
    multiplier.max
  );

  return {
    padding: `${finalPadding}px`,
    // Additional spacing values for different elements
    contentSpacing: `${Math.round(finalPadding * 0.75)}px`,
    elementSpacing: `${Math.round(finalPadding * 0.5)}px`,
    innerPadding: `${Math.round(finalPadding * 0.3)}px`,
  };
};

// Add new utility for random offsets
const getRandomOffset = () => {
  const offsets = [-4, -2, 0, 2, 4];
  return offsets[Math.floor(Math.random() * offsets.length)];
};

// Add mobile-first layout configurations
const MOBILE_LAYOUT = {
  xs: { cols: 1, gap: 16 },   // mobile
  sm: { cols: 2, gap: 20 },   // small tablets
  md: { cols: 2, gap: 24 },   // tablets
  lg: 'fluid',                // use existing fluid layout for desktop
};

const ProjectCard = ({ projectsData }) => {
  const [selectedCategory, setSelectedCategory] = useState("live");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [layout, setLayout] = useState([]);

  // Enhanced category options with counts
  const categories = [
    {
      id: "live",
      label: "Live Projects",
      type: "liveProjects",
      color: "from-gray-100 to-gray-100",
      activeColor: "from-dark to-dark",
      // icon: "🚀",
    },
    {
      id: "development",
      label: "In Development",
      type: "inDevelopment",
      color: "from-gray-100 to-gray-100",
      activeColor: "from-dark to-dark",
      // icon: "⚡",
    },
    {
      id: "upcoming",
      label: "Coming Soon",
      type: "comingSoon",
      color: "from-gray-100 to-gray-100",
      activeColor: "from-dark to-dark",
      // icon: "✨",
    },
  ];

  // Update filtered projects when category changes
  useEffect(() => {
    if (!projectsData) return;

    const category = categories.find((cat) => cat.id === selectedCategory);
    if (!category) return;

    const projects = projectsData[category.type] || [];
    const limitedProjects = projects.slice(0, 8);
    setFilteredProjects(limitedProjects);
    setLayout(generateGridLayout(limitedProjects.length));
  }, [selectedCategory, projectsData]);

  return (
    <div className="relative w-full mx-auto max-w-[2000px]">
      {/* Enhanced Category Filter Controls */}
      <div className="flex flex-col items-center mb-8 xs:mb-12 sm:mb-16">
        <div className="relative flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 
                      p-1.5 xs:p-2 sm:p-3 
                      rounded-full
                      bg-white/5 backdrop-blur-xl border border-gray-300/30
                      w-[calc(100%-2rem)] xs:w-auto">
          {categories.map((category) => {
            const isActive = selectedCategory === category.id;
            const projectCount = projectsData?.[category.type]?.length || 0;

            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  relative flex items-center gap-2 
                  px-3 xs:px-4 sm:px-6 
                  py-2 xs:py-2.5 sm:py-3.5
                  rounded-full text-[13px] xs:text-sm font-medium
                  transition-all duration-500 ease-out
                  flex-1 xs:flex-none justify-center
                  min-w-[120px] xs:min-w-0
                  hover:bg-gray-100/70
                  ${isActive ? "text-white" : "text-black hover:text-black/70"}
                `}
                whileTap={{ scale: 0.98 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-full bg-gradient-to-r z-5 
                              ${category.activeColor}`}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
                <span className="relative mr-1">{category.icon}</span>
                <span className="relative">{category.label}</span>
                <span
                  className={`
                  relative px-2 py-0.5 text-xs rounded-full
                  transition-colors duration-300
                  ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-black text-white/90"
                  }
                `}
                >
                  {projectCount}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Enhanced Responsive Grid */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={selectedCategory}
          className="relative"
          variants={TRANSITION_VARIANTS}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className={`
              grid
              grid-cols-1
              xs:grid-cols-2
              lg:grid-cols-12
              gap-4 xs:gap-5 sm:gap-6 md:gap-8
              auto-rows-[minmax(300px,auto)]
              xs:auto-rows-[minmax(350px,auto)]
              md:auto-rows-[minmax(45vh,auto)]
              perspective-[2000px]
              transform-gpu
              ${layout.length > 0 ? 'lg:auto-rows-[minmax(50vh,auto)]' : ''}
            `}
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`
                  relative transform-gpu
                  ${index === 0 ? 'xs:col-span-2 lg:col-span-8' : ''}
                  ${index === 1 ? 'lg:col-span-4' : ''}
                  ${window.innerWidth < 1024 ? '' : layout[index]?.variant === 'wide' ? 'lg:col-span-6' : ''}
                `}
                style={{
                  // Only apply complex grid layout on desktop
                  ...(window.innerWidth >= 1024 ? {
                    gridColumn: `${layout[index]?.colStart || 1} / span ${layout[index]?.colSpan || 4}`,
                    gridRow: `span ${layout[index]?.rowSpan || 1}`,
                  } : {}),
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.4, 0.25, 1],
                  }
                }}
                exit={{ opacity: 0, y: 20 }}
              >
                <ProjectItem
                  project={project}
                  index={index}
                  variant={window.innerWidth >= 1024 ? (layout[index]?.variant || "normal") : "mobile"}
                  totalProjects={filteredProjects.length}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Empty State */}
      <AnimatePresence>
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-12 xs:py-16 sm:py-20"
          >
            <h3 className="text-xl xs:text-2xl font-medium text-white/90">
              No projects found in this category
            </h3>
            <p className="text-sm xs:text-base text-white/60 mt-2 xs:mt-3">
              Check back soon for new additions!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Update layout generation with new dimensions
const generateGridLayout = (count) => {
  const layouts = [];
  let prevOffset = 0;
  let columnTracker = new Array(12).fill(0); // Track column heights

  const getOptimalPosition = (span) => {
    let minHeight = Math.min(...columnTracker);
    let bestStartCol = 0;

    // Find the column with minimum height that can accommodate the span
    for (let i = 0; i <= 12 - span; i++) {
      const maxHeightInSpan = Math.max(...columnTracker.slice(i, i + span));
      if (maxHeightInSpan <= minHeight) {
        minHeight = maxHeightInSpan;
        bestStartCol = i;
      }
    }

    return { startCol: bestStartCol, height: minHeight };
  };

  const assignPosition = (config, index) => {
    const { startCol, height } = getOptimalPosition(config.cols);

    // Calculate controlled random offset
    const baseOffset = (height % 2) * 16;
    const randomOffset = Math.floor(Math.random() * 3 - 1) * 8;
    const offset = baseOffset + randomOffset;

    // Update column heights
    for (let col = startCol; col < startCol + config.cols; col++) {
      columnTracker[col] = height + config.rows;
    }

    return {
      colSpan: config.cols,
      rowSpan: config.rows,
      colStart: startCol + 1,
      offset,
      zIndex: count - index,
      variant: Object.keys(LAYOUT_CONFIGS).find(
        (key) => LAYOUT_CONFIGS[key] === config
      ),
    };
  };

  // Assign layouts strategically
  for (let i = 0; i < count; i++) {
    let config;
    if (i === 0) {
      config = LAYOUT_CONFIGS.hero;
    } else if (i === 1) {
      config = LAYOUT_CONFIGS.large;
    } else {
      // Distribute remaining layouts based on column availability
      const availableWidth = 12 - Math.max(...columnTracker);
      if (availableWidth >= 6) {
        config =
          Math.random() > 0.5 ? LAYOUT_CONFIGS.wide : LAYOUT_CONFIGS.large;
      } else if (availableWidth >= 4) {
        config =
          Math.random() > 0.7 ? LAYOUT_CONFIGS.tall : LAYOUT_CONFIGS.normal;
      } else {
        config = LAYOUT_CONFIGS.normal;
      }
    }

    layouts.push(assignPosition(config, i));
  }

  return layouts;
};

const getLayoutVariant = (layout) => {
  if (layout.variant === "hero") return "hero";
  if (layout.variant === "special") return "special";
  return "normal";
};

// Fixed and enhanced parallax hook
const useEnhancedParallax = (ref, options = {}) => {
  const {
    sensitivity = 30,
    rotation = false,
    scale = false,
    depth = 1,
  } = options;

  const { scrollY } = useScroll();
  const springConfig = { stiffness: 400, damping: 90, mass: 2 };

  const y = useSpring(useMotionValue(0), springConfig);
  const scaleValue = useSpring(1, springConfig);
  const rotateX = useSpring(0, springConfig);

  useEffect(() => {
    if (!ref.current) return;

    const calculateParallax = (current) => {
      const element = ref.current;
      if (!element) return;

      try {
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        const elementCenterY = offsetTop + rect.height / 2;
        const viewportCenterY = window.scrollY + window.innerHeight / 2;
        const distanceFromCenter = elementCenterY - viewportCenterY;

        const parallaxY = (distanceFromCenter * sensitivity * depth) / 1000;
        y.set(-parallaxY);

        if (scale) {
          const scrollProgress =
            Math.abs(distanceFromCenter) / (window.innerHeight / 2);
          const scaleAmount = 1 - Math.min(0.15, scrollProgress * 0.1);
          scaleValue.set(scaleAmount);
        }

        if (rotation) {
          const rotationAmount = distanceFromCenter * 0.02;
          rotateX.set(rotationAmount);
        }
      } catch (error) {
        console.warn("Parallax calculation failed:", error);
      }
    };

    const unsubscribe = scrollY.onChange(calculateParallax);
    return () => unsubscribe();
  }, [scrollY, ref, sensitivity, rotation, scale, depth]);

  return { y, scale: scaleValue, rotateX };
};

const MagneticButton = ({ isVisible }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [buttonSize] = useState(80); // Size of the circular button

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!buttonRef.current || !isVisible) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Magnetic effect strength
      const strength = 0.3;

      setPosition({
        x: distanceX * strength,
        y: distanceY * strength,
      });
    };

    if (isVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={buttonRef}
      className="absolute pointer-events-none z-50"
      style={{
        width: buttonSize,
        height: buttonSize,
        x: position.x,
        y: position.y,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        x: position.x,
        y: position.y,
        transition: {
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        },
      }}
    >
      <div
        className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm
                    border border-white/20 flex items-center justify-center
                    shadow-lg"
      >
        <motion.div
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectItem = ({ project, index, variant, totalProjects }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const [dynamicPadding, setDynamicPadding] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Add resize observer to update padding
  useEffect(() => {
    if (!cardRef.current) return;

    const updateDimensions = (entries) => {
      const { width, height } = entries[0].contentRect;
      setCardDimensions({ width, height });
      const newPadding = calculateDynamicPadding(width, height, variant);
      setDynamicPadding(newPadding);
    };

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(cardRef.current);

    return () => resizeObserver.disconnect();
  }, [variant]);

  // Adjust parallax sensitivity based on variant
  const getParallaxConfig = (variant) => {
    const configs = {
      hero: { sensitivity: 30, depth: 1.5 },
      vertical: { sensitivity: 25, depth: 1.2 },
      wide: { sensitivity: 20, depth: 1 },
      normal: { sensitivity: 15, depth: 0.8 },
      square: { sensitivity: 20, depth: 1 },
    };
    return configs[variant] || configs.normal;
  };

  const parallaxConfig = getParallaxConfig(variant);

  const cardParallax = useEnhancedParallax(cardRef, {
    ...parallaxConfig,
    rotation: true,
    scale: true,
  });

  const imageParallax = useEnhancedParallax(imageRef, {
    sensitivity: 40,
    depth: 1.5,
  });

  const contentParallax = useEnhancedParallax(contentRef, {
    sensitivity: 25,
    depth: 0.5,
  });

  // Enhanced mouse movement effect with safety checks
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    try {
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 25;
      const y = (e.clientY - rect.top - rect.height / 2) / 25;

      card.style.transform = `
        perspective(1000px) 
        rotateX(${-y}deg) 
        rotateY(${x}deg)
        scale3d(1.02, 1.02, 1.02)
      `;
    } catch (error) {
      console.warn("Mouse move effect failed:", error);
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`
        group relative h-full w-full
        transition-all duration-500 ease-out
        hover:z-30
        ${variant === 'mobile' ? 'aspect-[4/5] xs:aspect-[3/4]' : ''}
      `}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        y: cardParallax.y,
        rotateX: cardParallax.rotateX,
        scale: cardParallax.scale,
        transformPerspective: "2000px",
        height: "100%",
        minHeight: CARD_MIN_DIMENSIONS.height[variant === "hero" ? "lg" : "md"],
      }}
      initial={{ y: 50 }}
      whileInView={{
        y: 0,
        transition: {
          duration: 1.4,
          delay: index * 0.12,
          ease: [0.25, 0.4, 0.25, 1],
        },
      }}
      viewport={{ once: true, margin: "-5%" }}
      whileHover="hover"
    >
      <Link href={project.link || "/"} className="block h-full w-full">
        <motion.div
          className={`
            relative h-full w-full 
            rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] 
            overflow-hidden
            bg-gradient-to-br from-white/[0.08] to-white/[0.04]
            backdrop-blur-sm border border-white/[0.08]
            transition-all duration-500 ease-out
            group-hover:border-white/[0.15]
            group-hover:from-white/[0.12] group-hover:to-white/[0.06]
            group-hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]
            ${variant === 'mobile' ? 'p-4 xs:p-5 sm:p-6' : ''}
          `}
          style={{
            padding: dynamicPadding?.padding,
            transformStyle: "preserve-3d",
          }}
          variants={ANIMATION_VARIANTS.card}
        >
          {/* Background Image with Enhanced Parallax */}
          <motion.div
            ref={imageRef}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${project.backgroundImage})`,
              y: imageParallax.y,
              scale: 1.05,
            }}
            variants={ANIMATION_VARIANTS.image}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b
                         transition-opacity duration-500"
              style={{
                background: `linear-gradient(
                  180deg,
                  rgba(0,0,0,0.2) 0%,
                  rgba(0,0,0,0.3) 50%,
                  rgba(0,0,0,0.95) 100%
                )`,
              }}
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 0.6 }}
            />
          </motion.div>

          <motion.div
            ref={contentRef}
            className={`
              relative h-full flex flex-col justify-end
              ${variant === 'mobile' ? 'gap-3 xs:gap-4' : 'gap-4 md:gap-6'}
            `}
            style={{
              y: contentParallax.y,
              gap: dynamicPadding?.elementSpacing,
            }}
            variants={ANIMATION_VARIANTS.content}
          >
            {/* Project Info */}
            <div className={`
              space-y-3 
              ${variant === 'mobile' ? 'xs:space-y-3' : 'xs:space-y-4'}
            `}>
              {/* Tags */}
              <motion.div
                className="flex flex-wrap items-center gap-1.5 xs:gap-2"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.tags?.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 xs:px-3 py-1 xs:py-1.5 
                             text-[11px] xs:text-xs font-medium tracking-wide
                             text-white/90 bg-black/10
                             rounded-full border border-white/[0.15]
                             transition-colors duration-300
                             backdrop-blur-md
                             group-hover:bg-black/15
                             group-hover:border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Title and Description */}
              <div className="space-y-2 xs:space-y-3">
                <h3 className={`
                  font-bold text-white/95 tracking-tight
                  transform-gpu transition-transform duration-300
                  group-hover:text-white
                  ${variant === 'mobile' 
                    ? 'text-base xs:text-lg sm:text-xl' 
                    : 'text-lg xs:text-xl sm:text-2xl lg:text-3xl'}
                `}>
                  {project.name}
                </h3>
                <p className={`
                  text-white/70 
                  line-clamp-2 xs:line-clamp-3
                  transform-gpu transition-all duration-300
                  group-hover:text-white/90
                  ${variant === 'mobile' 
                    ? 'text-xs xs:text-sm' 
                    : 'text-sm xs:text-base'}
                `}>
                  {project.tagline}
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Only show magnetic button on desktop */}
          {variant !== 'mobile' && (
            <div className="hidden lg:block">
              <MagneticButton isVisible={isHovered} />
            </div>
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
