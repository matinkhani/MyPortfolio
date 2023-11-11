import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typewriter from "typewriter-effect";
import { AboutContainer, AboutTextH1, AboutTextH2, AboutTextPlace, IMH1 } from "../Styled-Components/StyledAbout";

export default function AboutMe() {
  return (
    <AboutContainer>
      <AboutTextPlace>
        <AboutTextH1>
          Know Who <IMH1>I'M</IMH1>
        </AboutTextH1>
        <AboutTextH2>
          Hi Everyone, I am <strong style={{ color: "#cd5ff8" }}>Matin</strong>{" "}
          <strong style={{ color: "#cd5ff8" }}>Khani</strong> from{" "}
          <strong style={{ color: "#cd5ff8" }}>Tehran, Iran.</strong>
          <br />I have the ability to work with React JS and <br /> Next JS and
          most React libraries. <br />
          I spent six months learning React JS at Makeen Academy.
          <br />
          In these 6 months, I learned to solve the challenges <br /> that arise
          by searching well.
        </AboutTextH2>
      </AboutTextPlace>
    </AboutContainer>
  );
}
