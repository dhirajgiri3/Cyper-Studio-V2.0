import Link from 'next/link';
import styled from 'styled-components';
import "./Header.css"
import logo from "@/public/Assets/Image/cyper-logo/cyper-dark-logo.png"
import Image from 'next/image';
import { useState } from 'react';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 1.5rem;
  background: #ffffffbb;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter : blur(20px);
  color: var(--light);
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  width: 90vw;
  align-self: center;
  border-radius: 10rem;

  @media screen and (max-width: 767px) {
    padding: .2rem .7rem;
  }
`;

const Logo = styled(Image)`
 height: 3rem;
 width: 3rem;
 object-fit: contain;
`;

const Menu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    display: none; /* Hide menu on mobile */
  }
`;

const MenuItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: var(--dark);
  font-size: var(--nm);
  font-family: "sf";
  &:hover {
    color: var(--primary);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 767px) {
    gap: 1rem;
  }
`;

const BarContainer = styled.div`
  .bar {
    position: relative;
    z-index: 1002;

    label {
      z-index: 1002;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 0.3rem;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      border: 2px solid var(--dark);
      outline: none;
      position: relative;
    }

    label::before,
    label::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      transform: scale(0);
      background: var(--primary);
      border-radius: 50%;
      transition: all 0.5s ease-in-out;
      z-index: -1;
    }

    .line {
      fill: none;
      stroke: var(--dark);
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 3;
      transition: stroke-dasharray 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
      transition-delay: 1s;
    }

    .line-top-bottom {
      stroke-dasharray: 12 63;
      stroke-dashoffset: 0;
    }

    label::before {
      width: 100%;
      height: 100%;
    }

    label::after {
      width: 100%;
      height: 100%;
    }

    label:hover::before,
    label:hover::after {
      transform: scale(1);
    }

    label:hover {
      transform: scale(1.1);
      border: 2px solid var(--primary);

      .line {
        stroke: var(--light);
      }
    }

    .hamburger {
      cursor: pointer;
    }

    .hamburger input {
      display: none;
    }

    .hamburger svg {
      height: 1.6rem;
      transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);

      @media screen and (max-width: 767px) {
        height: 1.7rem;
      }

      @media screen and (max-width: 350px) {
        height: 1.5rem;
      }
    }


    .hamburger input:checked + svg {
      transform: rotate(-45deg);
    }

    .hamburger input:checked + svg .line-top-bottom {
      stroke-dasharray: 20 300;
      stroke-dashoffset: -32.42;
    }
  }
`;

export default function Header({ onToggleSidebar, isChecked }) {
  return (
    <HeaderContainer>
      <Link href="/">
        <Logo src={logo} />
      </Link>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
      <ButtonContainer>
        <li className="content__item">
          <a href="#" className="link link--iocaste">
            <span>Get Started</span>
            <svg className="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
            </svg>
          </a>
        </li>

        <BarContainer>
          <div className="bar">
            <label className="hamburger">
              <input 
                type="checkbox" 
                checked={isChecked}
                onChange={onToggleSidebar}
              />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </BarContainer>
      </ButtonContainer>
    </HeaderContainer>
  );
}
