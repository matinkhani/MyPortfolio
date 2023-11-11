import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiJss } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoPwa } from "react-icons/io5";
import { BsGit } from "react-icons/bs";
import { SiAxios } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import {
  CardSkills,
  SikllsDiv,
  Skills1,
  TextSkills,
} from "../Styled-Components/StyledSkills";

export default function MapSkills() {
  return (
    <>
      <SikllsDiv>
        <CardSkills>
          <Skills1>
            <AiFillHtml5 />
          </Skills1>
          <TextSkills>HTML</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <FaCss3 />
          </Skills1>
          <TextSkills>CSS</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <SiJavascript />
          </Skills1>
          <TextSkills>JavaScript</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <FaReact />
          </Skills1>
          <TextSkills>React Js</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <FaBootstrap />
          </Skills1>
          <TextSkills>Bootstrap</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <SiTypescript />
          </Skills1>
          <TextSkills>TypeScript</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <SiRedux />
          </Skills1>
          <TextSkills>Redux - Redux Toolkit</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <SiNextdotjs />
          </Skills1>
          <TextSkills>Next Js</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <BsGit />
          </Skills1>
          <TextSkills>Git - GitHub</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <SiAxios />
          </Skills1>
          <TextSkills>Axios</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <IoLogoPwa />
          </Skills1>
          <TextSkills>Progressive Web App</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <SiMui />
          </Skills1>
          <TextSkills>Materia UI</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <SiStyledcomponents />
          </Skills1>
          <TextSkills>Styled Components</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <SiTailwindcss />
          </Skills1>
          <TextSkills>Tailwind css</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <SiJss />
          </Skills1>
          <TextSkills>Jss</TextSkills>
        </CardSkills>
        <CardSkills>
          <Skills1>
            <FaSass />
          </Skills1>
          <TextSkills>Sass</TextSkills>
        </CardSkills>
      </SikllsDiv>
    </>
  );
}
