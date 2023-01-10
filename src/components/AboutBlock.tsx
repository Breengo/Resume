import React from "react";
import styled, { keyframes } from "styled-components";
import { setCurrentPage } from "../redux/slices/currentPageSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

type LineWrapperType = {
  size?: string;
  delay?: string;
};

export const PageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const appearAnimation = keyframes`
  0%{
    width:0%;
  }
  100%{
    width:105%;
  }
`;

const TextBlock = styled.div`
  width: 80%;
  display: flex;
  list-style-type: none;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
`;

const LineWrapper = styled.h1<LineWrapperType>`
  margin: 0.2em;
  position: relative;
  color: transparent;
  font-size: ${(props) => props.size};
  &::before {
    content: attr(data-text);
    position: absolute;
    color: #ffffff;
    width: 0%;
    height: 105%;
    overflow: hidden;
    word-break: break-all;
    animation: ${appearAnimation} 0.3s linear;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay || 0};
    text-shadow: 0 0 1px #ffffff, 0px 0px 2px #ffffff, 0px 0px 4px #ffffff;
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
        <LineWrapper size="2.5em" data-text="Hello, my name is Sergey">
          Hello, my name is Sergey
        </LineWrapper>
        <LineWrapper
          delay=".8s"
          size="2.5em"
          data-text="I am Frontend-developer"
        >
          I am Frontend-developer
        </LineWrapper>
        <LineWrapper
          delay="1.6s"
          size="2.5em"
          data-text=" I am very intersted in programming"
        >
          I am very intersted in programming
        </LineWrapper>
        <LineWrapper
          delay="2.4s"
          size="2em"
          data-text="I have plans to become fullstack-developer"
        >
          I have plans to become fullstack-developer
        </LineWrapper>
      </TextBlock>
    </PageWrapper>
  );
}
