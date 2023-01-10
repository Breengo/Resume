import React from "react";
import styled, { keyframes } from "styled-components";
import { setCurrentPage } from "../redux/slices/currentPageSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { PageWrapper } from "./AboutBlock";

import tgSVG from "../assets/telegram.svg";
import emailSVG from "../assets/email.svg";
import gitSVG from "../assets/github.svg";
import linkedinSVG from "../assets/linkedin.svg";

type LinkProps = {
  animation?: number;
};

const appearAnimation = keyframes`
  0%{
    transform: translate(100px,0px);
  }

  100%{
    transform: translate(0px,0px);
  }
`;

const appearAnimation2 = keyframes`
  0%{
    transform: translate(-100px,0px);
  }

  100%{
    transform: translate(0px,0px);
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkContainer = styled.a<LinkProps>`
  text-decoration: none;
  background: linear-gradient(33deg, #1bec7986, #15fdea90);
  padding: 1em;
  border-radius: 15px;
  margin: 1rem;
  color: white;
  display: flex;
  align-items: center;
  box-shadow: inset 0px 0px 5px #00ffaa, inset 5px 5px 10px #00ffaa,
    inset 0px 0px 50px #00ffaa, 0 0 20px #00ffaa, 5px 5px 20px #00ffaa;
  img {
    @media (min-width: 600px) {
      height: 60px;
    }
    height: 32px;
    margin-right: 0.5em;
  }
  animation: ${(props) =>
      props.animation === 1 ? appearAnimation : appearAnimation2}
    linear 0.1s;
  &:hover {
    background: linear-gradient(33deg, #1bec79ae, #15fdeab7);
  }
  @media (min-width: 700px) {
    h1 {
      font-size: 3em;
    }
  }
  @media (min-width: 500px) {
    h1 {
      font-size: 2em;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1em;
    }
  }
`;

export default function ContactsBlock() {
  const dispatch = useDispatch<AppDispatch>();
  React.useEffect(() => {
    dispatch(setCurrentPage("contacts"));
  }, []);
  return (
    <PageWrapper>
      <LinksWrapper>
        <LinkContainer
          rel="noopener noreferrer"
          target="_blank"
          href="https://t.me/Breengo"
          animation={1}
        >
          <img src={tgSVG} alt="error" />
          <h1>t.me/Breengo</h1>
        </LinkContainer>
        <LinkContainer
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:knepfyr@gmail.com"
        >
          <img src={emailSVG} alt="error" />
          <h1>knepfyr@gmail.com</h1>
        </LinkContainer>
        <LinkContainer
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Breengo"
          animation={1}
        >
          <img src={gitSVG} alt="error" />
          <h1>github.com/Breengo</h1>
        </LinkContainer>
        <LinkContainer
          rel="noopener noreferrer"
          target="_blank"
          href="https://linkedin.com/in/breengo"
        >
          <img src={linkedinSVG} alt="error" />
          <h1>linkedin.com/in/breengo</h1>
        </LinkContainer>
      </LinksWrapper>
    </PageWrapper>
  );
}
