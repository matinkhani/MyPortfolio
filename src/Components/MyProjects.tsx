import { AiFillGithub } from "react-icons/ai";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { IoLogoVercel } from "react-icons/io5";
import {
  DownContainer,
  Explain,
  LinkDiv,
  LinksPlace,
  ProjectsContainer,
  TextProjects,
  Title,
  TopContainer,
  WeatherAppContainer,
  WeatherAppDivLinks,
  WeatherAppTextDiv,
  WeatherAppTextDiv2,
} from "../Styled-Components/StyledProjects";

export default function MyProjects() {
  return (
    <ProjectsContainer>
      <TopContainer>
        <TextProjects>My Projects</TextProjects>
      </TopContainer>
      <DownContainer>
        <WeatherAppContainer>
          <WeatherAppTextDiv />
          <WeatherAppDivLinks>
            <Title>Weather App</Title>
            <Explain>
              This is my first project that worked with API and <br /> it shows
              the weather well and the background <br /> changes depending on
              weather the city is day <br /> or night.
            </Explain>
            <LinksPlace>
              <LinkDiv>
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    textAlign: "center",
                  }}
                  target="_blank"
                  href="https://github.com/matinkhani/Weather-App"
                >
                  <AiFillGithub style={{ height: 25, width: 25 }} />
                  <div>Open in GitHub</div>
                </a>
              </LinkDiv>
              <LinkDiv>
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    textAlign: "center",
                  }}
                  target="_blank"
                  href="https://codesandbox.io/p/github/matinkhani/Weather-App/main?file=/src/Weather-App/weatherApp.tsx:1,1&workspaceId=096b045d-559d-4b18-8483-bd1c41d354a6"
                >
                  <AiFillCodeSandboxCircle style={{ height: 25, width: 25 }} />
                  <div>Open in SandBox</div>
                </a>
              </LinkDiv>
            </LinksPlace>
          </WeatherAppDivLinks>
        </WeatherAppContainer>

        <WeatherAppContainer>
          <WeatherAppTextDiv2></WeatherAppTextDiv2>
          <WeatherAppDivLinks>
            <Title>Bebinim</Title>
            <Explain>
              I implemented this project using Next.js and TypeScript. <br />
              Styled Components is used for styling. <br />
              Redux Toolkit played a crucial role in state management.
            </Explain>
            <LinksPlace>
              <LinkDiv>
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    textAlign: "center",
                  }}
                  target="_blank"
                  href="https://github.com/matinkhani/Bebinim"
                >
                  <AiFillGithub style={{ height: 25, width: 25 }} />
                  <div>Open in GitHub</div>
                </a>
              </LinkDiv>

              <LinkDiv>
                <a
                  style={{
                    textDecoration: "none",
                    color: "white",
                    textAlign: "center",
                  }}
                  target="_blank"
                  href="https://bebinim.vercel.app"
                >
                  <IoLogoVercel style={{ height: 25, width: 25 }} />
                  <div>Open in Vercel</div>
                </a>
              </LinkDiv>
            </LinksPlace>
          </WeatherAppDivLinks>
        </WeatherAppContainer>
      </DownContainer>
    </ProjectsContainer>
  );
}
