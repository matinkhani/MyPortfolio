import React, { useState } from "react";
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
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { ContactMePlace, ContactMeText } from "../Styled-Components/StyledNavbar";
import { MySocialAccounts, SocialAcountsText, StyledModal } from "../Styled-Components/StyledModal";
import copy from "clipboard-copy";
import { BiLogoTelegram } from "react-icons/bi";

export default function ContactModal() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const textToCopy = "ghkhanimatin@gmail.com";

  const handleCopy = () => {
    copy(textToCopy);
    setOpen2(true);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen2(false);
  };

  const IconsTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <div>
      <ContactMePlace onClick={handleOpen}>
        <AlternateEmailIcon style={{ height: 22, width: 30 }} />
        <ContactMeText>Contact Me</ContactMeText>
      </ContactMePlace>
      <Modal
        style={{ backdropFilter: "blur(5px)" }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <StyledModal>
            <MySocialAccounts>My Social Acounts</MySocialAccounts>
            <MySocialAccounts>
              <GitHubIcon style={{ height: 22, width: 30, marginRight: 4 }} />
              <SocialAcountsText>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://github.com/matinkhani"
                  target="_blank"
                >
                  Github
                </a>
              </SocialAcountsText>
            </MySocialAccounts>
            <MySocialAccounts>
              <LinkedInIcon style={{ height: 22, width: 30, marginRight: 4 }} />
              <SocialAcountsText>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="http://linkedin.com/in/matin-khani-89286b29b"
                  target="_blank"
                >
                  Linkedin
                </a>
              </SocialAcountsText>
            </MySocialAccounts>
            <MySocialAccounts>
              <EmailIcon style={{ height: 22, width: 30, marginRight: 4 }} />
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <div>
                  <IconsTooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open2}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Email copied!"
                  >
                    <SocialAcountsText
                      style={{ cursor: "pointer" }}
                      onClick={handleCopy}
                    >
                      {textToCopy}
                    </SocialAcountsText>
                  </IconsTooltip>
                </div>
              </ClickAwayListener>
            </MySocialAccounts>
            <MySocialAccounts>
              <InstagramIcon
                style={{ height: 22, width: 30, marginRight: 4 }}
              />
              <SocialAcountsText>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://instagram.com/mtinkhni?utm_source=qr&igshid=OGIxMTE0OTdkZA=="
                  target="_blank"
                >
                  Instagram
                </a>
              </SocialAcountsText>
            </MySocialAccounts>
            <MySocialAccounts>
              <BiLogoTelegram
                style={{ height: 22, width: 30, marginRight: 4 }}
              />
              <SocialAcountsText>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://t.me/mtinkhni"
                  target="_blank"
                >
                  Telegram
                </a>
              </SocialAcountsText>
            </MySocialAccounts>
            <MySocialAccounts>
              <SocialAcountsText
                onClick={handleClose}
                style={{ color: "red", cursor: "pointer" }}
              >
                Close
              </SocialAcountsText>
            </MySocialAccounts>
          </StyledModal>
        </Fade>
      </Modal>
    </div>
  );
}
