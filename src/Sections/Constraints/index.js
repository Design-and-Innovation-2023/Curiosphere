import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.png";
import challenges from "../../assets/challengesicon.png"
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
// const Hand = styled.div`
//   position: absolute;
//   bottom: -1rem;
//   right: 0;

//   @media only Screen and (max-width: 40em) {
//     display: none;
//   }
// `;

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
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const ChallengesIcon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 20%;
  padding-bottom: 5rem;
  margin: 0 auto;
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

const ConstraintsText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const CircleDiv = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const ProblemStatement = () => {
  return (
    <ProblemStatementSection id="constraints">
      <Main>
        <div>
          <br />
          <br />
          <Title>Constraints and Challenges</Title>
        </div>
        <Content>
          <ConstraintsText>
            <Text>
              Given the chance to work with and understand the Curio platform: which is something new for us, so it took some time to familiarize ourselves with it.
            </Text>
            <br />
            <Text>
              Initial race idea might not be feasible due to space constraints, thus we decided to focus more on the battle idea.
            </Text>
            <br />
            <Text>
              Coming up with interesting activities to ensure that students with both prior or no prior experience in computing science will be engaged.
            </Text>
          </ConstraintsText>
          <ChallengesIcon>
            <img src={challenges} alt="" />
          </ChallengesIcon>
        </Content>
      </Main>
      
      <CircleDiv>
          <Circle style={{ backgroundColor: "var(--purple)" }} />
          <Circle style={{ backgroundColor: "var(--pink)" }} />
          <Circle style={{ backgroundColor: "var(--black)" }} />
      </CircleDiv>
    </ProblemStatementSection>
  );
};

export default ProblemStatement;
