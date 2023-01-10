import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { setCurrentPage } from "../redux/slices/currentPageSlice";
import { RootState } from "../redux/store";

type NavOptionTypes = {
  width?: string;
  color?: string;
};

const UlWrapper = styled.ul`
  padding-top: 3vh;
  width: 100%;
  font-weight: bold;
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;

  @media (min-width: 450px) {
    font-size: 1em;
  }

  @media (min-width: 450px) {
    font-size: 1.1em;
  }

  @media (min-width: 600px) {
    font-size: 1.3em;
  }

  @media (min-width: 600px) {
    font-size: 1.5em;
  }

  @media (min-width: 700px) {
    padding-top: 5vh;
    font-size: 1.8em;
  }
  @media (min-width: 900px) {
    font-size: 2em;
  }

  @media (min-width: 1800px) {
    font-size: 3em;
  }
`;

const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  list-style-type: none;
  justify-content: center;
`;

const NavOption = styled.div<NavOptionTypes>`
  position: relative;
  color: #00ffaa;
  a {
    cursor: pointer;
    text-decoration: none;
    color: transparent;
    -webkit-text-stroke: 1px ${(props) => props.color};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    :hover {
      -webkit-text-stroke: 1px #05fcb2;
    }
    &::before {
      content: attr(data-text);
      position: absolute;
      color: ${(props) => props.color};
      width: ${(props) => props.width};
      transition: 0.3s;
      overflow: hidden;
      transition: 0.3s;
    }
    &:hover::before {
      width: 100%;
      color: #05fcb2;
    }
  }
`;

function Navbar() {
  const currentPage = useSelector(
    (state: RootState) => state.currentPage.current
  );
  return (
    <NavbarWrapper>
      <UlWrapper>
        <NavOption
          width={currentPage === "about" ? "100%" : "0%"}
          color={currentPage === "about" ? "#05fc74" : "white"}
        >
          <Link data-text="About" to="/">
            About
          </Link>
        </NavOption>
        <NavOption
          width={currentPage === "skills" ? "100" : "0%"}
          color={currentPage === "skills" ? "#05fc74" : "white"}
        >
          <Link data-text="Skills" to="/skills">
            Skills
          </Link>
        </NavOption>
        <NavOption
          width={currentPage === "projects" ? "100" : "0%"}
          color={currentPage === "projects" ? "#05fc74" : "white"}
        >
          <Link data-text="Projects" to="/projects">
            Projects
          </Link>
        </NavOption>
        <NavOption
          width={currentPage === "contacts" ? "100" : "0%"}
          color={currentPage === "contacts" ? "#05fc74" : "white"}
        >
          <Link data-text="Contacts" to="/contacts">
            Contacts
          </Link>
        </NavOption>
      </UlWrapper>
    </NavbarWrapper>
  );
}

export default Navbar;
