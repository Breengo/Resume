import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutBlock from "./components/AboutBlock";
import SkillsBlock from "./components/SkillsBlock";
import ProjectsBlock from "./components/ProjectsBlock";
import ContactsBlock from "./components/ContactsBlock";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  color: white;
  background-color: #1d1b1b;
`;

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutBlock />} />
        <Route path="/skills" element={<SkillsBlock />} />
        <Route path="/projects" element={<ProjectsBlock />} />
        <Route path="/contacts" element={<ContactsBlock />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
