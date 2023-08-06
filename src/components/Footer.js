import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { menuData } from "../data/MenuData";

const FooterContainer = styled.div`
  background: #000d1a;
  color: #fff;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 855px) {
    grid-template-columns: 1fr;
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;

  h1 {
    font-size: 40px;
  }

  @media screen and (max-width: 855px) {
    grid-template-columns: 1fr;
    h1 {
      font-size: 30px;
    }
  }
`;

const FooterRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  @media screen and (max-width: 855px) {
    margin-left: none;
  }
`;

const Socials = styled(Link)`
  &:hover {
    color: #cd853f;
    transform: translateY(-2px);
  }
`;

const Instagran = styled(SlSocialInstagram)`
  margin: 20px;
  color: white;
  height: 40px;
  width: 30px;
  @media screen and (max-width: 855px) {
    height: 15px;
    width: 15px;
  }
`;

const Twitter = styled(SlSocialTwitter)`
  margin: 20px;
  color: white;
  height: 40px;
  width: 30px;
  @media screen and (max-width: 855px) {
    height: 15px;
    width: 15px;
  }
`;

const Gmail = styled(SiGmail)`
  margin: 20px;
  color: white;
  height: 40px;
  width: 30px;
  @media screen and (max-width: 855px) {
    height: 15px;
    width: 15px;
  }
`;

const LinkedIn = styled(SiLinkedin)`
  margin: 20px;
  color: white;
  height: 40px;
  width: 30px;
  @media screen and (max-width: 855px) {
    height: 15px;
    width: 15px;
  }
`;

const Map = styled(FaMapMarkerAlt)`
  margin: 20px;
  color: white;
  height: 35px;
  width: 30px;
  @media screen and (max-width: 855px) {
    height: 15px;
    width: 15px;
  }
`;

const Foot = styled.div`
  background: #000d1a;
  color: #fff;
  padding: 3rem;
  display: flex;
  grid-template-columns: 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 855px) {
    grid-template-columns: 1fr;
  }
`;
const Nmenu = styled.div``;

const NavMenu = styled.div`
  align-items: center;
  margin-left: 90vh;
  margin-top: 2vh;
  @media screen and (max-width: 855px) {
    display: none;
  }
`;

const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  hover: #cd853f;
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  &:hover {
    color: #cd853f;
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Foot>
      <FooterContainer>
        <FooterLeft>
          <h1>
            Let's Design <br />
            Your Future Home
          </h1>
          <Button
            onClick={handleLinkClick}
            to="/contact"
            primary="true"
            css={`
              max-width: 160px;
            `}
          >
            Contact Us
            <Arrow />
          </Button>
        </FooterLeft>
        <FooterRight>
          <Socials to="https://instagram.com/goldenbricksstudio.gbs">
            <Instagran />
          </Socials>
          <Socials to="/">
            <Twitter />
          </Socials>
          <Socials to="/">
            <Gmail />
          </Socials>
          <Socials to="/">
            <LinkedIn />
          </Socials>
          <Socials to="https://www.google.com/maps/place/Sector+60,+Noida,+Uttar+Pradesh+201301/@28.6024018,77.3621961,16z/data=!3m1!4b1!4m6!3m5!1s0x390ce57029dfe9c1:0x24c49100744d251!8m2!3d28.6024748!4d77.3676142!16s%2Fg%2F1tznkr0b?entry=ttu">
            <Map />
          </Socials>
        </FooterRight>
      </FooterContainer>
      <Nmenu>
        <NavMenu>
          {menuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index} onClick={handleLinkClick}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
      </Nmenu>
    </Foot>
  );
};

export default Footer;
