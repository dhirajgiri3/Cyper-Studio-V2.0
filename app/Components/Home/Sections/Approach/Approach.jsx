import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PrimaryButton from "@/app/Components/Buttons/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

function Approach() {
  const approachSectionRefs = useRef([]);
  const contentRefs = useRef([]);
  const videoRefs = useRef([]);

 
  approachSectionRefs.current = [];
  contentRefs.current = [];
  videoRefs.current = [];

  useEffect(() => {
    approachSectionRefs.current.forEach((section, index) => {
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

  const addToRefs = (el, ref) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <section className="container mx-auto rounded-t-3xl px-6 space-y-16 pb-2 pt-6 bg-dark">
      {/* Section One */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-12 md:h-[75vh] w-full"
        ref={(el) => addToRefs(el, approachSectionRefs)}
      >
        <div
          className="flex-1 flex justify-center items-center md:h-full"
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
          className="flex-1 flex flex-col items-center justify-center gap-6 px-4 md:px-12 text-center"
          ref={(el) => addToRefs(el, contentRefs)}
        >
          <h1 className="text-4xl md:text-6xl text-light font-medium">
            We Envision
          </h1>
          <p className="text-sm text-para font-light max-w-3xl">
            Your boldest ideas are our starting point. We dive deep into your
            vision, understanding every nuance to craft digital experiences that
            exceed expectations.
          </p>
          <PrimaryButton
            variant="primary"
            size="medium"
            withParticles={true}
            className="hardware-accelerated rounded-full"
          >
            Explore Our Work
          </PrimaryButton>
        </div>
      </div>

      {/* Section Two */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-12 md:h-[75vh] w-full"
        ref={(el) => addToRefs(el, approachSectionRefs)}
      >
        <div
          className="flex-1 flex flex-col items-center justify-center gap-6 px-4 md:px-12 text-center"
          ref={(el) => addToRefs(el, contentRefs)}
        >
          <h1 className="text-4xl md:text-6xl text-light font-medium">
            We Engineer
          </h1>
          <p className="text-sm text-para font-light max-w-3xl">
            Blending cutting-edge technology with creative brilliance, we
            transform concepts into powerful, scalable solutions that stand out.
          </p>
          <PrimaryButton variant="primary" withParticles={true} size="medium">
            Learn Our Process
          </PrimaryButton>
        </div>
        <div
          className="flex-1 flex justify-center items-center md:h-full"
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
        className="flex flex-col md:flex-row items-center justify-between gap-12 md:h-[75vh] w-full"
        ref={(el) => addToRefs(el, approachSectionRefs)}
      >
        <div
          className="flex-1 flex justify-center items-center md:h-full"
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
          className="flex-1 flex flex-col items-center justify-center gap-6 px-4 md:px-12 text-center"
          ref={(el) => addToRefs(el, contentRefs)}
        >
          <h1 className="text-4xl md:text-6xl text-light font-medium">
            We Empower
          </h1>
          <p className="text-sm text-para font-light max-w-3xl">
            Through transparent collaboration and relentless iteration, we build
            solutions that don't just meet expectations—they redefine them.
          </p>
          <PrimaryButton
            variant="primary"
            size="medium"
            withParticles={true}
            className="hardware-accelerated py-3 px-8 md:py-4 md:px-12"
          >
            Let's Create Magic
          </PrimaryButton>
        </div>
      </div>

      {/* Footer Text */}
      <p className="max-w-3xl mx-auto text-center text-para font-light text-sm ">
        At Cyper Studio, <span className="font-semibold text-white/90">we scale smart.</span> We reimagine your brand
        and product to keep you connected with a growing audience, taking your
        vision from concept to launch through tailored design sprints that
        transform ideas into a winning Product.
      </p>
    </section>
  );
}

export default Approach;
