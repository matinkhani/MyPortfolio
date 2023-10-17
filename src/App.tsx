import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, GlobalStyles } from "./Styled-Components/StyledContainer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Container>
        <Navbar />
      </Container>
    </React.Fragment>
  );
}

export default App;
