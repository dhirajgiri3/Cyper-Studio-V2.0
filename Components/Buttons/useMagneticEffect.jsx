import { useRef, useEffect, useCallback } from "react";

const useMagneticEffect = (strength = 0.2) => {
  const magneticRef = useRef(null);
  const frame = useRef(null);

  const updateTransform = useCallback((target, offsetX, offsetY) => {
    target.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      const { currentTarget: target } = e;
      const { clientX, clientY } = e;
      const { left, top, width, height } = target.getBoundingClientRect();
      const offsetX = (clientX - (left + width / 2)) * strength;
      const offsetY = (clientY - (top + height / 2)) * strength;
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        updateTransform(target, offsetX, offsetY);
      });
    },
    [strength, updateTransform]
  );

  const handleMouseLeave = useCallback((e) => {
    const { currentTarget: target } = e;
    if (frame.current) cancelAnimationFrame(frame.current);
    target.style.transform = "translate(0px, 0px)";
  }, []);

  useEffect(() => {
    const elem = magneticRef.current;
    if (elem) {
      elem.style.transition = "transform 0.3s ease-out";
    }
  }, []);

  return { magneticRef, handleMouseMove, handleMouseLeave };
};

export default useMagneticEffect;
