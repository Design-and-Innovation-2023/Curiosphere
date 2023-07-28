//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import ProblemStatement from "../Sections/ProblemStatement/index";
import Ideation from "../Sections/Ideation/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import Reflections from "../Sections/Reflections/index"
import Constraints from "../Sections/Constraints/index";
import Achievements from "../Sections/Achievements/index";
import Improvements from "../Sections/Improvements/index";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <ProblemStatement />
      <Ideation />
      <Reflections />
      <Achievements />
      <Constraints />
      <Improvements />
      <Testimonials />
      <Contact />
    </Container>
  );
};

export default Home;
