import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";
import styled from "styled-components";
import img1 from "@/public/Assets/Image/Dashboard-Section/dhiraj.png";
import img2 from "@/public/Assets/Image/Dashboard-Section/rajendra.png";
import img3 from "@/public/Assets/Image/Dashboard-Section/bruce.png";
import img4 from "@/public/Assets/Image/Dashboard-Section/johns.png";
import img5 from "@/public/Assets/Image/Dashboard-Section/simon.png";

const getRandomValue = (min, max) => Math.random() * (max - min) + min;

const avatarData = [
  {
    id: 1,
    image: img1,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    className: "avatar1",
    row: "row1",
    col: "col5"
  },
  {
    id: 2,
    image: img2,
    avatarUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f",
    className: "avatar2",
    row: "row2",
    col: "col1"
  },
  {
    id: 3,
    image: img3,
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    className: "avatar3",
    row: "row4",
    col: "col3"
  },
  {
    id: 4,
    image: img4,
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    className: "avatar4",
    row: "row5",
    col: "col4"
  },
  {
    id: 5,
    image: img5,
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    className: "avatar5",
    row: "row7",
    col: "col2"
  }
];

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
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    .avatars {
      width: 4.5rem;
      height: 4.5rem;
      padding: 0.5rem;
      border-radius: 1000px;
      background: rgba(255, 255, 255, 0.95);
      border-bottom-left-radius: 0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
      }

      @media screen and (max-width: 767px) {
        width: 3.5rem;
        height: 3.5rem;
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

    .col1, .col2, .col3, .col4, .col5, .col6 {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }

      @media screen and (max-width: 767px) {
        width: 100%;
        height: 100%;
      }

      img {
        max-width: 5rem;
        max-height: 5rem;
        object-fit: cover;
        border-radius: 8px;
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
      duration: 0.8,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

function Up() {
  const renderAvatarSection = useMemo(() => (avatarData) => {
    return avatarData.map(({ id, image, avatarUrl, className, row, col }) => (
      <motion.div
        key={id}
        variants={fadeVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={row}
      >
        <div className={col}>
          <Image
            src={image}
            alt={`Team Member ${id}`}
            priority={id === 1}
            placeholder="blur"
          />
        </div>
        <div className={`avatars ${className}`}>
          <img
            src={avatarUrl}
            alt={`Team Avatar ${id}`}
            className="avatar"
            loading="lazy"
          />
        </div>
      </motion.div>
    ));
  }, []);

  return (
    <UpContainers>
      <div className="up">
        {renderAvatarSection(avatarData)}
      </div>
    </UpContainers>
  );
}

export default React.memo(Up);
