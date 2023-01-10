import React from "react";
import styled, { keyframes } from "styled-components";
import { setCurrentPage } from "../redux/slices/currentPageSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { PageWrapper } from "./AboutBlock";

type SkillBlockType = {
  delay?: string;
};

const lightAnimation = keyframes`
  0%{
    opacity:1;
  }
  100%{
    opacity:0;
  }
`;

const blurAnimation = keyframes`
  0%{
    filter:blur(50px);
    scale: 0.5;
    transform: translate(0,300px);
  }
  40%{
    transform: translate(0,-150px) rotate(90deg);
  }
  60%{
    transform: translate(0,50px) rotate(-60deg);
  }
  80%{
    transform: translate(0,-20px) rotate(30deg);
  }
  90%{
    transform: translate(0,10px) rotate(-10deg);
  }
  100%{
    filter:blur(0px);
    transform: translate(0,0);
    scale:1;
  }
`;

const SkillBlock = styled.div<SkillBlockType>`
  margin: 2%;
  border-radius: 10px;
  transform: translate(0, 800px);
  position: relative;
  padding: 1%;
  display: flex;
  list-style-type: none;
  flex-direction: column;
  animation: ${blurAnimation} 0.4s ease-in;
  animation-delay: ${(props) => props.delay || 0};
  background-color: #00ffaa1c;
  box-shadow: inset 0px 0px 20px #00ffaa, inset 5px 5px 20px #00ffaa,
    inset 20px 20px 200px #00ffaa, 0 0 20px #00ffaa, 5px 5px 40px #00ffaa;
  animation-fill-mode: forwards;
  z-index: 2;
  width: 20%;
  height: 40%;
  h1 {
    text-align: center;
    font-size: 3em;
    text-shadow: 0 0 1px #ffffff, 0px 0px 2px #ffffff, 0px 0px 4px #ffffff;
  }
  h2 {
    margin: 0.2em;
    font-size: 2em;
    letter-spacing: 0.1em;
    color: #ffffff;
  }

  &::before {
    border-radius: 10px;
    content: "";
    width: 100%;
    height: 100%;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(50px);
    background-color: white;
    animation: ${lightAnimation} linear 1s;
    animation-delay: ${(props) => props.delay || 0};
    animation-fill-mode: forwards;
  }
`;

export default function SkillsBlock() {
  const dispatch = useDispatch<AppDispatch>();
  React.useEffect(() => {
    dispatch(setCurrentPage("skills"));
  }, []);
  return (
    <PageWrapper>
      <SkillBlock>
        <h1>Styling</h1>
        <h2>HTML</h2>
        <h2>CSS</h2>
        <h2>SCSS</h2>
        <h2>Tailwind</h2>
        <h2>Styled Components</h2>
      </SkillBlock>
      <SkillBlock delay="0.1s">
        <h1>Frontend</h1>
        <h2>JavaScript</h2>
        <h2>TypeScript</h2>
        <h2>Axios</h2>
        <h2>React</h2>
        <h2>Redux</h2>
      </SkillBlock>
      <SkillBlock delay="0.2s">
        <h1>Backend</h1>
        <h2>NodeJS</h2>
        <h2>PostgreSQL</h2>
        <h2>MongoDB</h2>
        <h2>Express</h2>
        <h2>JWT</h2>
      </SkillBlock>
      <SkillBlock delay="0.3s">
        <h1>General</h1>
        <h2>Docker</h2>
        <h2>npm</h2>
        <h2>git</h2>
        <h2>HTTP/HTTPS</h2>
        <h2>English B1</h2>
      </SkillBlock>
    </PageWrapper>
  );
}
