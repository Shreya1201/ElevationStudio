import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import ImageOne from "../images/Slider/House-1.jpg";
import ImageTwo from "../images/Slider/House-2.jpg";
import ImageThree from "../images/Slider/House-3.jpg";
import { IoMdArrowRoundForward } from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  margin-top: 20vw;
  @media screen and (max-width: 855px) {
    margin-top: 10vw;
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const Container = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 855px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 855px) {
    margin: 10 rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 855px) {
      width: 90%;
      height: 90%;
      margin: 1vh;
    }
  }
`;

const Container2 = styled.div`
  padding: 0rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  text-align: center;
  @media screen and (max-width: 855px) {
    grid-template-columns: 1fr;
  }
`;

const Containerheading = styled.div`
  padding-top: 6rem;
  padding-bottom: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 855px) {
    grid-template-columns: 1fr;
  }
`;

const ContainerGrid = styled.div`
  display: flex;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 855px) {
    grid-template-columns: 1fr;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  justify-content: center;

  h1 {
    color: #cd853f;
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);

    @media screen and (max-width: 855px) {
      font-size: 20px; /* Adjust font size for smaller screens */
    }
  }
  h3 {
    color: #cd853f;
  }
  p {
    padding-bottom: 10px;
  }

  line-height: 1.4;
  padding: 1rem 2rem;
  @media screen and (max-width: 855px) {
    padding: 1rem; /* Adjust padding for smaller screens */
  }
`;

const ServiceGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-evenly;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 855px) {
    grid-template-columns: 1fr;
  }
`;

const SGrid = styled.div`
  color: #cd853f;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 855px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  text-align: center;

  @media screen and (max-width: 855px) {
    padding: 3rem;
  }
`;

const Iconleft = styled(ImQuotesLeft)`
  height: 40px;
  width: 30px;

  @media screen and (max-width: 855px) {
    height: 30px; /* Adjust icon size for smaller screens */
    width: 25px;
  }
`;

const Iconright = styled(ImQuotesRight)`
  height: 40px;
  width: 30px;
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  Image,
}) => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/about" primary="true" onClick={handleLinkClick}>
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={Image} alt="home" />
        </ColumnRight>
      </Container>
      <Container2>
        <Containerheading>
          <h1>Why Choose Us</h1>
        </Containerheading>
        <ContainerGrid>
          <Grid>
            <h1>One Stop Solution</h1>
            <p>
              Taking responsibility for all Architecture & Interior services,
              maintaining a single point of contact for the project duration.
            </p>
          </Grid>
          <Grid>
            <h1>Pleasantly Affordable</h1>
            <p>
              Understanding your needs & providing innovative solutions within
              your budget.
            </p>
          </Grid>
          <Grid>
            <h1>Personal attention from start to end</h1>
            <p>
              Well-planned schedule, customized design details and guidance with
              regular site visits.
            </p>
          </Grid>
          <Grid>
            <h1>Hassel Free Process</h1>
            <p>
              Well-planned process, and high-quality resources to deliver
              hassle-free services.
            </p>
          </Grid>
        </ContainerGrid>
      </Container2>
      <Container2>
        <Containerheading>
          <h1>Some of Our Services Include</h1>
        </Containerheading>
        <ServiceGrid>
          <SGrid>
            <h1>Detailed Estimation</h1>
          </SGrid>
          <SGrid>
            <h1>3D Design Services</h1>
          </SGrid>
          <SGrid>
            <h1>Interior Design</h1>
          </SGrid>
        </ServiceGrid>
        <Btn>
          <Button to="/services" primary="true" onClick={handleLinkClick}>
            See All Services
            <Arrow />
          </Button>
        </Btn>
      </Container2>
      <Container2>
        <Containerheading>
          <h1>Our Satisfied Clients</h1>
        </Containerheading>
        <ContainerGrid>
          <Grid>
            <Iconleft />
            <p>
              I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.” Dave
              Reddington
            </p>
            {/*<Iconright />*/}
            <h3>Rajiv</h3>
          </Grid>
          <Grid>
            <Iconleft />
            <p>
              I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.” Dave
              Reddington
            </p>
            {/*<Iconright />*/}
            <h3>Rajiv</h3>
          </Grid>
          <Grid>
            <Iconleft />
            <p>
              I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.” Dave
              Reddington
            </p>
            {/*<Iconright />*/}
            <h3>Rajiv</h3>
          </Grid>
        </ContainerGrid>
      </Container2>
    </Section>
  );
};

export default InfoSection;
