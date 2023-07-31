import styled, { keyframes } from "styled-components";
import achievement from "../../assets/achievementicon.png"

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AchievementsSection = styled.section`
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
  align-items: center; 
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

const Content = styled.div`
  display: flex;
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
`;

const AchievementIcon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 130%;
  padding-bottom: 5rem;
  margin-right: 100px;
  margin-bottom: 380px;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-left: 0.5rem;
  margin-top: 1rem;
`;

const CircleDiv = styled.div`
  margin-top: 20px;
  display: flex;
`;

const Achievements = () => {
  return (
    <AchievementsSection id="achievements">
      <Main>
        <div>
          <Title>Achievements</Title>
        </div>
        <Content>
        <AchievementIcon>
            <img src={achievement} alt="" />
        </AchievementIcon>
          <Text>
          During the past 3 weeks throughout this OIP programme, we are glad to get the chance to work and be a part of developing with a platform which is new to us, which is Curio. <br /> <br />

          We are proud to have provided a hands-on experience for students to learn more about computing science and hopefully spark an interest and ignite a passion in them. We also hope that the students can improve in their teamwork and communication skills through our activity and that they apply these skills in other aspects of their life, not only in studies. <br /> <br />

          In the beginning we were testing out the capabilities of the Curio platform via the <a href="https://trycurio.com">trycurio</a> website, and then we gradually moved on to modifying the source code to suit the project challenge. Thus, we are proud to have overcome the initial challenges of working with an unfamiliar platform and developing activities using Curio which we can call our own. <br /> <br />
          
          Lastly, we hope that our solution and ideas can be expanded further to provide better and higher quality activities for students of all experience levels.
          </Text>
        </Content>
      </Main>
      <CircleDiv>
          <Circle style={{ backgroundColor: "var(--purple)" }} />
          <Circle style={{ backgroundColor: "var(--pink)" }} />
          <Circle style={{ backgroundColor: "var(--black)" }} />
      </CircleDiv>
    </AchievementsSection>
  );
};

export default Achievements;
