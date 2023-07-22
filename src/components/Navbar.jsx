import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import McdoImage from "../assets/mcdonalds.png";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  min-height: 10vh;
  background-color: #eeeeee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #222831;
    display: flex;
    align-items: center;
  }
`;

const AppleImg = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 10vh;
    right: 2rem;
    width: 150px;
    background-color: #eeeeee;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    z-index: 1;
    margin: 0;
  }
`;

const NavItem = styled.li`
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: #222831;
    font-weight: bold;

    @media (max-width: 768px) {
      text-align: center;
      width: 100%;
      padding: 0.5rem 0;
      display: block;
    }

    &.active {
      color: #00adb5;
    }
  }

  @media (min-width: 768px) {
    margin-left: 2rem;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 5px;
  }
`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Logo>
          <Link to="/">
            <AppleImg src={McdoImage} alt="Apple" />
          </Link>
        </Logo>

        <NavItems open={mobileMenuOpen}>
          <NavItem>
            <NavLink
              to="/"
              activeclassname="active"
              exact={true}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/about"
              activeclassname="active"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/contact"
              activeclassname="active"
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavItems>

        <HamburgerMenu onClick={handleMenuToggle}>
          <LunchDiningOutlinedIcon />
        </HamburgerMenu>
      </Container>
    </>
  );
};

export default Navbar;
