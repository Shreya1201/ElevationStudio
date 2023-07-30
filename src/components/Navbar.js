import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo-removebg.png";
const Nav = styled.nav`
  background: ${({ navbar }) => (navbar ? "white" : "transparent")};
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  &:active {
    background: white;
  }
`;

const NavLink = css`
  color: #000d1a;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  hover: #cd853f;
`;

const Logo = styled(Link)`
  ${NavLink}
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 855px) {
    display: block;
    background-size: 60px;
    height: 40px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 855px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  &:hover {
    color: #cd853f;
    transform: translateY(-2px);
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 855px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navbar, setnavbar] = useState(false);
  const changebg = () => {
    if (window.scrollY >= 80) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changebg);
    return () => {
      window.removeEventListener("scroll", changebg);
    };
  }, []);

  return (
    <Nav navbar={navbar}>
      <Logo src={logo} to="/">
        AB ARCHI STUDIO
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
