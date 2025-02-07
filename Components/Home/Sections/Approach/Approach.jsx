import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Import the ScrollTrigger plugin
import PrimaryButton from "@/Components/Buttons/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

function Approach() {
  const approachSectionRefs = useRef([]);
  const contentRefs = useRef([]);
  const videoRefs = useRef([]);

  // Initialize refs as empty arrays
  approachSectionRefs.current = [];
  contentRefs.current = [];
  videoRefs.current = [];

  useEffect(() => {
    approachSectionRefs.current.forEach((section, index) => {
      // Video Animation using gsap.fromTo
      gsap.fromTo(
        videoRefs.current[index],
        { opacity: 0, y: "3rem" },
        {
          opacity: 1,
          y: "0rem",
          duration: 1.2,
          delay: 0.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Content Animation using gsap.fromTo
      gsap.fromTo(
        contentRefs.current[index].children,
        { opacity: 0, y: "3rem" },
        {
          opacity: 1,
          y: "0rem",
          stagger: 0.3,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  // Function to add refs
  const addToRefs = (el, ref) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-start gap-20 p-4 sm:p-8 md:p-16">
      <hr className="mx-auto w-[80%] border-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />

      {/* Section One */}
      <div
        className="flex flex-col md:flex-row items-center md:justify-center gap-8 w-full md:h-[75vh] h-auto"
        ref={(el) => addToRefs(el, approachSectionRefs)}
      >
        <div
          className="flex-1 flex justify-center items-center md:h-[75vh] h-full"
          ref={(el) => addToRefs(el, videoRefs)}
        >
          <video
            className="w-full h-full object-contain rounded-2xl border border-[#2b2d33]"
            src="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/4.mp4?alt=media&token=14666be1-1d7f-49d9-aac8-ab36264b5499"
            loop
            autoPlay
            playsInline
            muted
          />
        </div>
        <div
          className="flex-1 flex flex-col items-center justify-center gap-6 w-full px-4 md:px-12"
          ref={(el) => addToRefs(el, contentRefs)}
        >
          <h1 className="text-2xl sm:text-xl md:text-6xl text-light text-center font-medium">
            We Envision
          </h1>
          <p className="text-sm text-para w-full md:w-[70%] text-center font-light">
            Your boldest ideas are our starting point. We dive deep into your
            vision, understanding every nuance to craft digital experiences that
            exceed expectations.
          </p>
          <PrimaryButton
            variant="primary"
            withParticles="yes"
            className="py-3 px-6 sm:py-4 sm:px-8"
          >
            Start Your Journey
          </PrimaryButton>
        </div>
      </div>
      {/* Section Two */}
      <div
        className="flex flex-col md:flex-row items-center md:justify-center gap-8 w-full md:h-[75vh] h-auto"
        ref={(el) => addToRefs(el, approachSectionRefs)}
      >
        <div
          className="flex-1 flex flex-col items-center justify-center gap-6 w-full px-4 md:px-12"
          ref={(el) => addToRefs(el, contentRefs)}
        >
          <h1 className="text-2xl sm:text-5xl md:text-6xl text-light text-center font-medium">
            We Engineer
          </h1>
          <p className="text-sm text-para w-full md:w-[70%] text-center font-light">
            Blending cutting-edge technology with creative brilliance, we
            transform concepts into powerful, scalable solutions that stand out.
          </p>
          <PrimaryButton
            variant="primary"
            withParticles="yes"
            className="py-3 px-6 sm:py-4 sm:px-8"
          >
            Learn Our Process
          </PrimaryButton>
        </div>
        <div
          className="flex-1 flex justify-center items-center md:h-[75vh] h-full"
          ref={(el) => addToRefs(el, videoRefs)}
        >
          <video
            className="w-full h-full object-contain rounded-2xl border border-[#2b2d33]"
            src="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/5.mp4?alt=media&token=d5221841-4383-4542-9db3-3b1f669129de"
            loop
            autoPlay
            playsInline
            muted
          />
        </div>
      </div>

      {/* Section Three */}
      <div
        className="flex flex-col md:flex-row items-center md:justify-center gap-8 w-full md:h-[75vh] h-auto"
        ref={(el) => addToRefs(el, approachSectionRefs)}
      >
        <div
          className="flex-1 flex justify-center items-center md:h-[75vh] h-full"
          ref={(el) => addToRefs(el, videoRefs)}
        >
          <video
            className="w-full h-full object-contain rounded-2xl border border-[#2b2d33]"
            src="https://firebasestorage.googleapis.com/v0/b/cyper-studio.appspot.com/o/6.mp4?alt=media&token=0b627515-826e-46fc-ade3-cc386eafcd0d"
            loop
            autoPlay
            playsInline
            muted
          />
        </div>
        <div
          className="flex-1 flex flex-col items-center justify-center gap-6 w-full px-4 md:px-12"
          ref={(el) => addToRefs(el, contentRefs)}
        >
          <h1 className="text-2xl sm:text-5xl md:text-6xl text-light text-center font-medium">
            We Empower
          </h1>
          <p className="text-sm text-para w-full md:w-[70%] text-center font-light">
            Through transparent collaboration and relentless iteration, we build
            solutions that don't just meet expectations—they redefine them.
          </p>
          <PrimaryButton
            variant="primary"
            withParticles="yes"
            className="py-3 px-6 sm:py-4 sm:px-8"
          >
            Partner With Us
          </PrimaryButton>
        </div>
      </div>

      {/* Footer Text */}
      <p className="w-full md:w-[70%] text-center text-para font-light text-xs sm:text-sm md:text-base">
        At Cyper Studio,{" "}
        <span className="font-medium text-whitel">
          we don't just write code—we craft futures.
        </span>{" "}
        Every line, every pixel, and every interaction is meticulously crafted
        to turn your boldest ideas into tangible digital realities. Ready to
        engineer the extraordinary, together?
      </p>
    </section>
  );
}

export default Approach;
