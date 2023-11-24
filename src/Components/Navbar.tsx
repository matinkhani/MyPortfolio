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
import Fade from "@mui/material/Fade";

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
    if (tabletMode >= 320 && tabletMode <= 600) {
      window.scrollTo({
        top: 758,
        behavior: "smooth",
      });
    } else {
      if (tabletMode >= 600 && tabletMode <= 800) {
        window.scrollTo({
          top: 900,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 850,
          behavior: "smooth",
        });
      }
    }
    setOpen(false);
  };

  const scrollToSkills = () => {
    if (tabletMode >= 320 && tabletMode <= 480) {
      window.scrollTo({
        top: 1730,
        behavior: "smooth",
      });
    } else {
      if (tabletMode >= 480 && tabletMode <= 600) {
        window.scrollTo({
          top: 1580,
          behavior: "smooth",
        });
      } else {
        if (tabletMode >= 600 && tabletMode <= 800) {
          window.scrollTo({
            top: 1670,
            behavior: "smooth",
          });
        } else {
          if (tabletMode >= 800 && tabletMode <= 1200) {
            window.scrollTo({
              top: 1700,
              behavior: "smooth",
            });
          } else {
            window.scrollTo({
              top: 1860,
              behavior: "smooth",
            });
          }
        }
      }
    }
    setOpen(false);
  };

  const scrollToProjects = () => {
    if (tabletMode >= 320 && tabletMode <= 480) {
      window.scrollTo({
        top: 4440,
        behavior: "smooth",
      });
    } else {
      if (tabletMode >= 480 && tabletMode <= 600) {
        window.scrollTo({
          top: 3100,
          behavior: "smooth",
        });
      } else {
        if (tabletMode >= 600 && tabletMode <= 700) {
          window.scrollTo({
            top: 3200,
            behavior: "smooth",
          });
        } else {
          if (tabletMode >= 700 && tabletMode <= 1000) {
            window.scrollTo({
              top: 2900,
              behavior: "smooth",
            });
          } else {
            if (tabletMode >= 1000 && tabletMode <= 1200) {
              window.scrollTo({
                top: 2760,
                behavior: "smooth",
              });
            } else {
              window.scrollTo({
                top: 2760,
                behavior: "smooth",
              });
            }
          }
        }
      }
    }
    setOpen(false);
  };

  const scrollToForm = () => {
    if (tabletMode >= 320 && tabletMode <= 480) {
      window.scrollTo({
        top: 5460,
        behavior: "smooth",
      });
    } else {
      if (tabletMode >= 480 && tabletMode <= 600) {
        window.scrollTo({
          top: 4150,
          behavior: "smooth",
        });
      } else {
        if (tabletMode >= 600 && tabletMode <= 700) {
          window.scrollTo({
            top: 4260,
            behavior: "smooth",
          });
        } else {
          if (tabletMode >= 700 && tabletMode <= 1000) {
            window.scrollTo({
              top: 3960,
              behavior: "smooth",
            });
          } else {
            if (tabletMode >= 1000 && tabletMode <= 1200) {
              window.scrollTo({
                top: 3800,
                behavior: "smooth",
              });
            } else {
              window.scrollTo({
                top: 3750,
                behavior: "smooth",
              });
            }
          }
        }
      }
    }
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
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
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
