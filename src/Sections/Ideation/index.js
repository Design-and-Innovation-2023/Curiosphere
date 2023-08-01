import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import QuestionsList from "../../assets/QuestionsList.PNG"
import Prototype200723 from "../../assets/Prototype200723.png"
import Prototype240723_1 from "../../assets/Prototype240723_1.png"
import Prototype240723_2 from "../../assets/Prototype240723_2.png"
import RaceDiagram from "../../assets/RaceDiagram.PNG"
import BattleDiagram from "../../assets/BattleDiagram.PNG"
import BattleTest from "../../assets/BattleTest.png"
import race1 from "../../assets/race1.jpg"
import TextBlock from "../../components/TextBlock";

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
    width: 90%;
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

  // scrolling animation
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
              Came out with questions to ask project partners before meeting them to get a better idea of the overall project and form plans to move forward. 
            </h3>
          }
        />
        <img src={QuestionsList} alt = "Initial Questions" style={{ width: '70%' }} />
      </Content>

      <Content>
        <TextBlock
          topic="Meeting"
          title={<h1>19th July 2023</h1>}
          subText={
            <h3>
              Face to face meeting with project partners Professor Jeremy Singer and Lewis. Understood the requirements and started forming ideas to design activities for the students. <br /> Base idea was formed which is the concept of using Multiple Choice Questions (MCQs) to test the student’s knowledge in certain computing science topics.
            </h3>
          }
        />
        {/* <OBJ>
          <img src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ> */}
      </Content>

      <Content>
        <TextBlock
          topic="Prototype"
          title={<h1>20th July 2023</h1>}
          subText={
            <h3>
              Started developing a prototype consisting of a sample mcq question and 4 options.
            </h3>
          }
        />
         <img src={Prototype200723} alt = "Prototype 200723" style={{ width: '50%' }} />
        {/* <OBJ>
          <img src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ> */}
      </Content>

      <Content>
        <TextBlock
          topic="Prototype"
          title={<h1>21st July 2023</h1>}
          subText={
            <h3>
               Started learning how to program the Curio robot and managed to use code to control the robot’s movements. <br /> <br />
               Developed ideas further by coming up with a race concept for the students to take part in with the Curio robot. 
            </h3>
          }
        />
        <iframe
          width="650"
          height="400"
          src="https://youtube.com/embed/AcIjbuPOjyk"
          title="Initial Prototype"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Content>

      <Content>
        <TextBlock
          topic="Prototype"
          title={<h1>24th July 2023</h1>}
          subText={
            <h3>
              Developed more prototypes (a landing page for students to log in, and a page to select which quiz to take part in)

              Came out of ways to encourage teamwork between the students. Thus, we came up with a maze idea. Multiple students can be involved in solving the questions and figuring out which path the robot should take through the maze, allowing for more collaborative learning.
              (Can insert screenshot of sample maze)
              <br />
              <br />
              Discussions can be held after the maze is complete for reviewing purposes and ensuring that the students understand the concepts being taught.
            </h3>
          }
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img src={Prototype240723_1} alt="Prototype 240723_1" style={{ width: '70%',  marginBottom: '15px'  }} />
          <img src={Prototype240723_2} alt="Prototype 240723_2" style={{ width: '70%' }} />
        </div>
      </Content>

      <Content>
        <TextBlock
          topic="Prototype"
          title={<h1>25th July 2023</h1>}
          subText={
            <h3>
              Started solidifying ideas to discuss with Lewis and then to ultimately select 1 for the final solution.
              <br />
              <br />
              <div style={{ display: 'flex'}}>
              <div style={{ textAlign: 'center', marginRight: '50px', width:'100%' }}>
                <p style={{fontSize: '70%'}}>Race concept: Whenever student gets an answer correct, robot moves forward. Both robots will race towards the finishing line.</p>
                <img src={RaceDiagram} alt="Race Diagram" style={{ width: '100%', marginBottom: '15px' }} />
              </div>
              <div style={{ textAlign: 'center', width:'100%' }}>
                <p style={{fontSize: '70%'}}>Battle concept: Robot also moves forward when student gets correct answer, but this time the robots will be moving in opposite directions. The team which robot passes the middle line first or moves further from the starting position is the victor. </p>
                <img src={BattleDiagram} alt="Battle Diagram" style={{ width: '100%' }} />
              </div>
            </div>
            </h3>
          }
        />
      </Content>

      <Content>
        <TextBlock
          topic="Meeting"
          title={<h1>26th July 2023</h1>}
          subText={
            <h3>
             Face to face meeting with Lewis to discuss the 2 ideas. Battle idea preferred due to space constraints. Took into account Lewis’s feedback to improve the design. <br /><br />
             - test the students based on content from multiple weeks of their lesson schedule (so the quiz will contain multiple topics instead of only 1) <br />
             - consider placing obstacles in the playing area to incorporate left and right movements of the robot
            </h3>
          }
        />
      </Content>

      <Content>
        <TextBlock
          topic="Development"
          title={<h1>27th July 2023</h1>}
          subText={
            <h3>
               Continued development focusing on the battle idea.
            </h3>
          }
        />
      </Content>

      <Content>
        <TextBlock
          topic="Development and Testing"
          title={<h1>28th July 2023</h1>}
          subText={
            <h3>
              Tested out prototype by acting as students taking the quiz and participating in the battle activity.
            </h3>
          }
        />
        <img src={BattleTest} alt = "Battle Test" style={{ width: '50%' }} />
      </Content>

      <Content>
        <TextBlock
          topic="Development"
          title={<h1>1st Aug 2023</h1>}
          subText={
            <h3>
              To incorporate left and right movements of the robot, decided to implement an additional race activity where students need to navigate the race track via the Curio.
            </h3>
          }
        />
        <img src={race1} alt = "Race" style={{ width: '50%' }} />
      </Content>
      
    </IdeationSection>
  );
};

export default Ideation;
