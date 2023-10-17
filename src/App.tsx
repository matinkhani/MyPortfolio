import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, GlobalStyles } from "./Styled-Components/StyledContainer";
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Introduction />
        <AboutMe />
      </Container>
    </React.Fragment>
  );
}

export default App;
