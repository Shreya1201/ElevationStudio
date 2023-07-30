import React from "react";
import styled from "styled-components";
import ImageOne from "../images/Slider/House-1.jpg";
const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const AboutStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4;
  padding: 4rem 2rem;
  text-align: center;
  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;

    @media screen and (max-width: 855px) {
      padding-left: 1rem;
      padding-right: 2rem;
    }
  }

  img {
    padding-top: 3rem;
    width: 50%;
    height: 50%;

    @media screen and (max-width: 855px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const Quality = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4;
  padding: 1rem 2rem;
  text-align: center;
  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;

    @media screen and (max-width: 855px) {
      padding-left: 1rem;
      padding-right: 2rem;
    }
  }

  img {
    padding-top: 3rem;
    width: 50%;
    height: 50%;

    @media screen and (max-width: 855px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const Approach = styled.div`
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
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and(max-width:855px) {
  }

  img {
    padding-top: 3rem;
    width: 50%;
    height: 50%;

    @media screen and (max-width: 855px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const Founders = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 855px) {
    grid-template-columns: 1fr;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutStart>
        <h1>About Golden Bricks Studio</h1>
        <p>
          Golden Bricks Studio is a Delhi -NCR based interior architecture and
          design studio specializing in delivering meticulously tailored
          residential, commercial and hospitality projects. Our high-end design
          services are tailored to meet each client’s needs that encompass total
          turnkey solutions for our client’s homes, delivering singular and
          distinctive designs which reflect our values of thoughtful design.
        </p>
        <img src={ImageOne} alt="about" />
      </AboutStart>
      <Founders>
        <ColumnRight>
          <img src={ImageOne} alt="one" />
        </ColumnRight>
        <ColumnLeft>
          <h1>About Founders</h1>
          <p>
            We believe in good design Our passion for quality drives us to
            create innovative, unique, and more functional spaces which change
            the environment we live in. Our team is committed to meeting
            individual clients' needs, requirements, and budgets. We strive to
            break down the boundaries of standards and to use innovative and
            complex design opportunities, which means that good design is good
            business. Feel free to hire us for your next project!
          </p>
        </ColumnLeft>
      </Founders>
      <Approach>
        <ColumnLeft>
          <h1>Our Approach</h1>
          <p>
            We believe in good design Our passion for quality drives us to
            create innovative, unique, and more functional spaces which change
            the environment we live in. Our team is committed to meeting
            individual clients' needs, requirements, and budgets. We strive to
            break down the boundaries of standards and to use innovative and
            complex design opportunities, which means that good design is good
            business. Feel free to hire us for your next project!
          </p>
        </ColumnLeft>
        <ColumnRight>
          <img src={ImageOne} alt="one" />
        </ColumnRight>
      </Approach>
      <Quality>
        <h1>Our Quality Guarantee</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you. This is a great
          space to write long text about your company and your services. You can
          use this space to go into a little more detail about your company.
          Talk about your team and what services you provide. Tell your visitors
          the story of how you came up with the idea for your business and what
          makes you different from your competitors. Make your company stand out
          and show your visitors who you are. At Wix we’re passionate about
          making templates that allow you to build fabulous websites and it’s
          all thanks to the support and feedback from users like you! Keep up to
          date with New Releases and what’s Coming Soon in Wix ellaneous in
          Support. Feel free to tell us what you think and give us feedback in
          the Wix Forum. If you’d like to benefit from a professional designer’s
          touch, head to the Wix Arena and connect with one of our Wix Pro
          designers. Or if you need more help you can simply type your questions
          into the Support Forum and get instant answers. To keep up to date
          with everything Wix, including tips and things we think are cool, just
          head to the Wix Blog!
        </p>
      </Quality>
    </AboutContainer>
  );
};

export default About;
