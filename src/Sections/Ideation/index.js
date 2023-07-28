import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tube from "../../assets/3dtube.png";
import QuestionsList from "../../assets/QuestionsList.PNG"
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";

import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

// const TextBlock = lazy(() => import("../../components/TextBlock"));
// const SvgBlock = lazy(() => import("../../components/SvgBlock"));

const IdeationSection = styled.section`
  width: 100vw;
  /* background-color: #0a0b10; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: -1;
  background-color: #0a0b10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  /* margin-bottom: 10rem; */
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */

  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const Ideation = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const element = ref.current;
    ////
    const mq = window.matchMedia("(max-width: 48em)");
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("ideation"),

        start: "top top+=180",

        end: "bottom bottom",

        pin: element,
        pinReparent: true,
      },
    });
    t1.fromTo(
      document.getElementById("line"),

      {
        height: "15rem",
      },
      {
        height: "3rem",
        duration: 2,
        scrollTrigger: {
          trigger: document.getElementById("line"),
          start: "top top+=200",
          end: "bottom top+=220",
          scrub: true,
        },
      }
    );

    revealRefs.current.forEach((el, index) => {
      // console.log(el.childNodes);
      if (mq.matches) {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=200",
              end: "bottom bottom-=100",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=300",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      } else {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=200",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return (
    <IdeationSection id="ideation">
      <Background ref={ref}>
        <Title className="title">Ideation Process and Prototypes Built</Title>
        <Line id="line" />
        <Triangle id="triangle" />
      </Background>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Brainstorm"
          title={<h1>18th July 2023</h1>}
          subText={
            <h3>
              Came out with questions to ask project partners before meeting them to get a better idea of the overall project. 
            </h3>
          }
        />
        <SvgBlock svg="Design.svg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Meeting"
          title={<h1>19th July 2023</h1>}
          subText={
            <h4>
              Face to face meeting with project partners Professor Jeremy Singer and Lewis. Understood the requirements and started forming ideas to design activities for the students. Base idea was formed which is the concept of using Multiple Choice Questions (MCQs) to test the student’s knowledge in certain computing science topics.
            </h4>
          }
        />
        {/* <OBJ>
          <img src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ> */}
        <SvgBlock svg="Develope.svg" />
      </Content>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Prototype"
          title={<h1>20th July 2023</h1>}
          subText={
            <h4>
              Started developing a prototype consisting of a sample mcq question and 4 options.
            </h4>
          }
        />
        {/* <OBJ>
          <img src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ> */}
        <SvgBlock svg="Support.svg" />
      </Content>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Prototype"
          title={<h1>21st July 2023</h1>}
          subText={
            <h4>
               Started learning how to program the Curio robot and managed to use code to control the robot’s movements.
            </h4>
          }
        />
        <SvgBlock svg="Support.svg" />
      </Content>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Prototype"
          title={<h1>24th July 2023</h1>}
          subText={
            <h4>
              Developed more prototypes (a landing page for students to log in, and a page to select which quiz to take part in)

              Came out of ways to encourage teamwork between the students. Thus, we came up with a maze idea. Multiple students can be involved in solving the questions and figuring out which path the robot should take through the maze, allowing for more collaborative learning.
              (Can insert screenshot of sample maze)

              Discussions can be held after the maze is complete for reviewing purposes and ensuring that the students understand the concepts being taught.
            </h4>
          }
        />
        <SvgBlock svg="Support.svg" />
      </Content>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Prototype"
          title={<h1>25th July 2023</h1>}
          subText={
            <h3>
              Started solidifying ideas to discuss with Lewis and then to ultimately select 1 for the final solution. 

              2 ideas to select from: Race concept (refer to 210723) and a battle concept.
              (Insert pics and vids to explain the 2 ideas)
            </h3>
          }
        />
        <SvgBlock svg="Support.svg" />
      </Content>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Meeting"
          title={<h1>26th July 2023</h1>}
          subText={
            <h3>
             Face to face meeting with Lewis to discuss the 2 ideas. Battle idea preferred due to space constraints. Took into account Lewis’s feedback to improve the design:
             - test the students based on content from multiple weeks of their lesson schedule (so the quiz will contain multiple topics instead of only 1)
             - consider placing obstacles in the playing area to incorporate left and right movements of the robot
            </h3>
          }
        />
        <SvgBlock svg="Support.svg" />
      </Content>
      
    </IdeationSection>
  );
};

export default Ideation;
