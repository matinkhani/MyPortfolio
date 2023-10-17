import React from "react";
import { NavTabs, ScrollTabs, StyledNavbar } from "../Styled-Components/StyledNavbar";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const tabletMode = window.innerWidth;

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    if (tabletMode >= 480 && tabletMode <= 600) {
      window.scrollTo({
        top: 758,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 850,
        behavior: "smooth",
      });
    }
  };

  const scrollToSkills = () => {
    window.scrollTo({
      top: 1860,
      behavior: "smooth",
    });
  };

  const scrollToProjecrs = () => {
    window.scrollTo({
      top: 2650,
      behavior: "smooth",
    });
  };

  const scrollToForm = () => {
    window.scrollTo({
      top: 3400,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      <StyledNavbar>
        <ContactModal />
        <ScrollTabs>
          <NavTabs onClick={scrollToHome}>Home</NavTabs>
          <NavTabs onClick={scrollToAbout}>About</NavTabs>
          <NavTabs onClick={scrollToSkills}>Skills</NavTabs>
          <NavTabs onClick={scrollToProjecrs}>Projects</NavTabs>
          <NavTabs onClick={scrollToForm}>Form</NavTabs>
          <div></div>
          <div></div>
          <div></div>
        </ScrollTabs>
        {/* <ChangeTheme /> */}
      </StyledNavbar>
    </React.Fragment>
  );
}
