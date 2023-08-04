import styled, { keyframes } from "styled-components";
import improvement from "../../assets/improvement.png"

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const ImprovementsSection = styled.section`
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

const Text = styled.h4`
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--nav2);
  margin-bottom: 10px;
  display: flex;
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

const ImprovementsIcon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin-right: 40px;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Improvements = () => {
  return (
    <ImprovementsSection id="improvements">
      <Main>
        <div>
          <Title>Improvements and Future Work</Title>
        </div>

        <Content>
          <ImprovementsIcon>
            <img src={improvement} alt="" />
          </ImprovementsIcon>
          <Text>
          Establishing a feature that streamlines the process for professors to upload their customized set of questions for the quizzes.  <br /> <br />
          Implementation of communication between robots, so more types of games and mechanics can be incorporated such as those that involves attacking and defending, which will affect the health points of the robots. <br /> <br />
          </Text>
        </Content>
      </Main>
      
      <div>
          <Circle style={{ backgroundColor: "var(--purple)" }} />
          <Circle style={{ backgroundColor: "var(--pink)" }} />
          <Circle style={{ backgroundColor: "var(--black)" }} />
      </div>
    </ImprovementsSection>
  );
};

export default Improvements;
