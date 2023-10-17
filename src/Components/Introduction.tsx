import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IntroductionFrontend, IntroductionH1, IntroductionName, IntroductionPlace, IntroductionText, NextIcon, ReactIcon, StyledIntroduction, WavyHand } from "../Styled-Components/StyledIntroduction";

export default function Introduction() {
  return (
    <StyledIntroduction>
      <ReactIcon>
        <FaReact />
      </ReactIcon>
      <IntroductionPlace>
        <div style={{ marginBottom: 30 }}>
          <h1 style={{ display: "flex" }}>
            <IntroductionText>Hi There!</IntroductionText>
            <WavyHand>👋🏻</WavyHand>
          </h1>
        </div>
        <div style={{ display: "flex", marginBottom: 30 }}>
          <IntroductionH1>I'M</IntroductionH1>
          <IntroductionName>Matin Khani</IntroductionName>
        </div>
        <IntroductionFrontend>
          {/* <Type /> */}
        </IntroductionFrontend>
      </IntroductionPlace>
      <NextIcon>
        <SiNextdotjs />
      </NextIcon>
    </StyledIntroduction>
  );
}
