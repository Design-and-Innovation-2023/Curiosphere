import styled, { keyframes } from "styled-components";
import mcq from "../../assets/mcq.PNG";
import mcq2 from "../../assets/mcq2.PNG";
import bluetooth from "../../assets/bluetooth.png";
import poster from "../../assets/poster.jpg";

const move = keyframes`
  0% { transform: translateY(-5px); }
  50% { transform: translateY(10px) translateX(10px); }
  100% { transform: translateY(-5px); }
`;

const OurSolutionSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  text-align: center;

  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Text = styled.h4`
  font-size: 1.2rem;
  line-height: 1.5;
  color: var(--nav2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;

const VideoWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const Video = styled.iframe`
  width: 100%;
  height: 400px;
`;

const OurSolution = () => {
  return (
    <OurSolutionSection id="solution">
      {/* <Waves src={wave} alt="" /> */}
      <Main>
        <div>
          <Title>Our Solution</Title>
        </div>
        <div>
          <Text>
          A Web Bluetooth connection is established between the Curio robot with our web application which allows students to complete a computing science quiz of Multiple Choice Questions (MCQs). 
          </Text>
          <br />
        <img src={bluetooth} alt="" style={{width:'800px'}} />
        </div>

        <Content>
          <VideoWrapper>
            <h2>Battle Mode</h2>
            <Video
              width="650"
              height="400"
              src="https://youtube.com/embed/QE8FCpxlIVk"
              title="Initial Prototype"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <Text>
              2 teams attempt the quiz. Every correct answer causes the robot to move forwards while the wrong answer will cause the robot to move backwards.
              <br />
              <br />
              The team whose robot passes the middle line first or travels further is the victor.
            </Text>

            <h2 style={{marginTop:'100px'}}>Race Mode</h2>
            <Video
              width="650"
              height="400"
              src="https://youtube.com/embed/PyJjwDY9jJI"
              title="Initial Prototype"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <Text>
              Students navigate a race with Curio, whenever they get a question correct they are presented with options to advance or turn the robot.
            </Text>
          </VideoWrapper>
        </Content>
        <div style={{marginTop:'100px'}}>
        <img src={mcq} alt="" style={{width:'500px'}} />
        <img src={mcq2} alt="" style={{width:'500px'}} />
        </div>
        <Text>
        An example of our web application displaying a Multiple Choice Question (MCQ) is shown above, and when students get the correct answer, they will be given movement options.
        </Text>

        <div style={{marginTop:'100px'}}>
        <h2>
          Team 9A Poster
        </h2>
        <img src={poster} alt="" style={{width:'700px'}} />
        </div>

        <div>
          <Circle style={{ backgroundColor: "var(--purple)" }} />
          <Circle style={{ backgroundColor: "var(--pink)" }} />
          <Circle style={{ backgroundColor: "var(--black)" }} />
        </div>
      </Main>
    </OurSolutionSection>
  );
};

export default OurSolution;
