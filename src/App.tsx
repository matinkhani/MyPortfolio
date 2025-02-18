import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, GlobalStyles } from "./Styled-Components/StyledContainer";
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";
import AboutMe from "./Components/AboutMe";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Theme/theme";
import Skills from "./Components/Skills";
import EmptyDiv from "./Components/EmptyDiv";
import MyProjects from "./Components/MyProjects";
import ContactForm from "./Components/ContactForm";
import FindMeOn from "./Components/FindMeOn";
import Footer from "./Components/Footer";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <React.Fragment>
        <GlobalStyles />
        <Container>
          <Navbar />
          <Introduction />
          <AboutMe />
          <Skills />
          <EmptyDiv />
          <MyProjects />
          <EmptyDiv />
          <ContactForm />
          <FindMeOn />
          <Footer />
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
