import React from "react";
import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";

const ConstraintsSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color); /* Set your desired background color */
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

  @media only screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }

  @media only screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
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
  flex-wrap: wrap;
  max-width: 800px;
  padding: 2rem;
  font-size: 1.2rem;
  line-height: 1.5;

  @media only screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Constraints = () => {
  return (
    <ConstraintsSection id="constraints">
      {/* <Waves src={wave} alt="Waves" /> */}
      <Main>
        <div>
          <Title>Constraints</Title>
        </div>
        <Content>
          <p>
            - Given the chance to work with and understand the Curio platform: which is something new for us, so it took some time to familiarize ourselves with it
          </p>
          <p>
            - Initial race idea might not be feasible due to space constraints, thus we decided to focus more on the battle idea
          </p>
          <p>
            - Coming up with interesting activities to ensure that students with both prior or no prior experience in computing science will be engaged
          </p>
        </Content>
      </Main>
    </ConstraintsSection>
  );
};

export default Constraints;
