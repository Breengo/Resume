import React from "react";
import styled, { keyframes } from "styled-components";
import { setCurrentPage } from "../redux/slices/currentPageSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

type LineWrapperType = {
  delay?: string;
};

export const PageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const appearAnimation = keyframes`
  0%{
    width:0%;
    height: 100%;
  }
  99%{
    height: 100%;
  }
  100%{
    width:100%;
    height:fit-content;
  }
`;

const TextBlock = styled.div`
  width: 90%;
  display: flex;
  list-style-type: none;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 0.4em;
  @media (min-width: 400px) {
    font-size: 0.6em;
  }
  @media (min-width: 500px) {
    font-size: 0.7em;
  }
  @media (min-width: 680px) {
    font-size: 1em;
  }

  @media (min-width: 1000px) {
    font-size: 1.5em;
  }

  @media (min-width: 1350px) {
    font-size: 2em;
  }
  @media (min-width: 2040px) {
    font-size: 3em;
  }
`;

const LineWrapper = styled.h1<LineWrapperType>`
  margin-top: 30px;
  position: relative;
  color: transparent;
  &::before {
    content: attr(data-text);
    position: absolute;
    color: #ffffff;
    width: 0%;
    top: 0;
    left: 0;
    overflow: hidden;
    word-break: break-all;
    animation: ${appearAnimation} 0.2s linear;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay || 0};
  }
`;

export default function AboutBlock() {
  const dispatch = useDispatch<AppDispatch>();
  React.useEffect(() => {
    dispatch(setCurrentPage("about"));
  }, []);
  return (
    <PageWrapper>
      <TextBlock>
        <LineWrapper data-text="Hello, my name is Sergey">
          Hello, my name is Sergey
        </LineWrapper>
        <LineWrapper delay=".8s" data-text="I am Frontend-developer">
          I am Frontend-developer
        </LineWrapper>
        <LineWrapper
          delay="1.6s"
          data-text=" I am very intersted in programming"
        >
          I am very intersted in programming
        </LineWrapper>
        <LineWrapper
          delay="2.4s"
          data-text="I have plans to become fullstack-developer"
        >
          I have plans to become fullstack-developer
        </LineWrapper>
      </TextBlock>
    </PageWrapper>
  );
}
