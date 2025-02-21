import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AnimatedText({ text, innerRef }) {
  return (
    <span ref={innerRef} className="inline-block">
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="opacity-0 inline-block filter blur-sm"
            >
              {char}
            </span>
          ))}
          <span className="opacity-0 inline-block filter blur-sm">&nbsp;</span>
        </span>
      ))}
    </span>
  );
}

function Story() {
  const videoRef = useRef(null);
  const animatedTextRef1 = useRef(null);
  const animatedTextRef2 = useRef(null);

  useEffect(() => {
    const element = videoRef.current;
    gsap.fromTo(
      element,
      { scale: 0.95, y: "3rem" },
      {
        scale: 1,
        y: 0,
        ease: "expo.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5, ease: "power2.out" });
    if (animatedTextRef1.current) {
      tl.to(animatedTextRef1.current.querySelectorAll("span"), {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.25,
        stagger: 0.04,
      });
    }
    if (animatedTextRef2.current) {
      tl.to(
        animatedTextRef2.current.querySelectorAll("span"),
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.25,
          stagger: 0.04,
        },
        "+=0.3"
      );
    }
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 w-full px-6 sm:px-10 md:px-20 lg:px-32 py-16 pt-8 relative">
        {/* Story Left */}
        <div className="flex flex-col items-center justify-center gap-8 flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-dark to-para bg-clip-text text-transparent">
            Our Story
          </h1>
          <div className="relative w-40 h-40 sm:w-[14rem] sm:h-[14rem] md:w-[18rem] md:h-[18rem] lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden flex justify-center items-center">
            <video
              ref={videoRef}
              className="w-40 h-40 sm:w-[14rem] sm:h-[14rem] md:w-[18rem] md:h-[18rem] lg:w-[22rem] lg:h-[22rem] object-cover rounded-full transition-transform duration-500 hover:scale-105"
              loop
              autoPlay
              muted
              playsInline
              src="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/Cyper-3d.mp4?alt=media&token=4115996f-f023-4560-8dc9-20d1437327d9"
            />
          </div>
        </div>
        {/* Story Right */}
        <div className="flex flex-col gap-6 flex-1 md:pl-12 text-center md:text-left">
          <p className="text-nm sm:text-base md:text-base font-light text-gray-700 leading-relaxed">
            <AnimatedText
              text="At Cyper Studio, we believe in one thing—your success. We're not just another tech company; we're your dedicated partners in innovation."
              innerRef={animatedTextRef1}
            />
          </p>
          <p className="text-nm sm:text-base md:text-base font-light text-gray-700 leading-relaxed">
            <AnimatedText
              text="Whether you're starting fresh or scaling up, we're here to deliver top-tier solutions at prices that won't make you faint. And hey, we're not newbies—we've got the experience to back it up, and we're just getting started."
              innerRef={animatedTextRef2}
            />
          </p>
        </div>
      </div>
      {/* <hr className="mx-auto w-[80%] border-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" /> */}
    </>
  );
}

export default Story;
