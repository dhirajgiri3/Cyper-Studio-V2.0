import React from "react";
import Scene from "@/Animations/ThreeD/Hero/Scene";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import { motion } from "framer-motion";
import ImageTrail from "@/Animations/ImageTrail/ImageTrail";
import styled from "styled-components";

const StyledHero = styled(motion.section)`
  hr {
    margin: 0 3rem;
    width: 80%;
    border: none;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.3),
      transparent
    );
  }
`;

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <StyledHero
      className="min-h-screen w-full max-w-[1440px] mx-auto px-8 md:px-20 py-24 md:py-4 pb-0 flex flex-col justify-center items-center gap-16 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="background-trail absolute inset-0 -z-10">
        <ImageTrail />
      </div>
      <div className="hero-top w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        <motion.div
          className="texts flex-1 max-w-[600px] flex flex-col gap-8"
          variants={itemVariants}
        >
          <h1 className="text-[2.5rem] md:text-[4rem] leading-tight font-semibold font-clash text-black tracking-tight">
            Where{" "}
            <motion.span
              className="font-playfair font-medium italic text-neutral-800 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Innovation
            </motion.span>{" "}
            <br />
            Meets{" "}
            <motion.span
              className="font-playfair font-medium italic text-neutral-800 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Passion
            </motion.span>
          </h1>
          <motion.p
            className="text-[.9rem] leading-relaxed text-text-secondary"
            variants={itemVariants}
          >
            <span>
              Bringing Premium Solutions to Everyone—Because Your Success is Our
              Success.
            </span>
            <br />
            <br />
            <span>
              <strong className="text-dark">Welcome to Cyper Studio!</strong>{" "}
              We're not just tech wizards—we're your partners in innovation.
              Whether you're a startup with big dreams or an established
              business ready to scale, we're here to help you succeed without
              breaking the bank. Ready to kick off your journey? Let's make
              magic happen—no stress, just results.
            </span>
          </motion.p>
        </motion.div>

        <motion.div
          className="threed flex-1 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center relative" // updated responsive height classes
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div
            style={{
              width: "100%",
              height: "100%" /* optionally: maxHeight: 'inherit' */,
            }}
          >
            <Scene />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-bottom flex flex-col items-center gap-8 text-center"
        variants={itemVariants}
      >
        <motion.p
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          We love to bring smiles to people's faces, and that's our job—yep,
          we're serious! 😉
        </motion.p>
        <motion.div className="flex gap-4" variants={itemVariants}>
          <PrimaryButton
            size="medium"
            variant="primary"
            withBlob={true}
            withParticles={true}
          >
            Get started
          </PrimaryButton>
        </motion.div>
      </motion.div>
      <hr />
    </StyledHero>
  );
}

export default Hero;
