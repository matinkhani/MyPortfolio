import { AiFillGithub } from "react-icons/ai";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
import {
  DivGitHub,
  DivSandBox,
  DownContainer,
  ProjectsContainer,
  ScreenShotDiv,
  TextProjects,
  TopContainer,
  WeatherAppContainer,
  WeatherAppDivLinks,
  WeatherAppGitHub,
  WeatherAppGitHubDown,
  WeatherAppGitHubUp,
  WeatherAppSandBox,
  WeatherAppSandBoxUp,
  WeatherAppSandboxDown,
  WeatherAppTextDiv,
} from "../Styled-Components/StyledProjects";
import ScShotModal from "./ScreenShotModal";

export default function MyProjects() {
  return (
    <ProjectsContainer>
      <TopContainer>
        <TextProjects>My Projects</TextProjects>
      </TopContainer>
      <DownContainer>
        <WeatherAppContainer>
          <WeatherAppTextDiv>
            <h2>Weather App</h2>
            <TiWeatherCloudy style={{ height: 30, width: 30, marginLeft: 5 }} />
          </WeatherAppTextDiv>
          <WeatherAppDivLinks>
            <WeatherAppGitHub>
              <WeatherAppGitHubUp>
                <h3>Open in GitHub</h3>
              </WeatherAppGitHubUp>
              <WeatherAppGitHubDown>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  href="https://github.com/matinkhani/Weather-App"
                >
                  <DivGitHub>
                    <AiFillGithub style={{ height: 50, width: 50 }} />
                  </DivGitHub>
                </a>
              </WeatherAppGitHubDown>
            </WeatherAppGitHub>
            <WeatherAppSandBox>
              <WeatherAppSandBoxUp>
                <h3>Open in SandBox</h3>
              </WeatherAppSandBoxUp>
              <WeatherAppSandboxDown>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  target="_blank"
                  href="https://codesandbox.io/p/github/matinkhani/Weather-App/main?file=/src/Weather-App/weatherApp.tsx:1,1&workspaceId=096b045d-559d-4b18-8483-bd1c41d354a6"
                >
                  <DivSandBox>
                    <AiFillCodeSandboxCircle
                      style={{ height: 50, width: 50 }}
                    />
                  </DivSandBox>
                </a>
              </WeatherAppSandboxDown>
            </WeatherAppSandBox>
          </WeatherAppDivLinks>
          <ScreenShotDiv>
            <ScShotModal />
          </ScreenShotDiv>
        </WeatherAppContainer>
      </DownContainer>
    </ProjectsContainer>
  );
}
