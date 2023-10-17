import {
  MySkills,
  ProfessionalText,
  StyledSkillsContainer,
  StyledSkillsDIV,
  StyledSkillsH1,
  StyledSkillsTEXT,
} from "../Styled-Components/StyledSkills";
import MapSkills from "./MapSkills";

export default function Skills() {
  return (
    <StyledSkillsContainer>
      <StyledSkillsTEXT>
        <StyledSkillsH1>
          Professional <ProfessionalText>Skillset</ProfessionalText>
        </StyledSkillsH1>
      </StyledSkillsTEXT>
      <StyledSkillsDIV>
        <MySkills>
          <MapSkills />
        </MySkills>
      </StyledSkillsDIV>
    </StyledSkillsContainer>
  );
}
