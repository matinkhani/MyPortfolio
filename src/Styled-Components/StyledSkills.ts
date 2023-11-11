import styled from "styled-components";

export const StyledSkillsContainer = styled.div`
  width: 100%;
  height: 850px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.container};

  @media screen and (min-width: 0px) and (max-width: 320px) {
    height: 400px;
  }

  @media screen and (min-width: 320px) and (max-width: 1000px) {
    height: fit-content;
  }
`;

export const StyledSkillsTEXT = styled.div`
  height: 40%;
  display: flex;
  align-items: end;
  justify-content: center;
  margin-bottom: 50px;
  
  @media screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 80px;
  }
`;

export const StyledSkillsH1 = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-size: 45px;
  display: flex;
  font-weight: bold;

  @media screen and (min-width: 0px) and (max-width: 320px) {
    font-size: 25px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const StyledSkillsDIV = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 30%;
  }
`;

export const MySkills = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    width: 90%;
    height: 70%;
  }
`;

export const SikllsDiv = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  display: grid;
  grid-template-columns: repeat(4, 180px);

  @media screen and (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(1, 180px);
  }
  @media screen and (min-width: 480px) and (max-width: 700px) {
    grid-template-columns: repeat(2, 180px);
  }
  @media screen and (min-width: 700px) and (max-width: 1000px) {
    grid-template-columns: repeat(3, 200px);
  }
  @media screen and (min-width: 1000px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 200px);
  }
`;

export const CardSkills = styled.div`
  width: 190px;
  height: 130px;
  background-color: #29263a;
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 320px) and (max-width: 1200px) {
    margin-bottom: 20px;
  }
`;

export const TextSkills = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.fontColor};
`;

export const ProfessionalText = styled.div`
  color: ${({ theme }) => theme.iconColor};
  margin-left: 8px;
  font-weight: bold;
`;

export const Skills1 = styled.div`
  color: ${({ theme }) => theme.iconColor};
  height: 60px;
  width: 60px;
  font-size: 60px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.hoverIcon};
  }

  /* @media screen and (min-width: 0px) and (max-width: 320px) {
    height: 30px;
    width: 30px;
    font-size: 30px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 40px;
    width: 40px;
    font-size: 40px;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    height: 50px;
    width: 50px;
    font-size: 50px;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 60px;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    height: 70px;
    width: 70px;
    font-size: 70px;
  }

  @media screen and (min-width: 900px) and (max-width: 1024px) {
    height: 80px;
    width: 80px;
    font-size: 80px;
  } */
`;
