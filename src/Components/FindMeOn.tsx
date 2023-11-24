import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { ConnectSpan, FindMeContainer, FindMeIcons, FindMeOnH1, FindMeP, IconsContainer } from "../Styled-Components/StyledFindMe";

export default function FindMeOn() {
  return (
    <FindMeContainer>
      <FindMeOnH1>
        <h1>FIND ME ON</h1>
      </FindMeOnH1>
      <FindMeP>
        <p>
          Feel free to <ConnectSpan>connect </ConnectSpan>with me
        </p>
      </FindMeP>
      <FindMeIcons>
        <IconsContainer>
          <div>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://github.com/matinkhani"
              target="_blank"
            >
              <AiFillGithub
                style={{ color: "#700c86", height: 40, width: 40 }}
              />
            </a>
          </div>
          <div>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="http://linkedin.com/in/matin-khani-89286b29b"
              target="_blank"
            >
              <FaLinkedinIn
                style={{ color: "#700c86", height: 40, width: 40 }}
              />
            </a>
          </div>
          <div>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://instagram.com/mtinkhni?utm_source=qr&igshid=OGIxMTE0OTdkZA=="
              target="_blank"
            >
              <AiFillInstagram
                style={{ color: "#700c86", height: 40, width: 40 }}
              />
            </a>
          </div>
          <div>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://t.me/mtinkhni"
              target="_blank"
            >
              <BiLogoTelegram
                style={{ color: "#700c86", height: 40, width: 40 }}
              />
            </a>
          </div>
        </IconsContainer>
      </FindMeIcons>
    </FindMeContainer>
  );
}
