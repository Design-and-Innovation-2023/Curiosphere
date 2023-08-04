import styled, { keyframes } from "styled-components";
import daily_comm1 from "../../assets/daily_comm1.png"
import daily_comm2 from "../../assets/daily_comm2.png"

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const ReflectionsSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;
const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Text = styled.h4`
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--nav2);
  margin-bottom: 10px;
`;

const SubText = styled.h5`
  font-size: 1rem;
  color: var(--nav2);
  margin-bottom: 10px;
  justify-content: center;
  text-align: center;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;

const Reflections = () => {
  return (
    <ReflectionsSection id="reflections">
      <Main>
        <div>
          <Title>Reflections</Title>
        </div>
        <Content>
          <Text>
            Over the past three weeks at the University of Glasgow, our experience as part of the OIP has been both enlightening and transformative. Working in a new environment and collaborating with diverse individuals has enriched our understanding of design thinking and its practical applications. Our goal was not only to create a solution but to ensure that it would have a lasting impact, benefitting other groups of designers even after our departure from Glasgow. <br /> <br />

            One of the most significant lessons we learned was the importance of building a strong team foundation. We realized that establishing internal agreements or contracts to define each member's roles and responsibilities was crucial. This clarity enabled us to function cohesively and efficiently. The team contract proved to be useful as the roles and responsibilities that are listed ensures that the team is on track and we know who to consult if we need help or clarification regarding different aspects of the project such as programming of the quiz system, Curio robot, website and crafting of the poster. <br /> <br />
            
            Furthermore, we recognized the significance of aligning our views and mental models about the project before engaging with project partners. By doing so, we were better prepared to ask pertinent questions and extract valuable insights during meetings such as what is the course content like so we can plan the computing science activities for the students accordingly, and also the difficulty of the activities that we should design.<br /> <br />

            The prototyping phase was particularly eye-opening. Experimenting with various approaches to tackle the challenge allowed us to refine our designs continually. The team initially came out of a skeleton prototype of a quiz consisting of MCQs, and then moved on to connecting to the Curio robot via web bluetooth and learning how to program it. Once we have figured out this step, we then started creating the final design following our initial protoype, thus there was continuous refinement. <br /> <br />
            
            In addition, we discovered the value of adopting the perspective of end-users during the testing phase. This shift in mindset enabled us to empathize with their needs and expectations which is to make the activities fun, leading to more user-centric solutions which is the creation of a quiz together with a race concept to keep the students engaged. Embracing external feedback such as our peers mentioning that the delay after they get an quiz question wrong is too long, and reflecting on our own experiences throughout the prototyping process proved instrumental in improving the quality of our designs.<br /> <br />

            As a team, we experienced personal growth in different aspects. We honed our brainstorming skills, generating innovative ideas and possibilities, while learning the importance of empathizing with the client's perspective to devise solutions that truly addressed their unique requirements.<br /> <br />

            Throughout our design journey, we encountered a fascinating concept called Integrative Thinking, which proved to be a valuable tool in developing our solution. Integrative thinking encourages us to combine diverse elements of our ideas in order to create a more comprehensive and innovative solution. In particular, we embraced the "double down" approach, which is about incorporating the strengths of two different models by integrating a key element from one model into another and subsequently applying this hybridized model to address the problem at hand. This concept came to the forefront when we decided to merge the concept of a maze with a racing track.<br /> <br />

            Initially, our race idea centred on the Curio bot travelling in a straight path. However, thanks to Lewis's (one of our project partners) insightful advice, we realized that we could better utilize the capabilities of the Curio bots, specifically their ability to turn both right and left relatively accurately. This realization inspired us to integrate this aspect into our racing concept.<br /> <br />

            By incorporating the Curio bots' turning abilities into the racing track, we transformed the experience into something dynamic and engaging. The track featured sections with sharp turns, where the bots could showcase their agility and decision-making skills, navigating efficiently through the challenging course. This addition not only maximized the potential of the Curio bots' features but also provided a refreshing twist to the conventional racing experience.<br /> <br />

            Our experience with Integrative Thinking has taught us the importance of exploring diverse angles and embracing creative combinations in problem-solving. It has shown us how innovation often arises from the fusion of seemingly unrelated ideas. We are incredibly grateful for this newfound understanding of Integrative Thinking and are eager to apply it in future projects, confident that it will lead to even more innovative and effective designs.<br /> <br />

            Looking back, our journey in this design-thinking course has been a rewarding one. The knowledge and skills we acquired are not confined to this particular project; they will undoubtedly shape our approach to future challenges. The emphasis on collaboration, empathy, and iterative problem-solving has left a lasting impression on us as designers.<br /> <br />

            Moving forward, we aspire to continue practising design thinking and incorporating its principles into our work. We are grateful for the opportunity to participate in this course and believe that the insights gained will prove invaluable in our academic pursuits and professional endeavours. With enthusiasm and determination, we look forward to sharing our newfound knowledge with others and making a positive impact in the world of design.
          </Text>

          <Text style={{ marginTop: '100px', marginBottom: '50px' }}>
            Next, here are some relevant links for you to explore if you wish to find out deeper about our project.
          </Text>

          <h4 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Relevant Links</h4>
          <SubText style={{ marginBottom: '20px' }}>
            To view the source code for our Curio activities and also this webpage, this is the repository: <a href="https://github.com/Design-and-Innovation-2023/Team9A"> Github Repository</a> <br /> <br />
            To view the full Team 9A Dailies forum that we had throughout the duration of this project, click <a href="/pdf/Team9A_Dailies_OIP2023.pdf" download="Team9A_Dailies_OIP2023.pdf">here</a> to download a PDF file of it. <br /> <br />
            Weekly Pitch 1: <br />
            <iframe
              width="750"
              height="400"
              src="https://www.youtube.com/embed/3Xn6O9Hdr8k"
              title="Weekly Pitch 1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <br />

            <div style={{ textAlign: 'left', marginBottom: '50px', marginTop: '25px', paddingLeft: '20px', paddingRight: '20px' }}>
              Weekly Pitch 1 was done to showcase our work throughout Week 1 of OIP2023, where we mainly discussed what we learnt from our meetings with the project partners and the prototypes we created. The initial prototype we demonstrated was the Curio robot moving based on the answers given when answering a sample MCQ, and this was done via a web bluetooth connection to bridge the gap between the web app and Curio.
            </div>

            Weekly Pitch 2: <br />
            <iframe
              width="750"
              height="400"
              src="https://www.youtube.com/embed/6u5A0mVla4s"
              title="Weekly Pitch 2"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <br />
            <div style={{ textAlign: 'left', marginTop: '25px', paddingLeft: '20px', paddingRight: '20px' }}>
              Weekly Pitch 2 was done to showcase our work throughout Week 2 of OIP2023, where we also mainly discussed what we learnt from our meetings with the project partners and the development of the prototypes we created. We introduced the battle concept through this pitch and demonstrated us testing the idea.
            </div>
          </SubText>

          <SubText style={{ marginTop: '50px' }}>
            Next, here are some snippets of the communication that we had with our project partners (Professor Jeremy and Lewis) via email:
          </SubText>
          <img src={daily_comm1} alt="Daily Comm 1" style={{ width: '70%' }} />
          <img src={daily_comm2} alt="Daily Comm 2" style={{ width: '70%', marginTop: '40px', marginBottom: '80px' }} />

          {/* <SubText>
            Next, these are results that we have gotten from the usability testing where we allowed external parties to test out our prototype:
          </SubText> */}

        </Content>
      </Main>
      <div>
        <Circle style={{ backgroundColor: "var(--purple)" }} />
        <Circle style={{ backgroundColor: "var(--pink)" }} />
        <Circle style={{ backgroundColor: "var(--black)" }} />
      </div>
    </ReflectionsSection>
  );
};

export default Reflections;
