import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, GlobalStyles } from "./Styled-Components/StyledContainer";
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";
import AboutMe from "./Components/AboutMe";
import { rootTypes, store } from "./Context/Store";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Theme/theme";

function App() {
  const { changeTheme } = useContext(store) as rootTypes;

  return (
    <ThemeProvider theme={changeTheme ? lightTheme : darkTheme}>
      <React.Fragment>
        <GlobalStyles />
        <Container>
          <Navbar />
          <Introduction />
          <AboutMe />
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
