import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.png";
import problemstatementimg from "../../assets/problemstatementimg.png"
import human from "../../assets/human.svg";
import hand from "../../assets/hand.svg";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const ProblemStatementSection = styled.section`
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
  display: inline-block;
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
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const ProblemStatementImg = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 30%;
  margin: 0 auto;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: 1.3rem;
  line-height: 1.5;
  color: var(--nav2);
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

const ProblemStatementText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const ProblemStatement = () => {
  return (
    <ProblemStatementSection id="problem">
      {/* <Waves src={wave} alt="" /> */}
      <Main>
        <div>
          <br />
          <br />
          <Title>Problem Statement</Title>
          <CurvedLine />
        </div>
        <Content>
          <ProblemStatementImg>
            <img src={problemstatementimg} alt="" width="400" height="400" />
          </ProblemStatementImg>
          <ProblemStatementText>
            <Human>
              <img src={human} alt="" width="400" height="400" />
            </Human>

            <Text>
            To foster the development of a computational mindset among pre-university students with prior or no prior experience, we get to make use of the Curio platform and robot to design interesting activities for students to learn about computing science at University of Glasgow. The objective is to provide the students with a structured and engaging learning experience that encourages the cultivation of computational thinking skills and interest in the realm of computing science.
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </ProblemStatementText>
        </Content>
      </Main>
    </ProblemStatementSection>
  );
};

export default ProblemStatement;
