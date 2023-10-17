import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.container};
`;

export const TopContainer = styled.div`
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextProjects = styled.h1`
  color: ${({ theme }) => theme.fontColor};
`;

export const DownContainer = styled.div`
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WeatherAppTextDiv = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.cardColor};
`;

export const WeatherAppDivLinks = styled.div`
  height: 60%;
  display: flex;
`;

export const WeatherAppGitHub = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const WeatherAppGitHubUp = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.cardColor};

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const WeatherAppGitHubDown = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WeatherAppSandBox = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const WeatherAppSandBoxUp = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.cardColor};

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const WeatherAppSandboxDown = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivGitHub = styled.div`
  color: ${({ theme }) => theme.cardColor};
`;

export const DivSandBox = styled.div`
  color: ${({ theme }) => theme.cardColor};
`;

export const ScreenShotDiv = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.cardColor};
`;

export const WeatherAppContainer = styled.div`
  width: 25%;
  height: 80%;
  background-color: ${({ theme }) => theme.iconColor};
  color: ${({ theme }) => theme.cardColor};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;

  @media screen and (min-width: 0px) and (max-width: 480px) {
    width: 90%;
  }

  @media screen and (min-width: 480px) and (max-width: 600px) {
    width: 80%;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    width: 60%;
  }
`;
