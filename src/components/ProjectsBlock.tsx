import React from "react";
import styled, { keyframes } from "styled-components";
import { setCurrentPage } from "../redux/slices/currentPageSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

const appearAnimation = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

const textAppearAnimation = keyframes`
  0%{
    opacity:0;
  }

  70%{
    opacity:0;
  }

  100%{
    opacity:1;
  }
`;

const PageWrapper = styled.div`
  width: 100%;

  @media (min-width: 1000px) {
    padding-top: 2%;
  }
  @media (min-width: 1400px) {
    height: 90vh;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ProjectContainer = styled.a`
  position: relative;
  border-radius: 10px;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  margin: 3%;
  padding: 3%;
  @media (min-width: 1900px) {
    width: 50vh;
  }
  width: 85vh;
  height: 50vh;
  box-shadow: inset 0px 0px 20px #00ffaa, inset 5px 5px 20px #00ffaa,
    inset 20px 20px 200px #00ffaa, 0 0 20px #00ffaa, 5px 5px 40px #00ffaa;
  background: linear-gradient(60deg, #0cfa4779, #10f3cd79);
  transition: 0.5s;
  animation: ${appearAnimation} 0.3s linear;
  overflow: hidden;
  &:hover {
    scale: 1.2;
  }
  h1 {
    text-align: center;
    font-size: 2em;
    @media (min-width: 650px) {
      font-size: 3em;
    }
    height: 15%;
    margin: 1% 0 1% 0;
    animation: ${textAppearAnimation} 0.5s linear;
  }
  h2 {
    @media (min-width: 650px) {
      font-size: 2em;
    }
    font-size: 1.5em;
    height: 60%;
    margin: 2%;
    animation: ${textAppearAnimation} 0.5s linear;
  }
  h3 {
    text-align: center;
    font-size: 2em;
    @media (min-width: 650px) {
      font-size: 3em;
    }
    height: 10%;
    margin: 1% 0 1% 0;
    animation: ${textAppearAnimation} 0.5s linear;
  }
`;

export default function ProjectsBlock() {
  const dispatch = useDispatch<AppDispatch>();
  React.useEffect(() => {
    dispatch(setCurrentPage("projects"));
  }, []);
  return (
    <PageWrapper>
      <ProjectContainer
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Breengo/CinemaProject"
      >
        <h1>Online cinema</h1>
        <h2>
          A website for watching movies, TV series and cartoons. The site has
          functionality for registering and authorizing users, searching for the
          desired content using the search bar or by category. For the
          administrator, it is possible to upload new content to the site.
        </h2>
        <h3>Click to view it on GitHub</h3>
      </ProjectContainer>
      <ProjectContainer
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Breengo/Videohosting"
      >
        <h1>Videohosting</h1>
        <h2>
          A YouTube clone. There is a functionality for registration, uploading
          videos to the site, likes, subscriptions, lazy uploading of videos
          from the server is implemented on the home page.
        </h2>
        <h3>Click to view it on GitHub</h3>
      </ProjectContainer>
    </PageWrapper>
  );
}
