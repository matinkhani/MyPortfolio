import {
  AboutContainer,
  AboutTextH1,
  AboutTextH2,
  AboutTextPlace,
  IMH1,
} from "../Styled-Components/StyledAbout";

export default function AboutMe() {
  return (
    <AboutContainer>
      <AboutTextPlace>
        <AboutTextH1>
          Know Who <IMH1>I AM</IMH1>
        </AboutTextH1>
        <AboutTextH2>
          Hi Everyone, I am <strong style={{ color: "#cd5ff8" }}>Matin</strong>{" "}
          <strong style={{ color: "#cd5ff8" }}>Khani</strong> from{" "}
          <strong style={{ color: "#cd5ff8" }}>Tehran, Iran.</strong>
          <br /> I'm 20 years old, on a journey of continuous learning, <br />{" "}
          and I thrive in diverse team environments. <br /> While I may not know
          everything, I'm always eager to tackle <br /> various challenges for
          my personal growth. <br />
          Embracing the unknown, I am committed to overcoming <br /> obstacles and
          contributing my best to any team I join.
        </AboutTextH2>
      </AboutTextPlace>
    </AboutContainer>
  );
}
