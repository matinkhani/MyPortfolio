import React from "react";
import {
  MenuPlace,
  NavTabs,
  ScrollTabs,
  StyledModal2,
  StyledNavbar,
  TabsPlaceMobile,
} from "../Styled-Components/StyledNavbar";
import ContactModal from "./ContactModal";
import { HiMenu } from "react-icons/hi";

import { useState } from "react";
import Modal from "@mui/material/Modal";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled } from "@mui/material/styles";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Avatar from "@mui/material/Avatar";
import {
  ContactMePlace,
  ContactMeText,
} from "../Styled-Components/StyledNavbar";
import {
  MySocialAccounts,
  SocialAcountsText,
  StyledModal,
} from "../Styled-Components/StyledModal";
import copy from "clipboard-copy";
import { BiLogoTelegram } from "react-icons/bi";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tabletMode = window.innerWidth;

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false);
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
    setOpen(false);
  };

  const scrollToSkills = () => {
    window.scrollTo({
      top: 1860,
      behavior: "smooth",
    });
    setOpen(false);
  };

  const scrollToProjects = () => {
    window.scrollTo({
      top: 2760,
      behavior: "smooth",
    });
    setOpen(false);
  };

  const scrollToForm = () => {
    window.scrollTo({
      top: 3750,
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <React.Fragment>
      <StyledNavbar>
        <ContactModal />
        <ScrollTabs>
          <NavTabs onClick={scrollToHome}>Home</NavTabs>
          <NavTabs onClick={scrollToAbout}>About</NavTabs>
          <NavTabs onClick={scrollToSkills}>Skills</NavTabs>
          <NavTabs onClick={scrollToProjects}>Projects</NavTabs>
          <NavTabs onClick={scrollToForm}>Form</NavTabs>
        </ScrollTabs>
        <MenuPlace>
          <HiMenu onClick={handleOpen} style={{ height: 30, width: 30 }} />
        </MenuPlace>
        <Modal
          // style={{ backdropFilter: "blur(5px)" }}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          // slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <StyledModal2>
              <TabsPlaceMobile>
                <NavTabs onClick={scrollToHome}>Home</NavTabs>
                <NavTabs onClick={scrollToAbout}>About</NavTabs>
                <NavTabs onClick={scrollToSkills}>Skills</NavTabs>
                <NavTabs onClick={scrollToProjects}>Projects</NavTabs>
                <NavTabs onClick={scrollToForm}>Form</NavTabs>
              </TabsPlaceMobile>
            </StyledModal2>
          </Fade>
        </Modal>
      </StyledNavbar>
    </React.Fragment>
  );
}
