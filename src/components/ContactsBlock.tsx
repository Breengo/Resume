import React from "react";
import styled, { keyframes } from "styled-components";
import { setCurrentPage } from "../redux/slices/currentPageSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { PageWrapper } from "./AboutBlock";

import tgSVG from "../assets/telegram.svg";
import emailSVG from "../assets/email.svg";
import gitSVG from "../assets/github.svg";

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
  padding: 0.5em;
  border-radius: 15px;
  margin: 1rem;
  color: white;
  display: flex;
  align-items: center;
  img {
    height: 60px;
  }
  animation: ${(props) =>
      props.animation === 1 ? appearAnimation : appearAnimation2}
    linear 0.1s;
  &:hover {
    background: linear-gradient(33deg, #1bec79ae, #15fdeab7);
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
      </LinksWrapper>
    </PageWrapper>
  );
}
