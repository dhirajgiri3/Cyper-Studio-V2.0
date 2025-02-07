import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import img1 from "@/public/Assets/Image/Dashboard-Section/dhiraj.png";
import img2 from "@/public/Assets/Image/Dashboard-Section/rajendra.png";
import img3 from "@/public/Assets/Image/Dashboard-Section/bruce.png";
import img4 from "@/public/Assets/Image/Dashboard-Section/johns.png";
import img5 from "@/public/Assets/Image/Dashboard-Section/simon.png";

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

const UpContainers = styled(motion.div)`
  width: 100%;
  height: 100%;
  .up {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, 1fr);
    gap: 1rem;
    grid-auto-flow: row;

    .avatar {
      object-fit: cover;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }

    .avatars {
      width: 4.5rem;
      height: 4.5rem;
      padding: 0.5rem;
      border-radius: 1000px;
      background: #fff;
      border-bottom-left-radius: 0;

      @media screen and (max-width: 767px) {
        width: 3.5rem;
        height: 3.5rem;
        mix-blend-mode: difference;
      }

      @media screen and (max-width: 380px) {
        width: 3rem;
        height: 3rem;
      }
    }

    .avatar1 {
      margin-left: 10rem;
      margin-bottom: 10rem;
    }

    .avatar2 {
      margin-left: 6rem;
      margin-top: 5rem;
    }

    .avatar3 {
      margin-left: 20rem;
      margin-bottom: 7rem;
    }

    .avatar4 {
      margin-top: 6rem;
      margin-left: 17rem;
    }

    .avatar5 {
      margin-left: 15rem;
      margin-top: 2rem;
    }

    .row1 {
      grid-column: 1 / span 6;
      grid-row: 1 / span 2;
    }

    .row2 {
      grid-column: 1 / span 2;
      grid-row: 3 / span 2;
    }

    .row4 {
      grid-column: 4 / span 2;
      grid-row: 3 / span 2;
    }

    .row5 {
      grid-column: 1 / span 3;
      grid-row: 5 / span 2;
    }

    .row7 {
      grid-column: 4 / span 3;
      grid-row: 5 / span 2;
    }

    .row8 {
      grid-column: 1 / span 6;
      grid-row: 7 / span 2;
    }

    /* Style the columns within each row as needed */
    .col1,
    .col2,
    .col3,
    .col4,
    .col5,
    .col6 {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 767px) {
        width: 100%;
        height: 100%;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        mix-blend-mode: difference;
      }
    }

    .col1 {
      animation: col1Movement 30s linear infinite;
    }

    .col2 {
      animation: col2Movement 30s linear infinite;
      margin-top: 5rem;
      margin-left: -10rem;
    }

    .col3 {
      animation: col3Movement 30s linear infinite;
      margin-left: 2rem;
      margin-bottom: 3rem;
    }

    .col4 {
      animation: col4Movement 30s linear infinite;
      margin-bottom: 3rem;
      margin-right: 3rem;
    }

    .col5 {
      animation: col5Movement 30s linear infinite;
      margin-top: 2rem;
      margin-left: 2rem;
    }

    /* Style the images within the columns */
    .col1 img,
    .col2 img,
    .col3 img,
    .col4 img,
    .col5 img,
    .col6 img {
      max-width: 5rem;
      max-height: 5rem;
      object-fit: cover; /* Adjust this as needed for image scaling */
    }
  }

  @keyframes col1Movement {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    20% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    30% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    40% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    50% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    60% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    70% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    80% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    90% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes col2Movement {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    20% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    30% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    40% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    50% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    60% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    70% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    80% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    90% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    100% {
      transform: translate(0, 0);
    }
  }

  /* Randomize movement for col3 */
  @keyframes col3Movement {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    20% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    30% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    40% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    50% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    60% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    70% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    80% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    90% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    100% {
      transform: translate(0, 0);
    }
  }

  /* Randomize movement for col4 */
  @keyframes col4Movement {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    20% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    30% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    40% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    50% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    60% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    70% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    80% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    90% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes col5Movement {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    20% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    30% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    40% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    50% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    60% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    70% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    80% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    90% {
      transform: translate(
        ${getRandomValue(-200, 200)}px,
        ${getRandomValue(-200, 200)}px
      );
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

const fadeVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.1,
    },
  },
};

function Up() {
  return (
    <UpContainers>
      <div className="up">
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          className="row1"
        >
          <div className="col5">
            <Image src={img1} alt="Dhiraj Giri" />
          </div>
          <div className="avatars avatar1">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              alt="person"
              className="avatar "
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          className="row2"
        >
          <div className="col1">
            <Image src={img2} alt="Dhiraj Giri" />
          </div>
          <div className="avatars avatar2">
            <img
              src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
              alt="person"
              className="avatar "
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          className="row4"
        >
          <div className="col3">
            <Image src={img3} alt="Dhiraj Giri" />
          </div>
          <div className="avatars avatar3">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="person"
              className="avatar "
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          className="row5"
        >
          <div className="col4">
            <Image src={img4} alt="Dhiraj Giri" />
          </div>
          <div className="avatars avatar4">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="person"
              className="avatar "
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeVariants}
          initial="initial"
          whileInView="animate"
          className="row7"
        >
          <div className="col2">
            <Image src={img5} alt="Dhiraj Giri" />
          </div>
          <div className="avatars avatar5">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
              alt="person"
              className="avatar "
            />
          </div>
        </motion.div>
      </div>
    </UpContainers>
  );
}

export default Up;
