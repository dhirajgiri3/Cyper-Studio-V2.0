import styled from 'styled-components';
import { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 35vw;
  height: 100%;
  background: #ffffffc5;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  color: var(--dark);
  transform: translateX(-100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 5rem;
  padding: 2rem 4rem;
  z-index: 1002;
  border-radius: 70%; 
  transition: all 0.3s ease-in-out;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }

  @media screen and (max-width: 767px) {
    width: 80vw; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    padding: 4rem 2rem;
  }

  .sidebar-top {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 7rem;

    @media screen and (max-width : 768px) {
      flex-direction: column-reverse;
      gap: 1rem;
    }

    .title {
      h2 {
  color: var(--para);
  font-size: var(--sm);
  font-weight: 300;
}
}
  .left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    @media screen and (max-width : 768px) {
      gap: 1.5rem;

      .links {
        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 0 2rem;
        }
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    @media screen and (max-width : 768px) {
      gap: 1.5rem;
    }

    .links {
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;

      }
    }
  }
  }

  .sidebar-bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    .top {
    p {
      font-size: var(--sm);
      color: var(--para);
    }
  }

  .bottom {
    display: flex;
    gap: 5rem;

    @media screen and (max-width : 768px) {
      gap: 1rem;
      flex-direction: column;
    }
  }
  }
`;

const TextLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  button {
    outline: 0;
    border: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 3rem;
    overflow: hidden;
    cursor: pointer;
    background: transparent;
  }

  button div {
    transform: translateY(0px);
    width: 100%;
  }

  button,
  button div {
    transition: 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  button div span {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 3rem;
  }

  button:hover div {
    transform: translateY(-3rem);
  }

  button h2 {
    font-size: var(--nm);
    font-weight: 400;
    color: var(--dark);
    transition: 1s cubic-bezier(0.16, 1, 0.3, 1);
    white-space: nowrap;
  }
  button h3 {
    font-size: var(--nm);
    font-weight: 400;
    color: var(--dark);
    transition: 1s cubic-bezier(0.16, 1, 0.3, 1);
    white-space: nowrap;
  }

  button:active {
    transform: scale(0.95);
  }

  @media screen and (max-width: 1000px) {
    button h1 {
      font-size: 2.2rem;
    }
  }
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  opacity: 0;
  z-index: 1001;
  pointer-events: none; 
  transition: opacity 0.3s ease-in-out; 
`;

export default function Sidebar({ isOpen, onClose })
{
  useEffect(() =>
  {
    const timeline = gsap.timeline({ defaults: { duration: 0.3, ease: "power1.inOut" } });

    if (isOpen)
    {
      timeline
        .to('.overlay', { opacity: 1, pointerEvents: 'auto' })
        .to('.sidebar', { x: 0, borderRadius: '0%' }, 0); // Start both animations together
    } else
    {
      timeline
        .to('.sidebar', { x: '-100%', borderRadius: '70%' })
        .to('.overlay', { opacity: 0, pointerEvents: 'none' }, 0); // Start both animations together
    }
  }, [isOpen]);

  return (
    <>
      <BackgroundOverlay className="overlay" onClick={onClose} />
      <SidebarContainer className="sidebar">
        <div className="sidebar-top">
          <div className="left">
            <div className="title">
              <h2>Socia Media</h2>
            </div>
            <div className="links">
              <ul>
                <li>
                  <TextLink href="/" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <LinkedInIcon />
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>Linkedin</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
                <li>
                  <TextLink href="/products" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <InstagramIcon />
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>Instagram</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
                <li>
                  <TextLink href="/services" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <FacebookIcon />
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>Facebook</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
                <li>
                  <TextLink href="/our-work" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <XIcon />
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>X (Twitter)</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
              </ul>

            </div>
          </div>
          <div className="right">
            <div className="title">
              <h2>Menu</h2>
            </div>
            <div className="links">
              <ul>
                <li>
                  <TextLink href="/" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <h2>Home</h2>
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>Our Story</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
                <li>
                  <TextLink href="/products" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <h2>Products</h2>
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>Explore Our Offerings</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
                <li>
                  <TextLink href="/services" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <h2>Services</h2>
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>What We Offer</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
                <li>
                  <TextLink href="/our-work" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <h2>Our Work</h2>
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>See What We’ve Done</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
                <li>
                  <TextLink href="/whats-new" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <h2>What's New</h2>
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>Latest Updates</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
                <li>
                  <TextLink href="/offers" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <h2>Offers</h2>
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>Special Deals</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>

                <li>
                  <TextLink href="/blogs" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <h2>Blogs</h2>
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>Read Our Insights</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
                <li>
                  <TextLink href="/about-us" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <h2>About Us</h2>
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>Who We Are</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
                <li>
                  <TextLink href="/careers" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <h2>Careers</h2>
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>Join Our Team</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
                <li>
                  <TextLink href="/contact-us" className="link text-link">
                    <button>
                      <div>
                        <span>
                          <h2>Contact Us</h2>
                        </span>
                      </div>
                      <div>
                        <span>
                          <h3>Get In Touch</h3>
                        </span>
                      </div>
                    </button>
                  </TextLink>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="top">
            <p>
              Get In Touch
            </p>
          </div>
          <div className="bottom">
            <div className="email">
              <li className="content__item">
                <a href="mailto:info@cyper.studio" className="link link--iocaste">
                  <span>Info@cyper.studio</span>
                  <svg className="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                    <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                  </svg>
                </a>
              </li>
            </div>
            <div className="phone">
              <li className="content__item">
                <a href="tel:+91 9904392992" className="link link--iocaste">
                  <span>+91 9904392992</span>
                  <svg className="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                    <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                  </svg>
                </a>
              </li>
            </div>
          </div>
        </div>
      </SidebarContainer >
    </>
  );
}
