import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import curiologo from "../../assets/curiologo.png"

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  height: 4.5rem;
  z-index: 500;
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 55rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem; /* Add space between elements */
  @media only Screen and (max-width: 48em) {
    max-width: 100%; /* Reduce the width for smaller screen sizes */
    padding: 0 1.5rem;
    overflow-x: auto;
  }
  a {
    flex: 1; /* Make the anchor tags equally distribute the available space */
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
  }
`;

const HamburgerButtonWrapper = styled.div`
  display: inline-block;
  padding: 20px;
`;

const HamburgerBtn = styled.button`
  display: inline-block;
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2.0rem;
    height: 2.0px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;

    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden;
  position: absolute;
  width: 10rem;
  top: 50%;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(53 53 63 / 95%);
  border-radius: 20px;
  margin: 0.5rem;
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1rem;
    margin: 1rem;
    cursor: pointer;
  }
`;
const Header = () => {
  const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };

  useEffect(() => {
    const element = ref.current;

    const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "1rem 2.5rem",

        borderRadius: "0 0 50px 50px",

        border: "2px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top",
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        padding: "1.5rem 2rem",

        borderRadius: "50px",

        border: "3px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setClick(false);
      }
    };

    document.addEventListener("click", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);


  return (
    <Headers ref={ref}>
      <Logo>
        <img src={curiologo} alt="Curio Logo" />
        <div>
          <a href="#solution" onClick={(e) => scrollUp("solution", e)}>
            <h3 style={{color:'white'}}>Team9A</h3>
          </a>
        </div>
      </Logo>
      <HamburgerButtonWrapper onClick={() => setClick(!click)}>
        <HamburgerBtn clicked={click} onClick={() => setClick(!click)}>
          <span></span>
        </HamburgerBtn>
      </HamburgerButtonWrapper>
      <MobileMenu clicked={click}>
      <a href="#home" onClick={(e) => scrollUp("home", e)}>
          Home
        </a>
      <a href="#solution" onClick={(e) => scrollUp("solution", e)}>
        Solution
      </a>
        <a href="#problem" onClick={(e) => scrollUp("problem", e)}>
          Challenge
        </a>
        <a href="#ideation" onClick={(e) => scrollUp("ideation", e)}>
          Ideation
        </a>
        <a href="#reflections" onClick={(e) => scrollUp("reflections", e)}>
          Reflections
        </a>
        <a href="#achievements" onClick={(e) => scrollUp("achievements", e)}>
          Achievements
        </a>
        <a href="#constraints" onClick={(e) => scrollUp("constraints", e)}>
          Constraints
        </a>
        <a href="#improvements" onClick={(e) => scrollUp("improvements", e)}>
          Improvements
        </a>
        <a href="#us" onClick={(e) => scrollUp("us", e)}>
          About Us
        </a>
      </MobileMenu>
    </Headers>
  );
};

export default Header;
