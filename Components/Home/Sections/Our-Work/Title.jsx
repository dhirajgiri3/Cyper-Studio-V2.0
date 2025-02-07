import React, {
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = () => {
  const titleRef = useRef(null);
  const workItemsRef = useRef(null);
  const containerRef = useRef(null);
  const blobRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  const workItemsData = useMemo(
    () => [
      { title: "E-commerce Solutions", icon: "🛍️" },
      { title: "AI & ML Integration", icon: "🤖" },
      { title: "Mobile Applications", icon: "📱" },
      { title: "Cloud Architecture", icon: "☁️" },
      { title: "Blockchain Systems", icon: "🔗" },
      { title: "UI/UX Design", icon: "🎨" },
    ],
    []
  );

  const colors = useMemo(
    () => [
      "bg-rose-100",
      "bg-sky-100",
      "bg-amber-100",
      "bg-emerald-100",
      "bg-violet-100",
      "bg-indigo-100",
    ],
    []
  );

  const getUniqueColors = useCallback(() => {
    return [...colors]
      .sort(() => Math.random() - 0.5)
      .slice(0, workItemsData.length);
  }, [colors, workItemsData.length]);

  const uniqueColors = useMemo(() => getUniqueColors(), [getUniqueColors]);

  const randomAngles = useMemo(() => {
    const anglesPool = [-4, -3, -2, 2, 3, 4];
    anglesPool.sort(() => Math.random() - 0.5);
    return anglesPool.slice(0, workItemsData.length);
  }, [workItemsData.length]);

  // Enhanced magnetic effect
  const handleMagneticEffect = useCallback(
    (e, item, index) => {
      if (!animationComplete) return;

      const rect = item.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const itemCenterY = rect.top + rect.height / 2;

      // Calculate distance between cursor and item center
      const deltaX = e.clientX - itemCenterX;
      const deltaY = e.clientY - itemCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Maximum range of magnetic effect
      const maxRange = 150;
      const tiltAngle = randomAngles[index];

      if (distance < maxRange) {
        // Calculate force based on distance (stronger when closer)
        const force = (maxRange - distance) / maxRange;

        // Calculate movement with easing
        const moveX = (deltaX * force) / 3;
        const moveY = (deltaY * force) / 3;

        // Apply spring physics
        gsap.to(item, {
          x: moveX,
          y: moveY,
          scale: 1 + force * 0.2,
          duration: 0.6,
          ease: "spring(1.2, 1, 0.4, 1)",
          overwrite: true,
        });

        // Rotate based on cursor position
        const rotateX = (deltaY / maxRange) * tiltAngle;
        const rotateY = -(deltaX / maxRange) * tiltAngle;

        gsap.to(item, {
          rotateX,
          rotateY,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    },
    [animationComplete, randomAngles]
  );

  // Reset position when cursor leaves magnetic range
  const handleResetPosition = useCallback(
    (item) => {
      if (!animationComplete) return;

      gsap.to(item, {
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    },
    [animationComplete]
  );

  // Global mouse move handler for magnetic effect
  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current || !workItemsRef.current) return;

      // Blob effect
      if (blobRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        gsap.to(blobRef.current, {
          "--mouse-x": `${x}%`,
          "--mouse-y": `${y}%`,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      // Apply magnetic effect to each work item
      if (animationComplete) {
        Array.from(workItemsRef.current.children).forEach((item, index) => {
          handleMagneticEffect(e, item, index);
        });
      }
    },
    [handleMagneticEffect, animationComplete]
  );

  useEffect(() => {
    if (!containerRef.current || !titleRef.current || !workItemsRef.current)
      return;

    // Initialize blob
    const blob = document.createElement("div");
    blob.className =
      "absolute top-1/2 left-1/2 w-[80vw] h-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-[60%_40%_70%_30%] blur-[60px] transition-[border-radius,background] duration-500 z-0";
    blob.style.background =
      "radial-gradient(circle at var(--mouse-x, center) var(--mouse-y, center),  rgba(146, 190, 255, 0.9)  0%, rgba(255, 182, 193, 0.15) 50%, rgba(144, 238, 144, 0.15) 100%)";
    blobRef.current = blob;
    containerRef.current.insertBefore(blob, containerRef.current.firstChild);

    // Title animation
    const title = titleRef.current;
    const text = title.textContent || "";
    title.innerHTML = "";

    const titleSpans = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      if (char === " ") span.style.marginRight = "0.5em";
      return span;
    });

    titleSpans.forEach((span) => title.appendChild(span));

    // Enhanced scroll-based animations
    const workItems = Array.from(workItemsRef.current.children);

    // Initial setup for work items
    workItems.forEach((item, i) => {
      gsap.set(item, {
        y: "100vh",
        opacity: 0.3,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
      });
    });

    // Main scroll animation timeline
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 35%",
        end: "center center",
        scrub: 1,
        onComplete: () => setAnimationComplete(true),
      },
    });

    // Add enhanced title animation to timeline
    scrollTl.fromTo(
      titleSpans,
      { y: "100%", opacity: 0, rotateX: 45, scale: 0.5 },
      {
        y: "0%",
        opacity: 1,
        rotateX: 0,
        scale: 1,
        stagger: 0.05,
        ease: "power3.out",
        duration: 1.5,
        onComplete: () => {
          gsap.to(titleSpans, { scale: 1.05, duration: 0.3, ease: "bounce.out" });
          gsap.to(titleSpans, { scale: 1, duration: 0.3, delay: 0.3, ease: "power2.out" });
        },
      }
    );

    // Add staggered work items animation
    workItems.forEach((item, i) => {
      scrollTl.fromTo(
        item,
        {
          y: "100vh",
          opacity: 0.3,
          scale: 0.8,
          rotateZ: 0,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateZ: randomAngles[i],
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
            // Add hover sensitivity after animation
            if (i === workItems.length - 1) {
              setAnimationComplete(true);
            }
          },
        },
        `-=${i ? 0.4 : 0}`
      );
    });

    // New stable hover event handlers
    const onMouseEnter = (e) => {
      gsap.to(e.currentTarget, {
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const onMouseLeave = (e) => {
      handleResetPosition(e.currentTarget);
      gsap.to(e.currentTarget, {
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)",
        duration: 0.3,
        ease: "power2.out",
      });
    };
    workItems.forEach((item) => {
      item.addEventListener("mouseenter", onMouseEnter);
      item.addEventListener("mouseleave", onMouseLeave);
    });

    // Add mouse move listener
    containerRef.current.addEventListener("mousemove", handleMouseMove);

    // Add mouse leave listener for items
    workItems.forEach((item) => {
      item.addEventListener("mouseleave", () => handleResetPosition(item));
    });

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
      workItems.forEach((item) => {
        item.removeEventListener("mouseenter", onMouseEnter);
        item.removeEventListener("mouseleave", onMouseLeave);
      });
      if (blob) blob.remove();

      // Cleanup scroll triggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [handleMouseMove, handleResetPosition, randomAngles]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen py-12 md:py-16 lg:py-0 flex flex-col items-center justify-center bg-light relative px-4 sm:px-6 md:px-8"
    >
      <h1
        ref={titleRef}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl inline-block whitespace-nowrap text-dark font-black relative z-1 text-center mb-8 md:mb-12"
      >
        Our Work
      </h1>
      <div
        ref={workItemsRef}
        className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mt-4 relative flex flex-wrap justify-center gap-3 sm:gap-4 [perspective:2000px] [transform-style:preserve-3d]"
      >
        {workItemsData.map((item, index) => (
          <span
            key={index}
            className={`
              text-sm sm:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-lg shadow-sm
              [transform-style:preserve-3d] 
              transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]
              [backface-visibility:hidden] cursor-pointer
              flex items-center gap-2 font-medium tracking-wide
              hover:[transform:perspective(1000px)_rotateX(${randomAngles[index]}deg)]
              ${uniqueColors[index]}
              will-change-transform
              w-[calc(50%-0.75rem)] sm:w-auto
              text-center justify-center
            `}
          >
            <span className="text-base sm:text-xl opacity-80 [transform:translateZ(10px)]">
              {item.icon}
            </span>
            <span className="hidden xs:inline">{item.title}</span>
            <span className="xs:hidden">{item.title.split(' ')[0]}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Title;
