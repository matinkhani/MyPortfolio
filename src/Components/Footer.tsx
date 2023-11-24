import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import {
  CopyRightDiv,
  FooterContainer,
  FooterIcons,
  Icons,
  NoneDiv,
} from "../Styled-Components/StyledFooter";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <FooterContainer>
      <NoneDiv></NoneDiv>
      <CopyRightDiv>
        <h3>Copyright © {year} Matin Khani</h3>
      </CopyRightDiv>
      <FooterIcons>
        <Icons>
          <div>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://github.com/matinkhani"
              target="_blank"
            >
              <AiFillGithub style={{ height: 20, width: 20 }} />
            </a>
          </div>
          <div>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="http://linkedin.com/in/matin-khani-89286b29b"
              target="_blank"
            >
              <FaLinkedinIn style={{ height: 20, width: 20 }} />
            </a>
          </div>
          <div>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://instagram.com/mtinkhni?utm_source=qr&igshid=OGIxMTE0OTdkZA=="
              target="_blank"
            >
              <AiFillInstagram style={{ height: 20, width: 20 }} />
            </a>
          </div>
          <div>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://t.me/mtinkhni"
              target="_blank"
            >
              <BiLogoTelegram style={{ height: 20, width: 20 }} />
            </a>
          </div>
        </Icons>
      </FooterIcons>
    </FooterContainer>
  );
}
