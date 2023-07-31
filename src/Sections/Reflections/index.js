import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.png";
import human from "../../assets/human.svg";
import hand from "../../assets/hand.svg";

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
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
  margin-bottom: 10px;
`;

const SubText = styled.h5`
  font-size: 1.1rem;
  color: var(--nav2);
  margin-bottom: 10px;
  justify-content: center;
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
            Test
          </Text>
          <h4 style={{marginBottom:'15px'}}>Relevant Links</h4>
          <SubText>
            Github: <a href="https://github.com/Design-and-Innovation-2023/Team9A"> Github page</a> <br />
            Team dailies: <a href="https://oip2023.discourse.group/t/team-9a-dailies">OIP 2023 Team 9A Dailies</a> (to provide pdf link) <br />
            Weekly Pitch 1: <br />
            <iframe
            width="650"
            height="400"
            src="https://www.youtube.com/embed/3Xn6O9Hdr8k"
            title="Weekly Pitch 1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            />
            <br />
            Weekly Pitch 2: <br />
            <iframe
            width="650"
            height="400"
            src="https://www.youtube.com/embed/6u5A0mVla4s"
            title="Weekly Pitch 2"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            />
          </SubText>
        </Content>
      </Main>
    </ReflectionsSection>
  );
};

export default Reflections;