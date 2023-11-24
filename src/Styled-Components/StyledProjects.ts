import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.container};
`;

export const TopContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media screen and (min-width: 320px) and (max-width: 1040px) {
    align-items: center;
  }
`;

export const TextProjects = styled.h1`
  color: ${({ theme }) => theme.fontColor};
`;

export const DownContainer = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  width: 100%;

  @media screen and (max-width: 1040px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const WeatherAppTextDiv = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.cardColor};
  background-image: url("../Images/Screenshot2.png");
  background-size: cover;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-position: 50% 50%;
`;

export const WeatherAppTextDiv2 = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.cardColor};
  background-image: url("../Images/bebinimSC.jpeg");
  background-size: cover;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-position: 50% 0%;
`;

export const WeatherAppDivLinks = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Title = styled.div`
  height: 20%;
  width: 95%;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 20px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 16px;
    height: 15%;
  }

  @media screen and (min-width: 480px) and (max-width: 1040px) {
    font-size: 18px;
  }
`;

export const Explain = styled.div`
  height: 45%;
  width: 95%;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  line-height: 25px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
    height: 50%;
  }
  @media screen and (min-width: 480px) and (max-width: 1040px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const LinksPlace = styled.div`
  height: 35%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  width: fit-content;
  padding-inline: 10px;
  background-color: #181727;
  border-radius: 8px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 35%;
    font-size: 12px;
    justify-content: center;
  }

  @media screen and (min-width: 480px) and (max-width: 1040px) {
    width: 35%;
    font-size: 14px;
    justify-content: center;
  }
`;

export const WeatherAppContainer = styled.div`
  width: 450px;
  height: 480px;
  background-color: #29263a;
  color: ${({ theme }) => theme.cardColor};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;

  @media screen and (min-width: 0px) and (max-width: 480px) {
    width: 280px;
  }
`;
