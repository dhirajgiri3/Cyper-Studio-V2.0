import React, { memo } from "react";
import { motion } from "framer-motion";
import SplitReveal from "@/Animations/TextAnimations/SplitReveal";
import Up from "./Up";
import Scene from "@/Animations/ThreeD/Hero/Scene";
import { Item11 } from "@/Animations/ThreeD/Hero/Item11";

const fadeVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const VideoSection = memo(() => (
  <motion.div
    variants={fadeVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="flex justify-center order-1 md:order-2"
  >
    <video
      loop
      autoPlay
      muted
      playsInline
      className="w-80 h-80 object-cover rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 md:w-64 md:h-64 sm:w-56 sm:h-56"
    >
      <source
        src="https://res.cloudinary.com/divbobkmd/video/upload/v1695425223/Cyper%20studio/yes-oh_mnadqn.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </motion.div>
));

const TextContent = memo(() => (
  <div className="max-w-xl order-2 md:order-1 space-y-6 px-4">
    <h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">
      Bringing Your Vision to Life
    </h2>
    <SplitReveal
      width="100%"
      fontsize=".875rem"
      color="#bbbbbb"
      text="Cyper Studio, an emerging agency, embodies dynamism and creativity, driven by a dedicated team eager to bring your vision to life. We are your partners in progress, committed to exceeding expectations and pushing boundaries in the digital landscape."
      dangerouslySetInnerHTML={true}
    />
  </div>
));

const VisionSection = memo(() => (
  <div className="flex flex-col items-center gap-16 text-center p-0">
    <motion.div
      variants={fadeVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="max-w-3xl px-6"
    >
      <p className="text-sm text-primary tracking-widest uppercase mb-4 font-medium">
        For Visionaries Like You
      </p>
      <h1 className="text-2xl md:text-3xl leading-tight text-white font-semibold">
        At Cyper Studio, we don't just write code—we craft futures. Every line,
        every pixel, and every interaction is a step toward turning your boldest
        ideas into tangible digital realities.
      </h1>
    </motion.div>
    <motion.div
      variants={fadeVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="max-w-2xl px-4 space-y-4"
    >
      <p className="text-base font-medium text-light">
        Ready to see your vision come alive?
      </p>
      <p className="text-sm text-para font-light leading-relaxed">
        Once you partner with us, your aspirations become our mission. We work
        relentlessly behind the scenes, blending cutting-edge technology with
        creative brilliance to build solutions that don't just meet
        expectations—they redefine them. Through every sprint, iteration, and
        milestone, we prioritize transparency, ensuring you're empowered to
        track progress and collaborate seamlessly.
      </p>
    </motion.div>
  </div>
));

const Dream = () => {
  return (
    <section className="relative w-full min-h-screen pt-12">
      <div className="max-w-7xl mx-auto w-full px-0">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <TextContent />
          <div className="3d-obj relative w-full h-[50vh] flex justify-center items-center backdrop-blur-sm">
            <Scene children={<Item11 />} />
          </div>
        </div>

        <div className="relative">
          <VisionSection />
          <Up />
        </div>
      </div>
    </section>
  );
};

export default memo(Dream);
